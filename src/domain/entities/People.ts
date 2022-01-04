import { cpf as document } from 'cpf-cnpj-validator'; 
import DocumentInvalidException from './validations/exceptions/DocumentInvalidException';
export abstract class People {

    private name: string 
    private rg: string 
    private cpf: string 
    private birthDate: Date 

    constructor(name: string, rg: string, cpf: string, birthDate: Date) {
        this.setName(name)
        this.setRg(rg)
        this.setCpf(cpf)
        this.setBirthDate(birthDate)
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
        if(!document.isValid(cpf))
            throw new DocumentInvalidException("CPF invalido!")
        this.cpf = cpf;
    }

    setBirthDate(birthDate: Date) {
        this.birthDate = birthDate;
    }

}