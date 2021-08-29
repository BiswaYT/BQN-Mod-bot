const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "hug",
  description: "Hug somebody",
  category: "image",
  async run(client, message) {
    const data = await fetch("https://nekos.life/api/v2/img/hug").then((res) =>
      res.json()
    );
    const user = message.mentions.users.first() || message.author;
    const hugged = message.author.id === user.id ? "themselfs" : user.username;

    const embed = new MessageEmbed()
      .setFooter(message.author.username)
      .setColor("PINK")
      .setTitle(`${message.author.username} Hugged ${hugged}`)
      .setDescription(`[Congratulation.](${data.url})`)
      .setImage(`${data.url}`)
      .setTimestamp();

    message.channel.send({ embed });
  },
};
