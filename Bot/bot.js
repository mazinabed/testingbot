// const { Telegraf } = require("telegraf");
// const TOKEN = "6456398897:AAEP2j09JLgqluudftxWMSxDujmFT4sws6g";
// const bot = new Telegraf(TOKEN);

// const web_link = "https://testingbot-8rcz.onrender.com";
// const channelId = "@babyloncenter_net"; // Replace with your channel username or ID
// bot.start((ctx) =>
//   ctx.reply("Welcome :)))))", {
//     reply_markup: {
//       keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
//     },
//   })
// );
// bot.on('message', (ctx) => {
//   // try {
//   //   const receivedData = JSON.parse(ctx.message.web_app_data.data);
//   //   console.log('Received data from user:', receivedData);
//   //   const Data2 = receivedData.cartItems[0].tilte
//   //   return ctx.reply(Data2)
//     // Process the received data as needed
//     try {
//       const receivedData = JSON.parse(ctx.message.web_app_data.data);
//       console.log('Received data from user:', receivedData);
//       // Extract cartItems from received data
//       const cartItems = receivedData.cartItems;
//       const phoneNumber = receivedData.phoneNumber;
//       const address = receivedData.address;
//       // Assuming cartItems is an array
//       for (const item of cartItems) {
//         const title = item.title;
//         const price = item.price;
        
  
//         // Now you can use title and price as needed
//         console.log('Received item - Title:', title, 'Price:', price);
//   console.log(receivedData)
//    // Send the order details to the Telegram channel
 

//         // Send a response to the user or perform any other actions
//         ctx.reply(
//          ` ${ctx.from.first_name}\n`+
//           ` Received item:\n` +
//           `- *Title*: ${title}\n` +
//           `- *Price*: ${price}\n` +
//           `- *Phone Number*: ${phoneNumber}\n` +
//           `- *Address*: ${address}`
//         );
//         const message = `New order received:\n` +
//         ` ${ctx.from.first_name}\n`+
//         `- *Title*: ${title}\n` +
//         `- *Price*: ${price}\n` +
//         `- *Phone Number*: ${phoneNumber}\n` +
//         `- *Address*: ${address}`;
     
//       bot.telegram.sendMessage(channelId, message, { parse_mode: 'Markdown' });
//         //ctx.reply(`Received additional info - Phone Number: ${phoneNumber}, Address: ${address}`);
//         bot.on('message', (ctx) => {
//           const chatId = ctx.chat.id;
//           console.log('Chat ID:', chatId);
//         });
//       }

//   } catch (error) {
//     console.error('Error parsing received data:', error);
//   }
// });
// // bot.on("message", async (ctx) => {
// //   console.log(ctx.message.web_app_data)
// //   return ctx.reply(ctx.message.web_app_data.data)

// // });
// bot.on('text', (ctx) => {
//   const Data = ctx.message.text;
//   console.log('Received data from user:', Data);
//   // Process the received data as needed
// });





// bot.launch();

// import { Telegraf } from 'telegraf';
// const { Telegraf } = require("telegraf");
// // Other imports...

// const BOT_TOKEN = "6965610325:AAEERGjZAkBxerCGYOJdhEzfSUKDZ_LYEWA";
// const ENVIRONMENT = process.env.NODE_ENV || '';

// const bot = new Telegraf(BOT_TOKEN);

// const webLink = 'https://testingbot-8rcz.onrender.com';

// // Replace the placeholder with your group ID
// const groupId = "@testing2_2023"; // Replace with your group ID

// // Variable to store the last sent message ID
// let sentMessageId;

// bot.start((ctx) =>
//   ctx.reply('اهلا وسهلا بكم في مطعمكم!', {
//     reply_markup: {
//       keyboard: [[{ text: 'اضغط هنا لفتح قائمة الطعام', web_app: { url: webLink } }]],
//     },
//   })
// );
// // Handler for messages with web_app_data sent to the bot
// bot.on('message', async (ctx) => {
//   try {
//     const webAppData = ctx.message && ctx.message.web_app_data;

