const { Telegraf } = require("telegraf");
const TOKEN = "6456398897:AAEP2j09JLgqluudftxWMSxDujmFT4sws6g";
const bot = new Telegraf(TOKEN);

const web_link = "https://testingbot-8rcz.onrender.com";

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
