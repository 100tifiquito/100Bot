

////constante/////
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
app.listen(3000, () => console.log(`FUNCIONAMIENTO CORRECTO`));

//----------------------------- SISTEMA 24/7 -----------------------------//

const Discord = require("discord.js");
const client = new Discord.Client();

/////precencia//////

function presence(){
  client.user.setPresence({
      status:"dnd",
      activity: {
        name: "videos de 100tifiquito",
        type: "WATCHING"
      }
  })
}
client.on("ready", () => {
   console.log("LAS FRUTAS SON SALUDABLES!");
   presence();
});


//---------------------------- CODIGO DEL BOT ----------------------------//







const mySecret = process.env['TOKEN']
client.login(mySecret);






//variables//

var prefix = "100!"


////////////Bot animales /////////////


client.on("message", msg => {
  
  if (msg.content.startsWith(prefix + "gato") ) {

   msg.channel.send(":cat:") 

  }
});





client.on("message", msg => {
  
  if (msg.content.startsWith(prefix + "perro")) {

   msg.channel.send(":dog:")

  }
});


client.on("message", msg => {
  
  if (msg.content.startsWith(prefix + "raton")) {

   msg.channel.send(":mouse:")

  }
});


client.on("message", msg => {
  
  if (msg.content.startsWith(prefix + "hamster")) {

   msg.channel.send(":hamster:")

  }
});

client.on("message", msg => {
  
  if (msg.content.startsWith(prefix + "conejo")) {

   msg.channel.send(":rabbit:")

  }
});

client.on("message", msg => {
  
  if (msg.content.startsWith(prefix + "zorro")) {

   msg.channel.send(":fox:")

  }
});

client.on("message", msg => {
  
  if (msg.content.startsWith(prefix + "oso")) {

   msg.channel.send(":bear:")

  }
});

client.on("message", msg => {
  
  if (msg.content.startsWith(prefix + "panda")) {

   msg.channel.send(":panda_face:")

  }
});

client.on("message", msg => {
  
  if (msg.content.startsWith(prefix + "oso polar")) {

   msg.channel.send(":polar_bear:")

  }
});

client.on("message", msg => {
  
  if (msg.content.startsWith(prefix + "koala")) {

   msg.channel.send(":koala:")

  }
});


client.on("message", msg => {
  
  if (msg.content.startsWith(prefix + "tigre")) {

   msg.channel.send(":tiger:")

  }
});



client.on("message", msg => {
  
  if (msg.content.startsWith(prefix + "leon")) {

   msg.channel.send(":lion:")

  }
});

client.on("message", msg => {
  
  if (msg.content.startsWith(prefix + "chancho")) {

   msg.channel.send(":pig:")

  }
});

client.on("message", msg => {
  
  if (msg.content.startsWith(prefix + "cerdo")) {

   msg.channel.send(":pig:")

  }
});


client.on("message", msg => {
  
  if (msg.content.startsWith(prefix + "rana")) {

   msg.channel.send(":frog:")

  }
});


client.on("message", msg => {
  
  if (msg.content.startsWith(prefix + "sapo")) {

   msg.channel.send(":frog:")

  }
});



client.on("message", msg => {
  
  if (msg.content.startsWith(prefix + "mono")) {

   msg.channel.send(":monkey_face:")

  }
});


///cosas de 100////
client.on("message", msg => {
  
  if (msg.content.startsWith(prefix + "subs")) {

   msg.channel.send("***Los subs de 100 son:***\n\ 130")

  }
});


client.on("message", msg => {
  
  if (msg.content.startsWith(prefix + "yt")) {

   msg.channel.send("**el canal de mi creador es:** https://www.youtube.com/channel/UCTndzRPjQOJmVYLa9QiPOYQ ")

  }
});

client.on("message", msg => {
  
  if (msg.content.startsWith(prefix + "discord")) {

   msg.channel.send("**El server de discord de mi creador es:** https://discord.gg/22hanv2A3G")

  }
});

//REDES DE 100TIFIQUITO//

client.on("message", msg => {
  
  if (msg.content.startsWith(prefix + "twitter")) {

   msg.channel.send("**El *Twitter* de mi creador es:** \n\https://twitter.com/100tifiquitoYT")

  }
});



client.on("message", msg => {
  
  if (msg.content.startsWith(prefix + "twitch")) {

   msg.channel.send("**El *Twitch* de mi creador es:** \n\https://www.twitch.tv/100tifiquito")

  }
});

client.on("message", msg => {
  
  if (msg.content.startsWith(prefix + "tiktok")) {

   msg.channel.send("**El *Tik Tok* de mi creador es:** \n\https://www.tiktok.com/@100tifiquito")

  }
});
////////Embed//////

client.on("message", message =>{
  if(message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
//comandos
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase(); 
 
  ///embeds/////
if(command === 'embed'){
 const embed = new Discord.MessageEmbed()
    .setTitle('Información del servidor')
    .setColor(0000)
    .setDescription('**Estamos muy bien pero estaremos mejor que esto**')
    .addField('Nombre del servidor', message.guild.name, true)
    .addField('Integrantes', message.guild.memberCount, true)
    .setAuthor(client.user.username, client.user.avatarURL())
    .setThumbnail('https://media.giphy.com/media/26gslMAdctNhu6YnK/giphy.gif')
    .setImage("https://media.giphy.com/media/bcKmIWkUMCjVm/giphy.gif")
    .setFooter('Solicitado por: '+message.member.displayName, message.author.avatarURL())
    .setTimestamp()
    .setURL('https://www.youtube.com/channel/UCTndzRPjQOJmVYLa9QiPOYQ');
    //NOMBRE DEL BOT: client.user.username
    //AVALAR DE BOT: client.user.avatarURL()
    //NOMBRE DE USUARIO: message.member.displayName
    //AVATAR DE USUARIO: message.author.avatarURL()
  message.channel.send(embed);
 
 
}
});

////help////
client.on("message", msg => {
  
  if (msg.content.startsWith(prefix + "musica")) {

   msg.channel.send("**100!p** (y el nombre de la musica)")

  }
});

client.on("message", msg => {
  
  if (msg.content.startsWith(prefix + "animales")) {

   msg.channel.send("**animales:\n\ perro\n\ gato\n\ raton\n\ hamster\n\ conejo\n\ zorro\n\ oso\n\ panda\n\ oso polar\n\ koala\n\ tigre\n\ leon\n\ vaca\n\ chancho\n\ sapo \n\ mono**")

  }
});




client.on("message", msg => {
  
  if (msg.content.startsWith(prefix + "help")) {

    msg.channel.send("**Comandos: \n\ animales\n\ 100 \n\ embed\n\ musica **")

  }
});

          
client.on("message", msg => {
  
  if (msg.content.startsWith(prefix + "rickroll")) {

    msg.channel.send("**Chale me Rickrollearon https://youtu.be/gkmLv3AiL2c**")

  }
});