import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';

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
export class OutputPropertyComponent implements OnInit {
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }


    @Input()
    value = 0;

    @Output()
    changeValue = new EventEmitter();

    constructor() { }

    decrement() {
        this.value--;
        this.changeValue.emit({
            newValue: this.value
        });
    }

    increment() {
        this.value++;
        this.changeValue.emit({
            newValue: this.value
        });
    }

}