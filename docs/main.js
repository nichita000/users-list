(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" fxLayoutAlign=\"center\">\n    <app-cards-container></app-cards-container>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _assets_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/config */ "./src/assets/config.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _stomp_ng2_stompjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @stomp/ng2-stompjs */ "./node_modules/@stomp/ng2-stompjs/fesm5/stomp-ng2-stompjs.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _store_store_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store/store.module */ "./src/app/store/store.module.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components */ "./src/app/components/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var stompConfig = {
    url: _assets_config__WEBPACK_IMPORTED_MODULE_6__["WEBSOCKET_CONNECT_URL"],
    headers: {},
    heartbeat_in: 0,
    heartbeat_out: 0,
    reconnect_delay: 5000,
    debug: false
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _components__WEBPACK_IMPORTED_MODULE_12__["CardsContainerComponent"],
                _components__WEBPACK_IMPORTED_MODULE_12__["CardComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _store_store_module__WEBPACK_IMPORTED_MODULE_11__["StoreModule"],
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__["StoreDevtoolsModule"].instrument({ maxAge: 21 }),
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            ],
            providers: [
                _stomp_ng2_stompjs__WEBPACK_IMPORTED_MODULE_9__["StompService"],
                {
                    provide: _stomp_ng2_stompjs__WEBPACK_IMPORTED_MODULE_9__["StompConfig"],
                    useValue: stompConfig
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/card/card.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/card/card.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"contact-card\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    <mat-icon [ngClass]=\"participant.ready ? 'ready' : 'not-ready' \"> face </mat-icon>\n    {{ participant?.identifier }}\n</mat-card>"

/***/ }),

/***/ "./src/app/components/card/card.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/card/card.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact-card {\n  width: 250px;\n  margin-bottom: 20px;\n  transition: all .7s ease-in-out; }\n  .contact-card .mat-icon {\n    height: 60px;\n    width: 60px;\n    font-size: 60px; }\n  .contact-card .not-ready {\n    color: #b71c1c; }\n  .contact-card .ready {\n    color: #00c853; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25pY2hpdGEvRG9jdW1lbnRzL3VzZXJzLWxpc3Qvc3JjL2FwcC9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQVk7RUFDWixvQkFBbUI7RUFDbkIsZ0NBQStCLEVBZWxDO0VBbEJEO0lBTVEsYUFBWTtJQUNaLFlBQVc7SUFDWCxnQkFBZSxFQUNsQjtFQVRMO0lBWVEsZUFBYyxFQUNqQjtFQWJMO0lBZ0JRLGVBQWMsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWN0LWNhcmQge1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAuN3MgZWFzZS1pbi1vdXQ7XG5cbiAgICAubWF0LWljb24ge1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICBmb250LXNpemU6IDYwcHg7XG4gICAgfVxuXG4gICAgLm5vdC1yZWFkeSB7XG4gICAgICAgIGNvbG9yOiAjYjcxYzFjO1xuICAgIH1cblxuICAgIC5yZWFkeSB7XG4gICAgICAgIGNvbG9yOiAjMDBjODUzO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/card/card.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/card/card.component.ts ***!
  \***************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CardComponent.prototype, "participant", void 0);
    CardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/components/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.scss */ "./src/app/components/card/card.component.scss")]
        })
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/components/cards-container/cards-container.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/cards-container/cards-container.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cards-container\" fxLayout=\"row wrap\" fxLayoutGap=\"10px\" fxLayoutAlign=\"space-around\">\n\n    <ng-container *ngFor=\"let participant of $participants | async; trackBy: trackByFn\">\n        <app-card [participant]=\"participant\"></app-card>\n    </ng-container>\n</div>"

/***/ }),

/***/ "./src/app/components/cards-container/cards-container.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/cards-container/cards-container.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cards-container {\n  width: 1000px;\n  margin-top: 60px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25pY2hpdGEvRG9jdW1lbnRzL3VzZXJzLWxpc3Qvc3JjL2FwcC9jb21wb25lbnRzL2NhcmRzLWNvbnRhaW5lci9jYXJkcy1jb250YWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsaUJBQWdCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXJkcy1jb250YWluZXIvY2FyZHMtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRzLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMDBweDtcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/cards-container/cards-container.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/cards-container/cards-container.component.ts ***!
  \*************************************************************************/
