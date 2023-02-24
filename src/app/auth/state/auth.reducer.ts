import { createReducer, on } from "@ngrx/store";
import { loginSuccess } from "./auth.action";
import { initialState } from "./auth.state";

const authReducer = createReducer(initialState, 
    on(loginSuccess, (state, action) => {
        return {...state, action}
    })
)
export function AuthReducer(state:any, action:any){
    return authReducer(state,action)
}