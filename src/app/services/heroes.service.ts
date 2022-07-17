import { Hero } from '../components/models/hero.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private apiUrl = 'http://localhost:8080/heroes';

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.apiUrl);
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.apiUrl}/${id}`;
    
    return this.http.get<Hero>(url);
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.apiUrl, hero);
  }

  editHero(hero: Hero): Observable<Hero> {
    const url = `${this.apiUrl}/${hero.id}`;
    return this.http.put<Hero>(url, hero);
  }

  deleteHero(id: number): Observable<Hero> {
    const url = `${this.apiUrl}/${id}`;

    return this.http.delete<Hero>(url);
  }

  searchHero(value: string, heroes: Hero[]): Hero[] {
        if(!value || !heroes) {
          return heroes;
        } else {
          return heroes.filter(hero => hero.name.toLowerCase().indexOf(value) !== -1);
        }
  }
}
