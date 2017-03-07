import { Component, Input } from '@angular/core';

@Component({
    selector: 'input-property',
    template: '{{nameCourse}}'
})
export class InputPropertyComponent {

    @Input('name') 
    nameCourse: string = '';

    constructor() { }


}