execute in saiyan:chamber run kill @e[type=minecraft:armor_stand]
execute in saiyan:chamber run forceload add 0 0
execute in saiyan:chamber run setblock 0 72 0 minecraft:structure_block{mode:"LOAD",name:"saiyan:chamber/chamber",posX:0,posY:0,posZ:0,rotation:"NONE",mirror:"NONE",ignoreEntities:0b,integrity:1.0f,seed:0L,auto:0b} replace
execute in saiyan:chamber run setblock 0 73 0 redstone_block

execute in minecraft:overworld run forceload add 78 1992
execute in minecraft:overworld run setblock 78 150 1992 minecraft:structure_block{mode:"LOAD",name:"saiyan:book_temple/book_temple",posX:0,posY:0,posZ:0,rotation:"NONE",mirror:"NONE",ignoreEntities:0b,integrity:1.0f,seed:0L,auto:0b} replace
execute in minecraft:overworld run setblock 78 151 1992 redstone_block

execute in saiyan:chamber run summon armor_stand 21 74 17 {Tags:["chamber_exit"],Invisible:1b,NoGravity:1b,Marker:1b,Invulnerable:1b,Silent:1b,PersistenceRequired:1b,DisabledSlots:4144959,ArmorItems:[{},{},{},{}],HandItems:[{},{}]}

execute in saiyan:chamber run summon armor_stand 21 74 18 {Tags:["chamber_exit"],Invisible:1b,NoGravity:1b,Marker:1b,Invulnerable:1b,Silent:1b,PersistenceRequired:1b,DisabledSlots:4144959,ArmorItems:[{},{},{},{}],HandItems:[{},{}]}

execute in saiyan:chamber run effect give @a minecraft:saturation 6000 0 true