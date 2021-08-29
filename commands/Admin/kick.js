const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'kick',
    description: "Kicks The Mentioned Member",
    run: async(client, message, args) => {
        const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0])

        if(!message.member.hasPermission('KICK_MEMBERS')) {
            const kickerror = new MessageEmbed()
            .setDescription("You Don\'t Have Permissions To Kick Members")
            .setColor('RANDOM')

            return message.channel.send(kickerror)
        } else if(!message.guild.me.hasPermission('KICK_MEMBERS')) {
            const kickerror2 = new MessageEmbed()
            .setDescription("I Don\'t Have Permissions To Kick Members. Make Sure You Have Given Me Appropriate Permissions")
            .setColor('RANDOM')

            return message.channel.send(kickerror2)
        } else if (!mentionedMember) {
            const kickerror3 = new MessageEmbed()
            .setDescription("You Need To Mentioned a Member That You Want to Kick")
            .setColor('RANDOM')

            return message.channel.send(kickerror3)
        }

        const reason = args.slice(1).join(' ')

        try {
            await mentionedMember.kick([reason])

            const kickSuccess = new MessageEmbed()
            .setTitle('Success')
            .setDescription(`Kicked ${mentionedMember} ${reason ? `for **${reason}**` : ''}`)
            .setColor('RANDOM')

            message.channel.send(kickSuccess)

        } catch (error) {
            console.log(error)
            const errorEmbed = new MessageEmbed()
            .setDescription("ERR :x: - There Was an Error Kicking This Member")
            .setColor('RANDOM')
            
            message.channel.send(errorEmbed)
        }
    }
}














