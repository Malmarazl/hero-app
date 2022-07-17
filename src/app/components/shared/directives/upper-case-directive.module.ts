import { UpperCaseDirective } from './upper-case-directive.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [UpperCaseDirective],
  imports: [
    CommonModule
  ],
  exports: [UpperCaseDirective]
})
export class UpperCaseDirectiveModule { }
