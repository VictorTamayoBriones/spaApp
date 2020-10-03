import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'
import { Heroe, HeroesService } from '../../servicies/heroes.servicie';

@Component({
  selector: 'app-busca-heroe',
  templateUrl: './busca-heroe.component.html'
})
export class BuscaHeroeComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor( private activatedRoute:ActivatedRoute,
               private _heroesService:HeroesService,
               private router:Router
  ) { 
    this.activatedRoute.params.subscribe( params =>{
      this.heroes = this._heroesService.buscarHeroe(params['nombre']);
      console.log(this.heroes);
    })
  }

  ngOnInit(): void {
  }
  verHeroe( idx:number){
    console.log(idx);
    this.router.navigate( ['./heroe',idx] );
  }
}
