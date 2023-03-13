import { Injectable } from "@angular/core";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import { exhaustMap, map, tap } from "rxjs";
import { AuthService } from "src/app/appService/auth.service";
import { authResponseSuccess } from "src/app/model/authResponse.model";
import { User } from "src/app/model/user.model";
import { loginStart, loginSuccess } from "./auth.action";
interface authData{
    id: number,
    userName: string,
    emailAddr: string,
    password: string,
    name: string,
    results: {}
}
@Injectable()
export class AuthEffects{
    constructor(private actions$: Actions, private authService: AuthService){}

    login$ = createEffect(() => {
        return this.actions$.pipe(ofType(loginStart), 
        exhaustMap((action) => {
           return this.authService.checkLogin(action.emailAddr, action.password)
           .pipe(map((data: authResponseSuccess) => {
            console.log("auth response effects", data)
                return loginSuccess(data)        
            })) 
        })
        ) 
    })

}