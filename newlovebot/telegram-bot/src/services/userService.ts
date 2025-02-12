export class UserService {
    private users: Map<string, any>;

    constructor() {
        this.users = new Map();
    }

    saveUserData(userId: string, data: any): void {
        this.users.set(userId, data);
    }

    getUserData(userId: string): any | undefined {
        return this.users.get(userId);
    }

    sendUserInputToUsers(userInput: string, userIds: string[]): void {
        userIds.forEach(userId => {
            // Logic to send userInput to each userId
            console.log(`Sending to ${userId}: ${userInput}`);
        });
    }
}