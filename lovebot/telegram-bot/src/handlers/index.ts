import { Context } from 'telegraf';
import { UserInput } from '../types';

export const startHandler = (ctx: Context) => {
    ctx.reply('Welcome! Please choose an option:', {
        reply_markup: {
            keyboard: [
                [{ text: 'Validate Wallet Address' }],
                [{ text: 'Report an Issue' }]
            ],
            resize_keyboard: true,
            one_time_keyboard: true
        }
    });
};

export const walletAddressHandler = (ctx: Context, userInput: UserInput) => {
    const walletAddress = userInput.walletAddress;
    // Logic to validate the wallet address
    ctx.reply(`You entered the wallet address: ${walletAddress}`);
};

export const issueReportHandler = (ctx: Context, userInput: UserInput) => {
    const issueDescription = userInput.issueDescription;
    // Logic to process the issue report
    ctx.reply(`Your issue has been reported: ${issueDescription}`);
};