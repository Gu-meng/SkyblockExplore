EntityEvents.hurt("minecraft:chicken",event=>{
    entityDropPainfulTears(event.getEntity(),event.getLevel(),event.getServer(),event.getSource().getType())
})