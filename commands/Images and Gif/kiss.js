const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "kiss",
  description: "Kiss somebody",
  category: "image",
  async run(client, message) {
    const data = await fetch("https://nekos.life/api/v2/img/kiss").then((res) =>
      res.json()
    );
    const user = message.mentions.users.first() || message.author;
    const kissed = message.author.id === user.id ? "themselfs" : user.username;

    const embed = new MessageEmbed()
      .setFooter(message.author.username)
      .setColor("PINK")
      .setTitle(`${message.author.username} Kissed ${kissed}`)
      .setDescription(`[Congratulation.](${data.url})`)
      .setImage(`${data.url}`)
      .setTimestamp();

    message.channel.send({ embed });
  },
};
