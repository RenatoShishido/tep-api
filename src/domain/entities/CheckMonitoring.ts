

export class CheckMonitoring {

    private startMonitoring: Date
    private endMonitoring: Date

    constructor(startMonitoring: Date, endMonitoring: Date) {
        this.startMonitoring = startMonitoring
        this.endMonitoring = endMonitoring
    }

    getStartMonitoring(): Date {
        return this.startMonitoring 
    }

    getEndMonitoring(): Date {
        return this.endMonitoring 
    }

    setStartMonitoring(startMonitoring: Date) {
        this.startMonitoring = startMonitoring
    }

    setEndMonitoring(endMonitoring: Date) {
        this.endMonitoring = endMonitoring
    }
}