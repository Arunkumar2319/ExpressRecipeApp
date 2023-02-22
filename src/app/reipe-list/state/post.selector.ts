import { createAction, createFeatureSelector, createSelector } from "@ngrx/store";
import { postsState } from "./post.state";

export const POST_STATE_NAME = 'posts'
const getPostsState = createFeatureSelector<postsState>('posts')

export const getPost = createSelector(getPostsState, (state) =>{
    return state
})

export const getPostbyId = createSelector(getPostsState,(state:any, props:any) => {
    return state.posts.find((post:any) => post.id === props.id)
}) 

export const getFavourites = createSelector(getPostsState, (state) => {
    return state
})