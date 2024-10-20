
/**
 * 初始化计分板，用于记录一些数据
 * @param {Internal.ServerLevel} level 
 * @deprecated
 */
function initScoreboard(level) {
    // 记录商店物品的剩余个数
    level.scoreboard.addObjective("xpShop", $ObjectiveCriteria.DUMMY, Text.of("xpShop"), $RenderType.INTEGER);
    // 记录商店物品的出现次数
    level.scoreboard.addObjective("xpShopItem", $ObjectiveCriteria.DUMMY, Text.of("xpShopItem"), $RenderType.INTEGER);
    // 初始化每个物品出现次数为保底次数
    xpShopItemList.forEach(value => {
        let item = value.item;
        let mg = value.minimumGuarantee;
        level.server.runCommandSilent(`scoreboard players set ${item} xpShopItem ${mg}`)
    })
}

/**
 * 判断是否可以触发保底，如果触发不了就继续减少
 * @param {*} item 
 * @returns 
 * @deprecated
 */
function minimumGuarantee(item){
    let scoreboard = level.getScoreboard();
    let objective = scoreboard.getObjective("xpShopItem");
    let scores = scoreboard.getPlayerScores(item).get(objective);
    let sn = scores.getScore()
    if (sn == 0) return 0;
    if (sn == -1) return -2
    scores.add(-1);
    return -1; 
}
