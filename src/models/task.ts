export class Task {
    public name: string;
    public title: string;
    public description: string;
    public state: string;

    constructor(name: string, title: string, description: string, state: string) {
        this.name = name;
        this.title = title;
        this.description = description;
        this.state = state;
    }
}