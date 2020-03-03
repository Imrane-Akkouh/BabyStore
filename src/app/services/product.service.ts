import { Injectable, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit {

  

  constructor() { }

  ngOnInit(){ }

  editProduct(prod: Product){
    return firebase.firestore().collection('products').doc(prod.id).update(prod)
  }

  deleteProduct(id: string){
    firebase.firestore().collection('products').doc(id).delete();
  }
}
