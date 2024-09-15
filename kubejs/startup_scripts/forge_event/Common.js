global.fluidCreateBlock = id => {
    if (id == "minecraft:stone"){
        return Block.getBlock('minecraft:netherrack').defaultBlockState();
    }
    if (id == "minecraft:cobblestone"){
        return Block.getBlock('meng:dirty_cobblestone').defaultBlockState();
    }
}