import { Hero } from './../heroes/interfaces/hero.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.scss']
})
export class EditHeroComponent implements OnInit {
  hero: any = {}
  id: number = 0

  constructor(
    private router: Router,
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
    .subscribe((hero: Hero) => this.hero = hero);
  }

  editHero(): void {
    this._heroesService.editHero(this.hero)
    .subscribe((hero: Hero) => {
        console.log(hero);
        this.router.navigate(["/heroes"])
      }
    );
  }

}
