import { postEffects } from "./post.effects";
import * as selector from "./post.selector";
import { initialState } from "./post.state"

describe("Get initial data of all recipe", () => {
    // let actions: postEffects
    it("expect get all recipe data",() => {
        let selectors  = selector.getPost
        expect(selectors).toEqual(initialState.posts)
    });
    it("expect get all favourite recipe data",() => {
        let selectors = selector.getFavourites
        expect(selectors).toBe(initialState.favourites)
    });
    
})