/*! exports provided: CardsContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsContainerComponent", function() { return CardsContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/reducers */ "./src/app/store/reducers/index.ts");
/* harmony import */ var _store_actions_participant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/participant */ "./src/app/store/actions/participant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CardsContainerComponent = /** @class */ (function () {
    function CardsContainerComponent(_store) {
        this._store = _store;
        this.trackByFn = function (participant) { return participant.id; };
    }
    CardsContainerComponent.prototype.ngOnInit = function () {
        this._store.dispatch(new _store_actions_participant__WEBPACK_IMPORTED_MODULE_3__["LoadParticipants"]());
        this._store.dispatch(new _store_actions_participant__WEBPACK_IMPORTED_MODULE_3__["ParticipantsSockerSubscribe"]());
        this.$participants = this._store.select(_store_reducers__WEBPACK_IMPORTED_MODULE_2__["getParticipants"]);
    };
    CardsContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cards-container',
            template: __webpack_require__(/*! ./cards-container.component.html */ "./src/app/components/cards-container/cards-container.component.html"),
            styles: [__webpack_require__(/*! ./cards-container.component.scss */ "./src/app/components/cards-container/cards-container.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], CardsContainerComponent);
    return CardsContainerComponent;
}());



/***/ }),

/***/ "./src/app/components/index.ts":
/*!*************************************!*\
  !*** ./src/app/components/index.ts ***!
  \*************************************/
/*! exports provided: CardsContainerComponent, CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cards_container_cards_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards-container/cards-container.component */ "./src/app/components/cards-container/cards-container.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardsContainerComponent", function() { return _cards_container_cards_container_component__WEBPACK_IMPORTED_MODULE_0__["CardsContainerComponent"]; });

/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card/card.component */ "./src/app/components/card/card.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return _card_card_component__WEBPACK_IMPORTED_MODULE_1__["CardComponent"]; });





/***/ }),

/***/ "./src/app/services/participants-socket.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/participants-socket.service.ts ***!
  \*********************************************************/
/*! exports provided: ParticipantsSocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticipantsSocketService", function() { return ParticipantsSocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _stomp_ng2_stompjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stomp/ng2-stompjs */ "./node_modules/@stomp/ng2-stompjs/fesm5/stomp-ng2-stompjs.js");
/* harmony import */ var _assets_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/config */ "./src/assets/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ParticipantsSocketService = /** @class */ (function () {
    function ParticipantsSocketService(_stompService) {
        this._stompService = _stompService;
    }
    ParticipantsSocketService.prototype.connect = function () {
        return this._stompService.subscribe(_assets_config__WEBPACK_IMPORTED_MODULE_2__["PARTICIPANTS_EVENT_ROUTE"]);
    };
    ParticipantsSocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_stomp_ng2_stompjs__WEBPACK_IMPORTED_MODULE_1__["StompService"]])
    ], ParticipantsSocketService);
    return ParticipantsSocketService;
}());



/***/ }),

/***/ "./src/app/services/participants.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/participants.service.ts ***!
  \**************************************************/
/*! exports provided: ParticipantsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticipantsService", function() { return ParticipantsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _assets_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/config */ "./src/assets/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ParticipantsService = /** @class */ (function () {
    function ParticipantsService(_http) {
        this._http = _http;
    }
    ParticipantsService.prototype.participantsList = function () {
        var url = _assets_config__WEBPACK_IMPORTED_MODULE_2__["BASE_HREF"] + "/participants";
        return this._http.get(url);
    };
    ParticipantsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ParticipantsService);
    return ParticipantsService;
}());



/***/ }),

/***/ "./src/app/store/actions/participant.ts":
/*!**********************************************!*\
  !*** ./src/app/store/actions/participant.ts ***!
  \**********************************************/
