import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { postsReducer } from "./state/post.reducer";
import { POST_STATE_NAME } from "./state/post.selector";

@NgModule({
    declarations : [],
    imports: [
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        StoreModule.forFeature(POST_STATE_NAME, postsReducer),
        EffectsModule.forFeature()
    ]
})
export class postModule{

}