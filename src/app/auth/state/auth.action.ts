import { createAction, props } from "@ngrx/store"
import { User } from "src/app/model/user.model"

export const LOGIN_START = '[Auth Page] Login Starts'
export const LOGIN_sUCCESS = '[Auth Page] Login Success'

export const loginStart = createAction(LOGIN_START, props<{emailAddr: String, password: String}>())
export const loginSuccess = createAction(LOGIN_sUCCESS, props<{results}>())