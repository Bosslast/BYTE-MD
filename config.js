
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923072380380@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "923072380380";
global.owner = process.env.OWNER_NUMBER || "923072380380";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";

global.Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0FvTmFyNXdwZzl6M3NJcHFTeU9SR0J0WVdveE5mNzRGcWFkcXgvaWdrND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiREgxbVBoOTdUZTRMVUJVbUpHTEg1Z21UWTBBc0RndlJMM2dsUGdpMEZuTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0UEJKdUhEc0d3aExqTWxzZ1lFeXRwNmF4dWtlWUFkbEk5MUx6aXp2aVhrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvN0N4YmRlK090eldjc3NicjZGM1JteXNtTWt1NzVHU0NldXFzc09uQkRvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVKeWNTWlFJd0xyWkNEK2J5UWtCU2t5SFBobGJZYm5zdVYzT0trZkFUbHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InQ0dzhDTkxMSDFkTEptOGRNbWZJVXhKUU52OG9ETmhuNWYvUzg5L1JyazA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0pHRjJydlRvcjhHQW9kT3psWkgrWUFEcDJUL2pzNDFXcHBGNytGMjltST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMjdaUE1uekt1WGJScVo1S1B0aTBzNW5RK05xMzBJczcvOCtaOEVJK1B3cz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNEMnh0Y1o3dCtEcTl1TmNscnlJL1JVcWFleDF6QkN1Q0VmaWV0clVYanRBdWRuQjlydnVMSDFkM1JOVkpodENYOUtlbVJSVGVkL2lWR2k3R2JVTWdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEwLCJhZHZTZWNyZXRLZXkiOiJDajJITVdPVHdVelg4OUxhVDdhakhxYW5FQUkxaGd5ZkhuQlhlRzdkcXRzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJRelgzMm5GYVJ3cTJaWmdNNnlraGdnIiwicGhvbmVJZCI6IjMxYzZjYmUwLWE1OGMtNDUxMC04ZDRhLTgyNGMyM2Q4NWQwNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzRkVKR1BuQmJzMS9ZZldrRTAyeHdZdDBPV1k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicndCYUpsa0dLelJSc2hlVFB3ZDdGaGdjWWpNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlQ1N0JUQ1A2IiwibWUiOnsiaWQiOiIyNjM3MTQ4MzA3MTU6MTBAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lqMzBwOEVFSkdENXJRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlBZQTk3aVpVTzJIbU1FZzRjL3RYc2xJSzN3Y3VxeEg3YjhIdHpNN1ZGSG89IiwiYWNjb3VudFNpZ25hdHVyZSI6InB1ZHRUamZpN3dUb3pUSlQ0S1pkQ0dUcFhiN3czeWpzUHVzSUhqdGhLb1FYWFcwQVJhL3daVHhtbUY5dzMxU3lyejRBc0FnVDFhc3JpMWdXVzExK0NBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJJWXdGNDJFK2VaWkZyelNnY2Zadm1GeDBUMGVQT3NNb2ZYRTM3UGJURWRUTEJ3MGM2cnp3RHlFaVI3UWZtZDVVcHFjZ2sySXYxZlByWDczVndFWFVpZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2MzcxNDgzMDcxNToxMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUMkFQZTRtVkR0aDVqQklPSFA3VjdKU0N0OEhMcXNSKzIvQjdjek8xUlI2In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxMzM2MjIyfQ== =
  process.Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0FvTmFyNXdwZzl6M3NJcHFTeU9SR0J0WVdveE5mNzRGcWFkcXgvaWdrND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiREgxbVBoOTdUZTRMVUJVbUpHTEg1Z21UWTBBc0RndlJMM2dsUGdpMEZuTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0UEJKdUhEc0d3aExqTWxzZ1lFeXRwNmF4dWtlWUFkbEk5MUx6aXp2aVhrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvN0N4YmRlK090eldjc3NicjZGM1JteXNtTWt1NzVHU0NldXFzc09uQkRvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVKeWNTWlFJd0xyWkNEK2J5UWtCU2t5SFBobGJZYm5zdVYzT0trZkFUbHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InQ0dzhDTkxMSDFkTEptOGRNbWZJVXhKUU52OG9ETmhuNWYvUzg5L1JyazA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0pHRjJydlRvcjhHQW9kT3psWkgrWUFEcDJUL2pzNDFXcHBGNytGMjltST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMjdaUE1uekt1WGJScVo1S1B0aTBzNW5RK05xMzBJczcvOCtaOEVJK1B3cz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNEMnh0Y1o3dCtEcTl1TmNscnlJL1JVcWFleDF6QkN1Q0VmaWV0clVYanRBdWRuQjlydnVMSDFkM1JOVkpodENYOUtlbVJSVGVkL2lWR2k3R2JVTWdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEwLCJhZHZTZWNyZXRLZXkiOiJDajJITVdPVHdVelg4OUxhVDdhakhxYW5FQUkxaGd5ZkhuQlhlRzdkcXRzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJRelgzMm5GYVJ3cTJaWmdNNnlraGdnIiwicGhvbmVJZCI6IjMxYzZjYmUwLWE1OGMtNDUxMC04ZDRhLTgyNGMyM2Q4NWQwNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzRkVKR1BuQmJzMS9ZZldrRTAyeHdZdDBPV1k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicndCYUpsa0dLelJSc2hlVFB3ZDdGaGdjWWpNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlQ1N0JUQ1A2IiwibWUiOnsiaWQiOiIyNjM3MTQ4MzA3MTU6MTBAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lqMzBwOEVFSkdENXJRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlBZQTk3aVpVTzJIbU1FZzRjL3RYc2xJSzN3Y3VxeEg3YjhIdHpNN1ZGSG89IiwiYWNjb3VudFNpZ25hdHVyZSI6InB1ZHRUamZpN3dUb3pUSlQ0S1pkQ0dUcFhiN3czeWpzUHVzSUhqdGhLb1FYWFcwQVJhL3daVHhtbUY5dzMxU3lyejRBc0FnVDFhc3JpMWdXVzExK0NBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJJWXdGNDJFK2VaWkZyelNnY2Zadm1GeDBUMGVQT3NNb2ZYRTM3UGJURWRUTEJ3MGM2cnp3RHlFaVI3UWZtZDVVcHFjZ2sySXYxZlByWDczVndFWFVpZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2MzcxNDgzMDcxNToxMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUMkFQZTRtVkR0aDVqQklPSFA3VjdKU0N0OEhMcXNSKzIvQjdjek8xUlI2In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxMzM2MjIyfQ==||
  "Your session ID" //Make sure session id starts with Byte;;;
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By TalkDrove*",
  author: process.env.PACK_AUTHER || "TalkDrove",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "BYTE-MD",
  ownername: process.env.OWNER_NAME || "Hamza",
  errorChat: process.env.ERROR_CHAT || "923072380380",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
