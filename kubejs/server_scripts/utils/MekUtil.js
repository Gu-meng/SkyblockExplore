// priority: 10

const MekUtil = {
    /**
     * 判断id是否为mek的气体
     * @param {String} str 气体id
     * @returns 
     */
    isGas: function (str) {
        let gas = $Gas.getFromRegistry(str)
        return !gas.isEmptyType()
    },
    gasFunc: function (gasId, amount) {

    },
    /**
     * 判断是否为灌注类型
     * @param {String} 灌注类型id 
     * @returns 
     */
    isInfuseType: function (str) {
        let infuse = $InfuseType.getFromRegistry(str);
        return !infuse.isEmptyType();
    },
    /**
     * 返回灌注对象的jsonObj类型
     * @param {Internal.InfuseType} InfuseTypeId 
     * @param {Number} count 
     */
    infuseTypeFunc: function(InfuseTypeId,amount){
        if (MekUtil.isInfuseType(str)) {
            return {
                infuse_type: str,
                amount: count
            }
        } else {
            return {
                amount: count,
                tag: str
            }
        }
    }
}

/**
 * 判断是否为灌注类型
 * @param {String} 灌注类型id 
 * @returns 
 */
function isInfuseType(str) {
    let infuse = $InfuseType.getFromRegistry(str);
    return !infuse.isEmptyType();
}

/**
 * 
 * @param {Internal.InfuseType} str 
 * @param {Number} count 
 */
function infuseTypeFunc(str, count) {
    if (isInfuseType(str)) {
        return {
            infuse_type: str,
            amount: count
        }
    } else {
        return {
            amount: count,
            tag: str
        }
    }
}

const MekInfuse = {
    /**
     * 碳
     */
    carbon: "mekanism:carbon",
    /**
     * 红石
     */
    redstone: "mekanism:redstone",
    /**
     * 生物质
     */
    bio: "mekanism:bio",
    /**
     * 钻石
     */
    diamond: "mekanism:diamond",
    /**
     * 金
     */
    gold: "mekanism:gold",
    /**
     * 锡
     */
    tin: "mekanism:tin",
    /**
     * 真菌
     */
    fungi: "mekanism:fungi",
    /**
     * 强化黑曜石
     */
    refinedObsidian: "mekanism:refined_obsidian",
    /**
     * 灌注合金
     */
    alloyInfused: "meng:alloy_infused",
    /**
     * 强化合金
     */
    alloyReinforced: "meng:alloy_reinforced",
    /**
     * 原子合金
     */
    alloyAtomic: "meng:alloy_atomic",
    /**
     * 龙息
     */
    dragonBreath: "meng:dragon_breath",
}

const MekGas = {

}