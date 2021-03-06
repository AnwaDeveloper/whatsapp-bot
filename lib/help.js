function help() {
    return `
>═══〘  🔰 *ANWA BOT* 🔰 〙═══<

➤ *NAME : ANWA BOT*
➤ *NODE VERSI : NODEJS V13*
➤ *VERSION : 1*
➤ *PREFIX : [ ! ]*
➤ *CREATOR : ANWA DEV*

>═══〘  *ANWA BOT*  〙═══<

     〘 Group Commands 〙

➤ *!add 628xxxxxxx*
➤ *!kick @tagmember*
➤ *!promote @tagmember*
➤ *!demote @tagadmin*
➤ *!mentionAll*
➤ *!adminList*
➤ *!ownerGroup*
➤ *!leave*
➤ *!linkGroup*
➤ *!delete [replyChatBot]*
➤ *!kickAll*
➤ *!NSFW [enable|disable]*
l➤ *!welcome [enable|disable]*

>═══〘  *ANWA BOT*  〙═══<
 
    〘 Downloader Commands 〙

➤ *!ytmp3 [linkYt]*
➤ *!ytmp4 [linkYt]*
➤ *!ig [linkIg]*
➤ *!fb [linkFb]*

>═══〘  *ANWA BOT*  〙═══<

     〘 Others Commands 〙
     
➤ *!sticker*
➤ *!stickerGif*
➤ *!creator*
➤ *!neko*
➤ *!inu*
➤ *!jadwalShalat [daerah]*
➤ *!jadwalTv [channel]*
➤ *!cuaca [tempat]*
➤ *!tts [kode bhs] [teks]*
➤ *!igStalk [@username]*
➤ *!wiki [query]*
➤ *!anime [query]*
➤ *!brainly [pertanyaan] [.jumlah]*
➤ *!loli*
➤ *!waifu*
➤ *!husbu*
➤ *!randomNekoNime*
➤ *!randomTrapNime*
➤ *!randomAnime*
➤ *!info*
➤ *!infoGempa*
➤ *!meme*
➤ *!quotemaker [|teks|author|theme]*
➤ *!join [linkGroup]*
➤ *!quotes*➤ *!quotesnime*
➤ *!wait*
➤ *!nulis [teks]*
➤ *!donasi*
➤ *!lirik [optional]*
➤ *!chord [query]*
  
>═══〘  *ANWA BOT*  〙═══<
 
       〘  *INFORMASI*  〙

 Kirim perintah *!readme* untuk mengetahui command
 
>═══〘  *ANWA BOT*  〙═══<`
}
exports.help = help()
function readme() {
    return `
*[linkYt]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : *!ytmp3 https://youtu.be/VQ13YmKdScg*

*[linkYt]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : *!ytmp4 https://youtu.be/VQ13YmKdScg*

*[linkIg]* Diisi dengan link Instagram yang valid tanpa tanda “[” dan “]”
Contoh : *!ig https://www.instagram.com/p/CINLAmflbja/?igshid=1afa0z5aneijb*

*[linkFb]* Diisi dengan link Facebook yang valid tanpa tanda “[” dan “]”
Contoh : *!fb https://m.facebook.com/story.php?story_fbid=359506321791079&id=100031951422123*

*[daerah]* Diisi dengan daerah yang valid, tanpa tanda “[” dan “]”
Contoh : *!jadwalShalat Sumatra Selatan*

*[channel]* Diisi dengan channel televisi yang valid, tanpa tanda “[” dan “]”
Contoh : *!jadwalTv Indosiar*

*[tempat]* Diisi dengan tempat/lokasi yang valid, tanpa tanda “[” dan “]“
Contoh : *!cuaca tangerang*

*[kode bhs]* Diisi dengan kode bahasa, contoh *id*, *en*, dll. Dan *[teks]* Diisi dengan teks yang ingin di jadikan voice, Masih sama seperti di atas tanpa tanda “[” dan “]”
Contoh : *!tts id Test*
Note : Max 250 huruf

*[@username]* Diisi dengan username Instagram yang valid, tanpa tanda “[” dan “]”
Contoh : *!igStalk @duar_amjay*

*[|teks|author|theme]* Diisi dengan teks, author, dan theme, tanpa tanda “[” dan “]”
Contoh : *!quotemaker |Contoh Doang|Anwa Dev|Shark*

*[linkGroup]* Diisi dengan link group whatsapp yang valid, tanpa tanda “[” dan “]”.
Contoh : *!join https://chat.whatsapp.com/HJ03OkzMd89Leepv2G21gL*

*[optional]* Diisi dengan teks|title lirik lagu, tanpa tanda “[” dan “]”.
Contoh : *!lirik aku bukan boneka*`
}
exports.readme = readme()
function info() {
    return `Bot ini di buat dengan bahasa pemrograman Node.js / JavaScript
Source kode bot : https://github.com/AnwaDeveloper
Owner Bot : wa.me/082281917822
Group Bot : https://chat.whatsapp.com/HJ03OkzMd89Leepv2G21gL
`
}
exports.info = info()
function snk() {
    return `Syarat dan Ketentuan Bot *ANWA BOT*
1. Teks dan nama pengguna WhatsApp anda akan kami simpan di dalam server selama bot aktif
2. Data anda akan di hapus ketika bot Offline
3. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim
4. Kami tidak akan pernah meminta anda untuk memberikan informasi pribadi
5. Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot
6. Apapun yang anda perintah pada bot ini, KAMI TIDAK AKAN BERTANGGUNG JAWAB!

Thanks !`
}
exports.snk = snk()
function donate() {
    return `Ya halo om.. Mau donate?
    
Kalo mau donate langsung ae ke :
OVO/PULSA/GOPAY/DANA : 082281917822
SAWERIA : https://saweria.co/AnwaDeveloper
TRAKTEER : https://trakteer.id/anwadev

Thanks !`
}
exports.donate = donate()
function listChannel() {
    return `Daftar channel: 
1. ANTV
2. GTV
3. Indosiar
4. iNewsTV
5. KompasTV
6. MNCTV
7. METROTV
8. NETTV
9. RCTI
10. SCTV
11. RTV
12. Trans7
13. TransTV`
}
exports.listChannel = listChannel()
