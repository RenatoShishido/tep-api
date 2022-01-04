
export default class Leasson{

    private content : string
    private discipline : string

    public getContent(): string {
        return this.content;
    }

    public setContent(content: string): void {
        this.content = content;
    }

    public getDiscipline(): string {
        return this.discipline;
    }

    public setDiscipline(discipline: string): void {
        this.discipline = discipline;
    }
    
}