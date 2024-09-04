// priority: 5

let machineType = {
    splashing: {
        "meng:slag": []
    },
    ironMesh: [],
    andesiteMesh: [],
    diamondMesh: []
}

const splashingObjIds = [
    "meng:slag"
]

function setChanceAndCount(chance, count) {
    if (chance == undefined) chance = 0
    if (count == undefined) count = 1
    return {
        chance: chance,
        count: count
    }
}

const oreList = {
    /**
     * 铁尘
     */
    'meng:iron_dust': {
        splashing: {
            "meng:slag": setChanceAndCount()
        },
        ironMesh: setChanceAndCount(),
        andesiteMesh: setChanceAndCount(0.1),
        diamondMesh: setChanceAndCount()
    },
    /**
     * 铁粒
     */
    'minecraft:iron_nugget': {
        splashing: {
            "meng:slag": setChanceAndCount()
        },
        ironMesh: setChanceAndCount(0.08),
        andesiteMesh: setChanceAndCount(0.04),
        diamondMesh: setChanceAndCount(0.25, 3)
    },
    /**
     * 粉碎铁
     */
    'create:crushed_raw_iron': {
        splashing: {
            "meng:slag": setChanceAndCount(0.25)
        },
        ironMesh: setChanceAndCount(),
        andesiteMesh: setChanceAndCount(),
        diamondMesh: setChanceAndCount(0.4)
    },
    /**
     * 金粒
     */
    'minecraft:gold_nugget': {
        splashing: {
            "meng:slag": setChanceAndCount(0.25)
        },
        ironMesh: setChanceAndCount(0.03),
        andesiteMesh: setChanceAndCount(),
        diamondMesh: setChanceAndCount(0.25, 5)
    },
    /**
     * 粉碎金
     */
    'create:crushed_raw_gold': {
        splashing: {
            "meng:slag": setChanceAndCount()
        },
        ironMesh: setChanceAndCount(),
        andesiteMesh: setChanceAndCount(),
        diamondMesh: setChanceAndCount(0.25)
    },
    /**
     * 铜粒
     */
    'create:copper_nugget': {
        splashing: {
            "meng:slag": setChanceAndCount(0.8, 8)
        },
        ironMesh: setChanceAndCount(0.1),
        andesiteMesh: setChanceAndCount(0.06),
        diamondMesh: setChanceAndCount(0.55, 13)
    },
    /**
     * 粉碎铜
     */
    'create:crushed_raw_copper': {
        splashing: {
            "meng:slag": setChanceAndCount()
        },
        ironMesh: setChanceAndCount(),
        andesiteMesh: setChanceAndCount(),
        diamondMesh: setChanceAndCount(0.28, 3)
    },
    /**
     * 煤炭
     */
    'minecraft:coal': {
        splashing: {
            "meng:slag": setChanceAndCount(0.8, 5)
        },
        ironMesh: setChanceAndCount(0.3, 3),
        andesiteMesh: setChanceAndCount(0.3),
        diamondMesh: setChanceAndCount(0.56, 12)
    },
    /**
     * 红石粉粉
     */
    "meng:redstone_dust": {
        splashing: {
            "meng:slag": setChanceAndCount()
        },
        ironMesh: setChanceAndCount(),
        andesiteMesh: setChanceAndCount(0.05),
        diamondMesh: setChanceAndCount(0.33, 3)
    },
    /**
     * 红石
     */
    'minecraft:redstone': {
        splashing: {
            "meng:slag": setChanceAndCount(0.25, 13)
        },
        ironMesh: setChanceAndCount(0.05),
        andesiteMesh: setChanceAndCount(0.35, 3),
        diamondMesh: setChanceAndCount(0.48, 7)
    },
    /**
     * 青金石
     */
    'minecraft:lapis_lazuli': {
        splashing: {
            "meng:slag": setChanceAndCount(0.35, 7)
        },
        ironMesh: setChanceAndCount(0.08, 3),
        andesiteMesh: setChanceAndCount(0.06),
        diamondMesh: setChanceAndCount(0.35, 12)
    },
    /**
     * 紫水晶
     */
    'minecraft:amethyst_shard': {
        splashing: {
            "meng:slag": setChanceAndCount(0.1)
        },
        ironMesh: setChanceAndCount(),
        andesiteMesh: setChanceAndCount(),
        diamondMesh: setChanceAndCount(0.3)
    },
    /**
     * 钻石
     */
    'minecraft:diamond': {
        splashing: {
            "meng:slag": setChanceAndCount(0.009)
        },
        ironMesh: setChanceAndCount(),
        andesiteMesh: setChanceAndCount(),
        diamondMesh: setChanceAndCount(0.08)
    },
    /**
     * 绿宝石
     */
    'minecraft:emerald': {
        splashing: {
            "meng:slag": setChanceAndCount(0.009)
        },
        ironMesh: setChanceAndCount(),
        andesiteMesh: setChanceAndCount(),
        diamondMesh: setChanceAndCount(0.08)
    },
    /**
     * 下届石英
     */
    'minecraft:quartz': {
        splashing: {
            "meng:slag": setChanceAndCount()
        },
        ironMesh: setChanceAndCount(),
        andesiteMesh: setChanceAndCount(),
        diamondMesh: setChanceAndCount()
    },
    /**
     * 下届合金碎片
     */
    'minecraft:netherite_scrap': {
        splashing: {
            "meng:slag": setChanceAndCount()
        },
        ironMesh: setChanceAndCount(),
        andesiteMesh: setChanceAndCount(),
        diamondMesh: setChanceAndCount()

    },
    /**
     * 锡粒
     */
    'mekanism:nugget_tin': {
        splashing: {
            "meng:slag": setChanceAndCount(0.18)
        },
        ironMesh: setChanceAndCount(0.03),
        andesiteMesh: setChanceAndCount(),
        diamondMesh: setChanceAndCount(0.18, 3)
    },
    /**
     * 粉碎锡
     */
    'create:crushed_raw_tin': {
        splashing: {
            "meng:slag": setChanceAndCount()
        },
        ironMesh: setChanceAndCount(),
        andesiteMesh: setChanceAndCount(),
        diamondMesh: setChanceAndCount(0.25)
    },
    /**
     * 锇粒
     */
    'mekanism:nugget_osmium': {
        splashing: {
            "meng:slag": setChanceAndCount(0.018)
        },
        ironMesh: setChanceAndCount(0.005),
        andesiteMesh: setChanceAndCount(),
        diamondMesh: setChanceAndCount(0.18, 4)
    },
    /**
     * 粉碎锇
     */
    'create:crushed_raw_osmium': {
        splashing: {
            "meng:slag": setChanceAndCount()
        },
        ironMesh: setChanceAndCount(),
        andesiteMesh: setChanceAndCount(),
        diamondMesh: setChanceAndCount(0.11)
    },
    /**
     * 铀粒
     */
    'mekanism:nugget_uranium': {
        splashing: {
            "meng:slag": setChanceAndCount(0.018, 1)
        },
        ironMesh: setChanceAndCount(0.01),
        andesiteMesh: setChanceAndCount(),
        diamondMesh: setChanceAndCount()

    },
    /**
     * 粉碎铀
     */
    'create:crushed_raw_uranium': {
        splashing: {
            "meng:slag": setChanceAndCount()
        },
        ironMesh: setChanceAndCount(),
        andesiteMesh: setChanceAndCount(),
        diamondMesh: setChanceAndCount(0.11)
    },
    /**
     * 铅粒
     */
    'mekanism:nugget_lead': {
        splashing: {
            "meng:slag": setChanceAndCount(0.18)
        },
        ironMesh: setChanceAndCount(0.02),
        andesiteMesh: setChanceAndCount(),
        diamondMesh: setChanceAndCount()

    },
    /**
     * 粉碎铅
     */
    'create:crushed_raw_lead': {
        splashing: {
            "meng:slag": setChanceAndCount()
        },
        ironMesh: setChanceAndCount(),
        andesiteMesh: setChanceAndCount(),
        diamondMesh: setChanceAndCount(0.2)
    },
    /**
     * 锌粒
     */
    'create:zinc_nugget': {
        splashing: {
            "meng:slag": setChanceAndCount(0.18)
        },
        ironMesh: setChanceAndCount(0.05),
        andesiteMesh: setChanceAndCount(),
        diamondMesh: setChanceAndCount()

    },
    /**
     * 粉碎锌
     */
    'create:crushed_raw_zinc': {
        splashing: {
            "meng:slag": setChanceAndCount()
        },
        ironMesh: setChanceAndCount(),
        andesiteMesh: setChanceAndCount(),
        diamondMesh: setChanceAndCount(0.2)
    },
    'ae2:certus_quartz_crystal': {
        splashing: {
            "meng:slag": setChanceAndCount()
        },
        ironMesh: setChanceAndCount(),
        andesiteMesh: setChanceAndCount(),
        diamondMesh: setChanceAndCount(0.18)
    }
}


/**
 * 遍历所有矿石并记录到对象machineType里
 */
function getAllOre() {
    for (const key in oreList) {
        for (const splashingKey in machineType.splashing) {
            let item = searchingOre("splashing", key, splashingKey);
            if (item != null) machineType.splashing["meng:slag"].push(item)
        }

        let item = searchingOre("andesiteMesh", key);
        if (item != null) machineType.andesiteMesh.push(item)

        item = searchingOre("ironMesh", key);
        if (item != null) machineType.ironMesh.push(item)

        item = searchingOre("diamondMesh", key);
        if (item != null) machineType.diamondMesh.push(item)
    }
}

getAllOre()

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

function getDiamondMeshOre() {
    let list = []
    for (const key in oreList) {
        let item = searchingOre("diamondMesh", key);
        if (item != null) list.push(item)
    }
    return list
}