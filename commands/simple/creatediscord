const cmd = require("discord.js-commando");
const discord = require("discord.js");
//TO DO:
  //Create Channel: Log in Group Administrator
  //Create Neko, Kitsune and NSFW group
  //https://youtu.be/S5DVdjLQA44 look what to write in logs c;
class ImportCommand extends cmd.Command
{
    constructor(client)
    {
        super(client,{

          name: "creatediscord",
          group: "team",
          memberName: "creatediscord",
          description: "Creates the roles and channels the Bot needs!"
       });
    }
    async run(message, args)
    {
    var guild = message.guild;
          if (message.member.roles.find("name","God"))
              {
              guild.addRole({
              name: "Neko",
              permissions: "1278594241",
              color: "FF0000",
              mentionable: true,
              
              });
              }
               else
                {
                    message.channel.send("`You dont have enough Permissions to execute this command!`")
                 }

    }
}

module.exports = ImportCommand;
