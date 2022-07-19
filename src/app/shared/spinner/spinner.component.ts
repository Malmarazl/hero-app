import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-spinner',
  template: `<div class="overlay" *ngIf="isLoading$ | async"><div class="lds-ring"><div></div>`,
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  isLoading$ = this._spinnerService.isLoading$;

  constructor(private _spinnerService: SpinnerService) { }

  ngOnInit(): void {}

}
