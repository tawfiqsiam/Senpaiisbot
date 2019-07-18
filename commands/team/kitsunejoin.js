const cmd = require("discord.js-commando");

class JoinKitsuneCommand extends cmd.Command {
    constructor(client) {
        super(client, {

            name: "kitsune",
            group: "team",
            memberName: "kitsune",
            description: "Be a member of the Kitsunes!"
        });
    }
    async run(message, args) {
        let logChannel = message.guild.channels.find(`name`, "logs");
        let CommandChannel = message.guild.channels.find(`name`, "commands");

        if (message.channel != CommandChannel) {
            message.delete();
            if (logChannel)
                logChannel.send("Deleted " + message.content + " from " + message.channel.name + " send by " + message.author.username + " uid: " + message.author + " Reason: Command outside of Command Channel!");
            return;
        }
        let Kitsune = message.member.guild.roles.find("name", "Kitsune");
        if (message.member.roles.find("name", "Neko")) {
            message.author.send("`You are already a Neko! Nyaa~`")
        }
        else {
            if (message.member.roles.find("name", "Kitsune")) {
                message.author.send("`You are already a Kitsune! :3`")
            }
            else {
                message.member.addRole(Kitsune);
                message.author.send("`Welcome to the Kitsunes! :3`");
                currentKitsuneMembers.push(message.author);
            }
        }
    }


}

module.exports = JoinKitsuneCommand;
