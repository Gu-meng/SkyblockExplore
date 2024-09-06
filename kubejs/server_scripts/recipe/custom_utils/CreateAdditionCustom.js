// priority: 3

const createAddition = {
    /**
     * 轧机合成配方
     * @param {Internal.ItemStack} outputItem 输出物品
     * @param {Internal.Ingredient} inputItem 输入物品
     */
    rolling : function(outputItem,inputItem){
        const obj = {
            "type":"createaddition:rolling",
            "input": nbtProcessing(strSplitItem(inputItem)),
            "result": nbtProcessing(strSplitItem(outputItem))
        }
        ServerEvents.recipes(e => e.custom(obj))
    },
    /**
     * 物品充电配方
     * @param {Internal.ItemStack} outputItem 输出物品
     * @param {Internal.Ingredient} inputItem 输入物品
     * @param {Number} energy 充满的所需电量
     * @param {Number} maxChargeRate 最大充电功率
     */
    charging : function(outputItem,inputItem,energy,maxChargeRate){
        const obj = {
            "type":"createaddition:charging",
            "input": nbtProcessing(strSplitItem(inputItem)),
            "result":  nbtProcessing(strSplitItem(outputItem)),
            "energy": energy,
            "maxChargeRate": maxChargeRate
        }
        ServerEvents.recipes(e => e.custom(obj))
    }
}

// 下面是测试代码
createAddition.rolling('minecraft:diamond','#forge:ingots')
// createAddition.charging('minecraft:diamond','#forge:ingots',5000,200)