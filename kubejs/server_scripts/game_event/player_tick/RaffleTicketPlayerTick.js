PlayerEvents.tick(event => {
    let player = event.getPlayer();
    let playerPersistentData = player.getPersistentData();
    let tickCount = event.getServer().getTickCount();
    if (playerPersistentData.getBoolean("lotteryState")) {
        let countMax = playerPersistentData.getInt("poolCountMax");
        let count = playerPersistentData.getInt("count");
        let itemShow = itemShowFunc(count,countMax);
        if (countMax - count <= 3) {
            if (tickCount % 10 == 0){
                if (count >= countMax){
                    playerPersistentData.putBoolean("lotteryState",false);
                    
                    player.give(Item.of(poolItemList[count-2]));
                    paintHide(player)
                    poolItemList = [];
                }else{
                    paintShow(player,itemShow.oneItemId,itemShow.twoItemId,itemShow.threeItemId);
                    playerPersistentData.putInt("count", count + 1)
                }
            }
        } else if (countMax - count <= 10) {
            if (tickCount % 5 == 0){
                paintShow(player,itemShow.oneItemId,itemShow.twoItemId,itemShow.threeItemId);
                playerPersistentData.putInt("count", count + 1)
            }
        } else {
                paintShow(player,itemShow.oneItemId,itemShow.twoItemId,itemShow.threeItemId);
                playerPersistentData.putInt("count", count + 1)
        }
        
    }
})

function itemShowFunc(count,max) {
    let two_item = poolItemList[count];
    let one_item = poolItemList[count - 1 == -1 ? max - 1 : count - 1];
    let three_item;
    if (count - 2 == -2) {
        three_item = poolItemList[max - 2]
    } else if (count - 2 == -1) {
        three_item = poolItemList[max - 1]
    } else if (count - 2 >= 0) {
        three_item = poolItemList[count - 2]
    }
    return {
        oneItemId:one_item,
        twoItemId:two_item,
        threeItemId: three_item
    }
}

function paintHide(player) {
    player.paint({
        item_one: {
            visible: false
        }, item_two: {
            visible: false
        }, item_three: {
            visible: false
        }
    })
}

function paintShow(player, one_item, two_item, three_item) {
    player.paint({
        item_one: {
            type: "item",
            item: two_item,
            visible: true,
            w: raffleTicketConfig.sideItemShowSize,
            h: raffleTicketConfig.sideItemShowSize,
            x: "$screenW/2-" + raffleTicketConfig.itemShowInterval,
            y: "$screenH/2+sin(time()*1.2)*$screenH/32",
        },
        item_two: {
            type: "item",
            item: one_item,
            visible: true,
            w: raffleTicketConfig.middleItemShowSize,
            h: raffleTicketConfig.middleItemShowSize,
            x: "$screenW/2",
            y: "$screenH/2+sin(time()*1.2)*$screenH/32",
        },
        item_three: {
            type: "item",
            item: three_item,
            visible: true,
            w: raffleTicketConfig.sideItemShowSize,
            h: raffleTicketConfig.sideItemShowSize,
            x: "$screenW/2+" + raffleTicketConfig.itemShowInterval,
            y: "$screenH/2+sin(time()*1.2)*$screenH/32",
        }
    })
}

