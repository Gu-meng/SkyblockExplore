// priority: 3

const AERecipe = {
    /**
     * 世界交互爆炸合成
     * @param {Internal.ItemStack} outputItem 输出物品
     * @param {Internal.Ingredient} inputItems 输入物品(可为数组)
     */
    transformExplosion: function (outputItem, inputItems) {
        let ingredientList = []

        let obj = {
            "type": "ae2:transform",
            "circumstance": {
                "type": "explosion"
            },
            "ingredients": itemListProcessing(ingredientList, inputItems),
            "result": MengUtils.StrToItemUtil.strProcessingNbtItem(outputItem)
        }
        ServerEvents.recipes(e => e.custom(obj))
    },
    /**
     * 世界互动流体内合成
     * @param {Internal.ItemStack} outputItem 输出物品
     * @param {Internal.Ingredient} inputItems 输入物品(可为数组) 默认包含一个充能赛特斯水晶(不然配方无法识别)
     * @param {String} FluidTag 
     */
    transformFluid: function (outputItem, inputItems, FluidTag) {
        let ingredientList = [{
            "item": 'ae2:charged_certus_quartz_crystal'
        }]
        let obj = {
            "type": "ae2:transform",
            "circumstance": {
                "type": "fluid",
                "tag": FluidTag
            },
            "ingredients": itemListProcessing(ingredientList, inputItems),
            "result": MengUtils.StrToItemUtil.strProcessingNbtItem(outputItem)
        }
        ServerEvents.recipes(e => e.custom(obj))
    },
    /**
     * 压印机挤压合成模式(需要提供至少一个top或者bottom)
     * @param {Internal.ItemStack} outputItem 输出物品
     * @param {Internal.Ingredient} inputTop 机器上方输入物品
     * @param {Internal.Ingredient} inputMiddle 机器中间输入物品
     * @param {Internal.Ingredient} inputBottom 机器下方输入物品
     */
    inscriberPress: function (outputItem, inputTop, inputMiddle, inputBottom) {
        let obj = {
            "type": "ae2:inscriber",
            "ingredients": {
                "bottom": MengUtils.StrToItemUtil.strProcessingNbtItem(inputBottom),
                "middle": MengUtils.StrToItemUtil.strProcessingNbtItem(inputMiddle),
                "top": MengUtils.StrToItemUtil.strProcessingNbtItem(inputTop)
            },
            "mode": "press",
            "result": MengUtils.StrToItemUtil.strProcessingNbtItem(outputItem)
        }
        ServerEvents.recipes(e => e.custom(obj))
    },
    /**
     * 压印机 压制合成模式(只需要传入一个输入)
     * @param {Internal.ItemStack} outputItem 输出物品
     * @param {Internal.Ingredient} inputItem 输入物品
     */
    inscriberInscribe: function (outputItem, inputItem) {
        let obj = {
            "type": "ae2:inscriber",
            "ingredients": {
                "middle": MengUtils.StrToItemUtil.strProcessingNbtItem(inputItem)
            },
            "mode": "inscribe",
            "result": MengUtils.StrToItemUtil.strProcessingNbtItem(outputItem)
        }
        ServerEvents.recipes(e => e.custom(obj))
    }
}
// 下面只是测试代码
AERecipe.transformExplosion("minecraft:bucket", "minecraft:diamond");
AERecipe.transformExplosion("minecraft:bucket", ["minecraft:diamond", 'minecraft:ancient_debris']);
AERecipe.transformExplosion("minecraft:bucket", ["minecraft:diamond", 'minecraft:ancient_debris', Item.of('minecraft:ender_pearl')]);
AERecipe.transformExplosion(Item.of('minecraft:enchanted_book').enchant('minecraft:protection', 4), ["minecraft:diamond", 'minecraft:ancient_debris', Item.of('minecraft:ender_pearl'), '#forge:ingots']);

AERecipe.transformFluid('3x minecraft:iron_ingot', "minecraft:gold_ingot", "minecraft:water");