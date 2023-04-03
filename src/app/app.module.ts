import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayFlashcardsComponent } from './components/display-flashcards/display-flashcards.component';
import { FlashcardComponent } from './components/flashcard/flashcard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { CardDialogComponent } from './components/card-dialog/card-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayFlashcardsComponent,
    FlashcardComponent,
    HeaderComponent,
    CardDialogComponent,
    DeleteDialogComponent,
    EditDialogComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
