import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appUpperCaseDirective]'
})
export class UpperCaseDirectiveDirective {

  constructor() { }

  @HostListener('input', ['$event'])
  onInput(event: any) {
    event.target.value = event.target.value.toUpperCase();
  }

}
