import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-destacados',
  templateUrl: './destacados.component.html',
  styleUrls: ['./destacados.component.css']
})
export class DestacadosComponent implements OnInit {

  @Input() dataEntrante:any;
  public image:string | undefined;
  constructor(){}

  ngOnInit(): void {
      // this.image ='https://www.camiseriaeuropea.com/cdn/shop/products/696_001.jpg?v=1633559189'
      //console.log('entrando data: ', this.dataEntrante);
  }

}
