import { Injectable } from "@angular/core";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import { exhaustMap, map, tap } from "rxjs";
import { AuthService } from "src/app/appService/auth.service";
import { loginStart, loginSuccess } from "./auth.action";

@Injectable()
export class AuthEffects{
    constructor(private actions$: Actions, private authService: AuthService){}

    login$ = createEffect(() => {
        return this.actions$.pipe(ofType(loginStart), 
        exhaustMap((action) => {
           return this.authService.checkLogin(action.emailAddr, action.password)
           .pipe(map((data: any) => {
                return loginSuccess(data.results)        
            })) 
        })
        ) 
    })

}