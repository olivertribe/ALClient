import { GData } from "./adventureland-data"

/**
 * The following is from http://adventure.land/data.js, version 700 (2021-11-13)
 * It is used to confirm type correctness
 */

test("G.skills type validation", async () => {
    const G_skills: Pick<GData, "skills"> = {
        "skills": {
            "3shot": {
                "class": [
                    "ranger"
                ],
                "cooldown_multiplier": 1,
                "damage_multiplier": 0.7,
                "damage_type": "physical",
                "explanation": "Hits 3 targets at once! Deals 0.7X damage to each target.",
                "hostile": true,
                "level": 60,
                "mp": 300,
                "multi": true,
                "name": "3-Shot",
                "pierces_immunity": true,
                "procs": true,
                "share": "attack",
                "skin": "skill_3shot",
                "type": "skill",
                "wtype": [
                    "bow",
                    "crossbow"
                ]
            },
            "4fingers": {
                "class": [
                    "ranger"
                ],
                "condition": "fingered",
                "cooldown": 40000,
                "duration": 5000,
                "explanation": "Use the ancient arts to send the target to a deep meditation state. Just several taps to key chakra points does the job!",
                "hostile": true,
                "level": 64,
                "monsters": false,
                "mp": 260,
                "name": "4 Finger Technique",
                "range": 120,
                "skin": "skill_4fingers",
                "target": true,
                "type": "skill"
            },
            "5shot": {
                "class": [
                    "ranger"
                ],
                "cooldown_multiplier": 1,
                "damage_multiplier": 0.5,
                "damage_type": "physical",
                "explanation": "Hits 5 targets at once! Deals 0.5X damage to each target.",
                "hostile": true,
                "level": 75,
                "mp": 420,
                "multi": true,
                "name": "5-Shot",
                "pierces_immunity": true,
                "procs": true,
                "share": "attack",
                "skin": "skill_5shot",
                "type": "skill",
                "wtype": [
                    "bow",
                    "crossbow"
                ]
            },
            "absorb": {
                "class": [
                    "priest"
                ],
                "cooldown": 400,
                "explanation": "Pulls all targets from a friendly character.",
                "level": 55,
                "mp": 200,
                "name": "Absorb Sins",
                "range": 240,
                "skin": "skill_absorbsins",
                "target": true,
                "type": "skill"
            },
            "agitate": {
                "class": [
                    "warrior"
                ],
                "cooldown": 2200,
                "explanation": "Taunts all nearby monsters.",
                "hostile": true,
                "level": 68,
                "mp": 420,
                "name": "Agitate",
                "range": 320,
                "skin": "skill_agitate",
                "type": "skill"
            },
            "alchemy": {
                "action": "rate",
                "class": [
                    "mage"
                ],
                "cooldown": 8000,
                "explanation": "Dangerous skill, use with caution! Converts your firstfound item into pure gold!",
                "level": 40,
                "levels": [
                    [
                        40,
                        0.8
                    ],
                    [
                        50,
                        0.86
                    ],
                    [
                        60,
                        0.92
                    ],
                    [
                        70,
                        1
                    ],
                    [
                        80,
                        1.1
                    ],
                    [
                        90,
                        1.16
                    ],
                    [
                        100,
                        1.2
                    ]
                ],
                "mp": 347,
                "name": "Alchemy",
                "output": 0.8,
                "party": true,
                "skin": "skill_alchemy",
                "type": "skill",
                "variance": 0.2
            },
            "anger": {
                "explanation": "Randomly targets someone",
                "hostile": true,
                "name": "Anger",
                "type": "monster"
            },
            "attack": {
                "explanation": "Attack the target",
                "hostile": true,
                "name": "Attack",
                "pierces_immunity": true,
                "procs": true,
                "projectile": "momentum",
                "skin": "attack",
                "target": true,
                "type": "ability",
                "use_range": true
            },
            "blink": {
                "class": [
                    "mage"
                ],
                "cooldown": 1200,
                "explanation": "Teleport to a nearby location.",
                "mp": 1600,
                "name": "Blink",
                "skin": "skill_blink",
                "type": "skill"
            },
            "burst": {
                "class": [
                    "mage"
                ],
                "cooldown": 6000,
                "damage_type": "pure",
                "explanation": "Converts your entire mana pool to pure damage. Deals 0.555 pure damage for each MP.",
                "hostile": true,
                "mp": 0,
                "name": "Mana Burst",
                "projectile": "burst",
                "ratio": 0.555,
                "skin": "skill_burst",
                "target": true,
                "type": "skill",
                "use_range": true
            },
            "cburst": {
                "class": [
                    "mage"
                ],
                "cooldown": 240,
                "damage_type": "magical",
                "explanation": "A skill for experienced mages. Allows you to control and channel your most powerful ability.",
                "hostile": true,
                "level": 75,
                "list": true,
                "mp": 80,
                "name": "Controlled Mana Burst",
                "projectile": "burst",
                "ratio": 0.5,
                "skin": "skill_cburst",
                "type": "skill",
                "use_range": true
            },
            "charge": {
                "class": [
                    "warrior"
                ],
                "condition": "charging",
                "cooldown": 40000,
                "duration": 3200,
                "explanation": "Gain 30 Speed for a short duration.",
                "mp": 0,
                "name": "Charge",
                "skin": "skill_charge",
                "type": "skill"
            },
            "charm": {
                "condition": "charmed",
                "cooldown": 60000,
                "duration": 30000,
                "explanation": "Charm a monster [%]",
                "hostile": true,
                "mp": 40,
                "name": "Charm",
                "skin": "charmer",
                "slot": [
                    [
                        "orb",
                        "charmer"
                    ]
                ],
                "target": true,
                "type": "skill"
            },
            "cleave": {
                "class": [
                    "warrior"
                ],
                "cooldown": 1200,
                "damage_type": "physical",
                "explanation": "Swing your axe in a flurry to damage all enemies nearby!",
                "hostile": true,
                "level": 52,
                "mp": 720,
                "name": "Cleave",
                "pierces_immunity": true,
                "procs": true,
                "range": 160,
                "skin": "skill_cleave",
                "type": "skill",
                "wtype": [
                    "axe",
                    "scythe"
                ]
            },
            "curse": {
                "class": [
                    "priest"
                ],
                "condition": "cursed",
                "cooldown": 5000,
                "damage_type": "magical",
                "duration": 5000,
                "explanation": "Cursed opponents receive 20% more damage, deal 20% less damage and they slow down by 20.",
                "hostile": true,
                "mp": 400,
                "name": "Curse",
                "projectile": "curse",
                "skin": "skill_curse",
                "target": true,
                "type": "skill"
            },
            "curse_aura": {
                "aura": true,
                "condition": "cursed",
                "duration": 5000,
                "explanation": "A wretched aura",
                "hostile": true,
                "name": "Curse",
                "passive": true,
                "skin": "condition_bad",
                "type": "monster"
            },
            "dampening_aura": {
                "aura": true,
                "condition": "dampened",
                "duration": 300,
                "explanation": "Prevents teleports",
                "hostile": true,
                "name": "Dampening",
                "passive": true,
                "skin": "condition_neutral",
                "type": "monster"
            },
            "darkblessing": {
                "class": [
                    "priest"
                ],
                "condition": "darkblessing",
                "cooldown": 60000,
                "duration": 8000,
                "explanation": "Increases damage by 25% for the duration.",
                "level": 70,
                "mp": 900,
                "name": "Dark Blessing",
                "range": 600,
                "skin": "skill_dbuff",
                "type": "skill"
            },
            "dash": {
                "class": [
                    "warrior"
                ],
                "cooldown": 0,
                "explanation": "Push forward, jumping over obstacles, climbing hills, defying physics!",
                "mp": 120,
                "name": "Dash",
                "set_speed": 500,
                "skin": "skill_dash",
                "type": "skill"
            },
            "deepfreeze": {
                "damage": 1200,
                "damage_type": "pure",
                "explanation": "Randomly freezes a nearby opponent",
                "hostile": true,
                "name": "Deepfreeze",
                "projectile": "burst",
                "type": "monster"
            },
            "emotion": {
                "explanation": "Show a random emotion you've unlocked!",
                "name": "Emotion",
                "skin": "run_emotion",
                "type": "utility"
            },
            "energize": {
                "class": [
                    "mage"
                ],
                "condition": "energized",
                "cooldown": 4000,
                "duration": 800,
                "explanation": "Transfers mana to a target. As a side effect the target gains high attack speed for a short duration.",
                "level": 20,
                "name": "Energize",
                "range": 320,
                "skin": "skill_energize",
                "target": true,
                "type": "skill"
            },
            "entangle": {
                "class": [
                    "mage"
                ],
                "condition": "tangled",
                "consume": "essenceofnature",
                "cooldown": 40000,
                "duration": 5000,
                "explanation": "Unleash the contained powers of nature to hinder an opponent.",
                "hostile": true,
                "level": 72,
                "monsters": true,
                "mp": 360,
                "name": "Entangle",
                "range": 480,
                "skin": "skill_entangle",
                "target": true,
                "type": "skill"
            },
            "esc": {
                "explanation": "Calls the esc_pressed() function inside the game. Major functionality.",
                "name": "ESC",
                "skin": "esc",
                "type": "utility",
                "ui": false
            },
            "fireball": {
                "damage": 4000,
                "damage_type": "magical",
                "explanation": "Hurls a fireball!",
                "hostile": true,
                "name": "Fireball",
                "projectile": "magic",
                "type": "monster"
            },
            "fishing": {
                "class": [
                    "merchant"
                ],
                "cooldown": 2880000,
                "explanation": "Swing your rod and catch some fish!",
                "level": 16,
                "mp": 120,
                "name": "Fishing",
                "persistent": true,
                "range": 15,
                "skin": "skill_fishing",
                "type": "skill",
                "wtype": [
                    "rod"
                ]
            },
            "frostball": {
                "damage": 800,
                "damage_type": "magical",
                "explanation": "Hurls a frostball!",
                "hostile": true,
                "name": "Frostball",
                "projectile": "frostball",
                "type": "monster"
            },
            "gm": {
                "explanation": "Jump, Jail, Mute, Use Any Skill",
                "name": "GM Abilities",
                "skin": "gm",
                "type": "gm"
            },
            "hardshell": {
                "class": [
                    "warrior"
                ],
                "condition": "hardshell",
                "cooldown": 16000,
                "duration": 8000,
                "explanation": "Use everything at your disposal to protect yourself from physical attacks for a short duration.",
                "level": 60,
                "mp": 480,
                "name": "Hard Shell",
                "skin": "skill_hardshell",
                "type": "skill"
            },
            "heal": {
                "class": [
                    "priest"
                ],
                "cooldown_multiplier": 1,
                "damage_type": "magical",
                "explanation": "Heal the target",
                "heal": true,
                "name": "Heal",
                "pierces_immunity": true,
                "procs": true,
                "projectile": "plight",
                "share": "attack",
                "skin": "heal",
                "target": true,
                "type": "ability",
                "use_range": true
            },
            "healing": {
                "explanation": "Heals an ally or self",
                "name": "Healing",
                "type": "monster"
            },
            "huntersmark": {
                "class": [
                    "ranger"
                ],
                "condition": "marked",
                "cooldown": 10000,
                "duration": 10000,
                "explanation": "Mark an opponent for death, prevent them from stealthing away and increase damage done by 10%",
                "hostile": true,
                "mp": 240,
                "name": "Hunter's Mark",
                "skin": "skill_huntersmark",
                "target": true,
                "type": "skill"
            },
            "interact": {
                "explanation": "Interact with the nearest game entity, a door, doorway, or NPC.",
                "name": "Interact",
                "skin": "interact",
                "type": "utility",
                "ui": false
            },
            "invis": {
                "class": [
                    "rogue"
                ],
                "explanation": "Disappear into the shadows. Deal 1.25X damage when you sneak up on an enemy. Cooldown starts when you re-appear.",
                "name": "Assassin's Smoke",
                "reuse_cooldown": 12000,
                "skin": "skill_invis",
                "type": "skill"
            },
            "light": {
                "class": [
                    "mage"
                ],
                "cooldown": 0,
                "explanation": "Reveals invisible entities nearby and prevents them from going invisible again for 12 seconds.",
                "hostile": true,
                "mp": 2000,
                "name": "Light",
                "skin": "skill_light",
                "type": "skill"
            },
            "magiport": {
                "class": [
                    "mage"
                ],
                "complementary": "Unless the target doesn't have a T2+ helmet, high intelligence, or a low level, it can't resist being magiported. (Reverted [03/07/18])",
                "cooldown": 0,
                "explanation": "Pull someone to your location using the magical paths that surround our world.",
                "mp": 900,
                "name": "Magiport",
                "skin": "skill_teleport",
                "type": "skill"
            },
            "massproduction": {
                "class": [
                    "merchant"
                ],
                "condition": "massproduction",
                "cooldown": 50,
                "duration": 10000,
                "explanation": "Adds a 1-time use buff that speeds up the next upgrade or compound by 50%. The buff expires in 10 seconds if not used.",
                "level": 30,
                "mp": 20,
                "name": "Mass Production",
                "skin": "skill_massproduction",
                "type": "skill"
            },
            "massproductionpp": {
                "class": [
                    "merchant"
                ],
                "condition": "massproductionpp",
                "cooldown": 50,
                "duration": 10000,
                "explanation": "Adds a 1-time use buff that speeds up the next upgrade or compound by 90%. The buff expires in 10 seconds if not used.",
                "level": 60,
                "mp": 200,
                "name": "Mass Production++",
                "skin": "skill_massproductionpp",
                "type": "skill"
            },
            "mcourage": {
                "class": [
                    "merchant"
                ],
                "condition": "mcourage",
                "cooldown": 2000,
                "duration": 5000,
                "explanation": "When you sense danger, you know what to do...",
                "level": 70,
                "mp": 2400,
                "name": "Merchant's Courage",
                "skin": "skill_mcourage",
                "type": "skill"
            },
            "mentalburst": {
                "class": [
                    "rogue"
                ],
                "cooldown": 900,
                "damage_multiplier": 0.6,
                "damage_type": "magical",
                "explanation": "Channel your mental abilities for a magical blow. If the target is defeated, the damage dealt is converted to mana.",
                "hostile": true,
                "mp": 180,
                "name": "Mental Burst",
                "projectile": "mentalburst",
                "range_bonus": 32,
                "range_multiplier": 1.2,
                "requirements": {
                    "int": 64
                },
                "skin": "skill_mentalburst",
                "target": true,
                "type": "skill",
                "warning": "Highly unbalanced skill, could get nerfed or modified"
            },
            "mining": {
                "class": [
                    "merchant"
                ],
                "cooldown": 7440000,
                "explanation": "Use your pickaxe to mine some mines!",
                "level": 16,
                "mp": 120,
                "name": "Mining",
                "persistent": true,
                "range": 15,
                "skin": "skill_mining",
                "type": "skill",
                "wtype": [
                    "pickaxe"
                ]
            },
            "mlight": {
                "explanation": "Reveals invisible entities nearby and prevents them from going invisible again for 12 seconds.",
                "hostile": true,
                "name": "Light",
                "skin": "skill_light",
                "type": "monster",
                "ui": true
            },
            "mluck": {
                "class": [
                    "merchant"
                ],
                "condition": "mluck",
                "cooldown": 100,
                "duration": 3600000,
                "explanation": "Buff a target to increase their luck. 2% chance for you to receive a duplicate of their looted items!",
                "level": 40,
                "mp": 10,
                "name": "Merchant's Luck",
                "range": 320,
                "skin": "buff_luck",
                "target": true,
                "type": "skill"
            },
            "move_down": {
                "explanation": "Moves the character downwards",
                "name": "Move Down",
                "skin": "down",
                "type": "utility",
                "ui": false
            },
            "move_left": {
                "explanation": "Moves the character leftwards",
                "name": "Move Left",
                "skin": "left",
                "type": "utility",
                "ui": false
            },
            "move_right": {
                "explanation": "Moves the character rightwards",
                "name": "Move Right",
                "skin": "right",
                "type": "utility",
                "ui": false
            },
            "move_up": {
                "explanation": "Moves the character upwards",
                "name": "Move Up",
                "skin": "up",
                "type": "utility",
                "ui": false
            },
            "mshield": {
                "class": [
                    "paladin"
                ],
                "condition": "mshield",
                "cooldown": 0,
                "duration": 999999999,
                "explanation": "Create a magical shield around yourself to absorb damage [Toggle]",
                "mp": 0,
                "name": "Mana Shield",
                "skin": "skill_mshield",
                "toggle": true,
                "type": "skill"
            },
            "mtangle": {
                "condition": "tangled",
                "cooldown": 40000,
                "duration": 5000,
                "explanation": "Communicates through spores to activate dormant plants underneath. Slows down opponents significantly.",
                "hostile": true,
                "monsters": true,
                "mp": 360,
                "name": "Tangle",
                "range": 480,
                "target": true,
                "type": "monster"
            },
            "multi_burn": {
                "damage_type": "magical",
                "explanation": "Hurl a fireball at everyone who dared attack him and burn them!",
                "hostile": true,
                "name": "Multi Burn",
                "skin": "essenceoffire",
                "type": "monster",
                "ui": true
            },
            "multi_freeze": {
                "damage_type": "magical",
                "explanation": "Hurl a frostball at everyone who dared attack him and freeze them!",
                "hostile": true,
                "name": "Multi Freeze",
                "skin": "essenceoffrost",
                "type": "monster",
                "ui": true
            },
            "open_snippet": {
                "explanation": "Open the Code Snippet interface",
                "name": "Open Snippet",
                "skin": "snippet",
                "type": "utility",
                "ui": false
            },
            "partyheal": {
                "action": "heal",
                "class": [
                    "priest"
                ],
                "cooldown": 200,
                "damage_type": "magical",
                "explanation": "Heals all the party members.",
                "heal": true,
                "levels": [
                    [
                        0,
                        500
                    ],
                    [
                        60,
                        600
                    ],
                    [
                        72,
                        720
                    ],
                    [
                        80,
                        800
                    ]
                ],
                "mp": 400,
                "multi": true,
                "name": "Party Heal",
                "output": 400,
                "party": true,
                "projectile": "partyheal",
                "skin": "skill_pheal",
                "type": "skill"
            },
            "pcoat": {
                "class": [
                    "rogue"
                ],
                "condition": "poisonous",
                "consume": "poison",
                "cooldown": 50000,
                "duration": 7000,
                "explanation": "Coat your blade with a poison sack. Poison everyone you damage before the venom dissipates.",
                "mp": 600,
                "name": "A Poisonous Touch",
                "skin": "skill_pcoat",
                "type": "skill"
            },
            "phaseout": {
                "class": [
                    "priest"
                ],
                "condition": "phasedout",
                "consume": "shadowstone",
                "cooldown": 4000,
                "duration": 5000,
                "explanation": "Absorb a shadow stone to phase yourself out from this universe.",
                "level": 64,
                "mp": 200,
                "name": "Phase Out",
                "skin": "skill_phaseout",
                "type": "skill"
            },
            "piercingshot": {
                "apiercing": 500,
                "class": [
                    "ranger"
                ],
                "cooldown_multiplier": 1,
                "damage_multiplier": 0.75,
                "damage_type": "physical",
                "explanation": "Fire heavy, armor piercing arrows at your opponent. They deal 75% of the damage but pierce through 500 armor.",
                "hostile": true,
                "level": 72,
                "mp": 64,
                "name": "Piercing Shot",
                "pierces_immunity": true,
                "procs": true,
                "share": "attack",
                "skin": "skill_piercingshot",
                "target": true,
                "type": "skill",
                "wtype": [
                    "bow",
                    "crossbow"
                ]
            },
            "poisonarrow": {
                "class": [
                    "ranger"
                ],
                "condition": "poisoned",
                "consume": "poison",
                "cooldown": 300,
                "damage": 200,
                "damage_type": "physical",
                "duration": 5000,
                "explanation": "Fire a single low damage but poison coated arrow at your opponent.",
                "hostile": true,
                "mp": 360,
                "name": "Poison Arrow",
                "procs": true,
                "projectile": "poisonarrow",
                "skin": "skill_poisonarrow",
                "target": true,
                "type": "skill",
                "use_range": true,
                "wtype": [
                    "bow",
                    "crossbow"
                ]
            },
            "portal": {
                "explanation": "Open a portal to different maps and instances",
                "name": "Portal",
                "type": "monster"
            },
            "power": {
                "condition": "power",
                "cooldown": 500,
                "duration": 4000,
                "explanation": "Unleash the power",
                "mp": 320,
                "name": "Power",
                "skin": "powerglove",
                "slot": [
                    [
                        "gloves",
                        "powerglove"
                    ]
                ],
                "type": "skill"
            },
            "pure_eval": {
                "code": true,
                "explanation": "[Advanced] Maps a code snippet to be run directly inside the game, rather than using CODE. (Not to be confused with the text command, /eval, which evals inside the Code iframe)",
                "name": "Pure Eval",
                "skin": "run_eval0",
                "skins": [
                    "run_eval0",
                    "run_eval1",
                    "run_eval2"
                ],
                "type": "utility"
            },
            "purify": {
                "class": [
                    "paladin"
                ],
                "cooldown": 24000,
                "damage": 2000,
                "damage_type": "pure",
                "explanation": "Deals 2000 pure damage purifying the target, removes all buffs and debuffs dealing additional 400 damage for each and receive the Purifier buff if the target is defeated!",
                "hostile": true,
                "kill_buff": "purifier",
                "level": 60,
                "mp": 360,
                "name": "Purify",
                "projectile": "purify",
                "range": 480,
                "skin": "skill_purify",
                "target": true,
                "type": "skill"
            },
            "quickpunch": {
                "class": [
                    "rogue"
                ],
                "cooldown": 250,
                "damage_multiplier": 0.25,
                "damage_type": "physical",
                "explanation": "Use your agility to quickly punch your opponent between your devastating attacks!",
                "hostile": true,
                "mp": 240,
                "name": "Quick Punch",
                "pierces_immunity": true,
                "projectile": "quickpunch",
                "skin": "skill_quickpunch",
                "target": true,
                "type": "skill",
                "use_range": true,
                "wtype": "fist"
            },
            "quickstab": {
                "class": [
                    "rogue"
                ],
                "cooldown": 250,
                "damage_multiplier": 0.36,
                "damage_type": "physical",
                "explanation": "Use your agility to quickly stab your opponent between your devastating attacks!",
                "hostile": true,
                "mp": 320,
                "name": "Quick Stab",
                "pierces_immunity": true,
                "procs": true,
                "projectile": "quickstab",
                "share": "quickpunch",
                "skin": "skill_quickstab",
                "target": true,
                "type": "skill",
                "use_range": true,
                "wtype": "dagger"
            },
            "reflection": {
                "class": [
                    "mage"
                ],
                "condition": "reflection",
                "cooldown": 30000,
                "duration": 5000,
                "explanation": "Erects a magical shield around the target to grant them +20% Reflection for the duration.",
                "level": 60,
                "mp": 540,
                "name": "Reflective Shield",
                "range": 320,
                "skin": "buff_reflection",
                "target": true,
                "type": "skill"
            },
            "regen_hp": {
                "cooldown_multiplier": 2,
                "explanation": "Regenerate 50 HP without using potions.",
                "name": "Regenerate HP",
                "share": "use_hp",
                "skin": "regen_hp",
                "type": "ability"
            },
            "regen_mp": {
                "cooldown_multiplier": 2,
                "explanation": "Regenerate 100 MP without using potions.",
                "name": "Regenerate MP",
                "share": "use_mp",
                "skin": "regen_mp",
                "type": "ability"
            },
            "revive": {
                "class": [
                    "priest"
                ],
                "consume": "essenceoflife",
                "cooldown": 200,
                "explanation": "If a fallen comrade's gravestone has been healed fully, revives them using an Essence of Life!",
                "mp": 500,
                "name": "Revive!",
                "range": 240,
                "skin": "skill_revive",
                "target": true,
                "type": "skill"
            },
            "rspeed": {
                "class": [
                    "rogue"
                ],
                "condition": "rspeed",
                "cooldown": 100,
                "duration": 2700000,
                "explanation": "Buff a target to increase their speed.",
                "level": 40,
                "mp": 320,
                "name": "Rogue Swiftness",
                "range": 320,
                "skin": "buff_speed",
                "target": true,
                "type": "skill"
            },
            "scare": {
                "cooldown": 5000,
                "explanation": "Activate your Jack-o Lantern to scare away monsters targeting you!",
                "mp": 50,
                "name": "Scare",
                "skin": "skill_scare",
                "slot": [
                    [
                        "orb",
                        "jacko"
                    ]
                ],
                "type": "skill"
            },
            "self_healing": {
                "explanation": "Periodical self healing",
                "name": "Healing",
                "type": "monster"
            },
            "selfheal": {
                "action": "heal",
                "class": [
                    "paladin"
                ],
                "cooldown": 1200,
                "damage_type": "magical",
                "explanation": "Heal yourself",
                "heal": true,
                "levels": [
                    [
                        0,
                        500
                    ],
                    [
                        60,
                        600
                    ],
                    [
                        72,
                        720
                    ],
                    [
                        80,
                        800
                    ]
                ],
                "mp": 20,
                "name": "Heal",
                "output": 400,
                "projectile": "partyheal",
                "skin": "skill_selfheal",
                "type": "skill"
            },
            "shadowstrike": {
                "class": [
                    "rogue"
                ],
                "consume": "shadowstone",
                "cooldown": 1200,
                "damage_type": "physical",
                "explanation": "Use a shadow stone to strike a random enemy in a parallel universe!",
                "hostile": true,
                "level": 70,
                "mp": 320,
                "name": "Shadow Strike",
                "range": 360,
                "skin": "skill_shadowstrike",
                "type": "skill"
            },
            "smash": {
                "class": [
                    "paladin"
                ],
                "cooldown": 320,
                "damage_multiplier": 0.36,
                "damage_type": "physical",
                "explanation": "Smash your opponent using your mace!",
                "hostile": true,
                "level": 10,
                "mp": 380,
                "name": "Smash",
                "pierces_immunity": true,
                "procs": true,
                "projectile": "smash",
                "skin": "skill_smash",
                "target": true,
                "type": "skill",
                "use_range": true,
                "wtype": "mace"
            },
            "snippet": {
                "code": true,
                "explanation": "Maps a code snippet to a keypress.",
                "name": "Snippet",
                "skin": "run_snippet1",
                "skins": [
                    "run_snippet0",
                    "run_snippet1",
                    "run_snippet2"
                ],
                "type": "utility"
            },
            "snowball": {
                "condition": "frozen",
                "cooldown": 180,
                "damage": 1,
                "duration": 5000,
                "explanation": "Throw a snowball at someone!",
                "inventory": [
                    "snowball"
                ],
                "mp": 120,
                "name": "Snowball",
                "projectile": "snowball",
                "range": 720,
                "skin": "snowball",
                "target": true,
                "type": "skill"
            },
            "stack": {
                "class": [
                    "rogue"
                ],
                "explanation": "Slowly learning the ways of your opponent each rogue attack deals one more damage.",
                "max": 2000,
                "name": "Stacked Damage",
                "skin": "skill_stack",
                "type": "passive"
            },
            "stomp": {
                "class": [
                    "warrior"
                ],
                "condition": "stunned",
                "cooldown": 24000,
                "damage_type": "physical",
                "duration": 3200,
                "explanation": "Use your basher to Stomp the ground to Stun enemies nearby!",
                "hostile": true,
                "level": 52,
                "mp": 120,
                "name": "Stomp",
                "range": 400,
                "skin": "skill_stomp",
                "type": "skill",
                "wtype": "basher"
            },
            "stone": {
                "condition": "stoned",
                "duration": 4000,
                "explanation": "Looking into his eye for too long turns you to stone!",
                "hostile": true,
                "name": "Stone",
                "type": "monster"
            },
            "stop": {
                "cooldown": 0,
                "explanation": "Stops your character. Cancels all channeling abilities and active skills.",
                "name": "Stop",
                "skin": "stop_g",
                "type": "ability"
            },
            "supershot": {
                "class": [
                    "ranger"
                ],
                "cooldown": 30000,
                "damage_multiplier": 1.5,
                "damage_type": "physical",
                "explanation": "Deals 1.5X instant damage from an incredible distance.",
                "hostile": true,
                "mp": 400,
                "name": "Supershot",
                "pierces_immunity": true,
                "procs": true,
                "range_multiplier": 3,
                "skin": "skill_supershot",
                "target": true,
                "type": "skill",
                "wtype": [
                    "bow",
                    "crossbow"
                ]
            },
            "tangle": {
                "cooldown": 60000,
                "explanation": "Unleash the contained powers of nature to hinder an opponent.",
                "hostile": true,
                "mp": 40,
                "name": "Tangle",
                "skin": "heartwood",
                "slot": [
                    [
                        "mainhand",
                        "heartwood"
                    ],
                    [
                        "offhand",
                        "heartwood"
                    ]
                ],
                "target": true,
                "type": "skill"
            },
            "taunt": {
                "class": [
                    "warrior"
                ],
                "cooldown": 3000,
                "damage": 1,
                "explanation": "Taunts an enemy. Steals aggro from friendly targets.",
                "hostile": true,
                "mp": 40,
                "name": "Taunt",
                "pierces_immunity": true,
                "projectile": "stone",
                "range": 200,
                "skin": "skill_taunt",
                "target": true,
                "type": "skill"
            },
            "throw": {
                "range_bonus": 120,
                "class": [
                    "merchant"
                ],
                "code": "range=character.level+200",
                "cooldown": 400,
                "damage_type": "physical",
                "explanation": "Terrified? Just throw whatever you can find at your opponent!",
                "hostile": true,
                "level": 60,
                "mp": 200,
                "name": "Throw Stuff",
                "negative": [
                    "essenceoffire"
                ],
                "nprop": [
                    "attack",
                    "armor"
                ],
                "pierces_immunity": true,
                "positive": [
                    "essenceoflife"
                ],
                "range": 200,
                "skin": "skill_throw",
                "target": true,
                "type": "skill"
            },
            "toggle_character": {
                "explanation": "Toggles the character focus",
                "name": "Toggle Character",
                "skin": "character",
                "type": "utility",
                "ui": false
            },
            "toggle_code": {
                "name": "Toggle Code",
                "skin": "code",
                "ui": false
            },
            "toggle_inventory": {
                "explanation": "Toggles the inventory",
                "name": "Toggle Inventory",
                "skin": "inventory",
                "type": "utility",
                "ui": false
            },
            "toggle_run_code": {
                "name": "Engage/Disengage Code",
                "skin": "run_code",
                "ui": false
            },
            "toggle_stats": {
                "explanation": "Toggles the character sheet",
                "name": "Toggle Stats",
                "skin": "stats",
                "type": "utility",
                "ui": false
            },
            "track": {
                "class": [
                    "ranger"
                ],
                "cooldown": 1600,
                "explanation": "Use your fine-tuned senses to detect others.",
                "mp": 80,
                "name": "Track",
                "range": 1440,
                "skin": "skill_track",
                "type": "skill"
            },
            "travel": {
                "explanation": "Where would you like to visit?",
                "name": "Travel!",
                "skin": "travel",
                "type": "ability"
            },
            "use_hp": {
                "cooldown": 2000,
                "explanation": "Uses an HP potion from your inventory. If there are multiple potions, the last one is used. If there are no potions, your character regenerates a small amount of HP with a high cooldown.",
                "name": "Use HP Potion",
                "skin": "use_hp",
                "type": "ability"
            },
            "use_mp": {
                "cooldown": 2000,
                "explanation": "Uses an MP potion from your inventory. If there are multiple potions, the last one is used. If there are no potions, your character regenerates a small amount of MP with a high cooldown.",
                "name": "Use MP Potion",
                "skin": "use_mp",
                "type": "ability"
            },
            "use_town": {
                "cooldown": 0,
                "explanation": "Teleports you to the center of the map.",
                "name": "Town",
                "skin": "use_town",
                "type": "ability"
            },
            "warcry": {
                "class": [
                    "warrior"
                ],
                "condition": "warcry",
                "cooldown": 60000,
                "duration": 8000,
                "explanation": "Motivate your allies to fight!",
                "level": 70,
                "mp": 320,
                "name": "War Cry",
                "range": 600,
                "skin": "skill_warcry",
                "type": "skill"
            },
            "warp": {
                "cooldown": 200,
                "explanation": "Warp space to jump into any location",
                "mp": 40,
                "name": "Warp",
                "skin": "warpvest",
                "slot": [
                    [
                        "chest",
                        "warpvest"
                    ]
                ],
                "type": "skill"
            },
            "warpstomp": {
                "explanation": "Warps to a random player nearby and stomps players in vicinity",
                "hostile": true,
                "name": "Warpstomp",
                "type": "monster"
            },
            "weakness_aura": {
                "aura": true,
                "condition": "weakness",
                "duration": 20000,
                "explanation": "Weakens",
                "hostile": true,
                "name": "Weakness",
                "passive": true,
                "skin": "condition_bad",
                "type": "monster"
            },
            "xpower": {
                "condition": "xpower",
                "cooldown": 500,
                "duration": 6000,
                "explanation": "Unleash the power",
                "mp": 320,
                "name": "Power",
                "skin": "goldenpowerglove",
                "slot": [
                    [
                        "gloves",
                        "goldenpowerglove"
                    ]
                ],
                "type": "skill"
            },
            "zap": {
                "damage": 1200,
                "damage_type": "pure",
                "explanation": "Zaps you with a pure damage ray",
                "hostile": true,
                "name": "Zap",
                "projectile": "sburst",
                "type": "monster"
            },
            "zapperzap": {
                "cooldown": 200,
                "damage": 200,
                "damage_type": "magical",
                "explanation": "Zap your target for 200 damage",
                "hostile": true,
                "mp": 140,
                "name": "Zap",
                "projectile": "gburst",
                "range": 420,
                "skin": "trigger",
                "slot": [
                    [
                        "ring1",
                        "zapper"
                    ],
                    [
                        "ring2",
                        "zapper"
                    ]
                ],
                "target": true,
                "type": "skill"
            }
        }
    }
    expect(G_skills).not.toBe(undefined)
})