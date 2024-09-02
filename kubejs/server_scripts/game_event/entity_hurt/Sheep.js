EntityEvents.hurt("minecraft:sheep",event=>{
    entityDropPainfulTears(event.getEntity(),event.getLevel(),event.getServer(),event.getSource().getType())
})