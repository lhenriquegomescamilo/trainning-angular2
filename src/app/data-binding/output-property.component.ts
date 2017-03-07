import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'counter',
    template: `
        <div>
            <button type="button" class="btn btn-primary"
            (click)="decrement()">-</button>
            <input type="text" [value]="value" readonly/>
            <button type="button" class="btn btn-primary" (click)="increment()">+</button>
        </div>
    `

})
export class OutputPropertyComponent {

    @Input()
    value: number = 0;

    @Output() changeValue = new EventEmitter();
    constructor() { }

    decrement() {
        this.value--;
        this.changeValue.emit({ newValue: this.value });
    }
    increment() {
        this.value++;
        this.changeValue.emit({ newValue: this.value });
    }
}