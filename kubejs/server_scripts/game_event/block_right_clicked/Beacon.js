BlockEvents.rightClicked("beacon",event=>{
    let player = event.getPlayer();
    if (player.isShiftKeyDown()){
        let beaconLevel = event.getBlock().getEntityData().getInt("Levels");
        if (event.getItem().getId() == 'minecraft:nether_star'){
            if (beaconLevel >= 3){
                event.server.runCommandSilent("mek radiation removeAll");
                event.server.tell("已清除所有的辐射源");
                event.getItem().count--;
            }else{
                player.tell("清除所有辐射源的信标等级必须大于等于3级！")
            }
        }else if(event.getItem().getId() == 'minecraft:nautilus_shell'){
           let ppd = player.getPersistentData();
           let swc = ppd.getInt("summonWitherCount")
           if (swc != 0){
            swc = swc - beaconLevel < 0 ? 0 : swc - beaconLevel;
            ppd.putInt("summonWitherCount",swc);
            event.item.count--;
            player.tell("当前凋零难度为：" + swc);
           }else{
            player.tell("当前凋零难度为：" + swc + "，无需降低难度");
           }
        }
        event.cancel();
    }
})