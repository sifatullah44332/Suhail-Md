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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_15_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDU2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjE0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAzOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAzNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDU1LFxuICAgICAgICAyNixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTM2LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjM5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTU5LFxuICAgICAgICA3OSxcbiAgICAgICAgODUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTg4LFxuICAgICAgICA2MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDc3LFxuICAgICAgICA0OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA3NyxcbiAgICAgICAgOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDQwLFxuICAgICAgICA5MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzksXG4gICAgICAgIDIxNixcbiAgICAgICAgNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDMyLFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjIwLFxuICAgICAgICA5MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTgwLFxuICAgICAgICA0OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNzksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTU4LFxuICAgICAgICA3OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDAsXG4gICAgICAgIDM3LFxuICAgICAgICAxMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjM4LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0LFxuICAgICAgICA2MixcbiAgICAgICAgOTMsXG4gICAgICAgIDczLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTc5LFxuICAgICAgICA1MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcxLFxuICAgICAgICA1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTMwLFxuICAgICAgICA5NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDU3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxODUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4LFxuICAgICAgICAyNixcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDM0LFxuICAgICAgICAxODMsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDcyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxODAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTI3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzksXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjUxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkswWk9qajN6Nk9RL08zZ1puRGFNN1NwQmgvankyeFJmUzlPYU1GQS9QNlk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMTk1ODk4NDE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFNDNBNjYyMjMxQkE5RDU0MUMwMTI3RDEyQ0I2MEE3OFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE3MjI1MjJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMxOTU4OTg0MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkI2NEYyMTJCODYwOTgwRUUxQUFGMDk1Q0U0MzNCRTg0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTcyMjUyMlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJocGFKTjJRb1QydWoyNms5cWM3Ry1BXCIsXG4gIFwicGhvbmVJZFwiOiBcImM4N2ZhYTMzLWFmNzMtNDJmYS1iOGM2LTRmNmVhOTNmNThlY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NixcbiAgICAgIDcyLFxuICAgICAgMTY5LFxuICAgICAgMTk4LFxuICAgICAgMTg2LFxuICAgICAgNzAsXG4gICAgICA5LFxuICAgICAgMTk0LFxuICAgICAgMjQ3LFxuICAgICAgMTM4LFxuICAgICAgMjA0LFxuICAgICAgMjQ5LFxuICAgICAgMTIyLFxuICAgICAgMixcbiAgICAgIDc5LFxuICAgICAgOTEsXG4gICAgICAzMixcbiAgICAgIDcyLFxuICAgICAgNzQsXG4gICAgICAyMDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEzLFxuICAgICAgNTUsXG4gICAgICAxMCxcbiAgICAgIDIxMyxcbiAgICAgIDMxLFxuICAgICAgODQsXG4gICAgICAyNTIsXG4gICAgICA1NixcbiAgICAgIDksXG4gICAgICA2NyxcbiAgICAgIDUxLFxuICAgICAgMTYzLFxuICAgICAgODEsXG4gICAgICAyMDgsXG4gICAgICAxMyxcbiAgICAgIDEzMSxcbiAgICAgIDY5LFxuICAgICAgMTk2LFxuICAgICAgMzIsXG4gICAgICAxNDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQTJMMlY3SDRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzE5NTg5ODQxNzo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQm90dCBLaW5nZ1wiLFxuICAgIFwibGlkXCI6IFwiMjQyNzU3MDg4MjE2ODA6NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQdVV3S29GRUpYTi9iUUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkhhbzhtU3B2cHZFM1M3eUhmczRJMEJiOVpHMGhLeFBKTHNObE8vT2VTMjA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYWM2VmFobU1MdEpvY2orZnJyTldBOUo1dUt2dElQRENVMlA5YjJpV1V5dlJWSkR5ekYyYUx5VG1NOEhFa1NRSUVKbmZKMUlZWWFkYklIenVRNnVYRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiM2c5QVFQYWpvMXYyMVJjYVVqSjY1cWhrTGJqdy9sS3Z1OWQzK0xCa2xJTlNhOEIxSC9wWkRQZWpnMmhsZkRnY05VSEFoLzIvWURKVk1lbUw5TTlianc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTk1ODk4NDE3OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNzIyNTIxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSy92XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLL3YuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
