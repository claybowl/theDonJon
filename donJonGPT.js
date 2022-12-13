#!/usr/bin/node
const Discord = require('discord.js');
const ChatGPT = require('chatgpt');

// Replace with your bot's token and application ID
const BOT_TOKEN = 'MTA1MjE1MTIwOTYxMzYwMjg1Nw.GF5b38.ZYDLSrpTgGFoaYvkuj0hT8-8AwUUrDkGtSBDME';
const APPLICATION_ID = '1052151209613602857';

// Create a new Discord client
const client = new Discord.Client();

// Authenticate the client with the Discord API
client.login(BOT_TOKEN);

// Once the client is ready, add a message listener
client.on('ready', () => {
  console.log('Bot is ready to listen for messages');

  // Listen for messages on the server
  client.on('message', message => {
    // Check if the message is from the bot
    if (message.author.id === APPLICATION_ID) {
      return;
    }

    // Use the ChatGPT model to generate a response
    const response = ChatGPT.generateResponse(message.content);

    // Send the response back to the server
    message.channel.send(response);
  });
});
