export interface UserInput {
    userId: string;
    walletAddress: string;
    message: string;
}

export interface BotResponse {
    success: boolean;
    message: string;
    data?: any;
}