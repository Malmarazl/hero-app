import { ModalComponent } from './modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents: [ModalComponent],
  exports: [ModalComponent]
})
export class ModalModule { }
