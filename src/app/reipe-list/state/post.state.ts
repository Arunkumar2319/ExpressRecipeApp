import { Post } from "src/app/model/posts.model";

export interface postsState{
    posts: Post[];
}
export const initialState: postsState = {
    posts:[
        // {id:'1', name:'Brinji', description:'description 1'},
    //     // {id:'2', name:'Puttu', description:'description 2'},
    //     {id:'1', name:'Bun Parotta',description:'something content for bun parotta',image:'assets/bunParotta.jpg'},
    // {id:'2', name:'Malabar Paratha',description:'something content for Malabar Paratha',image:'assets/malabarParata.jpg'},
    // {id:'3', name:'Malabar Briyani',description:'something content for Malabar Briyani',image:'assets/malabarbriyani.jpg'},
    // {id:'4', name:'Banana Peel Thoran',description:'something content for Malabar Peel Thoram',image:'assets/bananapeel.jpg'}
    ]
};