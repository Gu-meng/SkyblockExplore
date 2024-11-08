// priority: 10

let MekRecipe = {
    /**
     * 注册提纯仓
     * @param {Internal.ItemStack} outputItem 输出物品
     * @param {Internal.Ingredient} inputItem 输入物品
     * @param {String} chemicalInputGas 所需气体id
     * @param {Number} chemicalInputAmount 所需气体数量(n * 200mb) 默认为1
     */
    purifying: function (outputItem, inputItem, chemicalInputGas, chemicalInputAmount) {
        if (chemicalInputAmount == undefined) chemicalInputAmount = 1
        let obj = {
            type: "mekanism:purifying",
            "chemicalInput": {
                amount: chemicalInputAmount,
                gas: chemicalInputGas
            },
            itemInput: { ingredient: MengUtils.StrToItemUtil.strProcessingNbtItem(inputItem) },
            output: MengUtils.StrToItemUtil.strProcessingNbtItem(outputItem)
        }
        ServerEvents.recipes(e => e.custom(obj))
    },
    /**
     * 注册化学压射室
     * @param {Internal.Ingredient} inputItem 输入物品
     * @param {Internal.ItemStack} outputItem 输出物品
     * @param {String} chemicalInputGas 所需气体id
     * @param {Number} chemicalInputAmount 所需气体数量(n * 200mb)
     */
    injecting: function (outputItem, inputItem, chemicalInputGas, chemicalInputAmount) {
        if (chemicalInputAmount == undefined) chemicalInputAmount = 1
        let obj = {
            "type": "mekanism:injecting",
            "chemicalInput": {
                "amount": chemicalInputAmount,
                "gas": chemicalInputGas
            },
            "itemInput": { "ingredient": MengUtils.StrToItemUtil.strProcessingNbtItem(inputItem) },
            "output": MengUtils.StrToItemUtil.strProcessingNbtItem(outputItem)
        }
        ServerEvents.recipes(e => e.custom(obj))
    },
    /**
     * 注册融合机
     * @param {Internal.Ingredient} downInputItem 输入物品(配方下面的格子)
     * @param {Internal.Ingredient} upInputItem 输入物品(配方上面的格子)
     * @param {Internal.ItemStack} outputItem 输出物品
     */
    combining: function (outputItem, downInputItem, upInputItem) {
        let upInputItemObj = MengUtils.StrToItemUtil.strProcessingNbtItem(upInputItem)
        let obj = {
            "type": "mekanism:combining",
            "extraInput": { "ingredient": MengUtils.StrToItemUtil.strProcessingNbtItem(downInputItem) },
            "mainInput": {
                "amount": upInputItemObj.count,
                "ingredient": upInputItemObj
            },
            "output": MengUtils.StrToItemUtil.strProcessingNbtItem(outputItem)
        }
        ServerEvents.recipes(e => e.custom(obj))
    },
    /**
     * 粉碎机
     * @param {Internal.ItemStack} outputItem 输出物品
     * @param {Internal.Ingredient} inputItem 输入物品
     */
    crushing: function (outputItem, inputItem) {
        let obj = {
            "type": "mekanism:crushing",
            "input": { "ingredient": MengUtils.StrToItemUtil.strProcessingNbtItem(inputItem) },
            "output": MengUtils.StrToItemUtil.strProcessingNbtItem(outputItem)
        }
        ServerEvents.recipes(e => e.custom(obj))
    },
    /**
     * 富集仓
     * @param {Internal.ItemStack} outputItem 输出物品
     * @param {Internal.Ingredient} inputItem 输入物品
     */
    enriching: function (outputItem, inputItem) {
        let obj = {
            "type": "mekanism:enriching",
            "input": { "ingredient": MengUtils.StrToItemUtil.strProcessingNbtItem(inputItem) },
            "output": MengUtils.StrToItemUtil.strProcessingNbtItem(outputItem)
        }
        ServerEvents.recipes(e => e.custom(obj))
    },
    /**
     * 冶金灌注机
     * @param {Internal.Ingredient} inputItem 输入物品
     * @param {Internal.ItemStack} outputItem 输出物品
     * @param {MekInfuse} chemicalInput 所需灌注id
     * @param {Number} chemicalInputAmount 所需数量
     */
    metallurgicInfusing: function (outputItem, inputItem, chemicalInput, chemicalInputAmount) {
        let chemicalInputObj = infuseTypeFunc(chemicalInput, chemicalInputAmount)
        let obj = {
            "type": "mekanism:metallurgic_infusing",
            "chemicalInput": chemicalInputObj,
            "itemInput": { "ingredient": MengUtils.StrToItemUtil.strProcessingNbtItem(inputItem) },
            "output": MengUtils.StrToItemUtil.strProcessingNbtItem(outputItem)
        }
        ServerEvents.recipes(e => e.custom(obj))
    },
    /**
     * 锇压缩机
     * @param {Internal.Ingredient} inputItem 输入物品
     * @param {Internal.ItemStack} outputItem 输出物品
     * @param {String} chemicalInputGas 所需气体id
     * @param {Number} chemicalInputAmount 所需气体数量(n * 200mb) 默认为1
     */
    compressing: function (outputItem, inputItem, chemicalInputGas, chemicalInputAmount) {
        if (chemicalInputAmount == undefined) chemicalInputAmount = 1
        let obj = {
            "type": "mekanism:compressing",
            "chemicalInput": {
                "amount": chemicalInputAmount,
                "gas": chemicalInputGas
            },
            "itemInput": { "ingredient": MengUtils.StrToItemUtil.strProcessingNbtItem(inputItem) },
            "output": MengUtils.StrToItemUtil.strProcessingNbtItem(outputItem)
        }
        ServerEvents.recipes(e => e.custom(obj))
    },
    /**
     * 
     * @param {Internal.ItemStack} outputItem 输出物品
     * @param {Internal.ItemStack} extraOutputItem 额外输出物品 可以为空
     * @param {Number} extraItemProbability 额外输出物品的概率(1为100%) 默认概率为100% 可以为空
     * @param {Internal.Ingredient} inputItem 输入物品
     */
    sawing: function (outputItem, inputItem, extraOutputItem, extraItemProbability) {
        let extraOutputItemObj;
        if (extraOutputItem != undefined) extraOutputItemObj = MengUtils.StrToItemUtil.strProcessingNbtItem(extraOutputItem)
        let obj = {
            "type": "mekanism:sawing",
            "input": { "ingredient": MengUtils.StrToItemUtil.strProcessingNbtItem(inputItem) },
            "mainOutput": MengUtils.StrToItemUtil.strProcessingNbtItem(outputItem),
            "secondaryChance": 1,
            "secondaryOutput": {}
        }
        if (extraOutputItem == undefined) {
            delete obj.secondaryChance;
            delete obj.secondaryOutput;
        } else {
            if (extraOutputItem != undefined) obj.secondaryChance = extraItemProbability;
            obj.secondaryOutput = extraOutputItemObj;
        }
        ServerEvents.recipes(e => e.custom(obj))
    },
    /**
     * 电解分离器
     * @param {String} LeftGas 左边输出气体
     * @param {Number} LeftGasAmount 流体容量(mb为单位)
     * @param {String} rightGas 右边输出气体
     * @param {Number} rightGasAmount 流体容量(mb为单位)
     * @param {String} input 输入流体tag
     * @param {Number} inputAmount 流体容量(mb为单位)
     */
    separating: function (LeftGas, LeftGasAmount, rightGas, rightGasAmount, input, inputAmount) {
        let obj = {
            "type": "mekanism:separating",
            "input": {
                "amount": inputAmount,
                "tag": input
            },
            "leftGasOutput": {
                "amount": LeftGasAmount,
                "gas": LeftGas
            },
            "rightGasOutput": {
                "amount": rightGasAmount,
                "gas": rightGas
            }
        }
        ServerEvents.recipes(e => e.custom(obj))
    },
    /**
     * 物品到灌注类型
     * @param {String} outputInfuse 输出灌注类型
     * @param {Number} outputAmount 输出数量(单位mb)
     * @param {Internal.Ingredient} inputItem 输入物品
     */
    infusionConversion: function (outputInfuse, outputAmount, inputItem) {
        let obj = {
            "type": "mekanism:infusion_conversion",
            "input": { "ingredient": MengUtils.StrToItemUtil.strProcessingNbtItem(inputItem) },
            "output": {
                "amount": outputAmount,
                "infuse_type": outputInfuse
            }
        }
        ServerEvents.recipes(e => e.custom(obj))
    },
    /**
     * 反质子核合成器
     * @param {Internal.ItemStack} outputItem 输出物品
     * @param {Internal.Ingredient} itemInput 输入物品
     * @param {String} gasInput 输入气体
     * @param {Number} gasInputAmount 输入气体数量(mb计算)
     * @param {Number} duration 持续时间(tick计算)
     */
    nucleosynthesizing: function (outputItem, itemInput, gasInput, gasInputAmount, duration) {
        let obj = {
            "type": "mekanism:nucleosynthesizing",
            "duration": duration,
            "gasInput": {
                "amount": gasInputAmount,
                "gas": gasInput
            },
            "itemInput": { "ingredient": MengUtils.StrToItemUtil.strProcessingNbtItem(itemInput) },
            "output": MengUtils.StrToItemUtil.strProcessingNbtItem(outputItem)
        }
        ServerEvents.recipes(e => e.custom(obj))
    }
}