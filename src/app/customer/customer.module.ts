import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import { DetailsProductsComponent } from './details-products/details-products.component';




@NgModule({
  declarations: [
    ProductsComponent,
    ProfileComponent,
    DetailsProductsComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    HttpClientModule,
    SharedModule    
  ]
})
export class CustomerModule { }
