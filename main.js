const cmd = require("discord.js-commando");
const bot = new cmd.Client();
const discord = require("discord.js");

//bot.registry.registergroup("simple", "simple"); 
bot.registry.registerGroup("simple", "Simple")
bot.registry.registerGroup("team", "Teams")
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname+ "/commands");
global.currentNekoMembers = [];
global.currentKitsuneMembers = [];




bot.on("message", function(message){
//chatfilter
    let blacklist = [
        "nigger",
        "fuck",
        "asshole",
        "bitch",
        "bastard",
        "cunt"
    ];
    var found = false;
    
    for(var i in blacklist){
        if (message.content.toLowerCase().includes(blacklist[i].toLowerCase()))
        found = true;
    }
    if(found)
    {
        message.delete();
        message.author.send("`Sorry you cant say " + message.content + " on this server!`")
    }

//chatfilter end
    if(message.content == "Hello")
    { 
        if (message.author == "<@223876496291266560>")//senpaii
        {
        message.channel.send("`Hello, my dear creator!`");
        }
        else if(message.author == "<@306505345579352064>")//jele
        message.channel.send("`Hello, the Monarch of the Neko´s!`");
        else
        message.reply("`Hello!`");
    }
  /*  if(message.content == "Joinmessage")
    {
        var myinfo = new discord.RichEmbed()
        .setColor(0x73B2D9)
        .setTitle("Welcome to the Neko & Kitsune Discord :3")
        .addField("Have fun with chat to each other, share pictures and having some great conversations and enjoy the stay here. :3","Please read #rules-and-informations and accept the rules in #commands with !neko or !kitsune")
        .addBlankField()
        .setFooter("Have fun c;")
        .setTimestamp()
        message.channel.send(myinfo);
    }*/

});
//Begin Logs
//bot.on("roleCreate", function(role)
//{
//  let guild = role.guild;
//    guild.defaultChannel.sendMessage("The Role "+ role + " got created")
//});
//bot.on("roleDelete", function(role)
//{
//  let guild = role.guild;
 // guild.defaultChannel.sendMessage("The Role"+ role + " got deleted")
  //  
//});
//bot.on("roleupdate", function(oRole, nRole)
//{
  //  let guild = role.guild;
//    guild.defaultChannel.sendMessage("The Role" + oRole + " has now "+ nRole)
//});

//End logs c;       not working btw. lol
bot.on("guildMemberAdd", function(member){
    var myinfo = new discord.RichEmbed()
        .setColor(0x73B2D9)
        .setTitle("Welcome to the Neko & Kitsune Discord :3")
        .addField("Have fun with chat to each other, share pictures and having some great conversations and enjoy the stay here. :3","Please read #rules-and-informations and accept the rules in #commands with !neko or !kitsune")
        .addBlankField()
        .setFooter("Have fun c;")
        .setTimestamp()
        message.channel.send(myinfo);
});
bot.on("ready", function()
{
    let statuses = [
        "Working hardly for my master!",
        "Im not allowed to prefer nekos or kitsunes",
        "Creator:⎛⎝Senpaii Satanist⎠⎞#1633"
    ]
    System.out.println("starting up bot!");

    //message.member.roles.find("name","Neko")
    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)]
        bot.user.setActivity(status);

    }, 10000)
    bot.user.setStatus("Online")

});
bot.login(process.env.BOT_TOKEN);   //Bot by Senpaii -> Discord: ⎛⎝Senpaii Satanist⎠⎞#1633
