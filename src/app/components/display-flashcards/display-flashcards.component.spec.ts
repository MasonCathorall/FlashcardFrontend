import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFlashcardsComponent } from './display-flashcards.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Flashcard } from 'src/app/models/flashcard';
import { FlashcardService } from 'src/app/services/flashcard.service';
import { CardDialogComponent } from '../card-dialog/card-dialog.component';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { FlashcardComponent } from '../flashcard/flashcard.component';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DisplayFlashcardsComponent', () => {
  let component: DisplayFlashcardsComponent;
  let fixture: ComponentFixture<DisplayFlashcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
        DisplayFlashcardsComponent, 
        FlashcardComponent
      ],
      providers: [
        FlashcardService,
        MatDialog,
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: { data: Flashcard } }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayFlashcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //check for cards
  it('should show cards', () => {
    const table = document.getElementsByClassName("showCards")
    expect(table).toBeTruthy();
  });

  //test create new card dialog
  it('should open create dialog', () => {
    component.openDialog();
    const dialogcomp = document.getElementsByClassName('dialog');
    expect(dialogcomp.item).toBeTruthy();
   });

  //test the flip method
  it('should show table rather than cards', () => {
    component.toggleTable();
    const table = document.getElementsByClassName("table")
    expect(table).toBeTruthy();
  });
  

  //test the edit dialog
  it('should open edit dialog', () => {
    component.openEditDialog(new Flashcard("3fa85f64-5717-4562-b3fc-2c963f66afa6", "Lol", "lol"));
    const dialogcomp = document.getElementsByClassName('dialog');
    expect(dialogcomp.item).toBeTruthy();
   });

  //test the delete dialog
  it('should open delete dialog', () => {
    component.openDeleteDialog(new Flashcard("3fa85f64-5717-4562-b3fc-2c963f66afa6", "Lol", "lol"));
    const dialogcomp = document.getElementsByClassName('dialog');
    expect(dialogcomp.item).toBeTruthy();
   });


});
