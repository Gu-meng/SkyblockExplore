// priority: 5

global.EntityLavaRecipe = []

const ItemInLavaRecipe = {
    spawnEntity : function (inputItem,outputEntity,outputEntityEgg,displayRenderScale,displayX){
        global.EntityLavaRecipe.push({
            inputItem: inputItem,
            output: {
                type: "entity",
                value: outputEntity,
                entityEgg: outputEntityEgg
            },
            display: {
                renderScale: displayRenderScale,
                x: displayX
            }
        })
    }
}
