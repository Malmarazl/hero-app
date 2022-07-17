import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from '../shared/modal/modal.module';

import { PaginationPipe } from './../shared/pipes/pagination.pipe';
import { HeroesComponent } from './heroes.component';
import { AddHeroModule } from '../add-hero/add-hero.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [HeroesComponent, PaginationPipe],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ModalModule,
    AddHeroModule,
    AppRoutingModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatDialogModule,
  ]
})
export class HeroesModule { }
