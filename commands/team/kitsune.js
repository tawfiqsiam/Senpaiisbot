const cmd = require("discord.js-commando");
const discord = require("discord.js");

class KnightCommand extends cmd.Command {
    constructor(client) {
        super(client, {

            name: "knightinfo",
            group: "team",
            memberName: "knightinfo",
            description: "Get information about the knights!~"
        });
    }
    async run(message, args) {
        message.channel.send("Knight Members:")
        message.channel.send(currentkitsuneMembers)
    }


}

module.exports = KnightCommand;
