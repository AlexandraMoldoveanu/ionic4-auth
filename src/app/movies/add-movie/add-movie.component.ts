import { Component, OnInit } from '@angular/core';
import { MoviesService, Movie } from '../../services/movies.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {

  addMovies: FormGroup;
  constructor( 
    private moviesService: MoviesService,
    private fb: FormBuilder,
    private router: Router
    ) { 
      this.addMovies = this.fb.group({
        title: ["", Validators.required ],
        description: ["", Validators.required ]

    })
    }

  ngOnInit() {
  }
  onSubmit() {
    
      this.moviesService.addMovie(this.addMovies.value).then(()=>{
        this.router.navigate(['/movies']);
      });
  }
}
