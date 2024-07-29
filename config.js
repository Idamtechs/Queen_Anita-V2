//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Lagos/Nigeria";
global.github = process.env.GITHUB || "https://github.com/Idamtechs/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://wa.me/qr/QHOKNWIMJUH6K1";
global.website = process.env.GURL || "https://wa.me/qr/QHOKNWIMJUH6K1";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.pinimg.com/originals/d9/41/8b/d9418bc48ce0520e7cc96de465fe8fff.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2348168772328";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.pinimg.com/originals/02/07/94/020794d07925b51b3f219f2639e56214.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0g0VVlOQld3YlhVOS9qUHRtOG5qaFBaMWZIUWh1Ty8xdCs1NmhQa0huWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUVlkS2RkaW9vaFYyMktjaXJiVU5UN09qb0x5NXRueUptMEhIUWtLSHVGVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2SksrVmYrdGJ0SEc2R1VrQnh3akpTR0paR2JWazZydFpmRXZrZHpJR2tRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPU1phNG1BWDNzd1AvRTYvUzFzUHJlWTRicFRsalRjVnlyVU83bWZDYVd3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZPYklESlVOc0gyZi9PQVUwakNkbnk2THpMK1Z3VGlQR1ZLVE5mNWxUbnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhOa0dqVVpyZElJajRBVVNMMlBUNmhIZXBHL3ZQaVdvUW5YMkpKTHBVbHc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid09iVk1ZLytDRzF3RVJnSkdDbGE2c010QUFDNnM0dGJLVlVXWURLVGNsOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZDhFMXViZUhvTTdmL29QUkQxalUxTEZvMmdJQjNvbktXUzI5VGFZb09tZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJNa01NbVhyNm5VNjVWb1JkU25qYkN1NDZtUXFtdnV1dDFYSmV1aFNockw2UjFWaUxNbTcxaUVQL25MNzlndCtELzIyMkV2akF2cEtrelozbS9FM0N3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM1LCJhZHZTZWNyZXRLZXkiOiJSVndqQVFMajd1bEx2ZWUxbnNPQXQwL053R3g2V0VIR1hmRGRxSXQ1YmFJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgxNjg3NzIzMjhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNDQ0NThDMDcwM0NGRTI1MkVCMTU5RDM4NzUwMjJEODgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjIxNjcwNH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiX0FpUEU4czJTY3FBdjJjSHJvZXBldyIsInBob25lSWQiOiI1YmY1YzE0My1lMDQzLTQzODItOTcyOC1kMTcxNzI4MGUxOTQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOUhyNExlMlBOV29Nb3Jqbkk3R3hWUi9kekQwPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkU0QU9EVWpmTWJDb3BnRWlsVHM3YzBNVThPdz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI3Q1hWUDhTNiIsIm1lIjp7ImlkIjoiMjM0ODE2ODc3MjMyODo5OEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSm1VN3E4SEVPN2htN1VHR0FjZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoibGpha2FrODhUNkpNUTFDa2lwUitOOG5WditqWlVCdC8rMkJUWDJaUEloMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoidjVtdkQ2QUs1NmVnTjhJRUE5V0RacUJHWC9LTU1BQm5PT0pCdURNUHdobThpSUVrUzRBKzRxK2JCTmNtbjl4NWZ2cDdaZXBSUm9hK0d2UmFPSUxyQXc9PSIsImRldmljZVNpZ25hdHVyZSI6Img5VlBVdmZ3NWlPSDhjSTlydkRXUHNzRy8vL0s0ekROaU5hZzZTdDhFRFNZZnFxaHpFdW44VDNyRUxQTkxQaDk5WVhtY0p3ZmE2RDhmRWN5NmxndUNRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODE2ODc3MjMyODo5OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaWTJwR3BQUEUraVRFTlFwSXFVZmpmSjFiL28yVkFiZi90Z1UxOW1UeUlkIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyMjE2Njk5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUtlZiJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "Toluwalase",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
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
