import { createAction, createFeatureSelector, createSelector } from "@ngrx/store";
import { RecipeResponse } from "src/app/model/recipeResponse.model";
import { postsState } from "./post.state";

export const POST_STATE_NAME = 'posts'
const getPostsState = createFeatureSelector<postsState>('posts')

export const getPost = createSelector(getPostsState, (state) =>{
    return state
})

export const getPostbyId = createSelector(getPostsState,(state, props) => {
    return state.posts.find((post:RecipeResponse) => post.id === props.id)
}) 

export const getFavourites = createSelector(getPostsState, (state) => {
    return state
})