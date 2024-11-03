ItemEvents.canPickUp(event=>{
    let item = event.item;
    if (item.hasNBT()){
        if (item.nbt.getBoolean("isPortal")) {
            item.nbt.remove("isPortal")
        }   
    }
})