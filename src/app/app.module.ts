import { HeroDetailModule } from './components/hero-detail/hero-detail.module';
import { EditHeroModule } from './components/edit-hero/edit-hero.module';
import { AddHeroModule } from './components/add-hero/add-hero.module';
import { HeroesModule } from './components/heroes/heroes.module';
import { ModalModule } from './components/shared/modal/modal.module';
import { NavbarModule } from './components/shared/navbar/navbar.module';
import { SpinnerInterceptor } from './components/shared/interceptors/spinner.interceptor';
import { SpinnerModule } from './components/shared/spinner/spinner.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { HeroesService } from './services/heroes.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavbarModule,
    ModalModule,
    HeroesModule,
    AddHeroModule,
    EditHeroModule,
    HeroDetailModule,
    HttpClientModule,
    SpinnerModule
  ],
  entryComponents: [],
  providers: [HeroesService, 
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
