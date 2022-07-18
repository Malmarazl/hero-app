import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Hero } from '../components/models/hero.interface';

import { HeroesService } from './heroes.service';

describe('HeroesService', () => {
  let service: HeroesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:  [HttpClientModule],
      providers: [HeroesService]
    });
    service = TestBed.inject(HeroesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get heroes', (done) => {
    service.getHeroes().subscribe(heroes => {
      expect(heroes.length).toBe(7);
    });
    done();
  });

  it('should get one hero', (done) => {
    service.getHero(1).subscribe(hero => {
      expect(hero.name).toBe('AQUAMAN');
    })
    done();
  });

  it ('should create hero', (done) => {
    const newHero: Hero = {
      id: 100,
      name: 'Test',
      company: 'Test',
      description: 'Description test',
      img: ''
    };
    service.addHero(newHero).subscribe(hero => {
      expect(hero.name).toBe('Test');
    });
    done();
  });

  it('should edit hero', (done) => {
    const editHero: Hero = {
      id: 100,
      name: 'Test1',
      company: 'Test1',
      description: 'Description test1',
      img: ''
    };
    service.editHero(editHero).subscribe (hero => {
      expect(hero.name).toBe('Test1');
    });
    done();
  });

  it('should remove hero', (done) => {
    service.deleteHero(100).subscribe();
    done();

    service.getHeroes().subscribe(heroes => {
      expect(heroes.length).toBe(7);
    });
  });
});
