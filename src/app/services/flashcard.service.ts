import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Flashcard } from '../models/flashcard';
import { Guid } from 'guid-typescript';

@Injectable({
    providedIn: 'root'
})
export class FlashcardService{
    private url: string = `${environment.baseUrl}/api/Flashcard`;

    constructor(private http: HttpClient) { }

    //get the cards
    public getFlashcards(): Observable<Flashcard[]> {
        return this.http.get<Flashcard[]>(this.url);
    }

    //get a card by id
    public getFlashcard(id: string): Observable<Flashcard> {
        return this.http.get<Flashcard>(this.url + '/' + id);
    }

    //post a new card
    public postFlashcard(card: Flashcard) {
        const c = {
            id: Guid.raw(),
            question: card.question,
            answer: card.answer

        }
        return this.http.post(this.url, c);
    }

    //update a card
    public updateFlashcard(card: Flashcard) {
        return this.http.put(this.url + '/' + card.id, card);
    }

    //delete a card
    public deleteFlashcard(id: string) {
        return this.http.delete(this.url + '/' + id);
    }

}