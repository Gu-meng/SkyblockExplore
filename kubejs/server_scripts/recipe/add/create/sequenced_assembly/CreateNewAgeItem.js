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

    const precisionMachineIncomplete = "meng:precision_machine_incomplete";

    sequencedAssembly('create_new_age:energiser_t1',
        'meng:precision_machine_parts',
        [
            sequence.deploying(precisionMachineIncomplete,[precisionMachineIncomplete,'create:shaft']),
            sequence.deploying(precisionMachineIncomplete,[precisionMachineIncomplete,'meng:screw']),
            sequence.deploying(precisionMachineIncomplete,[precisionMachineIncomplete,'create_new_age:electrical_connector']),
            sequence.deploying(precisionMachineIncomplete,[precisionMachineIncomplete,'meng:screw'])
        ]
    ).loops(1).transitionalItem(precisionMachineIncomplete);

    sequencedAssembly('create_new_age:advanced_solar_heating_plate','create_new_age:basic_solar_heating_plate',[
        sequence.deploying(precisionMachineIncomplete,[precisionMachineIncomplete,'create_new_age:overcharged_golden_sheet']),
        sequence.deploying(precisionMachineIncomplete,[precisionMachineIncomplete,'meng:stalinite_block']),
        sequence.deploying(precisionMachineIncomplete,[precisionMachineIncomplete,'meng:stalinite_block']),
        sequence.deploying(precisionMachineIncomplete,[precisionMachineIncomplete,'meng:precision_machine_parts']),
        sequence.deploying(precisionMachineIncomplete,[precisionMachineIncomplete,'create_new_age:heat_pipe'])
    ]).loops(1).transitionalItem(precisionMachineIncomplete);   
})