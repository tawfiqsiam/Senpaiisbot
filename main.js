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



    if(message.content == "Hello")
    {
        if (message.author == "<@223876496291266560>")//senpaii
        {
        message.channel.send("`Hello, my dear creator!`");
        message.channel.send("Hello");}
        else if(message.author == "<@306505345579352064>")//jele
        message.channel.send("`Hello, the Monarch of the Neko´s!`");
        else if(message.author == "<@364412155937685504>")//max
        message.channel.send("`Hi, OwO`")
        else
        message.reply("`Hello!`");
    }
    if(message.content == "Joinmessage")
    {
        var myinfo = new discord.RichEmbed()
        .setColor(0x73B2D9)
        .setTitle("Welcome to the Neko & Kitsune Discord :3")
        .addField("Have fun with chat to each other, share pictures and having some great conversations and enjoy the stay here. :3","Please read #rules-and-informations and accept the rules in #commands with !neko or !kitsune")
        .addBlankField()
        .setFooter("Have fun c;")
        .setTimestamp()
        message.channel.send(myinfo);
    }
    //begin chatfilter
    if(message.content == "Nigger"||
    message.content == "nigger"||
    message.content == "Fuck"||
    message.content =="fuck"||
    message.content == "NIGGER"||
    message.content == "FUCK")
    {
        message.delete();
        message.channel.send("`This Word is censored!`");
    }
//end chatfilter

    if(message.content == "ligma")
    {
        message.channel.send("`Balls`");
    }

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

    console.log("Bot is running!");
    //message.member.roles.find("name","Neko")
    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)]
        bot.user.setActivity(status);

    }, 10000)
    bot.user.setStatus("Online")

});

bot.login(process.env.BOT_TOKEN);   //Bot by Senpaii -> Discord: ⎛⎝Senpaii Satanist⎠⎞#1633
