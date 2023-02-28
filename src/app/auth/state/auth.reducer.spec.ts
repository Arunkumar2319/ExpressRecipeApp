import { initialState } from "./auth.state";
import * as fromReducer from "./auth.reducer"
import { loginSuccess } from "./auth.action";

interface authData{
    id: number,
    userName: string,
    emailAddr: string,
    password: string,
    name: string,
    auth: {}
}
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
        const userData:authData = {
            id: 1,
            userName: 'Arun',
            emailAddr: 'arun@gmail.com',
            password: 'Arun@perfo',
            name: 'ArunKumar',
            auth: {}
        } 
        const data = loginSuccess(userData)
        expect(data).not.toBeNull()      
    })
})