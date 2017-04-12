import {Component} from 'angular2/core';
import {Api} from "../../../services/api";
import {CourseRemoveComponent} from "../remove/CourseRemoveComponent"
 
import {
    ROUTER_DIRECTIVES
} from 'angular2/router';
 
@Component({
    selector: 'course',
    templateUrl: './app/components/courses/list/index.html',
    directives: [ROUTER_DIRECTIVES, CourseRemoveComponent]
})
 
export class CourseListComponent
{
    courses: Object;
    selectedCourse: Object = {};
    constructor(private _api: Api)
    {
        this.courses = this._api.courses$;
        this._api.getCourses();
    }
}