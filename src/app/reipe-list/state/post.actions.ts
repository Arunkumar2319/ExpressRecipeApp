import { createAction, props } from "@ngrx/store"
import { favouriteRecipe } from "src/app/model/favouriteRecipe.model";
import { Post } from "src/app/model/posts.model"
import { RecipeResponse, RecipeSuccessResponse } from "src/app/model/recipeResponse.model";

interface favouriteItem{
    id?: number;
    userId?: number;
    favId?: number;
}

export const ADD_POST_ACTION = '[Posts page] add post';
export const UPDATE_POST_ACTION = '[Posts Page] update post';
export const DELETE_POST_ACTION = '[Posts delete] delete post';

export const addRecipe = createAction(ADD_POST_ACTION, props<{post:Post}>())
export const updatePost = createAction(UPDATE_POST_ACTION, props<{post:Post}>())
export const deletePost = createAction(DELETE_POST_ACTION, props<{ id: number}>())


// Get Recipe 
export enum Action_Type{
    onGetAllRecipes = '[API CALL] Get all recipe',
    GET_ALL_RECIPE_SUCCESS = '[API CALL] Get all recipe success'
}
export const getAllRecipe = createAction(
    Action_Type.onGetAllRecipes
)
// export const getAllRecipeSuccess = createAction(GET_ALL_RECIPE_SUCCESS, props<{data}>())
export const getAllRecipeSuccess = createAction(Action_Type.GET_ALL_RECIPE_SUCCESS, (data: RecipeSuccessResponse) => (  data))



// Get Favourites
export enum Action_Type{
    onGetAllFavourites= '[API CALL] Get all Favourites'
}
export const GET_ALL_FAVOURITE_SUCCESS = '[API CALL] Get all Favourites success'
export const getAllFavourites = createAction(
    Action_Type.onGetAllFavourites
)
export const getAllFavouriteSuccess = createAction(GET_ALL_FAVOURITE_SUCCESS, props<{favourite: favouriteRecipe}>())

// Add Favourite
export enum Action_Type{
    onAddToFavourites= '[API CALL] Add to Favourite'
}
export const ADD_FAVOURITE_SUCCESS = '[API CALL] Add to favourite success'
export const addToFavourite = createAction(
    Action_Type.onAddToFavourites,
    props<{obj: any}>()
)
export const AddToFavouriteSuccess = createAction(Action_Type.GET_ALL_RECIPE_SUCCESS)



// Remove Favourites
export enum Action_Type{
    onRemoveFavourites= '[API CALL] Get all recipe'
}
export const REMOVE_FAVOURITE_SUCCESS = '[API CALL] Get all recipe success'
export const removeFromFavourite = createAction(
    Action_Type.onRemoveFavourites,
    props<{obj: favouriteItem}>()
)
export const RemoveFromFavouriteSuccess = createAction(Action_Type.GET_ALL_RECIPE_SUCCESS)