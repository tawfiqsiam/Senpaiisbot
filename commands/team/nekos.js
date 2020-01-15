const cmd = require("discord.js-commando");
const discord = require("discord.js");
class LordCommand extends cmd.Command {
    constructor(client) {
        super(client, {

            name: "lordinfo",
            group: "team",
            memberName: "lordinfo",
            description: "Get information about the Lords !~"
        });
    }
    async run(message, args) {
        message.channel.send("Members:")
        message.channel.send(currentNekoMembers)
    }


}

module.exports = LordCommand;
