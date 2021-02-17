const Discord = require('discord.js'); // Base
const client = new Discord.Client(); // Base
const { prefix, token } = require('./config.json'); // Permet de relier le fichier config

// Statut du bot


//Toutes les actions à faire quand le bot se connecte
client.on("ready", function () {
    console.log("BOT EN LIGNE CHACAL");
    client.user.setPresence({
        status: "online",
        activity: {
            name: "le chakra de Shizouto",
            type: "WATCHING",
            url: "https://discord.gg/Q3mN5mKCh9"
           }
      });
})

// Répondre à un message
client.on('message', (message) => {
    if (message.content === `${prefix}youtube`) { 
        message.channel.send(`Et voila pour toi poto! https://www.youtube.com/channel/UC5-RmI3iUmjH1vL4AwrcK9A?view_as=subscriber`) 
    }
    if (message.content === `${prefix}twitch`) { 
        message.channel.send(`Et voila pour toi poto! https://www.twitch.tv/shizouto`) 
    }
    if (message.content === `${prefix}twitter`) { 
        message.channel.send(`Et voila pour toi poto! https://twitter.com/Shizouto`) 
    }
    if (message.content === `${prefix}discord`) { 
        message.channel.send(`Et voila pour toi poto! https://discord.gg/Q3mN5mKCh9`) 
    }
    if (message.content === `${prefix}compteur`) {
        message.channel.send(`NOMBRE DE MEMBRE: ${message.guild.memberCount}`);
    }
})


client.login("Nzc4MjE0NTEyMzY0MDkzNDQw.X7Ouvg.j3nVgRMn50VA0NJ5PLTv4cX9zN4");
