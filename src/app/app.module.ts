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
// import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { RecipeService } from './appService/recipe.service';
import { HttpClientModule } from '@angular/common/http';
// import { LoginPageComponent } from './login-page/login-page.component';
import { EffectsModule } from '@ngrx/effects';
// import { loginEffects } from './login-page/login-page.effects';
import sweetalert2 from 'sweetalert2';
// import { AuthModule } from './auth/auth.module';
// import { LoginPageComponent } from './auth/login-page/login-page.component';
import { AuthEffects } from './auth/state/auth.effects';
import { postModule } from './reipe-list/Posts.module';
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
    // EditRecipeComponent,
    // LoginPageComponent
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
    // sweetalert2
    // SocialLoginModule,
    CommonModule
    // AuthModule
    
  ],
  providers: [RecipeService,postEffects,GoogleSignInService
    // {
    //   provide: 'SocialAuthServiceConfig',
    //   useValue: {
    //     autoLogin: false,
    //     providers: [
    //       {
    //         id: GoogleLoginProvider.PROVIDER_ID,
    //         // provider: new GoogleLoginProvider('27352635732-15dncmv5d0om19ut8utjcfl6fr9r2jgf.apps.googleusercontent.com'),
    //         provider: new GoogleLoginProvider('1088484910566-hr7m0q99aqh41rmv4p0l41u0snsrpmki.apps.googleusercontent.com')
    //       },
    //     ],
    //   } as SocialAuthServiceConfig,
    // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
