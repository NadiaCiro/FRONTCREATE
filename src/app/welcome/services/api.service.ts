import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // private urlApi ='http://localhost:3001/api/destacados';

  constructor(private http: HttpClient) { }

  public get(url:string){
    return this.http.get(url);
  }
}
