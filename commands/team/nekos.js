const cmd = require("discord.js-commando");
const discord = require("discord.js");
class NekoCommand extends cmd.Command {
    constructor(client) {
        super(client, {

            name: "nekoinfo",
            group: "team",
            memberName: "nekoinfo",
            description: "Get information about the Members !~"
        });
    }
    async run(message, args) {
        message.channel.send("Members:")
        message.channel.send(currentNekoMembers)
    }


}

module.exports = NekoCommand;
