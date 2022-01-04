import { Student } from "../entities/Student";

export interface MonitorRepository {
    findAllStudents(): Array<Student>
}