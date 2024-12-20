// priority: 10

const draconicRecipe = {
    /**
     * 
     * @param {Internal.ItemStack} outputItem 
     * @param {Internal.Ingredient} inputItem 
     * @param {Internal.Ingredient} ingredientList 
     * @param {draconicTier} tier 
     * @param {Number} energy 
     */
    fusionCrafting: function (outputItem, inputItem, ingredientList, tier, energy) {
        let arr = []
        let obj = {
            "type": "draconicevolution:fusion_crafting",
            "catalyst": MengUtils.StrToItemUtil.strProcessingNbtItem(inputItem),
            "ingredients": [],
            "result": MengUtils.StrToItemUtil.strProcessingNbtItem(outputItem),
            "tier": tier,
            "total_energy": energy
        }
        obj.ingredients = MengUtils.StrToItemUtil.itemListProcessing(arr, ingredientList)
        customList.push(obj)
    }
}

const draconicTier = {
    /**
     * 基础
     */
    DRACONIUM:"DRACONIUM",
    /**
     * 飞龙
     */
    WYVERN: "WYVERN",
    /**
     * 神龙
     */
    DRACONIC: "DRACONIC",
    /**
     * 混沌
     */
    CHAOTIC: "CHAOTIC"
}

