import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDialogComponent } from './card-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Flashcard } from 'src/app/models/flashcard';
import { FlashcardService } from 'src/app/services/flashcard.service';
import { DisplayFlashcardsComponent } from '../display-flashcards/display-flashcards.component';
import { FlashcardComponent } from '../flashcard/flashcard.component';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('CardDialogComponent', () => {
  let component: CardDialogComponent;
  let fixture: ComponentFixture<CardDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        HttpClientModule,
        MatDialogModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ],
      declarations: [
        CardDialogComponent,
        DisplayFlashcardsComponent, 
        FlashcardComponent,
      ],
      providers: [
        FlashcardService,
        MatDialog,
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: { data: Flashcard } }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should test ngOnInit', () => {
    expect(component.ngOnInit()).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create card', () => {
    expect(component.create()).toBeFalsy();
  });

  it('should close', () => {
    expect(component.close()).toBeTruthy();
  });
  
});
