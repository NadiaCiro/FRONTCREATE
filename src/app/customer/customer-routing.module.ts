import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { DetailsProductsComponent } from './details-products/details-products.component';

const routes: Routes =[
  {
    path:'',
    component:ProductsComponent,
  },
  {
    path: 'profile',
    component:ProfileComponent
  },
  {
    path: 'detailsproducts',
    component:DetailsProductsComponent
  }

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CustomerRoutingModule { }
