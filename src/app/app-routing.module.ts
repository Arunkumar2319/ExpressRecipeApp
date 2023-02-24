import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { ReipeListComponent } from './reipe-list/reipe-list.component';

const routes: Routes = [
  {path:'recipelist', component: ReipeListComponent},
  {path:'newRecipe', component: AddRecipeComponent},
  { path: 'login', component: LoginPageComponent}
  // {path:'recipeList/editRecipe/:id', component: EditRecipeComponent},
  // {
  //   path: 'recipelist',
  //   loadChildren: () => 
  //     import ('./reipe-list/post.module').then((m) => m.postModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
