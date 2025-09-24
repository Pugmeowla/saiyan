execute as @s at @s run summon husk ~ ~1 ~ {Tags:["saiyan"],Health:100.0f,Attributes:[{Name:"minecraft:generic.max_health",Base:100.0},{Name:"minecraft:generic.armor",Base:20.0},{Name:"minecraft:generic.armor_toughness",Base:10.0}], ActiveEffects:[{Id:11,Amplifier:2,Duration:2147483647,ShowParticles:0b}],CustomName:'{"text":"Training Dummy"}',CustomNameVisible:0,PersistenceRequired:1b,ArmorItems:[{},{},{},{}]}
superpower add saiyan:saiyan_mob @e[tag=saiyan]
effect give @e[tag=saiyan,limit=1] minecraft:instant_damage 100 1 true
effect give @e[tag=saiyan,limit=1] minecraft:speed infinite 5 true