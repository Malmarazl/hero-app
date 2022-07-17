import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { Hero } from '../models/hero.interface';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.scss']
})
export class AddHeroComponent implements OnInit {
  heroName: string = '';
  heroCompany: string = '';
  heroDescription: string = '';
  formNewHero: FormGroup = new FormGroup('');

  constructor( private _heroesService: HeroesService) { 
  }

  ngOnInit(): void {
    this.formNewHero = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4)]),
      company: new FormControl('', [
        Validators.required]),
      description: new FormControl('', [
          Validators.required,
          Validators.minLength(8)]),
    });
  }

  addHero(): void {
    if (this.formNewHero.valid) {
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

  get name() { return this.formNewHero.get('name'); }
  get company() { return this.formNewHero.get('company'); }
  get description() { return this.formNewHero.get('description'); }
}
