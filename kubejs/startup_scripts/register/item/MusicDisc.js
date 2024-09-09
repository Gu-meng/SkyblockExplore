StartupEvents.registry("sound_event",event=>{
    event.create("meng:music.never")
})

StartupEvents.registry("item",event=>{
    event.create(musicDisc.music_disc_never,"music_disc")
        .song("meng:music.never",214)
        .tag("music_discs")
})