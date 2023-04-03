import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFlashcardsComponent } from './display-flashcards.component';

describe('DisplayFlashcardsComponent', () => {
  let component: DisplayFlashcardsComponent;
  let fixture: ComponentFixture<DisplayFlashcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayFlashcardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayFlashcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
