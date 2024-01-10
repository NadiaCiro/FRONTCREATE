import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, lastValueFrom } from 'rxjs';
import { Product } from '../interfaces/product.interface';


@Injectable({
  providedIn: 'root'
})
export class ApiProductsAllService {

  //Lista Productos
  private myList:Product[]=[];
  //Carrito Observable
  private myCart = new BehaviorSubject<Product[]>([]);
  myCart$ = this.myCart.asObservable();
  //para enviar al detalle de producto
  private productDet:any;
  

  constructor(private http:HttpClient) { }

  public get(url:string){
    return this.http.get(url);
  }

  // Método para establecer el objeto a compartir
  setProductDetails(product: any) {
    this.productDet=product;
    console.log(this.productDet)
  }
  // Método para obtener el objeto compartido
  getProductDetails() {
    return this.productDet;
  }

  addProduct(product: Product){
    // console.log(product)
    if(this.myList.length ===0){
      product.cantidad =1;
      this.myList.push(product)
      this.myCart.next(this.myList);
    }else{
      const productMod = this.myList.find((element)=>{
        return element.id_product === product.id_product
      })
      if(productMod){
        productMod.cantidad=productMod.cantidad+1;
        this.myCart.next(this.myList);
      }else{
        product.cantidad=1;
        this.myList.push(product)
        this.myCart.next(this.myList);
      }
    }
  }
  deleteProduct(id:number){
    this.myList=this.myList.filter((product)=>{
      return product.id_product != id
    })
    this.myCart.next(this.myList);
  }
  findProductById(id:number){
    return this.myList.find((element)=> {
      return element.id_product===id;
    })
  }
  totalCart(){
    const total = this.myList.reduce(function(acc,product){return acc + (product.cantidad*product.price);},0);
    return total;
  }
  totalUnits(){
    const total = this.myList.reduce(function(acc,product){return acc + (product.cantidad);},0);
    return total;
  }

}
