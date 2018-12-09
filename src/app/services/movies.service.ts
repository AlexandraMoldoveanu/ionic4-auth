import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
  movieDoc: AngularFirestoreDocument<Movie>;

  constructor( public afs: AngularFirestore) { 
    //this.movies = this.afs.collection('movies').valueChanges();
    this.moviesCollection = this.afs.collection('movies', ref => ref.orderBy('title', 'asc'));

    this.movies = this.moviesCollection.snapshotChanges().pipe(
      map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Movie;
        data.id = a.payload.doc.id;
        return data;
      });﻿
  }));
}
 getMovies(){
   return this.movies;
 }

 addMovie(movie: Movie) {
   return this.moviesCollection.add(movie);
   
 }

  deleteMovie(movie:Movie){
    this.movieDoc = this.afs.doc(`movies/${movie.id}`);
    this.movieDoc.delete();
  }
  updateMovie(movie:Movie, id:string){
    return this.moviesCollection.doc(id).update(movie);
  }
 
}


