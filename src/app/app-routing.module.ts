import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AddProductComponent } from './components/add-product/add-product.component';


const routes: Routes = [{
  path:"", component:DashboardComponent, pathMatch:"full"
},{
  path:"signin", component:SignInComponent
},{
  path:"signup", component:SignUpComponent
},{
  path:"edit", component:EditProductComponent
},{
  path:"add", component:AddProductComponent
},{
  path:"**", component:DashboardComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
