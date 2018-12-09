import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { IonicModule } from '@ionic/angular';

import { MoviesPage } from './movies.page';
import { AddMovieComponent } from './add-movie/add-movie.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesPage
  },
  {
    path: 'add',
    component: AddMovieComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MoviesPage, AddMovieComponent]
})
export class MoviesPageModule {}
