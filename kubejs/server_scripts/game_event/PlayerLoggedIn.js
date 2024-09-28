PlayerEvents.loggedIn(event=>{
    event.player.paint({
        testTooltip1:{
            type:"text",
            x:11,
            y:"$screenH - 30",
            alignX: "left",
            text:"开发版公测不代表最终品质",
            scale: 0.8,
        },
        testTooltip2:{
            type:"text",
            x:11,
            y:"$screenH - 20",
            alignX: "left",
            text:"如有任何问题在发布处留言",
            scale: 0.8,
        }
    })
})