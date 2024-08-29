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
        Item.of("minecraft:cherry_sapling").withChance(0.1)
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