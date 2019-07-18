const cmd = require("discord.js-commando");
const discord = require("discord.js");
class JoinNekoCommand extends cmd.Command {
    constructor(client) {
        super(client, {

            name: "neko",
            group: "team",
            memberName: "neko",
            description: "Be a member of the Nekos! Nyaa~"
        });
    }
    async run(message, args) {
        /*      let Kitsune = message.member.guid.roles.find("name", "Kitsune");
                let Neko = message.member.guid.roles.find("name", "Neko")
                if (Kitsune)
                return;
                else
                message.member.addRole(Neko);*/
        let logChannel = message.guild.channels.find(`name`, "logs");
        let CommandChannel = message.guild.channels.find(`name`, "commands");

        if (message.channel != CommandChannel) {
            message.delete();
            if (logChannel)
                logChannel.send("Deleted " + message.content + " from " + message.channel.name + " send by " + message.author.username + " uid: " + message.author + " Reason: Command outside of Command Channel!");
            return;
        }
        let Neko = message.member.guild.roles.find("name", "Neko");
        // let Kitsune = message.member.guild.roles.find("name", "Kitsune");
        if (message.member.roles.find("name", "Kitsune")) {
            message.author.send("`You are already a Kitsune! :3`")
        }
        else {
            if (message.member.roles.find("name", "Neko")) {
                message.author.send("`You are already a Neko! Nyaa~`")
            }
            else {
                message.member.addRole(Neko);
                message.author.send("`Welcome to the Nekos! Nyaa~`");
                currentNekoMembers.push(message.author);
            }
        }
    }


}

module.exports = JoinNekoCommand;
