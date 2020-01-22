const cmd = require("discord.js-commando");
const bot = new cmd.Client();
const discord = require("discord.js");

const serverStats = {
    guildID: '471739831173775379',
    totalUsersID: '593133820534980656',
    memberCountID: '593133846439133234',
    botCountID: '593133878051471600'
};
//////////
const FOUR = '669620605209018378';
const ONE = '669620504348590081';

const TWO = '669620556563218483';
const THREE = '669620581213143041';

bot.on('message', (message) => {
    const parts = message.content.split(' ');

    if (parts[0] == '!age') {

        if(parts[1] == '13') {
            message.member.addRole(ONE);
        }
        else if(parts[1] == '15') {
            message.member.addRole(TWO);
        }
        else if(parts[1] == '18') {
            message.member.addRole(THREE);
        }

        else if(parts[1] == '21') {
            message.member.addRole(FOUR);
        }
    }

});

bot.registry.registerGroup("simple", "Simple")
bot.registry.registerGroup("team", "Teams")
bot.registry.registerGroup("management", "Management");
bot.registry.registerGroup("interactions", "Interactions");
bot.registry.registerGroup("images", "Images");
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");
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


bot.on("message", function (message) {
    if (message.content.length > 2000)
        return;

    if (message.system)//we dont wanna fuck with for example join messages -> messages that were sent by discord and not the user itself
        return;

    if (message.author == bot.user)
        return;

    let logChannel = message.guild.channels.find(`name`, "logs");
    let commandChannel = message.guild.channels.find(`name`, "self-roles");

    //chatfilter
    var found = false;
    if (message.channel == commandChannel) {
        if (message.content.charAt(0) != "!") {
            message.author.send("`In the Command Channel only Bot Commands are allowed!`");
            if (logChannel)
                logChannel.send("Deleted " + message.content + " from " + message.channel.name + " send by " + message.author.username + " uid: " + message.author + " Reason: Non Command in Command Channel!")

        }
        message.delete();
    }
    if (lastmessagesend == message.content && message.content.length > 1 && !message.content.includes("!")) {
        message.delete();
        message.author.send("`Please dont Spam!`")
        console.log("Deleted " + message.content + " from " + message.channel.name + " send by " + message.author.username + " uid: " + message.author + "!");
        if (logChannel)
            logChannel.send("Deleted " + message.content + " from " + message.channel.name + " send by " + message.author.username + " uid: " + message.author + "!")
    }

    for (var i in bannedwords) {
        if (message.content.toLowerCase().includes(bannedwords[i].toLowerCase()))
            found = true;
    }
    if (found) {
        message.delete();
        message.author.send("`You arent allowed to use that word!`")
        console.log("Deleted " + message.content + " from " + message.channel.name + " send by " + message.author.username + " said: " + message.author + "!");
        if (logChannel)
            logChannel.send("Deleted " + message.content + " from " + message.channel.name + " send by " + message.author.username + " uid: " + message.author + "!")
    }


    /*
        if (message.content.length < 2) {
            message.delete();
            message.author.send("`Your Message is too short!`")
            console.log("Deleted message from: " + message.author.username + message.author + " reason: Message to short!");
            if (logChannel)
                logChannel.send("Deleted message from: " + message.author.username + message.author + " reason: Message to short!");
        }
    */

    if (!links) {
        if (message.content.toLowerCase().includes("https://") || message.content.toLowerCase().includes("http://")) {
            message.delete();
            message.author.send("`Links are not allowed!`");
            console.log("Deleted message from: " + message.author.username + message.author + " reason: Link!");
            if (logChannel)
                logChannel.send("Deleted message from: " + message.author.username + message.author + " reason: Link!");


        }
    }


    //chatfilter end

    if (message.content == "Hello") {
        if (message.author == "<@618681842362744832>")//senpaii
            message.channel.send("`Hello, my dear creator!`");
        else
            message.reply("`Hello!`");
    }
    lastmessagesend = message.content;
});

bot.on("guildMemberAdd", function (member) {
    console.log(member.user + " ist dem Server beigetreten! ID: " + member);


    if (member.guild.id !== serverStats.guildID)
        return;

    bot.channels.get(serverStats.totalUsersID).setName(`Total Users : ${member.guild.memberCount}`);
    bot.channels.get(serverStats.memberCountID).setName(`Member Count : ${member.guild.members.filter(m => !m.user.bot).size}`);
    bot.channels.get(serverStats.botCountID).setName(`Bot Count : ${member.guild.members.filter(m => m.user.bot).size}`);

    let logChannel = bot.channels.find(`name`, "logs");
    if (logChannel)
        logChannel.send(member + " has joined the Server! ID: " + member.id)

    member.send("`Welcome to Senpaii's Discord!`");
    member.send("`Please read through the Rules and accept them with eather choosing !neko or !kitsune to get a rank!`");

});

bot.on("guildMemberRemove", function (member) {

    if (member.guild.id !== serverStats.guildID)
        return;

    bot.channels.get(serverStats.totalUsersID).setName(`Total Users : ${member.guild.memberCount}`);
    bot.channels.get(serverStats.memberCountID).setName(`Member Count : ${member.guild.members.filter(m => !m.user.bot).size}`);
    bot.channels.get(serverStats.botCountID).setName(`Bot Count : ${member.guild.members.filter(m => m.user.bot).size}`);

    let logChannel = bot.channels.find(`name`, "logs");
    if (logChannel)
        logChannel.send(member + " has left the Server! ID: " + member.id)
});

bot.on("ready", function () {
    let statuses = [
        "Welcome to my KingDom",
        "Ping for help",
        "Created By StarZz",
        "Advantage through technology!",
        "Say !help for help"
    ]
    console.log("Bot is running!");

    //message.member.roles.find("name","Lord")
    setInterval(function () {
        let status = statuses[Math.floor(Math.random() * statuses.length)]
        bot.user.setActivity(status);

    }, 10000)
    bot.user.setStatus("Online");

});
//Discord Server this Bot is on: https://discord.gg/CgGtZdm
bot.login(process.env.BOT_TOKEN);   //Bot by Senpaii -> Discord: Senpaii|先輩#1633
