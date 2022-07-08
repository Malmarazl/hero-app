import { SpinnerInterceptor } from './components/shared/interceptors/spinner.interceptor';
import { SpinnerModule } from './components/shared/spinner/spinner.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';

import { AppRoutingModule } from './app-routing.module';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule}  from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeroesService } from './services/heroes.service';
import { ModalComponent } from './components/shared/modal/modal.component';
import { AddHeroComponent } from './components/add-hero/add-hero.component';
import { EditHeroComponent } from './components/edit-hero/edit-hero.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroesComponent,
    HeroDetailComponent,
    ModalComponent,
    AddHeroComponent,
    EditHeroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    SpinnerModule
  ],
  entryComponents: [ModalComponent],
  providers: [HeroesService, 
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
