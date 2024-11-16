ServerEvents.recipes(event=>{
    const sequencedAssembly = event.recipes.create.sequenced_assembly
    const sequence = {
        /**
         * 压片
         */
        pressing : event.recipes.create.pressing,
        /**
         * 注液器
         */
        filling : event.recipes.create.filling,
        /**
         * 切石机
         */
        cutting : event.recipes.create.cutting,
        /**
         * 机械手
         */
        deploying : event.recipes.create.deploying,
        /**
        * 物品充电配方
        * @param {Internal.ItemStack} outputItem 输出物品
        * @param {Internal.Ingredient} inputItem 输入物品
        * @param {Number} energy 充满的所需电量
        */
         energising: function (inputItem, outputItem, energy) {
            return event.custom({
                "type": "create_new_age:energising",
                "ingredients": [MengUtils.StrToItemUtil.strProcessingNbtItem(inputItem)],
                "results": [MengUtils.StrToItemUtil.strProcessingNbtItem(outputItem)],
                "energy_needed": energy,
            })
        }
    }
})