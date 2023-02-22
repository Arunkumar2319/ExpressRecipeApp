import { createFeatureSelector, createSelector } from "@ngrx/store";
import { postsState } from "src/app/reipe-list/state/post.state";

const getPostsState = createFeatureSelector<postsState>('auth')

export const loginSuccessSelector = createSelector(getPostsState, (state) => {
    return state
})