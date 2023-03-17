import { createReducer, on } from "@ngrx/store"
import { addRecipe, deletePost, getAllFavouriteSuccess, getAllRecipeSuccess, updatePost } from "./post.actions"
import { initialState } from "./post.state"

const _postsReducer = createReducer(initialState, on(addRecipe, (state,action) => {
    let post = {...action.post};

    post.id = (state.posts.length + 1);

    return{
        ...state,
        posts: [...state.posts,post]
    }
}),
on(updatePost, (state,action) =>{
    const updatedPosts = state.posts.map((post) =>{
        
        return action.post.id === post.id ? action.post : post
    });
    return{
        ...state,
        posts: updatedPosts
    }
}),
// on(deletePost, (state,{ id }) =>{
//     const updatedPost = state.posts.filter((post => {
//         return post.id !== id;
//     }));
//     return{
//         ...state,
//         posts: updatedPost
//     }
// }),
on(getAllRecipeSuccess, (state, action) => {
    return { ...state, data: action.data}
}),
on(getAllFavouriteSuccess, (state, action) => {
    return {...state, favourites: action.favourite}
}),
);

export function postsReducer(state,action){
    return _postsReducer(state,action )
}