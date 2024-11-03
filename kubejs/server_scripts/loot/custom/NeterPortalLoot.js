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

const neterPortalLoots = [
    // 下界悠 
    {   item:"minecraft:nether_wart",
        minCount:10,
        maxCount:25,
        chance:20
    },
    // 下界石英矿 
    {   item:"minecraft:nether_quartz_ore",
        minCount:20,
        maxCount:45,
        chance:30
    },
    // 烈焰棒
    {
        item:"minecraft:blaze_rod",
        minCount:5,
        maxCount:10,
        chance:10
    },
    // 恶魂之泪 
    {
        item:"minecraft:ghast_tear",
        minCount:5,
        maxCount:10,
        chance:10
    },
    // 凋灵骷髅头
    {
        item:"minecraft:wither_skeleton_skull",
        minCount:1,
        maxCount:2,
        chance:2
    },
    // 灵魂沙
    {
        item:"minecraft:soul_sand",
        minCount:40,
        maxCount:64,
        chance:35
    },
    // 镶金黑石
    {
        item:"minecraft:gilded_blackstone",
        minCount:20,
        maxCount:45,
        chance:25
    },
    // 岩浆块 
    {
        item:"minecraft:magma_block",
        minCount:20,
        maxCount:45,
        chance:35
    },
    // 哭泣黑曜石 
    {
        item:"minecraft:crying_obsidian",
        minCount:20,
        maxCount:45,
        chance:30
    },
    // 绯红菌岩
    {
        item:"minecraft:crimson_nylium",
        minCount:40,
        maxCount:64,
        chance:35
    },
    // 绯红菌索
    {
        item:"minecraft:crimson_roots",
        minCount:40,
        maxCount:64,
        chance:30
    },
    // 诡异菌岩
    {
        item:"minecraft:warped_nylium",
        minCount:40,
        maxCount:64,
        chance:35
    },
    // 诡异菌索
    {
        item:"minecraft:warped_roots",
        minCount:40,
        maxCount:64,
        chance:30
    },
    // 猪灵的头
    {
        item:"minecraft:piglin_head",
        minCount:1,
        maxCount:1,
        chance:1
    },
    // 下界合金碎片粒
    {
        item:"meng:netherite_scrap_nugget",
        minCount:1,
        maxCount:2,
        chance:1
    },
    // 锻造模板
    {
        item:"minecraft:netherite_upgrade_smithing_template",
        minCount:1,
        maxCount:2,
        chance:5
    }
]

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
    console.log(oneChance);
    
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