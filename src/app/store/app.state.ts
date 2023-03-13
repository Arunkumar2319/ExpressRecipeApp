import { AuthReducer } from "../auth/state/auth.reducer";
import { AuthState } from "../auth/state/auth.state";
import { postsReducer } from "../reipe-list/state/post.reducer";
import { postsState } from "../reipe-list/state/post.state";

export interface AppState{
    posts: postsState ,
    auth: AuthState
}

export const appReducer ={
    posts: postsReducer,
    auth: AuthReducer
}