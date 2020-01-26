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
const BLACK = '669967929814548487';
const GRAY = '669855567678013460';
const PURPLE = '669871307365679107';
const GREEN = '669965891747971073';
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
if(parts[0] == 'Green') {
            message.member.addRole(GREEN);
        }
        if(parts[0] == 'green') {
            message.member.addRole(GREEN);
        }
        if(parts[0] == 'GREEN') {
            message.member.addRole(GREEN);
        }
        if(parts[0] == 'Green') {
            message.member.removeRole(BLACK);
        }
        if(parts[0] == 'Green') {
            message.member.removeRole(BLUE);
        }
        if(parts[0] == 'Green') {
            message.member.removeRole(RED);
        }
        if(parts[0] == 'Green') {
            message.member.removeRole(PINK);
        }
        if(parts[0] == 'Green') {
            message.member.removeRole(YELLOW);
        }
if(parts[0] == 'Green') {
message.member.removeRole(GRAY);
}
if(parts[0] == 'Green') {
message.member.removeRole(PURPLE);
}
if(parts[0] == 'green') {
message.member.removeRole(BLACK);
}
if(parts[0] == 'green') {
message.member.removeRole(BLUE);
}
if(parts[0] == 'green') {
message.member.removeRole(RED);
}
if(parts[0] == 'green') {
message.member.removeRole(PINK);
}
if(parts[0] == 'green') {
message.member.removeRole(YELLOW);
}
if(parts[0] == 'green') {
message.member.removeRole(GRAY);
}
if(parts[0] == 'green') {
message.member.removeRole(PURPLE);
}
if(parts[0] == 'GREEN') {
message.member.removeRole(BLACK);
}
if(parts[0] == 'GREEN') {
message.member.removeRole(BLUE);
}
if(parts[0] == 'GREEN') {
message.member.removeRole(RED);
}
if(parts[0] == 'GREEN') {
message.member.removeRole(PINK);
}
if(parts[0] == 'GREEN') {
message.member.removeRole(YELLOW);
}
if(parts[0] == 'GREEN') {
message.member.removeRole(GRAY);
}
if(parts[0] == 'GREEN') {
message.member.removeRole(PURPLE);
}
           if(parts[0] == 'Yellow') {
            message.member.removeRole(GREEN);
}
           if(parts[0] == 'YELLOW') {
            message.member.removeRole(GREEN);
}
           if(parts[0] == 'yellow') {
            message.member.removeRole(GREEN);
}
           if(parts[0] == 'Black') {
            message.member.removeRole(GREEN);
}
           if(parts[0] == 'BLACK') {
            message.member.removeRole(GREEN);
}
           if(parts[0] == 'black') {
            message.member.removeRole(GREEN);
}
 if(parts[0] == 'Pink') {
            message.member.removeRole(GREEN);
}
           if(parts[0] == 'PINK') {
            message.member.removeRole(GREEN);
}
           if(parts[0] == 'pink') {
            message.member.removeRole(GREEN);
}
 if(parts[0] == 'Red') {
            message.member.removeRole(GREEN);
}
           if(parts[0] == 'RED') {
            message.member.removeRole(GREEN);
}
           if(parts[0] == 'red') {
            message.member.removeRole(GREEN);
}
            if(parts[0] == 'Blue') {
            message.member.removeRole(GREEN);
}
           if(parts[0] == 'BLUE') {
            message.member.removeRole(GREEN);
}
           if(parts[0] == 'blue') {
            message.member.removeRole(GREEN);
}
if(parts[0] == 'Gray') {
message.member.removeRole(GREEN);
}
if(parts[0] == 'GRAY') {
message.member.removeRole(GREEN);
}
if(parts[0] == 'gray') {
message.member.removeRole(GREEN);
}
if(parts[0] == 'Purple') {
message.member.removeRole(GREEN);
}
if(parts[0] == 'PURPLE') {
message.member.removeRole(GREEN);
}
if(parts[0] == 'purple') {
message.member.removeRole(GREEN);
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


///////////////////////
//////////////////////
//////////////////////

// Configuration & Settings
const yourID = "263639609416613888"; //Instructions on how to get this: https://redd.it/40zgse
const setupCMD = "!createrolemessage";
const initialMessage = `**React to the messages below to receive the associated role. If you would like to remove the role, simply remove your reaction!**`;
const embedMessage = `
React to the emoji that matches the role you wish to receive.
If you would like to remove the role, simply remove your reaction!
`;
const embedFooter = "Role Reactions"; // Must set this if "embed" is set to true
const roles = ["MALE", "Female", "NICE", "BAD"];
const reactions = ["👦", "👧", "😇", "😈"]; // For custom emojis, provide the name of the emoji
const embed = false; // Set to "true" if you want all roles to be in a single embed
const embedColor = "#dd2423"; // Set the embed color if the "embed" variable is set to true
const embedThumbnail = true; // Set to "true" if you want to set a thumbnail in the embed
const embedThumbnailLink = "https://i.imgur.com/P8PD7DD.png"; // The link for the embed thumbnail

/**
 * You'll have to set this up yourself! Read more below:
 * 
 * https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token
 */

// Import constructords and login the client
const { Client, RichEmbed, Emoji, MessageReaction } = require('discord.js');
const client = new Client({ disableEveryone: true });


// If there isn't a reaction for every role, scold the user!
if (roles.length !== reactions.length) throw "Roles list and reactions list are not the same length!";

// Function to generate the role messages, based on your settings
function generateMessages() {
    let messages = [];
    for (const role of roles) messages.push({ role, message: `React below to get the **"${role}"** role!` }); //DONT CHANGE THIS
    return messages;
}

// Function to generate the embed fields, based on your settings and if you set "const embed = true;"
function generateEmbedFields() {
    return roles.map((r, e) => {
        return {
            emoji: reactions[e],
            role: r
        };
    });
}

function checkRole(guild, role) {
    const checkRole = guild.roles.find(r => r.name === role);
    if (checkRole) return true;
    else return false;
}

// Client events to let you know if the bot is online and to handle any Discord.js errors
bot.on("ready", () => console.log("Bot is online!"));
bot.on('error', console.error);

// Handles the creation of the role reactions. Will either send the role messages separately or in an embed
bot.on("message", message => {
    if(!message.member.hasPermission('ADMINISTRATOR') && message.content.toLowerCase() == setupCMD) {

        if (!embed) {
            if (!initialMessage) throw "The 'initialMessage' property is not set. Please do this!";

            message.channel.send(initialMessage);

            const messages = generateMessages();
            messages.forEach((obj, react) => {
                if (!checkRole(message.guild,obj.role)) message.channel.send( `The role '${obj.role}' does not exist!them Go and make them`).then(m => m.delete(3000))
         
 message.delete(5000); 

		    
                message.channel.send(obj.message).then(async m => {
                    const emoji = reactions[react];
                    const customEmote = bot.emojis.find(e => e.name === emoji);
                    
                    if (!customEmote) await m.react(emoji);
                    else await m.react(customEmote.id);
                });
            });
        } else {
            if (!embedMessage) throw "The 'embedMessage' property is not set. Please do this!";
            if (!embedFooter) throw "The 'embedFooter' property is not set. Please do this!";

            const roleEmbed = new RichEmbed()
                .setDescription(embedMessage)
                .setFooter(embedFooter);

            if (embedColor) roleEmbed.setColor(embedColor);
            if (embedThumbnail) roleEmbed.setThumbnail(embedThumbnailLink);


            const fields = generateEmbedFields();
            if (fields.length >= 25) throw "That maximum roles that can be set for an embed is 25!";

            for (const f of fields) {
                if (!checkRole(message.guild, f.role)) message.channel.send( ` The role '${role}' does not exist! Go and make them `).then(m => m.delete(3000));
                    
         return;
  
       message.guild.createRole({
                    name: ($role),
                      color: "#FFB6C1",
                      permissions: []
       })
message.delete(5000); 
    
                const emoji = f.emoji;
                const customEmote = bot.emojis.find(e => e.name === emoji);
                
                if (!customEmote) roleEmbed.addField(emoji, f.role, true);
                else roleEmbed.addField(customEmote, f.role, true);
            }

            message.channel.send(roleEmbed).then(async m => {
                for (const r of reactions) {
                    const emoji = r;
                    const customEmote = bot.emojis.find(e => e.name === emoji);
                    
                    if (!customEmote) await m.react(emoji);
                    else await m.react(customEmote.id);
                }
            });
        }
    }
});

// This makes the events used a bit more readable
const events = {
	MESSAGE_REACTION_ADD: 'messageReactionAdd',
	MESSAGE_REACTION_REMOVE: 'messageReactionRemove',
};

// This event handles adding/removing users from the role(s) they chose
bot.on('raw', async event => {

    if (!events.hasOwnProperty(event.t)) return;

    const { d: data } = event;
    const user = bot.users.get(data.user_id);
    const channel = bot.channels.get(data.channel_id);

    const message = await channel.fetchMessage(data.message_id);
    const member = message.guild.members.get(user.id);

    const emojiKey = (data.emoji.id) ? `${data.emoji.name}:${data.emoji.id}` : data.emoji.name;
    let reaction = message.reactions.get(emojiKey);

    if (!reaction) {
        // Create an object that can be passed through the event like normal
        const emoji = new Emoji(client.guilds.get(data.guild_id), data.emoji);
        reaction = new MessageReaction(message, emoji, 1, data.bot_id === bot.user.id);
    }

    let embedFooterText;
    if (message.embeds[0]) embedFooterText = message.embeds[0].footer.text;

    if (message.author.id === bot.user.id && (message.content !== initialMessage || (message.embeds[0] && (embedFooterText !== embedFooter)))) {

        if (!embed) {
            const re = `\\*\\*"(.+)?(?="\\*\\*)`;
            const role = message.content.match(re)[1];

            if (member.id !== bot.user.id) {
                const roleObj = message.guild.roles.find(r => r.name === role);

                if (event.t === "MESSAGE_REACTION_ADD") {
                    member.addRole(roleObj.id);
                } else {
                    member.removeRole(roleObj.id);
                }
            }
        } else {
            const fields = message.embeds[0].fields;

            for (let i = 0; i < fields.length; i++) {
                if (member.id !== bot.user.id) {
                    const role = message.guild.roles.find(r => r.name === fields[i].value);

                    if ((fields[i].name === reaction.emoji.name) || (fields[i].name === reaction.emoji.toString())) {
                        if (event.t === "MESSAGE_REACTION_ADD") {
                            member.addRole(role.id);
                            break;
                        } else {
                            member.removeRole(role.id);
                            break;
                        }
                    }
                }
            }
        }
    }
});

process.on('unhandledRejection', err => {
    let msg = err.stack.replace(new RegExp(`${__dirname}/`, 'g'), './');
	console.error(`Unhandled Rejection: \n ${msg}`);
});
