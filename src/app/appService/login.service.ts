import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: "root"
})

export class LoginService {
    constructor(private http: HttpClient){}

    serviceApiUrl: String = environment.serviceApiUrl

    checkLogin(data:any){
        console.log("login info", data)
        return this.http.post(this.serviceApiUrl+ "api/login", data)
    }
}