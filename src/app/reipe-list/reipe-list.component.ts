import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { RecipeService } from '../appService/recipe.service';
import { favouriteRecipe } from '../model/favouriteRecipe.model';
import { Post } from '../model/posts.model';
import { RecipeResponse, RecipeSuccessResponse } from '../model/recipeResponse.model';
import { AppState } from '../store/app.state';
import { addToFavourite, deletePost, getAllFavourites, getAllRecipe, removeFromFavourite, updatePost } from './state/post.actions';
import { getFavourites, getPost } from './state/post.selector';

interface userObject {
  id: number;
  userName: String;
  email: String;
  password: String;
  name: String;
}

interface recipeObj{
  id: number;
  recipeName : String;
  description: String;
  ingredients : String;
  imageurl?: String;
}

interface favouriteRecipeObject{
  user_id: number;
  fav_id: number;
  id: number;
}

@Component({
  selector: 'app-reipe-list',
  templateUrl: './reipe-list.component.html',
  styleUrls: ['./reipe-list.component.scss']
})

export class ReipeListComponent implements OnInit {

  posts!: Observable<Post[]>;
  
  public dataList:RecipeResponse[] = []
  postForm: FormGroup;
  public userData:userObject;
  public recipeData: recipeObj;

  public favRecipeDatas: Array<any> = []; //  Any defined -----

  public favouriteRecipeMapping:Array<Object> = [] ;

  public fovouriteBool: Boolean = false;
  constructor(private store: Store<AppState>,private route: Router) {

   }

  ngOnInit(): void {

    this.favouriteRecipeMapping = []
    this.favRecipeDatas = []
    let userData = JSON.parse(sessionStorage.getItem('loginCredentials')|| "")
    if(userData != null){
      this.userData = userData
    }
  
  this.postForm = new FormGroup({
    name: new FormControl(null,[Validators.required,Validators.minLength(3)]),
    description: new FormControl(null),
    ingredients: new FormControl(null)
  }) 

  this.store.dispatch(getAllRecipe());
    this.store.select(getPost).subscribe(data => {
      this.dataList = data.data
    })
    if(this.userData != undefined || this.userData != null ){  
      this.store.dispatch(getAllFavourites());
      this.store.select(getFavourites).subscribe(x => {
        this.favRecipeDatas = []
        this.favRecipeDatas = x.favourites
        if(this.favRecipeDatas.length != 0){
          this.mapRecipeItemsToFavourite()
        }
      }) 
    }    
  }
 
  addRecipe(){
    this.route.navigateByUrl('/newRecipe')
  }
  updateRecipe(){   
    const recipeName = this.recipeData.recipeName
    const description = this.recipeData.description
    const ingredients = this.recipeData.ingredients

    const post: Post ={
      id: this.recipeData?.id,
      recipeName,
      description,
      ingredients      
    }
    this.store.dispatch(updatePost({post}))
  }
  getId(data: recipeObj){
    this.recipeData = data
    this.route.navigateByUrl('recipeList/editRecipe/'+ data.id)    
  }
  deleteRecipe(id:number){
    if(confirm('Are you sure you want to delete')){
      this.store.dispatch(deletePost({id}))
    }
  }
  mapRecipeItemsToFavourite(){
    for(let i =0 ; i< this.favRecipeDatas.length ; i++){
      if(this.userData?.id == this.favRecipeDatas[i].user_id){
        this.favouriteRecipeMapping[this.favRecipeDatas[i].fav_id - 1] = true
      }
    }
  }
  onRecipeSelectForFavourite(i: number, data: recipeObj){
    this.favouriteRecipeMapping[i] = true
    Swal.fire('', 'Recipe added to favourites', 'success')
    let favRecipeMap = {   
      userId: this.userData?.id,
      favId: data.id 
    }    
    if(favRecipeMap.userId && favRecipeMap.favId){
      this.store.dispatch(addToFavourite({favRecipeMap}))      
    }
  }
  onRecipeDeSelectFromFavourite(i: number, data: recipeObj){
    this.favouriteRecipeMapping[i] = false
    let favRecipeRemoveIds = {   
      userId: this.userData?.id,
      favId: data.id
    }    
    if(favRecipeRemoveIds.userId && favRecipeRemoveIds.favId){
      this.store.dispatch(removeFromFavourite({favRecipeRemoveIds}))
    }    
  }
  
  onClickLogin(){
    this.route.navigateByUrl("login")
  }
}
