import {Component, Input, OnInit} from '@angular/core';
import { Hero } from './hero';
import { HeroService } from  './hero.service'
import {Router} from "@angular/router";


@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl:"heroes.component.html",
  styleUrls :["heroes.component.css"],
  providers: [HeroService]

})

export class HeroesComponent implements OnInit{

  ngOnInit(): void {
    this.heroService.getHeroes().then(heroes=>this.heroes=heroes);
  }

  constructor(
    private heroService: HeroService,
    private router: Router,
  ) { }


  heroes: Hero[];
  selectedHero: Hero;



  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail():void{
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
