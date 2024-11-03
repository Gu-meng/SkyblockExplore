JEIAddedEvents.registerCategories((event) => {
    event.custom("meng:jei_nether_portal", category => {
        let jeiHelpers = category.getJeiHelpers();
        let guihelper = jeiHelpers.getGuiHelper();
        category.title(Text.translate("jei.meng.jei_nether_portal"))
            .icon(guihelper.createDrawableItemStack(Item.of("meng:nether_gem")))
            .background(guihelper.createBlankDrawable(150, 80))
            .handleLookup((builder, recipe, focuses) => {
                builder.addSlot("input", 8, 35).addItemStack("meng:nether_gem").setSlotName("input");
                let x = 75;
                let y = 5;
                let itemList = recipe.data;
                for (let i = 0; i < itemList.length; i++) {
                    let value = itemList[i];
                    builder.addSlot("output",x,y)
                        .addItemStack(value.item)
                        .setSlotName("output" + i)
                        .addTooltipCallback((r,t)=>{
                            t.add(1,Text.of("[" + value.minCount + " - " + value.maxCount + "]").green())
                            t.add(2,Text.of("概率为" + value.chance).yellow())
                        })
                        if((i+1) % 4 == 0){
                            x = 75;
                            y += 18;
                        }else{
                            x += 18;
                        }
                        
                }
            })
            .setDrawHandler((r, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
                let poseStack = guiGraphics.pose();
                poseStack.pushPose();
                poseStack.translate(35, 55, 50);
                $GuiGameElement["of(net.minecraft.world.level.block.state.BlockState)"](Blocks.NETHER_PORTAL)
                    .scale(24)
                    .rotate(0, 0, 0)
                    .lighting($AnimatedKinetics.DEFAULT_LIGHTING)
                    .render(guiGraphics)
                poseStack.popPose();
            })
    })
})

global.netherPortalItemArray = [];

NetworkEvents.dataReceived("netherPortalItem",event=>{
    global.netherPortalItemArray = []
    event.data.value.forEach(value=>{
        global.netherPortalItemArray.push({
            item:Item.of(value.item,value.minCount),
            chance:value.chance,
            minCount:value.minCount,
            maxCount:value.maxCount
        })
    })
})

JEIAddedEvents.registerRecipes(event=>{
    event.custom("meng:jei_nether_portal")
        .add(global.netherPortalItemArray)
})