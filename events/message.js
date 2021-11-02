module.exports = async (client, message) => {
    if (message.author.bot) return
    if (!message.content.startsWith(process.env.prefix)) return

    let messageArray = message.content.split(" ")
    let cmd = messageArray[0].toLowerCase()
    let args = messageArray.slice(1)

    let commandfile = client.commands.get(cmd.slice(process.env.prefix.length))
    if(commandfile) commandfile.run(client,message,args)
}
