const Discord = require("discord.js");
const client = new Discord.Client();


client.on("ready", () => {
  console.log(`INICIADO COMO BOT: ${client.user.tag}`);
});

