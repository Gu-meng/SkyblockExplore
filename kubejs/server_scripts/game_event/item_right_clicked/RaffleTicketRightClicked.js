const $LootParams = Java.loadClass("net.minecraft.world.level.storage.loot.LootParams$Builder") 
const $LootContextParamSets = Java.loadClass("net.minecraft.world.level.storage.loot.parameters.LootContextParamSets")


let ticketTypeObject = {
    basal : basalItemList
}

ItemEvents.rightClicked("meng:raffle_ticket",event=>{
    const player = event.getPlayer();
    const playerPersistentData = player.getPersistentData();
    if (playerPersistentData.getBoolean("lotteryState")){
        player.tell(Text.translate("text.meng.lottery_state"))
        // playerPersistentData.putBoolean("lotteryState",false);
        return;
    } 
    const item = event.getItem();
    const itemNbt = item.getNbt();
    let ticketType;
    try {
        ticketType = itemNbt.getString("ticketType");
    }catch(e){
        ticketType = "basal";
    }
    let itemList = ticketTypeObject[ticketType];
    if (itemList == undefined){
        itemList = ticketTypeObject.basal;
    }
    addItemList(itemList);
    poolItemList = randArr(poolItemList);
   
    
    let lootData = event.getServer().getLootData();
    let loot = lootData
        .getLootTable("meng:raffle_ticket/basal")
        .getRandomItems(
            new $LootParams(event.getLevel())
                .create($LootContextParamSets.EMPTY)
        );
    poolItemList[poolItemList.length - 2] = loot[0].id
    playerPersistentData.putBoolean("lotteryState",true);
    playerPersistentData.putInt("poolCountMax",poolItemList.length);
    playerPersistentData.putInt("count",0);    
})

function addItemList(itemList){
    itemList.forEach(value => {
        for (let index = 0; index < value.weight; index++) {
            poolItemList.push(value.itemId);
        }
    });
    let listTemp = poolItemList;
    console.log(listTemp.length);
    
    while(true){
        if (poolItemList.length >= 100){
            return;
        }
        poolItemList = poolItemList.concat(randArr(listTemp));
    }
}


function randArr(arr) {
    for (var i = 0; i < arr.length; i++) {
        var iRand = parseInt(arr.length * Math.random());
        var temp = arr[i];
        arr[i] = arr[iRand];
        arr[iRand] = temp;
    }
    return arr;
}