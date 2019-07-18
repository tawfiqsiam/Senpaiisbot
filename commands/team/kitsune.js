const cmd = require("discord.js-commando");
const discord = require("discord.js");

class KitsuneCommand extends cmd.Command {
    constructor(client) {
        super(client, {

            name: "kitsuneinfo",
            group: "team",
            memberName: "kitsuneinfo",
            description: "Get information about the kitsunes! Nyaa~"
        });
    }
    async run(message, args) {
        message.channel.send("Kitsune Members:")
        message.channel.send(currentKitsuneMembers)
    }


}

module.exports = KitsuneCommand;
