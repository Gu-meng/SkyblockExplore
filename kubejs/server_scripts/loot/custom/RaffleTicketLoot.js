ServerEvents.genericLootTables(event => {
    for (const key in ticketTypeObject) {
        event.addGeneric("meng:raffle_ticket/" + key,loot=>{
            loot.addPool(pool => {
                ticketTypeObject[key].forEach(value => {
                    pool.addItem(value.itemId).weight(value.weight);
                });
            });
        })
    }
})

