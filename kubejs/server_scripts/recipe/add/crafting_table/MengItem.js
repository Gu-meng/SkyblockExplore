ServerEvents.recipes(event=>{
    event.shapeless("4x meng:iron_dust",["minecraft:iron_nugget"]);

    event.shaped("meng:crushbone_sword",[
        ['','meng:crushbone'],
        ['minecraft:stick','']
    ]);

    event.shaped("meng:crushbone_axe",[
        ['meng:crushbone','meng:crushbone',''],
        ['meng:crushbone','minecraft:stick',''],
        ['','minecraft:stick','']
    ]);

    event.shapeless("7x meng:iron_dust",['minecraft:bone']);

    event.shaped('meng:iron_frame',[
        ["minecraft:iron_nugget","minecraft:iron_nugget","minecraft:iron_nugget"],
        ["minecraft:iron_nugget","","minecraft:iron_nugget"],
        ["minecraft:iron_nugget","minecraft:iron_nugget","minecraft:iron_nugget"]
    ])

    event.shapeless("meng:iron_mesh",["meng:iron_frame","minecraft:iron_nugget","minecraft:iron_nugget","minecraft:iron_nugget","minecraft:iron_nugget"]);

    event.shaped("meng:rain_doll",[
        ['','minecraft:white_wool'],
        [Item.of('minecraft:potion', {Potion:"minecraft:water"}).strongNBT(),'minecraft:white_wool',Item.of('minecraft:potion', {Potion:"minecraft:water"}).strongNBT()],
        ['','minecraft:white_wool']
    ]).replaceIngredient(Item.of('minecraft:potion', {Potion:"minecraft:water"}).strongNBT(),'minecraft:glass_bottle');

    ironTimbers.forEach(value=>{
        event.shaped(value.output,[
            [value.input],
            ['create:iron_sheet'],
            [value.input]
        ])
    })
})

const ironTimbers = [
    {
        input:'minecraft:oak_slab',
        output:'meng:iron_oak_block'   
    },
    {
        input:'minecraft:acacia_slab',
        output:'meng:iron_acacia_block'
    },
    {
        input:'minecraft:birch_slab',
        output:'meng:iron_birch_block'
    },
    {
        input:'minecraft:cherry_slab',
        output:'meng:iron_cherry_block'
    },
    {
        input:'minecraft:crimson_slab',
        output:'meng:iron_crimson_block'
    },
    {
        input:'minecraft:dark_oak_slab',
        output:'meng:iron_dark_oak_block'
    },
    {
        input:'minecraft:jungle_slab',
        output:'meng:iron_jungle_block'
    },
    {
        input:'minecraft:mangrove_slab',
        output:'meng:iron_mangrove_block'
    },
    {
        input:'minecraft:spruce_slab',
        output:'meng:iron_spruce_block'
    },{
        input:'minecraft:warped_slab',
        output:'meng:iron_warped_block'
    }
]