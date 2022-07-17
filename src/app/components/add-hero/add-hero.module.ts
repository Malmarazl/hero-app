import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpperCaseDirectiveDirective } from '../shared/directives/upper-case-directive.directive';
import { AddHeroComponent } from './add-hero.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddHeroComponent, UpperCaseDirectiveDirective],
  imports: [
    CommonModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [AddHeroComponent]
})
export class AddHeroModule { }
