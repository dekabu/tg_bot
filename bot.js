#!/bin/node

const { Telegraf } = require('telegraf')
const fs = require('fs')
const exec = require('child_process').execSync

let token

try {
	token = fs.readFileSync('token')
}
catch {
	console.log('No token!')
	process.exit(1)
}

const bot = new Telegraf(token)

bot.start(ctx => ctx.reply('Hello world!'))

bot.command(['tex', 'ltx', 'latex', 'formula'], ctx => {
	arg = ctx.text
	arg = arg.substr(arg.indexOf(' ') + 1)
	exec('./latex2png.sh "' + arg + '"')
	ctx.replyWithPhoto({source: 'main1.png'})
})

bot.launch()

