ClientEvents.tick(event=>{
    let currentScreen = Client.currentScreen;
    if (currentScreen != null){
        let title = currentScreen.title.getString()
        let playerPersistentData = event.player.persistentData
        if (title == Text.translate("gui.title.meng.player.xp_shop").getString()){
            if (!playerPersistentData.getBoolean("xpShopScreen")){
                playerPersistentData.putBoolean("xpShopScreen",true);
                event.player.sendData("xpShopScreen",{xpShopScreen:true})
            }
        }else{
            if (playerPersistentData.getBoolean("xpShopScreen")){
                playerPersistentData.putBoolean("xpShopScreen",false);
                event.player.sendData("xpShopScreen",{xpShopScreen:false})
            }
        }
    }else{
        let playerPersistentData = event.player.persistentData
        if (playerPersistentData.getBoolean("xpShopScreen")){
            playerPersistentData.putBoolean("xpShopScreen",false);
            event.player.sendData("xpShopScreen",{xpShopScreen:false})
        }
    }    
})