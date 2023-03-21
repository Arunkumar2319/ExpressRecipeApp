import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReipeListComponent } from './reipe-list/reipe-list.component';
import { appReducer } from './store/app.state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeService } from './appService/recipe.service';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth/state/auth.effects';
import { postEffects } from './reipe-list/state/post.effects';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { GoogleSignInService } from './auth/login-page/google-SignIn.service';

@NgModule({
  declarations: [
    AppComponent, 
    ReipeListComponent,
    AddRecipeComponent,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(appReducer ),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([AuthEffects,postEffects]),
    CommonModule
    
  ],
  providers: [RecipeService,postEffects,GoogleSignInService],
  bootstrap: [AppComponent]
})
export class AppModule { }
