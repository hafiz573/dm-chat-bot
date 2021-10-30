const Discord = require('discord.js'),
client = new Discord.Client(),
const config = require("config.json")
Got = require('got');
const fetch = require('node-fetch');
require('discord-reply'),
require('./server')

client.on('ready', ()=>{
  console.log(`${client.user.tag} is ready to chat with ${client.users.cache.size} people`)
client.user.setActivity("Chatting with people", {
  type: "STREAMING",
  url: "https://www.twitch.com/hzrh3ry"
});
});



client.on('message', async message =>{
  if(message.channel.type ==="dm") {
    if(message.author.bot) return;
  message.channel.startTyping();

if (!message.content) return message.channel.send("Please say something.");
await fetch(`https://api.affiliateplus.xyz/api/chatbot?message=${encodeURIComponent(message.content)}&botname=${client.user.username}&ownername=DEVELOPER_NAME`)
    .then(res => res.json())
    .then(data => {
        message.lineReplyNoMention({embed : {
          description : `${data.message}`,
          color : `#2f3136`
        }});
    });
      message.channel.stopTyping();

}
});

client.login(config.token) //<3
