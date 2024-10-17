ItemEvents.canPickUp(event=>{
    if(event.player.data.get("xpShopScreen")){
        event.cancel();
    }
})