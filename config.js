const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : falMSG 
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/N2rnRgVy/5954.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "*ʜᴀꜱɪᴛʜᴀ ᴍᴅ v.1.0.0 ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*
*ᴄʀᴇᴀᴛᴇᴅ ʙʏ • HASITHA*
*ᴏᴡɴᴇʀ ɴᴜᴍ 94705846788*
*ᴄʜᴀɴɴᴇʟ* Follow the New Whatsapp Bot HASITHA MD V1 channel on WhatsApp: https://whatsapp.com/channel/0029Vb4swJI59PwP8hWC5P02",    
};
