import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { ActionComponent } from './movies/action/action.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoviesService } from './movies/movie.service';
import { AdventureComponent } from './movies/adventure/adventure.component';
import { AnimationComponent } from './movies/animation/animation.component';
import { PopUpComponent } from './movies/pop-up/pop-up.component';
import { FirebaseService } from './services/firebase.service';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    ActionComponent,
    AdventureComponent,
    AnimationComponent,
    PopUpComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyD0RkoosAzK0qkrm42_BZ60EAjBkhvOOP0",
      authDomain: "movies-users-ang.firebaseapp.com",
      projectId: "movies-users-ang",
      storageBucket: "movies-users-ang.appspot.com",
      messagingSenderId: "115700977384",
      appId: "1:115700977384:web:9e4c27dbe9833c2682835d"
    })
  ],
  providers: [MoviesService, FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
