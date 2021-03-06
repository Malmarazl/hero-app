import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddHeroComponent } from './add-hero.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { UpperCaseDirectiveModule } from 'src/app/shared/directives/upper-case-directive.module';

@NgModule({
  declarations: [AddHeroComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    UpperCaseDirectiveModule,
    TranslateModule
  ],
  exports: [AddHeroComponent]
})
export class AddHeroModule { }