//     if (webAppData && webAppData.data) {
//       // Process messages with web_app_data
//       const receivedData = JSON.parse(webAppData.data);
//       const cartItems = receivedData.cartItems;
//       const phoneNumber = receivedData.phoneNumber;
//       const address = receivedData.address;
//       const notice = receivedData.notice;
//       const totalPrice = receivedData.totalPrice;

//       const orderDetails = [];

//       for (const item of cartItems) {
//         const title = item.title;
//         const price = item.price;
//         const quantity = item.quantity;
//         orderDetails.push(`- المادة: ${title}, السعر: ${price}, العدد: ${quantity}`);
//       }

//       const orderMessage = orderDetails.join('\n');

//       ctx.replyWithMarkdown(
//         `${ctx.from.first_name}\n` +
//         `تم ارسال الطلب التالي:\n` +
//         `${orderMessage}\n` +
//         `- المجموع: د ${totalPrice.toFixed(2)}\n`+
//         `- *رقم الهاتف*: ${phoneNumber}\n` +
//         `- *العنوان*: ${address}\n` +
//         `- *الملاحظات*: ${notice}`
//       );

//       const channelMessage = `تم استلام طلب جديد:\n` +
//         `${ctx.from.first_name}\n` +
//         `${orderMessage}\n` +
//         `- المجموع: د ${totalPrice.toFixed(2)}\n`+
//         `- رقم الهاتف: ${phoneNumber}\n` +
//         `- العنوان: ${address}\n` +
//         `- الملاحظات: ${notice}`;

//       console.log('Sending message to group:', channelMessage);
//       try {
//         // Send the message to the group
//         const result = await bot.telegram.sendMessage(groupId, channelMessage, { parse_mode: 'Markdown' });

//         // Update the sentMessageId variable
//         sentMessageId = result.message_id;

//         console.log('Telegram API result:', result);
//       } catch (error) {
//         console.error('Telegram API error:', error);
//       }
//     } else {
//       // Handle messages without web_app_data differently
//       const text = ctx.message && ctx.message.text;
//       if (text) {
//         // Example: Check for a command to respond
//         if (text.startsWith('/respond')) {
//           const responseText = text.split(' ')[1];
//           ctx.reply(`Custom response received: ${responseText}`);
//         }
//       }
//     }
//   } catch (error) {
//     console.error('Error handling message:', error);
//   }
// });


// // Handler for messages sent to the group
// bot.on('text', async (ctx) => {
//   try {
//     // Process text messages sent to the group
//     const text = ctx.message && ctx.message.text;
//     if (text) {
//       // Example: Check for a command to respond
//       if (text.startsWith('/respond')) {
//         const responseText = text.split(' ')[1];
//         ctx.reply(`Custom response received in the group: ${responseText}`);
//       }
//     }
//   } catch (error) {
//     console.error('Error handling group message:', error);
//   }
// });




// // bot.on('message', async (ctx) => {
// //   try {
// //     const receivedData = JSON.parse(ctx.message.web_app_data.data);
// //     const cartItems = receivedData.cartItems;
// //     const phoneNumber = receivedData.phoneNumber;
// //     const address = receivedData.address;
// //     const notice = receivedData.notice;
// //     const totalPrice = receivedData.totalPrice;

// //     const orderDetails = [];

// //     for (const item of cartItems) {
// //       const title = item.title;
// //       const price = item.price;
// //       const quantity = item.quantity;
// //       orderDetails.push(`- المادة: ${title}, السعر: ${price}, العدد: ${quantity}`);
// //     }

// //     const orderMessage = orderDetails.join('\n');

