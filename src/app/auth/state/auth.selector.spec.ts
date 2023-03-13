import * as selector from "./auth.selector"
import * as initialState from "./auth.state"

describe("select the auth ", () => {
    it("check the authentication", () => {
        let selectors  = selector.loginSuccessSelector
        expect(selectors).not.toBeNull();
    })
})