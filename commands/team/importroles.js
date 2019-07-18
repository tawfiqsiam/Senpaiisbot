const cmd = require("discord.js-commando");
const discord = require("discord.js");
class ImportCommand extends cmd.Command {
  constructor(client) {
    super(client, {

      name: "importroles",
      group: "team",
      memberName: "importroles",
      description: "Imports the roles to the bot from the discord!"
    });
  }
  async run(message, args) {
    let NekoMembers = discord.Guild.roles("Neko").member;
    let KitsuneMembers = discord.Guild.roles("Kitsune").member;



    if (message.member.roles.find("name", "Monarch of the Neko`s")) {
      currentNekoMembers.push(NekoMembers);
      currentKitsuneMembers.push(KitsuneMembers);
    }
    else {
      message.channel.send("`You dont have enough Permissions to execute this command!`")
    }

  }
}

module.exports = ImportCommand;
