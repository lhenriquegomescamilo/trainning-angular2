import { OutputPropertyComponent } from './output-property.component';
import { InputPropertyComponent } from './input-property.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataBindingComponent } from './data-binding.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [DataBindingComponent, InputPropertyComponent, OutputPropertyComponent],
  exports: [DataBindingComponent]
})
export class DataBindingModule { }