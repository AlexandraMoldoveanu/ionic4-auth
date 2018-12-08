import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface Movie {
  id?: string;
  title?:string;
  description?:string;
}
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  moviesCollection: AngularFirestoreCollection<Movie>;
  movies: Observable<Movie[]>;


  constructor( public afs: AngularFirestore) { 
    this.movies = this.afs.collection('movies').valueChanges();
  }
 getMovies(){
   return this.movies;
 }
}


