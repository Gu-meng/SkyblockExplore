// priority: 10

/**
 * 玩家右上角提示
 * @param {Internal.Player} player 
 * @param {Internal.ItemStack} itemIcon 
 * @param {Internal.Component} title 
 * @param {Internal.Component} text 
 * @param {Internal.Color} backgroundColor 默认为黑色
 * @param {Boolean} textShadow 默认为false
 * @param {Internal.Color} outlineColor 默认为黑色
 * @param {Internal.Color} borderColor 默认为白色
 */
function playerNotify(player,itemIcon,title,text,backgroundColor,textShadow,outlineColor,borderColor){
    player.notify(Notification.make(notification=>{
        if (backgroundColor == undefined) backgroundColor = Color.BLACK;
        if (textShadow == undefined) textShadow = false;
        if (outlineColor == undefined) backgroundColor = Color.BLACK;
        if (borderColor == undefined) borderColor = Color.WHITE;
        notification.text = [title,"\n",text]
        notification.itemIcon = itemIcon
        notification.backgroundColor = backgroundColor
        notification.textShadow = textShadow
        notification.outlineColor = outlineColor
        notification.borderColor = borderColor
    }));
}
