const cmd = require("discord.js-commando");
const discord = require("discord.js");
class NekoCommand extends cmd.Command {
    constructor(client) {
        super(client, {

            name: "nekoinfo",
            group: "team",
            memberName: "nekoinfo",
            description: "Get information about the Nekos! Nyaa~"
        });
    }
    async run(message, args) {
        message.channel.send("Neko Members:")
        message.channel.send(currentNekoMembers)
    }


}

module.exports = NekoCommand;
