import { People } from "./People";

export class Student extends People {

    private rga: string
    private course: string

    constructor(name: string, rg: string, cpf: string, dataNascimento: Date, 
        rga: string, course: string) {
        super(name, rg, cpf, dataNascimento)
        this.rga = rga
        this.course = course
    }

    getRga() : string {
        return this.rga
    }

    getCourse() : string {
        return this.course
    }

    setRga(rga: string) {
        this.rga = rga
    }

    setCourse(course: string) {
        this.course = course
    }

}