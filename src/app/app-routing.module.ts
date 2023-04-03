import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayFlashcardsComponent } from './components/display-flashcards/display-flashcards.component';

const routes: Routes = [
  { path: '', redirectTo: '/flashcards', pathMatch: 'full' },
  { path: 'flashcards', pathMatch: 'full', component: DisplayFlashcardsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
