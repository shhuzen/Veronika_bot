import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'
import {  en, es, id, ar, pt, de, it  } from './lib/idiomas/total-idiomas.js'

global.owner = [
  ['+79170488669', 'Вероника', true],
  [''],
  ['']
]

global.official = [ 
['+79170488669', 'Вероника',  1], 
] 

global.mods = [] 
global.prems = []

global.gataJadibts = true
global.isBaileysFail = true
global.lenguajeGB = es 

global.botNumberCode = ""
global.confirmCode = "" 
global.textbot = '☆Галатея☆'
global.openai_key = 'sk-0'

// ES ➜ Consigue tu ID de organizacion en: https://platform.openai.com/account/org-settings
global.openai_org_id = 'org-3'

global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = 'GataDiosV3'
global.dev = '© ⍴᥆ᥕᥱrᥱძ ᑲᥡ 𝗍ᥱᥲm ᥴ᥆ძᥱ 𝗍і𝗍ᥲᥒs'
global.itsrose = ['4b146102c4d500809da9d1ff']
global.baileys = '@whiskeysockets/baileys'
global.apis = 'https://delirius-apiofc.vercel.app'

global.APIs = { 
lolhuman: { url: 'https://api.lolhuman.xyz/api/', key: lolkeysapi },
neoxr: { url: 'https://api.neoxr.eu/api/', key: null },
skizo: { url: 'https://skizo.tech/api/', key: 'GataDios' },
aemt: { url: 'https://widipe.com/', key: null },
alyachan: { url: 'https://api.alyachan.dev/api/', key: 'syah11' }, //muzan23 DitzOfc
zahwazein: { url: 'https://api.zahwazein.xyz', key: null },
akuari: { url: 'https://apimu.my.id', key: null },
apimu: { url: 'https://api.xteam.xyz', key: null },
fgmods: { url: 'https://api-fgmods.ddns.net', key: null },
botcahx: { url: 'https://api.botcahx.biz.id', key: null },
ibeng: { url: 'https://api.ibeng.tech/docs', key: null },
itsrose: { url: 'https://api.itsrose.site', key: null },
popcat: { url: 'https://api.popcat.xyz', key: null },
xcoders: { url: 'https://api-xcoders.site', key: 'Frieren' }
}

global.APIKeys = { 
  'https://api.xteam.xyz': `${keysxteam}`,
  'https://api.lolhuman.xyz': `${lolkeysapi}`,
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://api.zahwazein.xyz': `${keysxxx}`,
  'https://api-fgmods.ddns.net': 'fg-dylux',
  'https://api.botcahx.biz.id': 'Admin',
  'https://api.ibeng.tech/docs': 'tamvan',
  'https://api.itsrose.site': 'Rs-Zeltoria',
  'https://api-xcoders.site': 'Frieren'
}

global.canal = 'https://whatsapp.com'

global.ch = {
    ch1: '120363374486687514@newsletter',
    ch2: '20363371366801178@newsletter',
    ch3: '120363183614708156@newsletter',
    ch4: '120363377833048768@newsletter',
    ch5: '120363220939514640@newsletter',
    ch6: '120363368073378190@newsletter',
    ch7: '120363350099548761@newsletter',
  };
  
  global.rcanal = {
    contextInfo: {
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: global.ch.ch1, // Asegurarse de que usa un canal válido
        serverMessageId: 100,
        newsletterName: global.textbot,
      },
    },
  };
  
  global.menu = { 
    contextInfo: { 
      isForwarded: true, 
      forwardedNewsletterMessageInfo: { 
        newsletterJid: global.ch.ch1, 
        serverMessageId: 100, 
        newsletterName: global.textbot, 
      }, 
      externalAdReply: { 
        showAdAttribution: true, 
        title: global.textbot,
        body: '( ´͈ ᵕ `͈ )◞♡ Sɪᴍᴘʟᴇ ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ', 
        mediaUrl: null, 
        description: null, 
        previewType: "", 
        thumbnailUrl: "https://i.ibb.co/Y7mhFdf/file.jpg",
        sourceUrl: "https://dark-core-api.vercel.app/",
        mediaType: 1, 
        renderLargerThumbnail: true 
      }, 
    }, 
  };
  
global.fake = {
    contextInfo: {
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
       newsletterJid: global.ch.ch1, 
       serverMessageId: 100,
       newsletterName: global.textbot,
    },
  },
};
  
global.mods = [] 
global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment	

global.packname = 'Lyᥒ᥊ ᥴһᥲᥒᥒᥱᥣ 🌻'
global.author = ''
global.policyGB = ''
global.mail = ''
global.desc = ''
global.desc2 = ''
global.country = ''
global.vs = '𝗟𝗬𝗡𝗫 𝗔𝗜  (𝟭.𝟰.𝟬)'
global.vsJB = '5.0 (beta)'
global.gt = ''
global.wm = ' : '
global.igfg = ''
global.nomorown = owner[0][0]
global.htki = '*⭑•̩̩͙⊱•••• ☪*'
global.htka = '*☪ ••••̩̩͙⊰•⭑*'
global.htjava = '⫹⫺'
global.correct = '✅'
global.fault = '💔'
global.alert = '⚠️'
global.sending = '📋'
global.sent = '❇️'
global.notsent = '❗'
global.waitemot = '⌛'
global.waitemot2 = '⏳'
global.multiplier = 60 


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
unwatchFile(file)
console.log(chalk.bold.greenBright(lenguajeGB['smsConfigBot']().trim()))
import(`${file}?update=${Date.now()}`)
})
