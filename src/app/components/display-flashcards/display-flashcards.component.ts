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
  }

  ngOnInit(): void{
    this.getCards();
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

  getCards(): void {
    this.flashcardService.getFlashcards().subscribe(
      (resp) => {
        this.allFlashcards = resp;
        console.log(this.allFlashcards);
      }, 
      (err) => console.log(err)
    )
  }

}
