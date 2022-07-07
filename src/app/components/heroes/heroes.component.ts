import { Hero } from './interfaces/hero.interface';
import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { tap } from 'rxjs/operators';
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

  constructor(private _heroesService: HeroesService, 
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(): void {
    this._heroesService.getHeroes()
    .pipe(
      tap ((heroes: Hero[]) => this.heroes = heroes)
    )
    .subscribe();
  }

  searchHero(value: string): void {
    this.heroes = this._heroesService.searchHero(value);
  }

  deleteHero(id: number): void {
    this._heroesService.deleteHero(id).subscribe();
    this.heroes = this.heroes.filter(item => item.id != id)
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
}