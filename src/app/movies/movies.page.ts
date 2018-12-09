import { MoviesService, Movie } from './../services/movies.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit, OnDestroy {
  
  subscription:Subscription;
  editState: boolean = false;
  movieToEdit: Movie;
  editMovieForm: FormGroup;

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  movies: Movie[];
  constructor(private moviesService: MoviesService, private fb: FormBuilder) { }

  ngOnInit() {
    this.editMovieForm = this.fb.group({
      title: ["", Validators.required ],
      description: ["", Validators.required ]

  })

    this.subscription = this.moviesService.getMovies().subscribe(movies => {
          this.movies = movies;
    });
  }
  deleteMovie(event, movie){
    this.moviesService.deleteMovie(movie);
  }

  editMovie(event, movie){
    
    this.editState = true;
    this.movieToEdit = movie;
    this.editMovieForm.get("title").setValue(this.movieToEdit.title);
    this.editMovieForm.get("description").setValue(this.movieToEdit.description);
  }

  onSaveMovie(){
    this.moviesService.updateMovie(this.editMovieForm.value,this.movieToEdit.id)
    .then(()=>{
      this.editState = false;
      this.movieToEdit = null;
    })

    
  }
}
