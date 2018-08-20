const cmd = require("discord.js-commando");

class JoinKitsuneCommand extends cmd.Command
{
    constructor(client)
    {
        super(client,{

          name: "kitsune",
          group: "team",
          memberName: "kitsune",
          description: "Be a member of the Kitsunes!"
       });
    }
    async run(message, args)
    {
        let Kitsune = message.member.guild.roles.find("name", "Kitsune");
        if (message.member.roles.find("name","Neko"))
        {
            message.channel.send("`You are already a Neko! Nyaa~`")
        }
        else 
        {
            if (message.member.roles.find("name","Kitsune"))
            {
                message.channel.send("`You are already a Kitsune! :3`")
            }
            else
            {
                message.member.addRole(Kitsune);
                message.channel.send("`Welcome to the Kitsunes! :3`");
                currentKitsuneMembers.push(message.author);
            }
        }
    }


}

module.exports = JoinKitsuneCommand;
