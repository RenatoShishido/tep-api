import { Monitoring } from '../entities/Monitoring';

export class MonitoringCreate{

    private monitoring: Monitoring

    constructor(monitoring: Monitoring) {
        this.monitoring = monitoring
    }

    createMonitoring(): any {
        return undefined;
    }

    isPlaceValid(): boolean {
        return false;
    }

}