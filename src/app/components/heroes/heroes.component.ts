import { Hero } from './interfaces/hero.interface';
import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[]= [];
  searchText: any = ''

  constructor(private _heroesService: HeroesService) { }

  ngOnInit(): void {
    this._heroesService.getHeroes()
    .pipe(
      tap ((heroes: Hero[]) => this.heroes = heroes)
    )
    .subscribe();

  }

  searchHero(value: string) {

    
  }
}
