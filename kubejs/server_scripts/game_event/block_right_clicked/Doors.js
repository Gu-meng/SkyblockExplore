Ingredient.of("#minecraft:doors").getStacks().forEach(item => {
    if (item.is("iron_door")) return;
    if (item.idLocation.getNamespace() == "create") return;
    console.log(item.id);
    BlockEvents.rightClicked(item.item.getBlock(), event => {
        if (event.getHand() != "MAIN_HAND") return;
        let block = event.block;
        let bs = block.blockState;
        let open, facing, hinge, neighborBlock;
        bs.getProperties().forEach(value => {
            if (value.getName() == "open") open = value;
            else if (value.getName() == "facing") facing = value;
            else if (value.getName() == "hinge") hinge = value;
        })
        if (bs.getValue(hinge) == $DoorHingeSide.LEFT) {
            if (bs.getValue(facing) == $Direction.SOUTH) neighborBlock = block.west;
            else if (bs.getValue(facing) == $Direction.WEST) neighborBlock = block.north;
            else if (bs.getValue(facing) == $Direction.NORTH) neighborBlock = block.east;
            else if (bs.getValue(facing) == $Direction.EAST) neighborBlock = block.south;

        } else {
            if (bs.getValue(facing) == $Direction.SOUTH) neighborBlock = block.east;
            else if (bs.getValue(facing) == $Direction.WEST) neighborBlock = block.south;
            else if (bs.getValue(facing) == $Direction.NORTH) neighborBlock = block.west;
            else if (bs.getValue(facing) == $Direction.EAST) neighborBlock = block.north;
        }

        if (neighborBlock.id == block.id && neighborBlock.blockState.getValue(hinge) != bs.getValue(hinge)) {
            neighborBlock.setBlockState(neighborBlock.blockState.setValue(open, !bs.getValue(open) ? $Boolean.TRUE : $Boolean.FALSE), 3)
        }

    })
})