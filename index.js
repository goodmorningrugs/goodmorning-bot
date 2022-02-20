// Takes information in discord.js, put its in a variable called "Discord"
const Discord = require("discord.js")
require("dotenv").config()

// Creating a bot client, which is what is used to access the discord API
const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

// Ready Event Listener: Triggered when the bot succesfully logs in with the provided token.
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "order"){
        message.reply("Hello World!")
    }
})

client.login(process.env.TOKEN)