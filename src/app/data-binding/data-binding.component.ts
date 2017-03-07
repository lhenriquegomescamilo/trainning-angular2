import { Component, OnInit } from '@angular/core';
import { InputPropertyComponent } from './input-property.component';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css', './bootstrap.min.css'],
})

export class DataBindingComponent {

  url: string = 'https://www.google.com';
  urlImage: string = 'http://lorempixel.com/400/200/';

  current: string = '';
  saved: string = '';
  isMouseOver: boolean = false;

  name: string = '';
  person = { name: '', age: 0 };

  constructor() {

  }
  onClick() {
    alert('Button was clicked');
  }
  onKeyup(event: KeyboardEvent) {
    console.log(event);
    this.current = (<HTMLInputElement>event.target).value;

  }
  onSave(value: string) {
    this.saved = value;
  }

  onMouseSpan() {
    this.isMouseOver = !this.isMouseOver;
  }

}
