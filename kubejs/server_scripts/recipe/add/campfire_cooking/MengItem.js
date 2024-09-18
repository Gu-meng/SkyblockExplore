ServerEvents.recipes(event=>{
    // 碎骨
    event.campfireCooking('meng:crushbone','minecraft:rotten_flesh',0.25,20*10);

    event.campfireCooking('meng:sunny_doll',Item.of('meng:rain_doll', '{Damage:0}').strongNBT(),0.25,20*3);
    event.campfireCooking(Item.of('meng:sunny_doll', '{Damage:1}'),Item.of('meng:rain_doll', '{Damage:1}').strongNBT(),0.25,20*3);
})