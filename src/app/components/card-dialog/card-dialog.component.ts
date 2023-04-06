import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { Guid } from 'guid-typescript';
import { Flashcard } from 'src/app/models/flashcard';
import { FlashcardService } from 'src/app/services/flashcard.service';



@Component({
  selector: 'app-card-dialog',
  templateUrl: './card-dialog.component.html',
  styleUrls: ['./card-dialog.component.css']
})
export class CardDialogComponent implements OnInit {
  form!: FormGroup;
  question: string = "";
  answer: string = "";
  showErr: boolean = false;
  public id: Guid;

  constructor(private flashcardService: FlashcardService, private fb:  FormBuilder,
    private dialogRef: MatDialogRef<CardDialogComponent>,
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

  create() {
    this.question = this.form.value.question;
    this.answer = this.form.value.answer;
    console.log(this.question + " " + this.answer);
    if(this.question.length == 0 || this.answer.length == 0 || this.question.length > 256 || this.answer.length > 256){
        this.showErr = true;
    } else {
        this.showErr = false;

        //create the card here
        let card = new Flashcard( this.id.toString(), this.question, this.answer);

        console.log(card); 

        this.flashcardService.postFlashcard(card).subscribe(data => {
          console.log(data);
        });
        
        this.dialogRef.close(card);
    }
  }

}
