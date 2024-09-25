BlockEvents.rightClicked("beacon",event=>{
    if (event.getPlayer().isShiftKeyDown()){
        let beaconLevel = event.getBlock().getEntityData().getInt("Levels");
        if (event.getItem().getId() == 'minecraft:nether_star'){
            if (beaconLevel >= 3){
                event.server.runCommandSilent("mek radiation removeAll");
                event.server.tell("已清除掉所有的辐射源");
                event.getItem().count--;
            }else{
                event.player.tell("信标等级必须大于等于3级！")
            }
        }
        event.cancel();
    }
})