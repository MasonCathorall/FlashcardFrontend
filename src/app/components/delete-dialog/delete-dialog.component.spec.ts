import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { DeleteDialogComponent } from './delete-dialog.component';
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
import { CardDialogComponent } from '../card-dialog/card-dialog.component';

describe('DeleteDialogComponent', () => {
  let component: DeleteDialogComponent;
  let fixture: ComponentFixture<DeleteDialogComponent>;

  const dialogMock = {
    close: () => { },
    delete: () => { }
   };

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
        FlashcardComponent,
        CardDialogComponent,
        DeleteDialogComponent
      ],
      providers: [
        FlashcardService,
        MatDialog,
        { provide: MatDialogRef, useValue: { dialogMock } },
        { provide: MAT_DIALOG_DATA, useValue: { data: Flashcard } }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close', () => {
    expect(component.close()).toBeTruthy();
  });

  it('should have a warning', () => {
    const field = document.getElementsByClassName('warning');
    expect(field).toBeTruthy();
  });

  it('should delete card', () => {
    expect(component.deleteCard()).toBeTruthy();
  });
});
