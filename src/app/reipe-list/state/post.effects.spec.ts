import { TestBed } from "@angular/core/testing";
import { Observable, of } from "rxjs";
// import { MockRecipeService } from "src/app/appService/mockService";
import { RecipeService } from "src/app/appService/recipe.service";
import { getAllRecipe, getAllRecipeSuccess } from "./post.actions";
import { postEffects } from "./post.effects";
import * as MyActions from "./post.actions"
import { cold, hot } from "jasmine-marbles"

describe('Test the effects 1',() => {
  let actions$: Observable<any>;
  let httpService: RecipeService;
  let effects: postEffects;

    it('check the get all recipe effect', () =>{

        const action = MyActions.getAllRecipe
        const completion = MyActions.getAllRecipeSuccess
        // const response = cold('a',{})
        const expected = hot('b', {b: completion})
        expect(effects.LoadAllRecipeData$).toBeObservable(expected)

        actions$ = of(getAllRecipe);
        effects.LoadAllRecipeData$.subscribe((res) => {
            expect(res).not.toBeNull();
        })
    })
    it('check the get all favourites recipe effect', () =>{
       const action = MyActions.getAllFavourites
       const completion = MyActions.getAllFavouriteSuccess
       const expected = hot('a', {a: completion})
       expect(effects.LoadAllFavouriteRecipe$).toBeObservable(expected)
    })

})


