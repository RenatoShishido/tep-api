import { Monitor } from './Monitor';
import { Student } from './Student';
import { CheckMonitoring } from './CheckMonitoring';
import Leasson from './Leasson';

export class Monitoring {

    private student: Array<Student>
    private leasson: Leasson
    private monitor: Monitor
    private place: string
    private startTime: Date 
    private endTime: Date
    private checkMonitoring: CheckMonitoring

    constructor(student: Array<Student>, monitor: Monitor, place: string, startTime: Date, endTime: Date) {
        this.student = student
        this.monitor = monitor
        this.place = place
        this.startTime = startTime
        this.endTime = endTime
    }

    isValidMonitoring(): boolean {
        if(this.getCheckMonitoring == undefined)
            return false;
        
        if(this.getCheckMonitoring()?.getStartMonitoring == undefined 
        || this.getCheckMonitoring()?.getEndMonitoring == undefined)
            return false
        
        return true;
    }

    getMonitor(): Monitor{
        return this.monitor
    }

    getStudent(): Array<Student> {
        return this.student
    }

    getPlace(): string {
        return this.place
    }

    getStartTime(): Date{
        return this.startTime
    }

    getEndTime(): Date {
        return this.endTime
    }

    getCheckMonitoring(): CheckMonitoring {
        return this.checkMonitoring 
    }

    setMonitor(monitor: Monitor) {
        this.monitor = monitor
    }

    setStudent(student: Array<Student>) {
        this.student = student
    }

    setPlace(place: string) {
        this.place = place
    }

    setStartTime(startTime: Date) {
        this.startTime = startTime
    }

    setEndTime(endTime: Date) {
        this.endTime = endTime
    }

    setCheckMonitoring(checkMonitoring: CheckMonitoring) {
        this.checkMonitoring = checkMonitoring
    }
}