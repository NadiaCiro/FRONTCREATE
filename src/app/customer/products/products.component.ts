import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiProductsAllService } from '../services/api-products-all.service';
import { Product } from '../interfaces/product.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public listaProductos:any =[]

  constructor(private apiProductsAllService: ApiProductsAllService, private renderer: Renderer2, private router: Router){}

  ngOnInit(): void {
    this.llenarData();
    // Estilos del body
    this.renderer.setStyle(document.body, 'background-color', 'black');
    // this.renderer.setStyle(document.body, 'width','100%');
    // this.renderer.setStyle(document.body, 'height','100vh');
    // this.renderer.setStyle(document.body, 'display','flex');
    this.renderer.setStyle(document.body, 'justify-content','center');
    this.renderer.setStyle(document.body, 'align-items','center'); 
    // this.renderer.setStyle(document, 'box-sizing', 'border-box');
   
  }

  public llenarData(){
    this.apiProductsAllService.get('http://localhost:3001/api/products').subscribe(data => [
      this.listaProductos=data
    ])
  }

  addToCart(product:Product){
    return this.apiProductsAllService.addProduct(product);
  }
  productDetail(product:Product){
    this.apiProductsAllService.setProductDetails(product);
    this.router.navigate(['/products/detailsproducts'])
  }
}
