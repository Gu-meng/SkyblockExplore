/**
 * 创建返回珍珠的定时任务
 * @param {*} server 
 * @param {*} tick 
 * @param {*} time 
 * @param {Internal.ServerPlayer_} player 
 */
function returnPearlScheduleTick (server, tick, time,player){
    let playerName = player.username;
    tick = 20 * 5 - tick;
    if (ReturnPearl[playerName] == undefined) ReturnPearl[playerName] = {};
    if (tick <= 0) {
        let inv = player.getInventory();
        invDeleteItem(inv, "meng:return_pearl", time,playerName,false);
    }
    ReturnPearl[playerName][time] =
        server.scheduleInTicks(tick + 10, () => {
            let inv = player.getInventory();
            invDeleteItem(inv, "meng:return_pearl", time,playerName);
            player.tell("已删除超时的返回珍珠")
            delete ReturnPearl[playerName][time];
        })
    player.sendData("serverTick",{tick:server.tickCount});
}

/**
 * 删除库存内的指定物品--返回珍珠
 * @param {*} inv 
 * @param {*} itemId 
 * @param {*} time 
 * @param {*} playerName 
 * @param {*} isClear 默认为true
 */
function invDeleteItem(inv, itemId, time,playerName,isClear) {
    let b = false;
    if (isClear == undefined) isClear = true;
    inv.getAllItems().forEach(item => {
        if (b) return
        if (item.id == itemId) {
            if (item.getNbt().getString("time") == time) {
                item.count--;
                if (isClear) ReturnPearl[playerName][time].clear();
                delete ReturnPearl[playerName][time];
                b = true;
            }
        }
    })
}