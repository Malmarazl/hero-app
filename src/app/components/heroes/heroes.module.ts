import { HeroesRoutingModule } from './heroes-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

import { HeroesComponent } from './heroes.component';
import { AddHeroModule } from '../add-hero/add-hero.module';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { ModalModule } from 'src/app/shared/modal/modal.module';
import { PaginationPipe } from 'src/app/shared/pipes/pagination.pipe';

@NgModule({
  declarations: [HeroesComponent, PaginationPipe],
  imports: [
    CommonModule,
    ModalModule,
    AddHeroModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatDialogModule,
    TranslateModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
