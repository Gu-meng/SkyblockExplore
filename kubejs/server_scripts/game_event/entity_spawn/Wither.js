EntityEvents.spawned("wither", event => {
    /**
     * @type {Internal.WitherBoss}
     */
    let wither = event.getEntity()
    let level = event.getLevel()
    let { x, y, z } = wither.blockPosition();
    let maxHealth = 300;
    let basicArmor = 0;
    let player = null
    player = level.getNearestPlayer(x, y, z, 100, false)
    try { player.getClass() } catch (err) { player = null }
    if (player != null) {
        let ppd = player.getPersistentData();
        let swc = ppd.getInt("summonWitherCount");
        maxHealth += Difficulty.wither.levelUpAddHealth * swc
        let laeh = 0;
        for (let key in Difficulty.wither.levelArriveExtraHealth){
            if (swc >= key){
                laeh = Difficulty.wither.levelArriveExtraHealth[key]
            }else if(laeh == 0){
                break;
            }
        }
        maxHealth += laeh;
        wither.setMaxHealth(maxHealth);
        wither.setHealth(maxHealth-210);
        let laa = 0;
        for (let key in Difficulty.wither.levelArriveArmor){
            if (swc >= key){
                laa = Difficulty.wither.levelArriveArmor[key]
            }else if(laa == 0){
                break;
            }
        }
        basicArmor += laa;
        wither.modifyAttribute("minecraft:generic.armor","armor_wither",basicArmor,"addition");
        ppd.putInt("summonWitherCount", swc + 1)
    }
})