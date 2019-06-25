const commando = require('discord.js-commando');
const discord = require('discord.js');
const client = require('nekos.life');
const neko = new client();

class kitsuneCommand extends commando.Command
{
    constructor(client)
    {
        super(client,
        {
            name:'kitsune_nsfw',
            group:'images',
            memberName: 'kitsune_nsfw',
            description: 'nsfw neko.'
        })
    }

    async run(message, args)
    {
        if(message.channel.nsfw == false){
            message.reply("this channel isn't nsfw");
            return;
        }
        var chance = Math.floor(Math.random() * 2);
        if (chance == 0){
            kkitsune = await neko.nsfw.kitsune();
        }
        else 
        {
            kkitsune = await await neko.nsfw.kitsuneGif();
        }
        console.log(kkitsune)
        var ws = new discord.RichEmbed()
        .addField("kitsune", ":3", true)
        .setColor("#FF69B4")
        .setImage(kkitsune.url)
        .setFooter("powered by nekos.life <3")
        message.channel.sendEmbed(ws);
    }
}

module.exports = kitsuneCommand;