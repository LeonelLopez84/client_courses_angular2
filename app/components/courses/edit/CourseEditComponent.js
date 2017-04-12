System.register(['angular2/core', "../../../services/api", "angular2/router", '../form/CourseForm'], function(exports_1, context_1) {
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
    var core_1, api_1, router_1, CourseForm_1;
    var CourseEditComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (api_1_1) {
                api_1 = api_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (CourseForm_1_1) {
                CourseForm_1 = CourseForm_1_1;
            }],
        execute: function() {
            CourseEditComponent = (function () {
                function CourseEditComponent(_api, _params) {
                    var _this = this;
                    this._api = _api;
                    this._params = _params;
                    this.course = {};
                    this._api.getCourse(_params.get("id")).then(function (res) {
                        _this.course = res.course;
                    }, function (error) {
                        console.error(error);
                    });
                }
                CourseEditComponent = __decorate([
                    core_1.Component({
                        templateUrl: './app/components/courses/edit/index.html',
                        directives: [CourseForm_1.CoursesForm]
                    }), 
                    __metadata('design:paramtypes', [api_1.Api, router_1.RouteParams])
                ], CourseEditComponent);
                return CourseEditComponent;
            }());
            exports_1("CourseEditComponent", CourseEditComponent);
        }
    }
});
//# sourceMappingURL=CourseEditComponent.js.map