const cmd = require("discord.js-commando");
const discord = require("discord.js");

class aboutcommand extends cmd.Command {
    constructor(client) {
        super(client, {

            name: "about",
            group: "simple",
            memberName: "about",
            description: "Find something out about the bot!"
        });
    }
    async run(message, args) {
        var myinfo = new discord.RichEmbed()
            .setColor(0x73B2D9)
            .setTitle("About Me")
            .addField("Im an Discordbot created by Senpaii as a gift for his crush Jelenium c;", "The day i born: 19 July 2018")
            .addBlankField()
            .setThumbnail(message.author.avatarURL)
            .setFooter("Thank you for reading c;")
            .setURL("https://steamcommunity.com/id/Im_Your_Senpaii/")
            .setTimestamp()
        message.channel.send(myinfo);
    }


}

module.exports = aboutcommand;
