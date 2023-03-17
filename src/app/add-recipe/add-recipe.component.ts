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
  constructor(private store:Store<AppState>,private route:Router) { }

  ngOnInit(): void {
    this.recipeForm = new FormGroup({
    name: new FormControl(null,[Validators.required,Validators.minLength(3)]),
    description: new FormControl(null),
    ingredients: new FormControl(null)
    })
  }
  onAddRecipe(){
    if(this.recipeForm.valid){    
    const post: Post = {
      recipeName: this.recipeForm.value.name,
      description: this.recipeForm.value.description,
      ingredients: this.recipeForm.value?.ingredients
    }
    this.store.dispatch(addRecipe({post}))
    this.route.navigateByUrl('/recipelist')
    }
  }
}
