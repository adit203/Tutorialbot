const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  
  const msg = await message.channel.send('Pinging...')
    .then(m => m.delete({timeout: 1500}))
  const embed = new Discord.MessageEmbed()
    .setColor('#ffffff')
    .setDescription(`🏓 PONG`)
    .addField('⏳ Latency', `${msg.createdTimestamp - message.createdTimestamp}ms`)
    .addField('💓 API Latency', `${Math.round(client.ws.ping)}ms`)
    .setTimestamp()
  
  message.channel.send(embed)
  
  
  
};
