ItemEvents.firstLeftClicked("meng:crushbone_sword",event=>{
   if (MengUtils.isPercent(CrushboneSwordConfig.hurt.chance)){
    let player = event.getPlayer()
    event.server.runCommandSilent(`damage ${player.username} ${CrushboneSwordConfig.hurt.damage} meng:crushbone_attack`)
   } 
})