EntityEvents.death("ender_dragon",event=>{
    if (MengUtils.isPercent(0.5)){
       let pos = event.getEntity().getOnPos();
       let level = event.getLevel()
       let spawnItem = level.createEntity("item");
       spawnItem.item = Item.of('minecraft:elytra', '{Damage:50}')
       spawnItem.glowing = true;
       spawnItem.customNameVisible = true;
       spawnItem.pos = pos;
       spawnItem.spawn();
       event.getLevel().getPlayers().tell(`末影龙掉落了鞘翅在坐标：${pos.x} ~ ${pos.z}`);
    }
})