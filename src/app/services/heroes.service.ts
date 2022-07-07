import { Hero } from './../components/heroes/interfaces/hero.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private apiUrl = 'http://localhost:8080/heroes'; // change in casa you want to use other port

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<any> {
    return this.http.get<Hero[]>(this.apiUrl);
  }
}
