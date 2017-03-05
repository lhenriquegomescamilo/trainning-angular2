import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {
    getCourse() {
        return ['Java', 'C#', 'C++'];
    }
}