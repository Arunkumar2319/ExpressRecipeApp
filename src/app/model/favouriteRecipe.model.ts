export class favouriteRecipe{
    id?: number;
    userId: number;
    favId: number;
}

export class favouriteRecipeSuccess{
    favourite: favouriteRecipe
}