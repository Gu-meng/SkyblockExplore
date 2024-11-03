function getDirectionBlock(block, n) {
    const blocks = [
        {
            d: Direction.UP,
            b: block.up
        }, {
            d: Direction.DOWN,
            b: block.down
        }, {
            d: Direction.WEST,
            b: block.west
        }, {
            d: Direction.EAST,
            b: block.east
        }, {
            d: Direction.NORTH,
            b: block.north
        }, {
            d: Direction.SOUTH,
            b: block.south
        }
    ]
    return blocks[n]
}

global.setBlock = (rtc, newBlock) => {
    let blockObj = getDirectionBlock(rtc.block, rtc.random.nextInt(0, 6))
    if (blockObj.b.getBlockState().is(Blocks.AIR)) {
        let block = blockObj.b
        rtc.level.setBlockAndUpdate(
            block.pos,
            Block.getBlock(newBlock).defaultBlockState().setValue($BlockStateProperties.FACING, blockObj.d)
        )
    }
}

/**
 * 
 * @param {Internal.RandomTickCallbackJS} rtc 
 * @param {*} newBlock 
 */
global.setUpdateBlock = (rtc, newBlock) => {
    let bs = rtc.block.blockState
    rtc.block.setBlockState(
        Block.getBlock(newBlock).defaultBlockState().setValue(
            $BlockStateProperties.FACING,
            bs.getValue($BlockStateProperties.FACING)
        ),
        3
    )
}

/**
 * 
 * @param {Internal.BasicBlockJS$Builder} blockBuilder
 */
function createHud(item,blockBuilder, color, updateBlock, dropItem) {
    let facing = $BlockStateProperties.FACING

    blockBuilder
        .defaultCutout()
        .property(facing)
        .glassSoundType()
        .defaultState(bs => {
            bs.set(facing, Direction.UP)
        })
        .tag("meng:budding")
        .color(color)
        .item(itemBuilder => {
            itemBuilder.color(color)
        });
    if (updateBlock != undefined) {
        blockBuilder.randomTick(rtc => {
            global.setUpdateBlock(rtc, updateBlock)
        }).noDrops()
    } else {
        blockBuilder.lootTable = (loot) => {
            loot.addPool(pool => {
                pool.entries.addAll([buddingDropObj(item,dropItem)]);
            })
        }
    }
    return blockBuilder;
}

StartupEvents.registry("block", event => {
    Object.keys(budding).forEach(key => {
        let value = budding[key];
        event.create(value.budding)
            .textureAll("meng:block/budding/budding")
            .randomTick(rtc => {
                global.setBlock(rtc, value.small)
            })
            .tag("crystal_sound_blocks")
            .color(value.color)
            .item(itemBuilder => {
                itemBuilder.color(value.color)
            });
        createHud(value.cluster,event.create(value.cluster), value.color, undefined, value.dropItem)
        // .box(4, 0, 4, 13, 7, 13)

        createHud(value.large,event.create(value.large), value.color, value.cluster)
        // .box(4, 0, 4, 13, 5, 13)

        createHud(value.medium,event.create(value.medium), value.color, value.large)
        // .box(4, 0, 4, 13, 4, 13)

        createHud(value.small,event.create(value.small), value.color, value.medium)
        // .box(5, 0, 5, 12, 3, 12)
    })
})


const buddingDropObj = (item,dropItem) => {
    return {
        "type": "minecraft:alternatives",
        "children": [
            {
                "type": "minecraft:item",
                "conditions": [
                    {
                        "condition": "minecraft:match_tool",
                        "predicate": {
                            "enchantments": [
                                {
                                    "enchantment": "minecraft:silk_touch",
                                    "levels": {
                                        "min": 1
                                    }
                                }
                            ]
                        }
                    }
                ],
                "name": item
            },
            {
                "type": "minecraft:alternatives",
                "children": [
                    {
                        "type": "minecraft:item",
                        "conditions": [
                            {
                                "condition": "minecraft:match_tool",
                                "predicate": {
                                    "tag": "minecraft:cluster_max_harvestables"
                                }
                            }
                        ],
                        "functions": [
                            {
                                "add": false,
                                "count": 4.0,
                                "function": "minecraft:set_count"
                            },
                            {
                                "enchantment": "minecraft:fortune",
                                "formula": "minecraft:ore_drops",
                                "function": "minecraft:apply_bonus"
                            }
                        ],
                        "name": dropItem
                    },
                    {
                        "type": "minecraft:item",
                        "functions": [
                            {
                                "add": false,
                                "count": 2.0,
                                "function": "minecraft:set_count"
                            },
                            {
                                "function": "minecraft:explosion_decay"
                            }
                        ],
                        "name": dropItem
                    }
                ]
            }
        ]
    }
}