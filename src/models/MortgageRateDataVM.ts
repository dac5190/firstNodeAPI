import { MortgateRateData } from "./MortgateRateData";

//over complicated, but could easily be added to, to create a full fledged object with a BUNCH of metadata
export class MortgateRateMetaData {
    lastUpdated: Date;
}

export class MortgateRateDataVm extends MortgateRateData{
    MortgateRateMetaData: MortgateRateMetaData;
    
    constructor(rate?: MortgateRateData){
        super();

        this.MortgateRateMetaData = new MortgateRateMetaData();
        this.MortgateRateMetaData.lastUpdated = new Date(Date.now());
        
        if (rate) {
            this.realtime_start = rate.realtime_start;
            this.realtime_end = rate.realtime_end;
            this.date = rate.date;
            this.value = rate.value;
        }
        
    }
}

