StartupEvents.registry("item",event=>{
    for (const key in CreateIncompleteItem) {
        event.create(CreateIncompleteItem[key],"create:sequenced_assembly")
    }
})