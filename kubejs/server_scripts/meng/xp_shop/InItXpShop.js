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

    if (server.players.size() > 1) {
        sendShopItemInClient(event.player)
        sendNetherPortalItem(event.player)
    } else {
        server.tell("正在同步数据，可能会导致卡顿")
        server.scheduleInTicks(5, () => server.runCommandSilent("reload"))
    }
})
