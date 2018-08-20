const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");

var bot = new Discord.Client();
var prefix = ("-");


bot.on('ready', () => {
    bot.user.setPresence({ game: { name: '-help', type: 0}});
    console.log("Bot pret !");
});

bot.login('process.env.BOT_TOKEN');

bot.on('message', message => {
    if (message.content === "ping"){
    message.reply("pong");
    console.log('ping, pong');
    }

    //commande help
    if (message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
        .setColor('#FE0101')
        .addField(":page_facing_up: Commandes :", "    Utilise la commande **-help** pour afficher toutes les commandes de **ModBot !**\n Utilise la commande **-jeux** pour jouer à tous les jeux de **ModBot !**\n Utilise la commande **-infos** pour afficher toutes les infos sur **ModBot !**\n Utilise la commande **-news** pour afficher toutes les nouveautés de **ModBot !**")
        .setFooter("By WayZy")
        message.channel.sendEmbed(help_embed);
        message.delete(2)
        //message.channel.sendMessage("Voici les commandes du bot :\n-help pour afficher les commandes");
        console.log("commande help demandée !");
        }

        //commande news
        if (message.content === prefix + "news"){
            var help_embed = new Discord.RichEmbed()
            .setColor('#FE0101')
            .addField(":gear: Toutes les nouveautés de ModBot !", "⁢⁢⁢⁢⁢ ⁢⁢⁢⁢⁢ ⁢⁢⁢⁢⁢ ⁢⁢⁢⁢⁢ ⁢⁢⁢⁢⁢ ")
            .addField(":tools: Ajout de commandes de modérations :tools:", "La commande **-kick** & la commande **-ban** ont été ajoutés !")
            .setFooter("By WayZy")
            message.channel.sendEmbed(help_embed);
            message.delete(2)
            //message.channel.sendMessage("Voici les commandes du bot :\n-help pour afficher les commandes");
            console.log("commande help demandée !");
            }

        //commande jeu

        if (message.content === prefix + "jeux"){
            var help_embed = new Discord.RichEmbed()
            .setColor('#FE0101')
            .addField(":computer:  Commandes jeux :", "    Aucun jeu pour le moment")
            .setFooter("By WayZy")
            message.channel.sendEmbed(help_embed);
            message.delete(2)
            //message.channel.sendMessage("Voici les commandes du bot :\n-help pour afficher les commandes");
            console.log("commande help demandée !");
            }
        
            //commande pierre feuille ciseaux
            if (message.content === prefix + "ppc"){
                var help_embed = new Discord.RichEmbed()
                .setColor('#FE0101')
                .addField(":fist: :hand_splayed: :v: Pierre papier ciseau :", "    Acutellement en développement !")
                message.channel.sendEmbed(help_embed);
                message.delete(2)
                //message.channel.sendMessage("Voici les commandes du bot :\n-help pour afficher les commandes");
                console.log("commande help demandée !");
                }

                //commande infos
                if (message.content === prefix + "infos"){
                    var help_embed = new Discord.RichEmbed()
                    .setColor('#FE0101')
                    .addField(":paperclip: Informations sur le bot :", "    Développer par WayZy ! :flag_fr: Bot Français ! :flag_fr:")
                    .setImage("https://image.noelshack.com/fichiers/2018/33/5/1534460679-a9e6c19899c0095fd1fe81d50e2f305f.png")
                    .setFooter("By WayZy")
                    message.channel.sendEmbed(help_embed);
                    message.delete(2)
                    //message.channel.sendMessage("Voici les commandes du bot :\n-help pour afficher les commandes");
                    console.log("commande help demandée !");
                    }

                    bot.on("guildMmeberAdd", member =>{
                        member.guild.channels.find("name", "general").sendn(`Bienvenue ${member}`)
                    })

                    bot.on("guildMemberRemove", member => {
                        member.guild.channels.find("name", "general").send(`${member} viens de nous quitter`)
                    })

                    bot.on('guildMemberAdd', member => {
                        var role = member.guild.roles.find('name', 'Membres');
                    })

                    //commande de kick
                    if (message.content.startsWith('-kick')) {
                        message.delete(2)
                    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Vous n'avez pas le droit de kick un utilisateur !");


                        const user = message.mentions.users.first();
        
                        if (user) {
        
                        const member = message.guild.member(user);
        
                        if (member) {
        
        
                            member.kick('Kick par ModBot !').then(() => {
        
                            message.reply(`:exclamation: Vous venez de kick ${user.tag} :exclamation:`);
                                }).catch(err => {
                                message.reply('Vous n avez pas la permissions de kick, ou vous ne pouvez pas kick cette personne !');
                            console.error(err);
                            });
                        } else {
                            message.reply('2');
                        }
                        } else {
                             message.reply('Pour kick une personne vous devez faire la commande -kick et metionner la personne à kick !');
                     }
                    }
        
                    //commande de ban
                    if (message.content.startsWith('-ban')) {
                        message.delete(2)
                    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Vous n'avez pas le droit de ban un utilisateur !");        
        
                        const user = message.mentions.users.first();
        
                        if (user) {
        
                        const member = message.guild.member(user);
        
                        if (member) {
        
        
                            member.ban('Ban par ModBot !').then(() => {
        
                            message.reply(`:exclamation: Vous venez de ban ${user.tag} :exclamation:`);
                                }).catch(err => {
                                message.reply('Vous n avez pas la permissions de ban, ou vous ne pouvez pas ban cette personne !');
                            console.error(err);
                            });
                        } else {
                            message.reply('2');
                        }
                        } else {
                             message.reply('Pour ban une personne vous devez faire la commande -ban et metionner la personne à bannir !');
                     }
                    }


});
     
