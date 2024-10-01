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
            "input": MengUtils.StrToItemUtil.strProcessingNbtItem(inputItem),
            "result": MengUtils.StrToItemUtil.strProcessingNbtItem(outputItem)
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
            "input": MengUtils.StrToItemUtil.strProcessingNbtItem(inputItem),
            "result":  MengUtils.StrToItemUtil.strProcessingNbtItem(outputItem),
            "energy": energy,
            "maxChargeRate": maxChargeRate
        }
        ServerEvents.recipes(e => e.custom(obj))
    }
}