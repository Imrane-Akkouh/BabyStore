import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  productsCol: AngularFirestoreCollection<Product>;
  products: Observable<Product[]>;
  constructor(
    private afs: AngularFirestore,
    private authService: AuthService,
    private userService: UserService,
    private ProductService: ProductService,
    private router: Router 
    ) { }

  ngOnInit(): void {
    this.productsCol = this.afs.collection('products');
    this.products = this.productsCol.snapshotChanges().pipe(map(actions => {       
      return actions.map(a => {
        const data = a.payload.doc.data() as Product;
        return data;
      });
    }))
  }

  deleteProduct(id: string){
    this.ProductService.deleteProduct(id);
  }

  buyProduct(id: string){
    if(!this.authService.isAuthenticated()){
      this.router.navigate(['/signin']);
    }else{
      this.userService.buyProduct(id);
    }
  }

  returnProduct(id: string){
    this.userService.returnProduct(id)
  }

  isUser(){
    return (this.authService.isAuthenticated() && this.authService.isUser());
  }

  isAdmin(){
    return (this.authService.isAuthenticated() && this.authService.isAdmin());
  }

  isBought(prodId: string){
    if(this.authService.isAuthenticated()){
      return this.authService.getCurrentUser().products.includes(prodId);
    }else{
      return false;
    }
  }

}
