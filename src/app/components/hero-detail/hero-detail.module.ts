import { HeroDetailRoutingModule } from './hero-detail-routing.module';
import { HeroDetailComponent } from './hero-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HeroDetailComponent],
  imports: [
    CommonModule,
    HeroDetailRoutingModule
  ],
  exports: [HeroDetailComponent]
})
export class HeroDetailModule { }
