import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser : User;
  token: string;
  constructor(private router: Router) { }

  signupUser(email: string, password: string){
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(cred=>{
      this.currentUser = new User(cred.user.uid, cred.user.email, 'user',[])
      return firebase.firestore().collection('users').doc(cred.user.uid)
      .set(Object.assign({}, this.currentUser));
    })
    .then(res=>{
      firebase.auth().currentUser.getIdToken()
      .then(token=>{
        this.token = token;
        this.router.navigate(['/']);
      })
    })
    .catch(error=>console.log(error));
  }

  signinUser(email: string, password: string){
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(
      cred => {
        return  firebase.firestore().collection('users').doc(cred.user.uid).get()
          .then(doc=>{
            console.log(doc.data());
            return this.currentUser = doc.data() as User;
          })
      }
    )
    .then(res=>{
      firebase.auth().currentUser.getIdToken()
        .then(token => {
          this.token = token;
          this.router.navigate(['/']);
        })
    })
    .catch(error => console.log(error));
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

  isAdmin(){
    return this.currentUser.role == 'admin';
  }

  isUser(){
    return this.currentUser.role == 'user';
  }

  getCurrentUser(){
    return this.currentUser;
  }
}
