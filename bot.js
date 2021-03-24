require('dotenv').config()

const { Client} = require('discord.js');
const client = new Client();
let Jimp = require('Jimp');
let fs = require('fs');


let rand = Math.floor(Math.random() *10);

client.on('ready', () => {
        console.log(`${client.user.tag} logged in`)
});

client.on('message', (message) =>{
    if(message.author.bot) return;

    else if(message.content === ('-help')){
        
        message.channel.send(`@everyone ,${message.author} needs help with his homework or something idc`)
    }


    if(message.content === 'hi'){
        switch (rand){
            case 0:
                message.channel.send(`hello ${message.author.username}`);
                rand = Math.floor(Math.random*10);
                break;
            case 1:
                message.channel.send('hi');
                rand = Math.floor(Math.random*10);
                break;
            case 2:
                message.channel.send('hey');
                rand = Math.floor(Math.random*10);
                break;
            case 3:
                message.channel.send('whatsup');
                rand = Math.floor(Math.random*10);
                break;
            case 4:
                message.channel.send('Hi');
                rand = Math.floor(Math.random*10);
                break;
            case 5:
                message.channel.send('rand');
                rand = Math.floor(Math.random*10);
                break;
            case 6:
                message.channel.send('Hey');
                rand = Math.floor(Math.random*10);
                break;
            case 7:
                message.channel.send('Whatsup');
                rand = Math.floor(Math.random*10);
                break;
            case 8:
                message.channel.send('Hiiiiiii');
                rand = Math.floor(Math.random*10);
                break;
            case 9:
                message.channel.send('Hiii');
                rand = Math.floor(Math.random*10);
                break;

        }
    }


    else if(message.content === '-spam'){
        for(i =0;i <10;i++){
            message.channel.send(`this spam was provided by ${message.author.username}`);
        }
            
    } 
    else if(message.content === 'whos joe'){
            message.channel.send('Joe mama (please laught)');
            
    } 
    else if(message.content.includes('-s')){
        message.channel.send(message.content.replace('-s',''));
    }
    else if(message.content.includes('-rev')){
        message.channel.send(message.content.replace('-rev','').split('').reverse().join(''));
    }
    else if(message.content === ('ping')){
        message.channel.send('pong');
    }
    else if(message.content === ('pong')){
        message.channel.send('ping');
    }
    else if(message.content.includes('Childish bot')){
        message.channel.send('what do you want');
    }

    else if(message.content.includes('fuck')){
        message.channel.send('that was very rude');
    }

    else if(message.content.includes('-password')){  
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789"
        let Ranlet = alphabet[Math.floor(Math.random() * alphabet.length)]
        let Ranlet2 = alphabet[Math.floor(Math.random() * alphabet.length)]
        for(i = 1;i < 10 ;i++){
            Ranlet += Ranlet2;
            Ranlet2 = alphabet[Math.floor(Math.random() * alphabet.length)];
        }

        message.channel.send(Ranlet);
    }
    
    else if(message.content.includes('-number')){

        
        message.channel.send(rand);
        rand = Math.floor(Math.random() *10);
    }

    else if(message.content.includes('-%')){

        let percent = Math.round(Math.random()*100);
        message.channel.send(`${percent}%`);
        percent = Math.round(Math.random()*100);
    }

    else if(message.content.includes('-yn')){
        let yncount = Math.random();
        if(yncount >= 0.5){
            message.channel.send('yes');
        }else{
            message.channel.send('no');
        }
        yncount = Math.random();
    }


    if(message.content.includes('-meme')){
        const args = message.content.split(" ")
        let command = args[0];
        command = command.slice("-meme".length)
        const [toptext, bottomtext] = args.slice(1).join(" ").split(",");
        message.channel.startTyping();
        Jimp.read(message.attachments.first(), (err, lenna) => {
            Jimp.loadFont(Jimp.FONT_SANS_128_WHITE).then(font => {
                if(err) throw err;
                lenna
                    .resize(1280,1280)
                    .quality(100)

                    .print(
                        font,75,50, {
                            text: toptext,
                            alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
                            alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE
                        },
                        1100
                    )
                    .print(
                        font,75,1040, {
                            text: bottomtext,
                            alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
                            alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE
                        },
                        1100
                    )
                    .write(`./${message.author.id}.jpg`);
                    
            });
        });

        for(i = 0; i < (1);i++) {
            setTimeout(function() {
                message.channel.send({
                    files: [`./${message.author.id}.jpg`]
                })
                message.channel.stopTyping();
                for(i = 0; i < (1); i++){
                    setTimeout(function() {
                        fs.unlinkSync(`./${message.author.id}.jpg`)
                    }, 3 * 1000)
                }
            }, 3 * 1000)
        }
        
    }
    if (message.content.startsWith('-avatar')) {
        const user = message.mentions.users.first() || message.author;
        let au = user.avatarURL({ format:'png' })
        message.channel.send(au);
    }
});

client.login(process.env.DISCORDJS_BOT_TOKEN);