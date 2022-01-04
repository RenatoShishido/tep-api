import { Monitoring } from '../entities/Monitoring';

export class MonitoringCreate{

    private monitoring: Monitoring

    constructor(monitoring: Monitoring) {
        this.monitoring = monitoring
    }

    createMonitoring(): Monitoring {
        if(this.isPlaceValid())

        return 
    }

    isPlaceValid(): boolean {
        

        return false;
    }

}