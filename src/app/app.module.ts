import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EditHeroModule } from './components/edit-hero/edit-hero.module';
import { HeroesModule } from './components/heroes/heroes.module';
import { NavbarModule } from './components/shared/navbar/navbar.module';
import { SpinnerModule } from './components/shared/spinner/spinner.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SpinnerInterceptor } from './components/shared/interceptors/spinner.interceptor';
import { HeroesService } from './services/heroes.service';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader }  from '@ngx-translate/http-loader';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    HeroesModule,
    HttpClientModule,
    SpinnerModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    })
  ],
  exports: [TranslateModule],
  providers: [HeroesService, 
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
