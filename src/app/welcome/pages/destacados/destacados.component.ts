import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { environment } from 'src/environments/environment';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ApiProductsAllService } from 'src/app/customer/services/api-products-all.service';
import { Product } from 'src/app/customer/interfaces/product.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-destacados',
  templateUrl: './destacados.component.html',
  styleUrls: ['./destacados.component.css']
})
export class DestacadosComponent implements OnInit {
  apiUrl = `${environment.baseUrl}`
  public listaProductos:any =[]
  
  constructor(private apiService: ApiService, private apiProductsAllService: ApiProductsAllService, private router: Router){}

  ngOnInit(): void {
    this.llenarData();
  }
  public llenarData(){
    this.apiService.get(`${this.apiUrl}/api/destacados`).subscribe(data => [
      this.listaProductos=data
    ])
  }
  productDetail(product:Product){
    this.apiProductsAllService.setProductDetails(product);
    this.router.navigate(['/products/detailsproducts'])
  }

  slideConfig={
    "slidesToShow":3,
    "slidesToScroll":1, 
    "infinite":true, 
    "nextArrow":false, 
    "prevArrow":false,
    "responsive":[
      {
        "breakpoint":992,
        "settings":{
          "slidesToShow":2,
          "slidesToScroll":1,
          "arrows":true,
          "infinite":true
        }
      },
      {
        "breakpoint":768,
        "settings":{
          "slidesToShow":1,
          "slidesToScroll":1,
          "arrows":true,
          "infinite":true
        }
      }
    ]};

}
