let MekRecipe = {
    /**
     * 注册提纯仓
     * @param {Internal.Ingredient} inputItem 输入物品
     * @param {Internal.ItemStack} outputItem 输出物品
     * @param {String} chemicalInputGas 所需气体id
     * @param {Number} chemicalInputAmount 所需气体数量(n * 200mb) 默认为1
     */
    purifying: function (outputItem, inputItem, chemicalInputGas, chemicalInputAmount) {
        let inputItemObj = strSplitItem(inputItem);
        if (inputItemObj.nbt == null) delete inputItemObj.nbt
        let outputItemObj = strSplitItem(outputItem);
        if (outputItemObj.nbt == null) delete outputItemObj.nbt
        if (chemicalInputAmount == undefined) chemicalInputAmount = 1
        let obj = {
            type: "mekanism:purifying",
            "chemicalInput": {
                amount: chemicalInputAmount,
                gas: chemicalInputGas
            },
            itemInput: { ingredient: {} },
            output: {}
        }
        obj.itemInput.ingredient = inputItemObj;
        obj.output = outputItemObj;
        ServerEvents.recipes(e => {
            e.custom(obj);
        })
    },
    /**
     * 注册化学压射室
     * @param {Internal.Ingredient} inputItem 输入物品
     * @param {Internal.ItemStack} outputItem 输出物品
     * @param {String} chemicalInputGas 所需气体id
     * @param {Number} chemicalInputAmount 所需气体数量(n * 200mb)
     */
    injecting: function (outputItem, inputItem, chemicalInputGas, chemicalInputAmount) {
        let inputItemObj = strSplitItem(inputItem);
        if (inputItemObj.nbt == null) delete inputItemObj.nbt
        let outputItemObj = strSplitItem(outputItem);
        if (outputItemObj.nbt == null) delete outputItemObj.nbt
        if (chemicalInputAmount == undefined) chemicalInputAmount = 1
        let obj = {
            "type": "mekanism:injecting",
            "chemicalInput": {
                "amount": chemicalInputAmount,
                "gas": chemicalInputGas
            },
            "itemInput": { "ingredient": {} },
            "output": {}
        }
        obj.itemInput.ingredient = inputItemObj;
        obj.output = outputItemObj;
        ServerEvents.recipes(e => {
            e.custom(obj);
        })
    },
    /**
     * 注册融合机
     * @param {Internal.Ingredient} downInputItem 输入物品(配方下面的格子)
     * @param {Internal.Ingredient} upInputItem 输入物品(配方上面的格子)
     * @param {Internal.ItemStack} outputItem 输出物品
     */
    combining: function (outputItem, downInputItem, upInputItem) {
        let downInputItemObj = strSplitItem(downInputItem);
        if (downInputItemObj.nbt == null) delete downInputItemObj.nbt
        let upInputItemObj = strSplitItem(upInputItem);
        if (upInputItemObj.nbt == null) delete upInputItemObj.nbt
        let outputItemObj = strSplitItem(outputItem);
        if (outputItemObj.nbt == null) delete outputItemObj.nbt
        let obj = {
            "type": "mekanism:combining",
            "extraInput": {
                "ingredient": {}
            },
            "mainInput": {
                "amount": 3,
                "ingredient": {}
            },
            "output": {}
        }
        obj.extraInput.ingredient = downInputItemObj;
        obj.mainInput.amount = upInputItemObj.count;
        obj.mainInput.ingredient = upInputItemObj;
        obj.output = outputItemObj;
        ServerEvents.recipes(e => {
            e.custom(obj);
        })
    },
    /**
     * 粉碎机
     * @param {Internal.ItemStack} outputItem 输出物品
     * @param {Internal.Ingredient} inputItem 输入物品
     */
    crushing: function (outputItem, inputItem) {
        let inputItemObj = strSplitItem(inputItem);
        if (inputItemObj.nbt == null) delete inputItemObj.nbt
        let outputItemObj = strSplitItem(outputItem);
        if (outputItemObj.nbt == null) delete outputItemObj.nbt
        let obj = {
            "type": "mekanism:crushing",
            "input": { "ingredient": {} },
            "output": {}
        }
        obj.input.ingredient = inputItemObj;
        obj.output = outputItemObj;
        ServerEvents.recipes(e => {
            e.custom(obj);
        })
    },
    /**
     * 富集仓
     * @param {Internal.ItemStack} outputItem 输出物品
     * @param {Internal.Ingredient} inputItem 输入物品
     */
    enriching: function (outputItem, inputItem) {
        let inputItemObj = strSplitItem(inputItem);
        if (inputItemObj.nbt == null) delete inputItemObj.nbt
        let outputItemObj = strSplitItem(outputItem);
        if (outputItemObj.nbt == null) delete outputItemObj.nbt
        let obj = {
            "type": "mekanism:enriching",
            "input": { "ingredient": {} },
            "output": {}
        }
        obj.input.ingredient = inputItemObj;
        obj.output = outputItemObj;
        ServerEvents.recipes(e => {
            e.custom(obj);
        })
    },
    /**
     * 冶金灌注机
     * @param {Internal.Ingredient} inputItem 输入物品
     * @param {Internal.ItemStack} outputItem 输出物品
     * @param {String} chemicalInput 所需id
     * @param {Number} chemicalInputAmount 所需数量
     */
    metallurgicInfusing: function (outputItem, inputItem, chemicalInput, chemicalInputAmount) {
        let inputItemObj = strSplitItem(inputItem);
        if (inputItemObj.nbt == null) delete inputItemObj.nbt
        let outputItemObj = strSplitItem(outputItem);
        if (outputItemObj.nbt == null) delete outputItemObj.nbt
        let chemicalInputObj = infuseTypeFunc(chemicalInput,chemicalInputAmount)
        let obj = {
            "type": "mekanism:metallurgic_infusing",
            "chemicalInput": {},
            "itemInput": { "ingredient": {} },
            "output": {}
        }
        obj.itemInput.ingredient = inputItemObj;
        obj.output = outputItemObj;
        obj.chemicalInput = chemicalInputObj;
        ServerEvents.recipes(e => {
            e.custom(obj);
        })
    },
    /**
     * 锇压缩机
     * @param {Internal.Ingredient} inputItem 输入物品
     * @param {Internal.ItemStack} outputItem 输出物品
     * @param {String} chemicalInputGas 所需气体id
     * @param {Number} chemicalInputAmount 所需气体数量(n * 200mb) 默认为1
     */
    compressing: function (outputItem, inputItem, chemicalInputGas, chemicalInputAmount) {
        let inputItemObj = strSplitItem(inputItem);
        if (inputItemObj.nbt == null) delete inputItemObj.nbt
        let outputItemObj = strSplitItem(outputItem);
        if (outputItemObj.nbt == null) delete outputItemObj.nbt
        if (chemicalInputAmount == undefined) chemicalInputAmount = 1
        let obj = {
            "type": "mekanism:compressing",
            "chemicalInput": {
                "amount": chemicalInputAmount,
                "gas": chemicalInputGas
            },
            "itemInput": { "ingredient": {} },
            "output": {}
        }
        obj.itemInput.ingredient = inputItemObj;
        obj.output = outputItemObj;
        ServerEvents.recipes(e => {
            e.custom(obj);
        })
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
        if (extraOutputItem != undefined) {
            extraOutputItemObj = strSplitItem(extraOutputItem);
            if (extraOutputItemObj.nbt == null) delete extraOutputItemObj.nbt
        }
        let inputItemObj = strSplitItem(inputItem);
        if (inputItemObj.nbt == null) delete inputItemObj.nbt
        let outputItemObj = strSplitItem(outputItem);
        if (outputItemObj.nbt == null) delete outputItemObj.nbt
        let obj = {
            "type": "mekanism:sawing",
            "input": { "ingredient": {} },
            "mainOutput": {},
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
        obj.input.ingredient = inputItemObj;
        obj.mainOutput = outputItemObj;
        ServerEvents.recipes(e => {
            e.custom(obj);
        })
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
    separating:function(LeftGas,LeftGasAmount,rightGas,rightGasAmount,input,inputAmount){
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
        ServerEvents.recipes(e => {
            e.custom(obj);
        })
    },
    /**
     * 物品到灌注类型
     * @param {String} outputInfuse 输出灌注类型
     * @param {Number} outputAmount 输出数量(单位mb)
     * @param {Internal.Ingredient} inputItem 输入物品
     */
    infusionConversion:function(outputInfuse,outputAmount,inputItem){
        let inputItemObj = strSplitItem(inputItem);
        if (inputItemObj.nbt == null) delete inputItemObj.nbt
        let obj = {
            "type": "mekanism:infusion_conversion",
            "input": {"ingredient": {}},
            "output": {
                "amount": outputAmount,
                "infuse_type": outputInfuse
            }
        }
        obj.input.ingredient = inputItemObj;
        ServerEvents.recipes(e => {
            e.custom(obj);
        })  
    }
}

// 下面是测试代码
MekRecipe.purifying(Item.of('minecraft:iron_ingot', 5), Item.of('minecraft:copper_ingot', 5), "mekanism:oxygen")
MekRecipe.injecting('2x minecraft:iron_ingot', '#balm:ingots', "mekanism:oxygen")
MekRecipe.combining("5x minecraft:iron_ingot", "#forge:cobblestone/normal", '3x minecraft:copper_ingot')
MekRecipe.crushing("10x minecraft:iron_ingot", '#balm:ingots')
MekRecipe.enriching("3x minecraft:iron_ingot", '#balm:ingots')
MekRecipe.metallurgicInfusing("3x minecraft:iron_ingot", '#balm:ingots', "mekanism:diamond", 15)
MekRecipe.compressing("3x minecraft:iron_ingot", '#balm:ingots', "mekanism:osmium", 3)
MekRecipe.sawing("3x minecraft:iron_ingot", '#balm:ingots', Item.of('minecraft:copper_ingot', 5), 0.3)
MekRecipe.sawing("3x minecraft:iron_ingot", '#balm:ingots')
MekRecipe.separating('mekanism:hydrogen',1,'mekanism:chlorine',1,'forge:sodium',10)
MekRecipe.infusionConversion('mekanism:carbon',50,'#forge:crops')