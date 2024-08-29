PlayerEvents.tick(event => {
    if (event.getServer().getTickCount() % 20 != 0) {
        return;
    }
    let player = event.getPlayer();
    let t = time();
    switch (t) {
        case "06:00:00":
            playerNotify(player, 'minecraft:bell', Text.red("时间小助手"), Text.white("早上好,是一晚上没睡吗"))
            break;
        case "08:00:00":
            playerNotify(player, 'minecraft:mushroom_stew', Text.red("时间小助手"), Text.white("吃了吗,打游戏也别忘了吃早饭哦"))
            break;
        case "11:30:00":
            playerNotify(player, 'minecraft:mushroom_stew', Text.red("时间小助手"), Text.white("中午好,一定要记得吃中饭啊"))
            break;
        case "12:30:00":
            playerNotify(player, 'minecraft:red_bed', Text.red("时间小助手"), Text.white("你看已经" + t + ",要不先睡午觉吧"))
            break;
        case "17:00:00":
            playerNotify(player, 'minecraft:mushroom_stew', Text.red("时间小助手"), Text.white("下午好,马上就要吃晚饭了呢,游戏哪有干饭重要啊!"))
            break;
        case "22:30:00":
            playerNotify(player, 'minecraft:red_bed', Text.red("时间小助手"), Text.white("晚上好,已经到了睡觉的点了,你会早点休息的,对吧?"))
            break;
        case "00:00:00":
            playerNotify(player, 'minecraft:ender_eye', Text.red("时间小助手"), Text.white("都这个点了,你还不睡吗,难道真正的夜生活才刚刚开始吗!"))
            break;
        case "02:30:00":
        case "03:30:00":
            playerNotify(player, 'minecraft:clock', Text.red("时间小助手"), Text.white("真的还不睡吗,都已经" + t))
            break;
        case "04:30:00":
            playerNotify(player, 'draconicevolution:reactor_core', Text.red("时间小助手"), Text.white("我想你该睡了,确实不早了呢"))
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
