global.neterPortalLoots = []

global.addNeterPortalLoots = (item,chance,minCount,maxCount) =>{
    if (maxCount == undefined) maxCount = minCount;
    global.neterPortalLoots.push({   
        item:item,
        minCount:minCount,
        maxCount:maxCount,
        chance:chance
    })
}
// 下界悠 
global.addNeterPortalLoots("minecraft:nether_wart",20,10,25)
// 下界石英矿 
global.addNeterPortalLoots("minecraft:nether_quartz_ore",30,20,45)
// 萤石块
global.addNeterPortalLoots("minecraft:glowstone",20,22,48)
// 恶魂之泪 
global.addNeterPortalLoots("minecraft:ghast_tear",10,5,10)
// 凋灵骷髅头
global.addNeterPortalLoots("minecraft:wither_skeleton_skull",2,1,2)
// 灵魂沙
global.addNeterPortalLoots("minecraft:soul_sand",35,64,40)
// 镶金黑石
global.addNeterPortalLoots("minecraft:gilded_blackstone",25,20,45)
// 岩浆块
global.addNeterPortalLoots("minecraft:magma_block",35,20,45)
// 哭泣黑曜石 
global.addNeterPortalLoots("minecraft:crying_obsidian",30,20,45)
// 绯红菌岩
global.addNeterPortalLoots("minecraft:crimson_nylium",35,40,64)
// 绯红菌索
global.addNeterPortalLoots("minecraft:crimson_roots",30,40,64)
// 诡异菌岩
global.addNeterPortalLoots("minecraft:warped_nylium",35,40,64)
// 诡异菌索
global.addNeterPortalLoots("minecraft:warped_roots",30,40,64)
// 猪灵的头
global.addNeterPortalLoots("minecraft:piglin_head",1,1,1)
// 下界合金碎片粒
global.addNeterPortalLoots("meng:netherite_scrap_nugget",1,1,2)
// 锻造模板
global.addNeterPortalLoots("minecraft:netherite_upgrade_smithing_template",5,1,2)