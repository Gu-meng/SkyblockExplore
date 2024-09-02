// priority: 5

const oreList = {
    /**
     * 铁尘
     */
    'meng:iron_dust': {
        splashing: {
            "meng:slag": {
                count: 1,
                chance: 0
            }
        },
        ironMesh: {
            count: 1,
            chance: 0
        },
        andesiteMesh: {
            count: 1,
            chance: 0.1
        }

    },
    /**
     * 铁粒
     */
    'minecraft:iron_nugget': {
        splashing: {
            "meng:slag": {
                count: 1,
                chance: 0
            }
        },

        ironMesh: {
            count: 1,
            chance: 0.08
        },
        andesiteMesh: {
            count: 1,
            chance: 0.04
        }
    },
    /**
     * 粉碎铁
     */
    'create:crushed_raw_iron': {
        splashing: {
            "meng:slag": {

                count: 1,
                chance: 0.25
            }
        },

        ironMesh: {
            count: 1,
            chance: 0
        },
        andesiteMesh: {
            count: 1,
            chance: 0
        }

    },
    /**
     * 金粒
     */
    'minecraft:gold_nugget': {
        splashing: {
            "meng:slag": {
                count: 1,
                chance: 0.25
            }
        },

        ironMesh: {
            count: 1,
            chance: 0.03
        },
        andesiteMesh: {
            count: 1,
            chance: 0
        }

    },
    /**
     * 粉碎金
     */
    'create:crushed_raw_gold': {
        splashing: {
            "meng:slag": {
                count: 1,
                chance: 0
            }
        },

        ironMesh: {
            count: 1,
            chance: 0
        },
        andesiteMesh: {
            count: 1,
            chance: 0
        }

    },
    /**
     * 铜粒
     */
    'create:copper_nugget': {
        splashing: {
            "meng:slag": {
                count: 8,
                chance: 0.8
            }
        },

        ironMesh: {
            count: 1,
            chance: 0.1
        },
        andesiteMesh: {
            count: 1,
            chance: 0.06
        }

    },
    /**
     * 粉碎铜
     */
    'create:crushed_raw_copper': {
        splashing: {
            "meng:slag": {
                count: 1,
                chance: 0
            }
        },

        ironMesh: {
            count: 1,
            chance: 0
        },
        andesiteMesh: {
            count: 1,
            chance: 0
        }

    },
    /**
     * 煤炭
     */
    'minecraft:coal': {
        splashing: {
            "meng:slag": {
                count: 5,
                chance: 0.8
            }
        },

        ironMesh: {
            count: 3,
            chance: 0.3
        },
        andesiteMesh: {
            count: 1,
            chance: 0.3
        }

    },
    /**
     * 红石粉粉
     */
    "meng:redstone_dust": {
        splashing: {
            "meng:slag": {
                count: 1,
                chance: 0
            }
        },

        ironMesh: {
            count: 1,
            chance: 0
        },
        andesiteMesh: {
            count: 1,
            chance: 0.05
        }

    },
    /**
     * 红石
     */
    'minecraft:redstone': {
        splashing: {
            "meng:slag": {
                count: 13,
                chance: 0.25
            }
        },

        ironMesh: {
            count: 1,
            chance: 0.05
        },
        andesiteMesh: {
            count: 1,
            chance: 0
        }

    },
    /**
     * 青金石
     */
    'minecraft:lapis_lazuli': {
        splashing: {
            "meng:slag": {
                count: 7,
                chance: 0.35
            }
        },

        ironMesh: {
            count: 3,
            chance: 0.08
        },
        andesiteMesh: {
            count: 1,
            chance: 0.06

        }
    },
    /**
     * 紫水晶
     */
    'minecraft:amethyst_shard': {
        splashing: {
            "meng:slag": {
                count: 1,
                chance: 0.1
            }
        },
        ironMesh: {
            count: 1,
            chance: 0
        },
        andesiteMesh: {
            count: 1,
            chance: 0
        }
    },
    /**
     * 钻石
     */
    'minecraft:diamond': {
        splashing: {
            "meng:slag": {
                count: 1,
                chance: 0.009
            }
        },

        ironMesh: {
            count: 1,
            chance: 0
        },
        andesiteMesh: {
            count: 1,
            chance: 0
        }

    },
    /**
     * 绿宝石
     */
    'minecraft:emerald': {
        splashing: {
            "meng:slag": {
                count: 1,
                chance: 0.009
            }
        },

        ironMesh: {
            count: 1,
            chance: 0
        },
        andesiteMesh: {
            count: 1,
            chance: 0

        }
    },
    /**
     * 下届石英
     */
    'minecraft:quartz': {
        splashing: {
            "meng:slag": {
                count: 1,
                chance: 0
            }
        },

        ironMesh: {
            count: 1,
            chance: 0
        },
        andesiteMesh: {
            count: 1,
            chance: 0
        }

    },
    /**
     * 下届合金碎片
     */
    'minecraft:netherite_scrap': {
        splashing: {
            "meng:slag": {
                count: 1,
                chance: 0
            }
        },

        ironMesh: {
            count: 1,
            chance: 0
        },
        andesiteMesh: {
            count: 1,
            chance: 0
        }

    },
    /**
     * 锡粒
     */
    'mekanism:nugget_tin': {
        splashing: {
            "meng:slag": {
                count: 1,
                chance: 0.18
            }
        },

        ironMesh: {
            count: 1,
            chance: 0.03
        },
        andesiteMesh: {
            count: 1,
            chance: 0
        }

    },
    /**
     * 粉碎锡
     */
    'create:crushed_raw_tin': {
        splashing: {
            "meng:slag": {
                count: 1,
                chance: 0
            }
        },

        ironMesh: {
            count: 1,
            chance: 0
        },
        andesiteMesh: {
            count: 1,
            chance: 0
        }

    },
    /**
     * 锇粒
     */
    'mekanism:nugget_osmium': {
        splashing: {
            "meng:slag": {
                count: 1,
                chance: 0.018
            }
        },

        ironMesh: {
            count: 1,
            chance: 0.005
        },
        andesiteMesh: {
            count: 1,
            chance: 0
        }

    },
    /**
     * 粉碎锇
     */
    'create:crushed_raw_osmium': {
        splashing: {
            "meng:slag": {
                count: 1,
                chance: 0
            }
        },

        ironMesh: {
            count: 1,
            chance: 0
        },
        andesiteMesh: {
            count: 1,
            chance: 0
        }

    },
    /**
     * 铀粒
     */
    'mekanism:nugget_uranium': {
        splashing: {
            "meng:slag": {
                count: 1,
                chance: 0.018
            }
        },

        ironMesh: {
            count: 1,
            chance: 0.01
        },
        andesiteMesh: {
            count: 1,
            chance: 0
        }

    },
    /**
     * 粉碎铀
     */
    'create:crushed_raw_uranium': {
        splashing: {
            "meng:slag": {
                count: 1,
                chance: 0
            }
        },

        ironMesh: {
            count: 1,
            chance: 0
        },
        andesiteMesh: {
            count: 1,
            chance: 0
        }

    },
    /**
     * 铅粒
     */
    'mekanism:nugget_lead': {
        splashing: {
            "meng:slag": {
                count: 1,
                chance: 0.18
            }
        },

        ironMesh: {
            count: 1,
            chance: 0.02
        },
        andesiteMesh: {
            count: 1,
            chance: 0
        }

    },
    /**
     * 粉碎铅
     */
    'create:crushed_raw_lead': {
        splashing: {
            "meng:slag": {
                count: 1,
                chance: 0
            }
        },

        ironMesh: {
            count: 1,
            chance: 0
        },
        andesiteMesh: {
            count: 1,
            chance: 0
        }

    },
    /**
     * 锌粒
     */
    'create:zinc_nugget': {
        splashing: {
            "meng:slag": {
                count: 1,
                chance: 0.18
            }
        },
        ironMesh: {
            count: 1,
            chance: 0.05
        },
        andesiteMesh: {
            count: 1,
            chance: 0
        }

    },
    /**
     * 粉碎锌
     */
    'create:crushed_raw_zinc': {
        splashing: {
            "meng:slag": {
                count: 1,
                chance: 0
            }
        },
        ironMesh: {
            count: 1,
            chance: 0
        },
        andesiteMesh: {
            count: 1,
            chance: 0
        }
    }
}

