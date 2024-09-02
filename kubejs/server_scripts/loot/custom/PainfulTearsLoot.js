ServerEvents.genericLootTables(event => {
    event.addGeneric("meng:painful_tears", loot => {
        loot.addPool(pool => {
            pool.addEmpty(95);
            pool.addItem("meng:painful_tears").weight(5)
        });
    })

})