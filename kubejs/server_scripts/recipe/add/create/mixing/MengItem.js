ServerEvents.recipes(event=>{
   const mixing = event.recipes.create.mixing;
   mixing(Item.of("meng:lava_debris"),['16x #forge:cobblestone','64x #forge:string'],20 * 60 * 5);
   mixing('meng:small_cobblestone','meng:small_diorite')
   mixing('meng:small_cobblestone','meng:small_andesite')
})