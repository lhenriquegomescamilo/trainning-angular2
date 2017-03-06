import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css','./bootstrap.min.css']
})
export class DataBindingComponent {

  url: string = 'https://www.google.com';
  urlImage: string = 'http://lorempixel.com/400/200/';

  constructor() {

  }

}
