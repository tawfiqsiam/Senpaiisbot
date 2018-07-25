const cmd = require("discord.js-commando");
const discord = require("discord.js");
class NsFwCommand extends cmd.Command
{
    constructor(client)
    {
        super(client,{

          name: "nsfw",
          group: "team",
          memberName: "nsfw",
          description: "You agree that youre 18 and unlock the nsfw channels!"
       });
    }
    async run(message, args)
    {
        let nsfw = message.member.guild.roles.find("name", "NSFW");
        if (message.member.roles.find("name","NSFW"))
        {
         message.channel.send("`You already have the NSFW rank! c;`")
        }
         else
          {
               message.member.addRole(nsfw);
               message.channel.send("`Thak you for agreeing c; ?`");
        }
    }


}

module.exports = NsFwCommand;
