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
    sequencedAssembly('createaddition:rolling_mill','meng:machine',[
        sequence.deploying(machineIncomplete,[machineIncomplete,'meng:machine']),
        sequence.deploying(machineIncomplete,[machineIncomplete,'meng:screw']),
        sequence.deploying(machineIncomplete,[machineIncomplete,'meng:screw']),
        sequence.deploying(machineIncomplete,[machineIncomplete,'create:shaft'])
    ]).loops(2).transitionalItem(machineIncomplete);
})