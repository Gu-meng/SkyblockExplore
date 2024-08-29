const $LootParams = Java.loadClass("net.minecraft.world.level.storage.loot.LootParams$Builder");
const $LootContextParamSets = Java.loadClass("net.minecraft.world.level.storage.loot.parameters.LootContextParamSets");

ItemEvents.rightClicked("meng:raffle_ticket", event => {
    const player = event.getPlayer();
    const playerPersistentData = player.getPersistentData();
    if (playerPersistentData.getBoolean("lotteryState")) {
        player.tell(Text.translate("text.meng.lottery_state"))
        // playerPersistentData.putBoolean("lotteryState",false);
        return;
    }
    const item = event.getItem();
    const itemNbt = item.getNbt();
    let ticketType;
    try {
        ticketType = itemNbt.getString("ticketType");
    } catch (e) {
        ticketType = "basal";
    }
    let itemList = ticketTypeObject[ticketType];
    if (itemList == undefined) {
        itemList = ticketTypeObject.basal;
    }
    addItemList(itemList);
    poolItemList = randArr(poolItemList);

    let lootData = event.getServer().getLootData();
    let itemLoot = lootData
        .getLootTable("meng:raffle_ticket/basal")
        .getRandomItems(
            new $LootParams(event.getLevel())
                .create($LootContextParamSets.EMPTY)
        )[0];
    poolItemList[poolItemList.length - 2] = itemLoot.id;
    playerPersistentData.putBoolean("lotteryState", true);
    playerPersistentData.putInt("poolCountMax", poolItemList.length);
    playerPersistentData.putInt("count", 0);
})

function addItemList(itemList) {
    itemList.forEach(value => {
        for (let index = 0; index < value.weight; index++) {
            poolItemList.push(value.itemId);
        }
    });
    let listTemp = poolItemList;
    console.log(listTemp.length);

    while (true) {
        if (poolItemList.length >= raffleTicketConfig.maxCount) {
            return;
        }
        poolItemList = poolItemList.concat(randArr(listTemp));
    }
}