import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataBindingComponent } from './data-binding.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DataBindingComponent],
  exports: [DataBindingComponent]
})
export class DataBindingModule { }
