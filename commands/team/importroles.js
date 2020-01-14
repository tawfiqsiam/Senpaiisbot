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
    let lordMembers = discord.Guild.roles("Lord").member;
    let KnightMembers = discord.Guild.roles("Knight").member;



    if (message.member.roles.find("name", "Monarch of the Lord`s")) {
      currentNekoMembers.push(LordMembers);
      currentKitsuneMembers.push(KnightMembers);
    }
    else {
      message.channel.send("`You dont have enough Permissions to execute this command!`")
    }

  }
}

module.exports = ImportCommand;
