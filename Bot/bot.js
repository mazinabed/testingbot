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
bot.on('message', (ctx) => {
  try {
    const receivedData = JSON.parse(ctx.message.web_app_data.data);
    console.log('Received data from user:', receivedData);
    return ctx.reply(receivedData)
    // Process the received data as needed
  } catch (error) {
    console.error('Error parsing received data:', error);
  }
});
// bot.on("message", async (ctx) => {
//   console.log(ctx.message.web_app_data)
//   return ctx.reply(ctx.message.web_app_data.data)

// });
bot.on('text', (ctx) => {
  const receivedData = ctx.message.text;
  console.log('Received data from user:', receivedData);
  // Process the received data as needed
});





bot.launch();
