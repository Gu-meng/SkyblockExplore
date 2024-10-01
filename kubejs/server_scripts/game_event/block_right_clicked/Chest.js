BlockEvents.rightClicked("chest",event=>{
    let player = event.getPlayer();
    if (player.isShiftKeyDown()){
        let item = event.getItem();
        if (item.is(Item.of("meng:xp_shop"))){
            let block = event.getBlock()
            let chest;
            try{
                chest = item.getNbt().get("chest")
            }catch(err){chest = null}
            if (chest == null || !chest.isExist){
                item.setNbt({
                    chest:{
                        pos:{
                            x:block.getX(),
                            y:block.getY(),
                            z:block.getZ()
                        },
                        level:block.level.dimension.getPath(),
                        isExist:true
                    }
                })
                player.tell(Text.translate("tell.meng.chest_new"))
            }else{
                let pos = chest.get("pos");
                if (block.getX() != pos.getInt("x") ||
                    block.getY() != pos.getInt("y") ||
                    block.getZ() != pos.getInt("z")){
                        item.setNbt({
                            chest:{
                                pos:{
                                    x:block.getX(),
                                    y:block.getY(),
                                    z:block.getZ()
                                },
                                level:block.level.dimension.getPath(),
                                isExist:true
                            }
                        })
                        player.tell(Text.translate("tell.meng.chest_update"))
                }else{
                    
                    player.tell(Text.translate("tell.meng.chest_repetition"))
                }
            }
        }
    }
})