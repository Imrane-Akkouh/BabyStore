import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit {

  

  constructor() {

  }

  ngOnInit(){
    
  }

  createProduct(name: string, description: string, imgUrl: string){

  }
}
