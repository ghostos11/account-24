const { Client } = require('discord.js-selfbot-v13');
const client = new Client(); 
const express = require("express")
const app = express();
var listener = app.listen(process.env.PORT || 2000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
app.listen(() => console.log("I'm Ready To Work..! 24H"));
app.get('/', (req, res) => {
  res.send(`
  <body>
  <center><h1>Bot 24H ON!</h1></center
  </body>`)
});
client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);

})
//ثبات فويس 24 ساعه v13 بدون اي مشاكل
const { joinVoiceChannel } = require('@discordjs/voice');
client.on('ready', () => {

    setInterval( async () => {
    client.channels.fetch(process.env.channel) 
     .then((channel) => { 
      const VoiceConnection = joinVoiceChannel({
       channelId: channel.id, 
       guildId: process.env.guild, 
       selfMute: false,
       selfDeaf: false,
       adapterCreator: channel.guild.voiceAdapterCreator 
       });
    }).catch((error) => { return; });
    }, 1000)
}); 

var badword = ["zbi", "t7wa" , "zaml" ]; // Bad Words 
client.on("message", message => {
if (message.content.includes(badword)) {
return message.reply(`**stghfirolah ! 🙄 **`);
const vera = client.channels.cache.get(""); // Channel ID
let embed = new Discord.MessageEmbed()

  
client.login(process.env.token);
