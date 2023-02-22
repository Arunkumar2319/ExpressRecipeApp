import { getAllFavouriteSuccess, getAllRecipeSuccess } from "./post.actions"
import * as fromReducer from "./post.reducer"
import { initialState } from "./post.state"

// checking initial state
describe('Test the reducer',() => {
    it('check the initial state', () =>{
        const action = {type: 'unknown'}
        const state = fromReducer.postsReducer(initialState, action)
        expect(state).toBe(initialState)
    })
})

// Get All Recipe
describe('Test the reducer 1', () => {
    it('check the getAll recipe reducer', () => {
        const action = {type: 'unknown'}
        const state:any  = {id: '1', recipeName: 'Puttu', description: 'tasty', ingredients: 'flour'}
        const value = getAllRecipeSuccess(state)
        expect(value).not.toBeNull()
    })
})

// Get All Favourites
describe('Test the reducer 2', () => {
    it('check the get all favourites', () => {
        const action = {type: 'unknown'}
        const state: any = { user_id: 1, fav_id: 2, id: 21 }
        const favourite = getAllFavouriteSuccess(state)
        expect(favourite).not.toBeNull()
    })
})

// 