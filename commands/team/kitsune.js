const cmd = require("discord.js-commando");
const discord = require("discord.js");

class KitsuneCommand extends cmd.Command {
    constructor(client) {
        super(client, {

            name: "knightinfo",
            group: "team",
            memberName: "knightinfo",
            description: "Get information about the knights!~"
        });
    }
    async run(message, args) {
        message.channel.send("Kitsune Members:")
        message.channel.send(currentKitsuneMembers)
    }


}

module.exports = KnightCommand;
