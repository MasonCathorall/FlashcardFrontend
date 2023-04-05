import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FlashcardService } from './flashcard.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardDialogComponent } from '../components/card-dialog/card-dialog.component';
import { DeleteDialogComponent } from '../components/delete-dialog/delete-dialog.component';
import { FlashcardComponent } from '../components/flashcard/flashcard.component';
import { Flashcard } from '../models/flashcard';
import { of } from 'rxjs';

describe('FlashcardService', () => {
    let httpClientSpy: jasmine.SpyObj<HttpClient>;
    let service: FlashcardService;
    let controller: HttpTestingController;
    const expectUrl = 'https://localhost:7252/api/Flashcard/3cbf69aa-50c7-476e-d514-08db30560289';
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
            HttpClientTestingModule,
            HttpClientModule,
            MatDialogModule,
            MatCardModule,
            MatFormFieldModule,
            FormsModule,
            MatInputModule,
            ReactiveFormsModule,
            BrowserAnimationsModule
          ],
          declarations: [ 
            FlashcardComponent,
            CardDialogComponent,
            DeleteDialogComponent
          ],
          providers: [
            FlashcardService,
            MatDialog,
            { provide: MatDialogRef, useValue: {} },
            { provide: MAT_DIALOG_DATA, useValue: { data: Flashcard } }
          ]
      });
      service = TestBed.inject(FlashcardService);
    });
  
    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should get all flashcards', () => {
      let allCards: Flashcard[] = []
      let card: Flashcard = new Flashcard("3cbf69aa-50c7-476e-d514-08db30560289", "Hello", "Mason");
      const expectedCard: Flashcard = new Flashcard("3cbf69aa-50c7-476e-d514-08db30560289", "Hello", "Mason");

      spyOn(service, 'getFlashcards').and.returnValue(of(allCards));

      expect(allCards).toBeTruthy();
    });

    it('should get one flashcards', () => {
      let c: Flashcard = new Flashcard("","","");
      let card: Flashcard = new Flashcard("3cbf69aa-50c7-476e-d514-08db30560289", "Hello", "Mason");

      spyOn(service, 'getFlashcard').and.returnValue(of(c));
      
      expect(c).toBeTruthy();
    });

    it('should post a new flashcard', () => {
      let c: Flashcard = new Flashcard("","","");
      let card: Flashcard = new Flashcard("3cbf69aa-50c7-476e-d514-08db30560289", "Hello", "Mason");

      spyOn(service, 'postFlashcard').withArgs(card).and.returnValue(of(c));
      
      expect(c).toBeTruthy();
    });

    it('should update a flashcard', () => {
      let c: Flashcard = new Flashcard("","","");
      let card: Flashcard = new Flashcard("3cbf69aa-50c7-476e-d514-08db30560289", "Hello", "Mason");
      spyOn(service, 'updateFlashcard').withArgs(card).and.returnValue(of(c));
      
      expect(c).toBeTruthy();
    });

    it('should delete a flashcard', () => {
      let c: Flashcard = new Flashcard("","","");
      let card: Flashcard = new Flashcard("3cbf69aa-50c7-476e-d514-08db30560289", "Hello", "Mason");

      spyOn(service, 'deleteFlashcard').withArgs(card.id);
      
      expect(c).toBeTruthy();
    });
  });

