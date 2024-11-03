ItemEvents.firstRightClicked("meng:raffle_ticket", event => {
    const player = event.getPlayer();
    const playerAttachedData = player.getData();
    if (playerAttachedData.get("lotteryState")) {
        player.tell(Text.translate("text.meng.lottery_state"))
        // playerAttachedData.put("lotteryState",false);
        return;
    }
    let ticketType;
    const item = event.getItem();
    if (!item.hasNBT()){
        ticketType = "basal";
    }else{
        let itemNbt = item.nbt;
        try {
            ticketType = itemNbt.getString("ticketType");
            if (ticketTypeObject[ticketType] == undefined) ticketType = "basal"
        } catch (err) {
            console.error(err);
            ticketType = "basal";
        }
    }
    
    let itemList = ticketTypeObject[ticketType];
    if (itemList == undefined) {
        itemList = ticketTypeObject.basal;
    }
    let uuid = player.getUuid()
    // let obj = {}
    // obj[uuid] = MengUtils.ArrUtil.randArr(addItemList(itemList))
    poolItemList[uuid] = MengUtils.ArrUtil.randArr(addItemList(itemList))

    let lootData = event.getServer().getLootData();
    let itemLoot = lootData
        .getLootTable("meng:raffle_ticket/" + ticketType)
        .getRandomItems(
            new $LootParams(event.getLevel())
                .create($LootContextParamSets.EMPTY)
        )[0];
    let poolList = poolItemList[uuid];
    poolList[poolList.length - 2] = itemLoot.id;
    
    playerAttachedData.add("lotteryState", true);
    playerAttachedData.add("poolCountMax", poolList.length);
    playerAttachedData.add("count", 0);
    item.count--;
})

function addItemList(itemList) {
    let list = []
    itemList.forEach(value => {
        for (let index = 0; index < value.weight; index++) {
            list.push(value.itemId);
        }
    });
    let listTemp = list;

    while (true) {
        if (list.length >= raffleTicketConfig.maxCount) {
            break;
        }
        list = list.concat(MengUtils.ArrUtil.randArr(listTemp));
    }
    return list;
}

