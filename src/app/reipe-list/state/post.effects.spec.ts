import { TestBed } from "@angular/core/testing";
import { Observable, of } from "rxjs";
// import { MockRecipeService } from "src/app/appService/mockService";
import { RecipeService } from "src/app/appService/recipe.service";
import { RecipeResponse, RecipeSuccessResponse } from "src/app/model/recipeResponse.model";
import { AppState } from "src/app/store/app.state";
import { getAllRecipe, getAllRecipeSuccess } from "./post.actions";
import { postEffects } from "./post.effects";
import { initialState } from "./post.state";
import * as MyActions from "./post.actions"

describe('Test the effects 1',() => {
  let actions$: Observable<any>;
  let store: AppState;
  let httpService: RecipeService;
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [
//         postEffects,
//         provideMockActions(() => actions$),
//         provideMockStore({ initialState }),
//         { provide: RecipeService, useClass: MockRecipeService },
//       ],
//     });
    // effects = TestBed.get(postEffects);
    // store = TestBed.inject(MockStore);
    // httpService = TestBed.inject(RecipeService);
//   });
    it('check the get all recipe effect', () =>{
        // const spy = spyOn(httpService, 'fetchAllDatas').and.callThrough();
        let effects: postEffects;

        const action = MyActions.getAllRecipe
        const completion = MyActions.getAllRecipeSuccess
        const actions = hot('--a', {a: action})
        const expected = cold('--b', {b: completion})
        expect(effects.LoadAllRecipeData$).toBe(expected)
        actions$ = of(getAllRecipe);
        effects.LoadAllRecipeData$.subscribe((res) => {
            console.log(res)
            expect(res).not.toBeNull();
        })
    })
    it('check the get all favourites recipe effect', () =>{
        // const spy = spyOn(httpService, 'fetchAllDatas').and.callThrough();
        let effects: postEffects;      
        actions$ = of(getAllRecipe);
        effects.LoadAllFavouriteRecipe$.subscribe((res) => {
            console.log(res)
            expect(res).not.toBeNull();
        })
    })
})


function hot(arg0: string, arg1: { a: import("@ngrx/store").ActionCreator<MyActions.Action_Type.onGetAllRecipes, () => import("@ngrx/store/src/models").TypedAction<MyActions.Action_Type.onGetAllRecipes>>; }): any {
    throw new Error("Function not implemented.");
}

function cold(arg0: string, arg1: { b: import("@ngrx/store").ActionCreator<MyActions.Action_Type.GET_ALL_RECIPE_SUCCESS, (props: { data: any; }) => { data: any; } & import("@ngrx/store/src/models").TypedAction<MyActions.Action_Type.GET_ALL_RECIPE_SUCCESS>>; }) {
    throw new Error("Function not implemented.");
}

