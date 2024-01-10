import { Component, OnInit, Renderer2 } from '@angular/core';
import { ApiProductsAllService } from '../services/api-products-all.service';
//import { Profile } from '../../interfaces/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  /*profile:Profile = {
    name_: "",
    last_name_: "",
    date_birth_: "",
    gender_: "",
    email_: "",
    mobile_: "",
    country_: "",
    municipality_: "",
    address_: "",
    neighborhood_: "",
    
  }*/

  public listaProductos:any =[]

  constructor(private apiProductsAllService: ApiProductsAllService, private renderer: Renderer2){}

/*app - header*/
  ngOnInit(): void {
    this.llenarData();
    // Estilos del body
    this.renderer.setStyle(document.body, 'background-color', 'black');
    this.renderer.setStyle(document.body, 'justify-content','center');
    this.renderer.setStyle(document.body, 'align-items','center'); 


  }

  public llenarData(){
    this.apiProductsAllService.get('http://localhost:3001/api/products').subscribe(data => [
      this.listaProductos=data
    ])
  }



}
