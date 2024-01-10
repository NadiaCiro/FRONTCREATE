import { Component, OnInit, Renderer2 } from '@angular/core';
import { ApiProductsAllService } from '../services/api-products-all.service';
import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'app-details-products',
  templateUrl: './details-products.component.html',
  styleUrls: ['./details-products.component.css']
})

export class DetailsProductsComponent implements OnInit {
  
  product:any;
  // public listaProductos:any =[]

  constructor(private apiProductsAllService: ApiProductsAllService, private renderer: Renderer2){}

/*app - header*/
  ngOnInit(): void {
    // this.llenarData();
    // Estilos del body
    this.renderer.setStyle(document.body, 'background-color', 'black');
    this.renderer.setStyle(document.body, 'justify-content','center');
    this.renderer.setStyle(document.body, 'align-items','center');

    this.product=this.apiProductsAllService.getProductDetails();
  }

  // public llenarData(){
  //   this.apiProductsAllService.get('http://localhost:3001/api/products').subscribe(data => [
  //     this.listaProductos=data
  //   ])
  // }
  addToCart(product:Product){
    return this.apiProductsAllService.addProduct(product);
  }

/* Cantidad */
// numero: number = 1


}