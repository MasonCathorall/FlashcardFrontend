import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Flashcard } from 'src/app/models/flashcard';
import { FlashcardService } from 'src/app/services/flashcard.service';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit{
  form!: FormGroup;
  question: string = "";
  answer: string = "";
  oldQuestion: string = "";
  oldAnswer: string = "";
  showErr: boolean = false;
  id: string = "";
  c!: Flashcard


  constructor(private flashcardService: FlashcardService, private fb:  FormBuilder,
    private dialogRef: MatDialogRef<EditDialogComponent>, @Inject(MAT_DIALOG_DATA) data:Flashcard) {
      console.log(data.id);
      this.c = data;

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
    if(this.question.length > 256 || this.answer.length > 256){
        this.showErr = true;
    } else {
        if(this.answer.length == 0) this.answer = this.c.answer;
        if(this.question.length == 0) this.question = this.c.question;
        this.showErr = false;
        const card = new Flashcard( this.c.id, this.question, this.answer);
        console.log(card); 
        this.flashcardService.updateFlashcard(card).subscribe(data => {
          console.log(data);
        });

        this.dialogRef.close(card);
    }
  }
}
