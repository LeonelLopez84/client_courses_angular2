System.register(['angular2/core', 'angular2/router', "../../../services/api"], function(exports_1, context_1) {
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
    var core_1, router_1, api_1;
    var CoursesForm;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (api_1_1) {
                api_1 = api_1_1;
            }],
        execute: function() {
            CoursesForm = (function () {
                function CoursesForm(_router, _api) {
                    this._router = _router;
                    this._api = _api;
                    this.isUpdate = false;
                    this.errors = [];
                }
                CoursesForm.prototype.processCourse = function (course) {
                    !this.isUpdate ? this.save(course) : this.update(course);
                };
                CoursesForm.prototype.save = function (course) {
                    var _this = this;
                    var course_string = this._courseString(course);
                    this._api.createCourse(course_string).then(function (res) {
                        _this._router.navigate(['/Courses']);
                    }, function (error) {
                        if (error.status === 422) {
                            _this.errors = [];
                            var errors = error.json();
                            for (var key in errors) {
                                _this.errors.push(errors[key]);
                            }
                        }
                    });
                };
                CoursesForm.prototype.update = function (course) {
                    var _this = this;
                    var course_string = this._courseString(course);
                    this._api.updateCourse(course_string, course.id).then(function (res) {
                        _this._router.navigate(['/Courses']);
                    }, function (error) {
                        if (error.status === 422) {
                            _this.errors = [];
                            var errors = error.json();
                            for (var key in errors) {
                                _this.errors.push(errors[key]);
                            }
                        }
                    });
                };
                CoursesForm.prototype._courseString = function (course) {
                    return "&author=" + course.author +
                        "&name=" + course.name +
                        "&description=" + course.description +
                        "&price=" + course.price;
                };
                __decorate([
                    core_1.Input('course'), 
                    __metadata('design:type', Object)
                ], CoursesForm.prototype, "course", void 0);
                __decorate([
                    core_1.Input('isUpdate'), 
                    __metadata('design:type', Boolean)
                ], CoursesForm.prototype, "isUpdate", void 0);
                __decorate([
                    core_1.Input('action'), 
                    __metadata('design:type', String)
                ], CoursesForm.prototype, "action", void 0);
                CoursesForm = __decorate([
                    core_1.Component({
                        selector: 'courses-form',
                        templateUrl: './app/components/courses/form/courses-form.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, api_1.Api])
                ], CoursesForm);
                return CoursesForm;
            }());
            exports_1("CoursesForm", CoursesForm);
        }
    }
});
//# sourceMappingURL=CourseForm.js.map