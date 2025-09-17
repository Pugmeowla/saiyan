let music_list = {
    cha_la_head_cha_la: 199,   // duration in seconds
    dan_dan_kokoro_hikareteku: 215,   
    makafushigi_adventure: 230,   
    ultimate_battle: 175,   
    chouzetsu_dynamic: 30,   
    dragon_soul: 173,   
  };
  StartupEvents.registry('sound_event', e => {
    Object.keys(music_list).forEach(key => {
        e.create(`saiyan:music.${key}`) 
    })
  })
  

  StartupEvents.registry('item', e => {
    Object.keys(music_list).forEach((key) => {
      let value = music_list[key]  
        e.create(`saiyan:music_disc_${key}`, "music_disc")
            .song(`saiyan:music.${key}`, value)
            .displayName("Music Disc")
            .texture(`saiyan:item/music_disc_${key}`)
            .tag("music_discs")
            .translationKey(`item.saiyan.music_disc_${key}`)
          })
  })