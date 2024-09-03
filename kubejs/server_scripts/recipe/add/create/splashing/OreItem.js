ServerEvents.recipes(event=>{
    const inputItem = 'meng:slag'
    const splashing = event.recipes.create.splashing
    splashing(machineType.splashing[inputItem],inputItem);
})