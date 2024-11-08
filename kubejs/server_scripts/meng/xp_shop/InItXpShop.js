initAddItemXpShop();

PlayerEvents.loggedIn(event => {
    let server = event.server;
    let xpShop = XpShopPersistentData(server);
    let xpShopItem = XpShopItemPersistentData(server);
    if (xpShopItem.isEmpty()) {
        xpShopItem.init();
        ReplenishmentDay(server).init(event.level)
        replenishment(server);
    } else {
        synchronizationShop(xpShop)
    }
})
