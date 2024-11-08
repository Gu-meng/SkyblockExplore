ServerEvents.genericLootTables(event => {
    event.addGeneric("meng:neter_portal", loot => {
        loot.addPool(pool => {
            neterPortalLoots.forEach(value=>{
                pool.addItem(value.item,value.chance,[value.minCount,value.maxCount]);
            })
        });
    })
    try{
        Utils.server.players.forEach(player=>{
            sendNetherPortalItem(player);
        })
    }catch(err){console.warn(err);}
    
})

const neterPortalLoots = global.neterPortalLoots

/**
 * 
 * @param {Internal.ServerPlayer_} player 
 */
function sendNetherPortalItem(player){
    let sum = 0;
    neterPortalLoots.forEach(value=>{
        sum+=value.chance;
    })
    let oneChance = parseFloat((100 / sum).toFixed(2));
    
    let obj = {value:[]}
    neterPortalLoots.forEach(value=>{
        obj.value.push({
            item:value.item,
            minCount:value.minCount,
            maxCount:value.maxCount,
            chance: parseFloat((value.chance * oneChance).toFixed(2)) + "%" 
        })
    })
    player.sendData("netherPortalItem",obj)
}