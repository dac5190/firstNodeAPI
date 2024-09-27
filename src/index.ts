import { loadMortgageRate } from "./loadDataFromAPI";
import { MortgateRateData } from './models/MortgateRateData';

const fileName: string = 'mortgage_output.json';

async function main() {
    const lastRate: MortgateRateData = await loadMortgageRate(fileName);
    console.log(lastRate);    
}

main();