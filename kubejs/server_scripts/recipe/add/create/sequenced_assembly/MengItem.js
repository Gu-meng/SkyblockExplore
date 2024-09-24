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

    const machineIncomplete = "meng:machine_incomplete";

    sequencedAssembly('meng:machine','create:andesite_casing',[
        sequence.cutting(machineIncomplete,machineIncomplete),
        sequence.pressing(machineIncomplete,machineIncomplete),
        sequence.deploying(machineIncomplete,[machineIncomplete,'meng:screw_nut']),
        sequence.deploying(machineIncomplete,[machineIncomplete,'meng:screw_nut']),
        sequence.deploying(machineIncomplete,[machineIncomplete,'meng:screw_nut']),
        sequence.deploying(machineIncomplete,[machineIncomplete,'meng:screw_nut'])
    ]).loops(1).transitionalItem(machineIncomplete);


    const precisionMachineIncomplete = "meng:precision_machine_incomplete";

    sequencedAssembly('meng:precision_machine_parts',
        'meng:machine',
        [
            sequence.deploying(precisionMachineIncomplete,[precisionMachineIncomplete,'meng:reinforce_iron_sheet']),
            sequence.deploying(precisionMachineIncomplete,[precisionMachineIncomplete,'meng:screw']),
            sequence.deploying(precisionMachineIncomplete,[precisionMachineIncomplete,'createaddition:gold_wire']),
            sequence.deploying(precisionMachineIncomplete,[precisionMachineIncomplete,'createaddition:capacitor']),
            sequence.deploying(precisionMachineIncomplete,[precisionMachineIncomplete,'create:electron_tube'])
        ]
    ).loops(3).transitionalItem(precisionMachineIncomplete);

    const betterPrecisionMachineIncomplete = 'meng:better_precision_machine_incomplete'

    sequencedAssembly('meng:better_precision_machine_parts','meng:precision_machine_parts',
        [
            sequence.filling(betterPrecisionMachineIncomplete,[betterPrecisionMachineIncomplete,Fluid.of("meng:steel",1000)]),
            sequence.deploying(betterPrecisionMachineIncomplete,[betterPrecisionMachineIncomplete,'ae2:logic_processor']),
            sequence.deploying(betterPrecisionMachineIncomplete,[betterPrecisionMachineIncomplete,'ae2:calculation_processor']),
            sequence.deploying(betterPrecisionMachineIncomplete,[betterPrecisionMachineIncomplete,'ae2:engineering_processor']),
            sequence.energising(betterPrecisionMachineIncomplete,betterPrecisionMachineIncomplete,4000)
        ]
    ).loops(1).transitionalItem(betterPrecisionMachineIncomplete)
})