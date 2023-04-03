import { Component, Input, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Guid } from 'guid-typescript';
import { Flashcard } from 'src/app/models/flashcard';
import { FlashcardService } from 'src/app/services/flashcard.service';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent {
  form!: FormGroup;
  question: string = "";
  answer: string = "";
  showErr: boolean = false;
  public id!: Guid;

  @Input() cardInfo!: Flashcard;

  constructor(private flashcardService: FlashcardService, private fb:  FormBuilder,
    private dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data:Flashcard) {
      this.question = data.question;
      this.answer = data.answer;
      this.id = Guid.createEmpty();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      answer: '',
      question: ''
    });
  }

  close() {
    this.dialogRef.close();
  }

  update() {
    this.question = this.form.value.question;
    this.answer = this.form.value.answer;
    console.log(this.question + " " + this.answer);
    if(this.question.length == 0 || this.answer.length == 0 || this.question.length > 256 || this.answer.length > 256){
        this.showErr = true;
    } else {
        this.showErr = false;
        //create the card here
        const card = new Flashcard( this.id.toString(), this.question, this.answer);
        console.log(card); 
        this.flashcardService.updateFlashcard(card).subscribe(data => {
          console.log(data);
        });
        this.dialogRef.close();
    }
  }

}
