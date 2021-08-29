const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "pat",
  description: "Pat somebody",
  category: "image",
  async run(client, message) {
    const data = await fetch("https://nekos.life/api/v2/img/pat").then((res) =>
      res.json()
    );
    const user = message.mentions.users.first() || message.author;
    const patted = message.author.id === user.id ? "themselfs" : user.username;

    const embed = new MessageEmbed()
      .setFooter(message.author.username)
      .setColor("WHITE")
      .setTitle(`${message.author.username} Patted ${patted}`)
      .setDescription(`[Congratulation.](${data.url})`)
      .setImage(`${data.url}`)
      .setTimestamp();

    message.channel.send({ embed });
  },
};
