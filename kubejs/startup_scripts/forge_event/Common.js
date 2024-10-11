global.fluidCreateBlock = id => {
    if (id == "minecraft:stone"){
        return Block.getBlock('minecraft:netherrack').defaultBlockState();
    }
    if (id == "minecraft:cobblestone"){
        if (global.MengUtils.isPercent(global.FluidCreateBlockConfig.tuffChance)) return Block.getBlock('minecraft:tuff').defaultBlockState();
        return Block.getBlock('meng:dirty_cobblestone').defaultBlockState();
    }
}