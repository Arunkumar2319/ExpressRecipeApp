import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AuthResponse, authResponseSuccess } from "../model/authResponse.model";
import { userData } from "../model/user.model";

@Injectable({
    providedIn: "root"
})

export class AuthService {
    constructor(private http: HttpClient){}

    serviceApiUrl: String = environment.serviceApiUrl

    checkLogin(email:String, password: String) : Observable<authResponseSuccess>{
        let userData:userData = {
            emailAddr : email,
            password : password
        }
        return this.http.post<authResponseSuccess>(this.serviceApiUrl+ "api/login", userData)
    }
   
}