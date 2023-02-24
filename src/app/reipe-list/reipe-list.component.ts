import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { RecipeService } from '../appService/recipe.service';
import { Post } from '../model/posts.model';
import { AppState } from '../store/app.state';
import { addToFavourite, deletePost, getAllFavourites, getAllRecipe, removeFromFavourite, updatePost } from './state/post.actions';
import { getFavourites, getPost } from './state/post.selector';

interface userObject {
  id: Number;
  userName: String;
  email: String;
  password: String;
  name: String;
}

interface recipeObj{
  id: Number;
  recipeName : String;
  description: String;
  ingredients : String;
}

@Component({
  selector: 'app-reipe-list',
  templateUrl: './reipe-list.component.html',
  styleUrls: ['./reipe-list.component.scss']
})

export class ReipeListComponent implements OnInit {

  posts!: Observable<Post[]>;
  public dataList:any;

  postForm!: FormGroup;
  public userData!:userObject;
  public recipeData!: recipeObj;
  public favRecipeDatas: Array<any> = [];

  public favouriteObj:Array<Object> = [] ;

  public fovouriteBool: Boolean = false;
  constructor(private store: Store<AppState>,private route: Router,private router: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit(): void {
    // this.recipeData = {}
    // this.userData = {}

    this.favouriteObj = []
    this.favRecipeDatas = []

    let userData:any = sessionStorage.getItem('loginCredentials')
    this.userData = JSON.parse(userData)
    console.log("uaer data", this.userData)
  
  this.postForm = new FormGroup({
    name: new FormControl(null,[Validators.required,Validators.minLength(3)]),
    description: new FormControl(null),
    ingredients: new FormControl(null)
    }) 
  this.dataDescriber()  
  }
  onItemSelectRecipe(data:any){

  }
  dataDescriber(){
    this.store.dispatch(getAllRecipe());
    this.store.select(getPost).subscribe(data => {
      this.dataList = data
    })
    if(this.userData == undefined || this.userData == null ){   
    }
    else{
       this.store.dispatch(getAllFavourites());
      this.store.select(getFavourites).subscribe(x => {
        this.favRecipeDatas = []
        let tmpFav:any = []
        tmpFav = x
        this.favRecipeDatas = tmpFav?.favourites?.favourite
        console.log("selector fav obj", this.favRecipeDatas)
        this.mapFavRecipeItems()
      })
    }
  }
 
  addRecipe(){
    this.route.navigateByUrl('/newRecipe')
  }
  updateRecipe(data:any){   
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
  getId(data:any){
    this.recipeData = data
    this.route.navigateByUrl('recipeList/editRecipe/'+ data.id)    
  }
  deleteRecipe(id:any){
    if(confirm('Are you sure you want to delete')){
      this.store.dispatch(deletePost({id}))
    }
  }
  mapFavRecipeItems(){
    for(let i =0 ; i< this.favRecipeDatas.length ; i++){
      if(this.userData?.id == this.favRecipeDatas[i].user_id){
        this.favouriteObj[this.favRecipeDatas[i].fav_id - 1] = true
      }
    }
  }
  onItemSelectFavourite(i: any, data:any){
    this.favouriteObj[i] = true
    Swal.fire('', 'Recipe added to favourites', 'success')
    let tmp:any ={}
    tmp.userId = this.userData?.id
    tmp.favId = data.id
    if(tmp.userId && tmp.favId){
      this.store.dispatch(addToFavourite(tmp))      
    }
  }
  onItemDeSelectFavourite(i: number, data:any){
    this.favouriteObj[i] = false
    let tmp:any = {}
    tmp.userId = this.userData?.id;
    tmp.favId = data.id
    if(tmp.userId && tmp.favId){
      this.store.dispatch(removeFromFavourite(tmp))
    }    
  }
  edit(data: any){
  }
  searchRecipeItem(){

  }
  onClickLogin(){
    this.route.navigateByUrl("login")
  }
}
