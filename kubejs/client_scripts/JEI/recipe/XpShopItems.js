JEIAddedEvents.registerCategories((event) => {
    event.custom("meng:jei_xpshop", category => {
        let jeiHelpers = category.getJeiHelpers();
        let guihelper = jeiHelpers.getGuiHelper();
        category.title(Text.translate("jei.meng.jei_xpshop"))
            .icon(guihelper.createDrawableItemStack(Item.of("meng:xp_shop")))
            .background(guihelper.createDrawable(new ResourceLocation("meng","textures/gui/jei/jei_shop.png"),0,0,150, 150))
            .handleLookup((builder, recipe, focuses) => {
                let x = 3;
                let y = 40;
                let itemList = recipe.data;
                for (let i = 0; i < itemList.length; i++) {
                    let value = itemList[i];
                    
                    builder.addSlot("output",x,y)
                        .addItemStack(value.item)
                        .setSlotName("output" + i)
                        .addTooltipCallback((r,t)=>{
                            t.add(1,Text.of("概率为" + value.chance).green())
                            t.add(2,Text.of("购买所需经验 " + value.buyXp).yellow())
                        })
                        if((i+1) % 8 == 0){
                            x = 3;
                            y += 18;
                        }else{
                            x += 18;
                        }
                        
                }
                builder.addSlot("input",65,10)
                    .addItemStack(Item.of("meng:xp_shop"))
                    .setSlotName("input")
            })
    })
})

global.xpShopItemArray = [];

NetworkEvents.dataReceived("xpShopItem",event=>{
    global.xpShopItemArray = []
    event.data.value.forEach(value=>{
        global.xpShopItemArray.push({
            item:Item.of(value.item,value.nbt),
            buyXp:value.buyXp,
            chance:value.chance
        })
    })
})

JEIAddedEvents.registerRecipes(event=>{
    global.xpShopItemArray = [];
    global.xpShopItemList.forEach(value=>{
        global.xpShopItemArray.push({
            item:Item.of(value.item,value.nbt),
            buyXp:value.buyXp,
            chance: (value.chance * 100) + "%" 
        })
    })
    
    event.custom("meng:jei_xpshop")
        .add(global.xpShopItemArray)
})
