// priority: 5

global.fallItem = []

const FallItemRecipe = {
    recipe : function (outputItem,inputItem,spaceBetween){
        global.fallItem.push({
            inputItem: inputItem,
            outputItem: outputItem,
            spaceBetween: spaceBetween
        })
    }
}