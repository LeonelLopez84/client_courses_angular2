import {Component} from 'angular2/core';
import {Api} from "../../../services/api";
import {CoursesForm} from '../form/CourseForm';
 
@Component({
    selector: 'course-create',
    templateUrl: './app/components/courses/create/index.html',
    directives: [CoursesForm]
})
 
export class CourseCreateComponent
{
    course: Object = {
        author: '',
        name: '',
        description: '',
        price: ''
    };
}