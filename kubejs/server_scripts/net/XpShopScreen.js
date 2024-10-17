NetworkEvents.dataReceived("xpShopScreen",event=>{
    event.player.getData().add("xpShopScreen", event.getData().getBoolean("xpShopScreen"));
    if (!event.getData().getBoolean("xpShopScreen")){
        let arr = event.player.persistentData.get("tempItem");
        arr =  arr != null ? arr.toArray() : []
        if (!event.player.persistentData.getBoolean("isPay")){
            for (let i = 0; i < arr.length; i++) {
                let value = arr[i];
                backXpShopItem(event.server,value["item"],value["count"])
            }
        }
        if (arr.length != 0) event.player.persistentData.remove("tempItem")
    }
})