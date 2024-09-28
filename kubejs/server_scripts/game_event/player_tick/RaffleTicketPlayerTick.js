PlayerEvents.tick(event => {
    let player = event.getPlayer();
    let playerAttachedData = player.getData();
    let tickCount = event.getServer().getTickCount();
    if (playerAttachedData.get("lotteryState")) {
        let countMax = playerAttachedData.get("poolCountMax");
        let count = playerAttachedData.get("count");
        let itemShow = itemShowFunc(player,count,countMax);
        // console.log(itemShow);
        if (countMax - count <= 3) {
            if (tickCount % 10 == 0){
                if (count >= countMax){
                    playerAttachedData.add("lotteryState",false);
                    let poolList = poolItemList.find(value => Object.keys(value).includes(player.getUuid().toString()))[player.getUuid()];
                    player.give(Item.of(poolList[count-2]));
                    player.playNotifySound("minecraft:entity.player.levelup","players",1,1)
                    paintHide(player)
                    poolList = [];
                }else{
                    paintShow(player,itemShow.oneItemId,itemShow.twoItemId,itemShow.threeItemId);
                    playerAttachedData.add("count", count + 1)
                    player.playNotifySound("minecraft:entity.experience_orb.pickup","players",1,1)
                }
            }
        } else if (countMax - count <= 10) {
            if (tickCount % 5 == 0){
                paintShow(player,itemShow.oneItemId,itemShow.twoItemId,itemShow.threeItemId);
                playerAttachedData.add("count", count + 1)
                player.playNotifySound("minecraft:entity.experience_orb.pickup","players",1,2)
            }
        } else {
                paintShow(player,itemShow.oneItemId,itemShow.twoItemId,itemShow.threeItemId);
                playerAttachedData.add("count", count + 1)
                player.playNotifySound("minecraft:entity.experience_orb.pickup","players",1,2)
        }
        
    }
})

function itemShowFunc(player,count,max) {
    let uuid = player.getUuid();
    let poolList = poolItemList.find(value => Object.keys(value).includes(uuid.toString()))[uuid];
    let two_item = poolList[Number(count)];
    let one_item = poolList[count - 1 == -1 ? max - 1 : count - 1];
    let three_item;
    if (count - 2 == -2) {
        three_item = poolList[max - 2]
    } else if (count - 2 == -1) {
        three_item = poolList[max - 1]
    } else if (count - 2 >= 0) {
        three_item = poolList[count - 2]
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
            y: "$screenH/2+sin(time()*0.5)*$screenH/32",
        },
        item_two: {
            type: "item",
            item: one_item,
            visible: true,
            w: raffleTicketConfig.middleItemShowSize,
            h: raffleTicketConfig.middleItemShowSize,
            x: "$screenW/2",
            y: "$screenH/2+sin(time()*0.5)*$screenH/32",
        },
        item_three: {
            type: "item",
            item: three_item,
            visible: true,
            w: raffleTicketConfig.sideItemShowSize,
            h: raffleTicketConfig.sideItemShowSize,
            x: "$screenW/2+" + raffleTicketConfig.itemShowInterval,
            y: "$screenH/2+sin(time()*0.5)*$screenH/32",
        }
    })
}

