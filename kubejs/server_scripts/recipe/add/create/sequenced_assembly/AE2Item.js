ServerEvents.recipes(event => {
    const sequencedAssembly = event.recipes.create.sequenced_assembly
    const sequence = {
        /**
         * 压片
         */
        pressing: event.recipes.create.pressing,
        /**
         * 注液器
         */
        filling: event.recipes.create.filling,
        /**
         * 切石机
         */
        cutting: event.recipes.create.cutting,
        /**
         * 机械手
         */
        deploying: event.recipes.create.deploying,
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

    const machineIncomplete = "create:incomplete_precision_mechanism";

    sequencedAssembly([
        Item.of('ae2:silicon_press').withChance(95),
        Item.of('ae2:silicon').withChance(3),
        Item.of('minecraft:sand').withChance(2)
    ], 'ae2:sky_stone_block', [
        sequence.pressing(machineIncomplete,machineIncomplete),
        sequence.deploying(machineIncomplete,[machineIncomplete,'#forge:silicon']),
        sequence.deploying(machineIncomplete,[machineIncomplete,'createaddition:gold_wire']),
        sequence.deploying(machineIncomplete,[machineIncomplete,'createaddition:iron_wire']),
        sequence.energising(machineIncomplete,machineIncomplete,2000)
    ]).loops(3).transitionalItem(machineIncomplete);

    sequencedAssembly([
        Item.of('ae2:engineering_processor_press').withChance(95),
        Item.of('ae2:sky_dust').withChance(3),
        Item.of('createaddition:diamond_grit').withChance(2)
    ],'ae2:sky_stone_block',[
        sequence.cutting(machineIncomplete,machineIncomplete),
        sequence.pressing(machineIncomplete,machineIncomplete),
        sequence.deploying(machineIncomplete,[machineIncomplete,'ae2:printed_silicon']),
        sequence.deploying(machineIncomplete,[machineIncomplete,'#forge:dusts/diamond']),
        sequence.deploying(machineIncomplete,[machineIncomplete,'createaddition:capacitor']),
        sequence.energising(machineIncomplete,machineIncomplete,2000)
    ]).loops(3).transitionalItem(machineIncomplete);

    sequencedAssembly([
        Item.of('ae2:logic_processor_press').withChance(95),
        Item.of('mekanism:dust_gold').withChance(3),
        Item.of('meng:screw').withChance(2)
    ],'meng:precision_machine_parts',[
        sequence.cutting(machineIncomplete,machineIncomplete),
        sequence.pressing(machineIncomplete,machineIncomplete),
        sequence.deploying(machineIncomplete,[machineIncomplete,'ae2:engineering_processor']),
        sequence.deploying(machineIncomplete,[machineIncomplete,'createaddition:electrum_wire']),
        sequence.energising(machineIncomplete,machineIncomplete,4000)
    ]).loops(2).transitionalItem(machineIncomplete);

    sequencedAssembly([
        Item.of('ae2:calculation_processor_press').withChance(95),
        Item.of('createaddition:capacitor').withChance(3),
        Item.of('ae2:certus_quartz_dust').withChance(2)
    ],'ae2:logic_processor',[
        sequence.energising(machineIncomplete,machineIncomplete,5000),
        sequence.deploying(machineIncomplete,[machineIncomplete,'#create:sandpaper']),
        sequence.pressing(machineIncomplete,machineIncomplete),
        sequence.deploying(machineIncomplete,[machineIncomplete,'ae2:charged_certus_quartz_crystal']),
        sequence.deploying(machineIncomplete,[machineIncomplete,'create_new_age:overcharged_diamond_wire']),
    ]).loops(2).transitionalItem(machineIncomplete);
})