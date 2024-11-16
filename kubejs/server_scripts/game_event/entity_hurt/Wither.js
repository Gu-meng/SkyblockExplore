EntityEvents.hurt("wither",event=>{
    /**
     * @type {Internal.WitherBoss}
     */
    const wither = event.entity;
    if (event.source.getActual() instanceof $MGUFakePlayer && warden.hurtTime == 10){
        wither.attack(event.damage * 0.1);
        event.cancel();
    }
})