/*! exports provided: PARTICIPANT_ADDED, PARTICIPANT_REMOVED, PARTICIPANT_READY_STATUS_CHANGED, ParticipantAdded, ParticipantRemoved, ParticipantStatusChanged, LOAD_PARTICIPANTS, LOAD_PARTICIPANTS_SUCCESS, LOAD_PARTICIPANTS_ERROR, LoadParticipants, LoadParticipantsSuccess, LoadParticipantsError, PARTICIPANTS_SOCKET_SUBSCRIBE, PARTICIPANTS_SOCKET_RECIVED, ParticipantsSockerSubscribe, ParticipantsSocketRecived */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PARTICIPANT_ADDED", function() { return PARTICIPANT_ADDED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PARTICIPANT_REMOVED", function() { return PARTICIPANT_REMOVED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PARTICIPANT_READY_STATUS_CHANGED", function() { return PARTICIPANT_READY_STATUS_CHANGED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticipantAdded", function() { return ParticipantAdded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticipantRemoved", function() { return ParticipantRemoved; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticipantStatusChanged", function() { return ParticipantStatusChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_PARTICIPANTS", function() { return LOAD_PARTICIPANTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_PARTICIPANTS_SUCCESS", function() { return LOAD_PARTICIPANTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_PARTICIPANTS_ERROR", function() { return LOAD_PARTICIPANTS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadParticipants", function() { return LoadParticipants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadParticipantsSuccess", function() { return LoadParticipantsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadParticipantsError", function() { return LoadParticipantsError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PARTICIPANTS_SOCKET_SUBSCRIBE", function() { return PARTICIPANTS_SOCKET_SUBSCRIBE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PARTICIPANTS_SOCKET_RECIVED", function() { return PARTICIPANTS_SOCKET_RECIVED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticipantsSockerSubscribe", function() { return ParticipantsSockerSubscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticipantsSocketRecived", function() { return ParticipantsSocketRecived; });
var PARTICIPANT_ADDED = 'PARTICIPANT_ADDED';
var PARTICIPANT_REMOVED = 'PARTICIPANT_REMOVED';
var PARTICIPANT_READY_STATUS_CHANGED = 'PARTICIPANT_READY_STATUS_CHANGED';
var ParticipantAdded = /** @class */ (function () {
    function ParticipantAdded(payload) {
        this.payload = payload;
        this.type = PARTICIPANT_ADDED;
    }
    return ParticipantAdded;
}());

var ParticipantRemoved = /** @class */ (function () {
    function ParticipantRemoved(payload) {
        this.payload = payload;
        this.type = PARTICIPANT_REMOVED;
    }
    return ParticipantRemoved;
}());

var ParticipantStatusChanged = /** @class */ (function () {
    function ParticipantStatusChanged(payload) {
        this.payload = payload;
        this.type = PARTICIPANT_READY_STATUS_CHANGED;
    }
    return ParticipantStatusChanged;
}());

var LOAD_PARTICIPANTS = 'LOAD_PARTICIPANTS';
var LOAD_PARTICIPANTS_SUCCESS = 'LOAD_PARTICIPANTS_SUCCESS';
var LOAD_PARTICIPANTS_ERROR = 'LOAD_PARTICIPANTS_ERROR';
var LoadParticipants = /** @class */ (function () {
    function LoadParticipants() {
        this.type = LOAD_PARTICIPANTS;
    }
    return LoadParticipants;
}());

var LoadParticipantsSuccess = /** @class */ (function () {
    function LoadParticipantsSuccess(payload) {
        this.payload = payload;
        this.type = LOAD_PARTICIPANTS_SUCCESS;
    }
    return LoadParticipantsSuccess;
}());

var LoadParticipantsError = /** @class */ (function () {
    function LoadParticipantsError(payload) {
        this.payload = payload;
        this.type = LOAD_PARTICIPANTS_ERROR;
    }
    return LoadParticipantsError;
}());

var PARTICIPANTS_SOCKET_SUBSCRIBE = 'PARTICIPANTS_SOCKET_SUBSCRIBE';
var PARTICIPANTS_SOCKET_RECIVED = 'PARTICIPANTS_SOCKET_RECIVED';
var ParticipantsSockerSubscribe = /** @class */ (function () {
    function ParticipantsSockerSubscribe() {
        this.type = PARTICIPANTS_SOCKET_SUBSCRIBE;
    }
    return ParticipantsSockerSubscribe;
}());

var ParticipantsSocketRecived = /** @class */ (function () {
    function ParticipantsSocketRecived(payload) {
        this.payload = payload;
        this.type = PARTICIPANTS_SOCKET_RECIVED;
    }
    return ParticipantsSocketRecived;
}());



/***/ }),

/***/ "./src/app/store/effects/particpants.ts":
/*!**********************************************!*\
  !*** ./src/app/store/effects/particpants.ts ***!
  \**********************************************/
/*! exports provided: ParticipantsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticipantsEffects", function() { return ParticipantsEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _services_participants_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/participants.service */ "./src/app/services/participants.service.ts");
/* harmony import */ var _services_participants_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/participants-socket.service */ "./src/app/services/participants-socket.service.ts");
/* harmony import */ var _actions_participant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/participant */ "./src/app/store/actions/participant.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ParticipantsEffects = /** @class */ (function () {
    function ParticipantsEffects(_actions$, _participantsService, _participantsSocketService) {
        var _this = this;
        this._actions$ = _actions$;
        this._participantsService = _participantsService;
        this._participantsSocketService = _participantsSocketService;
        this.loadParticipants = this._actions$.ofType(_actions_participant__WEBPACK_IMPORTED_MODULE_4__["LOAD_PARTICIPANTS"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (_) { return _this._participantsService.participantsList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) { return new _actions_participant__WEBPACK_IMPORTED_MODULE_4__["LoadParticipantsSuccess"](response); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(new _actions_participant__WEBPACK_IMPORTED_MODULE_4__["LoadParticipantsError"](error)); })); }));
        this.sockerSubscribe = this._actions$.ofType(_actions_participant__WEBPACK_IMPORTED_MODULE_4__["PARTICIPANTS_SOCKET_SUBSCRIBE"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (_) { return _this._participantsSocketService.connect().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) { return JSON.parse(response['body']); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) { return _this.actionBySocketMessage(response); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(new _actions_participant__WEBPACK_IMPORTED_MODULE_4__["LoadParticipantsError"](error)); })); }));
    }
    ParticipantsEffects.prototype.actionBySocketMessage = function (action) {
        switch (action.messageType) {
            case _actions_participant__WEBPACK_IMPORTED_MODULE_4__["PARTICIPANT_ADDED"]:
                return new _actions_participant__WEBPACK_IMPORTED_MODULE_4__["ParticipantAdded"](action.participant);
            case _actions_participant__WEBPACK_IMPORTED_MODULE_4__["PARTICIPANT_REMOVED"]:
                return new _actions_participant__WEBPACK_IMPORTED_MODULE_4__["ParticipantRemoved"](action.participantId);
            case _actions_participant__WEBPACK_IMPORTED_MODULE_4__["PARTICIPANT_READY_STATUS_CHANGED"]:
                var participantId = action.participantId, newReadyStatus = action.newReadyStatus;
                return new _actions_participant__WEBPACK_IMPORTED_MODULE_4__["ParticipantStatusChanged"]({ participantId: participantId, newReadyStatus: newReadyStatus });
        }
    };
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], ParticipantsEffects.prototype, "loadParticipants", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], ParticipantsEffects.prototype, "sockerSubscribe", void 0);
    ParticipantsEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"],
            _services_participants_service__WEBPACK_IMPORTED_MODULE_2__["ParticipantsService"],
            _services_participants_socket_service__WEBPACK_IMPORTED_MODULE_3__["ParticipantsSocketService"]])
    ], ParticipantsEffects);
    return ParticipantsEffects;
}());



