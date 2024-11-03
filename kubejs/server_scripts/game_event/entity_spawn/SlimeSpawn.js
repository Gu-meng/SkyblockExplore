EntityEvents.spawned("slime",event=>{
    if (MengUtils.isPercent(0.5)){
        event.cancel();
    }   
})