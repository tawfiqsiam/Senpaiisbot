const cmd = require("discord.js-commando");
const discord = require("discord.js");
//TO DO:
  //Create Channel: Log in Group Administrator
  //Create Neko, Kitsune and NSFW group
  //https://youtu.be/S5DVdjLQA44 look what to write in logs c;
class CreateCommand extends cmd.Command
{
    constructor(client)
    {
        super(client,{

          name: "creatediscord",
          group: "simple",
          memberName: "creatediscord",
          description: "Creates the roles and channels the Bot needs!"
       });
    }
    async run(message, args)
    {
          if (message.member.roles.find("name","God") || message.member.hasPermission("ADMINISTRATOR"))
              {
                  if(message.guild.roles.find("name","Neko"))
                  message.channel.send("`Group Neko already exists skipping..`")
                  else{
                    message.guild.createRole({
                        name: "Neko",
                        permissions: [1278594241],
                        color: "FF0000",
                        position: "4",
                        mentionable: true,      
                        });
                  }
                  if(message.guild.roles.find(("name","Kitsune"))
                  message.channel.send("`Group Kitsune already exists skipping..`")
                  else
                  {
                    message.guild.createRole({
                        name: "Kitsune",
                        permissions: [1278594241],
                        color: "#00FFFF",
                        position: "5",
                        mentionable: true,      
              });}
              if(message.guild.roles.find(("name","NSFW"))
              message.channel.send("`Group NSFW already exists`")
              else{
              message.guild.createRole({
              name: "NSFW",
              permissions: [],
              position: "6",
              color: "#D3D3D3",
              mentionable: true,      
              });}
              if(message.guild.roles.find(("name","Neko Sensei"))
              message.channel.send("`Group Neko Sensei already exists`")
              else{
              message.guild.createRole({
              name: "Neko Sensei",
              permissions: [1341652179],
              position: "2",
              color: "#FFFF33",
              mentionable: true,      
              });}
              if(message.guild.roles.find(("name","Kitsune Sensei"))
              message.channel.send("`Group Kitsune Sensei already exists`")
              else{
              message.guild.createRole({
              name: "Kitsune Sensei",
              permissions: [1341652179],
              position: "3",
              color: "#32CD32",
              mentionable: true,      
              });}
              message.guild.createChannel("Rules", "text");
              message.guild.createChannel("Admin","category");
              message.guild.createChannel("Logs", "text");
                message.channel.send("`Succesfully created all roles!`");
                message.channel.send("`Please edit the Permissions of the Roles to your likeable!`");
              }
               else
                {
                    message.channel.send("`You dont have enough Permissions to execute this command!`")
                 }

    }
}

module.exports = CreateCommand;
