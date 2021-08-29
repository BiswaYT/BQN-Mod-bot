const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "cuddle",
  description: "Cuddle somebody",
  category: "",
  async run(client, message) {
    const data = await fetch("https://nekos.life/api/v2/img/cuddle").then((res) =>
      res.json()
    );
    const user = message.mentions.users.first() || message.author;
    const cuddled = message.author.id === user.id ? "themselfs" : user.username;

    const embed = new MessageEmbed()
      .setFooter(message.author.username)
      .setColor("RANDOM")
      .setTitle(`${message.author.username} Cuddled ${cuddled}`)
      .setDescription(`[Congratulation.](${data.url})`)
      .setImage(`${data.url}`)
      .setTimestamp();

    message.channel.send({ embed });
  },
};