webpackJsonp([1],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/ajustes2/ajustes2.module": [
		276,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 150;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ajustes2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Ajustes2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Ajustes2Page = /** @class */ (function () {
    function Ajustes2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Ajustes2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Ajustes2Page');
    };
    Ajustes2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ajustes2',template:/*ion-inline-start:"C:\Proyectos\ionic\3. navegacion\src\pages\ajustes2\ajustes2.html"*/'<!--\n  Generated template for the Ajustes2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ajustes2</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Proyectos\ionic\3. navegacion\src\pages\ajustes2\ajustes2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], Ajustes2Page);
    return Ajustes2Page;
}());

//# sourceMappingURL=ajustes2.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_index_paginas__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_paginas__["f" /* PrincipalPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_paginas__["b" /* AjustesPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_paginas__["a" /* Ajustes2Page */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_paginas__["c" /* ModalPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_paginas__["d" /* Pagina2Page */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_paginas__["e" /* Pagina3Page */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_paginas__["g" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], { backButtonText: 'MALF' }, {
                    links: [
                        { loadChildren: '../pages/ajustes2/ajustes2.module#Ajustes2PageModule', name: 'Ajustes2Page', segment: 'ajustes2', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_paginas__["f" /* PrincipalPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_paginas__["b" /* AjustesPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_paginas__["a" /* Ajustes2Page */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_paginas__["c" /* ModalPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_paginas__["d" /* Pagina2Page */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_paginas__["e" /* Pagina3Page */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_paginas__["g" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_index_paginas__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, menuCtrl) {
        this.menuCtrl = menuCtrl;
        this.tabs = __WEBPACK_IMPORTED_MODULE_4__pages_index_paginas__["g" /* TabsPage */];
        this.ajustes2 = __WEBPACK_IMPORTED_MODULE_4__pages_index_paginas__["a" /* Ajustes2Page */];
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_index_paginas__["g" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.abrirPagina = function (pagina) {
        this.rootPage = pagina;
        this.menuCtrl.close();
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Proyectos\ionic\3. navegacion\src\app\app.html"*/'\n\n<ion-menu [content]="content">\n\n    <ion-header>\n      <ion-toolbar color="morado">\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n      <ion-list>\n\n        <button ion-item (click)="abrirPagina( tabs )">\n          Abrir Tabs\n        </button>\n\n        <button ion-item (click)="abrirPagina(ajustes2)">\n          Abrir Ajustes 2\n        </button>\n\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  \n  <ion-nav [root]="rootPage" #content></ion-nav>\n'/*ion-inline-end:"C:\Proyectos\ionic\3. navegacion\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrincipalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_paginas__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrincipalPage = /** @class */ (function () {
    function PrincipalPage(navCtrl, menuCtrl) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.pagina2 = __WEBPACK_IMPORTED_MODULE_2__index_paginas__["d" /* Pagina2Page */];
    }
    PrincipalPage.prototype.navegarPagina = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_paginas__["d" /* Pagina2Page */]);
        this.menuCtrl;
    };
    PrincipalPage.prototype.mostrarMenu = function () {
        this.menuCtrl.toggle();
    };
    PrincipalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-principal',template:/*ion-inline-start:"C:\Proyectos\ionic\3. navegacion\src\pages\principal\principal.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Principal - José Torres</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <button ion-button\n          block\n          color="primary"\n          (click)="navegarPagina()">\n    Ir a página 2\n  </button>\n\n  <button ion-button\n          block\n          color="secondary"\n          [navPush]="pagina2">\n    Ir a página 2 - HTML\n  </button>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Proyectos\ionic\3. navegacion\src\pages\principal\principal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]])
    ], PrincipalPage);
    return PrincipalPage;
}());

//# sourceMappingURL=principal.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AjustesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_paginas__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AjustesPage = /** @class */ (function () {
    function AjustesPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    AjustesPage.prototype.activarPrincipal = function () {
        this.navCtrl.parent.select(2);
    };
    AjustesPage.prototype.mostrar_modal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__index_paginas__["c" /* ModalPage */], { nombre: "José Torres", edad: 36 });
        modal.present();
        modal.onDidDismiss(function (informacion) {
            if (informacion) {
                console.log("Data del modal:");
                console.log(informacion);
            }
            else {
                console.log("Se cerró sin parámetros");
            }
        });
    };
    AjustesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ajustes',template:/*ion-inline-start:"C:\Proyectos\ionic\3. navegacion\src\pages\ajustes\ajustes.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Ajustes</ion-title>\n\n    <ion-buttons>\n        <button ion-button icon-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n      </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <button ion-button\n          block\n          (click)="activarPrincipal()">\n        Activar Principal\n        </button>\n\n        <button ion-button\n                block\n                color="morado"\n                (click)="mostrar_modal()">\n          Mostrar modal\n        </button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Proyectos\ionic\3. navegacion\src\pages\ajustes\ajustes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], AjustesPage);
    return AjustesPage;
}());

//# sourceMappingURL=ajustes.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalPage = /** @class */ (function () {
    function ModalPage(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.nombre = "";
        this.edad = 0;
        this.nombre = this.navParams.get("nombre");
        this.edad = this.navParams.get("edad");
        console.log(this.nombre, this.edad);
    }
    ModalPage.prototype.cerrar_con_parametros = function () {
        var data = {
            nombre: "Vishnu",
            edad: 36,
            coords: {
                lat: 10,
                lng: -10
            }
        };
        this.viewCtrl.dismiss(data);
    };
    ModalPage.prototype.cerrar_sin_parametros = function () {
        this.viewCtrl.dismiss();
    };
    ModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal',template:/*ion-inline-start:"C:\Proyectos\ionic\3. navegacion\src\pages\modal\modal.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Página Modal</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h1>Modal</h1>\n  <button ion-button\n        block\n        color="primary"\n        (click)="cerrar_con_parametros()">\n  Cerrar con parámetros\n        </button>\n        <button ion-button\n        block\n        color="morado"\n        (click)="cerrar_sin_parametros()">\n  Cerrar sin parámetros\n        </button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Proyectos\ionic\3. navegacion\src\pages\modal\modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ModalPage);
    return ModalPage;
}());

