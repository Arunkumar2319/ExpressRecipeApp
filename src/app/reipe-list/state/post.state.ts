import { favouriteRecipeSuccess } from "src/app/model/favouriteRecipe.model";
import { Post } from "src/app/model/posts.model";
import { RecipeResponse } from "src/app/model/recipeResponse.model";

export interface postsState{
    posts: Post[];
    data: RecipeResponse[];
    favourites: favouriteRecipeSuccess[]

}
export const initialState: postsState = {
    posts:[
    
    ],
    data: [],
    favourites: []
};