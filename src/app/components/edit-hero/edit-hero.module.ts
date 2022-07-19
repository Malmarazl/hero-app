import { EditHeroRoutingModule } from './edit-hero-routing.module';
import { EditHeroComponent } from './edit-hero.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { UpperCaseDirectiveModule } from 'src/app/shared/directives/upper-case-directive.module';

@NgModule({
  declarations: [EditHeroComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    UpperCaseDirectiveModule,
    TranslateModule,
    EditHeroRoutingModule
  ],
  exports: [EditHeroComponent]
})
export class EditHeroModule { }
