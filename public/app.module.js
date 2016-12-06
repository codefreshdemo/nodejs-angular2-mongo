"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var gallery_componet_1 = require('./gallery.componet');
var main_component_1 = require("./main.component");
var history_component_1 = require("./history.component");
var contact_component_1 = require("./contact.component");
var contact_service_1 = require("./contact.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, http_1.JsonpModule,
                router_1.RouterModule.forRoot([
                    { path: '', redirectTo: '/home', pathMatch: 'full' },
                    { path: 'home', component: main_component_1.MainComponent },
                    { path: 'gallery', component: gallery_componet_1.GalleryComponent },
                    { path: 'history', component: history_component_1.HistoryComponent },
                    { path: 'contact', component: contact_component_1.ContactComponent },
                ])],
            declarations: [app_component_1.AppComponent, gallery_componet_1.GalleryComponent, main_component_1.MainComponent, history_component_1.HistoryComponent, contact_component_1.ContactComponent],
            providers: [contact_service_1.ContactService],
            bootstrap: [app_component_1.AppComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map