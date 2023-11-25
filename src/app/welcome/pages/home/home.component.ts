import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  title = 'portafolio-app';
  public listaProductos:any =[]

  constructor (private apiService: ApiService){}

  ngOnInit(): void {
      this.llenarData();
  }

  public llenarData(){
    this.apiService.get('http://localhost:3001/api/destacados').subscribe(data => [
      this.listaProductos=data
    ])
  }

}
