import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http"
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { RecipeSuccessResponse } from "../model/recipeResponse.model";
import { favouriteRecipe, favouriteRecipeSuccess } from "../model/favouriteRecipe.model";

interface recipeObj{
    id: number;
    recipeName: string;
    description: string;
    ingredients?: string;
 }
 
@Injectable({
    providedIn: "root",
})
 
export class RecipeService{
    constructor(private http: HttpClient){}

    serviceApiUrl: String = environment.serviceApiUrl;


    fetchAllDatas(): Observable<RecipeSuccessResponse>{
        return this.http.get<RecipeSuccessResponse>(
            this.serviceApiUrl + "recipes"
        );
    }
    fetchAllFavDatas(): Observable<favouriteRecipeSuccess>{
        return this.http.get<favouriteRecipeSuccess>(this.serviceApiUrl + "favourites")
    }

    addNewRecipeItem(data:recipeObj){
        return this.http.post(this.serviceApiUrl+ "addRecipe", data)
    }
    updateRecipeById(data:recipeObj){
        return this.http.post(this.serviceApiUrl+ "api/updateid", data)
    }   
    getRecipeById(id: number){
        return this.http.get(this.serviceApiUrl+ "api/id?id=" + id)
    }
    addRecipeToFavourite(data:favouriteRecipe){
        return this.http.post(this.serviceApiUrl+ "api/addFavourite", data)
    }
    deleteRecipeFromFavourite(data:favouriteRecipe){
        return this.http.delete(this.serviceApiUrl+ "api/deleteById?userId="+ data.userId +"&favId=" + data.favId)
    }
}