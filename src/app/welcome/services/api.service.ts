import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //private urlApi ='http://localhost:3001/api/destacados';
  //al ejecutar "ng serve" Angular sabe que estamos en 
  //desarrollo por lo que trae la Url de "localhost"
  private urlSearch =`${environment.baseUrl}`;  //Search, descomentar.

  constructor(private http: HttpClient) { }

  public get(url:string){
    return this.http.get(url);
  }

  //Search: get products
  getSearchProducts(title:string){
    //return this.http.get(`${this.urlSearch}/api/search`, body )
    return this.http.get(`${this.urlSearch}/api/search/${title}`);
    //Localhost: 3001/products/getSearch?searchBy= Valor del parámetro para buscar
    
  }
}
