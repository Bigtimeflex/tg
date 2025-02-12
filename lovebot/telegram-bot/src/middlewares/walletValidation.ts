export const validateWalletAddress = (address: string): boolean => {
    const walletAddressPattern = /^0x[a-fA-F0-9]{40}$/; // Example pattern for Ethereum wallet addresses
    return walletAddressPattern.test(address);
};

export const walletValidationMiddleware = (ctx: any, next: () => Promise<void>): Promise<void> => {
    const userInput = ctx.message.text; // Assuming the wallet address is sent as a text message

    if (!validateWalletAddress(userInput)) {
        ctx.reply('Invalid wallet address. Please enter a valid address.');
        return Promise.resolve();
    }

    return next();
};