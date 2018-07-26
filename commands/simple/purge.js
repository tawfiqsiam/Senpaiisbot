onst cmd = require("discord.js-commando");

class purgecommand extends cmd.Command
{
    constructor(client)
    {
        super(client,{

          name: "purge",
          group: "simple",
          memberName: "purge",
          description: "deletes all messages in a channel!"
       });
    }
    async run(message, args)
    {
    if (!message.member.hasPermission("MANAGE_MESSAGES")
    return;
     message.delete();
     const fetched = await message.channel.fetchMessages();
     message.channel.bulkDelete(fetched);
     message.channel.send("`Deleted all messages!`");
    }

}

module.exports = purgecommand;
