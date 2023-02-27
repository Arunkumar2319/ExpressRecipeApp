import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { RecipeService } from '../appService/recipe.service';
import { Post } from '../model/posts.model';
import { addRecipe } from '../reipe-list/state/post.actions';
import { AppState } from '../store/app.state';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {
  recipeForm!: FormGroup;
  // public newRecipeObj:any;
  constructor(private store:Store<AppState>,private route:Router, private recipeService:RecipeService) { }

  ngOnInit(): void {
    // this.newRecipeObj = {}
    this.recipeForm = new FormGroup({
    name: new FormControl(null,[Validators.required,Validators.minLength(3)]),
    description: new FormControl(null),
    ingredients: new FormControl(null)
    })
  }
  onAddRecipe(){
    if(this.recipeForm.valid){
    console.log(this.recipeForm)
    
    const post: Post = {
      recipeName: this.recipeForm.value.name,
      description: this.recipeForm.value.description,
      ingredients: this.recipeForm.value?.ingredients
    }
    var obj = {}
    this.store.dispatch(addRecipe({post}))
    this.route.navigateByUrl('/recipelist')
    }
  }
}
