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
const BLUE = '669647515829796865';
const RED = '669640221804986368';
const YELLOW = '669646643918012450';
const PINK = '669647234651914240';
const BLACK = '669655778101166088';
const GRAY = '669855567678013460';
bot.on('message', (message) => {
    const parts = message.content.split(' ');


        if(parts[0] == '13') {
            message.member.addRole(ONE);
        }
        else if(parts[0] == '14') {
            message.member.addRole(ONE);
        }
        else if(parts[0] == '16') {
            message.member.addRole(TWO);
        }
        else if(parts[0] == '17') {
            message.member.addRole(TWO);
        }
        else if(parts[0] == '15') {
            message.member.addRole(TWO);
        }
        else if(parts[0] == '18') {
            message.member.addRole(THREE);
        }
         else if(parts[0] == '19') {
            message.member.addRole(THREE);
        } 

             else if(parts[0] == '20') {
            message.member.addRole(THREE);
        }
             else if(parts[0] == '21') {
            message.member.addRole(FOUR);
        }
            else if(parts[0] == '22') {
            message.member.addRole(FOUR);
        }
            else if(parts[0] == '23') {
            message.member.addRole(FOUR);
        }
            else if(parts[0] == '24') {
            message.member.addRole(FOUR);
        }
            else if(parts[0] == '25') {
            message.member.addRole(FOUR);
        }
            else if(parts[0] == '26') {
            message.member.addRole(FOUR);
        }

                else if(parts[0] == 'blue') {
            message.member.addRole(BLUE);
        }
            else if(parts[0] == 'BLUE') {
            message.member.addRole(BLUE);
        }
            else if(parts[0] == 'Blue') {
            message.member.addRole(BLUE);
        }
            else if(parts[0] == 'red') {
            message.member.addRole(RED);
        }
            else if(parts[0] == 'Red') {
            message.member.addRole(RED);
        }
            else if(parts[0] == 'Red') {
            message.member.addRole(RED);
        }
            else if(parts[0] == 'PINK') {
            message.member.addRole(PINK);
        }
            else if(parts[0] == 'Pink') {
            message.member.addRole(PINK);
        }
            else if(parts[0] == 'pink') {
            message.member.addRole(PINK);
        }
            else if(parts[0] == 'YELLOW') {
            message.member.addRole(YELLOW);
        }
            else if(parts[0] == 'Yellow') {
            message.member.addRole(YELLOW);
        }
            else if(parts[0] == 'yellow') {
            message.member.addRole(YELLOW);
        }       
            else if(parts[0] == 'BLACK') {
            message.member.addRole(BLACK);
        }
                   else if(parts[0] == 'Black') {
            message.member.addRole(BLACK);
        }
            else if(parts[0] == 'black') {
            message.member.addRole(BLACK);
        }
            if(parts[0] == 'delall') {
            message.member.removeRole(ONE);
}
            if(parts[0] == 'delall') {
            message.member.removeRole(TWO);
 }
           if(parts[0] == 'delall') {
            message.member.removeRole(THREE);
}
           if(parts[0] == 'delall') {
            message.member.removeRole(FOUR);
}
           if(parts[0] == 'delall') {
            message.member.removeRole(RED);
}
           if(parts[0] == 'delall') {
            message.member.removeRole(PINK);
}
           if(parts[0] == 'delall') {
            message.member.removeRole(BLACK);
}
           if(parts[0] == 'delall') {
            message.member.removeRole(BLUE);
}
           if(parts[0] == 'delall') {
            message.member.removeRole(YELLOW);
}
           if(parts[0] == 'delall') {
            message.member.removeRole(YELLOW);
}
  if(parts[0] == 'Blue') {
            message.member.removeRole(YELLOW);
}
           if(parts[0] == 'BLUE') {
            message.member.removeRole(YELLOW);
}
           if(parts[0] == 'blue') {
            message.member.removeRole(YELLOW);
}
           if(parts[0] == 'Blue') {
            message.member.removeRole(BLACK);
}
           if(parts[0] == 'BLUE') {
            message.member.removeRole(BLACK);
}
           if(parts[0] == 'blue') {
            message.member.removeRole(BLACK);
}
           if(parts[0] == 'Blue') {
            message.member.removeRole(RED);
}
           if(parts[0] == 'BLUE') {
            message.member.removeRole(RED);
}
           if(parts[0] == 'blue') {
            message.member.removeRole(RED);
}
           if(parts[0] == 'Blue') {
            message.member.removeRole(PINK);
}
           if(parts[0] == 'BLUE') {
            message.member.removeRole(PINK);
}
           if(parts[0] == 'blue') {
            message.member.removeRole(PINK);
}
  if(parts[0] == 'Red') {
            message.member.removeRole(YELLOW);
}
           if(parts[0] == 'RED') {
            message.member.removeRole(YELLOW);
}
           if(parts[0] == 'red') {
            message.member.removeRole(YELLOW);
}
           if(parts[0] == 'Red') {
            message.member.removeRole(BLACK);
}
           if(parts[0] == 'RED') {
            message.member.removeRole(BLACK);
}
           if(parts[0] == 'red') {
            message.member.removeRole(BLACK);
}
           if(parts[0] == 'Red') {
            message.member.removeRole(BLUE);
}
           if(parts[0] == 'RED') {
            message.member.removeRole(BLUE);
}
           if(parts[0] == 'red') {
            message.member.removeRole(BLUE);
}
           if(parts[0] == 'Red') {
            message.member.removeRole(PINK);
}
           if(parts[0] == 'RED') {
            message.member.removeRole(PINK);
}
           if(parts[0] == 'red') {
            message.member.removeRole(PINK);
}
 if(parts[0] == 'Pink') {
            message.member.removeRole(YELLOW);
}
           if(parts[0] == 'PINK') {
            message.member.removeRole(YELLOW);
}
           if(parts[0] == 'pink') {
            message.member.removeRole(YELLOW);
}
           if(parts[0] == 'Pink') {
            message.member.removeRole(BLACK);
}
           if(parts[0] == 'PINK') {
            message.member.removeRole(BLACK);
}
           if(parts[0] == 'pink') {
            message.member.removeRole(BLACK);
}
           if(parts[0] == 'Pink') {
            message.member.removeRole(BLUE);
}
           if(parts[0] == 'PINK') {
            message.member.removeRole(BLUE);
}
           if(parts[0] == 'pink') {
            message.member.removeRole(BLUE);
}
           if(parts[0] == 'Pink') {
            message.member.removeRole(RED);
}
           if(parts[0] == 'PINK') {
            message.member.removeRole(RED);
}
           if(parts[0] == 'pink') {
            message.member.removeRole(RED);
}
if(parts[0] == 'Black') {
            message.member.removeRole(YELLOW);
}
           if(parts[0] == 'BLACK') {
            message.member.removeRole(YELLOW);
}
           if(parts[0] == 'black') {
            message.member.removeRole(YELLOW);
}
           if(parts[0] == 'Black') {
            message.member.removeRole(PINK);
}
           if(parts[0] == 'BLACK') {
            message.member.removeRole(PINK);
}
           if(parts[0] == 'black') {
            message.member.removeRole(PINK);
}
           if(parts[0] == 'Black') {
            message.member.removeRole(BLUE);
}
           if(parts[0] == 'BLACK') {
            message.member.removeRole(BLUE);
}
           if(parts[0] == 'black') {
            message.member.removeRole(BLUE);
}
           if(parts[0] == 'Black') {
            message.member.removeRole(RED);
}
           if(parts[0] == 'BLACK') {
            message.member.removeRole(RED);
}
           if(parts[0] == 'black') {
            message.member.removeRole(RED);
}
if(parts[0] == 'Yellow') {
            message.member.removeRole(BLACK);
}
           if(parts[0] == 'YELLOW') {
            message.member.removeRole(BLACK);
}
           if(parts[0] == 'yellow') {
            message.member.removeRole(BLACK);
}
           if(parts[0] == 'Yellow') {
            message.member.removeRole(PINK);
}
           if(parts[0] == 'YELLOW') {
            message.member.removeRole(PINK);
}
           if(parts[0] == 'yellow') {
            message.member.removeRole(PINK);
}
           if(parts[0] == 'Yellow') {
            message.member.removeRole(BLUE);
}
           if(parts[0] == 'YELLOW') {
            message.member.removeRole(BLUE);
}
           if(parts[0] == 'yellow') {
            message.member.removeRole(BLUE);
}
           if(parts[0] == 'Yellow') {
            message.member.removeRole(RED);
}
           if(parts[0] == 'YELLOW') {
            message.member.removeRole(RED);
}
           if(parts[0] == 'yellow') {
            message.member.removeRole(RED);
}
if(parts[0] == 'Gray') {
            message.member.addRole(GRAY);
        }
        if(parts[0] == 'GRAY') {
            message.member.addRole(GRAY);
        }
        if(parts[0] == 'gray') {
            message.member.addRole(GRAY);
        }
        if(parts[0] == 'gray') {
            message.member.removeRole(BLACK);
        }
        if(parts[0] == 'gray') {
            message.member.removeRole(BLUE);
        }
        if(parts[0] == 'gray') {
            message.member.removeRole(RED);
        }
        if(parts[0] == 'gray') {
            message.member.removeRole(PINK);
        }
        if(parts[0] == 'gray') {
            message.member.removeRole(YELLOW);
        }
if(parts[0] == 'gray') {
message.member.removeRole(BLACK);
}
if(parts[0] == 'Gray') {
message.member.removeRole(BLUE);
}
if(parts[0] == 'Gray') {
message.member.removeRole(RED);
}
if(parts[0] == 'Gray') {
message.member.removeRole(PINK);
}
if(parts[0] == 'Gray') {
message.member.removeRole(YELLOW);
}
if(parts[0] == 'GRAY') {
message.member.removeRole(BLACK);
}
if(parts[0] == 'GRAY') {
message.member.removeRole(BLUE);
}
if(parts[0] == 'GRAY') {
message.member.removeRole(RED);
}
if(parts[0] == 'GRAY') {
message.member.removeRole(PINK);
}
if(parts[0] == 'GRAY') {
message.member.removeRole(YELLOW);
}
           if(parts[0] == 'Yellow') {
            message.member.removeRole(GRAY);
}
           if(parts[0] == 'YELLOW') {
            message.member.removeRole(GRAY);
}
           if(parts[0] == 'yellow') {
            message.member.removeRole(GRAY);
}
           if(parts[0] == 'Black') {
            message.member.removeRole(GRAY);
}
           if(parts[0] == 'BLACK') {
            message.member.removeRole(GRAY);
}
           if(parts[0] == 'black') {
            message.member.removeRole(GRAY);
}
 if(parts[0] == 'Pink') {
            message.member.removeRole(GRAY);
}
           if(parts[0] == 'PINK') {
            message.member.removeRole(GRAY);
}
           if(parts[0] == 'pink') {
            message.member.removeRole(GRAY);
}
 if(parts[0] == 'Red') {
            message.member.removeRole(GRAY);
}
           if(parts[0] == 'RED') {
            message.member.removeRole(GRAU);
}
           if(parts[0] == 'red') {
            message.member.removeRole(GRAY);
}
            if(parts[0] == 'Blue') {
            message.member.removeRole(GRAY);
}
           if(parts[0] == 'BLUE') {
            message.member.removeRole(GRAY);
}
           if(parts[0] == 'blue') {
            message.member.removeRole(GRAY);
}
if(parts[0] == 'Purple') {
            message.member.addRole(PURPLE);
        }
        if(parts[0] == 'purple') {
            message.member.addRole(PURPLE);
        }
        if(parts[0] == 'PURPLE') {
            message.member.addRole(PURPLE);
        }
        if(parts[0] == 'Purple') {
            message.member.removeRole(BLACK);
        }
        if(parts[0] == 'Purple') {
            message.member.removeRole(BLUE);
        }
        if(parts[0] == 'Purple') {
            message.member.removeRole(RED);
        }
        if(parts[0] == 'Purple') {
            message.member.removeRole(PINK);
        }
        if(parts[0] == 'Purple') {
            message.member.removeRole(YELLOW);
        }
        if(parts[0] == 'Purple') {
            message.member.removeRole(GRAY);
        }
if(parts[0] == 'purple') {
message.member.removeRole(BLACK);
}
if(parts[0] == 'purple') {
message.member.removeRole(BLUE);
}
if(parts[0] == 'purple') {
message.member.removeRole(RED);
}
if(parts[0] == 'purple') {
message.member.removeRole(PINK);
}
if(parts[0] == 'purple') {
message.member.removeRole(YELLOW);
}
if(parts[0] == 'purple') {
message.member.removeRole(GRAY);
}
if(parts[0] == 'PURPLE') {
message.member.removeRole(BLACK);
}
if(parts[0] == 'PURPLE') {
message.member.removeRole(BLUE);
}
if(parts[0] == 'PURPLE') {
message.member.removeRole(RED);
}
if(parts[0] == 'PURPLE') {
message.member.removeRole(PINK);
}
if(parts[0] == 'PURPLE') {
message.member.removeRole(YELLOW);
}
if(parts[0] == 'PURPLE') {
message.member.removeRole(GRAY);
}
           if(parts[0] == 'Yellow') {
            message.member.removeRole(PURPLE);
}
           if(parts[0] == 'YELLOW') {
            message.member.removeRole(PURPLE);
}
           if(parts[0] == 'yellow') {
            message.member.removeRole(PURPLE);
}
           if(parts[0] == 'Black') {
            message.member.removeRole(PURPLE);
}
           if(parts[0] == 'BLACK') {
            message.member.removeRole(PURPLE);
}
           if(parts[0] == 'black') {
            message.member.removeRole(PURPLE);
}
 if(parts[0] == 'Pink') {
            message.member.removeRole(PURPLE);
}
           if(parts[0] == 'PINK') {
            message.member.removeRole(PURPLE);
}
           if(parts[0] == 'pink') {
            message.member.removeRole(PURPLE);
}
 if(parts[0] == 'Red') {
            message.member.removeRole(PURPLE);
}
           if(parts[0] == 'RED') {
            message.member.removeRole(PURPLE);
}
           if(parts[0] == 'red') {
            message.member.removeRole(PURPLE);
}
            if(parts[0] == 'Blue') {
            message.member.removeRole(PURPLE);
}
           if(parts[0] == 'BLUE') {
            message.member.removeRole(PURPLE);
}
           if(parts[0] == 'blue') {
            message.member.removeRole(PURPLE);
}
            if(parts[0] == 'Gray') {
            message.member.removeRole(PURPLE);
}
           if(parts[0] == 'GRAY') {
            message.member.removeRole(PURPLE);
}
           if(parts[0] == 'gray') {
            message.member.removeRole(PURPLE);
}
           if(parts[0] == '15') {
            message.member.removeRole(ONE);
}
           if(parts[0] == '15') {
            message.member.removeRole(THREE);
}
           if(parts[0] == '15') {
            message.member.removeRole(FOUR);
}
           if(parts[0] == '16') {
            message.member.removeRole(ONE);
}
           if(parts[0] == '16') {
            message.member.removeRole(THREE);
}
           if(parts[0] == '16') {
            message.member.removeRole(FOUR);
}
           if(parts[0] == '17') {
            message.member.removeRole(ONE);
}
           if(parts[0] == '17') {
            message.member.removeRole(THREE);
}
           if(parts[0] == '17') {
            message.member.removeRole(FOUR);
}
           if(parts[0] == '19') {
            message.member.removeRole(ONE);
}
           if(parts[0] == '19') {
            message.member.removeRole(TWO);
}
           if(parts[0] == '19') {
            message.member.removeRole(FOUR);
}
           if(parts[0] == '20') {
            message.member.removeRole(ONE);
}
           if(parts[0] == '20') {
            message.member.removeRole(TWO);
}
           if(parts[0] == '20') {
            message.member.removeRole(FOUR);
}
           if(parts[0] == '18') {
            message.member.removeRole(ONE);
}
           if(parts[0] == '18') {
            message.member.removeRole(TWO);
}
           if(parts[0] == '18') {
            message.member.removeRole(FOUR);
}

           if(parts[0] == '13') {
            message.member.removeRole(THREE);
}
           if(parts[0] == '13') {
            message.member.removeRole(TWO);
}
           if(parts[0] == '13') {
            message.member.removeRole(FOUR);
}
           if(parts[0] == '14') {
            message.member.removeRole(THREE);
}
           if(parts[0] == '14') {
            message.member.removeRole(TWO);
}
           if(parts[0] == '14') {
            message.member.removeRole(FOUR);
}
           if(parts[0] == '21') {
            message.member.removeRole(THREE);
}
           if(parts[0] == '21') {
            message.member.removeRole(TWO);
}
           if(parts[0] == '21') {
            message.member.removeRole(ONE);
}
           if(parts[0] == '22') {
            message.member.removeRole(THREE);

}
           if(parts[0] == '22') {
            message.member.removeRole(TWO);
}
           if(parts[0] == '22') {
            message.member.removeRole(ONE);
}
           if(parts[0] == '23') {
            message.member.removeRole(THREE);
}
           if(parts[0] == '23') {
            message.member.removeRole(TWO);
}
           if(parts[0] == '23') {
            message.member.removeRole(ONE);
}
           if(parts[0] == '24') {
            message.member.removeRole(THREE);
}
           if(parts[0] == '24') {
            message.member.removeRole(TWO);
}
           if(parts[0] == '24') {
            message.member.removeRole(ONE);
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
