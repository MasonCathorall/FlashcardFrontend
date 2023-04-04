import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Flashcard } from './flashcard';

describe('Flashcard Model', () => {
    it('should be an instance', () => {
        expect(new Flashcard("3fa85f64-5717-4562-b3fc-2c963f66afa6", "Lol", "lol")).toBeTruthy();
    })

    // it('should be an new instance', () => {
    //     expect(new Flashcard("3fa85f64-5717-4562-b3fc-2c943f66afa6", "Lolf", 1)).toBeFalsy();
    // })
});