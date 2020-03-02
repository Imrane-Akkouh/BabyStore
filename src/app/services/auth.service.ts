import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;
  constructor(private router: Router) { }

  signupUser(email: string, password: string){
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(res=>{
      this.router.navigate(['/']);
    })
    .catch(error=>console.log(error));
  }

  signinUser(email: string, password: string){
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(
      response => {
        firebase.auth().currentUser.getIdToken()
        .then(token => {
          this.token = token;
          this.router.navigate(['/']);
        })
      }
    ).catch(error => console.log(error));
  }

  getToken(){
    return firebase.auth().currentUser.getIdToken();
  }

  logout(){
    firebase.auth().signOut().then(res=>{
      this.token = null;
      this.router.navigate(['/']);
    })
  }

  isAuthenticated(){
    return this.token != null;
  }
}
