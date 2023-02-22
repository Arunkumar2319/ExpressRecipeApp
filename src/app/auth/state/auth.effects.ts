import { Injectable } from "@angular/core";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import { exhaustMap, map, tap } from "rxjs";
import { AuthService } from "src/app/appService/auth.service";
import { loginStart, loginSuccess } from "./auth.action";

@Injectable()
export class AuthEffects{
    constructor(private actions$: Actions, private authService: AuthService){}

    login$ = createEffect(() => {
        // return this.actions$.pipe(ofType(Action_Type.onLoginStart), 
        return this.actions$.pipe(ofType(loginStart), 
        // tap(() => console.log("Something problem here")),
        exhaustMap((action) => {
           return this.authService.checkLogin(action.emailAddr, action.password)
           .pipe(map((data: any) => {
            // const user:any = this.authService.formatUser(data.results[0])
                // return loginSuccess(data.results[0]);  
                console.log("auth effects",data)      
                return loginSuccess(data)        
            })) 
        })
        ) 
    })

}