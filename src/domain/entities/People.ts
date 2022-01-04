
export abstract class People {

    private name: string
    private rg: string 
    private cpf: string
    private birthDate: Date


    constructor(name: string, rg: string, cpf: string, birthDate: Date) {
        this.name = name
        this.rg = rg
        this.cpf = cpf
        this.birthDate = birthDate
    }

    getName() : string {
        return this.name
    }

    getRg() : string {
        return this.rg
    }

    getCpf() : string {
        return this.cpf 
    }

    getBirthDate() : Date {
        return this.birthDate
    }

    setName(name: string) {
        this.name = name;
    }

    setRg(rg: string) {
        this.rg = rg;
    }

    setCpf(cpf: string) {
        this.cpf = cpf;
    }

    setBirthDate(birthDate: Date) {
        this.birthDate = birthDate;
    }

}