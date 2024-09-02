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
            "catalyst": {},
            "ingredients": [],
            "result": {},
            "tier": tier,
            "total_energy": energy
        }
        obj.catalyst = nbtProcessing(strSplitItem(inputItem))
        obj.ingredients = itemListProcessing(arr, ingredientList)
        obj.result = nbtProcessing(strSplitItem(outputItem))
        ServerEvents.recipes(e => {
            e.custom(obj)
        })
    }
}

const draconicTier = {
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

