StartupEvents.registry("creative_mode_tab",event=>{
    let tab = event.create(namespace + "items");
    tab.icon(() => Item.of(namespace + "crushbone"));
    tab.displayName = Text.translatable("item_group.meng.items");
    tab.content(()=> Object.values(regIds).concat([Item.of(especial.backpack,{items:[]})]));
});

StartupEvents.modifyCreativeTab("kubejs:tab",event =>{
    event.remove("@meng");
});
