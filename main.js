const Discord = require("discord.js")
const client = new Discord.Client()
const fs = require("fs")
require('dotenv').config()
client.commands = new Discord.Collection()

function replaceAll(string, search, replace) {
    return string.split(search).join(replace)
}

client.login(process.env.token).then(() => {
    console.log("Connexion réussi")
    client.user.setPresence({
        status: 'idle',
        activity: {
            name: '/lmgtfy <research>',
            type: 'PLAYING'
        }
    }).then(r => {})
})

fs.readdirSync("./commands/").filter(file => file.endsWith(".js")).forEach((f) => {
    let pull = require(`./commands/${f}`)
    if (pull.help.name) {
        client.commands.set(pull.help.name, pull)
        return console.log(`La commande ${pull.help.name} à bien été chargé`)
    }
    return console.log(`La commande ${f} n'es pas chargée, il dois manquer une info dans le module 'help'`)
})

fs.readdirSync('./events/').filter(file => file.endsWith(".js")).forEach((f) => {
    let events = require(`./events/${f}`)
    let event = f.split('.')[0]
    client.on(event, events.bind(null, client))
    console.log(`Event | ${event} chargé`)
})
