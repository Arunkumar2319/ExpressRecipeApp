import { Post } from "src/app/model/posts.model";

export interface postsState{
    posts: Post[];
}
export const initialState: postsState = {
    posts:[
    
    ]
};