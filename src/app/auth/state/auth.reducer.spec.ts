import { initialState } from "./auth.state";
import * as fromReducer from "./auth.reducer"
import { loginSuccess } from "./auth.action";

describe('Test the reducer',() => {
    it('check the initial state', () =>{
        const action = {type: 'unknown'}
        const state = fromReducer.AuthReducer(initialState, action)
        expect(state).toBe(initialState)
    })
})

// Login 
describe('Test the Reducer', () => {
    it('check the login process', () =>{
        const action = {type: 'unknown'}
        const userData:any = {
            id: 1,
            userName: 'Arun',
            email: 'arun@gmail.com',
            password: 'Arun@perfo',
            name: 'ArunKumar',
            premium: 'Y'
        } 
        const data = loginSuccess(userData)
        expect(data).not.toBeNull()      
    })
})