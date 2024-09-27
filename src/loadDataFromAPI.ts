import axios from 'axios';
import { apiKey } from "./fs/envFileHandler";
import { MortgateRateData } from './models/MortgateRateData';
import { readSingleMortgageRateToFS } from './fs/dataFromFileSystem';
import { MortgateRateDataVm, MortgateRateMetaData } from './models/MortgageRateDataVM';
import { writeSingleMortgageRateToFS } from './fs/dataToFileSystem';

//grab the apiKey set in either the Process_env or .env under API_KEY
//if you need your own api key, go here: https://fredaccount.stlouisfed.org/login/secure/
const API_KEY = apiKey;

async function fetchMorgageData(apiUrl): Promise<MortgateRateData> {
    try {
        console.info(`firing off Getter: ${apiUrl}`);
        const response = await axios.get(apiUrl);
        const data = response.data;

        if (Array.isArray(data.observations)){
            return data.observations[data.observations.length - 1];
        } else {
            console.error('Data is not the expected array:', data);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

export function loadMortgageRateFromAPI(): Promise<MortgateRateData>  {
    const apiUrl = `https://api.stlouisfed.org/fred/series/observations?series_id=MORTGAGE30US&api_key=${API_KEY}&file_type=json`.toLocaleLowerCase();
    return fetchMorgageData(apiUrl);
}

export async function loadMortgageRate(fileName: string): Promise<MortgateRateData> | null {
    //check if file is up to date
    
    const currentFile: MortgateRateDataVm | null = await readSingleMortgageRateToFS(fileName);
    //date variables for easier debugging
    const currDateStr: string = (new Date()).toDateString();
    const lastModDateStr: string | null = currentFile && currentFile.MortgateRateMetaData && currentFile.MortgateRateMetaData.lastUpdated ? 
        new Date(currentFile.MortgateRateMetaData.lastUpdated).toDateString()
        : null;
    if (lastModDateStr && currDateStr == lastModDateStr
    ){
        console.info('file is up to date, will return whats on fs');
        return currentFile;
    } else {
        console.log('file not up to date, will pull newest file');
        //if file is not up to date, grab from the api
        const newFile =  await loadMortgageRateFromAPI();
        writeSingleMortgageRateToFS(newFile, fileName);
        console.log('wrote out this file:', newFile);
        return newFile;
    }
}