// //     ctx.replyWithMarkdown(
// //       `${ctx.from.first_name}\n` +
// //       `تم ارسال الطلب التالي:\n` +
// //       `${orderMessage}\n` +
// //       `- المجموع: د ${totalPrice.toFixed(2)}\n`+
// //       `- *رقم الهاتف*: ${phoneNumber}\n` +
// //       `- *العنوان*: ${address}\n` +
// //       `- *الملاحظات*: ${notice}`
// //     );

// //     const channelMessage = `تم استلام طلب جديد:\n` +
// //       `${ctx.from.first_name}\n` +
// //       `${orderMessage}\n` +
// //       `- المجموع: د ${totalPrice.toFixed(2)}\n`+
// //       `- رقم الهاتف: ${phoneNumber}\n` +
// //       `- العنوان: ${address}\n` +
// //       `- الملاحظات: ${notice}`;

// //     console.log('Sending message to group:', channelMessage);
// //     try {
// //       // Send the message to the group
// //       const result = await bot.telegram.sendMessage(groupId, channelMessage, { parse_mode: 'Markdown' });

// //       // Update the sentMessageId variable
// //       sentMessageId = result.message_id;

// //       console.log('Telegram API result:', result);
// //     } catch (error) {
// //       console.error('Telegram API error:', error);
// //     }
// //   } catch (error) {
// //     console.error('Error parsing received data:', error);
// //   }
// // });

// // Handle custom responses
// // Handle custom responses
// bot.hears(/\/respond (.+)/, (ctx) => {
//   const responseText = ctx.match[1];
//   ctx.reply(`Custom response received: ${responseText}`);
// });

// // Update the interval check for replies
// // setInterval(async () => {
// //   const updates = await bot.telegram.getChatHistory(groupId, {
// //     limit: 1,
// //     fromMessageId: sentMessageId + 1,
// //   });
// // Listen to messages in the group
// bot.on('text', (ctx) => {
//   const groupMessage = ctx.message.text;
//   console.log('Received message in group:', groupMessage);

//   // Process the group message as needed
//   // You can use regex or other methods to identify custom responses


//   if (updates && updates.length > 0) {
//     const reply = updates[0].text;
//     console.log('Reply in group:', reply);

//     // Process the reply as needed
//     // You can use regex or other methods to identify custom responses
//   }
// }, 5000);

// // Other parts of your code...

// // Export the bot
//  bot.launch();




// const { Telegraf } = require("telegraf");

// const BOT_TOKEN = "6965610325:AAEERGjZAkBxerCGYOJdhEzfSUKDZ_LYEWA";
//  // Replace with your group ID

// const bot = new Telegraf(BOT_TOKEN);
// const webLink = 'https://testingbot-8rcz.onrender.com';
// // Example: Storing sent message ID


// // Replace the placeholder with your group ID
// const groupId = "@testing2_2023"; // Replace with your group ID

// // Variable to store the last sent message ID
// let sentMessageId;

// bot.start((ctx) =>
//   ctx.reply('اهلا وسهلا بكم في مطعمكم!', {
//     reply_markup: {
//       keyboard: [[{ text: 'اضغط هنا لفتح قائمة الطعام', web_app: { url: webLink } }]],
//     },
//   })
// );
// // Handler for messages with web_app_data sent to the bot
// bot.on('message', async (ctx) => {
//   try {
//     const webAppData = ctx.message && ctx.message.web_app_data;

//     if (webAppData && webAppData.data) {
//       // Process messages with web_app_data
//       const receivedData = JSON.parse(webAppData.data);
//       const cartItems = receivedData.cartItems;
//       const phoneNumber = receivedData.phoneNumber;
//       const address = receivedData.address;
//       const notice = receivedData.notice;
//       const totalPrice = receivedData.totalPrice;

//       const orderDetails = [];

//       for (const item of cartItems) {
//         const title = item.title;
//         const price = item.price;
//         const quantity = item.quantity;
//         orderDetails.push(`- المادة: ${title}, السعر: ${price}, العدد: ${quantity}`);
//       }

