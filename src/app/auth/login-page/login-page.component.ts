import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { loginStart } from '../state/auth.action';
import { loginSuccessSelector } from '../state/auth.selector';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm!: FormGroup;
  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit(): void {
    this.generateForm();
  }
  generateForm(){
    this.loginForm = new FormGroup({
      emailAddr: new FormControl(),
      password: new FormControl()
    })
  }
  onClickLogin(){
    console.log("form data", this.loginForm.value)
    // let email = this.loginForm.value.email
    // let password = this.loginForm.value.password
    this.store.dispatch(loginStart(this.loginForm.value));
    this.store.select(loginSuccessSelector).subscribe(x => {
      var obj: any = {}
      console.log("xxxxxxxxxxxxxxxxxxx", x)
      obj = x
      if(obj){
        console.log("Got data",obj?.action?.results[0] )
        localStorage.setItem("loginCredentials", obj?.action?.results[0] )
        this.router.navigateByUrl("recipelist")
      }
    })
  }

}
