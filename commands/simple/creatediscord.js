const cmd = require("discord.js-commando");
const discord = require("discord.js");
//TO DO:
//Create Channel: Log in Group Administrator
//Create Neko, Kitsune and NSFW group
//https://youtu.be/S5DVdjLQA44 look what to write in logs c;
class CreateCommand extends cmd.Command {
  constructor(client) {
    super(client, {

      name: "creatediscord",
      group: "simple",
      memberName: "creatediscord",
      description: "Creates the roles and channels the Bot needs!"
    });
  }
  async run(message, args) {
    if (message.member.roles.find("name", "God") || message.member.hasPermission("ADMINISTRATOR")) {
      if (message.guild.roles.find("name", "Lord")) {
        message.channel.send("`Group Neko already exists skipping..`");
      }
      else {
        message.guild.createRole({
          name: "Lord",
          permissions: [1278594241],
          color: "FF0000",
          position: "4",
          mentionable: true,
        });
      }
      if (message.guild.roles.find("name", "Knight")) {
        message.channel.send("`Group Kitsune already exists skipping..`");
      }
      else {
        message.guild.createRole({
          name: "Knight",
          permissions: [1278594241],
          color: "#00FFFF",
          position: "5",
          mentionable: true,
        });
      }
      if (message.guild.roles.find("name", "NSFW")) {
        message.channel.send("`Group NSFW already exists skipping..`");
      }
      else {
        message.guild.createRole({
          name: "NSFW",
          permissions: [],
          position: "6",
          color: "#D3D3D3",
          mentionable: true,
        });
      }
      if (message.guild.roles.find("name", "Prince")) {
        message.channel.send("`Group Prince already exists skipping..`");
      }
      else {
        message.guild.createRole({
          name: "Prince",
          permissions: [1341652179],
          position: "2",
          color: "#FFFF33",
          mentionable: true,
        });
      }
      if (message.guild.roles.find("name", "Princess")) {
        message.channel.send("`Group Princess already exists skipping..`");
      }
      else {
        message.guild.createRole({
          name: "Princess",
          permissions: [1341652179],
          position: "3",
          color: "#32CD32",
          mentionable: true,
        });
      }
      message.channel.send("`Succesfully created all roles!`");
      message.channel.send("`You can edit the Permissions of the Roles to your likeable!`");
    }
    else {
      message.channel.send("`You dont have enough Permissions to execute this command!`")

    }

  }
}

module.exports = CreateCommand;
