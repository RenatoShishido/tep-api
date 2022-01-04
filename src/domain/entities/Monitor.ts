import { People } from "./People";

export class Monitor extends People {

    private identifier: string
    private course: string

    constructor(name: string, rg: string, cpf: string, birthDate: Date, 
        identifier: string, course: string) {
        super(name, rg, cpf, birthDate)
        this.identifier = identifier
        this.course = course
    }

    getIdentifier() : string {
        return this.identifier
    }

    getCourse() : string {
        return this.course
    }

    setIdentifier(identifier: string) {
        this.identifier = identifier
    }

    setCourse(course: string) {
        this.course = course
    }

}