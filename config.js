const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_17_11_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjIsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTksXG4gICAgICAgIDk3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTksXG4gICAgICAgIDIzMCxcbiAgICAgICAgOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyLFxuICAgICAgICA4NixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTMzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTAxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIsXG4gICAgICAgIDczLFxuICAgICAgICA0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTExLFxuICAgICAgICA3NixcbiAgICAgICAgMTUwLFxuICAgICAgICAxODgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjIyLFxuICAgICAgICA1NCxcbiAgICAgICAgMjEyLFxuICAgICAgICA2OSxcbiAgICAgICAgODIsXG4gICAgICAgIDYzLFxuICAgICAgICAxNixcbiAgICAgICAgNjQsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgNzcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDMzLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjE0LFxuICAgICAgICA4NSxcbiAgICAgICAgMjA1LFxuICAgICAgICA5MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDg1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxLFxuICAgICAgICA1MCxcbiAgICAgICAgMjEzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTI3LFxuICAgICAgICA4MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDU0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxLFxuICAgICAgICAxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDUxLFxuICAgICAgICA5OSxcbiAgICAgICAgMzksXG4gICAgICAgIDc2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDkyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTIzLFxuICAgICAgICA4NixcbiAgICAgICAgMTM5LFxuICAgICAgICAxODQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTYzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjI0LFxuICAgICAgICAzNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDc4LFxuICAgICAgICA1NyxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTEsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDk2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTAwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTAzLFxuICAgICAgICA0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTA1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTksXG4gICAgICAgIDM1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDQ5LFxuICAgICAgICA4OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjUsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDYxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjA2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjAwLFxuICAgICAgICA2NyxcbiAgICAgICAgMjU0LFxuICAgICAgICA1MixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTI0LFxuICAgICAgICA0LFxuICAgICAgICA2MCxcbiAgICAgICAgODYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTczLFxuICAgICAgICA4LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJRVmI3blZmUlNWaitvaGN5Umw4ZGxFR3dHMWlscUprLzMxZVloczNWN1BnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDc0MDgxODc5OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMkZBMkJGRUI3N0FGN0JGNkIxMkE1NTA1OURFREIxNURcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMwNTU3MDI0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzQwODE4Nzk4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5RDU3OTEwMTIyQTA3RUFDNzJGQ0E5QjIzMUQ4QUQ3Q1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzA1NTcwMjRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiREI1SjBTU0lTN3VDWTY3dXVOMXFBd1wiLFxuICBcInBob25lSWRcIjogXCJiZmE3MjQ4My03MjhhLTQxYmItOTliMi1jYTk0NDc2ZGZhZjNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk5LFxuICAgICAgMTc2LFxuICAgICAgMTQ4LFxuICAgICAgMTcyLFxuICAgICAgMjE2LFxuICAgICAgNTEsXG4gICAgICAxODgsXG4gICAgICAyMjEsXG4gICAgICAxNzcsXG4gICAgICAyNTUsXG4gICAgICAyMDMsXG4gICAgICAyMjYsXG4gICAgICA4NCxcbiAgICAgIDE1MyxcbiAgICAgIDE2NCxcbiAgICAgIDc0LFxuICAgICAgMjE4LFxuICAgICAgOTQsXG4gICAgICA2NSxcbiAgICAgIDIyMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNyxcbiAgICAgIDE4MSxcbiAgICAgIDE2NixcbiAgICAgIDE1NCxcbiAgICAgIDEyNyxcbiAgICAgIDEsXG4gICAgICAxOTMsXG4gICAgICA5OSxcbiAgICAgIDEzMyxcbiAgICAgIDE3MCxcbiAgICAgIDksXG4gICAgICAyMzEsXG4gICAgICAxNzAsXG4gICAgICAzMyxcbiAgICAgIDExNCxcbiAgICAgIDE1LFxuICAgICAgNjMsXG4gICAgICAzMixcbiAgICAgIDM2LFxuICAgICAgMTIxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlRBSktRVk01XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NDA4MTg3OTg6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTA2NDU1NjgwMTg0NDYwOjJAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiJFdhd2VydSDwn5KA8J+SgFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xmOG5iMEhFTmpvbUxrR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZ3M2VUxRQzdNZXlGWEhiRTgrUTFyck0rblU4RlJwME0zYzJ4QUtDbVkyOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJLRDUxVjgvNGdhb0FYendETHhKZHkySnNIT1czQ1AzUDhid0xOSzFTUTJkOTIzaEFkZFNUUlJTZmhoSUJpOWFzQThpdDZRbFRrWHlHd3JPeFFiZ3hEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJMdmJWSHBZUU1oSU85NzJ4QlQrRTNWWWM1OS93U3psVUthVi85ZmpTdXJKRm5HbC82TjlrVHNueTR3cm82Q1dTMXVzWHdMUW5nZEY0eWp6R1pmdmxBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3NDA4MTg3OTg6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDU1NzAyMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNjN1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ2M3Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiOXVCMmI5RnFKcXdkc2F1Y0wzS3ZQbGp1dFpEbmcreDNBWmJIU2d2cml0dz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDA3NDY1NTI3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzA1NTMyNzU0NzNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
