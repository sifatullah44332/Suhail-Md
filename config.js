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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "9203195898417";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_18_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjM1LFxuICAgICAgICA1NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2NixcbiAgICAgICAgODQsXG4gICAgICAgIDg4LFxuICAgICAgICA4NixcbiAgICAgICAgMjIwLFxuICAgICAgICA1OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTI4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDUsXG4gICAgICAgIDk2LFxuICAgICAgICA0MSxcbiAgICAgICAgMjksXG4gICAgICAgIDQwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODUsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTg4LFxuICAgICAgICA4MCxcbiAgICAgICAgMjQwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMixcbiAgICAgICAgNDcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjA4LFxuICAgICAgICA5MixcbiAgICAgICAgMTQ0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTgyLFxuICAgICAgICA3MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTkzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDAsXG4gICAgICAgIDUxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjA0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDgxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTE2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODgsXG4gICAgICAgIDg0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDY3LFxuICAgICAgICAxODgsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTksXG4gICAgICAgIDE1MixcbiAgICAgICAgMjksXG4gICAgICAgIDgxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNSxcbiAgICAgICAgODcsXG4gICAgICAgIDIzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTM0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOSxcbiAgICAgICAgNTksXG4gICAgICAgIDMzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNyxcbiAgICAgICAgMTY5LFxuICAgICAgICA3LFxuICAgICAgICA2MixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTU2LFxuICAgICAgICA5OCxcbiAgICAgICAgNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTksXG4gICAgICAgIDc4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDExLFxuICAgICAgICAxOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTgzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxODIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTAsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI2LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzLFxuICAgICAgICAxODUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjBiR00wZVRsM0d5VStRL0FOTTNwOVo0SndPT3doSWt5b2tWMHJGNW9mVWM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMTk1ODk4NDE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwNkZCQjU1MTBFODZEMjQwREEwN0YyQURDNDFFQTEyMlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE3MTkwOTJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMxOTU4OTg0MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjUyNUFDNjY5NjlDNUJBQjVGNkZFNkQzMDE1NjdFRTUzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTcxOTA5M1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzE5NTg5ODQxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMDM1MDAzMDg0MTQ3MTlGNUY4N0EwRjQ5QjYwRUVCNDVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNzE5MDk0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMTk1ODk4NDE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQUJGMjZBNDhCMzZENzZCOUVFMjUyMkI1RjEwMTE4RlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE3MTkwOTVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSmZWNVgyVExRODZic2M0OHZ0UUtrQVwiLFxuICBcInBob25lSWRcIjogXCI1OGZmMTcwYi03OGQ5LTQ2M2QtYTI1MC1iM2EzZjQ2OWM4NzZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkwLFxuICAgICAgMjIzLFxuICAgICAgMTI2LFxuICAgICAgMTIsXG4gICAgICAxNDUsXG4gICAgICAyNDYsXG4gICAgICA0NixcbiAgICAgIDE5OSxcbiAgICAgIDE2OCxcbiAgICAgIDI5LFxuICAgICAgMzMsXG4gICAgICA0MixcbiAgICAgIDYzLFxuICAgICAgMTQsXG4gICAgICAzNyxcbiAgICAgIDczLFxuICAgICAgMjQyLFxuICAgICAgMTQ1LFxuICAgICAgMjE4LFxuICAgICAgMjQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MixcbiAgICAgIDMyLFxuICAgICAgMixcbiAgICAgIDQ5LFxuICAgICAgMTMsXG4gICAgICAyMTIsXG4gICAgICAzOCxcbiAgICAgIDY2LFxuICAgICAgMTYsXG4gICAgICAyMzIsXG4gICAgICAyMTAsXG4gICAgICA2MSxcbiAgICAgIDEzNSxcbiAgICAgIDIwMixcbiAgICAgIDE0MixcbiAgICAgIDIwNyxcbiAgICAgIDQ0LFxuICAgICAgMTI2LFxuICAgICAgMjQzLFxuICAgICAgMjUwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlRZM1oyMVM1XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxOTU4OTg0MTc6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkJvdHQgS2luZ2dcIixcbiAgICBcImxpZFwiOiBcIjI0Mjc1NzA4ODIxNjgwOjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHFVd0tvRkVLK3kvYlFHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJIYW84bVNwdnB2RTNTN3lIZnM0STBCYjlaRzBoS3hQSkxzTmxPL09lUzIwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjVuODBpOURhRTZKRXRFWXg4TFpFbEJSUTN3bmpobFp0enQxWkhaZTRCaW5lNWVwbmhqdFFqakl0eHp0bXZBL1BmM2RNcjNCem1WUjRWWjlEaDZVdkJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk9yaU80d29lZzNYVnk0UGZjejhCQ09oTmhZTUNLZlhnZ2tXMEVSc01mQnI0Y0NEcU9Qcktla2VTUTZHUnErMlM2OVVYeHhkUFdIS2pJWFEvM2hLbEF3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzE5NTg5ODQxNzozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTcxOTA5MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUsvdVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSy91Lmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
