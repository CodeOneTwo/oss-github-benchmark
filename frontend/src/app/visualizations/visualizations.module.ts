import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BubbleComponent } from './bubble/bubble.component';



@NgModule({
  declarations: [BubbleComponent],
  imports: [
    CommonModule
  ],
  exports: [
    BubbleComponent
  ]
})
export class VisualizationsModule { }
