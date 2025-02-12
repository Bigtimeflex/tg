export interface User {
    id: string;
    username: string;
    firstName?: string;
    lastName?: string;
    languageCode?: string;
}

export interface BotResponse {
    text: string;
    replyMarkup?: {
        inlineKeyboard?: Array<Array<{ text: string; callback_data: string }>>;
    };
}