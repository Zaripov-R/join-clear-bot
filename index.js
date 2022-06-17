require('dotenv').config()
const { Telegraf } = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) => {
    ctx.reply(`Здравствуйте, ${ctx.message.chat.first_name}`)
})

bot.on('message', ctx => {
    if (ctx.message.new_chat_member || ctx.message.left_chat_member) {
        ctx.deleteMessage(ctx.message.message_id)
    }
})

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))