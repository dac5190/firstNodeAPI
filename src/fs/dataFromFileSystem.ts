import { readFile } from 'fs/promises';
import { MortgateRateDataVm } from '../models/MortgageRateDataVM';

export async function readSingleMortgageRateToFS(fileName: string): Promise<MortgateRateDataVm> {
    try{
        const rawFileData = await readFile(fileName, 'utf-8');
        return await JSON.parse(rawFileData) as MortgateRateDataVm;
    } catch(err){
        console.error('error (or first run) at readSingleMortgageRateToFS', err);
        return null;
    }    
}