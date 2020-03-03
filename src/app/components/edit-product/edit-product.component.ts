import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/models/product.model';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product: Product;

  constructor(
    private router: Router,
    private prodService: ProductService
    ) { }

  ngOnInit(): void {
    if(history.state.data == null){
      this.router.navigate(['/']);
    }else{
      this.product = history.state.data as Product;
    }
  }

  onSave(){
    this.prodService.editProduct(this.product)
    .then(res=>{
      this.router.navigate(['/']);
    })
  }

  onCancel(){
    this.router.navigate(['/']);
  }

}
