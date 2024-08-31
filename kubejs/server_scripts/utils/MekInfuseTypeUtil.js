// priority: 10

let $InfuseType = Java.loadClass("mekanism.api.chemical.infuse.InfuseType")

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