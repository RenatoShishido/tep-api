import { CheckMonitoring } from "./domain/entities/CheckMonitoring"
import { Monitor } from "./domain/entities/Monitor"
import { Monitoring } from "./domain/entities/Monitoring"
import { Student } from "./domain/entities/Student"

const student = new Student("Renato", "015152", "069790451", new Date('December 17, 1995 03:24:00'), "20191902152", "TADS")
const monitor = new Monitor("Paulo", "015152", "069790451123", new Date('December 18, 1995 03:24:00'), "20191902122", "TADS")
const monitoring = new Monitoring([student], monitor, "Library",  new Date('December 18, 1995 03:24:00'),  new Date('December 18, 1995 05:24:00'))

monitoring.setCheckMonitoring(new CheckMonitoring(new Date('December 18, 1995 03:24:00'), new Date('December 18, 1995 03:24:00')))

console.log(monitoring);
