const commando = require('discord.js-commando');
const discord = require('discord.js');
const client = require('nekos.life');
const neko = new client();



class hugCommand extends commando.Command {
    constructor(client) {
        super(client,
            {
                name: 'hug',
                group: 'interactions',
                memberName: 'hug',
                description: 'hug other users.'
            })
    }

    async run(message, args) {
        let target = message.guild.member(message.mentions.users.first());
        if (!target) {
            message.channel.send("You have to mention a user!");
            return;
        }
        var hug = await neko.sfw.hug();
        console.log(hug);
        if (target == message.author) {
            var selfcuddle = new discord.RichEmbed()
                .addField(message.author + " hugs himself", ":3", true)
                .setColor("#FF69B4")
                .setImage(hug.url)
                .setFooter("powered by nekos.life <3")
            message.channel.sendEmbed(selfcuddle);
            return;
        }
        var ws = new discord.RichEmbed()
            .addField(" hugs ", ":3", true)
            .setColor("#FF69B4")
            .setImage(hug.url)
            .setFooter("powered by nekos.life <3")
        message.channel.send(message.author + " hugs " + target);
        message.channel.sendEmbed(ws);
    }
}

module.exports = hugCommand;