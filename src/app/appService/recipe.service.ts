import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http"
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { RecipeResponse } from "../model/recipeResponse.model";

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
        return this.http.get<Observable<any>>(this.serviceApiUrl + "favourites")
    }

    addNewRecipeItem(data:any){
        return this.http.post(this.serviceApiUrl+ "addRecipe", data)
    }
    updateRecipeById(data:any){
        return this.http.post(this.serviceApiUrl+ "api/updateid", data)
    }
    getRecipeById(id: any){
        return this.http.get(this.serviceApiUrl+ "api/id", id)
    }
    addRecipeToFavourite(data:any){
        return this.http.post(this.serviceApiUrl+ "api/addFavourite", data)
    }
    deleteRecipeFromFavourite(data:any){
        return this.http.delete(this.serviceApiUrl+ "api/deleteById?userId="+ data.userId +"&favId=" + data.favId)
    }
}