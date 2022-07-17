import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ModalModule } from '../shared/modal/modal.module';

import { PaginationPipe } from './../shared/pipes/pagination.pipe';
import { HeroesComponent } from './heroes.component';
import { AddHeroModule } from '../add-hero/add-hero.module';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [HeroesComponent, PaginationPipe],
  imports: [
    CommonModule,
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
    TranslateModule
  ]
})
export class HeroesModule { }