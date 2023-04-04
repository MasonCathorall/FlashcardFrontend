import { Component, Inject, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Flashcard } from 'src/app/models/flashcard';
import { FlashcardService } from 'src/app/services/flashcard.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent {
  c!: Flashcard;
  @Input() cardInfo!: Flashcard;

  constructor(private flashcardService: FlashcardService,
    public dialogRef: MatDialogRef<DeleteDialogComponent>, @Inject(MAT_DIALOG_DATA) data:Flashcard) {
      console.log(data);
      // this.c = data;
      this.c = new Flashcard(data.id, data.question, data.answer);
      // this.c.id = data.id;
      // this.c.answer = data.answer;
      // this.c.question = data.question;
  }


  close() {
    this.dialogRef.close();
  }

  deleteCard() {
    console.log(this.c);
    this.flashcardService.deleteFlashcard(this.c.id).subscribe( (data) => {
      console.log('Card deleted');
    });
    this.dialogRef.close(this.c);
  }

}
