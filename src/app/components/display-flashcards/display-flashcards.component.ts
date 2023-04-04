import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Flashcard } from 'src/app/models/flashcard';
import { FlashcardService } from 'src/app/services/flashcard.service';
import { CardDialogComponent } from '../card-dialog/card-dialog.component';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-display-flashcards',
  templateUrl: './display-flashcards.component.html',
  styleUrls: ['./display-flashcards.component.css']
})
export class DisplayFlashcardsComponent implements OnInit{
  allFlashcards: Flashcard[] = [];
  showTable: boolean = false;
  displayedColumns: string[] = ['question', 'answer', 'options'];

  constructor(private dialog: MatDialog,private router: Router, private flashcardService: FlashcardService) { 
    // this.flashcardService.getFlashcards().subscribe(
    //   (resp) => {
    //     resp.forEach(ele => {
    //       let card = new Flashcard(ele.id, ele.question, ele.answer);
    //       this.allFlashcards.push(card);
    //       console.log(ele);
    //     });
    //     console.log(this.allFlashcards);
    //   }, 
    //   (err) => console.log(err),
    //   () => console.log("Flashcards Retrieved")
    // )
  }

  ngOnInit(): void{
    this.flashcardService.getFlashcards().subscribe(
      (resp) => {
        this.allFlashcards = resp;
        console.log(this.allFlashcards);
      }, 
      (err) => console.log(err)
    )
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      id: '',
      question: '',
      answer: ''
    };

    const dialogRef = this.dialog.open(CardDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        console.log("Create Dialog output:", data);
        // this.allFlashcards.push(data);
        this.allFlashcards = [];
        this.flashcardService.getFlashcards().subscribe(
          (resp) => {
            this.allFlashcards = resp;
            console.log(this.allFlashcards);
          }, 
          (err) => console.log(err)
        )
      }
    );
  }

  openDeleteDialog(card: Flashcard) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      id: card.id,
      question: card.question,
      answer: card.answer
    };

    const dialogRef = this.dialog.open(DeleteDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => {
        console.log("Delete Dialog output:", data);
        // const indexOfObject = this.allFlashcards.findIndex((object) => {
        //   return object.id === data.id;
        // });
        // this.allFlashcards.splice(indexOfObject, 1);

        this.allFlashcards = [];
        this.flashcardService.getFlashcards().subscribe(
          (resp) => {
            this.allFlashcards = resp;
            console.log(this.allFlashcards);
          }, 
          (err) => console.log(err)
        )

        
      }
    );
  }

  openEditDialog(card: Flashcard) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      id: card.id,
      question: card.question,
      answer: card.answer
    };

    console.log(card);

    const dialogRef = this.dialog.open(EditDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        console.log("Edit Dialog output:", data);

        this.allFlashcards = [];
        this.flashcardService.getFlashcards().subscribe(
          (resp) => {
            this.allFlashcards = resp;
            console.log(this.allFlashcards);
          }, 
          (err) => console.log(err)
        )


        // const indexOfObject = this.allFlashcards.findIndex((object) => {
        //   return object.id === data.id;
        // });

        // this.allFlashcards[indexOfObject].answer = data.answer;
        // this.allFlashcards[indexOfObject].question = data.question;
      }
    );
  }

  toggleTable(){
    if(this.showTable){
      this.showTable = false;
    } else {
      this.showTable = true;
    }
  }

}
