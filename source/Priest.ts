import { ActionData, DeathData, EvalData, GameResponseData, NotThereData } from "./definitions/adventureland-server.js"
import { Constants } from "./Constants.js"
import { PingCompensatedCharacter } from "./PingCompensatedCharacter.js"

export class Priest extends PingCompensatedCharacter {
    ctype: "priest" = "priest"

    public async absorbSins(target: string): Promise<void> {
        if (!this.ready) throw new Error("We aren't ready yet [absorbSins].")
        const absorbed = new Promise<void>((resolve, reject) => {
            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]absorb['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.off("eval", cooldownCheck)
                    resolve()
                }
            }

            setTimeout(() => {
                this.socket.off("eval", cooldownCheck)
                reject(`curse timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("eval", cooldownCheck)
        })

        this.socket.emit("skill", { id: target, name: "absorb" })
        return absorbed
    }

    public async curse(target: string): Promise<void> {
        if (!this.ready) throw new Error("We aren't ready yet [curse].")
        const curseStarted = new Promise<void>((resolve, reject) => {
            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]curse['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.off("eval", cooldownCheck)
                    resolve()
                }
            }

            setTimeout(() => {
                this.socket.off("eval", cooldownCheck)
                reject(`curse timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("eval", cooldownCheck)
        })

        this.socket.emit("skill", { id: target, name: "curse" })
        return curseStarted
    }

    public async darkBlessing(): Promise<void> {
        if (!this.ready) throw new Error("We aren't ready yet [darkBlessing].")
        const darkBlessed = new Promise<void>((resolve, reject) => {
            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]darkblessing['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.off("eval", cooldownCheck)
                    resolve()
                }
            }

            setTimeout(() => {
                this.socket.off("eval", cooldownCheck)
                reject(`darkblessing timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("eval", cooldownCheck)
        })

        this.socket.emit("skill", { name: "darkblessing" })
        return darkBlessed
    }

    public async heal(id: string): Promise<string> {
        if (!this.ready) throw new Error("We aren't ready yet [heal].")
        // if (!this.game.entities.has(id) && !this.game.players.has(id)) throw new Error(`No Entity with ID '${id}'`)
        const healStarted = new Promise<string>((resolve, reject) => {
            const deathCheck = (data: DeathData) => {
                if (data.id == id) {
                    this.socket.off("action", attackCheck)
                    this.socket.off("game_response", failCheck)
                    this.socket.off("notthere", failCheck2)
                    this.socket.off("death", deathCheck)
                    reject(`Entity ${id} not found`)
                }
            }
            const failCheck = (data: GameResponseData) => {
                if (typeof data == "object") {
                    if (data.response == "disabled") {
                        this.socket.off("action", attackCheck)
                        this.socket.off("game_response", failCheck)
                        this.socket.off("notthere", failCheck2)
                        this.socket.off("death", deathCheck)
                        reject(`Heal on ${id} failed (disabled).`)
                    } else if (data.response == "attack_failed" && data.id == id) {
                        this.socket.off("action", attackCheck)
                        this.socket.off("game_response", failCheck)
                        this.socket.off("notthere", failCheck2)
                        this.socket.off("death", deathCheck)
                        reject(`Heal on ${id} failed.`)
                    } else if (data.response == "too_far" && data.id == id) {
                        this.socket.off("action", attackCheck)
                        this.socket.off("game_response", failCheck)
                        this.socket.off("notthere", failCheck2)
                        this.socket.off("death", deathCheck)
                        reject(`${id} is too far away to heal (dist: ${data.dist}).`)
                    } else if (data.response == "cooldown" && data.id == id) {
                        this.socket.off("action", attackCheck)
                        this.socket.off("game_response", failCheck)
                        this.socket.off("notthere", failCheck2)
                        this.socket.off("death", deathCheck)
                        reject(`Heal on ${id} failed due to cooldown (ms: ${data.ms}).`)
                    }
                }
            }
            const failCheck2 = (data: NotThereData) => {
                if (data.place == "attack") {
                    this.socket.off("action", attackCheck)
                    this.socket.off("game_response", failCheck)
                    this.socket.off("notthere", failCheck2)
                    this.socket.off("death", deathCheck)
                    reject(`${id} could not be found to attack.`)
                }
            }
            const attackCheck = (data: ActionData) => {
                if (data.attacker == this.id && data.target == id && data.type == "heal") {
                    this.socket.off("action", attackCheck)
                    this.socket.off("game_response", failCheck)
                    this.socket.off("notthere", failCheck2)
                    this.socket.off("death", deathCheck)
                    resolve(data.pid)
                }
            }
            setTimeout(() => {
                this.socket.off("action", attackCheck)
                this.socket.off("game_response", failCheck)
                this.socket.off("notthere", failCheck2)
                this.socket.off("death", deathCheck)
                reject(`heal timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("action", attackCheck)
            this.socket.on("game_response", failCheck)
            this.socket.on("notthere", failCheck2)
            this.socket.on("death", deathCheck)
        })

        this.socket.emit("heal", { id: id })
        return healStarted
    }

    public async partyHeal(): Promise<void> {
        if (!this.ready) throw new Error("We aren't ready yet [partyHeal].")
        const healStarted = new Promise<void>((resolve, reject) => {
            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]partyheal['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.off("eval", cooldownCheck)
                    resolve()
                }
            }

            setTimeout(() => {
                this.socket.off("eval", cooldownCheck)
                reject(`partyHeal timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("eval", cooldownCheck)
        })

        this.socket.emit("skill", { name: "partyheal" })
        return healStarted
    }

    // NOTE: Untested. We might need to increase the timeout?
    public async revive(target: string, essenceOfLife = this.locateItem("essenceoflife")): Promise<void> {
        if (!this.ready) throw new Error("We aren't ready yet [revive].")
        if (essenceOfLife === undefined) throw new Error("We don't have any essenceoflife in our inventory.")

        const revived = new Promise<void>((resolve, reject) => {
            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]revive['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.off("eval", cooldownCheck)
                    resolve()
                }
            }

            setTimeout(() => {
                this.socket.off("eval", cooldownCheck)
                reject(`revive timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("eval", cooldownCheck)
        })

        this.socket.emit("skill", { id: target, name: "revive", num: essenceOfLife })
        return revived
    }
}
