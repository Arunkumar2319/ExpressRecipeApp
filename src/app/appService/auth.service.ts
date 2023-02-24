import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { AuthResponse } from "../model/authResponse.model";
import { User } from "../model/user.model";

@Injectable({
    providedIn: "root"
})

export class AuthService {
    constructor(private http: HttpClient){}

    serviceApiUrl: String = environment.serviceApiUrl

    checkLogin(email:String, password: String){
        let obj:any = {}
        obj.emailAddr = email
        obj.password = password
        console.log("login info", obj)
        return this.http.post(this.serviceApiUrl+ "api/login", obj)
    }
   
}