//       const orderMessage = orderDetails.join('\n');

//       ctx.replyWithMarkdown(
//         `${ctx.from.first_name}\n` +
//         `تم ارسال الطلب التالي:\n` +
//         `${orderMessage}\n` +
//         `- المجموع: د ${totalPrice.toFixed(2)}\n`+
//         `- *رقم الهاتف*: ${phoneNumber}\n` +
//         `- *العنوان*: ${address}\n` +
//         `- *الملاحظات*: ${notice}`
//       );

//       const channelMessage = `تم استلام طلب جديد:\n` +
//         `${ctx.from.first_name}\n` +
//         `${orderMessage}\n` +
//         `- المجموع: د ${totalPrice.toFixed(2)}\n`+
//         `- رقم الهاتف: ${phoneNumber}\n` +
//         `- العنوان: ${address}\n` +
//         `- الملاحظات: ${notice}`;

//       console.log('Sending message to group:', channelMessage);
//       try {
//         // Send the message to the group
//         const result = await bot.telegram.sendMessage(groupId, channelMessage, { parse_mode: 'Markdown' });

//         // Update the sentMessageId variable
//         sentMessageId = result.message_id;

//         console.log('Telegram API result:', result);
//       } catch (error) {
//         console.error('Telegram API error:', error);
//       }
//     }
//   } catch (error) {
//     console.error('Error handling message:', error);
//   }
// });

// // Handler for messages sent to the group
// // Handler for messages sent to the group
// bot.use(async (ctx, next) => {
//   try {
//     // Check if the message is from the group
//     if (ctx.message && ctx.message.chat && ctx.message.chat.id === groupId) {
//       // Process the response from the group
//       console.log('Response from the group:', ctx.message.text);

//       // You can add your custom logic here to handle responses from the group

//     } else {
//       // For messages not from the group, continue to the next middleware
//       await next();
//     }
//   } catch (error) {
//     console.error('Error handling group message:', error);
//   }
// });

// // Start the bot
// bot.launch();

// const { Telegraf } = require("telegraf");

// const BOT_TOKEN = "6965610325:AAEERGjZAkBxerCGYOJdhEzfSUKDZ_LYEWA";
// const groupId = "@testing2_2023"; // Replace with your group ID

// const bot = new Telegraf(BOT_TOKEN);
// const webLink = 'https://testingbot-8rcz.onrender.com';
// // Example: Storing sent message ID

// // Variable to store the last sent message ID
// let sentMessageId;

// bot.start((ctx) =>
//   ctx.reply('اهلا وسهلا بكم في مطعمكم!', {
//     reply_markup: {
//       keyboard: [[{ text: 'اضغط هنا لفتح قائمة الطعام', web_app: { url: webLink } }]],
//     },
//   })
// );

// // Handler for messages with web_app_data sent to the bot
// bot.on('message', async (ctx) => {
//   try {
//     const webAppData = ctx.message && ctx.message.web_app_data;

//     if (webAppData && webAppData.data) {
//       // Process messages with web_app_data
//       const receivedData = JSON.parse(webAppData.data);
//       const cartItems = receivedData.cartItems;
//       const phoneNumber = receivedData.phoneNumber;
//       const address = receivedData.address;
//       const notice = receivedData.notice;
//       const totalPrice = receivedData.totalPrice;

//       const orderDetails = [];

//       for (const item of cartItems) {
//         const title = item.title;
//         const price = item.price;
//         const quantity = item.quantity;
//         orderDetails.push(`- المادة: ${title}, السعر: ${price}, العدد: ${quantity}`);
//       }

//       const orderMessage = orderDetails.join('\n');

//       ctx.replyWithMarkdown(
//         `${ctx.from.first_name}\n` +
//         `تم ارسال الطلب التالي:\n` +
//         `${orderMessage}\n` +
//         `- المجموع: د ${totalPrice.toFixed(2)}\n`+
//         `- *رقم الهاتف*: ${phoneNumber}\n` +
//         `- *العنوان*: ${address}\n` +
//         `- *الملاحظات*: ${notice}`
//       );