/***/ }),

/***/ "./src/app/store/reducers/index.ts":
/*!*****************************************!*\
  !*** ./src/app/store/reducers/index.ts ***!
  \*****************************************/
/*! exports provided: reducers, getParticipantsState, getParticipants, getParticipantIds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParticipantsState", function() { return getParticipantsState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParticipants", function() { return getParticipants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParticipantIds", function() { return getParticipantIds; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _participant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./participant */ "./src/app/store/reducers/participant.ts");


var reducers = {
    participants: _participant__WEBPACK_IMPORTED_MODULE_1__["reducer"]
};
var getParticipantsState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('participants');
var getParticipants = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getParticipantsState, _participant__WEBPACK_IMPORTED_MODULE_1__["getParticipants"]);
var getParticipantIds = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getParticipantsState, _participant__WEBPACK_IMPORTED_MODULE_1__["getIds"]);


/***/ }),

/***/ "./src/app/store/reducers/participant.ts":
/*!***********************************************!*\
  !*** ./src/app/store/reducers/participant.ts ***!
  \***********************************************/
/*! exports provided: reducer, getParticipants, getIds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParticipants", function() { return getParticipants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIds", function() { return getIds; });
/* harmony import */ var _actions_participant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/participant */ "./src/app/store/actions/participant.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


