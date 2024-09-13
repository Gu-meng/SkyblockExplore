ItemEvents.firstLeftClicked("meng:crushbone_sword",event=>{
   if (MengUtils.isPercent(0.1)){
    let player = event.getPlayer()
    event.server.runCommandSilent(`damage ${player.username} 0.5 meng:crushbone_attack`)
   } 
})