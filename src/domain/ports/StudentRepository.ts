import { Student } from "../entities/Student";

export interface StudentRepository {
    findAllStudents(): Array<Student>
}