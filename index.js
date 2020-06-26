const Discord = require('discord.js')
const client = new Discord.Client()

const prefix = '-';
const ownerID = '698069399285792848';
      
client.on('ready', () => {
  client.user.setStatus("dnd");
  client.user.setActivity(`Kang Baso Development | -help`, {
    type: "WATCHING"
  })
})
client.on('message', message => {

  const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
  if (message.content.match(prefixMention)) {
    return message.reply(`My prefix is \`${prefix}\``);
  }
  
  let args = message.content.slice(prefix.length).trim().split(" ");
  let cmd = args.shift().toLowerCase();
  
  
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  
  try {
    
    delete require.cache[require.resolve(`./commands/${cmd}.js`)];
    
    let ops = {
      ownerID: ownerID
    }
    
    let commandFile = require(`./commands/${cmd}.js`);
    commandFile.run(client, message, args, ops);
    
  } catch (e) {
    
  }
});

client.on('ready', () => console.log(`[READY] ${client.user.tag} ready to serve ${client.users.cache.size} at ${client.guilds.cache.size} servers.`));

client.login(process.env.TOKEN);