import { Telegraf } from 'telegraf';
import { BotController } from './controllers/index';
import { UserService } from './services/userService';

const bot = new Telegraf(process.env.BOT_TOKEN);
const botController = new BotController();
const userService = new UserService();

bot.start((ctx) => botController.startBot(ctx));
bot.on('callback_query', (ctx) => botController.handleButtonClick(ctx));
bot.on('text', async (ctx) => {
    const userData = await userService.getUserData(ctx.from.id);
    // Process user input and respond accordingly
    // Example: Validate wallet address or other commands
});

bot.launch().then(() => {
    console.log('Bot is up and running!');
}).catch((error) => {
    console.error('Failed to launch the bot:', error);
});