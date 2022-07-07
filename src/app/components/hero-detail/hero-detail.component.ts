import { Hero } from './../heroes/interfaces/hero.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  hero: any = {}
  id: number = 0

  constructor(
    private activatedRoute: ActivatedRoute, 
    private _heroesService: HeroesService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id']
    })

    this.getHero();
  }

  getHero(): void {
    this._heroesService.getHero(this.id)
    .pipe(
      tap ((hero: Hero) => 
        this.hero = hero
      ))
    .subscribe();
  }

}