//       const channelMessage = `تم استلام طلب جديد:\n` +
//         `${ctx.from.first_name}\n` +
//         `${orderMessage}\n` +
//         `- المجموع: د ${totalPrice.toFixed(2)}\n`+
//         `- رقم الهاتف: ${phoneNumber}\n` +
//         `- العنوان: ${address}\n` +
//         `- الملاحظات: ${notice}`;

//       console.log('Sending message to group:', channelMessage);
//       try {
//         // Send the message to the group
//         const result = await bot.telegram.sendMessage(groupId, channelMessage, { parse_mode: 'Markdown' });

//         // Update the sentMessageId variable
//         sentMessageId = result.message_id;

//         console.log('Telegram API result:', result);
//       } catch (error) {
//         console.error('Telegram API error:', error);
//       }
//     }
//   } catch (error) {
//     console.error('Error handling message:', error);
//   }
// });

// // Middleware to handle responses from the group
// bot.use(async (ctx, next) => {
//   try {
//     // Check if the message is from the group
//     if (ctx.message && ctx.message.chat && ctx.message.chat.id === groupId) {
//       // Process the response from the group
//       console.log('Response from the group:', ctx.message.text);

//       // You can add your custom logic here to handle responses from the group

//     } else {
//       // For messages not from the group, continue to the next middleware
//       await next();
//     }
//   } catch (error) {
//     console.error('Error handling group message:', error);
//   }
// });

// // Start the bot
// bot.launch();


// const { Telegraf } = require("telegraf");

// const BOT_TOKEN = "6965610325:AAEERGjZAkBxerCGYOJdhEzfSUKDZ_LYEWA";
// const groupId = "@testing2_2023"; // Replace with your group ID

// const bot = new Telegraf(BOT_TOKEN);
// const webLink = 'https://testingbot-8rcz.onrender.com';

// // Example: Storing sent message ID
// let sentMessageId;

// bot.start((ctx) =>
//   ctx.reply('اهلا وسهلا بكم في مطعمكم!')
// );

// // Handler for messages with web_app_data sent to the bot
// bot.on('message', async (ctx) => {
//   try {
//     console.log('Received message in the bot:', ctx.message.text);

//     const webAppData = ctx.message && ctx.message.web_app_data;

//     if (webAppData && webAppData.data) {
//       // Process messages with web_app_data
//       console.log('Processing web_app_data:', webAppData.data);

//       const receivedData = JSON.parse(webAppData.data);
//       const cartItems = receivedData.cartItems;
//       const phoneNumber = receivedData.phoneNumber;
//       const address = receivedData.address;
//       const notice = receivedData.notice;
//       const totalPrice = receivedData.totalPrice;

//       const orderDetails = [];

//       for (const item of cartItems) {
//         const title = item.title;
//         const price = item.price;
//         const quantity = item.quantity;
//         orderDetails.push(`- المادة: ${title}, السعر: ${price}, العدد: ${quantity}`);
//       }

//       const orderMessage = orderDetails.join('\n');

//       ctx.replyWithMarkdown(
//         `${ctx.from.first_name}\n` +
//         `تم ارسال الطلب التالي:\n` +
//         `${orderMessage}\n` +
//         `- المجموع: د ${totalPrice.toFixed(2)}\n`+
//         `- *رقم الهاتف*: ${phoneNumber}\n` +
//         `- *العنوان*: ${address}\n` +
//         `- *الملاحظات*: ${notice}`
//       );

//       const channelMessage = `تم استلام طلب جديد:\n` +
//         `${ctx.from.first_name}\n` +
//         `${orderMessage}\n` +
//         `- المجموع: د ${totalPrice.toFixed(2)}\n`+
//         `- رقم الهاتف: ${phoneNumber}\n` +
//         `- العنوان: ${address}\n` +
//         `- الملاحظات: ${notice}`;

