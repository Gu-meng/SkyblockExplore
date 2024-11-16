EntityEvents.hurt("warden",event=>{
    /**
     * @type {Internal.Warden}
     */
    const warden = event.entity;
    if (event.source.getActual() instanceof $MGUFakePlayer && warden.hurtTime == 10){
        warden.attack(event.damage * 0.1);
        event.cancel();
    }
})