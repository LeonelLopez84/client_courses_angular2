System.register(["angular2/core", "../courses/list/CourseListComponent", "../courses/edit/CourseEditComponent", "../courses/create/CourseCreateComponent", "../courses/detail/CourseDetailComponent", 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, CourseListComponent_1, CourseEditComponent_1, CourseCreateComponent_1, CourseDetailComponent_1, router_1;
    var InitComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (CourseListComponent_1_1) {
                CourseListComponent_1 = CourseListComponent_1_1;
            },
            function (CourseEditComponent_1_1) {
                CourseEditComponent_1 = CourseEditComponent_1_1;
            },
            function (CourseCreateComponent_1_1) {
                CourseCreateComponent_1 = CourseCreateComponent_1_1;
            },
            function (CourseDetailComponent_1_1) {
                CourseDetailComponent_1 = CourseDetailComponent_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            InitComponent = (function () {
                function InitComponent() {
                }
                InitComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/courses', name: 'Courses', component: CourseListComponent_1.CourseListComponent },
                        { path: '/courses/:id', name: 'CourseDetail', component: CourseDetailComponent_1.CourseDetailComponent },
                        { path: '/courses/edit/:id', name: 'CourseEdit', component: CourseEditComponent_1.CourseEditComponent },
                        { path: '/courses/create', name: 'CourseCreate', component: CourseCreateComponent_1.CourseCreateComponent },
                        { path: '/', name: 'root', redirectTo: ['/Courses'] }
                    ]),
                    core_1.Component({
                        selector: "init",
                        templateUrl: './app/components/init/init.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], InitComponent);
                return InitComponent;
            }());
            exports_1("InitComponent", InitComponent);
        }
    }
});
//# sourceMappingURL=InitComponent.js.map