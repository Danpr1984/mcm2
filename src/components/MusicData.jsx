import React from 'react';


const musicPlaylists = {

    popSongs : [
        { name: "Happy", url:'/music/happy/Feeling_Happy_FesliyanStudios.mp3'},
        { name: "Gloria Gaynor - I Will Survive", url: "https://soundcloud.com/amr-el-mohandis/gloria-gaynor-i-will-survive?si=e3f8fdd3aee74501b1244af35c893c97&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Mina Assaad - ILuvUBaby", url: "https://soundcloud.com/mina-assaad/iluvubaby?si=c1668322188641b3baf0218b791b0480&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Dean Martin - Sway", url: "https://soundcloud.com/dean-martin-official/sway-149921477?in=dean-martin-official/sets/sway-825349209&si=6aafbcce89dd4610889a9edeb3e793fd&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Dean Martin - We Never Talk Much", url: "https://soundcloud.com/dean-martin-official/we-never-talk-much-3?in=dean-martin-official/sets/sway-825349209&si=adcecc58ab4346f59a37cba5b510e1b6&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Dean Martin - Choon Gum", url: "https://soundcloud.com/dean-martin-official/choon-gum-6?in=dean-martin-official/sets/sway-825349209&si=89825deeeeed465ebf178f1071a11302&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Dean Martin - Zing-a-Zing-a-Boom", url: "https://soundcloud.com/dean-martin-official/zing-a-zing-a-boom-2?in=dean-martin-official/sets/sway-825349209&si=04a4237c27bd48fd95d2066ebedd93f7&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Dean Martin - Bye Bye Blackbird", url: "https://soundcloud.com/dean-martin-official/bye-bye-blackbird-381155793?in=dean-martin-official/sets/sway-825349209&si=8b7da2413f2749de84c96c27ba0c78d9&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Dean Martin - Luna Mezzo Mare", url: "https://soundcloud.com/dean-martin-official/luna-mezzo-mare-965892173?in=dean-martin-official/sets/sway-825349209&si=7bd7aec6e3264176b22c38cb65ecd2d3&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Natalie Imbruglia - Torn", url: "https://soundcloud.com/franriv/natalie-imbruglia-torn?si=7d13652045e343efad0ba0a9d07cf830&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Carla Bruni - Quelqu'un m'a dit", url: "https://soundcloud.com/peban-robledo/carla-bruni-quelquun-ma-dit?si=c73e3dd9dd0a47f7a67aae2ead71a55c&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Carla Bruni - Enjoy the Silence", url: "https://soundcloud.com/carla-bruni-official/enjoy-the-silence?si=32842dc2916e4d4bbff2bca07fd53727&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Sting - Desert Rose", url: "https://soundcloud.com/sting/sting-desert-rose-album?si=ba8380ed75ab4933b399f7bcecfc2abd&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Sting - Englishman in New York", url: "https://soundcloud.com/sting/englishman-in-new-york-1?si=c99a9c75906b4fe29a8fa07bb3b55cd4&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Sting - Fields of Gold", url: "https://soundcloud.com/sting/fields-of-gold-album-version-1?si=eb13eb2a3744489f93ab9422b20ab8cd&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Sinead O'Connor - Nothing Compares 2 U", url: "https://soundcloud.com/sineadoconnor/nothing-compares-2-u-2009?si=245daaca28db4a2695adb0ece394dbbc&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "U2 - With or Without You", url: "https://soundcloud.com/u2/with-or-without-you-1?si=8a90f4358cf148fea0a931cb959e6d2e&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Sting - Shape of My Heart", url: "https://soundcloud.com/musikconnections/sting-shape-of-my-heart?si=28e4ec8f5d584d838d6710fba79aa72d&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Unknown - Disfruto", url: "https://soundcloud.com/user-564975034-517103458/disfruto?si=e15b656e6e6545329f29df5efa0dc933&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" }
    ],
    
    indieSongs : [
        { name: "La Bole - Ma Belle", url: "https://soundcloud.com/user-141985561/la-bole-ma-belle?in=sc-playlists/sets/imposter-syndrome&si=600bca9f8a204f008a4eac4823351bf5&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Slow Salvation - Here We Lie", url: "https://soundcloud.com/velvetblue/slow-salvation-here-we-lie?in=sc-playlists/sets/imposter-syndrome&si=f5c54f17806e405b918bc645fc0691d2&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Marigold", url: "https://soundcloud.com/deresa-rownon/marigold?in=sc-playlists/sets/imposter-syndrome&si=19b9abed498d4b628d649e9ed113aa36&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Spun Sugar - Skin Unwell", url: "https://soundcloud.com/adrianrec/spunsugar-skin-unwell-1?in=sc-playlists/sets/imposter-syndrome&si=ca66e2607dea4f26bc85293fcaee5384&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Go to the Light", url: "https://soundcloud.com/salemavenue/go-to-the-light?in=sc-playlists/sets/imposter-syndrome&si=18c8549e3b5f43d094dc377c213c80a4&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Dory", url: "https://soundcloud.com/abbeyroad-88/dory?si=19e04002612c49f9bcb5e078c7ad8b73&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "After Dark w/ Helm", url: "https://soundcloud.com/user-612196404/after-dark-w-helm-251023?si=d3dc0e5676b8467a85f9bba495d6796e&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Changes", url: "https://soundcloud.com/mayzieiscool/changes-1?in=sc-playlists/sets/indie-chill&si=9e1ba47d788f4e62b46ddfdb3e339dfc&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Post Malone - Joy", url: "https://soundcloud.com/postmalone/post-malone-joy?in=sc-playlists/sets/indie-chill&si=6435d9690dc54851a2b144722adf1d72&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Life of City", url: "https://soundcloud.com/sienna-johnson-19903899/life-of-city?in=sc-playlists/sets/indie-chill&si=f791f489f04f437c9c3bde88cb666bc8&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Hope Fool", url: "https://soundcloud.com/ohmyglobmusic/hope-fool-1?in=sc-playlists/sets/indie-chill&si=6a36ae21bfd448ab8b4288a41cf0ea30&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "National Anthem (Demo)", url: "https://soundcloud.com/felipe-rocha-767396601/national-anthem-demo?si=d5143f0ef6f84ad98de9a08f4f343a68&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
    ],

    rockSongs : [
        { name: "Three Days Grace - Animal I Have Become", url: "https://soundcloud.com/user-739067134/three-days-grace-animal-i-have?si=2c73e628bd534193a9273da0ca38fe29&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Mistreated", url: "https://soundcloud.com/stanley-broo/shooting-12mistreated-wav?si=d669e3a29d26497d9133b8a6c0a2e531&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Castaway", url: "https://soundcloud.com/user-164960175/castaway?si=7235810b5c1d4672ac7d180ab23ec235&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Queen - Don't Stop Me Now (Remastered)", url: "https://soundcloud.com/queen-69312/dont-stop-me-now-remastered?in=queen-69312/sets/greatest-hits-239&si=ed819002db5048ceaa1eb3ec412099d4&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Oasis - Hello (Remastered)", url: "https://soundcloud.com/oasisofficial/hello-remastered?in=oasisofficial/sets/whats-the-story-morning-2&si=e65868a0d3d144faad69975aa5f06a2a&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "The Offspring - Self Esteem", url: "https://soundcloud.com/offspring/self-esteem-1?si=eb2b53f11f6a42d9aa76a7eff4cc4aa7&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Van Halen - Jump", url: "https://soundcloud.com/vanhalenofficial/van-halen-jump?si=9a500aab67b143b6808842378a6f8f4d&utm_source=clipboard&utm_medium=text&utm_campaign?sociShooting-12Mistreated.waval_sharing" },
        { name: "Queen - Radio Ga Ga (Remastered 2011)", url: "https://soundcloud.com/queen-69312/radio-ga-ga-remastered-2011?si=6ddebfc920624d7d8c21171c8893d858&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" }
    ],


    jazzSongs : [
        { name: "Jazz Music Part 1", url: "https://soundcloud.com/lofifruitsmusic/jazz-music-pt-1?in=lofifruitsmusic/sets/relaxing-jazz-music-4&si=fca84fc5cc664d9aaa87090ebcdfe279&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Louis Armstrong - La Vie en Rose", url: "https://soundcloud.com/qu-nh-kh/louis-armstrong-la-vie-en-rose?in=michael-magdy-317962815/sets/best-of-jazz&si=d59932905fe64c818a61162bb8052419&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Louis Armstrong - Ella", url: "https://soundcloud.com/bruno-takano/louis-armstrong-ella?in=michael-magdy-317962815/sets/best-of-jazz&si=7f083a441f934b65962800e5450ae61f&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Milestones", url: "https://soundcloud.com/milesdavissonymusic/milestones-1?in=milesdavissonymusic/sets/milestones-968808591&si=344ccd566fa24c54b8ba49745033f343&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Don't Explain to Me, Baby", url: "https://soundcloud.com/milesdavissonymusic/dont-explain-to-me-baby-2?in=milesdavissonymusic/sets/milestones-968808591&si=0f798a92747742a7909382fb3178681f&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Klact-Oveedseds-Tene", url: "https://soundcloud.com/milesdavissonymusic/klact-oveedseds-tene?in=milesdavissonymusic/sets/milestones-968808591&si=2bde4398f5eb47829352e0cfb3da5331&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "STJ006", url: "https://soundcloud.com/soultreasurerecords/stj006?si=c4bc337dbbae4453a9de7e815fd325bb&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Be Bop", url: "https://soundcloud.com/charlie-parker/be-bop-21377067?in=charlie-parker/sets/be-bop-6&si=3e9520d7f39147adba3f38732049eeb5&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Leap Frog", url: "https://soundcloud.com/charlie-parker/leap-frog-7?in=charlie-parker/sets/be-bop-6&si=d0354c0e30eb4f3e98fd382c98a5c253&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "The Girl from Ipanema", url: "https://soundcloud.com/stan-getz-official/the-girl-from-ipanema-6?si=ad5f6b8306c746b3a0122182de651f3d&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Autumn Leaves", url: "https://soundcloud.com/stan-getz-official/autumn-leaves-40368341?in=stan-getz-official/sets/autumn-leaves-926689203&si=6c193d2ad198448cb563697b973aaecc&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Moonlight in Vermont", url: "https://soundcloud.com/stan-getz-official/moonlight-in-vermont-316515117?in=stan-getz-official/sets/autumn-leaves-926689203&si=a7a02da8ba7c4857bc4ad66e15bcd0cb&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Tenderly", url: "https://soundcloud.com/stan-getz-official/tenderly-327916245?in=stan-getz-official/sets/autumn-leaves-926689203&si=7f9f2b0c9cef4fd182978dd80195a432&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" }
    ],

    reggaeSongs : [
        { name: "Cry 2 Me (CVR) - Ky-mo ft. SoSo", url: "https://soundcloud.com/kymo-roby/cry-2-me-cvr-ky-mo-ft-soso?in=sc-playlists/sets/reggae-sundaze&si=a423f25f3a2b4b0e9c4405e250716dfb&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Sa Ou Le Moe Toe Foi I Le Aiga", url: "https://soundcloud.com/wayno1995/sa-ou-le-moe-toe-foi-i-le-aiga?in=sc-playlists/sets/reggae-sundaze&si=722ecf6a2044401ea84da306211bc046&utm_source=clipboard&utm_medium=text&utm_campaign?sociShooting-12Mistreated.waval_sharing" },
        { name: "Swiss Mausa Siamane 2023", url: "https://soundcloud.com/joseph-m-s-vailea/swiss-mausa-siamane-2023?in=sc-playlists/sets/reggae-sundaze&si=b53483c5c675461e87b24da6ad0bdc4a&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Knova Sii Ngoue Kakala feat. Konecs", url: "https://soundcloud.com/tausinga/knova-sii-ngoue-kakala-feat-konecs?in=sc-playlists/sets/reggae-sundaze&si=7d893b8ba59d43e9886b1ba8765141ae&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Bob Marley & The Wailers - No Woman, No Cry", url: "https://soundcloud.com/bob-marley-the-wailers/no-woman-no-cry-2?si=99cd225f459946339d80d4787440a8fa&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Bob Marley & The Wailers - I Shot the Sheriff", url: "https://soundcloud.com/bob-marley-the-wailers/i-shot-the-sheriff-2?si=7aee08002c724f789bd5ddbbdac88190&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Bob Marley & The Wailers - Could You Be Loved (12'' Mix)", url: "https://soundcloud.com/bob-marley-the-wailers/could-you-be-loved-12-mix?si=1fe292ad18cc427bbc227ef452ffe1cc&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Bob Marley & The Wailers - Three Little Birds (Album)", url: "https://soundcloud.com/bob-marley-the-wailers/three-little-birds-album?si=b271a7deeea04a509652199b4052bf8d&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Pacific Coast Reggae Hits", url: "https://soundcloud.com/burnwellmusic/sets/pacific-coast-reggae-hits?si=8fcb9560059d45b89cd1a965448446eb&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Pergi, Hilang, dan Lupakan", url: "https://soundcloud.com/ari-wibowo-558257811/pergi-hilang-dan-lupakan?in=bangifalyt/sets/reggae-ska-full-album-2020&si=9c7030b70dbd4487aec154d0f952d920&utm_source=clipboard&utm_medium=text&utm_campaign?sociShooting-12Mistreated.waval_sharing" },
        { name: "New Found Love", url: "https://soundcloud.com/popcaanmusic/new-found-love?in=user-747990849/sets/lovers-rock-reggae-mix-1990&si=6b7edcc74fc343e994a374c526888180&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Kelvin Dixon - Never", url: "https://soundcloud.com/restydancehall/kelvin-dixon-never?in=user-747990849/sets/lovers-rock-reggae-mix-1990&si=a806f1c8753841da9e2a2e3377631021&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" }
    ],

    classicSongs : [
        { name: "Classic Playlist", url: "https://soundcloud.com/hanangobran/sets/classic?si=04a81e539995405795dec8317b03f263&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Rachmaninoff", url: "https://soundcloud.com/marogobran/rachmaninoff?in=hanangobran/sets/classic&si=136de8e34ff048f6940cd2af2d7bb50a&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Sleep", url: "https://soundcloud.com/marogobran/sleep?in=hanangobran/sets/classic&si=a70e9dafa5c14384b840f60825b24e78&utm_source=clipboard&utm_medium=text&utm_campaign?sociShooting-12Mistreated.waval_sharing" },
        { name: "Vivaldi", url: "https://soundcloud.com/marogobran/vivaldi?in=hanangobran/sets/classic&si=03ab988ef3a149ea820d5d7ef7b844a4&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Vision", url: "https://soundcloud.com/marogobran/vision?in=hanangobran/sets/classic&si=ca78dad41a1d4d9389f56328b035039e&utm_source=clipboard&utm_medium=text&utm_campaign?sociShooting-12Mistreated.waval_sharing" },
        { name: "Tchaikovsky - Waltz of the Flowers", url: "https://soundcloud.com/marogobran/tchaikovsky-waltz-of-the?in=hanangobran/sets/classic&si=3ec58787cc844baeb635ddd592d3efd2&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Mozart - Piano Concerto 21 Andante", url: "https://soundcloud.com/didlybom/mozart-piano-concerto-21-andante?in=hanangobran/sets/classic&si=15e9f6931dae41f8bfa963aa67dbc28b&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Tchaikovsky - Waltz of the Flowers", url: "https://soundcloud.com/marogobran/tchaikovsky-waltz-of-the?in=hanangobran/sets/classic&si=0d501236233d4685adf53027604bff6c&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Charmed", url: "https://soundcloud.com/hanangobran2/charmed?in=hanangobran/sets/classic&si=b8ef49ff24b343a5909f5ccca90c8ab4&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Pretty Woman", url: "https://soundcloud.com/hanangobran2/pretty-woman?in=hanangobran/sets/classic&si=e85f9f4c3c5b4499a1946fe60edc9f1c&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "My Love", url: "https://soundcloud.com/marogobran/my-love?in=hanangobran/sets/classic&si=f4c7f8f066174b66a88a2b6fa7cf9031&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Monalisa", url: "https://soundcloud.com/hanangobran2/monalisa?in=hanangobran/sets/classic&si=186de0abba944091a71a809391fc19cf&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Fantasy", url: "https://soundcloud.com/marogobran/fantasy?in=hanangobran/sets/classic&si=7b62df651d1146d9858aab4bbb3b86c8&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" }
    ],

    funkSongs : [
        { name: "Patrick Hernandez - Born to Be Alive", url: "https://soundcloud.com/josiasarmange/patrick-hernandez-born-to-be-alive?in=sanders-zdc/sets/disco-funk-music-70-80-90&si=6e26e996ba5b4fbb81429ed1c8568d68&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Enzo Pianzola - Mr. Trend (Disco Shout Unplugged Mix)", url: "https://soundcloud.com/baci-recordings/br1909-enzo-pianzola-mr-trend-disco-shout-unplugged-mix?in=sanders-zdc/sets/disco-funk-music-70-80-90&si=cefccc1d7f0a4ea380d07e23a07872df&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Lipps Inc. - Funky Town", url: "https://soundcloud.com/user-708707273/lipps-inc-funky-town?in=sanders-zdc/sets/disco-funk-music-70-80-90&si=f48a35aea29f48a089121680d3f377cc&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Don't Go", url: "https://soundcloud.com/brunchrecords/dont-go?in=sanders-zdc/sets/disco-funk-music-70-80-90&si=cea35ae1dd704f6da30ec02f915e7c41&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Faith and Fire", url: "https://soundcloud.com/vivian-reed-official/faith-and-fire?in=sanders-zdc/sets/disco-funk-music-70-80-90&si=b5d2a0baa1f545319460b28f7ea60a52&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Enzo Pianzola - Mr. Trend (Disco Biscuit 70s Mix)", url: "https://soundcloud.com/baci-recordings/br1908-enzo-pianzola-mr-trend-disco-biscuit-70s-mix?in=sanders-zdc/sets/disco-funk-music-70-80-90&si=cd33f7edaf384492be2f0f94ccd6480f&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Indeep - Last Night a DJ Saved My Life", url: "https://soundcloud.com/user-859393091/indeep-last-night-a-dj-saved-my-life?in=sanders-zdc/sets/disco-funk-music-70-80-90&si=d968560b2d124668acb95ec876920d84&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Donna Summer - Hot Stuff", url: "https://soundcloud.com/donna-summer-official/hot-stuff-3?in=sanders-zdc/sets/disco-funk-music-70-80-90&si=22b84d824b33482dbcc7be4f203db7c3&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "The Bee Gees Tribute Band - Night Fever", url: "https://soundcloud.com/thebeegeestributeband/night-fever?in=sanders-zdc/sets/disco-funk-music-70-80-90&si=557a5d22695d4d3ea8e6dd967dc175ce&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Unidisc - Keep On Jumpin' (Radio Edit)", url: "https://soundcloud.com/unidisc-music/keep-on-jumpin-radio-edit?in=sanders-zdc/sets/disco-funk-music-70-80-90&si=42efd51bf9684c05b8083d7b6e281e73&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "The Ritchie Family - The Best Disco in Town", url: "https://soundcloud.com/pandro_fffff/4-the-ritchie-family-the-best?in=sanders-zdc/sets/disco-funk-music-70-80-90&si=0ffc7e93737145ad902bceacb5c532be&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "New Paradise - Easy Life", url: "https://soundcloud.com/new-paradise-official/easy-life?in=sanders-zdc/sets/disco-funk-music-70-80-90&si=073de0e8c20c452cb3789dc75a538498&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Café del Aantarn - Funky Town (LyricsR)", url: "https://soundcloud.com/cafedelantaarn/funky-town-lyricsr?si=a3b53ad66bf043fd81c5129f9bbb7f5f&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" }
    ],

    boleroSongs : [
        { name: "Los Panchos - Sabor a Mí", url: "https://soundcloud.com/los-panchos/sabor-a-mi-8?in=los-panchos/sets/boleros-de-siempre-371712054&si=5f64b604957a42e3a3acc64c667acb9f&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Los Panchos - Piel Canela", url: "https://soundcloud.com/los-panchos/piel-canela-5?in=los-panchos/sets/boleros-de-siempre-371712054&si=8a0cc00e19264456870faaa4987fd1c6&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Los Panchos - Besame Mucho", url: "https://soundcloud.com/los-panchos/besame-mucho-826730390?in=los-panchos/sets/boleros-de-siempre-371712054&si=618da1f2f6a048f5947f2ecf595e8ff8&utm_source=clipboard&utm_medium=text&utm_campaign?sociShooting-12Mistreated.waval_sharing" },
        { name: "Los Panchos - El Reloj", url: "https://soundcloud.com/los-panchos/el-reloj-5?in=los-panchos/sets/boleros-de-siempre-371712054&si=8ca2643e3bd741f18df3047623b82222&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Javier Solís - Sombras", url: "https://soundcloud.com/javiersolisofficial/sombras-354690238?in=javiersolisofficial/sets/boleros-rancheros&si=055ef83183384057a5d029bc0ecfbe62&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Javier Solís - Esclavo y Amo", url: "https://soundcloud.com/javiersolisofficial/esclavo-y-amo-8?in=javiersolisofficial/sets/boleros-rancheros&si=fc265a37cf234c32a9bf77e94697d0d9&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Javier Solís - Adelante", url: "https://soundcloud.com/javiersolisofficial/adelante-2?in=javiersolisofficial/sets/boleros-rancheros&si=a540180bc3b749b4af426910a1886fd1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Javier Solís - Media Vuelta", url: "https://soundcloud.com/javiersolisofficial/media-vuelta-5?in=javiersolisofficial/sets/boleros-rancheros&si=cb0e2cf53a76497cae0768aa0d7393f6&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" }
    ],

    alternativeSongs : [
        { name: "Depeche Mode - Precious", url: "https://soundcloud.com/eric-lymon/depeche-mode-precious-in-my-eyes?in=irina-dm/sets/depeche-mode&si=ac60484a782a40ffbc4d409530dd28ed&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Tame Impala - The Less I Know The Better", url: "https://soundcloud.com/tame-impala/the-less-i-know-the-better?si=de8e8c03ab4940d68eccb4d9c5a61ae2&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Tame Impala - Borderline", url: "https://soundcloud.com/tame-impala/borderline-1?si=4d530ddda70043c6ad0a6bde29cfcebb&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Tame Impala - Eventually", url: "https://soundcloud.com/tame-impala/eventually?si=93c04f9113cd4feb9c97926b32e1d401&utm_source=clipboard&utm_medium=text&utm_campaign?sociShooting-12Mistreated.waval_sharing" },
        { name: "Flying Lotus - Massive Attack", url: "https://soundcloud.com/flyinglotus/flying-lotus-massive-attack?si=496f898682674755bb71e1e0d5f1894e&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Terry Callier - The Windmill", url: "https://soundcloud.com/massive-attack-2/terry-callier-the-windmill?si=2bd3b5423e17476c99c20f2d44c80197&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Terry Callier - The Windmill", url: "https://soundcloud.com/massive-attack-2/terry-callier-the-windmill?si=8d868dad1ff94c8aab42f521dee5ca0c&utm_source=clipboard&utm_medium=text&utm_campaign?sociShooting-12Mistreated.waval_sharing" },
        { name: "Moby - Porcelain", url: "https://soundcloud.com/moby/porcelain?si=32081c0d7a144c2a920ec84bb4f2d829&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Moby - Extreme Ways", url: "https://soundcloud.com/moby/extreme-ways?si=fbaf276fbc2241dda2ee120043cf397c&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Moby - Sunday", url: "https://soundcloud.com/moby/sunday?si=776932f7a9674e6eaff0ef20c2f4ab94&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Moby - Lie Down in Darkness", url: "https://soundcloud.com/moby/lie-down-in-darkness?si=2df5c94ca14147c389eb94719def7f26&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Chris Thawiz - Far Out", url: "https://soundcloud.com/christhawiz/far-out?si=850565bd82e64b509d13c8833699b8d0&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Beautifully Ordinary", url: "https://soundcloud.com/user-500066332/beautifully-ordinary?si=610f8f0ee27548ef92df592b9820e551&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Yung Metz - Jewel", url: "https://soundcloud.com/yungmetz/jewel?si=bd8a2c6057674f8193d8291d6bc90ebf&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Daft Punk - One More Time", url: "https://soundcloud.com/daft-punk-id/daft-punk-one-more-time?si=2c2384f7e789433c8726ce1a9392bc5a&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "The Weeknd, Daft Punk - Starboy (Kygo Remix)", url: "https://soundcloud.com/kygo/the-weeknd-daft-punk-starboy-kygo-remix?si=090787022f86456a8a0fb60f8bca91cf&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" }
    ],

    bossaNovaSongs : [
        { name: "Caetano Veloso, Chico Buarque - Caetano Veloso, Chico Buarque", url: "https://soundcloud.com/lamarabeknadze/caetano-veloso-chico-buarque?in=residencial-teixera/sets/bossa-nova&si=119c3a572727469192e91197ac6a622e&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Garota de Ipanema - Tom Jobim", url: "https://soundcloud.com/richardborges1/garota-de-ipanema-tom-jobim?in=residencial-teixera/sets/bossa-nova&si=937d10eae1b6485ab1231e8117831ba3&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Wave - Tom Jobim", url: "https://soundcloud.com/amarilisbella/wave-tom-jobim?in=residencial-teixera/sets/bossa-nova&si=52350fa6efd3404d848e974249be081a&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Tom Jobim, Miucha e Vinicius - Tom Jobim, Miucha e Vinicius", url: "https://soundcloud.com/destakmusical/32-tom-jobim-miucha-e-vinicius?in=residencial-teixera/sets/bossa-nova&si=e87667818ebf4b1b99e2d8e0b12445a0&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Miucha, Tom Jobim - Miucha, Tom Jobim", url: "https://soundcloud.com/le_ticia/10-sei-la-miucha-tom-jobim?in=residencial-teixera/sets/bossa-nova&si=732bf81f155d415993ad694fbf5a94ad&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Tom Jobim - Ligia (Lofi Remix)", url: "https://soundcloud.com/gabrielmzero/ligia-tom-jobim-lofi-remix?in=residencial-teixera/sets/bossa-nova&si=562b54afaa5c46b6aa54bacaa4352410&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Tom Jobim, Vinicius de Moraes - Tom Jobim, Vinicius de Moraes", url: "https://soundcloud.com/ediposilvaa/ela-e-carioca-tom-jobim-vinicius-de-moraes?in=residencial-teixera/sets/bossa-nova&si=d701fc04fe4f4286a17de9b32495eb09&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Tom Jobim - Brigas Nunca Mais", url: "https://soundcloud.com/bigjbrazilianjazz/brigas-nunca-mais-tom-jobim?in=residencial-teixera/sets/bossa-nova&si=5917083586f242f3a2473f59e242736d&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Tom Jobim, Newton - Desafinado", url: "https://soundcloud.com/flaviadantas/desafinado-tom-jobim-e-newton?in=residencial-teixera/sets/bossa-nova&si=e36a5c95e13f4f11a6e0cf6a1cb948e9&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Tom Jobim - Luiza (Remastered)", url: "https://soundcloud.com/dasanudas/tom-jobim-luiza-remastered?in=residencial-teixera/sets/bossa-nova&si=cd4937a6a5734766abed060d0b78cba3&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Tom Jobim - Hes a Carioca", url: "https://soundcloud.com/ordinariusvocal/hes-a-carioca-tom-jobim-ray?in=residencial-teixera/sets/bossa-nova&si=700e23a6e85a4305b4b7ba8a186f1e8f&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Agua de Beber", url: "https://soundcloud.com/sandraborn/08-agua-de-beber?in=residencial-teixera/sets/bossa-nova&si=45242520af5f45f3a9611cfb88e186b9&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"}, 
    ],

    hipHopSongs : [
        { name: "A Tribe Called Quest - Scenario", url: "https://soundcloud.com/hiphop-classics1/a-tribe-called-quest-ft?in=hiphop-classics1/sets/early-90s-hardcore-rap&si=fb943158f3484383b1ae9ce4253d522d&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "MC Lyte - Another Dope Intro (1991)", url: "https://soundcloud.com/hiphop-classics1/mc-lyte-another-dope-intro-1991?in=hiphop-classics1/sets/early-90s-hardcore-rap&si=e3fe4cc7b16b4fc28e3a3ffa2efeddc7&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "2Pac - Young Black Male (1991)", url: "https://soundcloud.com/hiphop-classics1/2pac-young-black-male-1991?in=hiphop-classics1/sets/early-90s-hardcore-rap&si=466ac9096bb94f7eb6a7435faf17a8f5&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Fugees - Killing Me Softly", url: "https://soundcloud.com/fugees/killing-me-softly?si=e60c014d0dec46e3aafbf8fe9a14fcc5&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Fugees - If I Ruled The World (Feat. Nas)", url: "https://soundcloud.com/fugees/if-i-ruled-the-world-feat-nas?si=53039495eb884c5d8620e00068f9d9e5&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" },
        { name: "Fugees - I Shot the Sheriff", url: "https://soundcloud.com/fugees/i-shot-the-sherriff?si=16137535f50843fe9e5f08169f6fd251&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" }
    ]
    }
    export { musicPlaylists };
