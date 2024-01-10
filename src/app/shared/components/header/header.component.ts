import { Component, HostListener, OnInit } from '@angular/core'; //Search OnInit
import { AuthService } from 'src/app/auth/services/auth.service';
// import { LocalstorageService } from 'src/app/auth/services/localstorage.service';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/welcome/services/api.service'; //Search

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  up:boolean=true;
  search: String=''; //Variable para buscar
  isLoggedIn: boolean = false;
  username: string = '';
  viewCart: boolean = false;

  constructor(private authService: AuthService, private router: Router, private apiService: ApiService) {//Se incorporó private apiService: ApiService
    this.isLoggedIn = this.authService.isLoggedInUser;
    this.username = this.authService.getUsername;
  }

  @HostListener('window:scroll',['$event']) onscroll(){
    if(window.scrollY > 100){
      this.up=false;
    }else{
      this.up=true;
    }
  }

  logout(){
    this.authService.Logout();
    this.isLoggedIn = false;
    this.username = '';
    this.router.navigate(['/'])
  }

  onToggleCart(event: Event){
    event.preventDefault();
    this.viewCart=!this.viewCart;
  }

  ngOnInit(): void {//Search
    this.loadSearch()
  }
  
  //Search
  //Keyup: Cuando se escribe algo escucha los cambios, es un metodo "loadSearch", cargar búsqueda.
  //Filter se puede filtrar por marca, precio, color, talla.
  loadSearch(){
    console.log('this.search --> ',this.search)
    /*Si es tipo string y validar si el tamaño de la cadena de texto está vacia,  ?searchNY=${}  Recibir en la url de mi api de lo que venga la variable.  */
    const filter = (typeof this.search == 'string' && this.search.length > 0) ? `${this.search}`: ''
    this.apiService.getSearchProducts(filter).subscribe(
      /* Dentro del subscribe se definen de forma visual */
      response => console.log('response', response)

    )
  }

}
