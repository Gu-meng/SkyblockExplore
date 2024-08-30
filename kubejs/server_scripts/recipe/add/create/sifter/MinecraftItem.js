// 下面是测试代码
let leaves = {
    'minecraft:oak_leaves':[
        Item.of('minecraft:apple').withChance(0.05),
        Item.of('minecraft:oak_sapling').withChance(0.1)
    ],
    'minecraft:spruce_leaves':[
        Item.of('minecraft:spruce_sapling').withChance(0.1)
    ],
    'minecraft:birch_leaves':[
        Item.of('minecraft:birch_sapling').withChance(0.1)
    ],
    'minecraft:jungle_leaves':[
        Item.of('minecraft:jungle_sapling').withChance(0.1)
    ],
    'minecraft:acacia_leaves':[
        Item.of('minecraft:acacia_sapling').withChance(0.1)
    ],
    'minecraft:dark_oak_leaves':[
        Item.of('minecraft:apple').withChance(0.05),
        Item.of('minecraft:dark_oak_sapling').withChance(0.1)
    ],
    'minecraft:cherry_leaves':[
        Item.of("minecraft:cherry_sapling").withChance(0.1),
        Item.of('minecraft:pink_petals').withChance(0.05)
    ]
}

for (const key in leaves) {
    let value = leaves[key]
    value.push(Item.of('minecraft:stick').withChance(0.1))
    stringMesh(value,key);
}

stringMesh([
    Item.of('minecraft:wheat_seeds').withChance(0.5),
    Item.of('minecraft:beetroot_seeds').withChance(0.2),
    Item.of('minecraft:carrot').withChance(0.1),
    Item.of('minecraft:potato').withChance(0.1),
    Item.of('minecraft:melon_seeds').withChance(0.05),
    Item.of('minecraft:pumpkin_seeds').withChance(0.05)
],'minecraft:dirt')

stringMesh([
    Item.of('minecraft:gold_nugget').withChance(0.03),
    Item.of('minecraft:dead_bush').withChance(0.05),
    Item.of('minecraft:rotten_flesh').withChance(0.03),
    Item.of('minecraft:bone').withChance(0.05)
],'minecraft:sand')

stringMesh([
    Item.of('minecraft:seagrass').withChance(0.1),
    Item.of('minecraft:kelp').withChance(0.05),
    Item.of('minecraft:sea_pickle').withChance(0.02),
    Item.of('minecraft:lily_pad').withChance(0.04),
    Item.of('minecraft:tube_coral').withChance(0.009),
    Item.of('minecraft:brain_coral').withChance(0.009),
    Item.of('minecraft:bubble_coral').withChance(0.009),
    Item.of('minecraft:fire_coral').withChance(0.009),
    Item.of('minecraft:horn_coral').withChance(0.009),
    Item.of('minecraft:tube_coral_fan').withChance(0.009),
    Item.of('minecraft:brain_coral_fan').withChance(0.009),
    Item.of('minecraft:bubble_coral_fan').withChance(0.009),
    Item.of('minecraft:fire_coral_fan').withChance(0.009),
    Item.of('minecraft:horn_coral_fan').withChance(0.009),
],'minecraft:sand',10,true)


andesiteMesh([
    Item.of('minecraft:rotten_flesh').withChance(0.03),
    Item.of('meng:iron_dust').withChance(0.1),
    Item.of('meng:redstone_dust').withChance(0.05),
    Item.of('minecraft:iron_nugget').withChance(0.04),
    Item.of('minecraft:raw_copper').withChance(0.06),
    Item.of('minecraft:lapis_lazuli').withChance(0.06),
    Item.of('minecraft:bone_meal').withChance(0.03),
    Item.of('meng:white_dust').withChance(0.03)
],'minecraft:gravel',20)