//# sourceMappingURL=modal.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pagina2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_paginas__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Pagina2Page = /** @class */ (function () {
    function Pagina2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pagina3 = __WEBPACK_IMPORTED_MODULE_2__index_paginas__["e" /* Pagina3Page */];
        this.mutantes = [
            {
                nombre: "Magneto",
                poder: "Controlar metales"
            },
            {
                nombre: "Wolverine",
                poder: "Regeneración acelerada"
            },
            {
                nombre: "Profesor X",
                poder: "Poderes psíquicos"
            },
            {
                nombre: "José Torres",
                poder: "Experto en Sanda"
            },
            {
                nombre: "Carlos Perdomo",
                poder: "Correr maratones extremos"
            }
        ];
    }
    Pagina2Page.prototype.irPagina3 = function (mutante) {
        console.log(mutante);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_paginas__["e" /* Pagina3Page */], { 'mutante': mutante });
    };
    Pagina2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pagina2',template:/*ion-inline-start:"C:\Proyectos\ionic\3. navegacion\src\pages\pagina2\pagina2.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Pagina 2 - VishnuVardan</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <h1>Enviando con evento</h1>\n\n<ion-list>\n\n  <ion-item *ngFor="let mutante of mutantes"\n            (click)="irPagina3 ( mutante )">\n    {{ mutante.nombre }}\n  </ion-item>\n\n</ion-list>\n\n<h1>Enviando con HTML</h1>\n\n<ion-list>\n\n    <ion-item *ngFor="let mutante of mutantes"\n              [navPush]="pagina3"\n              [navParams]="{ \'mutante\': mutante }">\n      {{ mutante.nombre }}\n    </ion-item>\n  \n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Proyectos\ionic\3. navegacion\src\pages\pagina2\pagina2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], Pagina2Page);
    return Pagina2Page;
}());

//# sourceMappingURL=pagina2.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pagina3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Pagina3Page = /** @class */ (function () {
    function Pagina3Page(navParams, navCrtl) {
        this.navParams = navParams;
        this.navCrtl = navCrtl;
        this.mutante = {};
        console.log(navParams);
        this.mutante = this.navParams.get("mutante");
    }
    Pagina3Page.prototype.irAtras = function () {
        this.navCrtl.pop();
    };
    Pagina3Page.prototype.irRoot = function () {
        this.navCrtl.popToRoot();
    };
    Pagina3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pagina3',template:/*ion-inline-start:"C:\Proyectos\ionic\3. navegacion\src\pages\pagina3\pagina3.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n      <ion-title>{{ mutante.nombre }}</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content padding>\n\n  \n\n    <h3 text-center>\n\n        {{ mutante.poder }}\n\n    </h3>\n\n\n\n    <button ion-button\n\n            block\n\n            color="primary"\n\n            (click)="irAtras()">\n\n        Ir atrás con evento\n\n    </button>\n\n\n\n    <button ion-button\n\n            block\n\n            color="secondary"\n\n            (click)="irRoot()">\n\n        Ir al root\n\n    </button>\n\n\n\n    <button ion-button\n\n            block\n\n            color="danger"\n\n            navPop>\n\n        Ir atrás sin evento\n\n    </button>\n\n\n\n  </ion-content>'/*ion-inline-end:"C:\Proyectos\ionic\3. navegacion\src\pages\pagina3\pagina3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], Pagina3Page);
    return Pagina3Page;
}());

//# sourceMappingURL=pagina3.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_paginas__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1 = __WEBPACK_IMPORTED_MODULE_1__index_paginas__["f" /* PrincipalPage */];
        this.tab2 = __WEBPACK_IMPORTED_MODULE_1__index_paginas__["b" /* AjustesPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"C:\Proyectos\ionic\3. navegacion\src\pages\tabs\tabs.html"*/'\n<ion-tabs color="primary" selectedIndex="2">\n  <ion-tab tabIcon="hammer" tabTitle="Principal" [root]="tab1"></ion-tab>\n  <ion-tab tabIcon="hammer" tabTitle="Ajustes" [root]="tab2"></ion-tab>\n  <ion-tab tabIcon="alarm" tabTitle="Principal" [root]="tab1"></ion-tab>\n  <ion-tab tabIcon="hammer" tabTitle="Ajustes" [root]="tab2"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"C:\Proyectos\ionic\3. navegacion\src\pages\tabs\tabs.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__principal_principal__ = __webpack_require__(270);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__principal_principal__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ajustes_ajustes__ = __webpack_require__(271);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__ajustes_ajustes__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ajustes2_ajustes2__ = __webpack_require__(194);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__ajustes2_ajustes2__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_modal__ = __webpack_require__(272);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__modal_modal__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pagina2_pagina2__ = __webpack_require__(273);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__pagina2_pagina2__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pagina3_pagina3__ = __webpack_require__(274);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_5__pagina3_pagina3__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tabs_tabs__ = __webpack_require__(275);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__tabs_tabs__["a"]; });







//# sourceMappingURL=index.paginas.js.map

/***/ })

},[195]);
//# sourceMappingURL=main.js.map