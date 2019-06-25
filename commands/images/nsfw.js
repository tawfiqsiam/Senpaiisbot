const commando = require('discord.js-commando');
const discord = require('discord.js');
const client = require('nekos.life');
const neko = new client();
//credits kawaii#9523
class NekoCommand extends commando.Command
{
    constructor(client)
    {
        super(client,
        {
            name:'porn',
            group:'images',
            memberName: 'nsfw',
            description: 'nsfw with hentai - boobs - anal'
        })
    }

    async run(message, args)
    {
        if(message.channel.nsfw == false){
            message.reply("this channel isn't nsfw");
            return;
        }
        var nneko;
        if (args  == "hentai")
            nneko = await neko.nsfw.hentai();
        else if(args == "boobs")
            nneko = await neko.nsfw.boobs();
        else if (args == "anal")
            nneko = await neko.nsfw.anal();
        else
        {
            message.channel.send("`You have to provide a valid argument!`")
            return;
        }
        console.log(nneko)
        var ws = new discord.RichEmbed()
        .addField("neko", "nya~", true)
        .setColor("#FF69B4")
        .setImage(nneko.url)
        .setFooter("powered by nekos.life <3")
        message.channel.sendEmbed(ws);
    }

}

module.exports = NekoCommand;