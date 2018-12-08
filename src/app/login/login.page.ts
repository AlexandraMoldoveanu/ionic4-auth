import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { stringify } from 'querystring';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    loginForm: FormGroup;

  constructor( 
    private fb: FormBuilder, 
    private authService: AuthenticationService, 
    private router:Router) {
      this.loginForm = this.fb.group({
          userName: "",
          password: ''

      })
   }
   onSubmit(){
      this.authService.signInWithEmail({
          email: this.loginForm.value.userName,
          password: this.loginForm.value.password
      }).then((userCredential:firebase.auth.UserCredential)=>{
          console.log(userCredential.user);
            this.authService.user = userCredential.user;
            this.router.navigate(['home']);
      }).catch((reason)=>{
            console.log(reason);
            alert("Wrong credentials");
      })
   }
  ngOnInit() {
  }
  

   
}



