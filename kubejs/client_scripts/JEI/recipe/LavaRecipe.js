JEIAddedEvents.registerCategories((event) => {
    event.custom("meng:lava_recipe", category => {
        let jeiHelpers = category.getJeiHelpers();
        let guihelper = jeiHelpers.getGuiHelper();
        category.title(Text.translate("jei.meng.lava_recipe"))
            .icon(guihelper.createDrawableItemStack(Item.of("meng:lava_chunk")))
            .background(guihelper.createBlankDrawable(150, 80))
            .isRecipeHandled(recipe => {
                let v = (
                    recipe?.data?.inputItem !== undefined &&
                    recipe?.data?.output !== undefined
                )
                return !!v;
            })
            .handleLookup((builder, recipe, focuses) => {
                let b = builder.addSlot("input", 5, 35)
                    .addItemStack(Item.of(recipe.data.inputItem))
                    .setSlotName("input")
                
                b.addTooltipCallback((r,t)=>{
                    t.add(1,Text.of("将物品丢入熔岩"))
                }); 
                builder.addSlot("output", 135, 65).addItemStack(recipe.data.output.value).setSlotName("output");
            })
            .setDrawHandler((r, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
                let entity = r.data.entity(Client.level);
                
                let RenderHelper = Java.loadClass("jeresources.util.RenderHelper")
                RenderHelper.renderEntity(
                    guiGraphics,
                    120,r.data.y,r.data.renderScale,
                    38 - mouseX,
                    80 - mouseY,
                    entity
                )

                let poseStack = guiGraphics.pose();
                poseStack.pushPose();
                poseStack.translate(58, 60, 50);
                poseStack.mulPose(new Quaternionf().rotationZ(KMath.PI));
                poseStack.mulPose(new Quaternionf().rotationY(KMath.PI / 3));

                $GuiGameElement["of(net.minecraft.world.level.material.Fluid)"](Fluid.LAVA_ID)
                    .scale(24)
                    .rotate(-185,0,-10)
                    .lighting($AnimatedKinetics.DEFAULT_LIGHTING)
                    .render(guiGraphics)
                
                poseStack.popPose();
            })
    })
})

const setLevelMethod = $Entity.__javaObject__.getDeclaredMethod('m_284535_', $Level);
setLevelMethod.setAccessible(true);

JEIAddedEvents.registerRecipes(event => {
    let lr = event.custom("meng:lava_recipe")
    let arr = global.EntityLavaRecipe
    arr.forEach(obj => {
        let entity = Client.level.createEntity(obj.output.value);
        entity.noCulling = true;
        lr.add({
            inputItem: obj.inputItem,
            output: {
                value: obj.output.entityEgg,
            },
            entity: (level) => {
                if (entity.level != level) {
                    setLevelMethod.invoke(entity, level);
                }
                return entity;
            },
            offset: 1,
            y : obj.display.y,
            renderScale: obj.display.renderScale
        })
    });

})

