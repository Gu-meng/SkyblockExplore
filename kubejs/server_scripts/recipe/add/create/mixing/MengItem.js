ServerEvents.recipes(event=>{
   const mixing = event.recipes.create.mixing;
   mixing(Item.of("meng:lava_debris"),'16x #forge:cobblestone',20 * 60 * 5);
})