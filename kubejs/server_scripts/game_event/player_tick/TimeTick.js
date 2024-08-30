PlayerEvents.tick(event => {
    if (event.getServer().getTickCount() % 20 != 0) {
        return;
    }
    let player = event.getPlayer();
    let t = time();
    switch (t) {
        case "06:00:00":
            playerNotify(player, 'minecraft:bell', Text.translate("notify.meng.time.title").red(), Text.translate("notify.meng.time.0600").white())
            break;
        case "08:00:00":
            playerNotify(player, 'minecraft:mushroom_stew', Text.translate("notify.meng.time.title").red(), Text.translate("notify.meng.time.0800").white())
            break;
        case "11:30:00":
            playerNotify(player, 'minecraft:mushroom_stew', Text.translate("notify.meng.time.title").red(), Text.translate("notify.meng.time.1130").white())
            break;
        case "12:30:00":
            playerNotify(player, 'minecraft:red_bed', Text.translate("notify.meng.time.title").red(), Text.translate("notify.meng.time.1230",t).white())
            break;
        case "17:00:00":
            playerNotify(player, 'minecraft:mushroom_stew', Text.translate("notify.meng.time.title").red(), Text.translate("notify.meng.time.1700").white())
            break;
        case "22:30:00":
            playerNotify(player, 'minecraft:red_bed', Text.translate("notify.meng.time.title").red(), Text.translate("notify.meng.time.2230").white())
            break;
        case "00:00:00":
            playerNotify(player, 'minecraft:ender_eye', Text.translate("notify.meng.time.title").red(), Text.translate("notify.meng.time.0000").white())
            break;
        case "02:30:00":
        case "03:30:00":
            playerNotify(player, 'minecraft:clock', Text.translate("notify.meng.time.title").red(), Text.translate("notify.meng.time.0330",t).white())
            break;
        case "04:30:00":
            playerNotify(player, 'draconicevolution:reactor_core', Text.translate("notify.meng.time.title").red(), Text.translate("notify.meng.time.0430").white())
            break;
    }
    player.paint({
        textMeng: {
            type: "text",
            x: 11,
            y: 50,
            text: "当前时间",
            alignX: "left",
            color: "red",
            scale: 1
        },
        textMeng2: {
            type: "text",
            x: 10,
            y: 60,
            text: t,
            alignX: "left",
            color: "blue"
        }
    })
})
