scoreboard objectives add health health
scoreboard objectives add saiyan_cooldown dummy
scoreboard objectives add zenkai dummy
scoreboard objectives add saiyan_scan dummy

forceload add 20 18

execute in saiyan:chamber run forceload add 0 0
execute in saiyan:chamber run setblock 0 72 0 minecraft:structure_block{mode:"LOAD",name:"saiyan:chamber/chamber",posX:0,posY:0,posZ:0,rotation:"NONE",mirror:"NONE",ignoreEntities:0b,integrity:1.0f,seed:0L,auto:0b} replace
execute in saiyan:chamber run setblock 0 73 0 redstone_block

execute in minecraft:overworld run forceload add 78 1992
execute in minecraft:overworld run setblock 78 150 1992 minecraft:structure_block{mode:"LOAD",name:"saiyan:book_temple/book_temple",posX:0,posY:0,posZ:0,rotation:"NONE",mirror:"NONE",ignoreEntities:0b,integrity:1.0f,seed:0L,auto:0b} replace
execute in minecraft:overworld run setblock 78 151 1992 redstone_block

execute in minecraft:overworld run function saiyan:temple_repair
execute in minecraft:overworld run function saiyan:temple_repair2
schedule function saiyan:temple_repair2 6000t
