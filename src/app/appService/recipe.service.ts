import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http"
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { RecipeResponse } from "../model/recipeResponse.model";
import { favouriteRecipe } from "../model/favouriteRecipe.model";

interface recipeObj{
    id?: number;
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


    fetchAllDatas(): Observable<RecipeResponse>{
        return this.http.get<RecipeResponse>(
            this.serviceApiUrl + "recipes"
        );
    }
    fetchAllFavDatas(){
        return this.http.get<Observable<favouriteRecipe>>(this.serviceApiUrl + "favourites")
    }

    addNewRecipeItem(data:recipeObj){
        return this.http.post(this.serviceApiUrl+ "addRecipe", data)
    }
    updateRecipeById(data:recipeObj){
        return this.http.post(this.serviceApiUrl+ "api/updateid", data)
    }
    getRecipeById(id: any){
        return this.http.get(this.serviceApiUrl+ "api/id", id)
    }
    addRecipeToFavourite(data:favouriteRecipe){
        return this.http.post(this.serviceApiUrl+ "api/addFavourite", data)
    }
    deleteRecipeFromFavourite(data:favouriteRecipe){
        return this.http.delete(this.serviceApiUrl+ "api/deleteById?userId="+ data.userId +"&favId=" + data.favId)
    }
}