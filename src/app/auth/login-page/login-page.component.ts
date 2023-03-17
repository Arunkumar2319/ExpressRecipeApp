import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthResponse } from 'src/app/model/authResponse.model';
import { AppState } from 'src/app/store/app.state';
import { loginStart } from '../state/auth.action';
import { loginSuccessSelector } from '../state/auth.selector';
import { GoogleSignInService } from './google-SignIn.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm!: FormGroup;
  user!: gapi.auth2.GoogleUser;
  

  constructor(private store: Store<AppState>, private router: Router, private signInService: GoogleSignInService,
    private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.generateForm();   
    this.signInService.observable().subscribe( user => {
      this.user = user
    })
  }
  generateForm(){
    this.loginForm = new FormGroup({
      emailAddr: new FormControl(),
      password: new FormControl()
    })
  }
  onClickLogin(){
    this.store.dispatch(loginStart(this.loginForm.value));
    this.store.select(loginSuccessSelector).subscribe(authResponse => {
      if(authResponse){
        sessionStorage.setItem("loginCredentials", JSON.stringify(authResponse))
        this.router.navigateByUrl("recipelist")
      }
    })
    
  }
  signIn(){
    this.signInService.signIn()
  }
  signOut(){
    this.signInService.signOut()
  }
}
