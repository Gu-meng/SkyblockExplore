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
    const machine = {
        'create:mechanical_drill' : 'meng:drill_bit',
        'create:mechanical_saw' : 'meng:saw_blade',
        'create:mechanical_harvester' : 'meng:harvesting_accessories'
    }
    for (let key in machine){
        sequencedAssembly(key,
            'meng:machine',
            [
                sequence.deploying(machineIncomplete,[machineIncomplete,machine[key]]),
                sequence.deploying(machineIncomplete,[machineIncomplete,'meng:iron_timber_sheet']),
                sequence.deploying(machineIncomplete,[machineIncomplete,'create:shaft'])
            ]
        ).loops(1).transitionalItem(machineIncomplete);
    }
    
})