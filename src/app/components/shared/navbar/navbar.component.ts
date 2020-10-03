import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../../servicies/heroes.servicie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor( private _heroesService:HeroesService,
               private router:Router
    ) { }

  heroes:any = [];
  
  ngOnInit(): void {
  }

  buscarHeroe(termino:string){
    console.log(termino);
    this.router.navigate( ['./qheroe',termino] );
  }
}
