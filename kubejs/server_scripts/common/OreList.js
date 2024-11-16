// priority: 5

let machineType = {
    splashing: {
        "meng:slag": []
    },
    andesiteMesh: [],
    copperMesh:[],
    ironMesh: [],
    diamondMesh: [],
    quartzMesh: [],
    netheriteMesh: []
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
     * 安山岩石子
     */
    "meng:small_andesite":{
        splashing: {
            "meng:slag": setChanceAndCount()
        },
        copperMesh : setChanceAndCount(0.25),
        ironMesh: setChanceAndCount(),
        andesiteMesh: setChanceAndCount(0.18),
        diamondMesh: setChanceAndCount(),
        quartzMesh: setChanceAndCount(),
        netheriteMesh: setChanceAndCount(),
    },
    /**
     * 闪长岩石子
     */
    "meng:small_diorite":{
        splashing: {
            "meng:slag": setChanceAndCount()
        },
        copperMesh : setChanceAndCount(0.25),
        ironMesh: setChanceAndCount(),
        andesiteMesh: setChanceAndCount(0.18),
        diamondMesh: setChanceAndCount(),
        quartzMesh: setChanceAndCount(),
        netheriteMesh: setChanceAndCount()
    },
    /**
     * 圆石石子
     */
    "meng:small_cobblestone":{
        splashing: {
            "meng:slag": setChanceAndCount()
        },
        copperMesh : setChanceAndCount(0.25),
        ironMesh: setChanceAndCount(),
        andesiteMesh: setChanceAndCount(0.18),
        diamondMesh: setChanceAndCount(),
        quartzMesh: setChanceAndCount(),
        netheriteMesh: setChanceAndCount()
    },
    /**
     * 铁尘
     */
    'meng:iron_dust': {
        splashing: {
            "meng:slag": setChanceAndCount()
        },
        andesiteMesh: setChanceAndCount(0.32),
        copperMesh : setChanceAndCount(0.65),
        ironMesh: setChanceAndCount(),
        diamondMesh: setChanceAndCount(),
        quartzMesh: setChanceAndCount(),
        netheriteMesh: setChanceAndCount()
    },
    /**
     * 铁粒
     */
    'minecraft:iron_nugget': {
        splashing: {
            "meng:slag": setChanceAndCount()
        },
        andesiteMesh: setChanceAndCount(),
        copperMesh : setChanceAndCount(0.35,4),
        ironMesh: setChanceAndCount(0.4),
        diamondMesh: setChanceAndCount(),
        quartzMesh: setChanceAndCount(),
        netheriteMesh: setChanceAndCount()
    },
    /**
     * 粉碎铁
     */
    'create:crushed_raw_iron': {
        splashing: {
            "meng:slag": setChanceAndCount(0.25)
        },
        andesiteMesh: setChanceAndCount(),
        copperMesh : setChanceAndCount(),
        ironMesh: setChanceAndCount(),
        diamondMesh: setChanceAndCount(0.5,5),
        quartzMesh: setChanceAndCount(),
        netheriteMesh: setChanceAndCount(1,5)
    },
    /**
     * 金粒
     */
    'minecraft:gold_nugget': {
        splashing: {
            "meng:slag": setChanceAndCount(0.25)
        },
        andesiteMesh: setChanceAndCount(),
        copperMesh : setChanceAndCount(0.01),
        ironMesh: setChanceAndCount(0.05),
        diamondMesh: setChanceAndCount(),
        quartzMesh: setChanceAndCount(),
        netheriteMesh: setChanceAndCount()
    },
    /**
     * 粉碎金
     */
    'create:crushed_raw_gold': {
        splashing: {
            "meng:slag": setChanceAndCount()
        },
        andesiteMesh: setChanceAndCount(),
        copperMesh : setChanceAndCount(),
        ironMesh: setChanceAndCount(),
        diamondMesh: setChanceAndCount(0.25),
        quartzMesh: setChanceAndCount(),
        netheriteMesh: setChanceAndCount(0.8,3)
    },
    /**
     * 铜粒
     */
    'create:copper_nugget': {
        splashing: {
            "meng:slag": setChanceAndCount(0.8, 8)
        },
        andesiteMesh: setChanceAndCount(0.12),
        copperMesh : setChanceAndCount(0.2),
        ironMesh: setChanceAndCount(),
        diamondMesh: setChanceAndCount(),
        quartzMesh: setChanceAndCount(),
        netheriteMesh: setChanceAndCount()
    },
    /**
     * 粉碎铜
     */
    'create:crushed_raw_copper': {
        splashing: {
            "meng:slag": setChanceAndCount()
        },
        andesiteMesh: setChanceAndCount(),
        copperMesh : setChanceAndCount(),
        ironMesh: setChanceAndCount(),
        diamondMesh: setChanceAndCount(0.1, 3),
        quartzMesh: setChanceAndCount(),
        netheriteMesh: setChanceAndCount()
    },
    /**
     * 青金石
     */
    'minecraft:lapis_lazuli': {
        splashing: {
            "meng:slag": setChanceAndCount(0.35, 7)
        },
        andesiteMesh: setChanceAndCount(0.06),
        copperMesh : setChanceAndCount(),
        ironMesh: setChanceAndCount(),
        diamondMesh: setChanceAndCount(),
        quartzMesh: setChanceAndCount(),
        netheriteMesh: setChanceAndCount()
    },
    /**
     * 紫水晶
     */
    'minecraft:amethyst_shard': {
        splashing: {
            "meng:slag": setChanceAndCount(0.1)
        },
        andesiteMesh: setChanceAndCount(),
        copperMesh : setChanceAndCount(),
        ironMesh: setChanceAndCount(),
        diamondMesh: setChanceAndCount(0.3),
        quartzMesh: setChanceAndCount(0.18, 2),
        netheriteMesh: setChanceAndCount()
    },
    /**
     * 钻石
     */
    'minecraft:diamond': {
        splashing: {
            "meng:slag": setChanceAndCount(0.009)
        },
        andesiteMesh: setChanceAndCount(),
        copperMesh : setChanceAndCount(),
        ironMesh: setChanceAndCount(),
        diamondMesh: setChanceAndCount(0.08),
        quartzMesh: setChanceAndCount(0.18),
        netheriteMesh: setChanceAndCount(0.4,2)
    },
    /**
     * 绿宝石
     */
    'minecraft:emerald': {
        splashing: {
            "meng:slag": setChanceAndCount(0.009)
        },
        andesiteMesh: setChanceAndCount(),
        copperMesh : setChanceAndCount(),
        ironMesh: setChanceAndCount(0.02),
        diamondMesh: setChanceAndCount(0.08),
        quartzMesh: setChanceAndCount(0.25),
        netheriteMesh: setChanceAndCount(0.45,4)
    },
    /**
     * 锡粒
     */
    'mekanism:nugget_tin': {
        splashing: {
            "meng:slag": setChanceAndCount(0.18)
        },
        andesiteMesh: setChanceAndCount(),
        copperMesh : setChanceAndCount(0.01),
        ironMesh: setChanceAndCount(0.03),
        diamondMesh: setChanceAndCount(),
        quartzMesh: setChanceAndCount(),
        netheriteMesh: setChanceAndCount()
    },
    /**
     * 粉碎锡
     */
    'create:crushed_raw_tin': {
        splashing: {
            "meng:slag": setChanceAndCount()
        },
        andesiteMesh: setChanceAndCount(),
        copperMesh : setChanceAndCount(),
        ironMesh: setChanceAndCount(), 
        diamondMesh: setChanceAndCount(0.25),
        quartzMesh: setChanceAndCount(0.13, 2),
        netheriteMesh: setChanceAndCount(0.8,4)
    },
    /**
     * 锇粒
     */
    'mekanism:nugget_osmium': {
        splashing: {
            "meng:slag": setChanceAndCount(0.018)
        },
        andesiteMesh: setChanceAndCount(),
        copperMesh : setChanceAndCount(),
        ironMesh: setChanceAndCount(0.005), 
        diamondMesh: setChanceAndCount(0.18, 4),
        quartzMesh: setChanceAndCount(),
        netheriteMesh: setChanceAndCount()
    },
    /**
     * 粉碎锇
     */
    'create:crushed_raw_osmium': {
        splashing: {
            "meng:slag": setChanceAndCount()
        },
        andesiteMesh: setChanceAndCount(),
        copperMesh : setChanceAndCount(),
        ironMesh: setChanceAndCount(), 
        diamondMesh: setChanceAndCount(0.11),
        quartzMesh: setChanceAndCount(0.16, 2),
        netheriteMesh: setChanceAndCount(0.5,4)
    },
    /**
     * 铀粒
     */
    'mekanism:nugget_uranium': {
        splashing: {
            "meng:slag": setChanceAndCount(0.018, 1)
        },
        andesiteMesh: setChanceAndCount(),
        copperMesh : setChanceAndCount(),
        ironMesh: setChanceAndCount(),  
        diamondMesh: setChanceAndCount(),
        quartzMesh: setChanceAndCount(0.1, 3),
        netheriteMesh: setChanceAndCount()

    },
    /**
     * 粉碎铀
     */
    'create:crushed_raw_uranium': {
        splashing: {
            "meng:slag": setChanceAndCount()
        },
        andesiteMesh: setChanceAndCount(),
        copperMesh : setChanceAndCount(),
        ironMesh: setChanceAndCount(),
        diamondMesh: setChanceAndCount(),
        quartzMesh: setChanceAndCount(),
        netheriteMesh: setChanceAndCount(0.1,3)
    },
    /**
     * 铅粒
     */
    'mekanism:nugget_lead': {
        splashing: {
            "meng:slag": setChanceAndCount(0.18)
        },
        andesiteMesh: setChanceAndCount(),
        copperMesh : setChanceAndCount(0.01),
        ironMesh: setChanceAndCount(0.02),
        diamondMesh: setChanceAndCount(),
        quartzMesh: setChanceAndCount(),
        netheriteMesh: setChanceAndCount()

    },
    /**
     * 粉碎铅
     */
    'create:crushed_raw_lead': {
        splashing: {
            "meng:slag": setChanceAndCount()
        },
        andesiteMesh: setChanceAndCount(),
        copperMesh : setChanceAndCount(),
        ironMesh: setChanceAndCount(),
        diamondMesh: setChanceAndCount(0.2),
        quartzMesh: setChanceAndCount(0.35, 2),
        netheriteMesh: setChanceAndCount(0.8,4)
    },
    /**
     * 锌粒
     */
    'create:zinc_nugget': {
        splashing: {
            "meng:slag": setChanceAndCount(0.18)
        },
        andesiteMesh: setChanceAndCount(),
        copperMesh : setChanceAndCount(0.01),
        ironMesh: setChanceAndCount(0.05),
        diamondMesh: setChanceAndCount(),
        quartzMesh: setChanceAndCount(),
        netheriteMesh: setChanceAndCount()

    },
    /**
     * 粉碎锌
     */
    'create:crushed_raw_zinc': {
        splashing: {
            "meng:slag": setChanceAndCount()
        },
        andesiteMesh: setChanceAndCount(),
        copperMesh : setChanceAndCount(),
        ironMesh: setChanceAndCount(),
        diamondMesh: setChanceAndCount(0.2),
        quartzMesh: setChanceAndCount(0.34, 2),
        netheriteMesh: setChanceAndCount(0.7,4)
    },
    /**
     * 赛特斯水晶
     */
    'ae2:certus_quartz_crystal': {
        splashing: {
            "meng:slag": setChanceAndCount()
        },
        andesiteMesh: setChanceAndCount(),
        copperMesh : setChanceAndCount(),
        ironMesh: setChanceAndCount(),
        diamondMesh: setChanceAndCount(0.18),
        quartzMesh: setChanceAndCount(0.56),
        netheriteMesh: setChanceAndCount()
    },
    /**
     * 金属钍
     */
    'create_new_age:thorium':{
        splashing: {
            "meng:slag": setChanceAndCount()
        },
        andesiteMesh: setChanceAndCount(),
        copperMesh : setChanceAndCount(),
        ironMesh: setChanceAndCount(0.05),
        diamondMesh: setChanceAndCount(),
        quartzMesh: setChanceAndCount(0.46),
        netheriteMesh: setChanceAndCount()
    },
    /**
     * 氟石
     */
    'mekanism:fluorite_gem':{
        splashing: {
            "meng:slag": setChanceAndCount(0.3)
        },
        andesiteMesh: setChanceAndCount(),
        copperMesh : setChanceAndCount(),
        ironMesh: setChanceAndCount(),
        diamondMesh: setChanceAndCount(),
        quartzMesh: setChanceAndCount(),
        netheriteMesh: setChanceAndCount(0.52,3)
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

        item = searchingOre("copperMesh", key);
        if (item != null) machineType.copperMesh.push(item)

        item = searchingOre("ironMesh", key);
        if (item != null) machineType.ironMesh.push(item)

        item = searchingOre("diamondMesh", key);
        if (item != null) machineType.diamondMesh.push(item)

        item = searchingOre("quartzMesh", key);
        if (item != null) machineType.quartzMesh.push(item)

        item = searchingOre("netheriteMesh",key);
        if (item != null) machineType.netheriteMesh.push(item)
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

function getCopperMeshOre() {
    let list = []
    for (const key in oreList) {
        let item = searchingOre("copperMesh", key);
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

function getQuartzMeshOre() {
    let list = []
    for (const key in oreList) {
        let item = searchingOre("quartzMesh", key);
        if (item != null) list.push(item)
    }
    return list
}