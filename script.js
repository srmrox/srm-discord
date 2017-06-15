const Discord = require('discord.js');
const client = new Discord.Client();
const firebase = require('firebase');

client.on('ready', () => {
    console.log(`ready!`);
});
var SERVER;
var prefix = "!";
client.on('message', message => {
    if (!message.author.bot) {
        var server_commands = SERVER.channels.find("name", "server_commands");

        if (message.content.startsWith((prefix))) {

            var args = message.content.split(" ");
            var command = args[0].replace(prefix, '');

            console.log(message.author.username + " sent: " + message.content);

            if (command === "foo") {
                message.channel.send("bar");
            }
        }
    }
});