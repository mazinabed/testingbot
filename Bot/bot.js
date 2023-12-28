const { Telegraf } = require("telegraf");
const TOKEN = "6456398897:AAEP2j09JLgqluudftxWMSxDujmFT4sws6g";
const bot = new Telegraf(TOKEN);

const web_link = "https://testingbot-8rcz.onrender.com";
const channelId = "@babyloncenter_net"; // Replace with your channel username or ID
bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);
bot.on('message', (ctx) => {
  // try {
  //   const receivedData = JSON.parse(ctx.message.web_app_data.data);
  //   console.log('Received data from user:', receivedData);
  //   const Data2 = receivedData.cartItems[0].tilte
  //   return ctx.reply(Data2)
    // Process the received data as needed
    try {
      const receivedData = JSON.parse(ctx.message.web_app_data.data);
      console.log('Received data from user:', receivedData);
      // Extract cartItems from received data
      const cartItems = receivedData.cartItems;
      const phoneNumber = receivedData.phoneNumber;
      const address = receivedData.address;
      // Assuming cartItems is an array
      for (const item of cartItems) {
        const title = item.title;
        const price = item.price;
        
  
        // Now you can use title and price as needed
        console.log('Received item - Title:', title, 'Price:', price);
  console.log(receivedData)
   // Send the order details to the Telegram channel
 

        // Send a response to the user or perform any other actions
        ctx.reply(
         ` ${ctx.from.first_name}\n`+
          ` Received item:\n` +
          `- *Title*: ${title}\n` +
          `- *Price*: ${price}\n` +
          `- *Phone Number*: ${phoneNumber}\n` +
          `- *Address*: ${address}`
        );
        const message = `New order received:\n` +
        ` ${ctx.from.first_name}\n`+
        `- *Title*: ${title}\n` +
        `- *Price*: ${price}\n` +
        `- *Phone Number*: ${phoneNumber}\n` +
        `- *Address*: ${address}`;
     
      bot.telegram.sendMessage(channelId, message, { parse_mode: 'Markdown' });
        //ctx.reply(`Received additional info - Phone Number: ${phoneNumber}, Address: ${address}`);
        bot.on('message', (ctx) => {
          const chatId = ctx.chat.id;
          console.log('Chat ID:', chatId);
        });
      }

  } catch (error) {
    console.error('Error parsing received data:', error);
  }
});
// bot.on("message", async (ctx) => {
//   console.log(ctx.message.web_app_data)
//   return ctx.reply(ctx.message.web_app_data.data)

// });
bot.on('text', (ctx) => {
  const Data = ctx.message.text;
  console.log('Received data from user:', Data);
  // Process the received data as needed
});





bot.launch();

