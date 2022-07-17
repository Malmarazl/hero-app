import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeroDetailModule } from './components/hero-detail/hero-detail.module';
import { EditHeroModule } from './components/edit-hero/edit-hero.module';
import { AddHeroModule } from './components/add-hero/add-hero.module';
import { HeroesModule } from './components/heroes/heroes.module';
import { NavbarModule } from './components/shared/navbar/navbar.module';
import { SpinnerModule } from './components/shared/spinner/spinner.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SpinnerInterceptor } from './components/shared/interceptors/spinner.interceptor';
import { HeroesService } from './services/heroes.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    HeroesModule,
    HttpClientModule,
    SpinnerModule
  ],
  entryComponents: [],
  providers: [HeroesService, 
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
