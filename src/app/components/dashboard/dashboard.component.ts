import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isUser = false;
  isAdmin = false;
  productsCol: AngularFirestoreCollection<Product>;
  products: Observable<Product[]>;
  constructor(private afs: AngularFirestore) { }

  ngOnInit(): void {
    this.productsCol = this.afs.collection('products');
    this.products = this.productsCol.snapshotChanges().pipe(map(actions => {       
      return actions.map(a => {
        const data = a.payload.doc.data() as Product;
        return data;
      });
    }))
  }

  deleteProduct(){
  }

  buyProduct(){

  }

}
