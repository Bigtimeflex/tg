import { Telegraf } from 'telegraf';
import { startCommandHandler, walletInputHandler } from './handlers';
import { UserInput } from './types';

const bot = new Telegraf(process.env.BOT_TOKEN || '');

bot.start(startCommandHandler);
bot.on('text', (ctx) => {
    const userInput: UserInput = { message: ctx.message.text, userId: ctx.from.id };
    walletInputHandler(ctx, userInput);
});

bot.launch().then(() => {
    console.log('Bot is up and running!');
}).catch(err => {
    console.error('Failed to launch the bot:', err);
});