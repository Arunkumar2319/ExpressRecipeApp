import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { getAllRecipe } from "../reipe-list/state/post.actions";

@Injectable({
    providedIn: "root",
})

export class MockRecipeService{
    getRecipe(){
        return of(getAllRecipe)
    }
}