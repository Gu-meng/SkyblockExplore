// priority: 10

const createNewAge = {
    /**
    * 物品充电配方
    * @param {Internal.ItemStack} outputItem 输出物品
    * @param {Internal.Ingredient} inputItem 输入物品
    * @param {Number} energy 充满的所需电量
    */
    energising: function (outputItem, inputItem, energy) {
        const obj = {
            "type": "create_new_age:energising",
            "ingredients": [MengUtils.StrToItemUtil.strProcessingNbtItem(inputItem)],
            "results": [MengUtils.StrToItemUtil.strProcessingNbtItem(outputItem)],
            "energy_needed": energy,
        }
        ServerEvents.recipes(e =>{
            e.custom(obj)
        })
    }
}

