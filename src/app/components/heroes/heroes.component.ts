import { Hero } from '../models/hero.interface';
import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../shared/modal/modal.component';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[]= [];
  showAdd: Boolean = false;
  page: number = 0;

  constructor(private _heroesService: HeroesService, 
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(): void {
    this._heroesService.getHeroes()
    .subscribe((heroes: Hero[]) => this.heroes = heroes);
  }

  searchHero(value: string): void {
    this._heroesService.getHeroes().subscribe(heroes => {
        this.heroes = this._heroesService.searchHero(value, heroes);
    });
  }

  deleteHero(id: number): void {
    this._heroesService.deleteHero(id).subscribe();
    this.heroes = this.heroes.filter(hero => hero.id != id)
  }

  openModal(id: number): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: '¿Estás seguro de que quieres eliminar al héroe?'
    });
    dialogRef.afterClosed().subscribe( res => {
      if (res) this.deleteHero(id);
    }
    )
  }

  nextPage() {
    this.page += 1;
  }

  prevPage() {
    if (this.page > 0) this.page -= 1;
  }
}