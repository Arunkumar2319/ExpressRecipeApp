import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs";
import { RecipeService } from "src/app/appService/recipe.service";
import { AddFavourite, AddFavouriteSuccess } from "src/app/model/addFavourite.model";
import { favouriteRecipeSuccess } from "src/app/model/favouriteRecipe.model";
import { RecipeResponse, RecipeSuccessResponse } from "src/app/model/recipeResponse.model";
import { removeFavouriteIds } from "src/app/model/removeFavourite.model";
import { Action_Type, AddToFavouriteSuccess, getAllFavouriteSuccess, getAllRecipeSuccess, RemoveFromFavouriteSuccess } from "./post.actions";

@Injectable()
export class postEffects{
    constructor(private recipeService: RecipeService, private action$: Actions ){}

    LoadAllRecipeData$ = createEffect(()  => {
        return this.action$.pipe(ofType(Action_Type.onGetAllRecipes),
            switchMap(() => this.recipeService.fetchAllDatas().pipe(
                map((data: RecipeSuccessResponse) => { 
                    return getAllRecipeSuccess(data); 
                })
            )
            )
        );
    });
    LoadAllFavouriteRecipe$ = createEffect(()  => {
        return this.action$.pipe(ofType(Action_Type.onGetAllFavourites),
            switchMap(() => this.recipeService.fetchAllFavDatas().pipe(
                map((favourite: favouriteRecipeSuccess) => { 
                    return getAllFavouriteSuccess(favourite); 
                })
            )
            )
        );
    });
    AddToFavouriteRecipe$ = createEffect(()  => {
        return this.action$.pipe(ofType(Action_Type.onAddToFavourites),
            switchMap((action: AddFavouriteSuccess) => this.recipeService.addRecipeToFavourite(action.favRecipeMap).pipe(
                map(() => { 
                    return AddToFavouriteSuccess(); 
                })
            )
            )
        );
    });
    RemoveFromFavouriteRecipe$ = createEffect(()  => {
        return this.action$.pipe(ofType(Action_Type.onRemoveFavourites),
            switchMap((action: removeFavouriteIds) => this.recipeService.deleteRecipeFromFavourite(action.favRecipeRemoveIds).pipe(
                map(() => { 
                    return RemoveFromFavouriteSuccess(); 
                })
            )
            )
        );
    })
}