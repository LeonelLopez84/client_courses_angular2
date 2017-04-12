import {Component} from "angular2/core"
import {CourseListComponent} from "../courses/list/CourseListComponent";
import {CourseEditComponent} from "../courses/edit/CourseEditComponent";
import {CourseCreateComponent} from "../courses/create/CourseCreateComponent";
import {CourseDetailComponent} from "../courses/detail/CourseDetailComponent";
 
import {
    RouteConfig,
    ROUTER_DIRECTIVES
} from 'angular2/router';
 
@RouteConfig([
    {path:'/courses',           name: 'Courses',        component: CourseListComponent},
    {path:'/courses/:id',       name: 'CourseDetail',   component: CourseDetailComponent},
    {path:'/courses/edit/:id',  name: 'CourseEdit',     component: CourseEditComponent},
    {path:'/courses/create',    name: 'CourseCreate',   component: CourseCreateComponent},
    {path:'/', name: 'root', redirectTo: ['/Courses']}
])
 
@Component({
    selector: "init",
    templateUrl: './app/components/init/init.html',
    directives: [ROUTER_DIRECTIVES]
})
 
export class InitComponent {
    
}