// priority: 5

global.EntityLavaRecipe = []

const ItemInLavaRecipe = {
    spawnEntity : function (inputItem,outputEntity,outputEntityEgg,displayRenderScale,displayY){
        global.EntityLavaRecipe.push({
            inputItem: inputItem,
            output: {
                type: "entity",
                value: outputEntity,
                entityEgg: outputEntityEgg
            },
            display: {
                renderScale: displayRenderScale,
                y: displayY
            }
        })
    }
}
