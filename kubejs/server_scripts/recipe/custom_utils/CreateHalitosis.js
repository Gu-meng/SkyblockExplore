// priority: 3

const CreateHalitosis = {
    /**
     * 鼓风机龙息配方
     * @param {Internal.ItemStack} outputItems 输出物品(可为数组)
     * @param {Internal.Ingredient} inputItems 输入物品(可为数组)
     */
    halitosis: function (outputItems, inputItems) {
        let ingredientList = []
        let outputItemList = []
        ingredientList = MengUtils.StrToItemUtil.itemListProcessing(ingredientList, inputItems)
        outputItemList = MengUtils.StrToItemUtil.itemListProcessing(outputItemList, outputItems);
        const obj = {
            "type": "createhalitosis:halitosis",
            "ingredients": ingredientList,
            "results": outputItemList
        }
        ServerEvents.recipes(e => e.custom(obj))
    }
}