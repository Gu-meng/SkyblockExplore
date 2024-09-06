StartupEvents.registry("item",event=>{
    for (const key in basicItem) {
        event.create(basicItem[key]);
    }
})