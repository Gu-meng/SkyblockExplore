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
        deploying : event.recipes.create.deploying
    }

    const machineIncomplete = "meng:machine_incomplete";

    sequencedAssembly('meng:machine','create:andesite_casing',[
        sequence.cutting(machineIncomplete,machineIncomplete),
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
})