var initialState = {
    ids: [], participants: [],
    loadInProgress: false, socketSubscribed: false
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_participant__WEBPACK_IMPORTED_MODULE_0__["PARTICIPANTS_SOCKET_SUBSCRIBE"]:
            return __assign({}, state, { socketSubscribed: true });
        case _actions_participant__WEBPACK_IMPORTED_MODULE_0__["LOAD_PARTICIPANTS"]:
            return __assign({}, state, { loadInProgress: true });
        case _actions_participant__WEBPACK_IMPORTED_MODULE_0__["LOAD_PARTICIPANTS_SUCCESS"]:
            var participantsLoaded = action.payload;
            if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(state.ids) && !Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(participantsLoaded)) {
                var idsLoaded = participantsLoaded.map(function (participant) { return participant.id; });
                return __assign({}, state, { participants: participantsLoaded.slice(), ids: idsLoaded, loadInProgress: false });
            }
            else if (!Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(state.ids) && !Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(participantsLoaded)) {
                var addParticipantsList = participantsLoaded.filter(function (participant) { return !state.ids.includes(participant.id); });
                var newParticipantsList = __assign({}, state.participants, addParticipantsList);
                var updatedIds = newParticipantsList.map(function (participant) { return participant.id; });
                return __assign({}, state, { participants: newParticipantsList, ids: updatedIds, loadInProgress: false });
            }
            else {
                return __assign({}, state, { loadInProgress: false });
            }
        case _actions_participant__WEBPACK_IMPORTED_MODULE_0__["PARTICIPANT_ADDED"]:
            var newParticipant = action.payload;
            var newParticipantId = newParticipant.id;
            return __assign({}, state, { participants: state.participants.concat([newParticipant]), ids: state.ids.concat([newParticipantId]) });
        case _actions_participant__WEBPACK_IMPORTED_MODULE_0__["PARTICIPANT_REMOVED"]:
            var participantIdToRemove_1 = action.payload;
            var filteredParticipants = state.participants.filter(function (participant) { return participant.id !== participantIdToRemove_1; });
            var ids = filteredParticipants.map(function (participant) { return participant.id; });
            return __assign({}, state, { participants: filteredParticipants, ids: ids });
        case _actions_participant__WEBPACK_IMPORTED_MODULE_0__["PARTICIPANT_READY_STATUS_CHANGED"]:
            var _a = action.payload, participantId_1 = _a.participantId, newStatus_1 = _a.newReadyStatus;
            var updatedParticipants = state.participants.map(function (participant) {
                if (participant.id === participantId_1) {
                    participant.ready = newStatus_1;
                    console.log(participant.identifier, 'changed from =>', !newStatus_1, 'to =>', newStatus_1);
                }
                return participant;
            });
            return __assign({}, state, { participants: updatedParticipants });
        default:
            return state;
    }
}
var getParticipants = function (state) { return state.participants; };
var getIds = function (state) { return state.ids; };


/***/ }),

/***/ "./src/app/store/store.module.ts":
/*!***************************************!*\
  !*** ./src/app/store/store.module.ts ***!
  \***************************************/
/*! exports provided: StoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreModule", function() { return StoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ "./src/app/store/reducers/index.ts");
/* harmony import */ var _effects_particpants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./effects/particpants */ "./src/app/store/effects/particpants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var StoreModule = /** @class */ (function () {
    function StoreModule() {
    }
    StoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_3__["reducers"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsModule"].forRoot([_effects_particpants__WEBPACK_IMPORTED_MODULE_4__["ParticipantsEffects"]])
            ],
            exports: []
        })
    ], StoreModule);
    return StoreModule;
}());



/***/ }),

/***/ "./src/assets/config.ts":
/*!******************************!*\
  !*** ./src/assets/config.ts ***!
  \******************************/
/*! exports provided: WEBSOCKET_CONNECT_URL, BASE_HREF, PARTICIPANTS_EVENT_ROUTE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEBSOCKET_CONNECT_URL", function() { return WEBSOCKET_CONNECT_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_HREF", function() { return BASE_HREF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PARTICIPANTS_EVENT_ROUTE", function() { return PARTICIPANTS_EVENT_ROUTE; });
var WEBSOCKET_CONNECT_URL = 'ws://89.223.27.70/ws';
var BASE_HREF = 'http://89.223.27.70';
var PARTICIPANTS_EVENT_ROUTE = '/topic/messages';


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/nichita/Documents/users-list/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map