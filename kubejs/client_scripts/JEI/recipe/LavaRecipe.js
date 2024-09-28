JEIAddedEvents.registerCategories((event) => {
    event.custom("meng:lava_recipe", category => {
        let jeiHelpers = category.getJeiHelpers();
        let guihelper = jeiHelpers.getGuiHelper();
        category.title(Text.translate("jei.meng.lava_recipe"))
            .icon(guihelper.createDrawableItemStack(Item.of("meng:lava_chunk")))
            .background(guihelper.createBlankDrawable(150, 100))
            .isRecipeHandled(recipe => {
                let v = (
                    recipe?.data?.inputItem !== undefined &&
                    recipe?.data?.output !== undefined
                )
                return !!v;
            })
            .handleLookup((builder, recipe, focuses) => {
                builder.addSlot("input", 5, 5).addItemStack(Item.of(recipe.data.inputItem)).setSlotName("input");
                builder.addSlot("catalyst", 40, 5).addFluidStack("minecraft:lava", 1000).setSlotName("catalyst");
                builder.addSlot("output", 75, 5).addItemStack(recipe.data.output.value).setSlotName("output")
            })
            .setDrawHandler((r, recipeSlotsView, guiGraphics, mouseX, mouseY) => {

                let poseStack = guiGraphics.pose();
                poseStack.pushPose();
                let entity = r.data.entity(Client.level);

                poseStack.translate(58, 60, 50);
                let scale = r.data.renderScale;
                poseStack.scale(scale, scale, scale)
                poseStack.translate(r.data.x, r.data.offset, 0);
                //角度
                poseStack.mulPose(new Quaternionf().rotationZ(KMath.PI));

                poseStack.mulPose(new Quaternionf().rotationY(KMath.PI / 3));

                let entityRenderDispatcher = Client.entityRenderDispatcher;
                entityRenderDispatcher.setRenderShadow(false);
                entityRenderDispatcher.render(entity, 0, 0, 0, 0, 1, poseStack, guiGraphics.bufferSource(), 0xF000F0);
                entityRenderDispatcher.setRenderShadow(true);

                guiGraphics.bufferSource().endBatch();
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
            x : obj.display.x,
            renderScale: obj.display.renderScale
        })
    });

})

