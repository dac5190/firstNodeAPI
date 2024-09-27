import { MortgateRateDataVm } from '../models/MortgageRateDataVM';
import { MortgateRateData } from '../models/MortgateRateData';
import { writeFile } from 'fs/promises';


export async function writeSingleMortgageRateToFS(rate: MortgateRateData, fileName: string){
    let mortgageRate: MortgateRateDataVm = new MortgateRateDataVm(rate);
    console.info('about to try writing this', mortgageRate);
    try{
        await writeFile(fileName, JSON.stringify(mortgageRate), { flag:'w' });
    } catch( err){
        console.error('error at writeSingleMortgageRateToFS', err);
    }
    
}