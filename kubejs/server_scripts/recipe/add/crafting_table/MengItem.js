ServerEvents.recipes(event => {
    event.shapeless("4x meng:iron_dust", ["minecraft:iron_nugget"]);

    event.shaped("meng:crushbone_sword", [
        ['', 'meng:crushbone'],
        ['minecraft:stick', '']
    ]);

    event.shaped("meng:crushbone_axe", [
        ['meng:crushbone', 'meng:crushbone', ''],
        ['meng:crushbone', 'minecraft:stick', ''],
        ['', 'minecraft:stick', '']
    ]);

    event.shapeless("7x meng:crushbone", ['minecraft:bone']);

    event.shaped('meng:iron_frame', [
        ["minecraft:iron_nugget", "minecraft:iron_nugget", "minecraft:iron_nugget"],
        ["minecraft:iron_nugget", "", "minecraft:iron_nugget"],
        ["minecraft:iron_nugget", "minecraft:iron_nugget", "minecraft:iron_nugget"]
    ])

    event.shapeless("meng:iron_mesh", ["meng:iron_frame", "minecraft:iron_nugget", "minecraft:iron_nugget", "minecraft:iron_nugget", "minecraft:iron_nugget"]);

    event.shaped("meng:rain_doll", [
        ['', 'minecraft:white_wool'],
        [Item.of('minecraft:potion', { Potion: "minecraft:water" }).strongNBT(), 'minecraft:white_wool', Item.of('minecraft:potion', { Potion: "minecraft:water" }).strongNBT()],
        ['', 'minecraft:white_wool']
    ]).replaceIngredient(Item.of('minecraft:potion', { Potion: "minecraft:water" }).strongNBT(), 'minecraft:glass_bottle');

    event.shapeless('meng:lava_chunk', ['meng:lava_debris', 'meng:lava_debris', 'meng:lava_debris', 'meng:lava_debris']);

    event.shapeless('meng:slag_block', ['meng:slag', 'meng:slag', 'meng:slag', 'meng:slag', 'meng:slag', 'meng:slag', 'meng:slag', 'meng:slag', 'meng:slag']);

    event.shaped('meng:diamond_mesh', [
        ['minecraft:stick', 'meng:diamond_wire', 'minecraft:stick'],
        ['minecraft:stick', 'meng:diamond_wire', 'minecraft:stick'],
        ['minecraft:stick', 'meng:diamond_wire', 'minecraft:stick']
    ])

    event.shaped('meng:crushbone_shears', [
        ['', 'meng:crushbone'],
        ['minecraft:stick', 'meng:iron_dust', 'meng:crushbone'],
        ['', 'minecraft:stick']
    ])

    event.shaped('meng:saw_blade',[
        ['minecraft:iron_nugget','create:iron_sheet','minecraft:iron_nugget'],
        ['create:iron_sheet','create:shaft','create:iron_sheet'],
        ['minecraft:iron_nugget','create:iron_sheet','minecraft:iron_nugget']
    ])

    event.shapeless('minecraft:cobblestone',[
        'minecraft:gunpowder','minecraft:gunpowder','meng:dirty_cobblestone'
    ])

    event.shaped('meng:stalinite_block',[
        'aba',
        'bab',
        'aba'
    ],{
        a : 'mekanism:dust_steel',
        b : 'minecraft:glass'
    })

    event.shaped('meng:harvesting_accessories',[
        ['create:andesite_casing','create:andesite_casing','create:andesite_casing'],
        ['meng:saw_blade','create:shaft','meng:saw_blade']
    ])

    event.shaped('meng:drill_bit',[
        ['create:andesite_casing','minecraft:iron_ingot'],
        ['create:andesite_casing','create:shaft','minecraft:iron_ingot'],
        ['create:andesite_casing','minecraft:iron_ingot']
    ])

    ironTimbers.forEach(value => {
        event.shaped(value.output, [value.input,'create:iron_sheet',value.input])
    })

    event.shaped('meng:copper_mesh',[
      'aaa',
      'aba',
      'aaa'  
    ],{
        a:'minecraft:stick',
        b:'minecraft:copper_ingot'
    })

    for (let i = 0; i < aeItemList.length; i++) {
        if (aeItemList.length == i+1) break
        event.shaped(aeItemList[i+1],['aa','aa'],{a:aeItemList[i]});
    }

    for (let i = 0; i < aeStorageList.length; i++) {
        event.shaped(aeStorageList[i],[
            ['ae2:quartz_vibrant_glass','mekanism:alloy_atomic','ae2:quartz_vibrant_glass'],
            ['mekanism:alloy_atomic',aeItemList[i+1],'mekanism:alloy_atomic'],
            ['mekanism:ingot_refined_obsidian','mekanism:ingot_refined_obsidian','mekanism:ingot_refined_obsidian']
        ])
    }
})

const aeStorageList = [
    'meng:item_storage_cell_512k',
    'meng:item_storage_cell_1024k',
    'meng:item_storage_cell_2048k',
    'meng:item_storage_cell_4096k',
    'meng:item_storage_cell_8192k',
    'meng:item_storage_cell_16384k',
    'meng:item_storage_cell_32768k'
]

const aeItemList = [
    'ae2:cell_component_256k',
    'meng:cell_component_512k',
    'meng:cell_component_1024k',
    'meng:cell_component_2048k',
    'meng:cell_component_4096k',
    'meng:cell_component_8192k',
    'meng:cell_component_16384k',
    'meng:cell_component_32768k'
]

const ironTimbers = [
    {
        input: 'minecraft:oak_slab',
        output: 'meng:iron_oak_block'
    },
    {
        input: 'minecraft:acacia_slab',
        output: 'meng:iron_acacia_block'
    },
    {
        input: 'minecraft:birch_slab',
        output: 'meng:iron_birch_block'
    },
    {
        input: 'minecraft:cherry_slab',
        output: 'meng:iron_cherry_block'
    },
    {
        input: 'minecraft:crimson_slab',
        output: 'meng:iron_crimson_block'
    },
    {
        input: 'minecraft:dark_oak_slab',
        output: 'meng:iron_dark_oak_block'
    },
    {
        input: 'minecraft:jungle_slab',
        output: 'meng:iron_jungle_block'
    },
    {
        input: 'minecraft:mangrove_slab',
        output: 'meng:iron_mangrove_block'
    },
    {
        input: 'minecraft:spruce_slab',
        output: 'meng:iron_spruce_block'
    }, {
        input: 'minecraft:warped_slab',
        output: 'meng:iron_warped_block'
    }
]