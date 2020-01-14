const cmd = require("discord.js-commando");
const discord = require("discord.js");
class JoinLordCommand extends cmd.Command {
    constructor(client) {
        super(client, {

            name: "lord",
            group: "team",
            memberName: "lord",
            description: "Be a member of the Lords!~"
        });
    }
    async run(message, args) {
        /*      let Knight = message.member.guid.roles.find("name", "Knight");
                let Lord = message.member.guid.roles.find("name", "Lord")
                if (Knight)
                return;
                else
                message.member.addRole(Lord);*/
        let logChannel = message.guild.channels.find(`name`, "logs");
        let CommandChannel = message.guild.channels.find(`name`, "self-roles");

        if (message.channel != CommandChannel) {
            message.delete();
            if (logChannel)
                logChannel.send("Deleted " + message.content + " from " + message.channel.name + " send by " + message.author.username + " uid: " + message.author + " Reason: Command outside of Command Channel!");
            return;
        }
        let Lord = message.member.guild.roles.find("name", "Lord");
        // let Knight = message.member.guild.roles.find("name", "Knight");
        if (message.member.roles.find("name", "Knight")) {
            message.author.send("`You are already a Kinght! :3`")
        }
        else {
            if (message.member.roles.find("name", "Lord")) {
                message.author.send("`You are already a Lords! ~`")
            }
            else {
                message.member.addRole(Lord);
                message.author.send("`Welcome to the Lords! ~`");
                currentLordMembers.push(message.author);
            }
        }
    }


}

module.exports = JoinLordCommand;
