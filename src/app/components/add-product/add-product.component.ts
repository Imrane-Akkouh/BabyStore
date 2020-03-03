import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private afs: AngularFirestore) { }

  ngOnInit(): void {
  }

  onCreate(form: NgForm){
    let id = this.afs.createId();
    this.afs.collection('products').doc(id)
    .set(Object.assign({},new Product(form.value.name, form.value.description, form.value.imgUrl,id)));
    form.resetForm();
  }

  resetForm(form: NgForm){
    form.resetForm();
  }

}
