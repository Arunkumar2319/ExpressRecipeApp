import { createReducer, on } from "@ngrx/store";
import { loginSuccess } from "./auth.action";
import { initialState } from "./auth.state";

const authReducer = createReducer(initialState, 
    on(loginSuccess, (state, action) => {
        return {...state,auth: action.results[0]}
    })
)
export function AuthReducer(state, action){
    return authReducer(state,action)
}