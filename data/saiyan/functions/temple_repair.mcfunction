execute in saiyan:chamber run kill @e[type=minecraft:armor_stand]
execute in minecraft:overworld run kill @e[type=minecraft:armor_stand,tag=chamber_entrance]
execute in saiyan:chamber run forceload add 0 0
execute in saiyan:chamber run setblock 0 72 0 minecraft:structure_block{mode:"LOAD",name:"saiyan:chamber/chamber",posX:0,posY:0,posZ:0,rotation:"NONE",mirror:"NONE",ignoreEntities:0b,integrity:1.0f,seed:0L,auto:0b} replace
execute in saiyan:chamber run setblock 0 73 0 redstone_block

execute in minecraft:overworld run forceload add 159 2107
execute in minecraft:overworld run setblock 159 190 2109 minecraft:structure_block{mode:"LOAD",name:"saiyan:book_temple/book_temple",posX:0,posY:0,posZ:0,rotation:"NONE",mirror:"NONE",ignoreEntities:0b,integrity:1.0f,seed:0L,auto:0b} replace
execute in minecraft:overworld run setblock 159 189 2109 redstone_block

execute in saiyan:chamber run summon armor_stand 80 79 94 {Tags:["chamber_exit"],Invisible:1b,NoGravity:1b,Marker:1b,Invulnerable:1b,Silent:1b,PersistenceRequired:1b,DisabledSlots:4144959,ArmorItems:[{},{},{},{}],HandItems:[{},{}]}

execute in saiyan:chamber run summon armor_stand 81 79 94 {Tags:["chamber_exit"],Invisible:1b,NoGravity:1b,Marker:1b,Invulnerable:1b,Silent:1b,PersistenceRequired:1b,DisabledSlots:4144959,ArmorItems:[{},{},{},{}],HandItems:[{},{}]}

execute in minecraft:overworld run summon armor_stand 240 273 2226 {Tags:["chamber_entrance"],Invisible:1b,NoGravity:1b,Marker:1b,Invulnerable:1b,Silent:1b,PersistenceRequired:1b,DisabledSlots:4144959,ArmorItems:[{},{},{},{}],HandItems:[{},{}]}

execute as @a if dimension saiyan:chamber run effect give @s minecraft:saturation 6000 0 true