/**
 * 搜索矿物对应类型的参数 输入参数都为string
 * @param {String} type 类型
 * @param {Internal.ItemStack_} ore 矿物物品id
 * @param {Internal.ItemStack_} inputItem 输入的物品id
 * @returns 如果没搜索到矿或者矿物概率为0返回null,有则返回ItemStack
 */
function searchingOre(type, ore, inputItem) {
    let oreObj = oreList[ore]
    if (oreObj != undefined) {
        let itemObj = oreObj[type]
        if (type == "splashing") {
            itemObj = itemObj[inputItem]
        }
        if (itemObj.chance == 0) return null
        return Item.of(ore, itemObj.count).withChance(itemObj.chance)
    }
    return null
}

function getSplashingOre(inputItem) {
    let list = []
    for (const key in oreList) {
        let item = searchingOre("splashing", key, inputItem);
        if (item != null) list.push(item)

    }
    return list
}

function getAndesiteMeshOre() {
    let list = []
    for (const key in oreList) {
        let item = searchingOre("andesiteMesh", key);
        if (item != null) list.push(item)

    }
    return list
}

function getIronMeshOre() {
    let list = []
    for (const key in oreList) {
        let item = searchingOre("ironMesh", key);
        if (item != null) list.push(item)
    }
    return list
}