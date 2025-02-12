# Telegram Bot Assistance

This project is a Telegram bot designed to assist users in solving their issues by collecting user data and sending it to a designated chat on Telegram. The bot features a user-friendly interface with buttons and includes wallet address validation.

## Project Structure

```
telegram-bot
├── src
│   ├── bot.ts               # Main entry point for the Telegram bot
│   ├── handlers
│   │   └── index.ts         # User interaction handlers
│   ├── middlewares
│   │   └── walletValidation.ts # Middleware for wallet address validation
│   └── types
│       └── index.ts         # TypeScript interfaces and types
├── package.json              # npm configuration file
├── tsconfig.json             # TypeScript configuration file
└── README.md                 # Project documentation
```

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd telegram-bot
   ```

2. **Install Dependencies**
   Ensure you have Node.js installed. Then run:
   ```bash
   npm install
   ```

3. **Configure the Bot**
   Update the bot token and chat ID in the `src/bot.ts` file.

4. **Run the Bot**
   Start the bot using the following command:
   ```bash
   npm start
   ```

## Usage

- Start a chat with the bot on Telegram.
- Use the buttons provided to interact with the bot.
- Input your wallet address when prompted, and the bot will validate it.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.