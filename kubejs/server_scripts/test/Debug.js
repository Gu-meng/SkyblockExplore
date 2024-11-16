const Debug = () => {
    function getItemId() {
        if (!debugConfig.handItemId) return;
        ItemEvents.firstLeftClicked(e => {
            if (e.item.is("air")) return;
            e.player.runCommand("kjs hand")
            Client.keyboardHandler.setClipboard('"' + e.item.id + '"');
        })
    }

    function itemEntityId() {
        if (!debugConfig.itemEntityId) return;
        LevelEvents.tick(e => {
            e.getLevel().getEntities().forEach(en => {
                if (en.type != "minecraft:item") return
                en.customNameVisible = true;
                en.customName = en.getUuid();
            })
        })
    }

    function runDebug() {
        if (debugConfig.isDebug) {
            itemEntityId();
            getItemId();
        }
    }

    return {
        runDebug: runDebug
    }
}

Debug().runDebug();
