import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { Flashcard } from 'src/app/models/flashcard';
import { FlashcardService } from 'src/app/services/flashcard.service';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { CardDialogComponent } from '../card-dialog/card-dialog.component';


@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']
})
export class FlashcardComponent {
  
  @Input() flashcardInfo!: Flashcard;

  showingAnswer: boolean = false;
  info:string = "";
  buttonStr: string = "Show Answer";

  constructor(private router: Router, private flashcardService: FlashcardService, private dialog: MatDialog){}

  ngOnInit(): void{
    this.info = this.flashcardInfo.question;
  }

  flip(): void{
    if(this.showingAnswer){
      this.info = this.flashcardInfo.question;
      this.showingAnswer = false;
      this.buttonStr = "Show Answer";
    } else {
      this.info = this.flashcardInfo.answer;
      this.showingAnswer = true;
      this.buttonStr = "Show Question";
    }
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(CardDialogComponent, dialogConfig);
  }

}
