import { Observable, of } from "rxjs"
import { loginStart } from "./auth.action";
import { AuthEffects } from "./auth.effects"

describe("check the login credentials", () => {
    let actions$: Observable<any>;

    it("Login credential checks", () => {
        let effects: AuthEffects
        effects.login$.subscribe((res) => {
            actions$ = of(loginStart);
            expect(res).not.toBeNull();
        })
    })
})