import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { Product } from 'src/app/models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  constructor(private afs: AngularFirestore, private router: Router) { }

  ngOnInit(): void {
  }

  onSave(form: NgForm){
    
  }

  onCancel(form: NgForm){
    form.resetForm();
    this.router.navigate(['/']);
  }

}
