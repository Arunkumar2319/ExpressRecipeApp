import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./auth.state";

const getAuthState = createFeatureSelector<AuthState>('auth')

export const loginSuccessSelector = createSelector(getAuthState, (state) => {
    return state.auth
})