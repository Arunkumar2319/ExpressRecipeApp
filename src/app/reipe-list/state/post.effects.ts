import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs";
import { LoginService } from "src/app/appService/login.service";
import { RecipeService } from "src/app/appService/recipe.service";
import { Action_Type, AddToFavouriteSuccess, getAllFavouriteSuccess, getAllRecipeSuccess, RemoveFromFavouriteSuccess } from "./post.actions";

@Injectable()
export class postEffects{
    constructor(private loginService: LoginService, private recipeService: RecipeService, private action$: Actions ){}

    LoadAllRecipeData$ = createEffect(()  => {
        return this.action$.pipe(ofType(Action_Type.onGetAllRecipes),
            switchMap(() => this.recipeService.fetchAllDatas().pipe(
                map((data: any) => { 
                    return getAllRecipeSuccess(data); 
                })
            )
            )
        );
    });
    LoadAllFavouriteRecipe$ = createEffect(()  => {
        return this.action$.pipe(ofType(Action_Type.onGetAllFavourites),
            switchMap(() => this.recipeService.fetchAllFavDatas().pipe(
                map((favourite: any) => { 
                    return getAllFavouriteSuccess(favourite); 
                })
            )
            )
        );
    });
    AddToFavouriteRecipe$ = createEffect(()  => {
        return this.action$.pipe(ofType(Action_Type.onAddToFavourites),
            switchMap((action) => this.recipeService.addRecipeToFavourite(action).pipe(
                map((favourite: any) => { 
                    return AddToFavouriteSuccess(); 
                })
            )
            )
        );
    });
    // RemoveFromFavouriteRecipe$ = createEffect(()  => {
    //     return this.action$.pipe(ofType(Action_Type.onRemoveFavourites),
    //         switchMap((action) => this.recipeService.deleteRecipeFromFavourite(action).pipe(
    //             map((favourite: any) => { 
    //                 return RemoveFromFavouriteSuccess(); 
    //             })
    //         )
    //         )
    //     );
    // })
}