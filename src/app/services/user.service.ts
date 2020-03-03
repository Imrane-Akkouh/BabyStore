import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { AuthService } from './auth.service';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private authService: AuthService) { }

  buyProduct(prodId:string){
    let user = this.authService.getCurrentUser();
    user.products.push(prodId);
    firebase.firestore().collection('users').doc(user.id).update(Object.assign({},user));
  }

  returnProduct(prodId: string){
    let user = this.authService.getCurrentUser();
    user.products = user.products.filter(id => id != prodId);
    firebase.firestore().collection('users').doc(user.id).update(Object.assign({},user));
  }
}
