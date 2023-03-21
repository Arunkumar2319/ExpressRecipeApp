import { props } from "@ngrx/store";
import { cold, hot } from "jasmine-marbles";
import { Observable, of } from "rxjs"
import { loginStart } from "./auth.action";
import { AuthEffects } from "./auth.effects"
import * as MyActions from "./auth.action"

// describe("check the login credentials", () => {
//     let actions$: Observable<any>;

//     it("Login credential checks", () => {
//         let effects: AuthEffects
//         actions$ = of(loginStart, props<{emailAddr: "arun@gmail.com", password: "Arun@perfo"}>());
//         effects.login$.subscribe((res) => {
//             expect(res).not.toBeNull();
//             expect(res).toBe(authResponseSuccess)
//             expect(res).toHaveProperty
//         })
//     })
// })

describe("check the login credentials", () => {
    let actions$: Observable<any>;

    it("Login credential checks", () => {

        const action = MyActions.loginStart
        const completion = MyActions.loginSuccess
        const response = hot('--a', {a: action})
        const expected = hot('-b', {b: completion})
        
        expect(response).toBe(expected)
        let effects: AuthEffects
        actions$ = of(loginStart, props<{emailAddr: "arun@gmail.com", password: "Arun@perfo"}>());
        effects.login$.subscribe((res) => {
            expect(res).not.toBeNull();
            expect(res).toHaveProperty("arun@gmail.com")
        })
    })
})