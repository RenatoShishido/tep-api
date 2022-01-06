import { Monitoring } from '../entities/Monitoring';
import { Student } from '../entities/Student';
import { Monitor } from '../entities/Monitor';

export class MonitoringCreate{

    private monitoring: Monitoring

    constructor(monitoring: Monitoring) {
        this.monitoring = monitoring
    }

    createMonitoring(): any {
        return null;
    }

    isPlaceValid(): boolean {
        return false;
    }

}