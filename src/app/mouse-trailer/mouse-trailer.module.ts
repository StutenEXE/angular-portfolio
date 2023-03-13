import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MouseTrailerComponent } from './mouse-trailer.component';



@NgModule({
  declarations: [
    MouseTrailerComponent
  ],
  exports: [
    MouseTrailerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MouseTrailerModule { }
