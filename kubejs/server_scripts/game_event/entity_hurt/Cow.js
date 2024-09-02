EntityEvents.hurt("minecraft:cow",event=>{
    entityDropPainfulTears(event.getEntity(),event.getLevel(),event.getServer(),event.getSource().getType())
})