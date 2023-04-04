import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import {MatDialog, MatDialogConfig, MatDialogModule} from "@angular/material/dialog";

import { FlashcardComponent } from './flashcard.component';
import { CardDialogComponent } from '../card-dialog/card-dialog.component';
import { FlashcardService } from 'src/app/services/flashcard.service';
import { Flashcard } from 'src/app/models/flashcard';
import { Guid } from 'guid-typescript';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

describe('FlashcardComponent', () => {
  let component: FlashcardComponent;
  let fixture: ComponentFixture<FlashcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatDialogModule,
        MatCardModule,
        MatFormFieldModule
      ],
      declarations: [ 
        FlashcardComponent,
        CardDialogComponent
      ],
      providers: [
        FlashcardService,
        MatDialog
      ]
    })
    .compileComponents();


    let card = new Flashcard("3fa85f64-5717-4562-b3fc-2c963f66afa6", "Lol", "lol");
    fixture = TestBed.createComponent(FlashcardComponent);
    component = fixture.componentInstance;
    component.flashcardInfo = card;
    component.info = "Standard Info";
    fixture.detectChanges();
  });

  it('should create service', () => {
    const service: FlashcardService = TestBed.inject(FlashcardService);
    expect(service).toBeTruthy();
  })

  it('should have card info', () => {
    let card = new Flashcard("3fa85f64-5717-4562-b3fc-2c963f66afa6", "Lol", "lol");
    component.flashcardInfo = card;
    expect(component.flashcardInfo instanceof Flashcard).toBeTruthy();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should flip card', () => {
    component.flip();
    expect(component.info).toEqual('lol');
  })
});