//       console.log('Sending message to group:', channelMessage);
//       try {
//         // Send the message to the group
//         const result = await bot.telegram.sendMessage(groupId, channelMessage, { parse_mode: 'Markdown' });

//         // Update the sentMessageId variable
//         sentMessageId = result.message_id;

//         console.log('Telegram API result:', result);
//       } catch (error) {
//         console.error('Telegram API error:', error);
//       }
//     }
//   } catch (error) {
//     console.error('Error handling message:', error);
//   }
// });

// // Middleware to handle responses from the group
// bot.use(async (ctx, next) => {
//   try {
//     // Check if the message is from the group
//     if (ctx.message && ctx.message.chat && ctx.message.chat.id === groupId) {
//       // Process the response from the group
//       console.log('Response from the group:', ctx.message.text);

//       // You can add your custom logic here to handle responses from the group

//     } else {
//       // For messages not from the group, continue to the next middleware
//       await next();
//     }
//   } catch (error) {
//     console.error('Error handling group message:', error);
//   }
// });

// // Start the bot
// bot.launch();

// Example: Storing sent message ID
// let sentMessageId;

// bot.start((ctx) =>
//   ctx.reply('اهلا وسهلا بكم في مطعمكم!', {
//     reply_markup: {
//       keyboard: [[{ text: 'اضغط هنا لفتح قائمة الطعام', web_app: { url: webLink } }]],
//     },
//   })
// );

// // Handler for messages with web_app_data sent to the bot
// bot.on('message', async (ctx) => {
//   try {
//     const webAppData = ctx.message && ctx.message.web_app_data;

//     if (webAppData && webAppData.data) {
//       // Process messages with web_app_data
//       const receivedData = JSON.parse(webAppData.data);
//       const cartItems = receivedData.cartItems;
//       const phoneNumber = receivedData.phoneNumber;
//       const address = receivedData.address;
//       const notice = receivedData.notice;
//       const totalPrice = receivedData.totalPrice;

//       const orderDetails = [];

//       for (const item of cartItems) {
//         const title = item.title;
//         const price = item.price;
//         const quantity = item.quantity;
//         orderDetails.push(`- المادة: ${title}, السعر: ${price}, العدد: ${quantity}`);
//       }

//       const orderMessage = orderDetails.join('\n');

//       ctx.replyWithMarkdown(
//         `${ctx.from.first_name}\n` +
//         `تم ارسال الطلب التالي:\n` +
//         `${orderMessage}\n` +
//         `- المجموع: د ${totalPrice.toFixed(2)}\n`+
//         `- *رقم الهاتف*: ${phoneNumber}\n` +
//         `- *العنوان*: ${address}\n` +
//         `- *الملاحظات*: ${notice}`
//       );

//       const channelMessage = `تم استلام طلب جديد:\n` +
//         `${ctx.from.first_name}\n` +
//         `${orderMessage}\n` +
//         `- المجموع: د ${totalPrice.toFixed(2)}\n`+
//         `- رقم الهاتف: ${phoneNumber}\n` +
//         `- العنوان: ${address}\n` +
//         `- الملاحظات: ${notice}`;

//       console.log('Sending message to group:', channelMessage);
//       try {
//         // Send the message to the group
//         const result = await bot.telegram.sendMessage(groupId, channelMessage, { parse_mode: 'Markdown' });

//         // Update the sentMessageId variable
//         sentMessageId = result.message_id;

//         console.log('Telegram API result:', result);
//       } catch (error) {
//         console.error('Telegram API error:', error);
//       }
//     }
//   } catch (error) {
//     console.error('Error handling message:', error);
//   }
// });

