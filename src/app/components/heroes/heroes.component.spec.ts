import { HeroesService } from 'src/app/services/heroes.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HeroesComponent } from './heroes.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { ModalModule } from 'src/app/shared/modal/modal.module';
import { PaginationPipe } from 'src/app/shared/pipes/pagination.pipe';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  let compiled: HTMLElement;
  let service: HeroesService;
  let httpMock: HttpTestingController;
  let dialog: MatDialog;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesComponent, PaginationPipe ],
      imports: [HttpClientTestingModule, MatDialogModule, ModalModule, TranslateModule.forRoot()],
      providers: [HeroesService, MatDialog ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    dialog = TestBed.get(MatDialog);

    service = TestBed.inject(HeroesService);
    httpMock = TestBed.inject(HttpTestingController);

    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should draw hero list', () => {
    console.log(compiled.innerHTML);
    expect(compiled.innerHTML).toContain('main.title');
  });
});
