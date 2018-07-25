const cmd = require("discord.js-commando");
const discord = require("discord.js");
class JoinNekoCommand extends cmd.Command
{
    constructor(client)
    {
        super(client,{

          name: "neko",
          group: "team",
          memberName: "neko",
          description: "Be a member of the Nekos! Nyaa~"
       });
    }
    async run(message, args)
    {
/*      let Kitsune = message.member.guid.roles.find("name", "Kitsune");
        let Neko = message.member.guid.roles.find("name", "Neko")
        if (Kitsune)
        return;
        else
        message.member.addRole(Neko);*/
        let CommandChannel = message.member.guild.channels.find("name","commands");
        let Neko = message.member.guild.roles.find("name", "Neko");
       // let Kitsune = message.member.guild.roles.find("name", "Kitsune");
          if (message.member.roles.find("name","Kitsune"))
              {
               message.channel.send("`You are already a Kitsune! :3`")
              }
               else
                {
                       if (message.member.roles.find("name","Neko"))
                       {
                            message.channel.send("`You are already a Neko! Nyaa~`")
                       }
                        else
                	 {
                           message.member.addRole(Neko);
                           message.channel.send("`Welcome to the Nekos! Nyaa~`");
                           currentNekoMembers.push(message.author);
                        }
                     }
        }


}

module.exports = JoinNekoCommand;
