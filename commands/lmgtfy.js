module.exports.run = async (client, message, args) => {
    if(message.channel.type !== 'dm') message.delete()
    if(args.length == 0) return message.channel.send(process.env.lien + ["Apprend", "à", "utiliser", "le", "bot", "stp"].join("+"))

    message.channel.send(process.env.lien + args.join("+"))
}

module.exports.help = {
    name: "lmgtfy"
}
