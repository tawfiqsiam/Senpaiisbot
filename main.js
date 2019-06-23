const cmd = require("discord.js-commando");
const bot = new cmd.Client();
const discord = require("discord.js");

const serverStats = {
    guildID: '471739831173775379',
    totalUsersID: '592400519314800680',
    memberCountID: '592400584573714432',
    botCountID: '592400622528102474'
};

//bot.registry.registergroup("simple", "simple"); 
bot.registry.registerGroup("simple", "Simple")
bot.registry.registerGroup("team", "Teams")
bot.registry.registerGroup("management", "Management");
bot.registry.registerGroup("interactions", "Interactions");
bot.registry.registerGroup("images", "Images");
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname+ "/commands");
global.lastmessageuser = 0;
global.lastmessagesend = 0;
global.currentNekoMembers = [];
global.currentKitsuneMembers = [];
global.disablechat = false;
global.links = true;
global.bannedwords = [
    "nigger",
    "asshole",
    "bitch",
    "bastard",
    "cunt",
    "cheat",
    "hack"
];


bot.on("message", function(message){
    if(message.author == bot.user)
        return;
    let logChannel = message.guild.channels.find(`name`, "logs");
//chatfilter
    var found = false;
    
    if(lastmessagesend == message.content){
        message.delete();
        message.author.send("`Please dont Spam!`")
        console.log("Deleted "+ message.content + " from " + message.channel.name + " send by " + message.author.name + " uid: " + message.author + "!" );
        if(logChannel)
            logChannel.send("Deleted "+ message.content + " from " + message.channel.name + " send by " + message.author.name + " uid: " + message.author + "!")
    }

    for(var i in bannedwords){
        if (message.content.toLowerCase().includes(blacklist[i].toLowerCase()))
        found = true;
    }
    if(found)
    {
        message.delete();
        message.author.send("`You arent allowed to use that word!`")
        console.log("Deleted "+ message.content + " from " + message.channel.name + " send by " + message.author.name + " uid: " + message.author + "!");
        if(logChannel)
            logChannel.send("Deleted "+ message.content + " from " + message.channel.name + " send by " + message.author.name + " uid: " + message.author + "!")
    }


    if(message.content.length < 2)
    {
        message.delete();
        message.author.send("`Your Message is too short!`")
        console.log("Deleted message from: " + message.author.username + message.author + " reason: Message to short!");
        if(logChannel)
           logChannel.send("Deleted message from: " + message.author.username + message.author + " reason: Message to short!");
    }

    if(!links){
        if(message.content.toLowerCase().includes("https://") || message.content.toLowerCase().includes("http://"))
        {
            message.delete();
            message.author.send("`Links are not allowed!`");
            console.log("Deleted message from: " + message.author.username + message.author + " reason: Link!");
            if(logChannel)
               logChannel.send("Deleted message from: " + message.author.username + message.author + " reason: Link!");

               
        }
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
    lastmessagesend = message.content;
});

bot.on("guildMemberAdd", function(member){
    console.log(member.username  + " ist dem Server beigetreten! ID: " + member);
    var myinfo = new discord.RichEmbed()
        .setColor(0x73B2D9)
        .setTitle("Welcome to Senpaii´s Discord :3")
        .addField("Have fun with chat to each other, share pictures and having some great conversations and enjoy the stay here. :3","Please read #rules and accept the rules in #commands with !neko or !kitsune")
        .addBlankField()
        .setFooter("Have fun c;")
        .setTimestamp()
        member.channel.send(myinfo);

    if(member.guild.id !== serverStats.guildID)
        return;

    bot.channels.get(serverStats.totalUsersID).setName(`Total Users : ${member.guild.memberCount}`);
    bot.channels.get(serverStats.memberCountID).setName(`Member Count : ${member.guild.members.filter(m => !m.user.bot).size}`);
    bot.channels.get(serverStats.botCountID).setName(`Bot Count : ${member.guild.members.filter(m => m.user.bot).size}`);

    let logChannel = member.guild.channels.find(`name`, "logs");
    if(logChannel) 
        logChannel.send(member  + " has joined the Server! ID: " + member.id)

});

bot.on("guildMemberRemove", function(member){

    if(member.guild.id !== serverStats.guildID)
        return;

        bot.channels.get(serverStats.totalUsersID).setName(`Total Users : ${member.guild.memberCount}`);
        bot.channels.get(serverStats.memberCountID).setName(`Member Count : ${member.guild.members.filter(m=> !m.user.bot).size}`);
        bot.channels.get(serverStats.botCountID).setName(`Bot Count : ${member.guild.members.filter(m=>m.user.bot).size}`);

        let logChannel = member.guild.channels.find(`name`, "logs");
        if(logChannel)
           logChannel.send(member  + " has left the Server! ID: " + member.id)
});

bot.on("ready", function()
{
    let statuses = [
        "Working hardly for my master!",
        "Im not allowed to prefer nekos or kitsunes :3",
        "Creator:⎝⎝✧Senͥ𝕡aͣiͫi✧⎠⎠#1633",
        "Advantage through technology!",
        "redcore.win is my favorite site!"
    ]
    console.log("Bot is running!");

    //message.member.roles.find("name","Neko")
    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)]
        bot.user.setActivity(status);

    }, 10000)
    bot.user.setStatus("Online");

});
bot.login(process.env.BOT_TOKEN);   //Bot by Senpaii -> Discord: ⎝⎝✧Senͥ𝕡aͣiͫi✧⎠⎠#1633
