import { EditHeroComponent } from './edit-hero.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { UpperCaseDirectiveModule } from '../shared/directives/upper-case-directive.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [EditHeroComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    UpperCaseDirectiveModule,
    TranslateModule
  ],
  exports: [EditHeroComponent]
})
export class EditHeroModule { }
