import { Cloudflare } from 'cloudflare';

const cf = new Cloudflare({
    token: process.env.CLOUDFLARE_API_TOKEN,
});

export const configureCloudflare = async () => {
    // Configuration logic for Cloudflare
    try {
        const zones = await cf.zones.list();
        console.log('Configured zones:', zones);
    } catch (error) {
        console.error('Error configuring Cloudflare:', error);
    }
};

export const deployFunction = async (functionName: string, script: string) => {
    // Logic to deploy a serverless function to Cloudflare
    try {
        const response = await cf.workers.scripts.put(functionName, {
            body: script,
        });
        console.log('Function deployed:', response);
    } catch (error) {
        console.error('Error deploying function:', error);
    }
};