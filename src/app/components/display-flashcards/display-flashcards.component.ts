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
    this.flashcardService.getFlashcards().subscribe(
      (resp) => {
        resp.forEach(ele => {
          // const c = {
          //   id: Guid.raw(),
          //   question: ele.question,
          //   answer: ele.answer
          // }
          let card = new Flashcard(ele.id, ele.question, ele.answer);
          this.allFlashcards.push(card);
          console.log(ele);
        });
        console.log(this.allFlashcards);
      }, 
      (err) => console.log(err),
      () => console.log("Flashcards Retrieved")
    )
  }

  ngOnInit(): void{

  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      id: 1,
      title: 'Create New Flashcard'
    };

    this.dialog.open(CardDialogComponent, dialogConfig);
  }

  openDeleteDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      id: 1,
      title: 'Delete Flashcard'
    };

    this.dialog.open(DeleteDialogComponent, dialogConfig);
  }

  openEditDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      id: 1,
      title: 'Edit Flashcard'
    };

    this.dialog.open(EditDialogComponent, dialogConfig);
  }

  toggleTable(){
    if(this.showTable){
      this.showTable = false;
    } else {
      this.showTable = true;
    }
  }

}
