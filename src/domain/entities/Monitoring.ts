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

    setMonitor(monitor: Monitor) : Monitoring {
        if(monitor == null)
            throw new Error("Ńeed monitor")
        this.monitor = monitor
        return this;
    }

    setStudent(student: Array<Student>) : Monitoring {
        if(student == null || student.length == 0)
            throw new Error("Ńeed student")
        this.student = student
        return this;
    }

    setPlace(place: string) : Monitoring {
        if(place == null)
            throw new Error("Ńeed place")
        this.place = place
        return this;
    }

    setStartTime(startTime: Date) : Monitoring {
        this.startTime = startTime
        return this;
    }

    setEndTime(endTime: Date) : Monitoring {
        if(this.startTime >= endTime)
            throw new Error("The end time can't lesser or equal start time")
        this.endTime = endTime
        return this;
    }

    setCheckMonitoring(checkMonitoring: CheckMonitoring) : Monitoring {
        this.checkMonitoring = checkMonitoring
        return this;
    }
}