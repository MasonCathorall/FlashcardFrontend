import { Guid } from "guid-typescript"

export class Flashcard {
    id: string;
    question: string;
    answer: string;

    constructor(id: string, question: string, answer: string){
        this.id = id;
        this.question = question;
        this.answer = answer;
    }
}