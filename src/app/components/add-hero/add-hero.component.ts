import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { Hero } from '../heroes/interfaces/hero.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.scss']
})
export class AddHeroComponent implements OnInit {
  heroName: string = '';
  heroCompany: string = '';
  heroDescription: string = '';

  constructor( private _heroesService: HeroesService, 
               private router: Router) { }

  ngOnInit(): void {}

  addHero(): void {
    let hero: Hero = {
      id: Math.floor(Math.random() * 100) + 8,
      name: this.heroName,
      company: this.heroCompany,
      description: this.heroDescription,
      img: "assets/img/spiderman.png" // Default image
    }
    this._heroesService.addHero(hero).subscribe( hero =>
    {
        window.location.reload();
    });
  }

}
