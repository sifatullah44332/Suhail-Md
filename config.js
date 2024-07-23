const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923195898417";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_59_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA4MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTc0LFxuICAgICAgICA5NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODgsXG4gICAgICAgIDc5LFxuICAgICAgICA2MixcbiAgICAgICAgNzEsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTU5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTE5LFxuICAgICAgICA0NixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDc5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1MixcbiAgICAgICAgMTkwLFxuICAgICAgICA5OSxcbiAgICAgICAgNjksXG4gICAgICAgIDMzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1MixcbiAgICAgICAgODIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5NixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjksXG4gICAgICAgIDIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDgwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTU1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTkxLFxuICAgICAgICA2LFxuICAgICAgICA0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA1NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODAsXG4gICAgICAgIDk3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTksXG4gICAgICAgIDMzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDY5LFxuICAgICAgICA4OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQxLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OSxcbiAgICAgICAgMTY5LFxuICAgICAgICA3NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDM2LFxuICAgICAgICAyNSxcbiAgICAgICAgMjksXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE2NixcbiAgICAgICAgNjUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDYzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTA2LFxuICAgICAgICA0NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDk4LFxuICAgICAgICAxNixcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDY4LFxuICAgICAgICA4MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDk3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTI4LFxuICAgICAgICA3MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTc0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzNixcbiAgICAgICAgMzcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTM1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2LFxuICAgICAgICA5OSxcbiAgICAgICAgMjE1LFxuICAgICAgICA1OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDY1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJrZHNwL1Z1Mi92dll3UTlZNldPVUY0SFdpejZPQmhzalNROWRCRnBHZmlnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzE5NTg5ODQxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNTg2MTg1QjdEOEMzNDZENzhCM0FCQ0YxNjc0OENDOEJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNzIxNTgzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMTk1ODk4NDE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1RTI0ODY4RjBEMjJFOTJDNzZEQTg3MjBBRTkwNjUyRVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE3MjE1ODNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMW1DNGVFZnhUeDZFSnZnY1ZVbllnUVwiLFxuICBcInBob25lSWRcIjogXCIwZDdlYzI5Ny1mMGY5LTQ1MjktOTkyZi1jMTMzYzc2NGU4N2ZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUwLFxuICAgICAgMTU4LFxuICAgICAgMTYyLFxuICAgICAgMTg2LFxuICAgICAgNzMsXG4gICAgICAyNDQsXG4gICAgICAxMzMsXG4gICAgICA5OSxcbiAgICAgIDE0MixcbiAgICAgIDIzNixcbiAgICAgIDI0NixcbiAgICAgIDE2NixcbiAgICAgIDI0NCxcbiAgICAgIDE2OSxcbiAgICAgIDc5LFxuICAgICAgODAsXG4gICAgICA4NyxcbiAgICAgIDU4LFxuICAgICAgMTYzLFxuICAgICAgMjA2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMixcbiAgICAgIDYwLFxuICAgICAgMjQ2LFxuICAgICAgMSxcbiAgICAgIDIzNixcbiAgICAgIDEyNyxcbiAgICAgIDE4OCxcbiAgICAgIDkwLFxuICAgICAgMjEwLFxuICAgICAgNzEsXG4gICAgICA3MixcbiAgICAgIDc4LFxuICAgICAgMTYwLFxuICAgICAgOTcsXG4gICAgICAyMDEsXG4gICAgICAxODMsXG4gICAgICA3MixcbiAgICAgIDI1MyxcbiAgICAgIDIxNixcbiAgICAgIDIzMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxRE1UTFdNS1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTk1ODk4NDE3OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJCb3R0IEtpbmdnXCIsXG4gICAgXCJsaWRcIjogXCIyNDI3NTcwODgyMTY4MDo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1B1VXdLb0ZFT3JGL2JRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSGFvOG1TcHZwdkUzUzd5SGZzNEkwQmI5WkcwaEt4UEpMc05sTy9PZVMyMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJkYWJYZjk2eEpGNVBhdkxWVVFLVFBKWmc2b01rUUFaOGc0a2E2UkE1TlcwQ0hjS1kxbk5YOGJLb1VienN1TWJBNFBZNjg4aHlJSzVtc01rOXdnOE9EQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ6Y09NemhZQkdwUm9BSzlpa3pDblJFdXRYVVFrMmRUNzVYY0lkTTBYL3BKWG9Xa3ZZVkRtVDBxRjhQbCtrSXRneVFWS294YS9wcHFzWnJQakI5d1lndz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxOTU4OTg0MTc6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE3MjE1ODEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLL3hcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUsveC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