// // Handler for inline queries
// // bot.on('inline_query', async (ctx) => {
// //   try {
// //     const query = ctx.inlineQuery.query;
// //     const results = [
// //       {
// //         type: 'article',
// //         id: '1',
// //         title: 'Reply to Bot',
// //         input_message_content: {
// //           message_text: `You replied: ${query}`,
// //         },
// //       },
// //     ];

// //     // Send the results to the inline query
// //     ctx.answerInlineQuery(results);
// //   } catch (error) {
// //     console.error('Error handling inline query:', error);
// //   }
// // });

// // Middleware to handle responses from the group
// // bot.use(async (ctx, next) => {
// //   try {
// //     // Check if the message is from the group
// //     if (ctx.message && ctx.message.chat && ctx.message.chat.id === groupId) {
// //       // Process the response from the group
// //       console.log('Response from the group:', ctx.message.text);

// //       // You can add your custom logic here to handle responses from the group

// //     } else {
// //       // For messages not from the group, continue to the next middleware
// //       await next();
// //     }
// //   } catch (error) {
// //     console.error('Error handling group message:', error);
// //   }
// // });
// // Handler for messages sent to the group
// // bot.on('text', (ctx) => {
// //   console.log('Received message in the group:', ctx.message.text);
// // });


// // Handler for messages with web_app_data sent to the bot
// bot.on('message', async (ctx) => {
//   try {
//     const webAppData = ctx.message && ctx.message.web_app_data;

//     if (webAppData && webAppData.data) {
//       // Process messages with web_app_data
//       // ... (your existing code)
//     }
//   } catch (error) {
//     console.error('Error handling message:', error);
//   }
// });

// // Middleware to handle responses from the group

// // Middleware to handle responses from the group
// bot.use(async (ctx, next) => {
//   try {
//     // Check if the message is from the group and not sent by the bot
//     if (ctx.message && ctx.message.chat && ctx.message.chat.id === groupId && !ctx.message.from.is_bot) {
//       // Process the response from the group
//       console.log('Response from the group:', ctx.message.text);

//       // Send the response to the bot
//       const botUserId = '@mazin2test_bot'; // Replace with your bot's username
//       const responseText = `Response from the group: ${ctx.message.text}`;
//       const result = await bot.telegram.sendMessage(botUserId, responseText);

//       console.log('Telegram API result (response to the bot):', result);
//     } else {
//       // For messages not from the group or sent by the bot, continue to the next middleware
//       await next();
//     }
//   } catch (error) {
//     console.error('Error handling group message:', error);
//   }
// });

// // Start the bot
// bot.launch();

// const { Telegraf } = require("telegraf");

// const BOT_TOKEN = "6965610325:AAEERGjZAkBxerCGYOJdhEzfSUKDZ_LYEWA";
// const groupId = "@testing2_2023"; // Replace with your group ID



// const bot = new Telegraf(BOT_TOKEN);
// const webLink = 'https://testingbot-8rcz.onrender.com';


// // Handler for messages with web_app_data sent to the bot
// bot.on('message', async (ctx) => {
//   try {
//     const webAppData = ctx.message && ctx.message.web_app_data;

//     if (webAppData && webAppData.data) {
//       // Process messages with web_app_data
//       // ... (your existing code)
//     }
//   } catch (error) {
//     console.error('Error handling message:', error);
//   }
// });

// //Middleware to handle responses from the group
// bot.use(async (ctx, next) => {
//   try {
//     // Check if the message is from the group and not sent by the bot
//     if (ctx.message && ctx.message.chat && ctx.message.chat.id === groupId && !ctx.message.from.is_bot) {
//       // Process the response from the group
//       console.log('Response from the group:', ctx.message.text);

//       // You can add your custom logic here to handle responses from the group

//     } else {
//       // For messages not from the group or sent by the bot, continue to the next middleware
//       await next();
//     }
//   } catch (error) {
//     console.error('Error handling group message:', error);
//   }
// });

// // Start the bot
// bot.launch();

//write code to handele response from telgram chanelle to the telegam bot using Telegraf?