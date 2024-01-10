import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { AuthService } from '../auth/services/auth.service';
import { FormsModule } from '@angular/forms';
import { CartComponent } from '../customer/cart/cart.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
