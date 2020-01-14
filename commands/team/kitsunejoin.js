const cmd = require("discord.js-commando");

class JoinKitsuneCommand extends cmd.Command {
    constructor(client) {
        super(client, {

            name: "Knight",
            group: "team",
            memberName: "Knight",
            description: "Be a member of the Knights!"
        });
    }
    async run(message, args) {
        let logChannel = message.guild.channels.find(`name`, "logs");
        let CommandChannel = message.guild.channels.find(`name`, "self-roles");

        if (message.channel != CommandChannel) {
            message.delete();
            if (logChannel)
                logChannel.send("Deleted " + message.content + " from " + message.channel.name + " send by " + message.author.username + " uid: " + message.author + " Reason: Command outside of Command Channel!");
            return;
        }
        let Kitsune = message.member.guild.roles.find("name", "Knight");
        if (message.member.roles.find("name", "Spy")) {
            message.author.send("`You are already a Spy!~`")
        }
        else {
            if (message.member.roles.find("name", "Knight")) {
                message.author.send("`You are already a Kitsune! :3`")
            }
            else {
                message.member.addRole(Kitsune);
                message.author.send("`Welcome to the Knights! :3`");
                currentKitsuneMembers.push(message.author);
            }
        }
    }


}

module.exports = JoinKitsuneCommand;
