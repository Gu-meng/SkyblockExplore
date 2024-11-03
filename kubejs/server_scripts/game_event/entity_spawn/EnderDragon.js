EntityEvents.spawned("ender_dragon", event => {
    /**
     * @type {Internal.EnderDragon}
     */
    let dragon = event.getEntity();
    let { x, y, z } = dragon.blockPosition();
    let maxHealth = 200;
    let basicArmor = 0;
    let player = null
    player = level.getNearestPlayer(x, y, z, 100, false)
    try { player.getClass() } catch (err) { player = null }
    if (player != null) {
        let ppd = player.getPersistentData();
        let swc = ppd.getInt("summonDragonCount");
        maxHealth += Difficulty.endDragon.levelUpAddHealth * swc
        let laeh = 0;
        for (let key in Difficulty.endDragon.levelArriveExtraHealth) {
            if (swc >= key) laeh = Difficulty.endDragon.levelArriveExtraHealth[key]
            else if (laeh == 0) break;
        }
        maxHealth += laeh;
        dragon.setMaxHealth(maxHealth);
        dragon.setHealth(maxHealth);
        basicArmor += swc * Difficulty.endDragon.levelUpAddHealth;
        dragon.modifyAttribute("minecraft:generic.armor", "armor_dragon", basicArmor, "addition");
        ppd.putInt("summonDragonCount", swc + 1)
    }
})