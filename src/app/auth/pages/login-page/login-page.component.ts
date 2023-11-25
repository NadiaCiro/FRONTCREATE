import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
//import { Router } from "@angular/router";



@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  usuario!:FormGroup;//nuevo
  private token:string='';
  errorauth:boolean=false;
  private authService=inject( AuthService );

  constructor(private fb:FormBuilder, private router: Router){
    this.crearformulario();
  }


  get correoNovalid(){
    return this.usuario.get('email')?.invalid && this.usuario.get('email')?.touched
  }
  get contrasenaNovalid(){
    return this.usuario.get('password')?.invalid && this.usuario.get('password')?.touched
  }

  crearformulario(){
    this.usuario=this.fb.group({


      email:    ['', [ Validators.required, Validators.email ] ],
      password: ['', [ Validators.required, Validators.minLength(6) ] ]
    });
  }

  //funcion submit del boton iniciar sesion
  login() {

    if (this.usuario.invalid){
      return Object.values(this.usuario.controls).forEach(control=>{
        control.markAllAsTouched();
      }) 

    }else{
      const { email, password } = this.usuario.value;
      this.authService.login( email, password )
      .subscribe(success => {
        this.token=success.toString();
        this.router.navigate(['/'])
        },err =>{
          this.errorauth=true;
        })
    }    
  }
}
