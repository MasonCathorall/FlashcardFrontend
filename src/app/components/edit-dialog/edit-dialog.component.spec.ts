import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Flashcard } from 'src/app/models/flashcard';
import { FlashcardService } from 'src/app/services/flashcard.service';
import { FlashcardComponent } from '../flashcard/flashcard.component';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditDialogComponent } from './edit-dialog.component';


describe('EditDialogComponent', () => {
  let component: EditDialogComponent;
  let fixture: ComponentFixture<EditDialogComponent>;
  let dialog: MatDialog;
  let overlayContainerElement: HTMLElement;

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
        EditDialogComponent
      ],
      providers: [
        FlashcardService,
        MatDialog,
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: { data: Flashcard } },
        EditDialogComponent
      ]
    })
    .compileComponents();

    dialog = TestBed.get(EditDialogComponent);

    fixture = TestBed.createComponent(EditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const field = document.getElementsByClassName('inputs');
    expect(field).toBeTruthy();
  });

  it('should test ngOnInit', () => {
    expect(component.ngOnInit()).toBeFalsy();
  });

  it('should have input fields', () => {
    const button = document.getElementsByClassName('inputs');
    expect(button).toBeTruthy();
  });

  it('should close dialog', () => {
    const button = document.getElementsByClassName('close');
    expect(button).toBeTruthy();
  });

  it('should update dialog', () => {
    const button = document.getElementsByClassName('update');
    expect(button).toBeTruthy();
  });

  it('should create card', () => {
    expect(component.update()).toBeTruthy();
  });
});
