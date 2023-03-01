import { AuthResponse, authResponseSuccess } from "src/app/model/authResponse.model";

export interface AuthState{
    auth: authResponseSuccess[];
    results: AuthResponse[]
}

export const initialState: AuthState = {
    auth: [],
    results: []
}