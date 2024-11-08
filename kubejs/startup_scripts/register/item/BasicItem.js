StartupEvents.registry("item",event=>{
    for (const key in basicItem) {
        if (key == "raffle_ticket") continue;
        event.create(basicItem[key]);
    }

    event.create(especial.backpack).maxStackSize(1).tag("curios:back");
})
