import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AddProductComponent } from './components/add-product/add-product.component';

let firebaseConfig = {
  apiKey: "AIzaSyAapRHK1WdqHGVjzgH2eYModPBC5_GNCWU",
  authDomain: "babystore-76a17.firebaseapp.com",
  databaseURL: "https://babystore-76a17.firebaseio.com",
  projectId: "babystore-76a17",
  storageBucket: "babystore-76a17.appspot.com",
  messagingSenderId: "1075460883103",
  appId: "1:1075460883103:web:3df33be4f8407bdf4398aa"
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    EditProductComponent,
    SignInComponent,
    SignUpComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
