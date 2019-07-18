const cmd = require("discord.js-commando");

class MirrorCommand extends cmd.Command {
    constructor(client) {
        super(client, {

            name: "mirror",
            group: "simple",
            memberName: "mirror",
            description: "See yourself in a mirror"
        });
    }
    async run(message, args) {
        message.channel.send(message.author.avatarURL);
    }


}

module.exports = MirrorCommand;
