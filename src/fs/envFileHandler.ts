const dotenv = require('dotenv');

dotenv.config();

const apiKeyRaw: string | null = process.env.API_KEY || null;

if (!apiKeyRaw){
    console.error('Need to set API_KEY in either the .env file, or in the environment in which you are hosting it. Please see readme for more detail');
    throw new Error('API_KEY not set');
}

const apiKey: string = apiKeyRaw;

export { apiKey };