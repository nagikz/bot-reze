const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds
    ]
});

client.once('ready', () => {
    console.log(`Bot conectado como ${client.user.tag}`);
});

client.login(process.env.MTU1NDk1NDY4NzQ3ODc2Nzc2OA.GhRxAO.PlhtA4FjIBB1xcklhRQwha1ajVyZJ-54n5zyHo);