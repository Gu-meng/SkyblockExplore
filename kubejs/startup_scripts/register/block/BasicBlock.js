StartupEvents.registry("block",event=>{
    const ironTimbers = [
        regIds.iron_acacia_block,
        regIds.iron_birch_block,
        regIds.iron_cherry_block,
        regIds.iron_crimson_block,
        regIds.iron_dark_oak_block,
        regIds.iron_jungle_block,
        regIds.iron_mangrove_block,
        regIds.iron_oak_block,
        regIds.iron_spruce_block,
        regIds.iron_warped_block
    ]
    ironTimbers.forEach(value=>{
        event.create(value)
            .woodSoundType()
            .hardness(2)
            .requiresTool()
            .tagBlock("minecraft:mineable/axe")
            .tagBlock("minecraft:needs_stone_tool")
            .tagItem("meng:iron_timbers")
    })

    event.create(regIds.stalinite_block)
        .defaultTranslucent()
        .hardness(3)
        .noDrops()
        .glassSoundType()
        .tag('forge:glass')
    
    event.create(regIds.precision_machine_parts)
        .hardness(2)
        .stoneSoundType()
        .tagBlock('create:wrench_pickup')
        .tagBlock('minecraft:mineable/axe')
        .tagBlock('minecraft:mineable/pickaxe')

    event.create(basicBlock.dirty_cobblestone)
        .hardness(2)
        .stoneSoundType()
        .requiresTool()
        .tagBlock('minecraft:mineable/pickaxe')
})