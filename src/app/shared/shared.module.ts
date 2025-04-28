import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { HighlightDirective } from './directives/highlight.directive';



@NgModule({
  declarations: [
    ButtonComponent,
    ShortenPipe,
    HighlightDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
