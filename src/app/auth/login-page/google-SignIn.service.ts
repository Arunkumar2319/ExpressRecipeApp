import { Injectable } from "@angular/core";
import { Observable, ReplaySubject } from "rxjs";

@Injectable()

export class GoogleSignInService{
    // private auth2!: gapi.auth2.GoogleAuth;
    private auth2!: gapi.auth2.GoogleAuth
    private subject = new ReplaySubject<gapi.auth2.GoogleUser>(1)
   constructor(){
    gapi.load('auth2', () => {
        this.auth2 = gapi.auth2.init({
            client_id: '1088484910566-hr7m0q99aqh41rmv4p0l41u0snsrpmki.apps.googleusercontent.com'
        })
    })
   }
   public signIn(){
    this.auth2.signIn({
        scope: 'https://www.googleapis.com/auth/gmail.readonly'
    }).then( user => {
        this.subject.next(user)
    }).catch( () => {
        // this.subject.next(null)
    })
   }
   public signOut() {
    this.auth2.signOut()
    .then(() => {

    })
   }
   public observable(): Observable<gapi.auth2.GoogleUser>{
    return this.subject.asObservable()
   }
}