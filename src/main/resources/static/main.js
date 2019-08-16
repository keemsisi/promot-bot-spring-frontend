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

/***/ "./src/app/account-dashboard/account-dashboard.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/account-dashboard/account-dashboard.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQtZGFzaGJvYXJkL2FjY291bnQtZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/account-dashboard/account-dashboard.component.html":
/*!********************************************************************!*\
  !*** ./src/app/account-dashboard/account-dashboard.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container color=\"primary\">\n  <mat-sidenav #sidenav role=\"navigation\">\n    <mat-nav-list>\n      <a mat-list-item routerLink=\"/dashboard\">\n        <mat-icon class=\"icon\">dashboard</mat-icon>\n        <span class=\"label\">Dashboard</span>\n      </a>\n      <a mat-list-item type=\"button\">\n        <mat-icon class=\"icon\">input</mat-icon>\n        <span class=\"label\">LogOut</span>\n      </a>\n    </mat-nav-list>\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n\n\n    <mat-toolbar color=\"primary\">\n      <div fxHide.gt-xs>\n        <button mat-icon-button (click)=\"sidenav.toggle()\">\n          <mat-icon>menu</mat-icon>\n        </button>\n      </div>\n      <div>\n\n      </div>\n\n    </mat-toolbar>\n    <main>\n\n\n\n    </main>\n  </mat-sidenav-content>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/account-dashboard/account-dashboard.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/account-dashboard/account-dashboard.component.ts ***!
  \******************************************************************/
/*! exports provided: AccountDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountDashboardComponent", function() { return AccountDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AccountDashboardComponent = /** @class */ (function () {
    function AccountDashboardComponent() {
    }
    AccountDashboardComponent.prototype.ngOnInit = function () {
    };
    AccountDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account-dashboard',
            template: __webpack_require__(/*! ./account-dashboard.component.html */ "./src/app/account-dashboard/account-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./account-dashboard.component.css */ "./src/app/account-dashboard/account-dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AccountDashboardComponent);
    return AccountDashboardComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'pgs-webapp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-signaturepad */ "./node_modules/angular2-signaturepad/index.js");
/* harmony import */ var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular2_signaturepad__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _cv_documentation_cv_documentation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cv-documentation/cv-documentation.component */ "./src/app/cv-documentation/cv-documentation.component.ts");
/* harmony import */ var _pgs_home_pgs_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pgs-home/pgs-home.component */ "./src/app/pgs-home/pgs-home.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/messages */ "./node_modules/primeng/messages.js");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_messages__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/fileupload */ "./node_modules/primeng/fileupload.js");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_fileupload__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _angular_material_extensions_password_strength__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular-material-extensions/password-strength */ "./node_modules/@angular-material-extensions/password-strength/esm5/password-strength.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _servies_cache_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./servies/cache.service */ "./src/app/servies/cache.service.ts");
/* harmony import */ var _login_credentials_login_credentials_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./login-credentials/login-credentials.component */ "./src/app/login-credentials/login-credentials.component.ts");
/* harmony import */ var _pgs_home_landing_pgs_home_landing_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pgs-home-landing/pgs-home-landing.component */ "./src/app/pgs-home-landing/pgs-home-landing.component.ts");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "./src/app/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var _file_aupploadings_file_aupploadings_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./file-aupploadings/file-aupploadings.component */ "./src/app/file-aupploadings/file-aupploadings.component.ts");
/* harmony import */ var _guard_file_upload_guard__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./guard/file-upload.guard */ "./src/app/guard/file-upload.guard.ts");
/* harmony import */ var _preview_cv_preview_cv_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./preview-cv/preview-cv.component */ "./src/app/preview-cv/preview-cv.component.ts");
/* harmony import */ var _cv_account_login_cv_account_login_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./cv-account-login/cv-account-login.component */ "./src/app/cv-account-login/cv-account-login.component.ts");
/* harmony import */ var _account_dashboard_account_dashboard_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./account-dashboard/account-dashboard.component */ "./src/app/account-dashboard/account-dashboard.component.ts");
/* harmony import */ var _login_guard__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./login.guard */ "./src/app/login.guard.ts");
/* harmony import */ var _edit_cv_edit_cv_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./edit-cv/edit-cv.component */ "./src/app/edit-cv/edit-cv.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _search_cv_search_cv_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./search-cv/search-cv.component */ "./src/app/search-cv/search-cv.component.ts");
/* harmony import */ var _survey_form_survey_form_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./survey-form/survey-form.component */ "./src/app/survey-form/survey-form.component.ts");
/* harmony import */ var _contact_administrator_contact_administrator_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./contact-administrator/contact-administrator.component */ "./src/app/contact-administrator/contact-administrator.component.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _pgs_header_pgs_header_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pgs-header/pgs-header.component */ "./src/app/pgs-header/pgs-header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");













// import {FlexLayoutModule} from '@angular/flex-layout';
/***Primeng Modules are here*/





















// import {
// } from 'primeng';




var appRoute = [
    { path: '', component: _pgs_home_landing_pgs_home_landing_component__WEBPACK_IMPORTED_MODULE_21__["PgsHomeLandingComponent"] },
    { path: 'cv-documentation/:username', component: _cv_documentation_cv_documentation_component__WEBPACK_IMPORTED_MODULE_8__["CvDocumentationComponent"] },
    { path: 'cv-documentation', component: _cv_documentation_cv_documentation_component__WEBPACK_IMPORTED_MODULE_8__["CvDocumentationComponent"] },
    { path: 'preview-cv', component: _preview_cv_preview_cv_component__WEBPACK_IMPORTED_MODULE_25__["PreviewCvComponent"] },
    { path: 'preview-cv/:username', component: _preview_cv_preview_cv_component__WEBPACK_IMPORTED_MODULE_25__["PreviewCvComponent"] },
    { path: 'admin-dashboard', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_35__["AdminComponent"] },
    // {path : 'preview-cv' , component : PreviewCvComponent},
    { path: 'login', component: _login_credentials_login_credentials_component__WEBPACK_IMPORTED_MODULE_20__["LoginCredentialsComponent"] },
    { path: 'dashboaracceptedDated', component: _account_dashboard_account_dashboard_component__WEBPACK_IMPORTED_MODULE_27__["AccountDashboardComponent"], canActivate: [_login_guard__WEBPACK_IMPORTED_MODULE_28__["LoginGuard"]], children: [] },
    { path: 'cv-preview-edit', component: _edit_cv_edit_cv_component__WEBPACK_IMPORTED_MODULE_29__["EditCvComponent"] },
    { path: 'quick-survey', component: _survey_form_survey_form_component__WEBPACK_IMPORTED_MODULE_32__["SurveyFormComponent"] },
    { path: 'fileuploads/:username', component: _file_aupploadings_file_aupploadings_component__WEBPACK_IMPORTED_MODULE_23__["FileAupploadingsComponent"], canActivate: [_guard_file_upload_guard__WEBPACK_IMPORTED_MODULE_24__["FileUploadGuard"]] },
    { path: 'view-edit-cv', component: _file_aupploadings_file_aupploadings_component__WEBPACK_IMPORTED_MODULE_23__["FileAupploadingsComponent"], canActivate: [_guard_file_upload_guard__WEBPACK_IMPORTED_MODULE_24__["FileUploadGuard"]] },
    { path: 'admin-contact', component: _contact_administrator_contact_administrator_component__WEBPACK_IMPORTED_MODULE_33__["ContactAdministratorComponent"] },
    { path: '**', component: _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_22__["PagenotfoundComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _cv_documentation_cv_documentation_component__WEBPACK_IMPORTED_MODULE_8__["CvDocumentationComponent"],
                _pgs_home_pgs_home_component__WEBPACK_IMPORTED_MODULE_9__["PGSHomeComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_22__["PagenotfoundComponent"],
                _login_credentials_login_credentials_component__WEBPACK_IMPORTED_MODULE_20__["LoginCredentialsComponent"],
                _pgs_home_landing_pgs_home_landing_component__WEBPACK_IMPORTED_MODULE_21__["PgsHomeLandingComponent"],
                _file_aupploadings_file_aupploadings_component__WEBPACK_IMPORTED_MODULE_23__["FileAupploadingsComponent"],
                _preview_cv_preview_cv_component__WEBPACK_IMPORTED_MODULE_25__["PreviewCvComponent"],
                _cv_account_login_cv_account_login_component__WEBPACK_IMPORTED_MODULE_26__["CvAccountLoginComponent"],
                _account_dashboard_account_dashboard_component__WEBPACK_IMPORTED_MODULE_27__["AccountDashboardComponent"],
                _edit_cv_edit_cv_component__WEBPACK_IMPORTED_MODULE_29__["EditCvComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_30__["LoginComponent"],
                _search_cv_search_cv_component__WEBPACK_IMPORTED_MODULE_31__["SearchCvComponent"],
                _survey_form_survey_form_component__WEBPACK_IMPORTED_MODULE_32__["SurveyFormComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_35__["AdminComponent"],
                _pgs_header_pgs_header_component__WEBPACK_IMPORTED_MODULE_36__["PgsHeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_37__["FooterComponent"],
                _contact_administrator_contact_administrator_component__WEBPACK_IMPORTED_MODULE_33__["ContactAdministratorComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_material_extensions_password_strength__WEBPACK_IMPORTED_MODULE_17__["MatPasswordStrengthModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forRoot(appRoute),
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"], _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatOptionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"],
                angular2_signaturepad__WEBPACK_IMPORTED_MODULE_7__["SignaturePadModule"], _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatRadioModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"], primeng_fileupload__WEBPACK_IMPORTED_MODULE_14__["FileUploadModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"], primeng_messages__WEBPACK_IMPORTED_MODULE_13__["MessagesModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_15__["ToastModule"],
                _angular_material_extensions_password_strength__WEBPACK_IMPORTED_MODULE_17__["MatPasswordStrengthModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_34__["DataTableModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_34__["DialogModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_34__["ButtonModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_34__["ConfirmDialogModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_34__["ToggleButtonModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_34__["GrowlModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_34__["CalendarModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_34__["InputTextModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_34__["RadioButtonModule"]
            ],
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_16__["MessageService"], _servies_cache_service__WEBPACK_IMPORTED_MODULE_19__["CacheService"], primeng_primeng__WEBPACK_IMPORTED_MODULE_34__["ConfirmationService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact-administrator/contact-administrator.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/contact-administrator/contact-administrator.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtYWRtaW5pc3RyYXRvci9jb250YWN0LWFkbWluaXN0cmF0b3IuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/contact-administrator/contact-administrator.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/contact-administrator/contact-administrator.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"version-drak\">\n  <!--Start Preloader-->\n  <div class=\"preloader\" style=\"display: none;\">\n    <div class=\"d-table\">\n      <div class=\"d-table-cell align-middle\">\n        <div class=\"spinner\">\n          <div class=\"double-bounce1\"></div>\n          <div class=\"double-bounce2\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!--End Preloader-->\n  <!--start header-->\n  <header id=\"header\">\n    <div class=\"container\">\n      <nav class=\"navbar navbar-expand-lg\">\n        <div class=\"container\">\n          <!-- Logo -->\n          <!-- <a class=\"logo\" href=\"#\"><img src=\"/assets/new-assets/images/logo.png\" alt=\"logo\"></a> -->\n\n\n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarContent\"\n            aria-controls=\"navbarContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"icon-bar\"><i class=\"icofont-navigation-menu\"></i></span>\n          </button>\n          <!-- navbar links -->\n          <div class=\"collapse navbar-collapse\" id=\"navbarContent\">\n            <ul class=\"navbar-nav ml-auto\">\n              <!-- <li class=\"nav-item\">\n                <a class=\"nav-link\"  data-scroll-nav=\"9\" style=\"color: white\">Promot Bot</a>\n              </li> -->\n              <li class=\"nav-item\">\n                  <a class=\"nav-link active\" href=\"#\" data-scroll-nav=\"0\">Home</a>\n              </li>\n              <li class=\"nav-item\">\n                <!-- <a class=\"nav-link\" href=\"#\" data-scroll-nav=\"1\">Features</a> -->\n                <a class=\"nav-link\" href=\"#\" data-scroll-nav=\"1\">About</a>\n              </li>\n              <!-- <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"#\" data-scroll-nav=\"3\">Terms and Condition</a>\n              </li> -->\n              <!-- <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"#\" data-scroll-nav=\"4\">FUNAAB Homepage</a>\n              </li> -->\n              <li class=\"nav-item\">\n                <!-- <a class=\"nav-link\" href=\"#\">Blog</a> -->\n              </li>\n              <li class=\"nav-item download-btn\">\n                <a class=\"nav-link\" data-scroll-nav=\"5\" [routerLink]=\"[ '/cv-documentation' ]\">Assesment </a>\n              </li>\n\n\n\n              <li class=\"nav-item download-btn\">\n                <a class=\"nav-link\" data-scroll-nav=\"5\" [routerLink]=\"[ '/cv-documentation-stage' ]\"> Submit CV </a>\n              </li>\n\n\n\n              <li class=\"nav-item download-btn\">\n                  <a class=\"nav-link\" data-scroll-nav=\"5\" [routerLink]=\"[ '/admin-contact' ]\"> Contact Administrator </a>\n              </li>\n<!-- \n              <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"#\" data-scroll-nav=\"2\">Contact Administrator</a>\n              </li> -->\n\n            </ul>\n          </div>\n        </div>\n      </nav>\n    </div>\n  </header>\n\n\n  <section class=\"bg bg-2\" id=\"faq-area\">\n  <div class=\"faq-area-img\"><img alt=\"\" class=\"img-fluid\" src=\"/assets/new-assets/images/faq-bg-1.png\"></div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-8 offset-md-2\">\n        <div class=\"section-heading text-center\">\n          <!-- <h5>Contac Administrator</h5> -->\n          <h2 class=\"text-white\">Get in touch with : </h2>\n          <p class=\"text-light\">Dr Adebukola Onoshoga , Room 204 , Unity Building , FUNAAB</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/contact-administrator/contact-administrator.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/contact-administrator/contact-administrator.component.ts ***!
  \**************************************************************************/
/*! exports provided: ContactAdministratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactAdministratorComponent", function() { return ContactAdministratorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactAdministratorComponent = /** @class */ (function () {
    function ContactAdministratorComponent() {
    }
    ContactAdministratorComponent.prototype.ngOnInit = function () {
    };
    ContactAdministratorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-administrator',
            template: __webpack_require__(/*! ./contact-administrator.component.html */ "./src/app/contact-administrator/contact-administrator.component.html"),
            styles: [__webpack_require__(/*! ./contact-administrator.component.css */ "./src/app/contact-administrator/contact-administrator.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactAdministratorComponent);
    return ContactAdministratorComponent;
}());



/***/ }),

/***/ "./src/app/cv-account-login/cv-account-login.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/cv-account-login/cv-account-login.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N2LWFjY291bnQtbG9naW4vY3YtYWNjb3VudC1sb2dpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/cv-account-login/cv-account-login.component.html":
/*!******************************************************************!*\
  !*** ./src/app/cv-account-login/cv-account-login.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  cv-account-login works!\n</p>\n"

/***/ }),

/***/ "./src/app/cv-account-login/cv-account-login.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/cv-account-login/cv-account-login.component.ts ***!
  \****************************************************************/
/*! exports provided: CvAccountLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvAccountLoginComponent", function() { return CvAccountLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CvAccountLoginComponent = /** @class */ (function () {
    function CvAccountLoginComponent() {
    }
    CvAccountLoginComponent.prototype.ngOnInit = function () {
    };
    CvAccountLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cv-account-login',
            template: __webpack_require__(/*! ./cv-account-login.component.html */ "./src/app/cv-account-login/cv-account-login.component.html"),
            styles: [__webpack_require__(/*! ./cv-account-login.component.css */ "./src/app/cv-account-login/cv-account-login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CvAccountLoginComponent);
    return CvAccountLoginComponent;
}());



/***/ }),

/***/ "./src/app/cv-documentation/cv-documentation.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/cv-documentation/cv-documentation.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.text-field{\n    width: 400px;\n}\n\n.width-5{\n    width: 5%;\n}\n\n.width-10{\n    width: 10%;\n}\n\n.width-15{\n    width: 15%;\n}\n\n.width-20{\n    width: 20%;\n}\n\n.width-25{\n    width: 25%;\n}\n\n.width-30{\n    width: 30%;\n}\n\n.width-35{\n    width: 35%;\n}\n\n.width-40{\n    width: 40%;\n}\n\n.width-45{\n    width: 45%;\n}\n\n.width-50{\n    width: 50%;\n}\n\n.width-55{\n    width: 55%;\n}\n\n.width-60{\n    width: 60%;\n}\n\n.width-65{\n    width: 65%;\n}\n\n.width-70{\n    width: 70%;\n}\n\n.width-75{\n    width: 75%;\n}\n\n.width-80{\n    width: 80%;\n}\n\n.width-85{\n    width: 85%;\n}\n\n.width-90{\n    width: 90%;\n}\n\n.width-95{\n    width: 95%;\n}\n\n.width-100{\n    width: 100%;\n}\n\n.marging-left-5{\n    margin-left: 5px;\n}\n\n.marging-left-10{\n    margin-left: 10px;\n}\n\n.marging-left-15{\n    margin-left: 15px;\n}\n\n.marging-left-20{\n    margin-left: 20px;\n}\n\n.marging-left-25{\n    margin-left: 25px;\n}\n\n.marging-left-30{\n    margin-left: 30px;\n}\n\n.marging-left-35{\n    margin-left: 35px;\n}\n\n.marging-left-40{\n    margin-left: 40px;\n}\n\n.marging-left-45{\n    margin-left: 45px;\n}\n\n.marging-left-50{\n    margin-left: 50px;\n}\n\n.marging-left-55{\n    margin-left: 55px;\n}\n\n.marging-left-60{\n    margin-left: 60px;\n}\n\n.marging-left-65{\n    margin-left: 65px;\n}\n\n.marging-left-70{\n    margin-left: 70px;\n}\n\n.marging-left-75{\n    margin-left: 75px;\n}\n\n.marging-left-80{\n    margin-left: 80px;\n}\n\n.marging-left-85{\n    margin-left: 85px;\n}\n\n.marging-left-90{\n    margin-left: 90px;\n}\n\n.marging-left-95{\n    margin-left: 95px;\n}\n\n.marging-left-100{\n    margin-left: 100px;\n}\n\n.marging-right-5{\n    margin-right: 5px;\n}\n\n.marging-right-10{\n    margin-right: 10px;\n}\n\n.marging-right-15{\n    margin-right: 15px;\n}\n\n.marging-right-20{\n    margin-right: 20px;\n}\n\n.marging-right-25{\n    margin-right: 25px;\n}\n\n.marging-right-30{\n    margin-right: 30px;\n}\n\n.marging-right-35{\n    margin-right: 35px;\n}\n\n.marging-right-40{\n    margin-right: 40px;\n}\n\n.marging-right-45{\n    margin-right: 45px;\n}\n\n.marging-right-50{\n    margin-right: 50px;\n}\n\n.marging-right-55{\n    margin-right: 55px;\n}\n\n.marging-right-60{\n    margin-right: 60px;\n}\n\n.marging-right-65{\n    margin-right: 65px;\n}\n\n.marging-right-70{\n    margin-right: 70px;\n}\n\n.marging-right-75{\n    margin-right: 75px;\n}\n\n.marging-right-80{\n    margin-right: 80px;\n}\n\n.marging-right-85{\n    margin-right: 85px;\n}\n\n.marging-right-90{\n    margin-right: 90px;\n}\n\n.marging-right-95{\n    margin-right: 95px;\n}\n\n.marging-right-100{\n    margin-right: 100px;\n}\n\n.marging-5{\n    margin: 5px;\n}\n\n.marging-10{\n    margin: 10px;\n}\n\n.marging-top-left{\n    margin: 0px \n}\n\n.style{\n    flex-direction: column;\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap\n}\n\n.f {\n    clear: both;\n}\n\n.marging-top-20{\n    margin-top: 20%;\n    border-top: 2px solid blueviolet;\n}\n\n.marging-top-50{\n    margin-top: 50%;\n    border-top: 2px solid blueviolet;\n}\n\n.example-radio-group {\n  display: inline-flex;\n  flex-direction: column;\n}\n\n.example-radio-button {\n  margin: 5px;\n  margin-left: 0px;\n}\n\n.example-selected-value {\n  margin: 15px 0;\n}\n\n.custom-textarea {\n  height: auto;\n  /**margin-top: 20px; */\n  min-height: 20px;\n  overflow: auto;\n  padding: 5px;\n  font-size: 20px;\n  word-break: break-word;\n}\n\ninput .input{\n    font-size: 20px ;\n}\n\n.float-right {\n    float: right ;\n    margin:  0 100px;\n}\n\n.card-header-bg-color{\n    /* background-color: rgb(165, 14, 132) ;\n    color: white ;\n    font: 100px;\n    border-radius: 5px; */\n\n    color:rgba(0, 0, 0, 0.842) ;\n    font: 100px;\n    border-left: 30px blueviolet;\n}\n\n.overlay {\n        position: fixed; /* Sit on top of the page content */\n        display: block; /* Hidden by default */\n        width: 100%; /* Full width (cover the whole page) */\n        height: 100%; /* Full height (cover the whole page) */\n        top: 0; \n        left: 0;\n        right: 0;\n        bottom: 0;\n        background-color: rgba(0,0,0,0.5); /* Black background with opacity */\n        z-index: 2; /* Specify a stack order in case you're using a different order for other elements */\n        cursor: pointer; /* Add a pointer on hover */\n}\n\n.overlay_1 {\n    position: fixed; /* Sit on top of the page content */\n    display: block; /* Hidden by default */\n    width: 80%; /* Full width (cover the whole page) */\n    height: 100%; /* Full height (cover the whole page) */\n    top: 0; \n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(44, 9, 58, 0.979); /* Black background with opacity */\n    z-index: 2; /* Specify a stack order in case you're using a different order for other elements */\n    cursor: pointer; /* Add a pointer on hover */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3YtZG9jdW1lbnRhdGlvbi9jdi1kb2N1bWVudGF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksYUFBYTtDQUNoQjs7QUFFRDtJQUNJLFVBQVU7Q0FDYjs7QUFBQTtJQUNHLFdBQVc7Q0FDZDs7QUFBQTtJQUNHLFdBQVc7Q0FDZDs7QUFBQTtJQUNHLFdBQVc7Q0FDZDs7QUFBQTtJQUNHLFdBQVc7Q0FDZDs7QUFDRDtJQUNJLFdBQVc7Q0FDZDs7QUFBQTtJQUNHLFdBQVc7Q0FDZDs7QUFBQTtJQUNHLFdBQVc7Q0FDZDs7QUFBQTtJQUNHLFdBQVc7Q0FDZDs7QUFBQTtJQUNHLFdBQVc7Q0FDZDs7QUFBQTtJQUNHLFdBQVc7Q0FDZDs7QUFBQTtJQUNHLFdBQVc7Q0FDZDs7QUFBQTtJQUNHLFdBQVc7Q0FDZDs7QUFBQTtJQUNHLFdBQVc7Q0FDZDs7QUFBQTtJQUNHLFdBQVc7Q0FDZDs7QUFBQTtJQUNHLFdBQVc7Q0FDZDs7QUFBQTtJQUNHLFdBQVc7Q0FDZDs7QUFBQTtJQUNHLFdBQVc7Q0FDZDs7QUFBQTtJQUNHLFdBQVc7Q0FDZDs7QUFBQTtJQUNHLFlBQVk7Q0FDZjs7QUFHRDtJQUNJLGlCQUFpQjtDQUNwQjs7QUFBQTtJQUNHLGtCQUFrQjtDQUNyQjs7QUFBQTtJQUNHLGtCQUFrQjtDQUNyQjs7QUFBQTtJQUNHLGtCQUFrQjtDQUNyQjs7QUFBQTtJQUNHLGtCQUFrQjtDQUNyQjs7QUFBQTtJQUNHLGtCQUFrQjtDQUNyQjs7QUFBQTtJQUNHLGtCQUFrQjtDQUNyQjs7QUFBQTtJQUNHLGtCQUFrQjtDQUNyQjs7QUFBQTtJQUNHLGtCQUFrQjtDQUNyQjs7QUFBQTtJQUNHLGtCQUFrQjtDQUNyQjs7QUFBQTtJQUNHLGtCQUFrQjtDQUNyQjs7QUFBQTtJQUNHLGtCQUFrQjtDQUNyQjs7QUFBQTtJQUNHLGtCQUFrQjtDQUNyQjs7QUFBQTtJQUNHLGtCQUFrQjtDQUNyQjs7QUFBQTtJQUNHLGtCQUFrQjtDQUNyQjs7QUFBQTtJQUNHLGtCQUFrQjtDQUNyQjs7QUFBQTtJQUNHLGtCQUFrQjtDQUNyQjs7QUFBQTtJQUNHLGtCQUFrQjtDQUNyQjs7QUFBQTtJQUNHLGtCQUFrQjtDQUNyQjs7QUFBQTtJQUNHLG1CQUFtQjtDQUN0Qjs7QUFJRDtJQUNJLGtCQUFrQjtDQUNyQjs7QUFBQTtJQUNHLG1CQUFtQjtDQUN0Qjs7QUFBQTtJQUNHLG1CQUFtQjtDQUN0Qjs7QUFBQTtJQUNHLG1CQUFtQjtDQUN0Qjs7QUFBQTtJQUNHLG1CQUFtQjtDQUN0Qjs7QUFBQTtJQUNHLG1CQUFtQjtDQUN0Qjs7QUFBQTtJQUNHLG1CQUFtQjtDQUN0Qjs7QUFBQTtJQUNHLG1CQUFtQjtDQUN0Qjs7QUFBQTtJQUNHLG1CQUFtQjtDQUN0Qjs7QUFBQTtJQUNHLG1CQUFtQjtDQUN0Qjs7QUFBQTtJQUNHLG1CQUFtQjtDQUN0Qjs7QUFBQTtJQUNHLG1CQUFtQjtDQUN0Qjs7QUFBQTtJQUNHLG1CQUFtQjtDQUN0Qjs7QUFBQTtJQUNHLG1CQUFtQjtDQUN0Qjs7QUFBQTtJQUNHLG1CQUFtQjtDQUN0Qjs7QUFBQTtJQUNHLG1CQUFtQjtDQUN0Qjs7QUFBQTtJQUNHLG1CQUFtQjtDQUN0Qjs7QUFBQTtJQUNHLG1CQUFtQjtDQUN0Qjs7QUFBQTtJQUNHLG1CQUFtQjtDQUN0Qjs7QUFBQTtJQUNHLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLFlBQVk7Q0FDZjs7QUFBQTtJQUNHLGFBQWE7Q0FDaEI7O0FBQUE7SUFDRyxXQUFXO0NBQ2Q7O0FBQUE7SUFDRyx1QkFBdUI7SUFDdkIsY0FBYztJQUNkLCtCQUErQjtJQUMvQixlQUFlO0NBQ2xCOztBQUVEO0lBQ0ksWUFBWTtDQUNmOztBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlDQUFpQztDQUNwQzs7QUFFRDtJQUNJLGdCQUFnQjtJQUNoQixpQ0FBaUM7Q0FDcEM7O0FBSUQ7RUFDRSxxQkFBcUI7RUFDckIsdUJBQXVCO0NBQ3hCOztBQUVEO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQix1QkFBdUI7Q0FDeEI7O0FBQ0Q7SUFDSSxpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0k7OzswQkFHc0I7O0lBRXRCLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osNkJBQTZCO0NBQ2hDOztBQUdEO1FBQ1EsZ0JBQWdCLENBQUMsb0NBQW9DO1FBQ3JELGVBQWUsQ0FBQyx1QkFBdUI7UUFDdkMsWUFBWSxDQUFDLHVDQUF1QztRQUNwRCxhQUFhLENBQUMsd0NBQXdDO1FBQ3RELE9BQU87UUFDUCxRQUFRO1FBQ1IsU0FBUztRQUNULFVBQVU7UUFDVixrQ0FBa0MsQ0FBQyxtQ0FBbUM7UUFDdEUsV0FBVyxDQUFDLHFGQUFxRjtRQUNqRyxnQkFBZ0IsQ0FBQyw0QkFBNEI7Q0FDcEQ7O0FBRUQ7SUFDSSxnQkFBZ0IsQ0FBQyxvQ0FBb0M7SUFDckQsZUFBZSxDQUFDLHVCQUF1QjtJQUN2QyxXQUFXLENBQUMsdUNBQXVDO0lBQ25ELGFBQWEsQ0FBQyx3Q0FBd0M7SUFDdEQsT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QsVUFBVTtJQUNWLHlDQUF5QyxDQUFDLG1DQUFtQztJQUM3RSxXQUFXLENBQUMscUZBQXFGO0lBQ2pHLGdCQUFnQixDQUFDLDRCQUE0QjtDQUNoRCIsImZpbGUiOiJzcmMvYXBwL2N2LWRvY3VtZW50YXRpb24vY3YtZG9jdW1lbnRhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4udGV4dC1maWVsZHtcbiAgICB3aWR0aDogNDAwcHg7XG59XG5cbi53aWR0aC01e1xuICAgIHdpZHRoOiA1JTtcbn0ud2lkdGgtMTB7XG4gICAgd2lkdGg6IDEwJTtcbn0ud2lkdGgtMTV7XG4gICAgd2lkdGg6IDE1JTtcbn0ud2lkdGgtMjB7XG4gICAgd2lkdGg6IDIwJTtcbn0ud2lkdGgtMjV7XG4gICAgd2lkdGg6IDI1JTtcbn1cbi53aWR0aC0zMHtcbiAgICB3aWR0aDogMzAlO1xufS53aWR0aC0zNXtcbiAgICB3aWR0aDogMzUlO1xufS53aWR0aC00MHtcbiAgICB3aWR0aDogNDAlO1xufS53aWR0aC00NXtcbiAgICB3aWR0aDogNDUlO1xufS53aWR0aC01MHtcbiAgICB3aWR0aDogNTAlO1xufS53aWR0aC01NXtcbiAgICB3aWR0aDogNTUlO1xufS53aWR0aC02MHtcbiAgICB3aWR0aDogNjAlO1xufS53aWR0aC02NXtcbiAgICB3aWR0aDogNjUlO1xufS53aWR0aC03MHtcbiAgICB3aWR0aDogNzAlO1xufS53aWR0aC03NXtcbiAgICB3aWR0aDogNzUlO1xufS53aWR0aC04MHtcbiAgICB3aWR0aDogODAlO1xufS53aWR0aC04NXtcbiAgICB3aWR0aDogODUlO1xufS53aWR0aC05MHtcbiAgICB3aWR0aDogOTAlO1xufS53aWR0aC05NXtcbiAgICB3aWR0aDogOTUlO1xufS53aWR0aC0xMDB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cblxuLm1hcmdpbmctbGVmdC01e1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG59Lm1hcmdpbmctbGVmdC0xMHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn0ubWFyZ2luZy1sZWZ0LTE1e1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xufS5tYXJnaW5nLWxlZnQtMjB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59Lm1hcmdpbmctbGVmdC0yNXtcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcbn0ubWFyZ2luZy1sZWZ0LTMwe1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xufS5tYXJnaW5nLWxlZnQtMzV7XG4gICAgbWFyZ2luLWxlZnQ6IDM1cHg7XG59Lm1hcmdpbmctbGVmdC00MHtcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcbn0ubWFyZ2luZy1sZWZ0LTQ1e1xuICAgIG1hcmdpbi1sZWZ0OiA0NXB4O1xufS5tYXJnaW5nLWxlZnQtNTB7XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG59Lm1hcmdpbmctbGVmdC01NXtcbiAgICBtYXJnaW4tbGVmdDogNTVweDtcbn0ubWFyZ2luZy1sZWZ0LTYwe1xuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xufS5tYXJnaW5nLWxlZnQtNjV7XG4gICAgbWFyZ2luLWxlZnQ6IDY1cHg7XG59Lm1hcmdpbmctbGVmdC03MHtcbiAgICBtYXJnaW4tbGVmdDogNzBweDtcbn0ubWFyZ2luZy1sZWZ0LTc1e1xuICAgIG1hcmdpbi1sZWZ0OiA3NXB4O1xufS5tYXJnaW5nLWxlZnQtODB7XG4gICAgbWFyZ2luLWxlZnQ6IDgwcHg7XG59Lm1hcmdpbmctbGVmdC04NXtcbiAgICBtYXJnaW4tbGVmdDogODVweDtcbn0ubWFyZ2luZy1sZWZ0LTkwe1xuICAgIG1hcmdpbi1sZWZ0OiA5MHB4O1xufS5tYXJnaW5nLWxlZnQtOTV7XG4gICAgbWFyZ2luLWxlZnQ6IDk1cHg7XG59Lm1hcmdpbmctbGVmdC0xMDB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xufVxuXG5cblxuLm1hcmdpbmctcmlnaHQtNXtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn0ubWFyZ2luZy1yaWdodC0xMHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59Lm1hcmdpbmctcmlnaHQtMTV7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufS5tYXJnaW5nLXJpZ2h0LTIwe1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbn0ubWFyZ2luZy1yaWdodC0yNXtcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG59Lm1hcmdpbmctcmlnaHQtMzB7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xufS5tYXJnaW5nLXJpZ2h0LTM1e1xuICAgIG1hcmdpbi1yaWdodDogMzVweDtcbn0ubWFyZ2luZy1yaWdodC00MHtcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG59Lm1hcmdpbmctcmlnaHQtNDV7XG4gICAgbWFyZ2luLXJpZ2h0OiA0NXB4O1xufS5tYXJnaW5nLXJpZ2h0LTUwe1xuICAgIG1hcmdpbi1yaWdodDogNTBweDtcbn0ubWFyZ2luZy1yaWdodC01NXtcbiAgICBtYXJnaW4tcmlnaHQ6IDU1cHg7XG59Lm1hcmdpbmctcmlnaHQtNjB7XG4gICAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xufS5tYXJnaW5nLXJpZ2h0LTY1e1xuICAgIG1hcmdpbi1yaWdodDogNjVweDtcbn0ubWFyZ2luZy1yaWdodC03MHtcbiAgICBtYXJnaW4tcmlnaHQ6IDcwcHg7XG59Lm1hcmdpbmctcmlnaHQtNzV7XG4gICAgbWFyZ2luLXJpZ2h0OiA3NXB4O1xufS5tYXJnaW5nLXJpZ2h0LTgwe1xuICAgIG1hcmdpbi1yaWdodDogODBweDtcbn0ubWFyZ2luZy1yaWdodC04NXtcbiAgICBtYXJnaW4tcmlnaHQ6IDg1cHg7XG59Lm1hcmdpbmctcmlnaHQtOTB7XG4gICAgbWFyZ2luLXJpZ2h0OiA5MHB4O1xufS5tYXJnaW5nLXJpZ2h0LTk1e1xuICAgIG1hcmdpbi1yaWdodDogOTVweDtcbn0ubWFyZ2luZy1yaWdodC0xMDB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcbn1cblxuLm1hcmdpbmctNXtcbiAgICBtYXJnaW46IDVweDtcbn0ubWFyZ2luZy0xMHtcbiAgICBtYXJnaW46IDEwcHg7XG59Lm1hcmdpbmctdG9wLWxlZnR7XG4gICAgbWFyZ2luOiAwcHggXG59LnN0eWxle1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZmxleC13cmFwOiB3cmFwXG59XG5cbi5mIHtcbiAgICBjbGVhcjogYm90aDtcbn1cblxuLm1hcmdpbmctdG9wLTIwe1xuICAgIG1hcmdpbi10b3A6IDIwJTtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgYmx1ZXZpb2xldDtcbn1cblxuLm1hcmdpbmctdG9wLTUwe1xuICAgIG1hcmdpbi10b3A6IDUwJTtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgYmx1ZXZpb2xldDtcbn1cblxuXG5cbi5leGFtcGxlLXJhZGlvLWdyb3VwIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5leGFtcGxlLXJhZGlvLWJ1dHRvbiB7XG4gIG1hcmdpbjogNXB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG4uZXhhbXBsZS1zZWxlY3RlZC12YWx1ZSB7XG4gIG1hcmdpbjogMTVweCAwO1xufVxuXG4uY3VzdG9tLXRleHRhcmVhIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICAvKiptYXJnaW4tdG9wOiAyMHB4OyAqL1xuICBtaW4taGVpZ2h0OiAyMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgcGFkZGluZzogNXB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG59XG5pbnB1dCAuaW5wdXR7XG4gICAgZm9udC1zaXplOiAyMHB4IDtcbn1cblxuLmZsb2F0LXJpZ2h0IHtcbiAgICBmbG9hdDogcmlnaHQgO1xuICAgIG1hcmdpbjogIDAgMTAwcHg7XG59XG5cbi5jYXJkLWhlYWRlci1iZy1jb2xvcntcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY1LCAxNCwgMTMyKSA7XG4gICAgY29sb3I6IHdoaXRlIDtcbiAgICBmb250OiAxMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7ICovXG5cbiAgICBjb2xvcjpyZ2JhKDAsIDAsIDAsIDAuODQyKSA7XG4gICAgZm9udDogMTAwcHg7XG4gICAgYm9yZGVyLWxlZnQ6IDMwcHggYmx1ZXZpb2xldDtcbn1cblxuXG4ub3ZlcmxheSB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU2l0IG9uIHRvcCBvZiB0aGUgcGFnZSBjb250ZW50ICovXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xuICAgICAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXG4gICAgICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xuICAgICAgICB0b3A6IDA7IFxuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7IC8qIEJsYWNrIGJhY2tncm91bmQgd2l0aCBvcGFjaXR5ICovXG4gICAgICAgIHotaW5kZXg6IDI7IC8qIFNwZWNpZnkgYSBzdGFjayBvcmRlciBpbiBjYXNlIHlvdSdyZSB1c2luZyBhIGRpZmZlcmVudCBvcmRlciBmb3Igb3RoZXIgZWxlbWVudHMgKi9cbiAgICAgICAgY3Vyc29yOiBwb2ludGVyOyAvKiBBZGQgYSBwb2ludGVyIG9uIGhvdmVyICovXG59XG5cbi5vdmVybGF5XzEge1xuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU2l0IG9uIHRvcCBvZiB0aGUgcGFnZSBjb250ZW50ICovXG4gICAgZGlzcGxheTogYmxvY2s7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXG4gICAgd2lkdGg6IDgwJTsgLyogRnVsbCB3aWR0aCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXG4gICAgdG9wOiAwOyBcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ0LCA5LCA1OCwgMC45NzkpOyAvKiBCbGFjayBiYWNrZ3JvdW5kIHdpdGggb3BhY2l0eSAqL1xuICAgIHotaW5kZXg6IDI7IC8qIFNwZWNpZnkgYSBzdGFjayBvcmRlciBpbiBjYXNlIHlvdSdyZSB1c2luZyBhIGRpZmZlcmVudCBvcmRlciBmb3Igb3RoZXIgZWxlbWVudHMgKi9cbiAgICBjdXJzb3I6IHBvaW50ZXI7IC8qIEFkZCBhIHBvaW50ZXIgb24gaG92ZXIgKi9cbn0iXX0= */"

/***/ }),

/***/ "./src/app/cv-documentation/cv-documentation.component.html":
/*!******************************************************************!*\
  !*** ./src/app/cv-documentation/cv-documentation.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-pgs-header></app-pgs-header>\n\n\n<div class=\"version-drak\">\n\n  <section class=\"bg bg-2\" id=\"faq-area\">\n    <div class=\"faq-area-img\"><img alt=\"\" class=\"img-fluid\" src=\"/assets/new-assets/images/faq-bg-1.png\"></div>\n    <div class=\"container\">\n      <div class=\"row\">\n\n        <div class=\"col-md-8 offset-md-2\">\n          <div class=\"section-heading text-center\">\n            <h5>New Curriculum Vitae</h5>\n            <h2 class=\"text-white\">Welcome to Curriculum Vitae Section</h2>\n            <p class=\"text-light\">Please fill in correctly... you can preview after you are done!</p>\n          </div>\n        </div>\n\n\n\n      </div>\n      <p-toast position=\"top-right\"></p-toast>\n    </div>\n\n    <div id=\"contentToConvert\" #createdCV>\n      <!-- <mat-toolbar color=\"primary\">\n      <div>\n        <h2>\n          PGS - Promotional Grading System New Curriculum Vitae\n        </h2>\n      </div>\n    </mat-toolbar> -->\n\n      <mat-card class=\"margin-top-20\">\n        <mat-card-header>\n\n\n          <div mat-card-avatar>\n          </div>\n\n          <mat-card-title class=\"card-header-bg-color\">\n            <!-- <h3>NEW CURRICULUM VITAE</h3> -->\n\n\n\n          </mat-card-title>.\n\n          <mat-card-subtitle>\n            <mat-error *ngIf=\"usernameCond\">\n              Please choose another username before you can submit the form\n            </mat-error>\n          </mat-card-subtitle>\n\n          <div class=\"margin-top-20\" style=\"float: right; margin-right: 40px;\">\n            <button mat-raised-button mat-raised-button color=\"primary\" style=\"min-width: 100px;\"\n              (click)=\"saveAllFormsValues()\">\n              Save Form Details\n            </button>\n          </div>\n\n\n          <div class=\"margin-top-20\" style=\"float: right;  margin-right: 70px; ;\">\n            <button mat-raised-button mat-raised-button color=\"primary\"\n              style=\"min-width: 100px; background-color: rgb(245, 12, 12) \" (click)=\"deleteAllSavedFormsValues()\">\n              Delete All Form Details\n            </button>\n          </div>\n\n        </mat-card-header>\n\n\n\n\n        <mat-card-content>\n          <mat-vertical-stepper [linear]=\"false\" #stepper>\n            <mat-step [stepControl]=\"loginCredentials\">\n              <ng-template matStepLabel>LOGGING CREDENTIALS </ng-template>\n\n              <form [formGroup]=\"loginCredentials\">\n                <mat-form-field appearance=\"outline\" style=\"width: 100% ; margin-top: 5%\">\n                  <mat-label>Username</mat-label>\n\n                  <mat-icon matPrefix>user</mat-icon>\n                  <input matInput placeholder=\"Enter Username\" formControlName=\"username\">\n\n                  <mat-error\n                    *ngIf=\"loginCredentials.get('username').hasError('required') && loginCredentials.get('username').touched\">\n                    Username is required\n                  </mat-error>\n\n                  <mat-error *ngIf=\"loginCredentials.get('username').hasError('pattern')\">\n                    Invalid username\n                  </mat-error>\n\n                  <!-- <mat-error *ngIf=\"loginCredentials.get('username').hasError('exists')\">\n                          Username is already taken...\n                        </mat-error> -->\n\n                </mat-form-field>\n                <mat-error *ngIf=\"usernameCond\">\n                  Username already taken\n                </mat-error>\n\n                <!-- \n                    <mat-error *ngIf=\"loginCredentials.get('username').hasError('exists')\">\n                      Username is already taken...\n                    </mat-error> -->\n\n\n                <div>\n                  <mat-form-field appearance=\"outline\" style=\"width: 100% ; margin-top: 5%\">\n                    <mat-label>Password</mat-label>\n\n                    <input matInput #passwordWithValidation name=\"passwordWithValidation\" ngModel type=\"password\"\n                      required formControlName=\"password\" placeholder=\"Password\">\n\n                    <mat-hint align=\"end\" aria-live=\"polite\">\n                      {{passwordWithValidation.value.length}} / 25\n                    </mat-hint>\n\n                    <mat-error\n                      *ngIf=\"loginCredentials.get('password').hasError('required') && loginCredentials.get('password').touched\">\n                      Password is required\n                    </mat-error>\n\n                    <!-- <mat-error *ngIf=\"loginCredentials.get('password').hasError('required') && loginCredentials.get('password').touched\">\n                                <mat-icon matPrefix>sad</mat-icon>\n                                Password is not valid\n                            </mat-error> -->\n\n                  </mat-form-field>\n\n                  <mat-password-strength #passwordComponentWithValidation\n                    (onStrengthChanged)=\"onStrengthChanged($event)\" [password]=\"passwordWithValidation.value\">\n                  </mat-password-strength>\n\n                  <!--Password's strength info-->\n                </div>\n\n\n\n                <div>\n                  <!-- <mat-form-field appearance=\"outline\" style=\"width: 100%; margin-top: 5%\">\n                            <mat-label> Confirm Password</mat-label>\n                            <input matInput #confirmPassword\n                                   type=\"password\"\n                                   required\n                                   formControlName=\"confirmPassword\"\n                                   placeholder=\"Confirm Password\">\n                            <mat-hint align=\"end\" aria-live=\"polite\">\n                              {{confirmPassword.value.length}} / 25\n                            </mat-hint>\n                            <mat-error *ngIf=\"loginCredentials.get('confirmPassword').hasError('required')\">\n                                Password is required\n                             </mat-error> -->\n\n                  <!-- <mat-error *ngIf=\"loginCredentials.get('confirmPassword').hasError('pattern')\">\n                              Password is not valid\n                            </mat-error> -->\n\n                  <!-- <mat-error *ngIf=\"loginCredentials.get('password').hasError('mismatched')\">\n                              <mat-icon matPrefix></mat-icon>\n                              Password mismatched...\n                            </mat-error> -->\n\n                  <!-- </mat-form-field> -->\n\n\n                  <!-- <mat-password-strength #confirmPasswordValidation\n                                                          (onStrengthChanged)=\"onStrengthChanged($event)\"\n                                                          [password]=\"confirmPassword.value\">\n                          </mat-password-strength> -->\n                  <!--Password's strength info-->\n                  <!-- <mat-password-strength-info\n                            [passwordComponent]=\"confirmPasswordValidation\">\n                          </mat-password-strength-info> -->\n                </div>\n\n                <mat-password-strength-info [passwordComponent]=\"passwordComponentWithValidation\">\n                </mat-password-strength-info>\n\n\n                <div class=\"margin-top-20\" style=\"float: right;\">\n                  <button mat-raised-button matStepperNext mat-raised-button color=\"primary\"\n                    style=\"min-width: 100px;\" [disabled]='usernameCond'>Next </button>\n                </div>\n              </form>\n            </mat-step>\n\n\n\n\n            <mat-step>\n              <ng-template matStepLabel>PERSONAL PROFILE</ng-template>\n              <form [formGroup]=\"personalInformation\">\n\n                <mat-form-field appearance=\"outline\" class=\"width-45 marging-left-10 \">\n                  <mat-label>Full Name</mat-label>\n                  <input matInput placeholder=\"Name in full (Surname first in Capital letter)\"\n                    formControlName=\"nameInFull\">\n                </mat-form-field>\n\n\n                <mat-form-field appearance=\"outline\" class=\"width-45 marging-left-10 \">\n                  <mat-label>Place of Birth</mat-label>\n                  <input matInput placeholder=\"Place of birth\" formControlName=\"placeOfBirth\">\n                </mat-form-field>\n\n                <mat-form-field appearance=\"outline\" class=\"width-45 marging-left-10 \">\n                  <mat-label>Date Of Birth</mat-label>\n                  <input matInput [matDatepicker]=\"picker1\" placeholder=\"Select Date of Birth\"\n                    formControlName=\"dob\">\n                  <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                  <mat-datepicker #picker1 startView=\"year\"></mat-datepicker>\n                </mat-form-field>\n\n\n                <mat-form-field appearance=\"outline\" class=\"width-45 marging-left-10 \">\n                  <mat-label>Age</mat-label>\n                  <input matInput placeholder=\"Enter your age here\" formControlName=\"age\">\n                </mat-form-field>\n\n\n                <mat-form-field appearance=\"outline\" class=\"width-45 marging-left-10\">\n                  <mat-label>Sex</mat-label>\n                  <mat-select placeholder=\"Sex\" formControlName=\"sex\">\n                    <mat-option value=\"Male\">Male</mat-option>\n                    <mat-option value=\"Female\">Female</mat-option>\n                    <mat-option value=\"Rather Not Say\">Rather Not Say</mat-option>\n                  </mat-select>\n                </mat-form-field>\n\n\n                <mat-form-field appearance=\"outline\" class=\"width-45 marging-left-10\">\n                  <mat-label>Marital Status</mat-label>\n                  <mat-select placeholder=\"Marital Status\" formControlName=\"maritalStatus\">\n                    <mat-option value=\"Single\">Single</mat-option>\n                    <mat-option value=\"Married\">Married</mat-option>\n                    <mat-option value=\"Divorced\">Divorced</mat-option>\n                  </mat-select>\n                </mat-form-field>\n\n                <mat-form-field appearance=\"outline\" class=\"width-45 marging-left-10 \">\n                  <mat-label>Nationality</mat-label>\n                  <input matInput placeholder=\"Nationality\" formControlName=\"nationality\">\n                </mat-form-field>\n\n\n                <mat-form-field appearance=\"outline\" class=\"width-45 marging-left-10 \">\n                  <mat-label>Town and State Of Origin</mat-label>\n                  <input matInput placeholder=\"Town / State of Origin\" formControlName=\"townAndStateOfOrigin\">\n                </mat-form-field>\n\n                <div formArrayName=\"contactAddresses\">\n                  <button mat-raised-button color=\"primary\" title=\"Remove\" (click)=\"addContactAddress()\"\n                  class=\"width-20 marging-left-10 \" style=\"margin-bottom: 10px ;\">\n                  <mat-icon matSuffix>add</mat-icon>\n                </button>\n\n                  <div *ngFor=\"let contact of formDataPersonalInformation[2].controls; let i = index\">\n                    <div formGroupName=\"{{i}}\">\n\n                      <mat-form-field appearance=\"outline\" class=\"width-70 marging-right-10 \">\n                        <mat-label>Contact Address</mat-label>\n                        <input matInput placeholder=\"Contact Address\" formControlName=\"contactAddress\">\n                      </mat-form-field>\n                      \n                    <button mat-raised-button  title=\"Remove\" (click)=\"removeContactAddress(i)\"\n                      style=\"margin-bottom: 20px ; height: 40px; ; \" class=\"width-20 marging-left-10 \">\n                      <mat-icon matSuffix>delete</mat-icon>\n                    </button>\n\n                    </div>\n                  </div>\n                </div>\n\n\n\n\n                <div formArrayName=\"phoneNumbers\">\n                  <button mat-raised-button color=\"primary\" title=\"Remove\" (click)=\"addPhoneNumber()\" class=\"width-20 marging-left-10 \"\n                      style=\"margin-bottom: 10px ;\">\n                      <mat-icon matSuffix>add</mat-icon>\n                    </button>\n\n                  <div *ngFor=\"let phoneNumber of formDataPersonalInformation[0].controls; let i = index\">\n                    <div formGroupName=\"{{i}}\">\n                      <mat-form-field appearance=\"outline\" class=\"width-70 marging-right-10 \">\n                        <mat-label>Phone Number</mat-label>\n                        <input matInput placeholder=\"Enter Phone Number\" formControlName=\"phoneNumber\">\n                      </mat-form-field>\n                      <button mat-raised-button  title=\"Remove\" (click)=\"removePhoneNumber(i)\" style=\"margin-bottom: 20px ; height: 40px; ;color : red \"\n                          class=\"width-20 marging-left-10 \">\n                          <mat-icon matSuffix>delete</mat-icon>\n                        </button>\n                    </div>\n                  </div>\n                </div>\n\n\n                <div formArrayName=\"emailAddresses\">\n                  <button mat-raised-button color=\"primary\" title=\"Add\" (click)=\"addEmailAdress()\" class=\"width-20 marging-left-10 \"\n                      style=\"margin-bottom: 10px ;color : red\">\n                      <mat-icon matSuffix>add</mat-icon>\n                    </button>\n\n                  <div *ngFor=\"let email of formDataPersonalInformation[1].controls; let i = index\">\n\n                    <div formGroupName=\"{{i}}\">\n\n                      <mat-form-field appearance=\"outline\" class=\"width-70 marging-right-10 \">\n                        <mat-label>Email Address</mat-label>\n                        <input matInput placeholder=\"Email Address\" formControlName=\"emailAddress\">\n                      </mat-form-field>\n\n                      <button mat-raised-button  title=\"Remove\" (click)=\"removeEmailAdress(i)\" style=\"margin-bottom: 20px ; height: 40px;color : red ; \"\n                          class=\"width-20 marging-right-10 ; \">\n                          <mat-icon matSuffix>delete</mat-icon>\n                        </button>\n                    </div>\n                  </div>\n                </div>\n\n\n\n                <!-- <mat-form-field appearance=\"outline\" class=\"width-45 marging-left-10\"> -->\n                <mat-form-field appearance=\"outline\" class=\"width-45 marging-left-10\">\n                  <mat-label> Present Post / Salary </mat-label>\n                  <input matInput placeholder=\"Present Post / Salary\" formControlName=\"presentPostAndSalary\"\n                    value=\"\">\n                </mat-form-field>\n\n\n\n                <mat-form-field appearance=\"outline\" class=\"width-45 marging-left-10\">\n                  <mat-label>Post On Promotion</mat-label>\n                  <input matInput placeholder=\"Post On Promotion\" formControlName=\"postOnPromotion\">\n                </mat-form-field>\n\n              </form>\n\n              <div class=\"margin-top-20\" style=\"float: right;\">\n                <!-- <button  mat-raised-button matStepperPrevious mat-raised-button color=\"primary\">Back</button> -->\n                <button mat-raised-button matStepperNext mat-raised-button color=\"primary\"\n                  style=\"min-width: 100px;\">Next\n                  >></button>\n              </div>\n\n\n            </mat-step>\n\n\n            <mat-step [stepControl]=\"eaphni\">\n\n              <form [formGroup]=\"eaphni\">\n\n                <ng-template matStepLabel> EDUCATIONAL BACKGROUND </ng-template>\n\n                - <mat-accordion class=\"example-headers-align\">\n                  <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle>\n                    <mat-expansion-panel-header>\n                      <mat-panel-title>\n                        EDUCATIONAL INSTITUTIONS ATTENDED (WITH DATES)\n                      </mat-panel-title>\n                    </mat-expansion-panel-header>\n                    \n                    <div formArrayName=\"educationArray\">\n                      <div *ngFor=\"let education of formDataEaphni[0].controls; let i = index\">\n\n                        <button mat-raised-button title=\"Remove\" (click)=\"removeEducational(i)\"\n                          style=\"margin-bottom: 10px; color: red;\">\n                          <mat-icon matSuffix>delete</mat-icon>\n                        </button>\n\n                        <div formGroupName=\"{{i}}\">\n                          <mat-form-field appearance=\"outline\" class=\"width-30 marging-right-5\">\n                            <mat-label>Institution Attended</mat-label>\n                            <input matInput placeholder=\"Institution Attended\" formControlName=\"schoolAttended\">\n                          </mat-form-field>\n\n                          <!-- <mat-form-field appearance=\"outline\" class=\"width-30 marging-right-5 \">\n                            <mat-label>From Date</mat-label>\n                             <input matInput [matDatepicker]=\"picker3\" placeholder=\"From Year\" formControlName=\"fromDate\"> -->\n                            <!-- <input matInput placeholder=\"From Year\" formControlName=\"fromDate\"> -->\n                          <!-- </mat-form-field> -->\n\n\n                          <!-- <mat-form-field appearance=\"outline\" class=\"width-30\">\n                            <mat-label>To Date</mat-label>\n                            <input matInput placeholder=\"To Date\" formControlName=\"toDate\">\n                          </mat-form-field> -->\n\n                          <!-- <p-fileUpload auto=\"auto\"   name=\"myfile[]\" #educationalCertificates  multiple=\"multiple\" auto=\"auto\" (onUpload)=\"onBasicUpload($event)\"  (onError) = onBasicError($event)></p-fileUpload> -->\n                        </div>\n                      </div>\n                      <button mat-raised-button color=\"primary\" title=\"Add\" (click)=\"addEducational()\"\n                        style=\"margin-bottom: 10px ; min-width: 150px;\">\n                        <mat-icon matSuffix>add</mat-icon>\n                      </button>\n                    </div>\n\n                    <mat-action-row>\n                      <button mat-raised-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n                    </mat-action-row>\n                  </mat-expansion-panel>\n\n\n\n\n\n                  <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle>\n\n                    <mat-expansion-panel-header>\n                      <mat-panel-title>\n                        ACADEMIC QUALIFICATIONS\n                      </mat-panel-title>\n                    </mat-expansion-panel-header>\n\n                    <div formArrayName=\"academicQualifications\">\n\n                      <div *ngFor=\"let work of formDataEaphni[1].controls; let i = index\">\n                        <button mat-raised-button title=\"Remove\" (click)=\"removeAcademicQualification(i)\"\n                          style=\"margin-bottom: 10px ; color: red;\">\n                          <mat-icon matSuffix>delete</mat-icon>\n                        </button>\n\n                        <div formGroupName=\"{{i}}\">\n\n                          <mat-form-field appearance=\"outline\" class=\"width-30 marging-right-10\">\n                            <mat-label>Academic Qualification</mat-label>\n                            <input matInput placeholder=\"Title of Academic Qualification\" formControlName=\"title\">\n                          </mat-form-field>\n\n                          <mat-form-field appearance=\"outline\" class=\"width-30 marging-right-10 \">\n                            <mat-label>Date Received</mat-label>\n                            <input matInput placeholder=\"Date Academic Qualification was received....\"\n                              formControlName=\"date\">\n                          </mat-form-field>\n\n                        </div>\n                      </div>\n                      <button mat-raised-button color=\"primary\" title=\"Add\" (click)=\"addAcademicQualification()\"\n                        style=\"margin-bottom: 10px ; min-width: 150px;\">\n                        <mat-icon matSuffix>add</mat-icon>\n                      </button>\n                    </div>\n\n                    <mat-action-row>\n                      <button mat-raised-button color=\"warn\" (click)=\"prevStep()\"\n                        class=\"marging-right-10\">Previous</button>\n                      <button mat-raised-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n                    </mat-action-row>\n                  </mat-expansion-panel>\n\n                  <mat-expansion-panel [expanded]=\"step === 2\" (opened)=\"setStep(2)\" hideToggle>\n\n                    <mat-expansion-panel-header>\n                      <mat-panel-title>\n                        PROFESSIONAL QUALIFICATIONS\n                      </mat-panel-title>\n                    </mat-expansion-panel-header>\n\n                    <div formArrayName=\"professionalQualifications\">\n\n                      <div *ngFor=\"let work of formDataEaphni[2].controls; let i = index\">\n\n                        <button mat-raised-button title=\"Remove\" (click)=\"removeProfessionalQualification(i)\"\n                          style=\"margin-bottom: 10px ; color: red\">\n                          <mat-icon matSuffix>delete</mat-icon>\n                        </button>\n\n                        <div formGroupName=\"{{i}}\">\n\n                          <mat-form-field appearance=\"outline\" class=\"width-30 marging-right-10\">\n                            <mat-label>Professional Qualification </mat-label>\n                            <input matInput placeholder=\"Professionak Qualification on ? \"\n                              formControlName=\"receivedFrom\">\n                          </mat-form-field>\n\n                          <mat-form-field appearance=\"outline\" class=\"width-45 marging-right-10 \">\n                            <mat-label>Date Received</mat-label>\n                            <!-- <input matInput [matDatepicker]=\"picker6\" placeholder=\"Date Profesional Qualification was issued\" -->\n                            <input matInput placeholder=\"Date Profesional Qualification was issued\"\n                              formControlName=\"date\">\n                            <mat-datepicker-toggle matSuffix [for]=\"picker6\"></mat-datepicker-toggle>\n                            <mat-datepicker touchUi #picker6 startView=\"year\"></mat-datepicker>\n                          </mat-form-field>\n\n                        </div>\n                      </div>\n                      <button mat-raised-button color=\"primary\" title=\"Add\" (click)=\"addProfessionalQualification()\"\n                        style=\"margin-bottom: 10px ; min-width: 150px;\">\n                        <mat-icon matSuffix>add</mat-icon>\n                      </button>\n                    </div>\n\n                    <mat-action-row>\n                      <button mat-raised-button color=\"warn\" (click)=\"prevStep()\"\n                        class=\"marging-right-10\">Previous</button>\n                      <button mat-raised-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n                    </mat-action-row>\n                  </mat-expansion-panel>\n\n                  <mat-expansion-panel [expanded]=\"step === 4\" (opened)=\"setStep(4)\" hideToggle>\n                    <mat-expansion-panel-header>\n                      <mat-panel-title>\n                        PRIZES\n                      </mat-panel-title>\n                    </mat-expansion-panel-header>\n\n                    <div formArrayName=\"prizes\">\n\n                      <div *ngFor=\"let work of formDataEaphni[3].controls; let i = index\">\n                        <button mat-raised-button title=\"Remove\" (click)=\"removePrizes(i)\"\n                          style=\"margin-bottom: 10px; color: red \">\n                          <mat-icon matSuffix>delete</mat-icon>\n                        </button>\n                        <div formGroupName=\"{{i}}\">\n\n                          <mat-form-field appearance=\"outline\" class=\"width-45 marging-right-10\">\n                            <mat-label>PRIZE Received From</mat-label>\n                            <input matInput placeholder=\"Prize Receive from\" formControlName=\"receivedFrom\">\n                          </mat-form-field>\n\n                          <mat-form-field appearance=\"outline\" class=\"width-45 marging-right-10\">\n                            <mat-label> Title </mat-label>\n                            <input matInput placeholder=\"Title of Prize\" formControlName=\"title\">\n                          </mat-form-field>\n\n                          <mat-form-field appearance=\"outline\" class=\"width-45 marging-right-10\">\n                            <mat-label> Date </mat-label>\n                            <input matInput placeholder=\"Date\" formControlName=\"date\">\n                          </mat-form-field>\n\n                          <!-- <p-fileUpload customUpload=\"true\" name=\"prizes[]\" showUploadButton = \"false\" showCancelButton = \"false\"\n                                                                             multiple=\"multiple\" #prizes \n                                                                            (uploadHandler)  = \"onSelectPrizesFiles($event)\"\n                                                                            (onError) = onBasicError($event)> \n                                                                          </p-fileUpload> -->\n\n                          <!-- <p-fileUpload auto=\"auto\"   name=\"myfile[]\" #prizes  multiple=\"multiple\" auto=\"auto\" (onUpload)=\"onBasicUpload($event)\"  (onError) = onBasicError($event)></p-fileUpload> -->\n\n                        </div>\n                      </div>\n                      <button mat-raised-button color=\"primary\" title=\"Remove\" (click)=\"addPrizes()\"\n                        style=\"margin-bottom: 10px ; min-width: 150px;\">\n                        <mat-icon matSuffix>add</mat-icon>\n                      </button>\n                    </div>\n\n                    <mat-action-row>\n                      <button mat-raised-button color=\"warn\" (click)=\"prevStep()\"\n                        class=\"marging-right-10\">Previous</button>\n                      <button mat-raised-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n                    </mat-action-row>\n\n                  </mat-expansion-panel>\n\n                  <mat-expansion-panel [expanded]=\"step === 5\" (opened)=\"setStep(5)\" hideToggle>\n\n                    <mat-expansion-panel-header>\n                      <mat-panel-title>\n                        SCHOLARSHIPS\n                      </mat-panel-title>\n                    </mat-expansion-panel-header>\n\n                    <div formArrayName=\"scholarships\">\n\n                      <div *ngFor=\"let work of formDataEaphni[4].controls; let i = index\">\n                        <button mat-raised-button title=\"Remove\" (click)=\"removeScholarship(i)\"\n                          style=\"margin-bottom: 10px ; color: red ;\">\n                          <mat-icon matSuffix>delete</mat-icon>\n                        </button>\n                        <div formGroupName=\"{{i}}\">\n\n                          <mat-form-field appearance=\"outline\" class=\"width-30 marging-right-5\">\n                            <mat-label>Received From</mat-label>\n                            <input matInput placeholder=\"Scholarship Recieved from ?\"\n                              formControlName=\"receivedFrom\">\n                          </mat-form-field>\n\n                          <mat-form-field appearance=\"outline\" class=\"width-30 marging-right-5\">\n                            <mat-label>Title</mat-label>\n                            <input matInput placeholder=\"Scholarship Title\" formControlName=\"title\">\n                          </mat-form-field>\n\n                          <mat-form-field appearance=\"outline\" class=\"width-30 marging-right-5 \">\n                            <mat-label>Date Scholarship was Recieved</mat-label>\n                            <!-- <input matInput [matDatepicker]=\"picker8\" placeholder=\"From Date\" formControlName=\"date\"> -->\n                            <input matInput placeholder=\"Date Received\" formControlName=\"date\">\n                            <!-- <mat-datepicker-toggle matSuffix [for]=\"picker8\"></mat-datepicker-toggle>\n                              <mat-datepicker touchUi #picker8 startView=\"year\"></mat-datepicker> -->\n\n                          </mat-form-field>\n                        </div>\n                      </div>\n                      <button mat-raised-button color=\"primary\" (click)=\"addScholarship()\"\n                        style=\"margin-bottom: 10px; ; min-width: 150px;\" title=\"Add New\">\n                        <mat-icon>add</mat-icon>\n                      </button>\n                    </div>\n\n                    <mat-action-row>\n                      <button mat-raised-button color=\"warn\" (click)=\"prevStep()\"\n                        class=\"marging-left-10\">Previous</button>\n                      <button mat-raised-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n                    </mat-action-row>\n\n                  </mat-expansion-panel>\n\n\n                  <mat-expansion-panel [expanded]=\"step === 6\" (opened)=\"setStep(6)\" hideToggle>\n\n                    <mat-expansion-panel-header>\n                      <mat-panel-title>\n                        HONOURS\n                      </mat-panel-title>\n                    </mat-expansion-panel-header>\n\n                    <div formArrayName=\"honours\">\n\n                      <div *ngFor=\"let work of formDataEaphni[5].controls; let i = index\">\n                        <button mat-raised-button title=\"Remove\" (click)=\"removeHonours(i)\"\n                          style=\"margin-bottom: 10px ; color: red\">\n                          <mat-icon matSuffix>delete</mat-icon>\n                        </button>\n                        <div formGroupName=\"{{i}}\">\n\n                          <mat-form-field appearance=\"outline\" class=\"width-45 marging-right-10\">\n                            <mat-label>Received From</mat-label>\n                            <input matInput placeholder=\"School Attended\" formControlName=\"receivedFrom\">\n                          </mat-form-field>\n\n                          <mat-form-field appearance=\"outline\" class=\"width-45 marging-right-10\">\n                            <mat-label>Title</mat-label>\n                            <input matInput placeholder=\"School Attended\" formControlName=\"title\">\n                          </mat-form-field>\n\n                          <mat-form-field appearance=\"outline\" class=\"width-45 marging-right-10 \">\n                            <mat-label>Date Received</mat-label>\n                            <input matInput placeholder=\"From Date\" formControlName=\"date\">\n                          </mat-form-field>\n\n                          <!-- <p-fileUpload auto=\"auto\"   name=\"myfile[]\" #honours  multiple=\"multiple\" auto=\"auto\" (onUpload)=\"onBasicUpload($event)\"  (onError) = onBasicError($event)></p-fileUpload> -->\n                        </div>\n                      </div>\n                      <button mat-raised-button color=\"primary\" (click)=\"addHonours()\"\n                        style=\"margin-bottom: 10px; ; min-width: 150px;\" title=\"Add New\">\n                        <mat-icon>add</mat-icon>\n                      </button>\n                    </div>\n\n                    <mat-action-row>\n                      <button mat-raised-button color=\"warn\" (click)=\"prevStep()\"\n                        class=\"marging-left-10\">Previous</button>\n                      <button mat-raised-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n                    </mat-action-row>\n\n                  </mat-expansion-panel>\n\n                  <mat-expansion-panel [expanded]=\"step === 7\" (opened)=\"setStep(7)\" hideToggle>\n\n                    <mat-expansion-panel-header>\n                      <mat-panel-title>\n                        NATIONAL RECOMMENDATION\n                      </mat-panel-title>\n\n                    </mat-expansion-panel-header>\n\n                    <div formArrayName=\"nationalRecognitions\">\n\n                      <button mat-raised-button color=\"primary\" title=\"Add\" (click)=\"addNationalRecognitions()\"\n                        style=\"margin-bottom: 10px ; min-width: 150px;\">\n                        <mat-icon matSuffix>add</mat-icon>\n                      </button>\n\n                      <div *ngFor=\"let work of formDataEaphni[6].controls; let i = index\">\n                        <button mat-raised-button title=\"Remove\" (click)=\"removeNationalRecognitions(i)\"\n                          style=\"margin-bottom: 10px ; color: red\">\n                          <mat-icon matSuffix>delete</mat-icon>\n                        </button>\n                        <div formGroupName=\"{{i}}\">\n\n                          <mat-form-field appearance=\"outline\" class=\"width-30 marging-right-5\">\n                            <mat-label>Received From</mat-label>\n                            <input matInput placeholder=\"Recommendation Received From\"\n                              formControlName=\"receivedFrom\">\n                          </mat-form-field>\n\n                          <mat-form-field appearance=\"outline\" class=\"width-30 marging-right-5\">\n                            <mat-label>Title</mat-label>\n                            <input matInput placeholder=\"School Attended\" formControlName=\"title\">\n                          </mat-form-field>\n\n                          <mat-form-field appearance=\"outline\" class=\"width-30 marging-right-5 \">\n                            <mat-label>Date Received</mat-label>\n                            <!-- <input matInput [matDatepicker]=\"picker9\" placeholder=\"From Date\" formControlName=\"date\"> -->\n                            <input matInput placeholder=\"Date Received\" formControlName=\"date\">\n                            <!-- <mat-datepicker-toggle matSuffix [for]=\"picker9\"></mat-datepicker-toggle>\n                              <mat-datepicker touchUi #picker9 startView=\"year\"></mat-datepicker> -->\n                          </mat-form-field>\n\n                          <!-- <p-fileUpload auto=\"auto\" name=\"myfile[]\" url=\"http://localhost:8081/upload/national_recognitions\" multiple=\"multiple\" (onUpload)=\"onBasicUpload($event)\"  (onError) = onBasicError($event)></p-fileUpload> -->\n                          <!-- <p-fileUpload auto=\"auto\"   name=\"myfile[]\" #nationalRecognition  multiple=\"multiple\" auto=\"auto\" (onUpload)=\"onBasicUpload($event)\"  (onError) = onBasicError($event)></p-fileUpload> -->\n\n                        </div>\n                      </div>\n                      <button mat-raised-button color=\"primary\" title=\"Add\" (click)=\"addNationalRecognitions()\"\n                        style=\"margin-bottom: 10px ; min-width: 150px;\">\n                        <mat-icon matSuffix>add</mat-icon>\n                      </button>\n                    </div>\n\n                    <mat-action-row>\n                      <button mat-raised-button color=\"warn\" (click)=\"prevStep()\"\n                        class=\"marging-right-10\">Previous</button>\n                      <button mat-raised-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n                    </mat-action-row>\n\n                  </mat-expansion-panel>\n\n                  <mat-expansion-panel [expanded]=\"step === 8\" (opened)=\"setStep(8)\" hideToggle>\n\n                    <mat-expansion-panel-header>\n                      <mat-panel-title>\n                        INTERNATIONAL RECOMMENDATION\n                      </mat-panel-title>\n                      <!-- <mat-panel-description class=\"float-right\">\n                                                                          Your international Recognitions\n                                                                          <mat-icon>date_range</mat-icon>\n                                                                        </mat-panel-description> -->\n                    </mat-expansion-panel-header>\n\n                    <div formArrayName=\"internationalRecognitions\">\n\n                      <div *ngFor=\"let work of formDataEaphni[7].controls; let i = index\">\n                        <button mat-raised-button title=\"Remove\" (click)=\"removeInternationalRecognitions(i)\"\n                          style=\"margin-bottom: 10px ; color: red\">\n                          <mat-icon matSuffix>delete</mat-icon>\n                        </button>\n                        <div formGroupName=\"{{i}}\">\n\n                          <mat-form-field appearance=\"outline\" class=\"width-30 marging-right-5\">\n                            <mat-label>Received From</mat-label>\n                            <input matInput placeholder=\"International Rcommendation received from ?\"\n                              formControlName=\"receivedFrom\">\n                          </mat-form-field>\n\n                          <mat-form-field appearance=\"outline\" class=\"width-30 marging-right-5\">\n                            <mat-label>Title</mat-label>\n                            <input matInput placeholder=\"Title of Recommendation\" formControlName=\"title\">\n                          </mat-form-field>\n\n                          <mat-form-field appearance=\"outline\" class=\"width-30 marging-right- \">\n                            <mat-label>Date Received</mat-label>\n                            <!-- <input matInput [matDatepicker]=\"picker10\" placeholder=\"From Date\" formControlName=\"date\"> -->\n                            <input matInput placeholder=\"Date Received\" formControlName=\"date\">\n                            <!-- <mat-datepicker-toggle matSuffix [for]=\"picker10\"></mat-datepicker-toggle>\n                              <mat-datepicker touchUi #picker10 startView=\"year\"></mat-datepicker> -->\n                          </mat-form-field>\n\n                          <!-- <p-fileUpload auto=\"auto\"   name=\"myfile[]\" #internationalRecognitions  multiple=\"multiple\" auto=\"auto\" (onUpload)=\"onBasicUpload($event)\"  (onError) = onBasicError($event)></p-fileUpload> -->\n                        </div>\n                      </div>\n                      <button mat-raised-button color=\"primary\" title=\"Add\" (click)=\"addInternationalRecognitions()\"\n                        style=\"margin-bottom: 10px; min-width: 150px;\">\n                        <mat-icon matSuffix>add</mat-icon>\n                      </button>\n                    </div>\n\n                    <mat-action-row>\n                      <button mat-raised-button color=\"warn\" (click)=\"prevStep()\"\n                        class=\"marging-right-10\">Previous</button>\n                      <button mat-raised-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n                    </mat-action-row>\n                  </mat-expansion-panel>\n\n                  <mat-action-row>\n                    <button mat-raised-button color=\"warn\" (click)=\"prevStep()\"\n                      class=\"marging-right-10\">Previous</button>\n                    <button mat-raised-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n                  </mat-action-row>\n\n                </mat-accordion>\n\n              </form>\n\n              <div style=\"margin-top: 20px;\">\n                <button mat-raised-button color=\"warn\" matStepperPrevious class=\"marging-right-10\">\n                  << Previous</button> <button mat-raised-button color=\"primary\" matStepperNext>Next >>\n                </button>\n              </div>\n\n            </mat-step>\n\n            <mat-step [stepControl]=\"masterFormGroupings\">\n              <ng-template matStepLabel>WORK EXPERIENCE </ng-template>\n\n              <form [formGroup]=\"masterFormGroupings\">\n\n                <mat-accordion class=\"example-headers-align\">\n                  <mat-expansion-panel [expanded]=\"step === 9\" (opened)=\"setStep(9)\" hideToggle>\n                    <mat-expansion-panel-header>\n                      <mat-panel-title>\n                        UNIVERSITY TEACHING AND RESEARCH EXPERIENCE\n                      </mat-panel-title>\n                    </mat-expansion-panel-header>\n\n                    <div formArrayName=\"workExperience\">\n                      <div *ngFor=\"let w of formDataMasterFormGroupings[0].controls; let i = index\">\n                        <button mat-raised-button title=\"Remove\" (click)=\"removeWorkExp(i)\"\n                          style=\"margin-bottom: 10px ; color: red\">\n                          <mat-icon matSuffix>delete</mat-icon>\n                        </button>\n\n                        <div formGroupName=\"{{i}}\">\n\n                          <mat-form-field appearance=\"outline\" class=\"width-30 marging-right-10 \">\n                            <mat-label>Post Held</mat-label>\n                            <input matInput placeholder=\"The post held...\" formControlName=\"postHeld\">\n                          </mat-form-field>\n\n\n                          <mat-form-field appearance=\"outline\" class=\"width-30 marging-right-10 \">\n                            <mat-label>Organisation</mat-label>\n                            <input matInput placeholder=\"Enter the Organisation here\"\n                              formControlName=\"organization\">\n                          </mat-form-field>\n\n\n                          <mat-form-field appearance=\"outline\" class=\"width-30 marging-right-10 \">\n                            <mat-label>Duties</mat-label>\n                            <input matInput placeholder=\"\" formControlName=\"duties\">\n                          </mat-form-field>\n\n                          <mat-form-field appearance=\"outline\" class=\"width-45 marging-right-10 \">\n                            <mat-label>From</mat-label>\n                            <!-- <input matInput [matDatepicker]=\"picker11\" placeholder=\"Choose a date\" formControlName=\"fromDate\"> -->\n                            <input matInput placeholder=\"Choose a date\" formControlName=\"fromDate\">\n                            <!-- <mat-datepicker-toggle matSuffix [for]=\"picker11\"></mat-datepicker-toggle>\n                              <mat-datepicker touchUi #picker11 startView=\"year\"></mat-datepicker> -->\n                          </mat-form-field>\n\n\n                          <mat-form-field appearance=\"outline\" class=\"width-45 marging-left-10 \">\n                            <mat-label>To</mat-label>\n                            <!-- <input matInput [matDatepicker]=\"picker12\" placeholder=\"Choose a date\" formControlName=\"toDate\"> -->\n                            <input matInput placeholder=\"Choose a date\" formControlName=\"toDate\">\n                            <!-- <mat-datepicker-toggle matSuffix [for]=\"picker12\"></mat-datepicker-toggle>\n                              <mat-datepicker touchUi #picker12 startView=\"year\"></mat-datepicker> -->\n                          </mat-form-field>\n\n                        </div>\n                      </div>\n                      <button mat-raised-button color=\"primary\" (click)=\"addWorkExp()\" style=\"margin-bottom: 10px;\"\n                        title=\"Add New\">\n                        <mat-icon>add</mat-icon>\n                      </button>\n                    </div>\n                    <mat-action-row>\n                      <button mat-raised-button color=\"warn\" (click)=\"prevStep()\"\n                        class=\"marging-right-10\">Previous</button>\n                      <button mat-raised-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n                    </mat-action-row>\n                  </mat-expansion-panel>\n\n\n                  <mat-expansion-panel [expanded]=\"step === 10\" (opened)=\"setStep(10)\" hideToggle>\n                    <mat-expansion-panel-header>\n                      <mat-panel-title>\n                        COURSES TAUGHT IN THE LAST YEARS\n                      </mat-panel-title>\n                    </mat-expansion-panel-header>\n\n\n                    <!-- <h2>\n                          Course Taught at\n                          <mat-form-field appearance=\"outline\" class=\"width-45 marging-right-10 \">\n                            <mat-label>School Name</mat-label>\n                            <input matInput placeholder=\"Email Address\" formControlName=\"organization\">\n                          </mat-form-field> in the last\n          \n                          <mat-form-field appearance=\"outline\" class=\"width-45 marging-right-10 \">\n                            <mat-label>Number Of Years</mat-label>\n                            <input matInput placeholder=\"Email Address\" formControlName=\"organization\">\n                          </mat-form-field>\n                        </h2> -->\n\n                    <div formArrayName=\"schoolworkexp\">\n                      <div *ngFor=\"let se of formDataMasterFormGroupings[2].controls; let i = index\">\n\n                        <div formGroupName=\"{{i}}\">\n\n                          <mat-form-field appearance=\"outline\" class=\"width-20 marging-left-10 \">\n                            <mat-label>Course Code </mat-label>\n                            <input matInput placeholder=\"The course code\" formControlName=\"courseCode\">\n                          </mat-form-field>\n\n                          <mat-form-field appearance=\"outline\" class=\"width-20 marging-left-10 \">\n                            <mat-label>Credit Hours</mat-label>\n                            <input matInput placeholder=\"The credit hours\" formControlName=\"creditHours\">\n                          </mat-form-field>\n\n                          <mat-form-field appearance=\"outline\" class=\"width-20 marging-left-10 \">\n                            <mat-label>Number of Lecturers</mat-label>\n                            <input matInput placeholder=\"Number of Lecturers for the course\"\n                              formControlName=\"numOfLecturers\">\n                          </mat-form-field>\n\n                          <mat-form-field appearance=\"outline\" class=\"width-20 marging-left-10 \">\n                            <mat-label>Level</mat-label>\n                            <input matInput placeholder=\"Level of the students\" formControlName=\"level\">\n                          </mat-form-field>\n\n                          <mat-form-field appearance=\"outline\" class=\"width-20 marging-left-10 \">\n                            <mat-label> Number Of Registered Students </mat-label>\n                            <input matInput placeholder=\"Number of Students that took the course\"\n                              formControlName=\"numberOfRegStd\">\n                          </mat-form-field>\n\n                          <mat-form-field appearance=\"outline\" class=\"width-20 marging-left-10 \">\n                            <mat-label>Contribution</mat-label>\n                            <input matInput placeholder=\"Your contribution\" formControlName=\"contribution\">\n                          </mat-form-field>\n\n                          <mat-form-field appearance=\"outline\" class=\"width-20 marging-left-10 \">\n                            <mat-label>Session</mat-label>\n                            <input matInput placeholder=\"eg 2013/2014...\" formControlName=\"session\">\n                          </mat-form-field>\n\n                          <mat-form-field appearance=\"outline\" class=\"width-20 marging-left-10 \">\n                            <mat-label>School Name</mat-label>\n                            <input matInput placeholder=\"School Name \" formControlName=\"school\">\n                          </mat-form-field>\n\n                        </div>\n\n\n                        <button mat-raised-button title=\"Remove\" (click)=\"removeCausesTaught(i)\"\n                          style=\"margin-bottom: 10px ; color :red ; \">\n                          <mat-icon matSuffix>delete</mat-icon>\n                        </button>\n\n                      </div>\n\n                      <button mat-raised-button color=\"primary\" (click)=\"addCausesTaught()\"\n                        style=\"margin-bottom: 10px;\" title=\"Add New\">\n                        <mat-icon>add</mat-icon>\n                      </button>\n\n                    </div>\n\n                    <h4>COURSE DESCRIPTION</h4>\n                    <button mat-raised-button color=\"primary\" (click)=\"addCourseDescription()\"\n                      style=\"margin-bottom: 10px;\" title=\"Add New\">\n                      <mat-icon>add</mat-icon>\n                    </button>\n                    <div formArrayName=\"courseDescriptions\">\n                      <div *ngFor=\"let cd of formDataMasterFormGroupings[3].controls; let i = index\">\n\n\n                        <div formGroupName=\"{{i}}\">\n\n                          <mat-form-field appearance=\"outline\" class=\"width-45 marging-right-10\">\n                            <mat-label> Course Code </mat-label>\n                            <input matInput placeholder=\" Description \" formControlName=\"courseCode\">\n                          </mat-form-field>\n\n                          <mat-form-field appearance=\"outline\" class=\"width-45 marging-left-10 \">\n                            <mat-label>Course Title</mat-label>\n                            <input matInput placeholder=\"Course Title \" formControlName=\"courseTitle\">\n                          </mat-form-field>\n\n                        </div>\n\n                        <button mat-raised-button title=\"Remove\" (click)=\"removeCourseDescription(i)\"\n                          style=\"margin-bottom: 10px ; color: red;\">\n                          <mat-icon matSuffix>delete</mat-icon>\n                        </button>\n\n                      </div>\n                    </div>\n\n                    <mat-action-row>\n                      <button mat-raised-button color=\"warn\" (click)=\"prevStep()\"\n                        class=\"marging-right-10\">Previous</button>\n                      <button mat-raised-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n                    </mat-action-row>\n                  </mat-expansion-panel>\n\n                  <mat-accordion class=\"example-headers-align\">\n                    <mat-expansion-panel [expanded]=\"step === 11\" (opened)=\"setStep(11)\" hideToggle>\n                      <mat-expansion-panel-header>\n                        <mat-panel-title>\n                          OTHER WORK EXPERIENCE (OUTSIDE THE UNIVERSITY)\n                        </mat-panel-title>\n                      </mat-expansion-panel-header>\n\n                      <div formArrayName=\"otherWorkExperience\">\n                        <div *ngFor=\"let w of formDataMasterFormGroupings[1].controls; let i = index\">\n                          <button mat-raised-button title=\"Remove\" (click)=\"removeOtherWorkExp(i)\"\n                            style=\"margin-bottom: 10px ; color: red ; \">\n                            <mat-icon matSuffix>delete</mat-icon>\n                          </button>\n\n                          <div formGroupName=\"{{i}}\">\n\n                            <mat-form-field appearance=\"outline\" class=\"width-30 marging-right-10 \">\n                              <mat-label>Post Held</mat-label>\n                              <input matInput placeholder=\"Post Held\" formControlName=\"postHeld\">\n                            </mat-form-field>\n\n\n                            <mat-form-field appearance=\"outline\" class=\"width-30 marging-right-10 \">\n                              <mat-label>Organisation</mat-label>\n                              <input matInput placeholder=\"Enter the Organisation here\"\n                                formControlName=\"organization\">\n                            </mat-form-field>\n\n\n                            <mat-form-field appearance=\"outline\" class=\"width-30 marging-right-10 \">\n                              <mat-label>Duties</mat-label>\n                              <input matInput placeholder=\"\" formControlName=\"duties\">\n                            </mat-form-field>\n\n                            <mat-form-field appearance=\"outline\" class=\"width-45 marging-right-10 \">\n                              <mat-label>From</mat-label>\n                              <!-- <input matInput [matDatepicker]=\"picker11\" placeholder=\"Choose a date\"\n                                  formControlName=\"fromDate\">                          -->\n\n                              <input matInput placeholder=\"Choose a date\" formControlName=\"fromDate\">\n                              <!-- <mat-datepicker-toggle matSuffix [for]=\"picker11\"></mat-datepicker-toggle>\n                                <mat-datepicker touchUi #picker11 startView=\"year\"></mat-datepicker> -->\n                            </mat-form-field>\n\n\n                            <mat-form-field appearance=\"outline\" class=\"width-45 marging-left-10 \">\n                              <mat-label>To</mat-label>\n                              <!-- <input matInput [matDatepicker]=\"picker12\" placeholder=\"Choose a date\" formControlName=\"toDate\"> -->\n                              <input matInput placeholder=\"Choose a date\" formControlName=\"toDate\">\n                              <!-- <mat-datepicker-toggle matSuffix [for]=\"picker12\"></mat-datepicker-toggle>\n                                <mat-datepicker touchUi #picker12 startView=\"year\"></mat-datepicker> -->\n                            </mat-form-field>\n\n                          </div>\n                          <button mat-raised-button color=\"primary\" (click)=\"addOtherWorkExp()\"\n                            style=\"margin-bottom: 10px;\" title=\"Add New\">\n                            <mat-icon>add</mat-icon>\n                          </button>\n                        </div>\n                      </div>\n                      <mat-action-row>\n                        <button mat-raised-button color=\"warn\" (click)=\"prevStep()\"\n                          class=\"marging-right-10\">Previous</button>\n                        <button mat-raised-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n                      </mat-action-row>\n                    </mat-expansion-panel>\n                  </mat-accordion>\n\n                </mat-accordion>\n              </form>\n\n              <div class=\"margin-top-20\" style=\"float: right;\">\n                <button mat-raised-button color=\"warn\" matStepperPrevious class=\"marging-right-10\">\n                  << Previous </button> <button mat-raised-button color=\"primary\" matStepperNext> Next >>\n                </button>\n              </div>\n\n            </mat-step>\n\n\n            <mat-step [stepControl]=\"masterFormGroupings\">\n              <ng-template matStepLabel> SPECIAL ASSIGNMENTS / COMMUMICATION SERVICE </ng-template>\n\n\n              <h4 style=\" margin-top: 5% ; font-weight: bold\"> A. ADMINISTRATIVE/TECHNICAL EXPERINCES </h4>\n              <form [formGroup]=\"masterFormGroupings\">\n\n\n                <div formArrayName=\"specialAssignmentATE\">\n                  <div *ngFor=\"let sa of formDataMasterFormGroupings[13].controls; let i = index\">\n                    <button mat-raised-button title=\"Remove\" (click)=\"removeSpecialAssignmentATE(i)\"\n                      style=\"margin-bottom: 10px ; color: red\">\n                      <mat-icon matSuffix>delete</mat-icon>\n                    </button>\n\n                    <div formGroupName=\"{{i}}\">\n                      <mat-form-field appearance=\"outline\" class=\"width-45 marging-right-10\">\n                        <mat-label> Post Held </mat-label>\n                        <input matInput placeholder=\"Email Address\" formControlName=\"postHeld\">\n                      </mat-form-field>\n\n                      <mat-form-field appearance=\"outline\" class=\"width-45 marging-right-10\">\n                        <mat-label> Organisation </mat-label>\n                        <input matInput placeholder=\"Email Address\" formControlName=\"organization\">\n                      </mat-form-field>\n\n                      <mat-form-field appearance=\"outline\" class=\"width-45 marging-right-10\">\n                        <mat-label> From Date </mat-label>\n                        <!-- <input matInput [matDatepicker]=\"picker16\" placeholder=\"Choose a date\" formControlName=\"fromDate\"> -->\n                        <input matInput placeholder=\"Choose a date\" formControlName=\"fromDate\">\n                        <!-- <mat-datepicker-toggle matSuffix [for]=\"picker16\"></mat-datepicker-toggle>\n                          <mat-datepicker touchUi #picker16 startView=\"year\"></mat-datepicker> -->\n                      </mat-form-field>\n\n                      <mat-form-field appearance=\"outline\" class=\"width-45 marging-right-10 \">\n                        <mat-label> To Date </mat-label>\n                        <!-- <input matInput [matDatepicker]=\"picker22\" placeholder=\"Choose a date\" formControlName=\"toDate\"> -->\n                        <input matInput placeholder=\"Choose a date\" formControlName=\"toDate\">\n                        <!-- <mat-datepicker-toggle matSuffix [for]=\"picker22\"></mat-datepicker-toggle>\n                          <mat-datepicker touchUi #picker16 startView=\"year\"></mat-datepicker> -->\n                      </mat-form-field>\n                    </div>\n\n                  </div>\n                  <button mat-raised-button color=\"primary\" (click)=\"addSpecialAssignmentATE()\"\n                    style=\"margin-bottom: 10px;\" title=\"Add New\">\n                    <mat-icon>add</mat-icon>\n                  </button>\n                </div>\n\n              </form>\n\n              <form [formGroup]=\"masterFormGroupings\">\n\n                <h4 style=\" margin-top: 5% ; font-weight: bold\"> B. MEMBERSHIP OF COMMITTEE </h4>\n                <div formArrayName=\"specialAssignmentMC\">\n                  <div *ngFor=\"let sa of formDataMasterFormGroupings[28].controls; let i = index\">\n\n                    <button mat-raised-button title=\"Remove\" (click)=\"removeSpecialAssignmentMC(i)\"\n                      style=\"margin-bottom: 10px ; color: red\">\n                      <mat-icon matSuffix>delete</mat-icon>\n                    </button>\n\n                    <div formGroupName=\"{{i}}\">\n                      <mat-form-field appearance=\"outline\" class=\"width-45 marging-right-10\">\n                        <mat-label> Post Held </mat-label>\n                        <input matInput placeholder=\"Email Address\" formControlName=\"postHeld\">\n                      </mat-form-field>\n\n                      <mat-form-field appearance=\"outline\" class=\"width-45 marging-right-10\">\n                        <mat-label> Organisation </mat-label>\n                        <input matInput placeholder=\"Email Address\" formControlName=\"organization\">\n                      </mat-form-field>\n\n                      <mat-form-field appearance=\"outline\" class=\"width-45 marging-right-10\">\n                        <mat-label> From Date </mat-label>\n                        <input matInput placeholder=\"Choose a date\" formControlName=\"fromDate\">\n                        <!-- <input matInput [matDatepicker]=\"picker16\" placeholder=\"Choose a date\" formControlName=\"fromDate\"> -->\n                        <!-- <mat-datepicker-toggle matSuffix [for]=\"picker16\"></mat-datepicker-toggle>\n                          <mat-datepicker touchUi #picker16 startView=\"year\"></mat-datepicker> -->\n                      </mat-form-field>\n\n                      <mat-form-field appearance=\"outline\" class=\"width-45 marging-right-10 \">\n                        <mat-label> To Date </mat-label>\n                        <!-- <input matInput [matDatepicker]=\"picker22\" placeholder=\"Choose a date\" formControlName=\"toDate\"> -->\n                        <input matInput placeholder=\"Choose a date\" formControlName=\"toDate\">\n                        <!-- <mat-datepicker-toggle matSuffix [for]=\"picker22\"></mat-datepicker-toggle>\n                          <mat-datepicker touchUi #picker16 startView=\"year\"></mat-datepicker> -->\n                      </mat-form-field>\n                    </div>\n\n                  </div>\n\n                  <button mat-raised-button color=\"primary\" (click)=\"addSpecialAssignmentMC()\"\n                    style=\"margin-bottom: 10px;\" title=\"Add New\">\n                    <mat-icon>add</mat-icon>\n                  </button>\n\n                </div>\n              </form>\n\n\n              <form [formGroup]=\"masterFormGroupings\">\n\n\n                <h4 style=\" margin-top: 5% ; font-weight: bold\"> C. COMMUNITY SERVICE </h4>\n                <div formArrayName=\"specialAssignmentCS\">\n                  <div *ngFor=\"let sa of formDataMasterFormGroupings[29].controls; let i = index\">\n                    <button mat-raised-button title=\"Remove\" (click)=\"removeSpecialAssignmentCS(i)\"\n                      style=\"margin-bottom: 10px ; color: red ;\">\n                      <mat-icon matSuffix>delete</mat-icon>\n                    </button>\n\n                    <div formGroupName=\"{{i}}\">\n                      <mat-form-field appearance=\"outline\" class=\"width-45 marging-right-10\">\n                        <mat-label> Post Held </mat-label>\n                        <input matInput placeholder=\"Email Address\" formControlName=\"postHeld\">\n                      </mat-form-field>\n\n                      <mat-form-field appearance=\"outline\" class=\"width-45 marging-right-10\">\n                        <mat-label> Community Service Provided </mat-label>\n                        <input matInput placeholder=\"Describe the community service that you provided\"\n                          formControlName=\"communityServiceDescription\">\n                      </mat-form-field>\n\n                      <mat-form-field appearance=\"outline\" class=\"width-45 marging-right-10\">\n                        <mat-label> From Date </mat-label>\n                        <!-- <input matInput [matDatepicker]=\"picker16\" placeholder=\"Choose a date\" formControlName=\"fromDate\"> -->\n                        <input matInput placeholder=\"Choose a date\" formControlName=\"fromDate\">\n                        <!-- <mat-datepicker-toggle matSuffix [for]=\"picker16\"></mat-datepicker-toggle>\n                          <mat-datepicker touchUi #picker16 startView=\"year\"></mat-datepicker> -->\n                      </mat-form-field>\n\n                      <mat-form-field appearance=\"outline\" class=\"width-45 marging-right-10 \">\n                        <mat-label> To Date </mat-label>\n                        <!-- <input matInput [matDatepicker]=\"picker22\" placeholder=\"Choose a date\" formControlName=\"toDate\"> -->\n                        <input matInput placeholder=\"Choose a date\" formControlName=\"toDate\">\n                        <!-- <mat-datepicker-toggle matSuffix [for]=\"picker22\"></mat-datepicker-toggle>\n                          <mat-datepicker touchUi #picker16 startView=\"year\"></mat-datepicker> -->\n                      </mat-form-field>\n                    </div>\n                  </div>\n                  <button mat-raised-button color=\"primary\" (click)=\"addSpecialAssignmentCS()\"\n                    style=\"margin-bottom: 10px;\" title=\"Add New\">\n                    <mat-icon>add</mat-icon>\n                  </button>\n                </div>\n              </form>\n\n\n              <div class=\"margin-top-20\" style=\"float: right;\">\n                <button mat-raised-button color=\"warn\" matStepperPrevious class=\"marging-right-10\">\n                  << Previous </button> <button mat-raised-button color=\"primary\" matStepperNext> Next >>\n                </button>\n              </div>\n\n            </mat-step>\n\n\n\n\n\n            <mat-step [stepControl]=\"masterFormGroupings\">\n              <ng-template matStepLabel> TRAINING PROGRAMME ATTENDED (with dates) </ng-template>\n\n              <form [formGroup]=\"masterFormGroupings\">\n\n\n\n                <div formArrayName=\"trainingProgramme\">\n                  <div *ngFor=\"let tp of formDataMasterFormGroupings[14].controls; let i = index\">\n                    <button mat-raised-button title=\"Remove\" (click)=\"removeTrainingProgramme(i)\"\n                      style=\"margin-bottom: 10px ; color: red ; \">\n                      <mat-icon matSuffix>delete</mat-icon>\n                    </button>\n\n                    <div formGroupName=\"{{i}}\">\n\n                      <mat-form-field appearance=\"outline\" class=\"width-45 marging-right-10\">\n                        <mat-label> Training Description </mat-label>\n                        <input matInput placeholder=\" Description \" formControlName=\"description\">\n                      </mat-form-field>\n\n                      <mat-form-field appearance=\"outline\" class=\"width-95 marging-left-10 \">\n                        <mat-label>Training Received</mat-label>\n                        <input matInput placeholder=\"Training Received ... eg WorkShop on CISCO Server\"\n                          formControlName=\"training\" class=\"custom-textarea\">\n                      </mat-form-field>\n                    </div>\n                  </div>\n                  <button mat-raised-button color=\"primary\" (click)=\"addTrainingProgramme()\"\n                    style=\"margin-bottom: 10px;\" title=\"Add New\">\n                    <mat-icon>add</mat-icon>\n                  </button>\n                </div>\n              </form>\n\n              <div class=\"margin-top-20\" style=\"float: right;\">\n                <button mat-raised-button color=\"warn\" matStepperPrevious class=\"marging-right-10\">\n                  << Previous </button> <button mat-raised-button color=\"primary\" matStepperNext> Next >>\n                </button>\n              </div>\n\n            </mat-step>\n\n\n\n            <mat-step [stepControl]=\"masterFormGroupings\">\n              <ng-template matStepLabel> COMMENDATION </ng-template>\n\n              <form [formGroup]=\"masterFormGroupings\">\n\n\n\n                <div formArrayName=\"commendation\">\n                  <div *ngFor=\"let cm of formDataMasterFormGroupings[5].controls; let i = index\">\n                    <button mat-raised-button title=\"Remove\" (click)=\"removeCommd(i)\"\n                      style=\"margin-bottom: 10px ; color: red\">\n                      <mat-icon matSuffix>delete</mat-icon>\n                    </button>\n\n                    <div formGroupName=\"{{i}}\">\n                      <mat-form-field appearance=\"outline\" class=\"width-25 marging-right-5\">\n                        <mat-label>Commnedation Letter By</mat-label>\n                        <input matInput placeholder=\"The Commendation Letter was presented to you by ?\"\n                          formControlName=\"by\">\n                      </mat-form-field>\n\n                      <mat-form-field appearance=\"outline\" class=\"width-25 marging-right-5\">\n                        <mat-label> Commendation From </mat-label>\n                        <input matInput placeholder=\"From\" formControlName=\"commendationFor\">\n                      </mat-form-field>\n\n                      <mat-form-field appearance=\"outline\" class=\"width-25 marging-left-5 \">\n                        <mat-label> Commendation Date </mat-label>\n                        <!-- <input matInput [matDatepicker]=\"picker18\" placeholder=\"Choose a date\"\n                            formControlName=\"commendationDate\"---->\n\n                        <input matInput placeholder=\"Choose a date\" formControlName=\"commendationDate\">\n                        <!-- <mat-datepicker-toggle matSuffix [for]=\"picker18\"></mat-datepicker-toggle> -->\n                        <!-- <mat-datepicker touchUi #picker18 startView=\"year\"></mat-datepicker> -->\n                      </mat-form-field>\n\n                    </div>\n                   \n                  </div>\n                  <button mat-raised-button color=\"primary\" (click)=\"addCommd()\" style=\"margin-bottom: 10px;\"\n                  title=\"Add New\">\n                  <mat-icon>add</mat-icon>\n                </button>\n                </div>\n\n              </form>\n\n\n              <div class=\"margin-top-20\" style=\"float: right;\">\n                <button mat-raised-button color=\"warn\" matStepperPrevious class=\"marging-right-10\">\n                  << Previous </button> <button mat-raised-button color=\"primary\" matStepperNext> Next >>\n                </button>\n              </div>\n            </mat-step>\n\n\n\n\n            <mat-step [stepControl]=\"masterFormGroupings\">\n              <ng-template matStepLabel> MEMBERSHIP OF PROFESSIONAL BODIES </ng-template>\n\n              <form [formGroup]=\"masterFormGroupings\">\n\n\n                <div formArrayName=\"membershipOfProfessionalBodies\">\n                  <div *ngFor=\"let mp of formDataMasterFormGroupings[12].controls; let i = index\">\n                    <button mat-raised-button title=\"Remove\" (click)=\"removeMembershipOfProfessionalBodiesIndex(i)\"\n                      style=\"margin-bottom: 10px ; color: red ;\">\n                      <mat-icon matSuffix>delete</mat-icon>\n                    </button>\n\n                    <div formGroupName=\"{{i}}\">\n                      <mat-form-field appearance=\"outline\" class=\"width-40 marging-right-5\">\n                        <mat-label>Post</mat-label>\n                        <input matInput placeholder=\"The positon you hold... eg member\" formControlName=\"postHeld\">\n                      </mat-form-field>\n\n                      <mat-form-field appearance=\"outline\" class=\"width-40 marging-right-5\">\n                        <mat-label>Organisation</mat-label>\n                        <input matInput placeholder=\"The organization\" formControlName=\"organization\">\n                      </mat-form-field>\n\n\n                      <mat-form-field appearance=\"outline\" class=\"width-40 marging-right-5\">\n                        <mat-label>No.</mat-label>\n                        <input matInput placeholder=\"No. eg No:06476\" formControlName=\"no\">\n                      </mat-form-field>\n\n                      <!-- <mat-form-field appearance=\"outline\" class=\"width-45 marging-right-10 \">\n                              <mat-label>Date Joined</mat-label>\n                              <input matInput [matDatepicker]=\"picker15\" placeholder=\"Select date\" formControlName=\"yearJoined\">\n                              <mat-datepicker-toggle matSuffix [for]=\"picker15\"></mat-datepicker-toggle>\n                              <mat-datepicker touchUi #picker15 startView=\"year\"></mat-datepicker>\n                            </mat-form-field>\n                \n                \n                            <mat-form-field appearance=\"outline\" class=\"width-45 marging-right-10\">\n                              <mat-label>Post Held</mat-label>\n                              <input matInput placeholder=\"Email Address\" formControlName=\"postHeld\">\n                            </mat-form-field> -->\n\n                    </div>\n                    <button mat-raised-button color=\"primary\" (click)=\"addMembershipOfProfessionalBodies()\"\n                      style=\"margin-bottom: 10px;\" title=\"Add New\">\n                      <mat-icon>add</mat-icon>\n                    </button>\n                  </div>\n                </div>\n\n              </form>\n\n              <div class=\"margin-top-20\" style=\"float: right;\">\n                <button mat-raised-button color=\"warn\" matStepperPrevious class=\"marging-right-10\">\n                  << Previous </button> <button mat-raised-button color=\"primary\" matStepperNext> Next >>\n                </button>\n              </div>\n            </mat-step>\n\n\n\n\n\n            <mat-step [stepControl]=\"masterFormGroupings\">\n              <ng-template matStepLabel>RESEARCH INTEREST OR COMMISSIONED PROJECTS</ng-template>\n\n              <form [formGroup]=\"masterFormGroupings\">\n\n                <mat-accordion>\n                  <mat-expansion-panel [expanded]=\"step === 12\" (opened)=\"setStep(12)\" hideToggle>\n                    <mat-expansion-panel-header>\n                      <mat-panel-title>\n                        RESEARCH INTEREST\n                      </mat-panel-title>\n                    </mat-expansion-panel-header>\n\n\n                    <div formArrayName=\"researchInterests\">\n                      <div *ngFor=\"let ri of formDataMasterFormGroupings[6].controls let i = index\">\n                        <button mat-raised-button title=\"Remove\" (click)=\"removeResearchIntOrCommPro(i)\"\n                          style=\"margin-bottom: 10px ; color: red ;\">\n                          <mat-icon matSuffix>delete</mat-icon>\n                        </button>\n                        <div formGroupName=\"{{i}}\">\n                          <mat-form-field appearance=\"outline\" class=\"width-95 marging-left-10 \">\n                            <mat-label> Research Interest </mat-label>\n                            <input matInput placeholder=\"Trainign Received\" formControlName=\"interest\"\n                              class=\"custom-textarea\">\n                          </mat-form-field>\n                          <!-- <mat-form-field appearance=\"outline\" class=\"width-95 marging-left-10 \">\n                                            <mat-label>Outline</mat-label>\n                                            <input matInput placeholder=\"Research Interests\" formControlName=\"outline\" class=\"custom-textarea\">\n                                          </mat-form-field> -->\n                        </div>\n\n                      </div>\n                      <button mat-raised-button color=\"primary\" (click)=\"addResearchInterests()\"\n                        style=\"margin-bottom: 10px;\" title=\"Add New\">\n                        <mat-icon>add</mat-icon>\n                      </button>\n                    </div>\n                  </mat-expansion-panel>\n                </mat-accordion>\n\n\n\n\n\n                <mat-accordion>\n                  <mat-expansion-panel [expanded]=\"step === 13\" (opened)=\"setStep(13)\" hideToggle>\n                    <mat-expansion-panel-header>\n                      <mat-panel-title>\n                        COMMISSIONED PROJECTS\n                      </mat-panel-title>\n                    </mat-expansion-panel-header>\n\n\n                    <div formArrayName=\"commissionedProject\">\n                      <div *ngFor=\"let c of formDataMasterFormGroupings[7].controls; let i = index\">\n                        <button mat-raised-button title=\"Remove\" (click)=\"removeCommissionedProject(i)\"\n                          style=\"margin-bottom: 10px ; color: red ;\">\n                          <mat-icon matSuffix>delete</mat-icon>\n                        </button>\n                        <div formGroupName=\"{{i}}\">\n                          <mat-form-field appearance=\"outline\" class=\"width-90 marging-left-10 \">\n                            <mat-label> Commisioned Project </mat-label>\n                            <input matInput placeholder=\"Commisioned Projects \"\n                              formControlName=\"commissionedProject\" class=\"custom-textarea\">\n                          </mat-form-field>\n                        </div>\n\n                      </div>\n                      <button mat-raised-button color=\"primary\" (click)=\"addCommissionedProject()\"\n                        style=\"margin-bottom: 10px;\" title=\"Add New\">\n                        <mat-icon>add</mat-icon>\n                      </button>\n                    </div>\n\n                  </mat-expansion-panel>\n                </mat-accordion>\n\n              </form>\n\n              <div class=\"margin-top-20\" style=\"float: right;\">\n                <button mat-raised-button color=\"warn\" matStepperPrevious class=\"marging-right-10\">\n                  << Previous </button> <button mat-raised-button color=\"primary\" matStepperNext> Next >>\n                </button>\n              </div>\n\n            </mat-step>\n\n\n\n            <mat-step [stepControl]=\"masterFormGroupings\">\n              <ng-template matStepLabel>PUBLICATIONS</ng-template>\n\n              <form [formGroup]=\"masterFormGroupings\">\n\n\n                <div formGroupName=\"publications\">\n\n\n                  <mat-accordion>\n                    <mat-expansion-panel [expanded]=\"step === 21\" (opened)=\"setStep(21)\" hideToggle>\n                      <mat-expansion-panel-header>\n                        <mat-panel-title>\n                          THESIS , DISSERATION AND PROJECTS\n                        </mat-panel-title>\n                      </mat-expansion-panel-header>\n\n\n                      <div formGroupName=\"thesisDissPro\">\n                        <div *ngFor=\"let t of formDataMasterFormGroupings[26].controls; let i = index\">\n                          <button mat-raised-button title=\"Remove\" (click)=\"removeThesisDissPro(i)\"\n                            style=\"margin-bottom: 10px ; color: red\">\n                            <mat-icon matSuffix>delete</mat-icon>\n                          </button>\n\n                          <div formGroupName=\"{{i}}\">\n                            <mat-form-field appearance=\"outline\" class=\"width-90 marging-right-10\">\n                              <mat-label> Thesis | Dissersation | Project</mat-label>\n                              <input matInput placeholder=\"Thesis , Dissersation , projects\"\n                                formControlName=\"thesis\">\n                            </mat-form-field>\n                          </div>\n\n                        </div>\n                        <button mat-raised-button color=\"primary\" (click)=\"addThesisDissPro()\"\n                          style=\"margin-bottom: 10px;\" title=\"Add New\">\n                          <mat-icon>add</mat-icon>\n                        </button>\n                      </div>\n                    </mat-expansion-panel>\n                  </mat-accordion>\n\n                  <mat-accordion>\n                    <mat-expansion-panel [expanded]=\"step === 14\" (opened)=\"setStep(14)\" hideToggle>\n                      <mat-expansion-panel-header>\n                        <mat-panel-title>\n                          JOURNAL ARTICLES IN PRINT\n                        </mat-panel-title>\n                      </mat-expansion-panel-header>\n\n\n\n                      <div formGroupName=\"artInP\">\n                        <div *ngFor=\"let t of formDataMasterFormGroupings[30].controls; let i = index\">\n                          <button mat-raised-button title=\"Remove\" (click)=\"removeArtInP(i)\"\n                            style=\"margin-bottom: 10px; color: red\">\n                            <mat-icon matSuffix>delete</mat-icon>\n                          </button>\n\n                          <div formGroupName=\"{{i}}\">\n\n                            <mat-form-field appearance=\"outline\" class=\"40 marging-right-10\">\n                              <mat-label> Your Name On Journal </mat-label>\n                              <input matInput placeholder=\"Your Name on the publication... eg Shodiya S.A\"\n                                formControlName=\"pubName\">\n                            </mat-form-field>\n\n\n                            <mat-form-field appearance=\"outline\" class=\"40 marging-right-10\">\n                              <mat-label> Journal Title</mat-label>\n                              <input matInput placeholder=\"The Journal Title\" formControlName=\"title\">\n                            </mat-form-field>\n\n\n\n                            <mat-form-field appearance=\"outline\" class=\"40 marging-right-10\">\n                              <mat-label> Journal Publiher</mat-label>\n                              <input matInput placeholder=\"Journal Publisher \" formControlName=\"publisher\">\n                            </mat-form-field>\n\n\n\n                            <mat-form-field appearance=\"outline\" class=\"40 marging-right-10\">\n                              <mat-label> Journal Serial Number</mat-label>\n                              <input matInput placeholder=\"Journal Serial Number\" formControlName=\"sn\">\n                            </mat-form-field>\n\n\n\n                            <mat-form-field appearance=\"outline\" class=\"40 marging-right-10\">\n                              <mat-label> Journal Avalable at </mat-label>\n                              <input matInput\n                                placeholder=\"Available online at.... eg https://journal.com/journallink\"\n                                formControlName=\"availableAt\">\n                            </mat-form-field>\n\n                            <br />\n                            <mat-form-field appearance=\"outline\" class=\"width-40 marging-right-10\">\n                              <mat-label> Used for Promotion ? </mat-label>\n                              <mat-select placeholder=\"Used for promotion before ? \" formControlName=\"used\"\n                                class=\"input\">\n                                <mat-option value=\"Yes\">Yes</mat-option>\n                                <mat-option value=\"No\">No</mat-option>\n                              </mat-select>\n                            </mat-form-field>\n\n                            <mat-form-field appearance=\"outline\" class=\"width-40 marging-right-10\">\n                              <mat-label> Local Or Ferign Publication </mat-label>\n                              <mat-select placeholder=\"Was the publication local or foreign ?\" formControlName=\"lf\"\n                                class=\"input\">\n                                <mat-option value=\"local\">Local Publication</mat-option>\n                                <mat-option value=\"foreign\">Foreign Publication</mat-option>\n                              </mat-select>\n                            </mat-form-field>\n\n                            <textarea name=\"\" id=\"#\" cols=\"70\" rows=\"5\" formControlName=\"journalA\"\n                              style=\"font-family: Arial, Helvetica, sans-serif ; font-size: 20px;\"\n                              placeholder=\"Paste Complete Journal details here\">\n                              </textarea>\n\n                          </div>\n                        </div>\n                        <button mat-raised-button color=\"primary\" (click)=\"addArtInP()\" style=\"margin-bottom: 10px;\"\n                          title=\"Add New\">\n                          <mat-icon>add</mat-icon>\n                        </button>\n                      </div>\n\n                    </mat-expansion-panel>\n                  </mat-accordion>\n\n\n\n\n\n\n\n                  <mat-accordion>\n                    <mat-expansion-panel [expanded]=\"step === 15\" (opened)=\"setStep(15)\" hideToggle>\n                      <mat-expansion-panel-header>\n                        <mat-panel-title>\n                          ARTICLES ACCEPTED FOR PUBLICATION (IN PRESS)\n                        </mat-panel-title>\n                      </mat-expansion-panel-header>\n\n\n\n                      <div formGroupName=\"articlesAcc\">\n                        <div *ngFor=\"let t of  formDataMasterFormGroupings[20].controls; let i = index\">\n                          <button mat-raised-button title=\"Remove\" (click)=\"removeArticleAcc(i)\"\n                            style=\"margin-bottom: 10px ; color: red\">\n                            <mat-icon matSuffix>delete</mat-icon>\n                          </button>\n\n                          <div formGroupName=\"{{i}}\">\n\n                            <mat-form-field appearance=\"outline\" class=\"40 marging-right-10\">\n                              <mat-label> Your name on Article</mat-label>\n                              <input matInput placeholder=\"Your Name on the publication... eg Shodiya S.A\"\n                                formControlName=\"pubName\">\n                            </mat-form-field>\n\n\n                            <mat-form-field appearance=\"outline\" class=\"40 marging-right-10\">\n                              <mat-label> Article Title</mat-label>\n                              <input matInput placeholder=\"The Article Title\" formControlName=\"title\">\n                            </mat-form-field>\n\n\n\n                            <mat-form-field appearance=\"outline\" class=\"40 marging-right-10\">\n                              <mat-label>Article Publisher</mat-label>\n                              <input matInput placeholder=\"Article Publisher \" formControlName=\"publisher\">\n                            </mat-form-field>\n\n\n\n                            <mat-form-field appearance=\"outline\" class=\"40 marging-right-10\">\n                              <mat-label> Article Serial Number</mat-label>\n                              <input matInput placeholder=\"Article Serial Number\" formControlName=\"sn\">\n                            </mat-form-field>\n\n\n\n                            <mat-form-field appearance=\"outline\" class=\"40 marging-right-10\">\n                              <mat-label> Article Available at</mat-label>\n                              <input matInput\n                                placeholder=\"Available online at.... eg https://journal.com/journallink\"\n                                formControlName=\"availableAt\">\n                            </mat-form-field>\n\n                            <br />\n                            <mat-form-field appearance=\"outline\" class=\"width-40 marging-right-10\">\n                              <mat-label> Used for Promotion ? </mat-label>\n                              <mat-select placeholder=\"Used for promotion before ? \" formControlName=\"used\"\n                                class=\"input\">\n                                <mat-option value=\"Yes\">Yes</mat-option>\n                                <mat-option value=\"No\">No</mat-option>\n                              </mat-select>\n                            </mat-form-field>\n\n                            <mat-form-field appearance=\"outline\" class=\"width-40 marging-right-10\">\n                              <mat-label> Local Or Ferign Article </mat-label>\n                              <mat-select placeholder=\"Was the article local or foreign ?\" formControlName=\"lf\"\n                                class=\"input\">\n                                <mat-option value=\"local\">Local Accepted Article </mat-option>\n                                <mat-option value=\"foreign\">Foreign Accepted Article</mat-option>\n                              </mat-select>\n                            </mat-form-field>\n\n                            <textarea name=\"\" id=\"#1\" cols=\"70\" rows=\"5\" formControlName=\"journalAc\"\n                              style=\"font-family: Arial, Helvetica, sans-serif ; font-size: 20px;\"\n                              placeholder=\"Paste Complete Journal details here\">\n                              </textarea>\n\n\n                          </div>\n                          <button mat-raised-button color=\"primary\" (click)=\"addArticleAcc()\"\n                            style=\"margin-bottom: 10px;\" title=\"Add New\">\n                            <mat-icon>add</mat-icon>\n                          </button>\n                        </div>\n                      </div>\n\n                    </mat-expansion-panel>\n                  </mat-accordion>\n\n\n\n\n\n                  <mat-accordion>\n                    <mat-expansion-panel [expanded]=\"step === 16\" (opened)=\"setStep(16)\" hideToggle>\n                      <mat-expansion-panel-header>\n                        <mat-panel-title>\n                          BOOKS\n                        </mat-panel-title>\n                      </mat-expansion-panel-header>\n\n\n\n                      <div formGroupName=\"books\">\n                        <div *ngFor=\"let b of formDataMasterFormGroupings[21].controls; let i = index\">\n                          <button mat-raised-button title=\"Remove\" (click)=\"removeBook(i)\"\n                            style=\"margin-bottom: 10px ; color: red\">\n                            <mat-icon matSuffix>delete</mat-icon>\n                          </button>\n\n                          <div formGroupName=\"{{i}}\">\n                            <mat-form-field appearance=\"outline\" class=\"width-45 marging-right-10\">\n                              <mat-label> Book Published</mat-label>\n                              <input matInput placeholder=\"Enter the book Published\" formControlName=\"book\">\n                            </mat-form-field>\n\n\n                            <mat-form-field appearance=\"outline\" class=\"width-45 marging-right-10\">\n                              <mat-label> Used for Promotion ? </mat-label>\n                              <mat-select placeholder=\"has article been used for promotion before ? \"\n                                formControlName=\"used\" class=\"input\">\n                                <mat-option value=\"Yes\">Yes</mat-option>\n                                <mat-option value=\"No\">No</mat-option>\n                              </mat-select>\n                            </mat-form-field>\n                          </div>\n                        </div>\n\n                        <button mat-raised-button color=\"primary\" (click)=\"addBook()\" style=\"margin-bottom: 10px;\"\n                          title=\"Add New\">\n                          <mat-icon>add</mat-icon>\n                        </button>\n                      </div>\n\n                    </mat-expansion-panel>\n                  </mat-accordion>\n\n\n\n\n\n                  <mat-accordion>\n                    <mat-expansion-panel [expanded]=\"step === 17\" (opened)=\"setStep(17)\" hideToggle>\n                      <mat-expansion-panel-header>\n                        <mat-panel-title>\n                          BOOKS ARTICLES OR CHAPTER\n                        </mat-panel-title>\n                      </mat-expansion-panel-header>\n\n\n\n                      <div formArrayName=\"bookArticlesOrChapter\">\n                        <div *ngFor=\"let b of  formDataMasterFormGroupings[22].controls; let i = index\">\n                          <button mat-raised-button title=\"Remove\" (click)=\"removeBookArticlesOrChapter(i)\"\n                            style=\"margin-bottom: 10px ; color: red\">\n                            <mat-icon matSuffix>delete</mat-icon>\n                          </button>\n\n                          <div formGroupName=\"{{i}}\">\n                            <mat-form-field appearance=\"outline\" class=\"width-45 marging-right-10\">\n                              <mat-label> Book Artile or Chapter </mat-label>\n                              <input matInput placeholder=\"Book Artiles or Chapter here\"\n                                formControlName=\"bookArtChapt\">\n                            </mat-form-field>\n\n                            <mat-form-field appearance=\"outline\" class=\"width-45 marging-right-10\">\n                              <mat-label> Used for Promotion ? </mat-label>\n                              <mat-select placeholder=\"has article been used for promotion before ? \"\n                                formControlName=\"used\" class=\"input\">\n                                <mat-option value=\"Yes\">Yes</mat-option>\n                                <mat-option value=\"No\">No</mat-option>\n                              </mat-select>\n                            </mat-form-field>\n                          </div>\n\n                        </div>\n                        <button mat-raised-button color=\"primary\" (click)=\"addBookArticlesOrChapter()\"\n                          style=\"margin-bottom: 10px;\" title=\"Add New\">\n                          <mat-icon>add</mat-icon>\n                        </button>\n                      </div>\n\n                    </mat-expansion-panel>\n                  </mat-accordion>\n\n\n\n\n                  <mat-accordion>\n                    <mat-expansion-panel [expanded]=\"step === 18\" (opened)=\"setStep(18)\" hideToggle>\n                      <mat-expansion-panel-header>\n                        <mat-panel-title>\n                          EDITED CONFERENCE PROCEEDINGS\n                        </mat-panel-title>\n                      </mat-expansion-panel-header>\n\n\n                      <div formArrayName=\"editedConf\">\n                        <div *ngFor=\"let p of formDataMasterFormGroupings[31].controls; let i = index\">\n                          <button mat-raised-button title=\"Remove\" (click)=\"removeEditedCP(i)\"\n                            style=\"margin-bottom: 10px ; color: red\">\n                            <mat-icon matSuffix>delete</mat-icon>\n                          </button>\n                          <div formGroupName=\"{{i}}\">\n\n                            <mat-form-field appearance=\"outline\" class=\"40 marging-right-10\">\n                              <mat-label> Name on publication </mat-label>\n                              <input matInput placeholder=\"Your Name on the publication... eg Shodiya S.A\"\n                                formControlName=\"pubName\">\n                            </mat-form-field>\n\n\n                            <mat-form-field appearance=\"outline\" class=\"40 marging-right-10\">\n                              <mat-label> Title of Edited Conferences </mat-label>\n                              <input matInput placeholder=\"The Edited Conference Title\" formControlName=\"title\">\n                            </mat-form-field>\n\n\n\n                            <mat-form-field appearance=\"outline\" class=\"40 marging-right-10\">\n                              <mat-label>Edited Conference Publisher</mat-label>\n                              <input matInput placeholder=\"Edited Conference Publisher \"\n                                formControlName=\"publisher\">\n                            </mat-form-field>\n\n\n\n                            <mat-form-field appearance=\"outline\" class=\"40 marging-right-10\">\n                              <mat-label>Conference Proceeding Serial Number</mat-label>\n                              <input matInput placeholder=\"Conference Proceeding Serial Number\"\n                                formControlName=\"sn\">\n                            </mat-form-field>\n\n\n\n                            <mat-form-field appearance=\"outline\" class=\"40 marging-right-10\">\n                              <input matInput\n                                placeholder=\"Available online at.... eg https://journal.com/journallink\"\n                                formControlName=\"availableAt\">\n                            </mat-form-field>\n\n                            <br />\n                            <mat-form-field appearance=\"outline\" class=\"width-40 marging-right-10\">\n                              <mat-label> Used for Promotion ? </mat-label>\n                              <mat-select placeholder=\"Used for promotion before ? \" formControlName=\"used\"\n                                class=\"input\">\n                                <mat-option value=\"Yes\">Yes</mat-option>\n                                <mat-option value=\"No\">No</mat-option>\n                              </mat-select>\n                            </mat-form-field>\n\n                            <mat-form-field appearance=\"outline\" class=\"width-40 marging-right-10\">\n                              <mat-label> Local Or Ferign Conference Proceeding </mat-label>\n                              <mat-select placeholder=\"Was the Conference Proceeding Local or Foreign ?\"\n                                formControlName=\"lf\" class=\"input\">\n                                <mat-option value=\"local\">Local Conference Proceeding</mat-option>\n                                <mat-option value=\"foreign\">Foreign Conference Proceeding</mat-option>\n                              </mat-select>\n                            </mat-form-field>\n\n                            <textarea name=\"\" id=\"#2\" cols=\"70\" rows=\"5\" formControlName=\"editCP\"\n                              style=\"font-family: Arial, Helvetica, sans-serif ; font-size: 20px;\"\n                              placeholder=\"Paste Complete Journal details here\">\n                                  </textarea>\n\n                          </div>\n\n                        </div>\n                        <button mat-raised-button color=\"primary\" (click)=\"addEditedCP()\"\n                          style=\"margin-bottom: 10px;\" title=\"Add New\">\n                          <mat-icon>add</mat-icon>\n                        </button>\n                      </div>\n\n                    </mat-expansion-panel>\n                  </mat-accordion>\n\n\n\n\n\n\n\n                  <mat-accordion>\n                    <mat-expansion-panel [expanded]=\"step === 19\" (opened)=\"setStep(19)\" hideToggle>\n                      <mat-expansion-panel-header>\n                        <mat-panel-title>\n                          RESEARCH IN PROGRESS\n                        </mat-panel-title>\n                      </mat-expansion-panel-header>\n\n\n                      <div formArrayName=\"researchInProgress\">\n                        <div *ngFor=\"let c of formDataMasterFormGroupings[24].controls; let i = index\">\n                          <button mat-raised-button title=\"Remove\" (click)=\"removeResearchInProgress(i)\"\n                            style=\"margin-bottom: 10px ; color: red\">\n                            <mat-icon matSuffix>delete</mat-icon>\n                          </button>\n\n                          <div formGroupName=\"{{i}}\">\n                            <mat-form-field appearance=\"outline\" class=\"width-90 marging-left-10 \">\n                              <mat-label> Research In Progress </mat-label>\n                              <input matInput placeholder=\"Enter the research in progress\"\n                                formControlName=\"researchInProgress\" class=\"custom-textarea\">\n                            </mat-form-field>\n                          </div>\n                        </div>\n                        <button mat-raised-button color=\"primary\" title=\"Remove\" (click)=\"addResearchInProgress()\"\n                          style=\"margin-bottom: 10px\">\n                          <mat-icon matSuffix>add</mat-icon>\n                        </button>\n                      </div>\n\n                    </mat-expansion-panel>\n                  </mat-accordion>\n\n\n\n\n\n\n\n                  <mat-accordion>\n                    <mat-expansion-panel [expanded]=\"step === 20\" (opened)=\"setStep(20)\" hideToggle>\n                      <mat-expansion-panel-header>\n                        <mat-panel-title>\n                          TECHNICAL REPORT\n                        </mat-panel-title>\n                      </mat-expansion-panel-header>\n\n\n                      <div formGroupName=\"technicalReport\">\n                        <div *ngFor=\"let tr of  formDataMasterFormGroupings[25].controls; let i = index\">\n                          <button mat-raised-button title=\"Remove\" (click)=\"removeTechnicalReport(i)\"\n                            style=\"margin-bottom: 10px ; color: red\">\n                            <mat-icon matSuffix>delete</mat-icon>\n                          </button>\n\n                          <div formGroupName=\"{{i}}\">\n                            <mat-form-field appearance=\"outline\" class=\"width-90 marging-right-10\">\n                              <mat-label> Technical Report </mat-label>\n                              <input matInput placeholder=\"New Technical Report\" formControlName=\"report\">\n                            </mat-form-field>\n                          </div>\n\n\n\n                        </div>\n                        <button mat-raised-button color=\"primary\" (click)=\"addTechnicalReport()\"\n                          style=\"margin-bottom: 10px;\" title=\"Add New\">\n                          <mat-icon>add</mat-icon>\n                        </button>\n                      </div>\n                    </mat-expansion-panel>\n                  </mat-accordion>\n\n\n\n\n\n                  <!-- <mat-accordion>\n                      <mat-expansion-panel [expanded]=\"step === 21\" (opened)=\"setStep(21)\" hideToggle>\n                        <mat-expansion-panel-header>\n                          <mat-panel-title>\n                            ARTICLES IN LEARNED JOURNALS\n                          </mat-panel-title>\n                        </mat-expansion-panel-header>\n                            <button mat-raised-button color=\"primary\" (click)=\"addArticlesInLeanedJournals()\"\n                              style=\"margin-bottom: 10px;\" title=\"Add New\">\n                              <mat-icon>add</mat-icon>\n                            </button>\n                            <div formGroupName=\"articlesInLeanedJournals\">\n                              <div\n                                *ngFor=\"let work of masterFormGroupings.controls.publications.controls.articlesInLeanedJournals.controls; let i = index\">\n                                <button mat-raised-button  title=\"Remove\"\n                                  (click)=\"removeArticlesInLeanedJournals(i)\" style=\"margin-bottom: 10px\">\n                                  <mat-icon matSuffix>delete</mat-icon>\n                                </button>\n                                <div formGroupName=\"{{i}}\">\n                                  <mat-form-field appearance=\"outline\" class=\"width-90 marging-right-10\">\n                                    <input matInput placeholder=\"Publisher\" formControlName=\"article\">\n                                  </mat-form-field>\n                                </div>\n                              </div>\n                            </div> \n                      </mat-expansion-panel>\n                    </mat-accordion> -->\n\n\n\n\n                </div>\n\n              </form>\n\n              <div class=\"margin-top-20\" style=\"float: right;\">\n                <button mat-raised-button color=\"warn\" matStepperPrevious class=\"marging-right-10\">\n                  << Previous </button> <button mat-raised-button color=\"primary\" matStepperNext> Next >>\n                </button>\n              </div>\n\n            </mat-step>\n\n\n\n\n            <mat-step [stepControl]=\"masterFormGroupings\">\n              <ng-template matStepLabel>MAJOR CONFERENCES ATTENDED WITH PAPERS READ</ng-template>\n\n              <form [formGroup]=\"masterFormGroupings\">\n\n\n\n                <mat-expansion-panel [expanded]=\"step === 22\" (opened)=\"setStep(22)\" hideToggle>\n\n                  <mat-expansion-panel-header>\n                    <mat-panel-title>\n                      MAJOR CONFERENCES ATTENDED\n                    </mat-panel-title>\n                  </mat-expansion-panel-header>\n\n\n                  <div formArrayName=\"conferencesAttended\">\n                    <div *ngFor=\"let ca of formDataMasterFormGroupings[9].controls; let i = index\">\n                      <button mat-raised-button title=\"Remove\" (click)=\"removeConferenceAttended(i)\"\n                        style=\"margin-bottom: 10px ; color: red\">\n                        <mat-icon matSuffix>delete</mat-icon>\n                      </button>\n\n                      <div formGroupName=\"{{i}}\">\n                        <mat-form-field appearance=\"outline\" class=\"width-95 marging-left-10 \">\n                          <mat-label>Outline</mat-label>\n                          <input matInput placeholder=\"\" formControlName=\"confPapR\">\n                        </mat-form-field>\n                      </div>\n\n\n                    </div>\n\n                    <button mat-raised-button color=\"primary\" (click)=\"addConferenceAttended()\"\n                      style=\"margin-bottom: 10px;\" title=\"Add New\">\n                      <mat-icon>add</mat-icon>\n                    </button>\n                  </div>\n\n                  <mat-action-row>\n                    <button mat-raised-button color=\"warn\" (click)=\"prevStep()\"\n                      class=\"marging-right-10\">Previous</button>\n                    <button mat-raised-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n                  </mat-action-row>\n\n                </mat-expansion-panel>\n\n\n\n\n\n\n                <mat-expansion-panel [expanded]=\"step === 23\" (opened)=\"setStep(23)\" hideToggle>\n\n                  <mat-expansion-panel-header>\n                    <mat-panel-title>\n                      PAPERS READ\n                    </mat-panel-title>\n                  </mat-expansion-panel-header>\n\n\n\n                  <div formArrayName=\"papersRead\">\n                    <div *ngFor=\"let pr of formDataMasterFormGroupings[10].controls; let i = index\">\n                      <button mat-raised-button title=\"Remove\" (click)=\"removePapersRead(i)\"\n                        style=\"margin-bottom: 10px ; color: red \">\n                        <mat-icon matSuffix>delete</mat-icon>\n                      </button>\n\n                      <div formGroupName=\"{{i}}\">\n                        <mat-form-field appearance=\"outline\" class=\"width-95 marging-left-10 \">\n                          <mat-label>Paper Read</mat-label>\n                          <input matInput placeholder=\" Enter the paper read here \" formControlName=\"paper\">\n                        </mat-form-field>\n                      </div>\n                      <button mat-raised-button color=\"primary\" (click)=\"addPapersRead()\"\n                        style=\"margin-bottom: 10px;\" title=\"Add New\">\n                        <mat-icon>add</mat-icon>\n                      </button>\n                    </div>\n                  </div>\n\n                  <mat-action-row>\n                    <button mat-raised-button color=\"warn\" (click)=\"prevStep()\"\n                      class=\"marging-right-10\">Previous</button>\n                    <button mat-raised-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n                  </mat-action-row>\n\n                </mat-expansion-panel>\n              </form>\n            </mat-step>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n            <mat-step [stepControl]=\"masterFormGroupings\">\n              <ng-template matStepLabel>FELLOWSHIP, MASTER’S PROJECTS AND Ph.D. SUPERVISED</ng-template>\n              <form [formGroup]=\"masterFormGroupings\">\n\n\n\n                <mat-expansion-panel [expanded]=\"step === 24\" (opened)=\"setStep(24)\" hideToggle>\n\n                  <mat-expansion-panel-header>\n                    <mat-panel-title>\n                      FELLOWSHIP\n                    </mat-panel-title>\n                  </mat-expansion-panel-header>\n                  <button mat-raised-button color=\"primary\" (click)=\"addFellowship()\" style=\"margin-bottom: 10px;\"\n                    title=\"Add New\">\n                    <mat-icon>add</mat-icon>\n                  </button>\n\n                  <div formArrayName=\"fellowship\">\n                    <div *ngFor=\"let f of formDataMasterFormGroupings[15].controls; let i = index\">\n\n\n                      <div formGroupName=\"{{i}}\">\n\n                        <mat-form-field appearance=\"outline\" class=\"width-25 marging-left-5 \">\n                          <mat-label> Post In Fellowship </mat-label>\n                          <input matInput placeholder=\" Training \" formControlName=\"post\">\n                        </mat-form-field>\n\n\n                        <mat-form-field appearance=\"outline\" class=\"width-25 marging-left-5 \">\n                          <mat-label> Fellowship </mat-label>\n                          <input matInput placeholder=\"Enter the Fellowship Organisation here \"\n                            formControlName=\"fellowship\">\n                        </mat-form-field>\n\n                        <mat-form-field appearance=\"outline\" class=\"width-25 marging-left-5 \">\n                          <mat-label> Date </mat-label>\n                          <input matInput placeholder=\"Enter the Fellowship Organisation here \"\n                            formControlName=\"date\">\n                        </mat-form-field>\n\n                      </div>\n                      <button mat-raised-button title=\"Remove\" (click)=\"removeFellowship(i)\"\n                        style=\"margin-bottom: 10px ; color: red ;\">\n                        <mat-icon matSuffix>delete</mat-icon>\n                      </button>\n                    </div>\n                  </div>\n\n\n                  <mat-action-row>\n                    <button mat-raised-button color=\"warn\" (click)=\"prevStep()\"\n                      class=\"marging-right-10\">Previous</button>\n                    <button mat-raised-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n                  </mat-action-row>\n\n                </mat-expansion-panel>\n\n\n\n\n\n\n                <mat-expansion-panel [expanded]=\"step === 25\" (opened)=\"setStep(25)\" hideToggle>\n\n                  <mat-expansion-panel-header>\n                    <mat-panel-title>\n                      Supervision - POSTGRADUATE STUDENTS\n                    </mat-panel-title>\n                  </mat-expansion-panel-header>\n\n                  <button mat-raised-button color=\"primary\" (click)=\"addSupervisionPost()\"\n                    style=\"margin-bottom: 10px;\" title=\"Add New\">\n                    <mat-icon>add</mat-icon>\n                  </button>\n\n                  <div formArrayName=\"supervisionPost\">\n                    <div *ngFor=\"let p of formDataMasterFormGroupings[16].controls; let i = index\">\n                      <button mat-raised-button title=\"Remove\" (click)=\"removeSupervisionPost(i)\"\n                        style=\"margin-bottom: 10px ; color: red; \">\n                        <mat-icon matSuffix>delete</mat-icon>\n                      </button>\n\n                      <div formGroupName=\"{{i}}\">\n                        <mat-form-field appearance=\"outline\" class=\"width-25 marging-right-10\">\n                          <mat-label>Title Of Thesis</mat-label>\n                          <input matInput placeholder=\"Title\" formControlName=\"title\">\n                        </mat-form-field>\n\n\n                        <mat-form-field appearance=\"outline\" class=\"width-25 marging-right-10\">\n                          <mat-label>Name of Student</mat-label>\n                          <input matInput placeholder=\"Title\" formControlName=\"nameOfStudent\">\n                        </mat-form-field>\n\n\n                        <mat-form-field appearance=\"outline\" class=\"width-20 marging-right-10\">\n                          <mat-label>Date / Year of Commencement </mat-label>\n                          <input matInput placeholder=\"Date or Year of Commencement\" formControlName=\"_d1\">\n                        </mat-form-field>\n\n\n                        <mat-form-field appearance=\"outline\" class=\"width-20 marging-right-10\">\n                          <mat-label> Compeleted Or Ongoing </mat-label>\n                          <input matInput placeholder=\"Compeleted / Ongoing \" formControlName=\"_d2\">\n                        </mat-form-field>\n\n\n                        <mat-form-field appearance=\"outline\" class=\"width-45 marging-right-10\">\n                          <mat-label> Sole / Collaborative </mat-label>\n                          <mat-select placeholder=\"Choose value\" formControlName=\"soleColla\" class=\"input\">\n                            <mat-option value=\"Sole\">Sole</mat-option>\n                            <mat-option value=\"Collaborative\">Collaborative</mat-option>\n                          </mat-select>\n                        </mat-form-field>\n\n                        <mat-form-field appearance=\"outline\" class=\"width-45 marging-right-10\">\n                          <mat-label>Degree</mat-label>\n                          <input matInput placeholder=\"Enter degree here\" formControlName=\"degree\">\n                        </mat-form-field>\n                      </div>\n                    </div>\n                  </div>\n\n                  <mat-action-row>\n                    <button mat-raised-button color=\"warn\" (click)=\"prevStep()\"\n                      class=\"marging-right-10\">Previous</button>\n                    <button mat-raised-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n                  </mat-action-row>\n\n                </mat-expansion-panel>\n\n\n                <mat-expansion-panel [expanded]=\"step === 26\" (opened)=\"setStep(26)\" hideToggle>\n\n                  <mat-expansion-panel-header>\n                    <mat-panel-title>\n                      Supervision - POSTGRADUATE STUDENTS (part-time)\n                    </mat-panel-title>\n                  </mat-expansion-panel-header>\n\n                  <button mat-raised-button color=\"primary\" (click)=\"addSupervisionPostPart()\"\n                    style=\"margin-bottom: 10px;\" title=\"Add New\">\n                    <mat-icon>add</mat-icon>\n                  </button>\n                  <div formArrayName=\"supervisionPostPart\">\n                    <div *ngFor=\"let pp of formDataMasterFormGroupings[17].controls; let i = index\">\n                      <button mat-raised-button title=\"Remove\" (click)=\"removeSupervisionPostPart(i)\"\n                        style=\"margin-bottom: 10px ; color: red ;\">\n                        <mat-icon matSuffix>delete</mat-icon>\n                      </button>\n                      <div formGroupName=\"{{i}}\">\n                        <mat-form-field appearance=\"outline\" class=\"width-25 marging-right-10\">\n                          <mat-label>Title Of Thesis</mat-label>\n                          <input matInput placeholder=\"Title Of Thesis\" formControlName=\"title\">\n                        </mat-form-field>\n                        <mat-form-field appearance=\"outline\" class=\"width-25 marging-right-10\">\n                          <mat-label>Name of Student</mat-label>\n                          <input matInput placeholder=\"Name of Student\" formControlName=\"nameOfStudent\">\n                        </mat-form-field>\n                        <mat-form-field appearance=\"outline\" class=\"width-20 marging-right-10\">\n                          <mat-label>Date / Year of Commencement </mat-label>\n                          <input matInput placeholder=\"Enter Date / Year of Commencement\" formControlName=\"_d1\">\n                        </mat-form-field>\n                        <mat-form-field appearance=\"outline\" class=\"width-20 marging-right-10\">\n                          <mat-label> Compeleted Or Ongoing </mat-label>\n                          <input matInput placeholder=\"Compeleted / Ongoing \" formControlName=\"_d2\">\n                        </mat-form-field>\n                        <mat-form-field appearance=\"outline\" class=\"width-45 marging-right-10\">\n                          <mat-label> Sole / Collaborative </mat-label>\n                          <mat-select placeholder=\"Choose value\" formControlName=\"soleColla\" class=\"input\">\n                            <mat-option value=\"Sole\">Sole</mat-option>\n                            <mat-option value=\"Collaborative\">Collaborative</mat-option>\n                          </mat-select>\n                        </mat-form-field>\n                        <mat-form-field appearance=\"outline\" class=\"width-45 marging-right-10\">\n                          <mat-label>Degree</mat-label>\n                          <input matInput placeholder=\"Enter degree here\" formControlName=\"degree\">\n                        </mat-form-field>\n                      </div>\n                    </div>\n                  </div>\n\n\n\n                  <mat-action-row>\n                    <button mat-raised-button color=\"warn\" (click)=\"prevStep()\"\n                      class=\"marging-right-10\">Previous</button>\n                    <button mat-raised-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n                  </mat-action-row>\n\n                </mat-expansion-panel>\n\n              </form>\n            </mat-step>\n\n\n\n            <mat-step [stepControl]=\"masterFormGroupings\">\n              <ng-template matStepLabel>EXTRA CURRICULA ACTIVITES</ng-template>\n\n              <form [formGroup]=\"masterFormGroupings\">\n\n                <button mat-raised-button color=\"primary\" (click)=\"addExtraCurriculaActivities()\"\n                  style=\"margin-bottom: 10px;\" title=\"Add New\">\n                  <mat-icon col>add</mat-icon>\n                </button>\n\n                <div formArrayName=\"extraCurriculaActivities\">\n                  <div *ngFor=\"let work of formDataMasterFormGroupings[18].controls; let i = index\">\n                    <button mat-raised-button title=\"Remove\" (click)=\"removeExtraCurriculaActivities(i)\"\n                      style=\"margin-bottom: 10px ; color: red ;\">\n                      <mat-icon matSuffix>delete</mat-icon>\n                    </button>\n\n                    <div formGroupName=\"{{i}}\">\n                      <!-- <mat-form-field appearance=\"outline\" class=\"width-45 marging-right-10\">\n                            <mat-label>Title</mat-label>\n                            <input matInput placeholder=\"Title\" formControlName=\"title\">\n                          </mat-form-field> -->\n\n\n                      <mat-form-field appearance=\"outline\" class=\"width-90 marging-right-10\">\n                        <mat-label>Activity</mat-label>\n                        <input matInput placeholder=\"Your Extrac curricula activity here... eg dancing\"\n                          formControlName=\"activity\">\n                      </mat-form-field>\n\n                      <!-- <mat-form-field appearance=\"outline\" class=\"width-45 marging-right-10 \">\n                            <mat-label>From Date</mat-label>\n                            <input matInput [matDatepicker]=\"picker17\" placeholder=\"Choose a date\" formControlName=\"fromDate\">\n                            <mat-datepicker-toggle matSuffix [for]=\"picker17\"></mat-datepicker-toggle>\n                            <mat-datepicker touchUi #picker17 startView=\"year\"></mat-datepicker>\n                          </mat-form-field>\n                \n                \n                          <mat-form-field appearance=\"outline\" class=\"width-45 marging-right-10 \">\n                            <mat-label>To Date</mat-label>\n                            <input matInput [matDatepicker]=\"picker20\" placeholder=\"Choose a date\" formControlName=\"toDate\">\n                            <mat-datepicker-toggle matSuffix [for]=\"picker20\"></mat-datepicker-toggle>\n                            <mat-datepicker touchUi #picker20 startView=\"year\"></mat-datepicker>\n                          </mat-form-field> -->\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"margin-top-20\" style=\"float: right;\">\n                  <button mat-raised-button color=\"warn\" matStepperPrevious class=\"marging-right-10\">\n                    << Previous </button> <button mat-raised-button color=\"primary\" matStepperNext> Next >>\n                  </button>\n                </div>\n\n              </form>\n            </mat-step>\n\n\n\n\n\n\n\n\n\n\n            <mat-step [stepControl]=\"masterFormGroupings\">\n              <ng-template matStepLabel>REFREES</ng-template>\n\n              <form [formGroup]=\"masterFormGroupings\">\n\n                <button mat-raised-button color=\"primary\" (click)=\"addRefree()\" style=\"margin-bottom: 10px;\"\n                  title=\"Add New\">\n                  <mat-icon>add</mat-icon>\n                </button>\n\n                <div formArrayName=\"refrees\">\n                  <div *ngFor=\"let r of formDataMasterFormGroupings[11].controls; let i = index\">\n                    <button mat-raised-button title=\"Remove\" (click)=\"removeRefree(i)\"\n                      style=\"margin-bottom: 10px ; color: red;\">\n                      <mat-icon matSuffix>delete</mat-icon>\n                    </button>\n\n                    <div formGroupName=\"{{i}}\">\n                      <mat-form-field appearance=\"outline\" class=\"width-45 marging-right-10\">\n                        <mat-label>Refree Full Name</mat-label>\n                        <input matInput placeholder=\"Refree Full Name\" formControlName=\"refreeFullName\">\n                      </mat-form-field>\n\n                      <mat-form-field appearance=\"outline\" class=\"width-45 marging-right-10\">\n                        <mat-label>Occupation</mat-label>\n                        <input matInput placeholder=\"Occupation\" formControlName=\"occupation\">\n                      </mat-form-field>\n\n\n                      <mat-form-field appearance=\"outline\" class=\"width-45 marging-right-10\">\n                        <mat-label>Phone Number</mat-label>\n                        <input matInput placeholder=\"Phone Number\" formControlName=\"phoneNumber\">\n                      </mat-form-field>\n\n                      <mat-form-field appearance=\"outline\" class=\"width-45 marging-right-10\">\n                        <mat-label>Address</mat-label>\n                        <input matInput placeholder=\"Contact Address\" formControlName=\"address\">\n                      </mat-form-field>\n\n\n                      <mat-form-field appearance=\"outline\" class=\"width-80 marging-right-10\">\n                        <mat-label>Address</mat-label>\n                        <input matInput placeholder=\"Contact Address\" formControlName=\"email\">\n                      </mat-form-field>\n\n                    </div>\n                  </div>\n                </div>\n              </form>\n\n              <div class=\"margin-top-20\" style=\"float: right;\">\n                <button mat-raised-button color=\"warn\" matStepperPrevious class=\"marging-right-10\">\n                  << Previous </button> <button mat-raised-button color=\"primary\" matStepperNext> Next >>\n                </button>\n              </div>\n            </mat-step>\n\n\n\n            <mat-step [stepControl]=\"dateAndSignature\">\n              <ng-template matStepLabel> SIGNATURE AND DATE </ng-template>\n\n              <form [formGroup]=\"dateAndSignature\">\n                <!-- <signature-pad [options]=\"signaturePadOptions\" (onBeginEvent)=\"drawStart()\" (onEndEvent)=\"drawComplete()\"> -->\n                <signature-pad [options]=\"signaturePadOptions\" (onBeginEvent)=\"drawStart()\"\n                  (onEndEvent)=\"drawComplete()\">\n                </signature-pad>\n\n                <mat-form-field appearance=\"outline\" class=\"width-45 marging-left-10 \">\n                  <mat-label>Date</mat-label>\n                  <input matInput [matDatepicker]=\"picker2\" placeholder=\"Choose a date\"\n                    formControlName=\"dateSigned\">\n                  <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n                  <mat-datepicker touchUi #picker2 startView=\"year\"></mat-datepicker>\n                </mat-form-field>\n\n                <div class=\"marging-right-10 \">\n                  <button mat-raised-button color=\"secondary\" (click)=\"clearSignature()\" class=\"marging-right-10\"\n                    style=\"font: bold\">Clear\n                    Signature</button>\n                </div>\n              </form>\n\n              <div class=\"margin-top-20\" style=\"float: right;\">\n                <button mat-raised-button color=\"warn\" matStepperPrevious class=\"marging-right-10\">\n                  << Previous </button> <button mat-raised-button color=\"primary\" matStepperNext> Next >>\n                </button>\n              </div>\n            </mat-step>\n\n\n\n\n\n\n            <mat-step [stepControl]=\"finalStage\">\n              <ng-template matStepLabel> FINALISE CV </ng-template>\n              <div>\n                <h2>\n                  Are you sure all the details provided here are correct ? If not, you can make a calm check by\n                  going\n                  back!\n                </h2>\n              </div>\n              <div class=\"margin-top-50\" style=\"float: right;\">\n                <button mat-raised-button color=\"warn\" matStepperPrevious class=\"marging-right-10\"> Previous\n                </button>\n                <button mat-raised-button color=\"primary\" (click)=\"processApplication()\"\n                  [disabled]=\"usernameCond && loginCredentials.get('username').value!=''\">\n                  Proceed to Preview\n                </button>\n              </div>\n            </mat-step>\n\n          </mat-vertical-stepper>\n        </mat-card-content>\n\n\n\n      </mat-card>\n\n\n\n\n\n      <ng-container *ngIf=\"showBlurBackgroundOverlay; then blurBody; else unBlurBody\"></ng-container>\n      <!--------------------------Background Overlay-------------------------------->\n      <ng-template #blurBody>\n        <!-- <div class=\"overlay\">\n            <h2 style=\"text-align: center\">\n              Your Registeration was successful\n            </h2>\n          </div> -->\n        <img src=\"/assets/liquid-preloader_dribbble_v2.gif\" class=\"overlay\">\n\n      </ng-template>\n      <ng-template #unBlurBody>\n\n      </ng-template>\n\n    </div>\n    \n  </section>\n  <!-- <app-footer></app-footer> -->\n</div>\n"

/***/ }),

/***/ "./src/app/cv-documentation/cv-documentation.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/cv-documentation/cv-documentation.component.ts ***!
  \****************************************************************/
/*! exports provided: CvDocumentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvDocumentationComponent", function() { return CvDocumentationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_signaturepad_signature_pad__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-signaturepad/signature-pad */ "./node_modules/angular2-signaturepad/signature-pad.js");
/* harmony import */ var angular2_signaturepad_signature_pad__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_signaturepad_signature_pad__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _servies_custom_http_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../servies/custom-http-services.service */ "./src/app/servies/custom-http-services.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/fileupload */ "./node_modules/primeng/fileupload.js");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_fileupload__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _servies_cache_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../servies/cache.service */ "./src/app/servies/cache.service.ts");









var CvDocumentationComponent = /** @class */ (function () {
    function CvDocumentationComponent(fb, httpRequest, messageService, cacheService, router) {
        this.fb = fb;
        this.httpRequest = httpRequest;
        this.messageService = messageService;
        this.cacheService = cacheService;
        this.router = router;
        this.belongsTo = [
            'Religious Body',
            'Individual',
            'CBOs',
            'NGOs',
            'Corporate Organization',
            'Other Nationality School',
        ];
        this.location = ['Rural', 'Urban', 'Others'];
        this.showBlurBackgroundOverlay = false;
        this.totalFileAttached = 0;
        this.payGram = {
            masterFormGroupings: {},
            personalInformation: {},
            eaphni: {},
            loginCred: {}
        }; // the data to send to the server
        this.step = 0;
        this.stepper = 0;
        this.prizesFiles = [];
        this.honoursFiles = [];
        this.nationalRecognitionsFiles = [];
        this.internationalRecognitionsFiles = [];
        this.commendationFiles = [];
        this.publicationsFiles = [];
        this.specialAssignmentATEFiles = [];
        this.specialAssignmentMCFiles = [];
        this.specialAssignmentCSFiles = [];
        this.extraCurriculaActivitiesFiles = [];
        this.educationalCertificates = [];
        this.academicAndProfessionFiles = [];
        this.nationalRecognitionFiles = [];
        this.myfile = [];
        this.signatureFound = false;
        this.signaturePadOptions = {
            'minWidth': 0.3,
            'canvasWidth': 800,
            'canvasHeight': 500
        };
    }
    CvDocumentationComponent.prototype.ngOnInit = function () {
        this.FORM_INIT();
        // this.asynchronousValidators();
        if (JSON.parse(window.localStorage.getItem('personalInformation')) !== null
            && JSON.parse(window.localStorage.getItem('loginCredentials')) !== null
            && JSON.parse(window.localStorage.getItem('eaphni')) !== null
            && JSON.parse(window.localStorage.getItem('masterFormGroupings')) !== null) {
            this.populateFormValues();
            if ((this.masterFormGroupings.controls['dateAndSignature']).get('signature').value !== null) {
                this.signatureFound = true;
            }
        }
    };
    /**
     * Method implementation of the AfterViewInit for the signature pad
     */
    CvDocumentationComponent.prototype.ngAfterViewInit = function () {
        // this.signaturePad is now available
        this.signaturePad.set('minWidth', 3); // set szimek/signature_pad options at runtime
        this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
        if (this.signatureFound) {
            this.signaturePad.fromData(this.masterFormGroupings.controls['dateAndSignature'].controls['signature'].value);
            // console.log(' ' + (<FormGroup>this.masterFormGroupings.controls['dateAndSignature']).controls['signature'].value);
        }
    };
    CvDocumentationComponent.prototype.clearSignature = function () {
        this.signaturePad.clear();
    };
    /**
     * The method called by the signature pad on draw complete
     */
    CvDocumentationComponent.prototype.drawComplete = function () {
        this.dateAndSignature.controls['signature'].setValue(this.signaturePad.toData());
        this.dateAndSignature.controls['base64Image'].setValue(this.signaturePad.toDataURL('base64'));
    };
    CvDocumentationComponent.prototype.drawStart = function () {
        // console.log('begin drawing');
    };
    CvDocumentationComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    CvDocumentationComponent.prototype.nextStep = function () {
        this.step++;
    };
    CvDocumentationComponent.prototype.prevStep = function () {
        this.step--;
    };
    CvDocumentationComponent.prototype.onBasicUpload = function (event) {
        // var g = new FileReader() ;
        // g.readAsArrayBuffer(this.prizesF.files[0]);
        // console.log('File was uploaded successfully!', event.files.length);
        this.addSuccessMessage('Attachments was successful');
        this.totalFileAttached += 1;
    };
    /**
     *
     * @param $event
     */
    // onRemovePrizesFiles($event) {
    //   this.httpRequest.removeFiles({
    //     'url': 'prizes', 'data':
    //       this.personalInformation.controls['prizesFilesmetaData'].value
    //   }).subscribe(data => {
    //     // console.log('Response Message', data);
    //     this.personalInformation.controls['prizesFilesmetaData'].setValue(data);
    //   }, (error: HttpErrorResponse) => {
    //     if (error.status === 500) {
    //       // console.log('Server error occured please contact admin');
    //     } else {
    //       // console.log(error);
    //     }
    //   });
    // }
    /**
     *
     * @param $event
     */
    CvDocumentationComponent.prototype.onSelectNationalRecognitionsFiles = function ($event) {
        for (var _i = 0, _a = $event.target.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.nationalRecognitionsFiles.push(file);
        }
    };
    /**
    *
    * @param $event
    */
    CvDocumentationComponent.prototype.onRemoveNationalRecognitionsFiles = function ($event) {
        for (var _i = 0, _a = $event.target.file; _i < _a.length; _i++) {
            var file = _a[_i];
            this.nationalRecognitionsFiles.push(file);
        }
    };
    /**
    *
    * @param $event
    */
    CvDocumentationComponent.prototype.onSelectInternationalRecognitionsFiles = function ($event) {
        for (var _i = 0, _a = $event.target.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.internationalRecognitionsFiles.push(file);
        }
    };
    /**
     *
     * @param $event
     */
    CvDocumentationComponent.prototype.onRemoveInternationalRecognitionsFiles = function ($event) {
        for (var _i = 0, _a = $event.target.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.internationalRecognitionsFiles.push(file);
        }
    };
    /**
    *
    * @param $event
    */
    CvDocumentationComponent.prototype.onSelectCommendationFiles = function ($event) {
        for (var _i = 0, _a = $event.target.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.commendationFiles.push(file);
        }
    };
    /**
     *
     * @param $event
     */
    CvDocumentationComponent.prototype.onRemoveCommendationFiles = function ($event) {
        for (var _i = 0, _a = $event.target.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.commendationFiles.push(file);
        }
    };
    /**
    * @param $event
    */
    CvDocumentationComponent.prototype.onSelectPublicationsFiles = function ($event) {
        for (var _i = 0, _a = $event.target.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.publicationsFiles.push(file);
        }
    };
    /**
     * @param $event
     */
    CvDocumentationComponent.prototype.onRemovePublicationsFiles = function ($event) {
        for (var _i = 0, _a = $event.target.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.publicationsFiles.push(file);
        }
    };
    /**
     * @param $event
     */
    CvDocumentationComponent.prototype.onSelectSpecialAssignmentATEFiles = function ($event) {
        for (var _i = 0, _a = $event.target.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.specialAssignmentATEFiles.push(file);
        }
    };
    /**
    * @param $event
    */
    CvDocumentationComponent.prototype.onRemoveSpecialAssignmentATEFiles = function ($event) {
        for (var _i = 0, _a = $event.target.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.specialAssignmentATEFiles.push(file);
        }
    };
    /**
   * @param $event
   */
    CvDocumentationComponent.prototype.onSelectSpecialAssignmentMCFiles = function ($event) {
        for (var _i = 0, _a = $event.target.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.specialAssignmentMCFiles.push(file);
        }
    };
    /**
    * @param $event
    */
    CvDocumentationComponent.prototype.onRemoveSpecialAssignmentMCFiles = function ($event) {
        for (var _i = 0, _a = $event.target.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.specialAssignmentMCFiles.push(file);
        }
    };
    /**
  * @param $event
  */
    CvDocumentationComponent.prototype.onSelectSpecialAssignmentCSFiles = function ($event) {
        for (var _i = 0, _a = $event.target.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.specialAssignmentMCFiles.push(file);
        }
    };
    /**
    * @param $event
    */
    CvDocumentationComponent.prototype.onRemoveSpecialAssignmentCSFiles = function ($event) {
        for (var _i = 0, _a = $event.target.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.specialAssignmentMCFiles.push(file);
        }
    };
    /**
     *
     * @param $even
     */
    CvDocumentationComponent.prototype.onSelectExtraCurriculaActivitiesFiles = function ($event) {
        for (var _i = 0, _a = $event.target.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.extraCurriculaActivitiesFiles.push(file);
        }
    };
    /**
    *
    * @param $even
    */
    CvDocumentationComponent.prototype.onRemoveExtraCurriculaActivitiesFiles = function ($event) {
        for (var _i = 0, _a = $event.target.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.extraCurriculaActivitiesFiles.push(file);
        }
    };
    /**
     *
     * @param $even
     */
    CvDocumentationComponent.prototype.onSelectEducationalCertificates = function ($event) {
        for (var _i = 0, _a = $event.target.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.educationalCertificates.push(file);
        }
    };
    /**
     *
     * @param $even
     */
    CvDocumentationComponent.prototype.onRemoveEducationalCertificates = function ($event) {
        for (var _i = 0, _a = $event.target.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.educationalCertificates.push(file);
        }
    };
    /**
   *
   * @param $even
   */
    CvDocumentationComponent.prototype.onSelectAcademicAndProfession = function ($event) {
        for (var _i = 0, _a = $event.target.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.academicAndProfessionFiles.push(file);
        }
    };
    /**
     *
     * @param $even
     */
    CvDocumentationComponent.prototype.onRemoveAcademicAndProfession = function ($event) {
        for (var _i = 0, _a = $event.target.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.academicAndProfessionFiles.push(file);
        }
    };
    /**
     *
     * @param $even
     */
    CvDocumentationComponent.prototype.onSelectNationalRecognitionFiles = function ($event) {
        for (var _i = 0, _a = $event.target.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.nationalRecognitionsFiles.push(file);
        }
    };
    /**
       *
       * @param $even
    */
    CvDocumentationComponent.prototype.onRemoveNationalRecognitionFiles = function ($event) {
        for (var _i = 0, _a = $event.target.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.nationalRecognitionsFiles.push(file);
        }
    };
    /**
     *
     * @param event
     */
    CvDocumentationComponent.prototype.onBasicError = function (event) {
        // console.log(event);
        // if( event.error.TypeError  === "Cannot read property 'toLowerCase' of undefined" ) {
        // this.addErrorMessage('Cant not upload file (username field is empty)');
        // } else {
        this.addErrorMessage('File(s) failed to attach');
        // }
    };
    CvDocumentationComponent.prototype.initeaphni = function () {
        return this.fb.group({
            schoolAttended: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp('[a-zA-Z]*'))]),
            fromDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp('\\d{4,}'))]),
            toDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp('\\d{4,}'))]),
        });
    };
    CvDocumentationComponent.prototype.addEducational = function () {
        // push new educational background here 
        this.eaphni.controls['educationArray'].push(this.initeaphni());
    };
    /**
     *
     * @param indexAt The Index of the educational background to remove
     */
    CvDocumentationComponent.prototype.removeEducational = function (indexAt) {
        this.eaphni.controls['educationArray'].removeAt(indexAt);
        return true;
    };
    CvDocumentationComponent.prototype.initAcademicQualification = function () {
        return this.fb.group({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp('[a-zA-Z]*'))]),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
    };
    CvDocumentationComponent.prototype.addAcademicQualification = function () {
        this.eaphni.controls['academicQualifications'].push(this.initAcademicQualification());
    };
    /**
     *
     * @param indexAt The Index of the educational background to remove
     */
    CvDocumentationComponent.prototype.removeAcademicQualification = function (indexAt) {
        this.eaphni.controls['academicQualifications'].removeAt(indexAt);
        return true;
    };
    CvDocumentationComponent.prototype.addPrizes = function () {
        this.eaphni.controls['prizes'].push(this.initPHNI());
    };
    /**
     *
     * @param indexAt The Index of the educational background to remove
     */
    CvDocumentationComponent.prototype.removePrizes = function (indexAt) {
        this.eaphni.controls['prizes'].removeAt(indexAt);
        return true;
    };
    CvDocumentationComponent.prototype.addHonours = function () {
        this.eaphni.controls['honours'].push(this.initPHNI());
    };
    /**
     *
     * @param indexAt The Index of the educational background to remove
     */
    CvDocumentationComponent.prototype.removeHonours = function (indexAt) {
        this.eaphni.controls['honours'].removeAt(indexAt);
        return true;
    };
    CvDocumentationComponent.prototype.addScholarship = function () {
        this.eaphni.controls['scholarships'].push(this.initPHNI());
    };
    /**
     *
     * @param indexAt The Index of the educational background to remove
     */
    CvDocumentationComponent.prototype.removeScholarship = function (indexAt) {
        this.eaphni.controls['scholarships'].removeAt(indexAt);
        return true;
    };
    CvDocumentationComponent.prototype.addNationalRecognitions = function () {
        this.eaphni.controls['nationalRecognitions'].push(this.initPHNI());
    };
    /**
     *
     * @param indexAt The Index of the educational background to remove
     */
    CvDocumentationComponent.prototype.removeNationalRecognitions = function (indexAt) {
        this.eaphni.controls['nationalRecognitions'].removeAt(indexAt);
        return true;
    };
    CvDocumentationComponent.prototype.addInternationalRecognitions = function () {
        this.eaphni.controls['internationalRecognitions'].push(this.initPHNI());
    };
    /**
     *
     * @param indexAt The Index of the educational background to remove
     */
    CvDocumentationComponent.prototype.removeInternationalRecognitions = function (indexAt) {
        this.eaphni.controls['internationalRecognitions'].removeAt(indexAt);
        return true;
    };
    CvDocumentationComponent.prototype.initWorkExp = function () {
        return this.fb.group({
            organization: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp('[a-zA-Z]*'))]),
            postHeld: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            duties: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            fromDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp('\\d{4,}'))]),
            toDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp('\\d{4,}'))]),
        });
    };
    CvDocumentationComponent.prototype.addWorkExp = function () {
        // push new educational background here
        this.workExperience.push(this.initWorkExp());
    };
    /**
     *
     * @param indexAt
     */
    CvDocumentationComponent.prototype.removeWorkExp = function (indexAt) {
        this.workExperience.removeAt(indexAt);
        return true;
    };
    CvDocumentationComponent.prototype.initOtherWorkExp = function () {
        return this.fb.group({
            organization: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp('[a-zA-Z]*'))]),
            postHeld: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            duties: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            fromDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp('\\d{4,}'))]),
            toDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp('\\d{4,}'))]),
        });
    };
    CvDocumentationComponent.prototype.addOtherWorkExp = function () {
        // push new educational background here
        this.otherWorkExperience.push(this.initOtherWorkExp());
    };
    /**
     *
     * @param indexAt
     */
    CvDocumentationComponent.prototype.removeOtherWorkExp = function (indexAt) {
        this.otherWorkExperience.removeAt(indexAt);
        return true;
    };
    CvDocumentationComponent.prototype.initCourseDescription = function () {
        return this.fb.group({
            courseCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            courseTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
    };
    CvDocumentationComponent.prototype.addCourseDescription = function () {
        this.courseDescriptions.push(this.initCourseDescription());
    };
    /**
     *
     * @param indexAt
     */
    CvDocumentationComponent.prototype.removeCourseDescription = function (indexAt) {
        this.courseDescriptions.removeAt(indexAt);
        return true;
    };
    CvDocumentationComponent.prototype.initSchoolWorkExp = function () {
        return this.fb.group({
            courseCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z]{3}\\d{3}')]),
            creditHours: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('\\d*')]),
            numOfLecturers: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('\\d*')]),
            numberOfRegStd: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('\\d*')]),
            contribution: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            session: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('\\d{4}\\/\\d{4}')]),
            school: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            level: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z]*')])
        });
    };
    CvDocumentationComponent.prototype.addCausesTaught = function () {
        // push new educational background here
        this.schoolworkexp.push(this.initSchoolWorkExp());
    };
    /**
     *
     * @param indexAt The Index of the educational background to remove
     */
    CvDocumentationComponent.prototype.removeCausesTaught = function (indexAt) {
        this.schoolworkexp.removeAt(indexAt);
        return true;
    };
    CvDocumentationComponent.prototype.initThesisDissPro = function () {
        return this.fb.group({
            // title : new FormControl('', [Validators.required, Validators.pattern(new RegExp('[a-zA-Z]*'))]),
            // publicationYear : new FormControl('', [Validators.required]),
            // publisher: new FormControl('', [Validators.required]),
            thesis: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
    };
    CvDocumentationComponent.prototype.addThesisDissPro = function () {
        this.publications.controls['thesisDissPro'].push(this.initThesisDissPro());
    };
    /**
     *
     * @param indexAt The Index of the  Publication to remove
     */
    CvDocumentationComponent.prototype.removeThesisDissPro = function (indexAt) {
        this.publications.controls['thesisDissPro'].removeAt(indexAt);
        return true;
    };
    CvDocumentationComponent.prototype.initArtInP = function () {
        return this.fb.group({
            pubName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            publisher: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            sn: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            availableAt: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            lf: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            journalA: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            used: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
    };
    CvDocumentationComponent.prototype.addArtInP = function () {
        this.publications.controls['artInP'].push(this.initArtInP());
    };
    /**
     *
     * @param indexAt The Index of the  Publication to remove
     */
    CvDocumentationComponent.prototype.removeArtInP = function (indexAt) {
        this.publications.controls['artInP'].removeAt(indexAt);
        return true;
    };
    CvDocumentationComponent.prototype.initArticleAcc = function () {
        return this.fb.group({
            pubName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            publisher: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            sn: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            availableAt: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            used: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            lf: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            journalAc: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
    };
    CvDocumentationComponent.prototype.addArticleAcc = function () {
        this.publications.controls['articlesAcc'].push(this.initArticleAcc());
    };
    /**
     *
     * @param indexAt The Index of the  Publication to remove
     */
    CvDocumentationComponent.prototype.removeArticleAcc = function (indexAt) {
        this.publications.controls['articlesAcc'].removeAt(indexAt);
        return true;
    };
    CvDocumentationComponent.prototype.initArticlesInLearnedJournals = function () {
        return this.fb.group({
            // title : new FormControl('', [Validators.required, Validators.pattern(new RegExp('[a-zA-Z]*'))]),
            // publicationYear : new FormControl('', [Validators.required]),
            // publisher: new FormControl('', [Validators.required]),
            article: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
    };
    CvDocumentationComponent.prototype.addArticlesInLeanedJournals = function () {
        this.publications.controls['articlesInLeanedJournals'].push(this.initArticlesInLearnedJournals());
    };
    /**
     *
     * @param indexAt The Index of the  Publication to remove
     */
    CvDocumentationComponent.prototype.removeArticlesInLeanedJournals = function (indexAt) {
        this.publications.controls['articlesInLeanedJournals'].removeAt(indexAt);
        return true;
    };
    CvDocumentationComponent.prototype.initBook = function () {
        return this.fb.group({
            book: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', []),
            used: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', []),
        });
    };
    CvDocumentationComponent.prototype.addBook = function () {
        this.publications.controls['books'].push(this.initBook());
    };
    /**
     *
     * @param indexAt The Index of the  Publication to remove
     */
    CvDocumentationComponent.prototype.removeBook = function (indexAt) {
        this.publications.controls['books'].removeAt(indexAt);
        return true;
    };
    CvDocumentationComponent.prototype.initPaperReviewing = function () {
        return this.fb.group({
            paperR: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', []),
        });
    };
    CvDocumentationComponent.prototype.addPaperReviewing = function () {
        this.paperReviewing.push(this.initPaperReviewing());
    };
    /**
     *
     * @param indexAt The Index of the  Publication to remove
     */
    CvDocumentationComponent.prototype.removePaperReviewing = function (indexAt) {
        this.paperReviewing.removeAt(indexAt);
        return true;
    };
    CvDocumentationComponent.prototype.initBookArticlesOrChapter = function () {
        return this.fb.group({
            bookArtChapt: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            used: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    };
    CvDocumentationComponent.prototype.addBookArticlesOrChapter = function () {
        this.publications.controls['bookArticlesOrChapter'].push(this.initBookArticlesOrChapter());
    };
    /**
     *
     * @param indexAt The Index of the  Publication to remove
     */
    CvDocumentationComponent.prototype.removeBookArticlesOrChapter = function (indexAt) {
        this.publications.controls['bookArticlesOrChapter'].removeAt(indexAt);
        return true;
    };
    CvDocumentationComponent.prototype.initEditedCP = function () {
        return this.fb.group({
            pubName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            publisher: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            sn: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            availableAt: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            used: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            lf: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            editCP: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
    };
    CvDocumentationComponent.prototype.addEditedCP = function () {
        this.publications.controls['editedConf'].push(this.initEditedCP());
    };
    /**
     *
     * @param indexAt The Index of the  Publication to remove
     */
    CvDocumentationComponent.prototype.removeEditedCP = function (indexAt) {
        this.publications.controls['editedConf'].removeAt(indexAt);
        return true;
    };
    CvDocumentationComponent.prototype.initPaper = function () {
        return this.fb.group({
            paper: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            used: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    };
    CvDocumentationComponent.prototype.addPaper = function () {
        this.publications.controls['papers'].push(this.initPaper());
    };
    /**
     *
     * @param indexAt The Index of the  Publication to remove
     */
    CvDocumentationComponent.prototype.removePaper = function (indexAt) {
        this.publications.controls['papers'].removeAt(indexAt);
        return true;
    };
    CvDocumentationComponent.prototype.initCommd = function () {
        return this.fb.group({
            by: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp('[a-zA-Z]*'))]),
            commendationFor: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            commendationDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
    };
    CvDocumentationComponent.prototype.addCommd = function () {
        this.commendation.push(this.initCommd());
    };
    /**
     *
     * @param indexAt The Index of the Commendation to remove
     */
    CvDocumentationComponent.prototype.removeCommd = function (indexAt) {
        this.commendation.removeAt(indexAt);
        return true;
    };
    CvDocumentationComponent.prototype.initRefree = function () {
        return this.fb.group({
            refreeFullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp('[a-zA-Z]*'))]),
            occupation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(13), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(13), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp('\\d{13,13}'))]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
    };
    CvDocumentationComponent.prototype.addRefree = function () {
        // push new educational background here
        this.refrees.push(this.initRefree());
    };
    /**
     *
     * @param indexAt The Index of the Commendation to remove
     */
    CvDocumentationComponent.prototype.removeRefree = function (indexAt) {
        this.refrees.removeAt(indexAt);
        return true;
    };
    CvDocumentationComponent.prototype.initMembershipOfProfessionalBodies = function () {
        return this.fb.group({
            postHeld: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp('[a-zA-Z]*'))]),
            organization: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            no: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
    };
    CvDocumentationComponent.prototype.addMembershipOfProfessionalBodies = function () {
        // push new here
        this.membershipOfProfessionalBodies.push(this.initMembershipOfProfessionalBodies());
    };
    /**
     *
     * @param indexAt The Index of MembershipOfProfessionalBodies to remove
     */
    CvDocumentationComponent.prototype.removeMembershipOfProfessionalBodiesIndex = function (indexAt) {
        this.membershipOfProfessionalBodies.removeAt(indexAt);
        return true;
    };
    CvDocumentationComponent.prototype.initSpecialAssignemtATE = function () {
        return this.fb.group({
            postHeld: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp('[a-zA-Z]*'))]),
            organization: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            fromDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp('\\d{4,}'))]),
            toDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp('\\d{4,}'))])
        });
    };
    CvDocumentationComponent.prototype.addSpecialAssignmentATE = function () {
        // push new here
        this.specialAssignmentATE.push(this.initSpecialAssignemtATE());
    };
    /**
     * @param indexAt The Index of MembershipOfProfessionalBodies to remove
     */
    CvDocumentationComponent.prototype.removeSpecialAssignmentATE = function (indexAt) {
        this.specialAssignmentATE.removeAt(indexAt);
        return true;
    };
    CvDocumentationComponent.prototype.initSpecialAssignemtMC = function () {
        return this.fb.group({
            postHeld: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp('[a-zA-Z]*'))]),
            organization: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            fromDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp('\\d{4,}'))]),
            toDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp('\\d{4,}'))])
        });
    };
    CvDocumentationComponent.prototype.addSpecialAssignmentMC = function () {
        // push new here
        this.specialAssignmentMC.push(this.initSpecialAssignemtMC());
    };
    /**
     * @param indexAt The Index of MembershipOfProfessionalBodies to remove
     */
    CvDocumentationComponent.prototype.removeSpecialAssignmentMC = function (indexAt) {
        this.specialAssignmentMC.removeAt(indexAt);
        return true;
    };
    CvDocumentationComponent.prototype.initSpecialAssignemtCS = function () {
        return this.fb.group({
            postHeld: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp('[a-zA-Z]*'))]),
            communityServiceDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            fromDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp('\\d{4,}'))]),
            toDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp('\\d{4,}'))])
        });
    };
    CvDocumentationComponent.prototype.addSpecialAssignmentCS = function () {
        // push new here
        this.specialAssignmentCS.push(this.initSpecialAssignemtCS());
    };
    /**
     * @param indexAt The Index of MembershipOfProfessionalBodies to remove
     */
    CvDocumentationComponent.prototype.removeSpecialAssignmentCS = function (indexAt) {
        this.specialAssignmentCS.removeAt(indexAt);
        return true;
    };
    CvDocumentationComponent.prototype.initResearchInterests = function () {
        return this.fb.group({
            interest: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp('[a-zA-Z]*'))]),
        });
    };
    CvDocumentationComponent.prototype.addResearchInterests = function () {
        // push new here
        this.researchInterests.push(this.initResearchInterests());
    };
    /**
     * @param indexAt The Index of MembershipOfProfessionalBodies to remove
     */
    CvDocumentationComponent.prototype.removeResearchInterests = function (indexAt) {
        this.researchInterests.removeAt(indexAt);
        return true;
    };
    CvDocumentationComponent.prototype.initCommissionedProject = function () {
        return this.fb.group({
            commissionedProject: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp('[a-zA-Z]*'))]),
        });
    };
    CvDocumentationComponent.prototype.addCommissionedProject = function () {
        // push new here
        this.commissionedProject.push(this.initCommissionedProject());
    };
    /**
     * @param indexAt The Index of MembershipOfProfessionalBodies to remove
     */
    CvDocumentationComponent.prototype.removeCommissionedProject = function (indexAt) {
        this.commissionedProject.removeAt(indexAt);
        return true;
    };
    CvDocumentationComponent.prototype.initResearchInProgress = function () {
        return this.fb.group({
            researchInProgress: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp('[a-zA-Z]*'))]),
        });
    };
    CvDocumentationComponent.prototype.addResearchInProgress = function () {
        // push new here
        this.publications.controls['researchInProgress'].push(this.initResearchInProgress());
    };
    /**
     * @param indexAt The Index of MembershipOfProfessionalBodies to remove
     */
    CvDocumentationComponent.prototype.removeResearchInProgress = function (indexAt) {
        this.publications.controls['researchInProgress'].removeAt(indexAt);
        return true;
    };
    CvDocumentationComponent.prototype.initFellowship = function () {
        return this.fb.group({
            post: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp('[a-zA-Z]*'))]),
            fellowship: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp('\\d{4,}'))])
        });
    };
    CvDocumentationComponent.prototype.addFellowship = function () {
        // push new here
        this.fellowship.push(this.initFellowship());
    };
    /**
     * @param indexAt The Index of MembershipOfProfessionalBodies to remove
     */
    CvDocumentationComponent.prototype.removeFellowship = function (indexAt) {
        this.fellowship.removeAt(indexAt);
        return true;
    };
    CvDocumentationComponent.prototype.initSupervisionPost = function () {
        return this.fb.group({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp('[a-zA-Z]*'))]),
            nameOfStudent: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            _d1: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            _d2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            soleColla: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            degree: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
    };
    CvDocumentationComponent.prototype.addSupervisionPost = function () {
        // push new here
        this.supervisionPost.push(this.initSupervisionPost());
    };
    /**
     * @param indexAt The Index of MembershipOfProfessionalBodies to remove
     */
    CvDocumentationComponent.prototype.removeSupervisionPost = function (indexAt) {
        this.supervisionPost.removeAt(indexAt);
        return true;
    };
    CvDocumentationComponent.prototype.initTechnicalReport = function () {
        return this.fb.group({
            report: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp('[a-zA-Z]*'))]),
        });
    };
    CvDocumentationComponent.prototype.addTechnicalReport = function () {
        // push new here
        this.publications.controls.technicalReport.push(this.initTechnicalReport());
    };
    /**
     * @param indexAt The Index of MembershipOfProfessionalBodies to remove
     */
    CvDocumentationComponent.prototype.removeTechnicalReport = function (indexAt) {
        this.publications.controls.technicalReport.removeAt(indexAt);
        return true;
    };
    CvDocumentationComponent.prototype.initSupervisionPostPart = function () {
        return this.fb.group({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp('[a-zA-Z]*'))]),
            nameOfStudent: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            _d1: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            _d2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            soleColla: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            degree: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
    };
    CvDocumentationComponent.prototype.addSupervisionPostPart = function () {
        // push new here
        this.supervisionPostPart.push(this.initSupervisionPost());
    };
    /**
     * @param indexAt The Index of MembershipOfProfessionalBodies to remove
     */
    CvDocumentationComponent.prototype.removeSupervisionPostPart = function (indexAt) {
        this.supervisionPostPart.removeAt(indexAt);
        return true;
    };
    CvDocumentationComponent.prototype.initTrainingProgramme = function () {
        return this.fb.group({
            training: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp('[a-zA-Z]*'))]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    };
    CvDocumentationComponent.prototype.addTrainingProgramme = function () {
        // push new here
        this.trainingProgramme.push(this.initTrainingProgramme());
    };
    /**
     * @param indexAt The Index of MembershipOfProfessionalBodies to remove
     */
    CvDocumentationComponent.prototype.removeTrainingProgramme = function (indexAt) {
        this.trainingProgramme.removeAt(indexAt);
        return true;
    };
    CvDocumentationComponent.prototype.initConferenceAttended = function () {
        return this.fb.group({
            confPapR: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp('[a-zA-Z]*'))]),
        });
    };
    CvDocumentationComponent.prototype.addConferenceAttended = function () {
        // push new here
        this.conferencesAttended.push(this.initConferenceAttended());
    };
    /**
     * @param indexAt The Index of MembershipOfProfessionalBodies to remove
     */
    CvDocumentationComponent.prototype.removeConferenceAttended = function (indexAt) {
        this.conferencesAttended.removeAt(indexAt);
        return true;
    };
    CvDocumentationComponent.prototype.initPapersRead = function () {
        return this.fb.group({
            paper: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp('[a-zA-Z]*'))]),
        });
    };
    CvDocumentationComponent.prototype.addPapersRead = function () {
        // push new here
        this.papersRead.push(this.initPaper());
    };
    /**
     * @param indexAt The Index of MembershipOfProfessionalBodies to remove
     */
    CvDocumentationComponent.prototype.removePapersRead = function (indexAt) {
        this.papersRead.removeAt(indexAt);
        return true;
    };
    CvDocumentationComponent.prototype.initEmailAdress = function () {
        return this.fb.group({
            emailAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp('[a-zA-Z]*'))]),
        });
    };
    CvDocumentationComponent.prototype.addEmailAdress = function () {
        // push new here
        this.personalInformation.get('emailAddresses').push(this.initEmailAdress());
    };
    /**
     * @param indexAt The Index of MembershipOfProfessionalBodies to remove
     */
    CvDocumentationComponent.prototype.removeEmailAdress = function (indexAt) {
        this.personalInformation.get('emailAddresses').removeAt(indexAt);
        return true;
    };
    CvDocumentationComponent.prototype.initPhoneNumber = function () {
        return this.fb.group({
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp('\\+\\d{13}|\\d{11}'))]),
        });
    };
    CvDocumentationComponent.prototype.addPhoneNumber = function () {
        // push new here
        this.personalInformation.get('phoneNumbers').push(this.initPhoneNumber());
    };
    /**
     * @param indexAt The Index of MembershipOfProfessionalBodies to remove
     */
    CvDocumentationComponent.prototype.removePhoneNumber = function (indexAt) {
        this.personalInformation.get('phoneNumbers').removeAt(indexAt);
        return true;
    };
    CvDocumentationComponent.prototype.initContactAddress = function () {
        return this.fb.group({
            contactAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp('[a-zA-Z]*'))]),
        });
    };
    CvDocumentationComponent.prototype.addContactAddress = function () {
        // push new here
        this.personalInformation.get('contactAddresses').push(this.initContactAddress());
    };
    /**
     * @param indexAt The Index of MembershipOfProfessionalBodies to remove
     */
    CvDocumentationComponent.prototype.removeContactAddress = function (indexAt) {
        this.personalInformation.get('contactAddresses').removeAt(indexAt);
        return true;
    };
    CvDocumentationComponent.prototype.initExtraCurriculaActivities = function () {
        return this.fb.group({
            // title: new FormControl('', [Validators.pattern(new RegExp('[a-zA-Z]*'))]),
            activity: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
    };
    CvDocumentationComponent.prototype.initPHNI = function () {
        return this.fb.group({
            receivedFrom: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp('[a-zA-Z]*'))]),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp('\\d{4,}'))]),
        });
    };
    CvDocumentationComponent.prototype.addPHNI = function () {
        this.extraCurriculaActivities.push(this.initPHNI());
    };
    CvDocumentationComponent.prototype.addExtraCurriculaActivities = function () {
        this.extraCurriculaActivities.push(this.initExtraCurriculaActivities());
    };
    CvDocumentationComponent.prototype.initProfessionalQualification = function () {
        return this.fb.group({
            receivedFrom: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp('[a-zA-Z]*'))]),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp('\\d{4,}'))]),
        });
    };
    CvDocumentationComponent.prototype.addProfessionalQualification = function () {
        this.eaphni.controls['professionalQualifications'].push(this.initProfessionalQualification());
    };
    CvDocumentationComponent.prototype.removeProfessionalQualification = function (indexAt) {
        this.eaphni.controls['professionalQualifications'].removeAt(indexAt);
    };
    /**
     *
     * @param indexAt The Index of MembershipOfProfessionalBodies to remove
     */
    CvDocumentationComponent.prototype.removeExtraCurriculaActivities = function (indexAt) {
        this.extraCurriculaActivities.removeAt(indexAt);
        return true;
    };
    CvDocumentationComponent.prototype.processApplication = function () {
        // // master groupings , personal information educational bacgrounds
        // Object.keys(this.eaphni.controls).forEach( key => {
        //   this.payGram.personalInformation[key] = this.personalInformation.controls[key].value;
        // });
        // Object.keys(this.eaphni.controls).forEach( key => {
        //   if (this.eaphni.controls[key].value instanceof Array) {
        //     const arrayToAdd = {} ;
        //     (Array)(this.eaphni.controls[key].value).forEach(k=> {
        //       arrayToAdd[k] = this.eaphni.controls[key].value ;
        //     })
        //   }
        //   this.payGram.eaphni[key] = this.eaphni.controls[key].value;
        // });
        // Object.keys(this.eaphni.controls).forEach( key => {
        //   this.payGram.masterFormGroupings[key] = this.masterFormGroupings.controls[key].value;
        // });
        var dataLoadGram = [];
        this.payGram.loginCred = this.loginCredentials.value;
        this.payGram.personalInformation = this.personalInformation.value;
        this.payGram.eaphni = this.eaphni.value;
        this.payGram.masterFormGroupings = this.masterFormGroupings.value;
        // send the preview page to show
        // this.router.navigate(['/preview-cv'] , {queryParams: {'payload' : JSON.stringify(this.payGram)} } ) ;
        this.saveAllFormsValues();
        this.cacheService.payloadData = JSON.stringify(this.payGram);
        this.router.navigate(['/preview-cv']);
        // this.router.navigate(['/preview-cv', JSON.stringify(this.payGram)]);
        // (Array)(this.loginCredentials.value).forEach(v => {
        //   dataLoadGram.push(v);
        // });
        // (Array)(this.personalInformation.value).forEach(v => {
        //   dataLoadGram.push(v);
        // });
        // (Array)(this.eaphni.value).forEach(v => {
        //   dataLoadGram.push(v);
        // });
        // (Array)(this.masterFormGroupings.value).forEach(v => {
        //   dataLoadGram.push(v);
        // });
        // // console.log(JSON.stringify(this.payGram));
        // // console.log(JSON.stringify(dataLoadGram));
        // // send the data to the server
        // this.blurDocument(true);
        // this.httpRequest.sendApplicantInformation(this.payGram).subscribe(data => {
        //   // this.httpRequest.sendApplicantInformation(dataLoadGram).subscribe( data => {
        //   // console.log('Response Message', data);
        //   // this.router.navigate(['/userdashboard']);
        //   this.blurDocument(false);
        //   this.cacheService.registered = true;
        //   this.addSuccessMessage('Your Registration was successfull , please proceed to uploads files...');
        //   setTimeout(() => {
        //     // window.open('http://localhost:4300', '_self');
        //     // disable the file upload navigation from the front end app
        //     // this.router.navigate(['/fileuploads', this.loginCredentials.get('username').value]);
        //     // navigate back to the home page after successful cv
        //   }, 2000);
        // }, (error: HttpErrorResponse) => {
        //   if (error.status === 500) {
        //     // console.log('Server error occured please contact admin');
        //     this.addErrorMessage('Failed to submit registration form data');
        //   } else {
        //     // console.log(error);
        //   }
        // });
    };
    CvDocumentationComponent.prototype.done = function () {
        this.router.navigateByUrl('http://localhost:8083'); // user dashboard login page
    };
    CvDocumentationComponent.prototype.blurDocument = function (cond) {
        this.showBlurBackgroundOverlay = cond;
    };
    CvDocumentationComponent.prototype.uploadAllSelectedFiles = function () {
    };
    Object.defineProperty(CvDocumentationComponent.prototype, "formDataPersonalInformation", {
        /****************************
         * Form fieds initialisation
         * **************************
         */
        get: function () {
            return {
                '0': this.personalInformation.get('phoneNumbers'),
                '1': this.personalInformation.get('emailAddresses'),
                '2': this.personalInformation.get('contactAddresses'),
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CvDocumentationComponent.prototype, "formDataEaphni", {
        get: function () {
            return this.getEaphiFormControls();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CvDocumentationComponent.prototype, "formDataMasterFormGroupings", {
        get: function () {
            return this.getDataMasterFormGroupingsContols();
        },
        enumerable: true,
        configurable: true
    });
    /**
  
     */
    CvDocumentationComponent.prototype.getFormValuesFromLocalStorage = function () {
        // get all the saved form control values 
        var personalFormValues = JSON.parse(window.localStorage.getItem('personalInformation'));
        var eaphiFormValues = JSON.parse(window.localStorage.getItem('eaphni'));
        var masterFormValues = JSON.parse(window.localStorage.getItem('masterFormGroupings'));
        // get each of the saved form control vaues 
        var workExperience = masterFormValues['workExperience'];
        var otherWorkExperience = masterFormValues['otherWorkExperience'];
        var schoolworkexp = masterFormValues['schoolworkexp'];
        var courseDescriptions = masterFormValues['courseDescriptions'];
        var paperReviewing = masterFormValues['paperReviewing'];
        var commendation = masterFormValues['commendation'];
        var researchInterests = masterFormValues['researchInterests'];
        var commissionedProject = masterFormValues['commissionedProject'];
        var conferencesAttended = masterFormValues['conferencesAttended'];
        var papersRead = masterFormValues['papersRead'];
        var refrees = masterFormValues['refrees'];
        var membershipOfProfessionalBodies = masterFormValues['membershipOfProfessionalBodies'];
        var specialAssignmentATE = masterFormValues['specialAssignmentATE'];
        var trainingProgramme = masterFormValues['trainingProgramme'];
        var supervisionPost = masterFormValues['supervisionPost'];
        var supervisionPostPart = masterFormValues['supervisionPostPart'];
        var extraCurriculaActivities = masterFormValues['extraCurriculaActivities'];
        var specialAssignmentMC = masterFormValues['specialAssignmentMC'];
        var specialAssignmentCS = masterFormValues['specialAssignmentCS'];
        var articlesAcc = masterFormValues['publications']['articlesAcc'];
        var books = masterFormValues['publications']['books'];
        var bookArticlesOrChapter = masterFormValues['publications']['bookArticlesOrChapter'];
        var papers = masterFormValues['publications']['papers'];
        var researchInProgress = masterFormValues['publications']['researchInProgress'];
        var technicalReport = masterFormValues['publications']['technicalReport'];
        var thesisDissPro = masterFormValues['publications']['thesisDissPro'];
        var artInP = masterFormValues['publications']['artInP'];
        var editedConf = masterFormValues['publications']['editedConf'];
        var dateAndSignature = masterFormValues['dateAndSignature'];
        var phoneNumbers = personalFormValues['phoneNumbers'];
        var contactAddresses = personalFormValues['contactAddresses'];
        var emailAddresses = personalFormValues['emailAddresses'];
        this.loadFormGroupValues('workExperience', workExperience, this.initWorkExp());
        this.loadFormGroupValues('otherWorkExperience', otherWorkExperience, this.initOtherWorkExp());
        this.loadFormGroupValues('schoolworkexp', schoolworkexp, this.initSchoolWorkExp());
        this.loadFormGroupValues('courseDescriptions', courseDescriptions, this.initCourseDescription());
        this.loadFormGroupValues('paperReviewing', paperReviewing, this.initPaperReviewing());
        this.loadFormGroupValues('commendation', commendation, this.initCommd());
        this.loadFormGroupValues('researchInterests', researchInterests, this.initResearchInterests());
        this.loadFormGroupValues('commissionedProject', commissionedProject, this.initCommissionedProject());
        this.loadFormGroupValues('conferencesAttended', conferencesAttended, this.initConferenceAttended());
        this.loadFormGroupValues('papersRead', papersRead, this.initPaper());
        this.loadFormGroupValues('refrees', refrees, this.initRefree());
        this.loadFormGroupValues('membershipOfProfessionalBodies', membershipOfProfessionalBodies, this.initMembershipOfProfessionalBodies());
        this.loadFormGroupValues('specialAssignmentATE', specialAssignmentATE, this.initSpecialAssignemtATE());
        this.loadFormGroupValues('trainingProgramme', trainingProgramme, this.initTrainingProgramme());
        this.loadFormGroupValues('supervisionPost', supervisionPost, this.initSupervisionPost());
        this.loadFormGroupValues('supervisionPostPart', supervisionPostPart, this.initSupervisionPostPart());
        this.loadFormGroupValues('extraCurriculaActivities', extraCurriculaActivities, this.initExtraCurriculaActivities());
        this.loadFormGroupValues('specialAssignmentMC', specialAssignmentMC, this.initSpecialAssignemtMC());
        this.loadFormGroupValues('specialAssignmentCS', specialAssignmentCS, this.initSpecialAssignemtCS());
        this.loadFormGroupValuesPub('articlesAcc', articlesAcc, this.initArticleAcc());
        this.loadFormGroupValuesPub('books', books, this.initBook());
        this.loadFormGroupValuesPub('bookArticlesOrChapter', bookArticlesOrChapter, this.initBookArticlesOrChapter());
        this.loadFormGroupValuesPub('papers', papers, this.initPaper());
        this.loadFormGroupValuesPub('researchInProgress', researchInProgress, this.initResearchInProgress());
        this.loadFormGroupValuesPub('technicalReport', technicalReport, this.initTechnicalReport());
        this.loadFormGroupValuesPub('thesisDissPro', thesisDissPro, this.initThesisDissPro());
        this.loadFormGroupValuesPub('artInP', artInP, this.initArtInP());
        this.loadFormGroupValuesPub('editedConf', editedConf, this.initEditedCP());
        this.masterFormGroupings.get('dateAndSignature').setValue(dateAndSignature);
        var educationArray = eaphiFormValues['educationArray'];
        var academicQualifications = eaphiFormValues['academicQualifications'];
        var professionalQualifications = eaphiFormValues['professionalQualifications'];
        var prizes = eaphiFormValues['prizes'];
        var scholarships = eaphiFormValues['scholarships'];
        var honours = eaphiFormValues['honours'];
        var nationalRecognitions = eaphiFormValues['nationalRecognitions'];
        var internationalRecognitions = eaphiFormValues['internationalRecognitions'];
        this.loadFormGroupValuesE('educationArray', educationArray, this.initeaphni());
        this.loadFormGroupValuesE('academicQualifications', academicQualifications, this.initAcademicQualification());
        this.loadFormGroupValuesE('professionalQualifications', professionalQualifications, this.initProfessionalQualification());
        this.loadFormGroupValuesE('prizes', prizes, this.initPHNI());
        this.loadFormGroupValuesE('scholarships', scholarships, this.initPHNI());
        this.loadFormGroupValuesE('honours', honours, this.initPHNI());
        this.loadFormGroupValuesE('nationalRecognitions', nationalRecognitions, this.initPHNI());
        this.loadFormGroupValuesE('internationalRecognitions', internationalRecognitions, this.initPHNI());
        this.personalInformation.patchValue(personalFormValues); // set the partial value of the formgroup
        this.loadFormGroupValuesPer('phoneNumbers', phoneNumbers, this.initPhoneNumber());
        this.loadFormGroupValuesPer('contactAddresses', contactAddresses, this.initContactAddress());
        this.loadFormGroupValuesPer('emailAddresses', emailAddresses, this.initEmailAdress());
    };
    CvDocumentationComponent.prototype.loadFormGroupValues = function (formGroupName, formGroupObject, formGroup) {
        this.masterFormGroupings.get(formGroupName).removeAt(0);
        for (var index = 0; index < formGroupObject.length; index++) {
            var formValue = formGroup;
            formValue.setValue(formGroupObject[index]);
            this.masterFormGroupings.get(formGroupName).push(formValue);
        }
        return true;
    };
    CvDocumentationComponent.prototype.loadFormGroupValuesE = function (formGroupName, formGroupObject, formGroup) {
        this.eaphni.get(formGroupName).removeAt(0);
        for (var index = 0; index < formGroupObject.length; index++) {
            var formValue = formGroup;
            formValue.setValue(formGroupObject[index]);
            this.eaphni.get(formGroupName).push(formValue);
        }
        return true;
    };
    CvDocumentationComponent.prototype.loadFormGroupValuesPub = function (formGroupName, formGroupObject, formGroup) {
        this.masterFormGroupings.get('publications').get(formGroupName).removeAt(0);
        for (var index = 0; index < formGroupObject.length; index++) {
            var formValue = formGroup;
            formValue.setValue(formGroupObject[index]);
            this.masterFormGroupings.get('publications').get(formGroupName).push(formValue);
        }
        return true;
    };
    CvDocumentationComponent.prototype.loadFormGroupValuesPer = function (formGroupName, formGroupObject, formGroup) {
        this.personalInformation.get(formGroupName).removeAt(0);
        for (var index = 0; index < formGroupObject.length; index++) {
            var formValue = formGroup;
            formValue.setValue(formGroupObject[index]);
            this.personalInformation.get(formGroupName).push(formValue);
        }
        return true;
    };
    CvDocumentationComponent.prototype.FORM_INIT = function () {
        this.personalInformation = this.fb.group({
            nameInFull: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            placeOfBirth: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            age: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('\\d*')]),
            sex: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            maritalStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp('[a-zA-Z]*'))]),
            nationality: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp('[a-zA-Z]*'))]),
            townAndStateOfOrigin: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp('[a-zA-Z]*'))]),
            lga: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp('[a-zA-Z]*'))]),
            phoneNumbers: this.fb.array([this.initPhoneNumber()]),
            emailAddresses: this.fb.array([this.initEmailAdress()]),
            contactAddresses: this.fb.array([this.initContactAddress()]),
            presentPostAndSalary: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp('[a-zA-Z]*', 'g'))]),
            postOnPromotion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp('[a-zA-Z]*'))]),
        });
        this.loginCredentials = this.fb.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            dateReg: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](Date())
        });
        this.loginCredentials.get('username').valueChanges.subscribe(function (data) {
            // console.log('has ERROR ', this.loginCredentials.get('username').hasError('exists'));
        });
        /**
         * The survey form questions sections
         */
        this.eaphni = this.fb.group({
            educationArray: this.fb.array([this.initeaphni()]),
            academicQualifications: this.fb.array([this.initAcademicQualification()]),
            professionalQualifications: this.fb.array([this.initProfessionalQualification()]),
            prizes: this.fb.array([this.initPHNI()]),
            scholarships: this.fb.array([this.initPHNI()]),
            honours: this.fb.array([this.initPHNI()]),
            nationalRecognitions: this.fb.array([this.initPHNI()]),
            internationalRecognitions: this.fb.array([this.initPHNI()]),
        });
        /***********************************************
         * INITIALISATIONS
         */
        this.workExperience = this.fb.array([this.initWorkExp()]);
        this.otherWorkExperience = this.fb.array([this.initWorkExp()]);
        this.schoolworkexp = this.fb.array([this.initSchoolWorkExp()]);
        this.commendation = this.fb.array([this.initCommd()]);
        this.courseDescriptions = this.fb.array([this.initCourseDescription()]);
        this.paperReviewing = this.fb.array([this.initPaperReviewing()]);
        // this.publications = this.fb.array([this.initPub()]);
        this.publications = this.fb.group({
            // articles in learned journals
            // articlesInLeanedJournals: this.fb.array([this.initArticlesInLearnedJournals()]),
            artInP: this.fb.array([this.initArtInP()]),
            articlesAcc: this.fb.array([this.initArticleAcc()]),
            books: this.fb.array([this.initBook()]),
            bookArticlesOrChapter: this.fb.array([this.initBookArticlesOrChapter()]),
            editedConf: this.fb.array([this.initEditedCP()]),
            researchInProgress: this.fb.array([this.initResearchInProgress()]),
            technicalReport: this.fb.array([this.initTechnicalReport()]),
            thesisDissPro: this.fb.array([this.initThesisDissPro()]),
            papers: this.fb.array([this.initPaper()]),
        });
        this.refrees = this.fb.array([this.initRefree()]);
        this.dateAndSignature = this.fb.group({
            dateSigned: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            signature: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.pointSigned),
            base64Image: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.membershipOfProfessionalBodies = this.fb.array([this.initMembershipOfProfessionalBodies()]);
        this.specialAssignmentATE = this.fb.array([this.initSpecialAssignemtATE()]);
        this.specialAssignmentMC = this.fb.array([this.initSpecialAssignemtMC()]);
        this.specialAssignmentCS = this.fb.array([this.initSpecialAssignemtCS()]);
        this.trainingProgramme = this.fb.array([this.initTrainingProgramme()]);
        this.extraCurriculaActivities = this.fb.array([this.initExtraCurriculaActivities()]);
        this.researchInterests = this.fb.array([this.initResearchInterests()]);
        this.researchInProgress = this.fb.array([this.initResearchInProgress()]);
        this.commissionedProject = this.fb.array([this.initCommissionedProject()]);
        this.fellowship = this.fb.array([this.initFellowship()]);
        this.supervisionPost = this.fb.array([this.initSupervisionPost()]);
        this.supervisionPostPart = this.fb.array([this.initSupervisionPostPart()]);
        this.conferencesAttended = this.fb.array([this.initConferenceAttended()]);
        this.papersRead = this.fb.array([this.initPaper()]);
        this.masterFormGroupings = this.fb.group({
            workExperience: this.workExperience,
            otherWorkExperience: this.otherWorkExperience,
            schoolworkexp: this.schoolworkexp,
            courseDescriptions: this.courseDescriptions,
            paperReviewing: this.paperReviewing,
            commendation: this.commendation,
            researchInterests: this.researchInterests,
            commissionedProject: this.commissionedProject,
            publications: this.publications,
            conferencesAttended: this.conferencesAttended,
            papersRead: this.papersRead,
            refrees: this.refrees,
            membershipOfProfessionalBodies: this.membershipOfProfessionalBodies,
            specialAssignmentATE: this.specialAssignmentATE,
            specialAssignmentMC: this.specialAssignmentMC,
            specialAssignmentCS: this.specialAssignmentCS,
            trainingProgramme: this.trainingProgramme,
            fellowship: this.fellowship,
            supervisionPost: this.supervisionPost,
            supervisionPostPart: this.supervisionPostPart,
            extraCurriculaActivities: this.extraCurriculaActivities,
            dateAndSignature: this.dateAndSignature,
        });
        // the form fields values to send to the server 
        this.payGram.personalInformation = {};
        this.payGram.eaphni = {};
        this.payGram.masterFormGroupings = {};
        this.finalStage = this.fb.group({});
    };
    /**
     *
     */
    CvDocumentationComponent.prototype.addErrorMessage = function (details) {
        this.messageService.add({ severity: 'error', summary: 'Your File WAS NOT uploaded successfully', detail: details });
    };
    /**
     *
     * @param details
     */
    CvDocumentationComponent.prototype.addSuccessMessage = function (details) {
        this.messageService.add({ severity: 'success', summary: 'Your Fileuploaded successfully', detail: details });
    };
    /**
     *
     * @param event
     */
    CvDocumentationComponent.prototype.onStrengthChanged = function (event) {
    };
    CvDocumentationComponent.prototype.asynchronousValidators = function () {
        var _this = this;
        /***********************************
         * Custom asynchronous validator
         * *********************************
         */
        this.loginCredentials.get('username').valueChanges.subscribe(function (data) {
            _this.httpRequest.checkUsername(_this.loginCredentials.get('username').value).subscribe(function (dat) {
                if (dat.exists) {
                    _this.usernameCond = true;
                }
                else {
                    _this.usernameCond = false;
                }
            });
        });
    };
    CvDocumentationComponent.prototype.populateFormValues = function () {
        // save in local storage here
        // this.personalInformation.patchValue(JSON.parse(window.localStorage.getItem('personalInformation')));
        // this.loginCredentials.patchValue(JSON.parse(window.localStorage.getItem('loginCredentials')));
        // this.eaphni.patchValue(JSON.parse(window.localStorage.getItem('eaphni')));
        // this.masterFormGroupings.patchValue(JSON.parse(window.localStorage.getItem('masterFormGroupings')));
        // console.log(JSON.parse(window.localStorage.getItem('masterFormGroupings')));
        this.getFormValuesFromLocalStorage();
    };
    /**
     * This public function saves all the input form values the
     * user as entered into the CV Documentation Page
     */
    CvDocumentationComponent.prototype.saveAllFormsValues = function () {
        this.dateAndSignature.controls.signature.setValue(this.signaturePad.toData());
        window.localStorage.setItem('personalInformation', JSON.stringify(this.personalInformation.value));
        window.localStorage.setItem('loginCredentials', JSON.stringify(this.loginCredentials.value));
        window.localStorage.setItem('eaphni', JSON.stringify(this.eaphni.value));
        window.localStorage.setItem('masterFormGroupings', JSON.stringify(this.masterFormGroupings.value));
        this.messageService.add({
            severity: 'success', summary: 'Details Saved Successfully',
            detail: 'Your Form Fields inputs have been saved'
        });
        // console.log(JSON.parse(window.localStorage.getItem('personalInformation')));
        // console.log(JSON.parse(window.localStorage.getItem('loginCredentials')));
        // console.log(JSON.parse(window.localStorage.getItem('eaphni')));
        // console.log(JSON.parse(window.localStorage.getItem('masterFormGroupings')));
    };
    /**
     * Delete all the saved values inside the local storage of the browser
     */
    CvDocumentationComponent.prototype.deleteAllSavedFormsValues = function () {
        // save in local storage here
        window.localStorage.removeItem('personalInformation');
        window.localStorage.removeItem('loginCredentials');
        window.localStorage.removeItem('eaphni');
        window.localStorage.removeItem('masterFormGroupings');
        this.messageService.add({
            severity: 'success', summary: 'Form Details Cleared Successfully',
            detail: 'Successful!'
        });
        setTimeout(function () {
            window.location.reload(true);
        }, 1000);
    };
    CvDocumentationComponent.prototype.getDataMasterFormGroupingsContols = function () {
        return {
            '0': this.masterFormGroupings.get('workExperience'),
            '1': this.masterFormGroupings.get('otherWorkExperience'),
            '2': this.masterFormGroupings.get('schoolworkexp'),
            '3': this.masterFormGroupings.get('courseDescriptions'),
            '4': this.masterFormGroupings.get('paperReviewing'),
            '5': this.masterFormGroupings.get('commendation'),
            '6': this.masterFormGroupings.get('researchInterests'),
            '7': this.masterFormGroupings.get('commissionedProject'),
            '8': this.masterFormGroupings.get('publications'),
            '9': this.masterFormGroupings.get('conferencesAttended'),
            '10': this.masterFormGroupings.get('papersRead'),
            '11': this.masterFormGroupings.get('refrees'),
            '12': this.masterFormGroupings.get('membershipOfProfessionalBodies'),
            '13': this.masterFormGroupings.get('specialAssignmentATE'),
            '14': this.masterFormGroupings.get('trainingProgramme'),
            '15': this.masterFormGroupings.get('fellowship'),
            '16': this.masterFormGroupings.get('supervisionPost'),
            '17': this.masterFormGroupings.get('supervisionPostPart'),
            '18': this.masterFormGroupings.get('extraCurriculaActivities'),
            '19': this.masterFormGroupings.get('dateAndSignature'),
            '20': this.masterFormGroupings.get('publications').get('articlesAcc'),
            '21': this.masterFormGroupings.get('publications').get('books'),
            '22': this.masterFormGroupings.get('publications').get('bookArticlesOrChapter'),
            '23': this.masterFormGroupings.get('publications').get('papers'),
            '24': this.masterFormGroupings.get('publications').get('researchInProgress'),
            '25': this.masterFormGroupings.get('publications').get('technicalReport'),
            '26': this.masterFormGroupings.get('publications').get('thesisDissPro'),
            '27': this.masterFormGroupings.get('publications').get('articlesInLeanedJournals'),
            '28': this.masterFormGroupings.get('specialAssignmentMC'),
            '29': this.masterFormGroupings.get('specialAssignmentCS'),
            '30': this.masterFormGroupings.get('publications').get('artInP'),
            '31': this.masterFormGroupings.get('publications').get('editedConf')
        };
    };
    CvDocumentationComponent.prototype.getEaphiFormControls = function () {
        return {
            '0': this.eaphni.get('educationArray'),
            '1': this.eaphni.get('academicQualifications'),
            '2': this.eaphni.get('professionalQualifications'),
            '3': this.eaphni.get('prizes'),
            '4': this.eaphni.get('scholarships'),
            '5': this.eaphni.get('honours'),
            '6': this.eaphni.get('nationalRecognitions'),
            '7': this.eaphni.get('internationalRecognitions'),
        };
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular2_signaturepad_signature_pad__WEBPACK_IMPORTED_MODULE_3__["SignaturePad"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular2_signaturepad_signature_pad__WEBPACK_IMPORTED_MODULE_3__["SignaturePad"])
    ], CvDocumentationComponent.prototype, "signaturePad", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('prizes'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", primeng_fileupload__WEBPACK_IMPORTED_MODULE_6__["FileUpload"])
    ], CvDocumentationComponent.prototype, "prizesF", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('commendation'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", primeng_fileupload__WEBPACK_IMPORTED_MODULE_6__["FileUpload"])
    ], CvDocumentationComponent.prototype, "commendationF", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nationalRecognition'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", primeng_fileupload__WEBPACK_IMPORTED_MODULE_6__["FileUpload"])
    ], CvDocumentationComponent.prototype, "nationalRecognitionF", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('internationalRecognitions'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", primeng_fileupload__WEBPACK_IMPORTED_MODULE_6__["FileUpload"])
    ], CvDocumentationComponent.prototype, "internationalRecognitionsF", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('academicQualifications'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", primeng_fileupload__WEBPACK_IMPORTED_MODULE_6__["FileUpload"])
    ], CvDocumentationComponent.prototype, "academicQualificationsF", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('specialAssignements'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", primeng_fileupload__WEBPACK_IMPORTED_MODULE_6__["FileUpload"])
    ], CvDocumentationComponent.prototype, "specialAssignemtnsF", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('publications'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", primeng_fileupload__WEBPACK_IMPORTED_MODULE_6__["FileUpload"])
    ], CvDocumentationComponent.prototype, "publicationsF", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('extraCurriculaActivities'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", primeng_fileupload__WEBPACK_IMPORTED_MODULE_6__["FileUpload"])
    ], CvDocumentationComponent.prototype, "extraCurriculaActivitiesF", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('educationalCertificates'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", primeng_fileupload__WEBPACK_IMPORTED_MODULE_6__["FileUpload"])
    ], CvDocumentationComponent.prototype, "educationalCertificatesF", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('honours'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", primeng_fileupload__WEBPACK_IMPORTED_MODULE_6__["FileUpload"])
    ], CvDocumentationComponent.prototype, "honoursF", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('awards'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", primeng_fileupload__WEBPACK_IMPORTED_MODULE_6__["FileUpload"])
    ], CvDocumentationComponent.prototype, "awardsF", void 0);
    CvDocumentationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cv-documentation',
            template: __webpack_require__(/*! ./cv-documentation.component.html */ "./src/app/cv-documentation/cv-documentation.component.html"),
            styles: [__webpack_require__(/*! ./cv-documentation.component.css */ "./src/app/cv-documentation/cv-documentation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _servies_custom_http_services_service__WEBPACK_IMPORTED_MODULE_4__["CustomHttpServicesService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"], _servies_cache_service__WEBPACK_IMPORTED_MODULE_8__["CacheService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], CvDocumentationComponent);
    return CvDocumentationComponent;
}());



/***/ }),

/***/ "./src/app/edit-cv/edit-cv.component.css":
/*!***********************************************!*\
  !*** ./src/app/edit-cv/edit-cv.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtY3YvZWRpdC1jdi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/edit-cv/edit-cv.component.html":
/*!************************************************!*\
  !*** ./src/app/edit-cv/edit-cv.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-pgs-header></app-pgs-header>\n\n\n<div class=\"version-drak\">\n  <section class=\"bg bg-2\" id=\"faq-area\">\n    <div class=\"faq-area-img\">\n      <img alt=\"\" class=\"img-fluid\" src=\"/assets/new-assets/images/faq-bg-1.png\"></div>\n    <div class=\"container\">\n      <div class=\"row\">\n\n        <div class=\"col-md-8 offset-md-2\">\n          <div class=\"section-heading text-center\">\n            <h5>Search or for your submitted Currivulum Vitae</h5>\n            <!-- <h2 class=\"text-white\">Welcome to Curriculum Vitae Module</h2> -->\n            <!-- <p class=\"text-light\">Please fill in correctly... you can preview after you are done!</p> -->\n          </div>\n        </div>\n      </div>\n\n\n      <div style=\"width: 100% ; height: 100%;\" [formGroup]=\"form\">\n          <mat-card>\n            <mat-card-header>\n              <mat-card-title>EDIT CV OR PREVIEW YOUR SUBMITTED CV </mat-card-title>\n              <!-- <mat-card-subtitle>subtitle</mat-card-subtitle> -->\n        \n            </mat-card-header>\n            <mat-card-content>\n        \n              <mat-accordion>\n                <mat-expansion-panel>\n                  <mat-expansion-panel-header>\n                    EDIT MY CV\n                  </mat-expansion-panel-header>\n        \n                  <mat-form-field appearance=\"outline\" class=\"width-90 marging-left-10 \">\n                    <mat-label>USERNAME</mat-label>\n                    <input matInput placeholder=\"label\" value=\"\" formcontolName=\"username\"\n                      placeholder=\"Enter your username here\">\n                  </mat-form-field>\n        \n                  <div class=\"margin-top-20\" style=\"float: right;\">\n                    <button mat-raised-button mat-raised-button color=\"primary\" style=\"min-width: 100px;\"> SEARCH EDIT CV\n                    </button>\n                  </div>\n        \n                </mat-expansion-panel>\n        \n                <mat-expansion-panel>\n                  <mat-expansion-panel-header>\n                    QUICK SEARCH MY CV AND VIEW\n                  </mat-expansion-panel-header>\n        \n                  <mat-form-field appearance=\"outline\" class=\"width-90 marging-left-10 \">\n                    <mat-label>USERNAME</mat-label>\n                    <input matInput placeholder=\"Enter your age here\" formControlName=\"username\"\n                      placeholder=\"Enter your username here\">\n                  </mat-form-field>\n        \n                  <div class=\"margin-top-20\" style=\"float: right;\">\n                    <button mat-raised-button mat-raised-button color=\"primary\" style=\"min-width: 100px;\"> SEARCH CV AND\n                      PREVIEW\n                    </button>\n                  </div>\n        \n        \n        \n                </mat-expansion-panel>\n              </mat-accordion>\n        \n        \n            </mat-card-content>\n            <mat-card-actions>\n              <!-- <button mat-button>Ok</button> -->\n            </mat-card-actions>\n          </mat-card>\n        </div>\n      </div>\n  </section>\n</div>\n\n\n\n\n\n<!-- \n\n<footer class=\"margin-top-30\">\n  <mat-toolbar color=\"primary\">\n    <mat-icon class=\"icon\">copy</mat-icon>\n    <span>\n      The Website Belongs to Federal University of Agriculture , Abeokuta , Nigeria &copy;\n    </span>\n  </mat-toolbar>\n</footer> -->\n"

/***/ }),

/***/ "./src/app/edit-cv/edit-cv.component.ts":
/*!**********************************************!*\
  !*** ./src/app/edit-cv/edit-cv.component.ts ***!
  \**********************************************/
/*! exports provided: EditCvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCvComponent", function() { return EditCvComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _servies_cache_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../servies/cache.service */ "./src/app/servies/cache.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servies_custom_http_services_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../servies/custom-http-services.service */ "./src/app/servies/custom-http-services.service.ts");







var EditCvComponent = /** @class */ (function () {
    function EditCvComponent(fb, httpRequest, messageService, cacheService, router) {
        this.fb = fb;
        this.httpRequest = httpRequest;
        this.messageService = messageService;
        this.cacheService = cacheService;
        this.router = router;
        this.form = this.fb.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].requiredTrue])
        });
    }
    EditCvComponent.prototype.ngOnInit = function () {
    };
    EditCvComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-cv',
            template: __webpack_require__(/*! ./edit-cv.component.html */ "./src/app/edit-cv/edit-cv.component.html"),
            styles: [__webpack_require__(/*! ./edit-cv.component.css */ "./src/app/edit-cv/edit-cv.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _servies_custom_http_services_service__WEBPACK_IMPORTED_MODULE_6__["CustomHttpServicesService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"], _servies_cache_service__WEBPACK_IMPORTED_MODULE_4__["CacheService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], EditCvComponent);
    return EditCvComponent;
}());



/***/ }),

/***/ "./src/app/file-aupploadings/file-aupploadings.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/file-aupploadings/file-aupploadings.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbGUtYXVwcGxvYWRpbmdzL2ZpbGUtYXVwcGxvYWRpbmdzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/file-aupploadings/file-aupploadings.component.html":
/*!********************************************************************!*\
  !*** ./src/app/file-aupploadings/file-aupploadings.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <div>\n    <h2>\n      PGS - File Uploads\n    </h2>\n  </div>\n</mat-toolbar>\n\n\n<app-cv-documentation></app-cv-documentation>\n\n\n<mat-card>\n  <mat-card-header>\n    <mat-card-title>{{username}} - File Uploads</mat-card-title>\n    <mat-card-subtitle>\n      <h4 style=\"color: rgb(255, 255, 255) ; margin-left: 0%\">Total Attached Files : {{totalFileAttached}}\n      </h4>\n    </mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-content>\n\n\n\n    <mat-horizontal-stepper>\n      <mat-step label=\"File Uploadings\">\n        <mat-accordion>\n\n          <mat-expansion-panel [expanded]=\"stepper === 0\" (opened)=\"setStepper(1)\" hideToggle>\n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                Educational Certificates File Uploads\n              </mat-panel-title>\n            </mat-expansion-panel-header>\n            <p-fileUpload auto=\"auto\" name=\"myfile[]\" #educationalCertificates multiple=\"multiple\" auto=\"auto\"\n              (onUpload)=\"onBasicUpload($event)\" (onError)=onBasicError($event)></p-fileUpload>\n\n            <mat-action-row>\n              <button mat-button color=\"primary\" (click)=\"nextStepper()\">Next</button>\n            </mat-action-row>\n\n          </mat-expansion-panel>\n\n\n\n          <mat-expansion-panel [expanded]=\"stepper === 1\" (opened)=\"setStepper(1)\" hideToggle>\n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                Academic And Professional Qualifications File Uploads\n              </mat-panel-title>\n            </mat-expansion-panel-header>\n            <p-fileUpload auto=\"auto\" name=\"myfile[]\" #academicAndProfessionalQaulification multiple=\"multiple\"\n              auto=\"auto\" (onUpload)=\"onBasicUpload($event)\" (onError)=onBasicError($event)></p-fileUpload>\n\n            <mat-action-row>\n              <button mat-raised-button color=\"warn\" (click)=\"prevStepper()\" class=\"marging-right-10\">Previous</button>\n              <button mat-raised-button color=\"primary\" (click)=\"nextStepper()\">Next</button>\n            </mat-action-row>\n\n          </mat-expansion-panel>\n\n\n\n          <mat-expansion-panel [expanded]=\"stepper === 2\" (opened)=\"setStepper(2)\" hideToggle>\n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                Prizes File Uploads\n              </mat-panel-title>\n            </mat-expansion-panel-header>\n            <p-fileUpload auto=\"auto\" name=\"myfile[]\" #prizes multiple=\"multiple\" auto=\"auto\"\n              (onUpload)=\"onBasicUpload($event)\" (onError)=onBasicError($event)></p-fileUpload>\n\n            <mat-action-row>\n              <button mat-raised-button color=\"warn\" (click)=\"prevStepper()\" class=\"marging-right-10\">Previous</button>\n              <button mat-raised-button color=\"primary\" (click)=\"nextStepper()\">Next</button>\n            </mat-action-row>\n\n          </mat-expansion-panel>\n\n          <mat-expansion-panel [expanded]=\"stepper === 3\" (opened)=\"setStepper(3)\" hideToggle>\n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                Honours File Uploads\n              </mat-panel-title>\n            </mat-expansion-panel-header>\n            <p-fileUpload auto=\"auto\" name=\"myfile[]\" #honours multiple=\"multiple\" auto=\"auto\"\n              (onUpload)=\"onBasicUpload($event)\" (onError)=onBasicError($event)></p-fileUpload>\n\n            <mat-action-row>\n              <button mat-raised-button color=\"warn\" (click)=\"prevStepper()\" class=\"marging-right-10\">Previous</button>\n              <button mat-raised-button color=\"primary\" (click)=\"nextStepper()\">Next</button>\n            </mat-action-row>\n\n          </mat-expansion-panel>\n\n\n\n          <mat-expansion-panel [expanded]=\"stepper === 4\" (opened)=\"setStepper(4)\" hideToggle>\n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                National Recognitions File Uploads\n              </mat-panel-title>\n            </mat-expansion-panel-header>\n            <p-fileUpload auto=\"auto\" name=\"myfile[]\" #nationalRecognition multiple=\"multiple\" auto=\"auto\"\n              (onUpload)=\"onBasicUpload($event)\" (onError)=onBasicError($event)></p-fileUpload>\n\n            <mat-action-row>\n              <button mat-raised-button color=\"warn\" (click)=\"prevStepper()\" class=\"marging-right-10\">Previous</button>\n              <button mat-raised-button color=\"primary\" (click)=\"nextStepper()\">Next</button>\n            </mat-action-row>\n\n          </mat-expansion-panel>\n\n\n          <mat-expansion-panel [expanded]=\"stepper === 5\" (opened)=\"setStepper(5)\" hideToggle>\n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                International Recognitions File Uploads\n              </mat-panel-title>\n            </mat-expansion-panel-header>\n            <p-fileUpload auto=\"auto\" name=\"myfile[]\" #internationalRecognitions multiple=\"multiple\" auto=\"auto\"\n              (onUpload)=\"onBasicUpload($event)\" (onError)=onBasicError($event)></p-fileUpload>\n\n            <mat-action-row>\n              <button mat-raised-button color=\"warn\" (click)=\"prevStepper()\" class=\"marging-right-10\">Previous</button>\n              <button mat-raised-button color=\"primary\" (click)=\"nextStepper()\">Next</button>\n            </mat-action-row>\n\n          </mat-expansion-panel>\n\n\n\n\n          <mat-expansion-panel [expanded]=\"stepper === 6\" (opened)=\"setStepper(6)\" hideToggle>\n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                Commendations File Uploads\n              </mat-panel-title>\n            </mat-expansion-panel-header>\n            <p-fileUpload auto=\"auto\" name=\"myfile[]\" #commendation multiple=\"multiple\" auto=\"auto\"\n              (onUpload)=\"onBasicUpload($event)\" (onError)=onBasicError($event)></p-fileUpload>\n\n            <mat-action-row>\n              <button mat-raised-button color=\"warn\" (click)=\"prevStepper()\" class=\"marging-right-10\">Previous</button>\n              <button mat-raised-button color=\"primary\" (click)=\"nextStepper()\">Next</button>\n            </mat-action-row>\n\n          </mat-expansion-panel>\n\n\n          <mat-expansion-panel [expanded]=\"stepper === 7\" (opened)=\"setStepper(7)\" hideToggle>\n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                Publications File Uploads\n              </mat-panel-title>\n            </mat-expansion-panel-header>\n            <p-fileUpload auto=\"auto\" name=\"myfile[]\" #publications multiple=\"multiple\" auto=\"auto\"\n              (onUpload)=\"onBasicUpload($event)\" (onError)=onBasicError($event)></p-fileUpload>\n\n            <mat-action-row>\n              <button mat-raised-button color=\"warn\" (click)=\"prevStepper()\" class=\"marging-right-10\">Previous</button>\n              <button mat-raised-button color=\"primary\" (click)=\"nextStepper()\">Next</button>\n            </mat-action-row>\n\n          </mat-expansion-panel>\n\n\n          <mat-expansion-panel [expanded]=\"stepper === 8\" (opened)=\"setStepper(8)\" hideToggle>\n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                Special Assignments File Uploads\n              </mat-panel-title>\n            </mat-expansion-panel-header>\n            <p-fileUpload auto=\"auto\" name=\"myfile[]\" #specialAssignements multiple=\"multiple\" auto=\"auto\"\n              (onUpload)=\"onBasicUpload($event)\" (onError)=onBasicError($event)></p-fileUpload>\n\n\n            <mat-action-row>\n              <button mat-raised-button color=\"warn\" (click)=\"prevStepper()\" class=\"marging-right-10\">Previous</button>\n              <button mat-raised-button color=\"primary\" (click)=\"nextStepper()\">Next</button>\n            </mat-action-row>\n\n          </mat-expansion-panel>\n\n\n\n\n          <mat-expansion-panel [expanded]=\"stepper === 9\" (opened)=\"setStepper(9)\" hideToggle>\n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                Extra Curricula Activities File Uploads\n              </mat-panel-title>\n            </mat-expansion-panel-header>\n            <p-fileUpload auto=\"auto\" name=\"myfile[]\" #extraCurriculaActivities multiple=\"multiple\" auto=\"auto\"\n              (onUpload)=\"onBasicUpload($event)\" (onError)=onBasicError($event)></p-fileUpload>\n\n            <mat-action-row>\n              <button mat-raised-button color=\"warn\" (click)=\"prevStepper()\" class=\"marging-right-10\">Previous</button>\n              <button mat-raised-button color=\"primary\" (click)=\"nextStepper()\">Next</button>\n            </mat-action-row>\n          </mat-expansion-panel>\n\n\n\n          <mat-expansion-panel [expanded]=\"stepper === 10\" (opened)=\"setStepper(10)\" hideToggle>\n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                Awards File Uploads\n              </mat-panel-title>\n            </mat-expansion-panel-header>\n            <p-fileUpload auto=\"auto\" name=\"myfile[]\" #awards multiple=\"multiple\" auto=\"auto\"\n              (onUpload)=\"onBasicUpload($event)\" (onError)=onBasicError($event)></p-fileUpload>\n\n\n            <mat-action-row>\n              <button mat-raised-button color=\"warn\" (click)=\"prevStepper()\" class=\"marging-right-10\">Previous</button>\n              <button mat-raised-button color=\"primary\" (click)=\"nextStepper()\">Next</button>\n            </mat-action-row>\n\n          </mat-expansion-panel>\n\n\n\n        </mat-accordion>\n\n        <mat-action-row>\n          <button mat-raised-button color=\"primary\" (click)=\"done()\">Done</button>\n        </mat-action-row>\n\n      </mat-step>\n    </mat-horizontal-stepper>\n\n\n\n\n\n\n  </mat-card-content>\n  <mat-card-actions>\n  </mat-card-actions>\n</mat-card>\n\n<p-toast position=\"top-right\"></p-toast>\n"

/***/ }),

/***/ "./src/app/file-aupploadings/file-aupploadings.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/file-aupploadings/file-aupploadings.component.ts ***!
  \******************************************************************/
/*! exports provided: FileAupploadingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileAupploadingsComponent", function() { return FileAupploadingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/fileupload */ "./node_modules/primeng/fileupload.js");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_fileupload__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _servies_cache_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../servies/cache.service */ "./src/app/servies/cache.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var FileAupploadingsComponent = /** @class */ (function () {
    function FileAupploadingsComponent(messageService, cacheService, activatedRoute, router) {
        this.messageService = messageService;
        this.cacheService = cacheService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    FileAupploadingsComponent.prototype.ngOnInit = function () {
        this.username = this.activatedRoute.snapshot.params['username'];
        this.loadHandlers();
        if (this.username === null) {
            this.router.navigate(['/home']);
        }
    };
    /**
     *
     * @param event
     */
    FileAupploadingsComponent.prototype.onBasicUpload = function (event) {
        console.log('File was uploaded successfully!', event.files.length);
        this.addSuccessMessage('Attachments was successful');
        this.totalFileAttached += event.files.length;
    };
    /**
     *
     * @param event
     */
    FileAupploadingsComponent.prototype.onBasicError = function (event) {
        console.log(event);
        this.addErrorMessage('File(s) failed to attach');
    };
    /**
     *
     */
    FileAupploadingsComponent.prototype.addErrorMessage = function (details) {
        this.messageService.add({ severity: 'error', summary: 'Your File WAS NOT uploaded successfully', detail: details });
    };
    /**
     *
     * @param details
     */
    FileAupploadingsComponent.prototype.addSuccessMessage = function (details) {
        this.messageService.add({ severity: 'success', summary: 'Your Fileuploaded successfully', detail: details });
    };
    FileAupploadingsComponent.prototype.loadHandlers = function () {
        this.prizesF.url = this.cacheService.serverURL + '/upload/prizes/' +
            this.username;
        this.commendationF.url = this.cacheService.serverURL + '/upload/commendations/' +
            this.username;
        this.nationalRecognitionF.url = this.cacheService.serverURL + '/upload/national-recognitions/' +
            this.username;
        this.internationalRecognitionsF.url = this.cacheService.serverURL + '/upload/international-recognitions/' +
            this.username;
        this.academicAndProfessionalQaulificationF.url = this.cacheService.serverURL + '/upload/national-and-professional-qaulifications/' +
            this.username;
        this.specialAssignemtnsF.url = this.cacheService.serverURL + '/upload/special-assignments/' +
            this.username;
        this.publicationsF.url = this.cacheService.serverURL + '/upload/publications/' +
            this.username;
        this.extraCurriculaActivitiesF.url = this.cacheService.serverURL + '/upload/extra-curricula-activities/' +
            this.username;
        this.educationalCertificatesF.url = this.cacheService.serverURL + '/upload/educational-certificates/' +
            this.username;
        this.honoursF.url = this.cacheService.serverURL + '/upload/honours/' +
            this.username;
        this.awardsF.url = this.cacheService.serverURL + '/upload/awards/' +
            this.username;
    };
    /**
     *
     * @param index
     */
    FileAupploadingsComponent.prototype.setStepper = function (index) {
        this.stepper = index;
    };
    FileAupploadingsComponent.prototype.nextStepper = function () {
        this.stepper++;
    };
    FileAupploadingsComponent.prototype.prevStepper = function () {
        this.stepper--;
    };
    FileAupploadingsComponent.prototype.done = function () {
        window.open('http://localhost:4300', 'self'); // take the user to the dashboard login
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('prizes'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", primeng_fileupload__WEBPACK_IMPORTED_MODULE_3__["FileUpload"])
    ], FileAupploadingsComponent.prototype, "prizesF", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('commendation'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", primeng_fileupload__WEBPACK_IMPORTED_MODULE_3__["FileUpload"])
    ], FileAupploadingsComponent.prototype, "commendationF", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nationalRecognition'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", primeng_fileupload__WEBPACK_IMPORTED_MODULE_3__["FileUpload"])
    ], FileAupploadingsComponent.prototype, "nationalRecognitionF", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('internationalRecognitions'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", primeng_fileupload__WEBPACK_IMPORTED_MODULE_3__["FileUpload"])
    ], FileAupploadingsComponent.prototype, "internationalRecognitionsF", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('academicAndProfessionalQaulification'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", primeng_fileupload__WEBPACK_IMPORTED_MODULE_3__["FileUpload"])
    ], FileAupploadingsComponent.prototype, "academicAndProfessionalQaulificationF", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('specialAssignements'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", primeng_fileupload__WEBPACK_IMPORTED_MODULE_3__["FileUpload"])
    ], FileAupploadingsComponent.prototype, "specialAssignemtnsF", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('publications'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", primeng_fileupload__WEBPACK_IMPORTED_MODULE_3__["FileUpload"])
    ], FileAupploadingsComponent.prototype, "publicationsF", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('extraCurriculaActivities'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", primeng_fileupload__WEBPACK_IMPORTED_MODULE_3__["FileUpload"])
    ], FileAupploadingsComponent.prototype, "extraCurriculaActivitiesF", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('educationalCertificates'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", primeng_fileupload__WEBPACK_IMPORTED_MODULE_3__["FileUpload"])
    ], FileAupploadingsComponent.prototype, "educationalCertificatesF", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('honours'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", primeng_fileupload__WEBPACK_IMPORTED_MODULE_3__["FileUpload"])
    ], FileAupploadingsComponent.prototype, "honoursF", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('awards'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", primeng_fileupload__WEBPACK_IMPORTED_MODULE_3__["FileUpload"])
    ], FileAupploadingsComponent.prototype, "awardsF", void 0);
    FileAupploadingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-file-aupploadings',
            template: __webpack_require__(/*! ./file-aupploadings.component.html */ "./src/app/file-aupploadings/file-aupploadings.component.html"),
            styles: [__webpack_require__(/*! ./file-aupploadings.component.css */ "./src/app/file-aupploadings/file-aupploadings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"],
            _servies_cache_service__WEBPACK_IMPORTED_MODULE_4__["CacheService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], FileAupploadingsComponent);
    return FileAupploadingsComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--start footer-->\n<footer id=\"footer\" class=\"bg-1\">\n  <div class=\"container\">\n    <div class=\"get-started\">\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-8\">\n          <h2>Ready to Create your CV?</h2>\n          <p class=\"text-light\">YOu promotion to your next title as been made easy</p>\n        </div>\n        <div class=\"col-lg-6 col-md-4\">\n          <a href=\"#\">Create New CV Now!</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"footer-cont\">\n      <div class=\"row\">\n        <!--start footer widget single-->\n        <div class=\"col-lg-3 col-md-6\">\n          <div class=\"footer-widget\">\n            <h3>PGS FUNAAB</h3>\n            <ul>\n              <li><a href=\"#\"><i class=\"icofont-long-arrow-right\"></i>Features</a></li>\n              <li><a href=\"#\"><i class=\"icofont-long-arrow-right\"></i>Download</a></li>\n              <li><a href=\"#\"><i class=\"icofont-long-arrow-right\"></i>Pricing Plan</a></li>\n              <li><a href=\"#\"><i class=\"icofont-long-arrow-right\"></i>Free Version</a></li>\n              <li><a href=\"#\"><i class=\"icofont-long-arrow-right\"></i>What our users say</a></li>\n              <li><a href=\"#\"><i class=\"icofont-long-arrow-right\"></i>Request a feature</a></li>\n              <li><a href=\"#\"><i class=\"icofont-long-arrow-right\"></i>Update Guide</a></li>\n            </ul>\n          </div>\n        </div>\n        <!--end footer widget single-->\n        <!--start footer widget single-->\n        <div class=\"col-lg-3 col-md-6\">\n          <div class=\"footer-widget\">\n            <h3>PGS FUNAAB</h3>\n            <ul>\n              <li><a href=\"#\"><i class=\"icofont-long-arrow-right\"></i>About us</a></li>\n              <li><a href=\"#\"><i class=\"icofont-long-arrow-right\"></i>Computer Science FUNAAB</a></li>\n              <li><a href=\"#\"><i class=\"icofont-long-arrow-right\"></i>FUNAAB Website</a></li>\n              <li><a href=\"#\"><i class=\"icofont-long-arrow-right\"></i>Aunthenticity Guarantee</a></li>\n              <li><a href=\"#\"><i class=\"icofont-long-arrow-right\"></i>Contact us</a></li>\n              <!-- <li><a href=\"#\"><i class=\"icofont-long-arrow-right\"></i>Resources</a></li> -->\n              <li><a href=\"#\"><i class=\"icofont-long-arrow-right\"></i>Privacy Policy</a></li>\n            </ul>\n          </div>\n        </div>\n        <!--end footer widget single-->\n        <!--start footer widget single-->\n        <div class=\"col-lg-3 col-md-6\">\n          <div class=\"footer-widget\">\n            <h3>Support</h3>\n            <ul>\n              <li><a href=\"#\"><i class=\"icofont-long-arrow-right\"></i>Help Center</a></li>\n              <li><a href=\"#\"><i class=\"icofont-long-arrow-right\"></i>Documentations</a></li>\n              <li><a href=\"#\"><i class=\"icofont-long-arrow-right\"></i>How it works</a></li>\n              <!-- <li><a href=\"#\"><i class=\"icofont-long-arrow-right\"></i>Community Forums</a></li> -->\n              <li><a href=\"#\"><i class=\"icofont-long-arrow-right\"></i>Terms of use</a></li>\n              <!-- <li><a href=\"#\"><i class=\"icofont-long-arrow-right\"></i>Accounts and Billing</a></li> -->\n              <li><a href=\"#\"><i class=\"icofont-long-arrow-right\"></i>Update Guide</a></li>\n            </ul>\n          </div>\n        </div>\n        <!--end footer widget single-->\n        <!--start footer widget single-->\n        <div class=\"col-lg-3 col-md-6\">\n          <div class=\"footer-widget\">\n            <h3>Learn More About PGS</h3>\n            <ul>\n              <!-- <li><a href=\"#\"><i class=\"icofont-long-arrow-right\"></i>Careers</a></li>\n                  <li><a href=\"#\"><i class=\"icofont-long-arrow-right\"></i>Partners</a></li>\n                  <li><a href=\"#\"><i class=\"icofont-long-arrow-right\"></i>Become Affiliates</a></li>\n                  <li><a href=\"#\"><i class=\"icofont-long-arrow-right\"></i>Become Partner</a></li>\n                  <li><a href=\"#\"><i class=\"icofont-long-arrow-right\"></i>Press Centre</a></li>\n                  <li><a href=\"#\"><i class=\"icofont-long-arrow-right\"></i>Advertise With Us</a></li> -->\n            </ul>\n          </div>\n        </div>\n        <!--end footer widget single-->\n      </div>\n    </div>\n    <div class=\"footer-copyright\">\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-7\">\n          <p>© 2019 FUNAAB | All right reserved.</p>\n        </div>\n        <div class=\"col-lg-6 col-md-5\">\n          <div class=\"footer-social text-right\">\n            <ul>\n              <li><a href=\"#\"><i class=\"icofont-facebook\"></i></a></li>\n              <li><a href=\"#\"><i class=\"icofont-linkedin\"></i></a></li>\n              <li><a href=\"#\"><i class=\"icofont-twitter\"></i></a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/guard/file-upload.guard.ts":
/*!********************************************!*\
  !*** ./src/app/guard/file-upload.guard.ts ***!
  \********************************************/
/*! exports provided: FileUploadGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadGuard", function() { return FileUploadGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servies_cache_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servies/cache.service */ "./src/app/servies/cache.service.ts");



var FileUploadGuard = /** @class */ (function () {
    function FileUploadGuard(cache) {
        this.cache = cache;
    }
    FileUploadGuard.prototype.canActivate = function (next, state) {
        if (this.cache.registered) {
            return true;
        }
        else {
            return false;
        }
    };
    FileUploadGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servies_cache_service__WEBPACK_IMPORTED_MODULE_2__["CacheService"]])
    ], FileUploadGuard);
    return FileUploadGuard;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-sidenav-container, mat-sidenav-content, mat-sidenav {\n    height: 100%;\n  }\n  \n  mat-sidenav {\n    width: 250px;\n  }\n  \n  a {\n    text-decoration: none;\n    color: white;\n  }\n  \n  a:hover,\n  a:active {\n    color: lightgray;\n  }\n  \n  .navigation-items {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    cursor: pointer;\n  }\n  \n  .icon {\n    display: inline-block;\n    height: 30px;\n    margin: 0 auto;\n    padding-right: 5px;\n    text-align: center;\n    vertical-align: middle;\n    width: 15%;\n  }\n  \n  .label {\n    display: inline-block;\n    line-height: 30px;\n    margin: 0;\n    width: 85%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0dBQ2Q7O0VBRUQ7SUFDRSxhQUFhO0dBQ2Q7O0VBRUQ7SUFDRSxzQkFBc0I7SUFDdEIsYUFBYTtHQUNkOztFQUVEOztJQUVFLGlCQUFpQjtHQUNsQjs7RUFFRDtJQUNFLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsVUFBVTtJQUNWLGdCQUFnQjtHQUNqQjs7RUFFRDtJQUNFLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFdBQVc7R0FDWjs7RUFFRDtJQUNFLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7R0FDWiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXNpZGVuYXYtY29udGFpbmVyLCBtYXQtc2lkZW5hdi1jb250ZW50LCBtYXQtc2lkZW5hdiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIFxuICBtYXQtc2lkZW5hdiB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICB9XG4gIFxuICBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIFxuICBhOmhvdmVyLFxuICBhOmFjdGl2ZSB7XG4gICAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgfVxuICBcbiAgLm5hdmlnYXRpb24taXRlbXMge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICAuaWNvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgd2lkdGg6IDE1JTtcbiAgfVxuICBcbiAgLmxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIHdpZHRoOiA4NSU7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container  color=\"primary\">\n  <mat-sidenav  #sidenav role=\"navigation\" >\n   <mat-nav-list>\n    <a mat-list-item>\n      <mat-icon class=\"icon\">input</mat-icon>\n      <span class=\"label\">Login</span>\n    </a>\n    <a mat-list-item\n        routerLink=\"/\">\n      <mat-icon class=\"icon\">home</mat-icon>\n        <span class=\"label\">Home</span>\n    </a>\n    <a mat-list-item\n      routerLink=\"/dashboard\">\n      <mat-icon class=\"icon\">dashboard</mat-icon>\n      <span class=\"label\">Dashboard</span>\n    </a>\n    <a  mat-list-item\n        type=\"button\">\n      <mat-icon class=\"icon\">input</mat-icon>\n      <span class=\"label\">LogOut</span>\n    </a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n     <div fxHide.gt-xs>\n       <button mat-icon-button (click)=\"sidenav.toggle()\">\n        <mat-icon>menu</mat-icon>\n      </button>\n    </div>\n     <div>\n       <a routerLink=\"/\">\n         Promotional Gradding System\n       </a>\n     </div>\n     \n    </mat-toolbar>\n    <main>\n      <router-outlet></router-outlet>\n    </main>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n\n<!-- <router-outlet></router-outlet> -->"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login-credentials/login-credentials.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/login-credentials/login-credentials.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLWNyZWRlbnRpYWxzL2xvZ2luLWNyZWRlbnRpYWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login-credentials/login-credentials.component.html":
/*!********************************************************************!*\
  !*** ./src/app/login-credentials/login-credentials.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <mat-card>\n  <mat-card-header>\n    <mat-card-title>Login</mat-card-title>\n    <mat-card-subtitle>Enter your correct login details</mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-content>\n\n  <mat-form-field>\n    <mat-icon>user</mat-icon>\n    <input matInput placeholder=\"Username\" value=\"\">\n  </mat-form-field> -->\n\n  <!-- <mat-form-field>\n    <mat-icon >lock</mat-icon>\n    <input matInput placeholder=\"Password\" value=\"value\">\n  </mat-form-field>\n  </mat-card-content>\n\n  <div style=\"display: flex ; align-items: center ; conta\">\n      <mat-card-actions>\n  <button mat-button (click)=\"login()\">Login</button> -->\n  <!-- </mat-card-actions>\n\n  </div>\n\n</mat-card> -->"

/***/ }),

/***/ "./src/app/login-credentials/login-credentials.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/login-credentials/login-credentials.component.ts ***!
  \******************************************************************/
/*! exports provided: LoginCredentialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginCredentialsComponent", function() { return LoginCredentialsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _servies_cache_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../servies/cache.service */ "./src/app/servies/cache.service.ts");
/* harmony import */ var _servies_custom_http_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../servies/custom-http-services.service */ "./src/app/servies/custom-http-services.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var LoginCredentialsComponent = /** @class */ (function () {
    function LoginCredentialsComponent(fb, httpRequest, messageService, cacheService, router) {
        this.fb = fb;
        this.httpRequest = httpRequest;
        this.messageService = messageService;
        this.cacheService = cacheService;
        this.router = router;
    }
    LoginCredentialsComponent.prototype.ngOnInit = function () {
    };
    LoginCredentialsComponent.prototype.FORMINIT = function () {
        // this.loginForm =
    };
    LoginCredentialsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-credentials',
            template: __webpack_require__(/*! ./login-credentials.component.html */ "./src/app/login-credentials/login-credentials.component.html"),
            styles: [__webpack_require__(/*! ./login-credentials.component.css */ "./src/app/login-credentials/login-credentials.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _servies_custom_http_services_service__WEBPACK_IMPORTED_MODULE_4__["CustomHttpServicesService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"], _servies_cache_service__WEBPACK_IMPORTED_MODULE_3__["CacheService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], LoginCredentialsComponent);
    return LoginCredentialsComponent;
}());



/***/ }),

/***/ "./src/app/login.guard.ts":
/*!********************************!*\
  !*** ./src/app/login.guard.ts ***!
  \********************************/
/*! exports provided: LoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return LoginGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servies_login_cache_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./servies/login-cache.service */ "./src/app/servies/login-cache.service.ts");



var LoginGuard = /** @class */ (function () {
    function LoginGuard(loginCache) {
        this.loginCache = loginCache;
    }
    LoginGuard.prototype.canActivate = function (next, state) {
        if (this.loginCache.loggedIn) { // allow the login is the username is verified from the server
            return true;
        }
        else {
            return false;
        }
    };
    LoginGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servies_login_cache_service__WEBPACK_IMPORTED_MODULE_2__["LoginCacheService"]])
    ], LoginGuard);
    return LoginGuard;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.text-field{\n    width: 400px;\n}\n\n.width-5{\n    width: 5%;\n}\n\n.width-10{\n    width: 10%;\n}\n\n.width-15{\n    width: 15%;\n}\n\n.width-20{\n    width: 20%;\n}\n\n.width-25{\n    width: 25%;\n}\n\n.width-30{\n    width: 30%;\n}\n\n.width-35{\n    width: 35%;\n}\n\n.width-40{\n    width: 40%;\n}\n\n.width-45{\n    width: 45%;\n}\n\n.width-50{\n    width: 50%;\n}\n\n.width-55{\n    width: 55%;\n}\n\n.width-60{\n    width: 60%;\n}\n\n.width-65{\n    width: 65%;\n}\n\n.width-70{\n    width: 70%;\n}\n\n.width-75{\n    width: 75%;\n}\n\n.width-80{\n    width: 80%;\n}\n\n.width-85{\n    width: 85%;\n}\n\n.width-90{\n    width: 90%;\n}\n\n.width-95{\n    width: 95%;\n}\n\n.width-100{\n    width: 100%;\n}\n\n.marging-left-5{\n    margin-left: 5px;\n}\n\n.marging-left-10{\n    margin-left: 10px;\n}\n\n.marging-left-15{\n    margin-left: 15px;\n}\n\n.marging-left-20{\n    margin-left: 20px;\n}\n\n.marging-left-25{\n    margin-left: 25px;\n}\n\n.marging-left-30{\n    margin-left: 30px;\n}\n\n.marging-left-35{\n    margin-left: 35px;\n}\n\n.marging-left-40{\n    margin-left: 40px;\n}\n\n.marging-left-45{\n    margin-left: 45px;\n}\n\n.marging-left-50{\n    margin-left: 50px;\n}\n\n.marging-left-55{\n    margin-left: 55px;\n}\n\n.marging-left-60{\n    margin-left: 60px;\n}\n\n.marging-left-65{\n    margin-left: 65px;\n}\n\n.marging-left-70{\n    margin-left: 70px;\n}\n\n.marging-left-75{\n    margin-left: 75px;\n}\n\n.marging-left-80{\n    margin-left: 80px;\n}\n\n.marging-left-85{\n    margin-left: 85px;\n}\n\n.marging-left-90{\n    margin-left: 90px;\n}\n\n.marging-left-95{\n    margin-left: 95px;\n}\n\n.marging-left-100{\n    margin-left: 100px;\n}\n\n.marging-right-5{\n    margin-right: 5px;\n}\n\n.marging-right-10{\n    margin-right: 10px;\n}\n\n.marging-right-15{\n    margin-right: 15px;\n}\n\n.marging-right-20{\n    margin-right: 20px;\n}\n\n.marging-right-25{\n    margin-right: 25px;\n}\n\n.marging-right-30{\n    margin-right: 30px;\n}\n\n.marging-right-35{\n    margin-right: 35px;\n}\n\n.marging-right-40{\n    margin-right: 40px;\n}\n\n.marging-right-45{\n    margin-right: 45px;\n}\n\n.marging-right-50{\n    margin-right: 50px;\n}\n\n.marging-right-55{\n    margin-right: 55px;\n}\n\n.marging-right-60{\n    margin-right: 60px;\n}\n\n.marging-right-65{\n    margin-right: 65px;\n}\n\n.marging-right-70{\n    margin-right: 70px;\n}\n\n.marging-right-75{\n    margin-right: 75px;\n}\n\n.marging-right-80{\n    margin-right: 80px;\n}\n\n.marging-right-85{\n    margin-right: 85px;\n}\n\n.marging-right-90{\n    margin-right: 90px;\n}\n\n.marging-right-95{\n    margin-right: 95px;\n}\n\n.marging-right-100{\n    margin-right: 100px;\n}\n\n.marging-5{\n    margin: 5px;\n}\n\n.marging-10{\n    margin: 10px;\n}\n\n.marging-top-left{\n    margin: 0px \n}\n\n.style{\n    flex-direction: column;\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap\n}\n\n.f {\n    clear: both;\n}\n\n.marging-top-20{\n    margin-top: 20%;\n    border-top: 2px solid blueviolet;\n}\n\n.marging-top-50{\n    margin-top: 50%;\n    border-top: 2px solid blueviolet;\n}\n\n.example-radio-group {\n  display: inline-flex;\n  flex-direction: column;\n}\n\n.example-radio-button {\n  margin: 5px;\n  margin-left: 0px;\n}\n\n.example-selected-value {\n  margin: 15px 0;\n}\n\n.custom-textarea {\n  height: auto;\n  /**margin-top: 20px; */\n  min-height: 20px;\n  overflow: auto;\n  padding: 5px;\n  font-size: 20px;\n  word-break: break-word;\n}\n\ninput .input{\n    font-size: 20px ;\n}\n\n.float-right {\n    float: right ;\n    margin:  0 100px;\n}\n\n.card-header-bg-color{\n    /* background-color: rgb(165, 14, 132) ;\n    color: white ;\n    font: 100px;\n    border-radius: 5px; */\n\n    color:rgba(0, 0, 0, 0.842) ;\n    font: 100px;\n    border-left: 30px blueviolet;\n}\n\n.overlay {\n        position: fixed; /* Sit on top of the page content */\n        display: block; /* Hidden by default */\n        width: 100%; /* Full width (cover the whole page) */\n        height: 100%; /* Full height (cover the whole page) */\n        top: 0; \n        left: 0;\n        right: 0;\n        bottom: 0;\n        background-color: rgba(0,0,0,0.5); /* Black background with opacity */\n        z-index: 2; /* Specify a stack order in case you're using a different order for other elements */\n        cursor: pointer; /* Add a pointer on hover */\n}\n\n.overlay_1 {\n    position: fixed; /* Sit on top of the page content */\n    display: block; /* Hidden by default */\n    width: 80%; /* Full width (cover the whole page) */\n    height: 100%; /* Full height (cover the whole page) */\n    top: 0; \n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(44, 9, 58, 0.979); /* Black background with opacity */\n    z-index: 2; /* Specify a stack order in case you're using a different order for other elements */\n    cursor: pointer; /* Add a pointer on hover */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksVUFBVTtDQUNiOztBQUFBO0lBQ0csV0FBVztDQUNkOztBQUFBO0lBQ0csV0FBVztDQUNkOztBQUFBO0lBQ0csV0FBVztDQUNkOztBQUFBO0lBQ0csV0FBVztDQUNkOztBQUNEO0lBQ0ksV0FBVztDQUNkOztBQUFBO0lBQ0csV0FBVztDQUNkOztBQUFBO0lBQ0csV0FBVztDQUNkOztBQUFBO0lBQ0csV0FBVztDQUNkOztBQUFBO0lBQ0csV0FBVztDQUNkOztBQUFBO0lBQ0csV0FBVztDQUNkOztBQUFBO0lBQ0csV0FBVztDQUNkOztBQUFBO0lBQ0csV0FBVztDQUNkOztBQUFBO0lBQ0csV0FBVztDQUNkOztBQUFBO0lBQ0csV0FBVztDQUNkOztBQUFBO0lBQ0csV0FBVztDQUNkOztBQUFBO0lBQ0csV0FBVztDQUNkOztBQUFBO0lBQ0csV0FBVztDQUNkOztBQUFBO0lBQ0csV0FBVztDQUNkOztBQUFBO0lBQ0csWUFBWTtDQUNmOztBQUdEO0lBQ0ksaUJBQWlCO0NBQ3BCOztBQUFBO0lBQ0csa0JBQWtCO0NBQ3JCOztBQUFBO0lBQ0csa0JBQWtCO0NBQ3JCOztBQUFBO0lBQ0csa0JBQWtCO0NBQ3JCOztBQUFBO0lBQ0csa0JBQWtCO0NBQ3JCOztBQUFBO0lBQ0csa0JBQWtCO0NBQ3JCOztBQUFBO0lBQ0csa0JBQWtCO0NBQ3JCOztBQUFBO0lBQ0csa0JBQWtCO0NBQ3JCOztBQUFBO0lBQ0csa0JBQWtCO0NBQ3JCOztBQUFBO0lBQ0csa0JBQWtCO0NBQ3JCOztBQUFBO0lBQ0csa0JBQWtCO0NBQ3JCOztBQUFBO0lBQ0csa0JBQWtCO0NBQ3JCOztBQUFBO0lBQ0csa0JBQWtCO0NBQ3JCOztBQUFBO0lBQ0csa0JBQWtCO0NBQ3JCOztBQUFBO0lBQ0csa0JBQWtCO0NBQ3JCOztBQUFBO0lBQ0csa0JBQWtCO0NBQ3JCOztBQUFBO0lBQ0csa0JBQWtCO0NBQ3JCOztBQUFBO0lBQ0csa0JBQWtCO0NBQ3JCOztBQUFBO0lBQ0csa0JBQWtCO0NBQ3JCOztBQUFBO0lBQ0csbUJBQW1CO0NBQ3RCOztBQUlEO0lBQ0ksa0JBQWtCO0NBQ3JCOztBQUFBO0lBQ0csbUJBQW1CO0NBQ3RCOztBQUFBO0lBQ0csbUJBQW1CO0NBQ3RCOztBQUFBO0lBQ0csbUJBQW1CO0NBQ3RCOztBQUFBO0lBQ0csbUJBQW1CO0NBQ3RCOztBQUFBO0lBQ0csbUJBQW1CO0NBQ3RCOztBQUFBO0lBQ0csbUJBQW1CO0NBQ3RCOztBQUFBO0lBQ0csbUJBQW1CO0NBQ3RCOztBQUFBO0lBQ0csbUJBQW1CO0NBQ3RCOztBQUFBO0lBQ0csbUJBQW1CO0NBQ3RCOztBQUFBO0lBQ0csbUJBQW1CO0NBQ3RCOztBQUFBO0lBQ0csbUJBQW1CO0NBQ3RCOztBQUFBO0lBQ0csbUJBQW1CO0NBQ3RCOztBQUFBO0lBQ0csbUJBQW1CO0NBQ3RCOztBQUFBO0lBQ0csbUJBQW1CO0NBQ3RCOztBQUFBO0lBQ0csbUJBQW1CO0NBQ3RCOztBQUFBO0lBQ0csbUJBQW1CO0NBQ3RCOztBQUFBO0lBQ0csbUJBQW1CO0NBQ3RCOztBQUFBO0lBQ0csbUJBQW1CO0NBQ3RCOztBQUFBO0lBQ0csb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksWUFBWTtDQUNmOztBQUFBO0lBQ0csYUFBYTtDQUNoQjs7QUFBQTtJQUNHLFdBQVc7Q0FDZDs7QUFBQTtJQUNHLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsK0JBQStCO0lBQy9CLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsaUNBQWlDO0NBQ3BDOztBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlDQUFpQztDQUNwQzs7QUFJRDtFQUNFLHFCQUFxQjtFQUNyQix1QkFBdUI7Q0FDeEI7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtDQUN4Qjs7QUFDRDtJQUNJLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSTs7OzBCQUdzQjs7SUFFdEIsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWiw2QkFBNkI7Q0FDaEM7O0FBR0Q7UUFDUSxnQkFBZ0IsQ0FBQyxvQ0FBb0M7UUFDckQsZUFBZSxDQUFDLHVCQUF1QjtRQUN2QyxZQUFZLENBQUMsdUNBQXVDO1FBQ3BELGFBQWEsQ0FBQyx3Q0FBd0M7UUFDdEQsT0FBTztRQUNQLFFBQVE7UUFDUixTQUFTO1FBQ1QsVUFBVTtRQUNWLGtDQUFrQyxDQUFDLG1DQUFtQztRQUN0RSxXQUFXLENBQUMscUZBQXFGO1FBQ2pHLGdCQUFnQixDQUFDLDRCQUE0QjtDQUNwRDs7QUFFRDtJQUNJLGdCQUFnQixDQUFDLG9DQUFvQztJQUNyRCxlQUFlLENBQUMsdUJBQXVCO0lBQ3ZDLFdBQVcsQ0FBQyx1Q0FBdUM7SUFDbkQsYUFBYSxDQUFDLHdDQUF3QztJQUN0RCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxVQUFVO0lBQ1YseUNBQXlDLENBQUMsbUNBQW1DO0lBQzdFLFdBQVcsQ0FBQyxxRkFBcUY7SUFDakcsZ0JBQWdCLENBQUMsNEJBQTRCO0NBQ2hEIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnRleHQtZmllbGR7XG4gICAgd2lkdGg6IDQwMHB4O1xufVxuXG4ud2lkdGgtNXtcbiAgICB3aWR0aDogNSU7XG59LndpZHRoLTEwe1xuICAgIHdpZHRoOiAxMCU7XG59LndpZHRoLTE1e1xuICAgIHdpZHRoOiAxNSU7XG59LndpZHRoLTIwe1xuICAgIHdpZHRoOiAyMCU7XG59LndpZHRoLTI1e1xuICAgIHdpZHRoOiAyNSU7XG59XG4ud2lkdGgtMzB7XG4gICAgd2lkdGg6IDMwJTtcbn0ud2lkdGgtMzV7XG4gICAgd2lkdGg6IDM1JTtcbn0ud2lkdGgtNDB7XG4gICAgd2lkdGg6IDQwJTtcbn0ud2lkdGgtNDV7XG4gICAgd2lkdGg6IDQ1JTtcbn0ud2lkdGgtNTB7XG4gICAgd2lkdGg6IDUwJTtcbn0ud2lkdGgtNTV7XG4gICAgd2lkdGg6IDU1JTtcbn0ud2lkdGgtNjB7XG4gICAgd2lkdGg6IDYwJTtcbn0ud2lkdGgtNjV7XG4gICAgd2lkdGg6IDY1JTtcbn0ud2lkdGgtNzB7XG4gICAgd2lkdGg6IDcwJTtcbn0ud2lkdGgtNzV7XG4gICAgd2lkdGg6IDc1JTtcbn0ud2lkdGgtODB7XG4gICAgd2lkdGg6IDgwJTtcbn0ud2lkdGgtODV7XG4gICAgd2lkdGg6IDg1JTtcbn0ud2lkdGgtOTB7XG4gICAgd2lkdGg6IDkwJTtcbn0ud2lkdGgtOTV7XG4gICAgd2lkdGg6IDk1JTtcbn0ud2lkdGgtMTAwe1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5cbi5tYXJnaW5nLWxlZnQtNXtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xufS5tYXJnaW5nLWxlZnQtMTB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59Lm1hcmdpbmctbGVmdC0xNXtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbn0ubWFyZ2luZy1sZWZ0LTIwe1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xufS5tYXJnaW5nLWxlZnQtMjV7XG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG59Lm1hcmdpbmctbGVmdC0zMHtcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbn0ubWFyZ2luZy1sZWZ0LTM1e1xuICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xufS5tYXJnaW5nLWxlZnQtNDB7XG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG59Lm1hcmdpbmctbGVmdC00NXtcbiAgICBtYXJnaW4tbGVmdDogNDVweDtcbn0ubWFyZ2luZy1sZWZ0LTUwe1xuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xufS5tYXJnaW5nLWxlZnQtNTV7XG4gICAgbWFyZ2luLWxlZnQ6IDU1cHg7XG59Lm1hcmdpbmctbGVmdC02MHtcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcbn0ubWFyZ2luZy1sZWZ0LTY1e1xuICAgIG1hcmdpbi1sZWZ0OiA2NXB4O1xufS5tYXJnaW5nLWxlZnQtNzB7XG4gICAgbWFyZ2luLWxlZnQ6IDcwcHg7XG59Lm1hcmdpbmctbGVmdC03NXtcbiAgICBtYXJnaW4tbGVmdDogNzVweDtcbn0ubWFyZ2luZy1sZWZ0LTgwe1xuICAgIG1hcmdpbi1sZWZ0OiA4MHB4O1xufS5tYXJnaW5nLWxlZnQtODV7XG4gICAgbWFyZ2luLWxlZnQ6IDg1cHg7XG59Lm1hcmdpbmctbGVmdC05MHtcbiAgICBtYXJnaW4tbGVmdDogOTBweDtcbn0ubWFyZ2luZy1sZWZ0LTk1e1xuICAgIG1hcmdpbi1sZWZ0OiA5NXB4O1xufS5tYXJnaW5nLWxlZnQtMTAwe1xuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcbn1cblxuXG5cbi5tYXJnaW5nLXJpZ2h0LTV7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59Lm1hcmdpbmctcmlnaHQtMTB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufS5tYXJnaW5nLXJpZ2h0LTE1e1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbn0ubWFyZ2luZy1yaWdodC0yMHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59Lm1hcmdpbmctcmlnaHQtMjV7XG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xufS5tYXJnaW5nLXJpZ2h0LTMwe1xuICAgIG1hcmdpbi1yaWdodDogMzBweDtcbn0ubWFyZ2luZy1yaWdodC0zNXtcbiAgICBtYXJnaW4tcmlnaHQ6IDM1cHg7XG59Lm1hcmdpbmctcmlnaHQtNDB7XG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xufS5tYXJnaW5nLXJpZ2h0LTQ1e1xuICAgIG1hcmdpbi1yaWdodDogNDVweDtcbn0ubWFyZ2luZy1yaWdodC01MHtcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG59Lm1hcmdpbmctcmlnaHQtNTV7XG4gICAgbWFyZ2luLXJpZ2h0OiA1NXB4O1xufS5tYXJnaW5nLXJpZ2h0LTYwe1xuICAgIG1hcmdpbi1yaWdodDogNjBweDtcbn0ubWFyZ2luZy1yaWdodC02NXtcbiAgICBtYXJnaW4tcmlnaHQ6IDY1cHg7XG59Lm1hcmdpbmctcmlnaHQtNzB7XG4gICAgbWFyZ2luLXJpZ2h0OiA3MHB4O1xufS5tYXJnaW5nLXJpZ2h0LTc1e1xuICAgIG1hcmdpbi1yaWdodDogNzVweDtcbn0ubWFyZ2luZy1yaWdodC04MHtcbiAgICBtYXJnaW4tcmlnaHQ6IDgwcHg7XG59Lm1hcmdpbmctcmlnaHQtODV7XG4gICAgbWFyZ2luLXJpZ2h0OiA4NXB4O1xufS5tYXJnaW5nLXJpZ2h0LTkwe1xuICAgIG1hcmdpbi1yaWdodDogOTBweDtcbn0ubWFyZ2luZy1yaWdodC05NXtcbiAgICBtYXJnaW4tcmlnaHQ6IDk1cHg7XG59Lm1hcmdpbmctcmlnaHQtMTAwe1xuICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XG59XG5cbi5tYXJnaW5nLTV7XG4gICAgbWFyZ2luOiA1cHg7XG59Lm1hcmdpbmctMTB7XG4gICAgbWFyZ2luOiAxMHB4O1xufS5tYXJnaW5nLXRvcC1sZWZ0e1xuICAgIG1hcmdpbjogMHB4IFxufS5zdHlsZXtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZsZXgtd3JhcDogd3JhcFxufVxuXG4uZiB7XG4gICAgY2xlYXI6IGJvdGg7XG59XG5cbi5tYXJnaW5nLXRvcC0yMHtcbiAgICBtYXJnaW4tdG9wOiAyMCU7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsdWV2aW9sZXQ7XG59XG5cbi5tYXJnaW5nLXRvcC01MHtcbiAgICBtYXJnaW4tdG9wOiA1MCU7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsdWV2aW9sZXQ7XG59XG5cblxuXG4uZXhhbXBsZS1yYWRpby1ncm91cCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZXhhbXBsZS1yYWRpby1idXR0b24ge1xuICBtYXJnaW46IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuLmV4YW1wbGUtc2VsZWN0ZWQtdmFsdWUge1xuICBtYXJnaW46IDE1cHggMDtcbn1cblxuLmN1c3RvbS10ZXh0YXJlYSB7XG4gIGhlaWdodDogYXV0bztcbiAgLyoqbWFyZ2luLXRvcDogMjBweDsgKi9cbiAgbWluLWhlaWdodDogMjBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBhZGRpbmc6IDVweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xufVxuaW5wdXQgLmlucHV0e1xuICAgIGZvbnQtc2l6ZTogMjBweCA7XG59XG5cbi5mbG9hdC1yaWdodCB7XG4gICAgZmxvYXQ6IHJpZ2h0IDtcbiAgICBtYXJnaW46ICAwIDEwMHB4O1xufVxuXG4uY2FyZC1oZWFkZXItYmctY29sb3J7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2NSwgMTQsIDEzMikgO1xuICAgIGNvbG9yOiB3aGl0ZSA7XG4gICAgZm9udDogMTAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyAqL1xuXG4gICAgY29sb3I6cmdiYSgwLCAwLCAwLCAwLjg0MikgO1xuICAgIGZvbnQ6IDEwMHB4O1xuICAgIGJvcmRlci1sZWZ0OiAzMHB4IGJsdWV2aW9sZXQ7XG59XG5cblxuLm92ZXJsYXkge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFNpdCBvbiB0b3Agb2YgdGhlIHBhZ2UgY29udGVudCAqL1xuICAgICAgICBkaXNwbGF5OiBibG9jazsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgICAgICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xuICAgICAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0IChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgICAgICAgdG9wOiAwOyBcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpOyAvKiBCbGFjayBiYWNrZ3JvdW5kIHdpdGggb3BhY2l0eSAqL1xuICAgICAgICB6LWluZGV4OiAyOyAvKiBTcGVjaWZ5IGEgc3RhY2sgb3JkZXIgaW4gY2FzZSB5b3UncmUgdXNpbmcgYSBkaWZmZXJlbnQgb3JkZXIgZm9yIG90aGVyIGVsZW1lbnRzICovXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjsgLyogQWRkIGEgcG9pbnRlciBvbiBob3ZlciAqL1xufVxuXG4ub3ZlcmxheV8xIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFNpdCBvbiB0b3Agb2YgdGhlIHBhZ2UgY29udGVudCAqL1xuICAgIGRpc3BsYXk6IGJsb2NrOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xuICAgIHdpZHRoOiA4MCU7IC8qIEZ1bGwgd2lkdGggKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xuICAgIHRvcDogMDsgXG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NCwgOSwgNTgsIDAuOTc5KTsgLyogQmxhY2sgYmFja2dyb3VuZCB3aXRoIG9wYWNpdHkgKi9cbiAgICB6LWluZGV4OiAyOyAvKiBTcGVjaWZ5IGEgc3RhY2sgb3JkZXIgaW4gY2FzZSB5b3UncmUgdXNpbmcgYSBkaWZmZXJlbnQgb3JkZXIgZm9yIG90aGVyIGVsZW1lbnRzICovXG4gICAgY3Vyc29yOiBwb2ludGVyOyAvKiBBZGQgYSBwb2ludGVyIG9uIGhvdmVyICovXG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<mat-card>\n  <mat-card-header>\n    <mat-card-title>title</mat-card-title>\n    <mat-card-subtitle>subtitle</mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-content>\n    <mat-form-field>\n      <input matInput placeholder=\"label\" value=\"value\">\n    </mat-form-field>\n    \n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button>Ok</button>\n  </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Vub3Rmb3VuZC9wYWdlbm90Zm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  pagenotfound works!\n</p>\n"

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.ts ***!
  \********************************************************/
/*! exports provided: PagenotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function() { return PagenotfoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PagenotfoundComponent = /** @class */ (function () {
    function PagenotfoundComponent() {
    }
    PagenotfoundComponent.prototype.ngOnInit = function () {
    };
    PagenotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pagenotfound',
            template: __webpack_require__(/*! ./pagenotfound.component.html */ "./src/app/pagenotfound/pagenotfound.component.html"),
            styles: [__webpack_require__(/*! ./pagenotfound.component.css */ "./src/app/pagenotfound/pagenotfound.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PagenotfoundComponent);
    return PagenotfoundComponent;
}());



/***/ }),

/***/ "./src/app/pgs-header/pgs-header.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pgs-header/pgs-header.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bncy1oZWFkZXIvcGdzLWhlYWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pgs-header/pgs-header.component.html":
/*!******************************************************!*\
  !*** ./src/app/pgs-header/pgs-header.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Start Preloader-->\n<div class=\"preloader\" style=\"display: none;\">\n  <div class=\"d-table\">\n    <div class=\"d-table-cell align-middle\">\n      <div class=\"spinner\">\n        <div class=\"double-bounce1\"></div>\n        <div class=\"double-bounce2\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n<!--End Preloader-->\n<!--start header-->\n<header id=\"header\">\n  <div class=\"container\">\n    <nav class=\"navbar navbar-expand-lg\">\n      <div class=\"container\">\n        <!-- Logo -->\n        <!-- <a class=\"logo\" href=\"#\"><img src=\"/assets/new-assets/images/logo.png\" alt=\"logo\"></a> -->\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarContent\"\n          aria-controls=\"navbarContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"icon-bar\"><i class=\"icofont-navigation-menu\"></i></span>\n        </button>\n        <!-- navbar links -->\n        <div class=\"collapse navbar-collapse\" id=\"navbarContent\">\n          <ul class=\"navbar-nav ml-auto\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link active\"  data-scroll-nav=\"0\" [routerLink]=\"[ '' ]\">Home</a>\n            </li>\n            <li class=\"nav-item\">\n              <!-- <a class=\"nav-link\" href=\"#\" data-scroll-nav=\"1\">Features</a> -->\n              <a class=\"nav-link\" [routerLink]=\"[ '' ]\" data-scroll-nav=\"1\">About PGS</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"[ '/' ]\" data-scroll-nav=\"2\">Contact Administrator</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"[ '/' ]\" data-scroll-nav=\"3\">Terms and Condition</a>\n            </li>\n            <!-- <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"#\" data-scroll-nav=\"4\">FUNAAB Homepage</a>\n              </li> -->\n            <li class=\"nav-item\">\n              <!-- <a class=\"nav-link\" href=\"#\">Blog</a> -->\n            </li>\n            <li class=\"nav-item download-btn\">\n              <a class=\"nav-link\" data-scroll-nav=\"5\" [routerLink]=\"[ '/quick-survey' ]\"> Quick Survey </a>\n            </li>\n\n\n            <li class=\"nav-item download-btn\">\n              <a class=\"nav-link\" data-scroll-nav=\"5\" [routerLink]=\"[ '/cv-preview-edit' ]\"> Search|Preview CV </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </nav>\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/pgs-header/pgs-header.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pgs-header/pgs-header.component.ts ***!
  \****************************************************/
/*! exports provided: PgsHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PgsHeaderComponent", function() { return PgsHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PgsHeaderComponent = /** @class */ (function () {
    function PgsHeaderComponent() {
    }
    PgsHeaderComponent.prototype.ngOnInit = function () {
    };
    PgsHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pgs-header',
            template: __webpack_require__(/*! ./pgs-header.component.html */ "./src/app/pgs-header/pgs-header.component.html"),
            styles: [__webpack_require__(/*! ./pgs-header.component.css */ "./src/app/pgs-header/pgs-header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PgsHeaderComponent);
    return PgsHeaderComponent;
}());



/***/ }),

/***/ "./src/app/pgs-home-landing/pgs-home-landing.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pgs-home-landing/pgs-home-landing.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".matcard{\n    margin-right: 3%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGdzLWhvbWUtbGFuZGluZy9wZ3MtaG9tZS1sYW5kaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9wZ3MtaG9tZS1sYW5kaW5nL3Bncy1ob21lLWxhbmRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXRjYXJke1xuICAgIG1hcmdpbi1yaWdodDogMyU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pgs-home-landing/pgs-home-landing.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pgs-home-landing/pgs-home-landing.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"version-drak\">\n  <!--Start Preloader-->\n  <div class=\"preloader\" style=\"display: none;\">\n    <div class=\"d-table\">\n      <div class=\"d-table-cell align-middle\">\n        <div class=\"spinner\">\n          <div class=\"double-bounce1\"></div>\n          <div class=\"double-bounce2\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!--End Preloader-->\n  <!--start header-->\n  <header id=\"header\">\n    <div class=\"container\">\n      <nav class=\"navbar navbar-expand-lg\">\n        <div class=\"container\">\n          <!-- Logo -->\n          <!-- <a class=\"logo\" href=\"#\"><img src=\"/assets/new-assets/images/logo.png\" alt=\"logo\"></a> -->\n\n\n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarContent\"\n            aria-controls=\"navbarContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"icon-bar\"><i class=\"icofont-navigation-menu\"></i></span>\n          </button>\n          <!-- navbar links -->\n          <div class=\"collapse navbar-collapse\" id=\"navbarContent\">\n            <ul class=\"navbar-nav ml-auto\">\n              <!-- <li class=\"nav-item\">\n                <a class=\"nav-link\"  data-scroll-nav=\"9\" style=\"color: white\">Promot Bot</a>\n              </li> -->\n              <li class=\"nav-item\">\n                  <a class=\"nav-link active\" href=\"#\" data-scroll-nav=\"0\">Home</a>\n              </li>\n              <li class=\"nav-item\">\n                <!-- <a class=\"nav-link\" href=\"#\" data-scroll-nav=\"1\">Features</a> -->\n                <a class=\"nav-link\" href=\"#\" data-scroll-nav=\"1\">About</a>\n              </li>\n              <!-- <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"#\" data-scroll-nav=\"3\">Terms and Condition</a>\n              </li> -->\n              <!-- <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"#\" data-scroll-nav=\"4\">FUNAAB Homepage</a>\n              </li> -->\n              <li class=\"nav-item\">\n                <!-- <a class=\"nav-link\" href=\"#\">Blog</a> -->\n              </li>\n              <li class=\"nav-item download-btn\">\n                <a class=\"nav-link\" data-scroll-nav=\"5\" [routerLink]=\"[ '/cv-documentation' ]\">Assesment </a>\n              </li>\n\n\n\n              <li class=\"nav-item download-btn\">\n                <a class=\"nav-link\" data-scroll-nav=\"5\" [routerLink]=\"[ '/cv-documentation-stage' ]\"> Submit CV </a>\n              </li>\n\n\n\n              <li class=\"nav-item download-btn\">\n                  <a class=\"nav-link\" data-scroll-nav=\"5\" [routerLink]=\"[ '/admin-contact' ]\"> Contact Administrator </a>\n              </li>\n<!-- \n              <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"#\" data-scroll-nav=\"2\">Contact Administrator</a>\n              </li> -->\n\n            </ul>\n          </div>\n        </div>\n      </nav>\n    </div>\n  </header>\n  <!--end header-->\n  <!--start home area-->\n  <section id=\"home-area\" class=\"bg-1\" data-scroll-index=\"0\">\n    <div class=\"home-bg-circle\">\n      <img class=\"circle1\" src=\"/assets/new-assets/images/asset-4.png\" alt=\"\">\n      <img class=\"circle2\" src=\"/assets/new-assets/images/asset-5.png\" alt=\"\">\n    </div>\n    <div class=\"container\">\n      <div class=\"row\">\n        <!--start caption-->\n        <div class=\"col-lg-8\">\n          <div class=\"caption d-table\">\n            <div class=\"d-table-cell align-middle\">\n              <h1 class=\"text-white\">Promot Bot : A Revolusionalised System to Automate Promotion In FUNAAB</h1>\n              <h4 class=\"text-light font-open-sans\">This is an innovative development by the Department of Computer\n                Science\n                and strictly for the use of Members of staff\n              </h4>\n              <!-- <div class=\"caption-btns\">\n                <a class=\"bg\" href=\"#\">Create and Submit CV Now</a><a class=\"popup-video\"\n                  href=\"../../../www.youtube.com/watch1d68.html?v=iaj8ktgL3BY&amp;t=5s\"><i class=\"icofont-ui-play\"></i>\n                  Play video</a>\n              </div> -->\n              <!-- <div class=\"caption-download-btns\">\n                <ul>\n                  <li><a href=\"#\"><i class=\"icofont-brand-android-robot\"></i></a></li>\n                  <li><a href=\"#\"><i class=\"icofont-brand-apple\"></i></a></li>\n                  <li><a href=\"#\"><i class=\"icofont-brand-windows\"></i></a></li>\n                </ul>\n              </div> -->\n            </div>\n          </div>\n        </div>\n        <!--end caption-->\n      </div>\n    </div>\n  </section>\n  <!--start home area-->\n  <!--start core feature area-->\n  <section id=\"core-feature-area\" class=\"bg-2\">\n    <div class=\"core-feature-circle\">\n      <img class=\"circle1\" src=\"/assets/new-assets/images/asset-2.png\" alt=\"\">\n      <img class=\"circle2\" src=\"/assets/new-assets/images/asset-2.png\" alt=\"\">\n      <img class=\"circle3\" src=\"/assets/new-assets/images/asset-2.png\" alt=\"\">\n    </div>\n    <div class=\"container\">\n      <div class=\"row\">\n        <!--start section heading-->\n        <div class=\"col-md-10 offset-md-1\">\n          <div class=\"section-heading text-center\">\n            <h5>About our App</h5>\n            <h2 class=\"text-white\">A better , secured , fast and accurate system to promote Academic / Non - Teaching\n              staff in FUNAAB</h2>\n            <p class=\"text-light\">\n              This Software system is a better way to atuomate the grading system in the\n              Federal University of Agriculture , Abeokuta ( FUNAAB ). With this software system , promotion of the\n              University staff becomes easy , fast , and\n              humnan error free.\n            </p>\n          </div>\n        </div>\n        <!--end section heading-->\n      </div>\n      <div class=\"row\">\n        <!--start core feature single-->\n        <div class=\"col-lg-3 col-md-6\">\n          <div class=\"core-feature-single\">\n            <div class=\"core-feature-single-item text-center\">\n              <div class=\"icon\">\n                <i class=\"icon-gear\"></i>\n              </div>\n              <h3>Formatted</h3>\n              <p>Helps prepare your CV to formatted Guidelines</p>\n            </div>\n            <img class=\"hover-shape-1 hover-shape\" src=\"/assets/new-assets/images/shape-one.svg\" alt=\"Shape One\">\n            <img class=\"hover-shape-2 hover-shape\" src=\"/assets/new-assets/images/shape-two.svg\" alt=\"Shape Two\">\n            <img class=\"hover-shape-3 hover-shape\" src=\"/assets/new-assets/images/shape-three.svg\" alt=\"Shape Three\">\n            <img class=\"hover-shape-4 hover-shape\" src=\"/assets/new-assets/images/shape-four.svg\" alt=\"Shape Four\">\n            <img class=\"hover-shape-5 hover-shape\" src=\"/assets/new-assets/images/shape-five.svg\" alt=\"Shape Five\">\n          </div>\n        </div>\n        <!--end core feature single-->\n        <!--start core feature single-->\n        <div class=\"col-lg-3 col-md-6\">\n          <div class=\"core-feature-single\">\n            <div class=\"core-feature-single-item two text-center\">\n              <div class=\"icon\">\n                <i class=\"icon-web-design\"></i>\n              </div>\n              <h3> Intelligent System </h3>\n              <p>The system grades and promotes a staff with intelligence , your CV is accessed and grade\n              </p>\n            </div>\n            <img class=\"hover-shape-1 hover-shape\" src=\"/assets/new-assets/images/shape-one.svg\" alt=\"Shape One\">\n            <img class=\"hover-shape-2 hover-shape\" src=\"/assets/new-assets/images/shape-two.svg\" alt=\"Shape Two\">\n            <img class=\"hover-shape-3 hover-shape\" src=\"/assets/new-assets/images/shape-three.svg\" alt=\"Shape Three\">\n            <img class=\"hover-shape-4 hover-shape\" src=\"/assets/new-assets/images/shape-four.svg\" alt=\"Shape Four\">\n            <img class=\"hover-shape-5 hover-shape\" src=\"/assets/new-assets/images/shape-five.svg\" alt=\"Shape Five\">\n          </div>\n        </div>\n        <!--end core feature single-->\n        <!--start core feature single-->\n        <div class=\"col-lg-3 col-md-6\">\n          <div class=\"core-feature-single\">\n            <div class=\"core-feature-single-item three text-center\">\n              <div class=\"icon three\">\n                <i class=\"icon-report\"></i>\n              </div>\n              <h3>Speedy Promotion</h3>\n              <p>Speed is very important when you work with promotion and grading, especially if you have a large\n                number of staff to grade</p>\n            </div>\n            <img class=\"hover-shape-1 hover-shape\" src=\"/assets/new-assets/images/shape-one.svg\" alt=\"Shape One\">\n            <img class=\"hover-shape-2 hover-shape\" src=\"/assets/new-assets/images/shape-two.svg\" alt=\"Shape Two\">\n            <img class=\"hover-shape-3 hover-shape\" src=\"/assets/new-assets/images/shape-three.svg\" alt=\"Shape Three\">\n            <img class=\"hover-shape-4 hover-shape\" src=\"/assets/new-assets/images/shape-four.svg\" alt=\"Shape Four\">\n            <img class=\"hover-shape-5 hover-shape\" src=\"/assets/new-assets/images/shape-five.svg\" alt=\"Shape Five\">\n          </div>\n        </div>\n        <!--end core feature single-->\n        <!--start core feature single-->\n        <div class=\"col-lg-3 col-md-6\">\n          <div class=\"core-feature-single\">\n            <div class=\"core-feature-single-item four text-center\">\n              <div class=\"icon four\">\n                <i class=\"icon-list\"></i>\n              </div>\n              <h3>Secure Data</h3>\n              <p>After you submit your CV through the provided form , we transfer it over a sucured connection\n                so that third party won't get hold of your confidential details.\n              </p>\n            </div>\n            <img class=\"hover-shape-1 hover-shape\" src=\"/assets/new-assets/images/shape-one.svg\" alt=\"Shape One\">\n            <img class=\"hover-shape-2 hover-shape\" src=\"/assets/new-assets/images/shape-two.svg\" alt=\"Shape Two\">\n            <img class=\"hover-shape-3 hover-shape\" src=\"/assets/new-assets/images/shape-three.svg\" alt=\"Shape Three\">\n            <img class=\"hover-shape-4 hover-shape\" src=\"/assets/new-assets/images/shape-four.svg\" alt=\"Shape Four\">\n            <img class=\"hover-shape-5 hover-shape\" src=\"/assets/new-assets/images/shape-five.svg\" alt=\"Shape Five\">\n          </div>\n        </div>\n        <!--end core feature single-->\n      </div>\n      <div class=\"row\">\n        <!--start read more button-->\n        <div class=\"col-lg-12\">\n          <div class=\"load-more-btn text-center\">\n            <a [routerLink]=\"[ '/cv-documentation' ]\">Create and Submit CV</a>\n          </div>\n        </div>\n        <!--end read more button-->\n      </div>\n    </div>\n  </section>\n  <!--end core feature area-->\n  <!--start about area-->\n  <!-- <app-footer></app-footer> -->\n</div>\n"

/***/ }),

/***/ "./src/app/pgs-home-landing/pgs-home-landing.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pgs-home-landing/pgs-home-landing.component.ts ***!
  \****************************************************************/
/*! exports provided: PgsHomeLandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PgsHomeLandingComponent", function() { return PgsHomeLandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PgsHomeLandingComponent = /** @class */ (function () {
    function PgsHomeLandingComponent() {
    }
    PgsHomeLandingComponent.prototype.ngOnInit = function () {
    };
    PgsHomeLandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pgs-home-landing',
            template: __webpack_require__(/*! ./pgs-home-landing.component.html */ "./src/app/pgs-home-landing/pgs-home-landing.component.html"),
            styles: [__webpack_require__(/*! ./pgs-home-landing.component.css */ "./src/app/pgs-home-landing/pgs-home-landing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PgsHomeLandingComponent);
    return PgsHomeLandingComponent;
}());



/***/ }),

/***/ "./src/app/pgs-home/pgs-home.component.css":
/*!*************************************************!*\
  !*** ./src/app/pgs-home/pgs-home.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bncy1ob21lL3Bncy1ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pgs-home/pgs-home.component.html":
/*!**************************************************!*\
  !*** ./src/app/pgs-home/pgs-home.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  pgs-home works!\n</p>\n"

/***/ }),

/***/ "./src/app/pgs-home/pgs-home.component.ts":
/*!************************************************!*\
  !*** ./src/app/pgs-home/pgs-home.component.ts ***!
  \************************************************/
/*! exports provided: PGSHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PGSHomeComponent", function() { return PGSHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PGSHomeComponent = /** @class */ (function () {
    function PGSHomeComponent() {
    }
    PGSHomeComponent.prototype.ngOnInit = function () {
    };
    PGSHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pgs-home',
            template: __webpack_require__(/*! ./pgs-home.component.html */ "./src/app/pgs-home/pgs-home.component.html"),
            styles: [__webpack_require__(/*! ./pgs-home.component.css */ "./src/app/pgs-home/pgs-home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PGSHomeComponent);
    return PGSHomeComponent;
}());



/***/ }),

/***/ "./src/app/preview-cv/preview-cv.component.css":
/*!*****************************************************!*\
  !*** ./src/app/preview-cv/preview-cv.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-field {\n  width: 400px;\n}\n\n.width-5 {\n  width: 5%;\n}\n\n.width-10 {\n  width: 10%;\n}\n\n.width-15 {\n  width: 15%;\n}\n\n.width-20 {\n  width: 20%;\n}\n\n.width-25 {\n  width: 25%;\n}\n\n.width-30 {\n  width: 30%;\n}\n\n.width-35 {\n  width: 35%;\n}\n\n.width-40 {\n  width: 40%;\n}\n\n.width-45 {\n  width: 45%;\n}\n\n.width-50 {\n  width: 50%;\n}\n\n.width-55 {\n  width: 55%;\n}\n\n.width-60 {\n  width: 60%;\n}\n\n.width-65 {\n  width: 65%;\n}\n\n.width-70 {\n  width: 70%;\n}\n\n.width-75 {\n  width: 75%;\n}\n\n.width-80 {\n  width: 80%;\n}\n\n.width-85 {\n  width: 85%;\n}\n\n.width-90 {\n  width: 90%;\n}\n\n.width-95 {\n  width: 95%;\n}\n\n.width-100 {\n  width: 100%;\n}\n\n.marging-left-5 {\n  margin-left: 5px;\n}\n\n.marging-left-10 {\n  margin-left: 10px;\n}\n\n.marging-left-15 {\n  margin-left: 15px;\n}\n\n.marging-left-20 {\n  margin-left: 20px;\n}\n\n.marging-left-25 {\n  margin-left: 25px;\n}\n\n.marging-left-30 {\n  margin-left: 30px;\n}\n\n.marging-left-35 {\n  margin-left: 35px;\n}\n\n.marging-left-40 {\n  margin-left: 40px;\n}\n\n.marging-left-45 {\n  margin-left: 45px;\n}\n\n.marging-left-50 {\n  margin-left: 50px;\n}\n\n.marging-left-55 {\n  margin-left: 55px;\n}\n\n.marging-left-60 {\n  margin-left: 60px;\n}\n\n.marging-left-65 {\n  margin-left: 65px;\n}\n\n.marging-left-70 {\n  margin-left: 70px;\n}\n\n.marging-left-75 {\n  margin-left: 75px;\n}\n\n.marging-left-80 {\n  margin-left: 80px;\n}\n\n.marging-left-85 {\n  margin-left: 85px;\n}\n\n.marging-left-90 {\n  margin-left: 90px;\n}\n\n.marging-left-95 {\n  margin-left: 95px;\n}\n\n.marging-left-100 {\n  margin-left: 100px;\n}\n\n.marging-right-5 {\n  margin-right: 5px;\n}\n\n.marging-right-10 {\n  margin-right: 10px;\n}\n\n.marging-right-15 {\n  margin-right: 15px;\n}\n\n.marging-right-20 {\n  margin-right: 20px;\n}\n\n.marging-right-25 {\n  margin-right: 25px;\n}\n\n.marging-right-30 {\n  margin-right: 30px;\n}\n\n.marging-right-35 {\n  margin-right: 35px;\n}\n\n.marging-right-40 {\n  margin-right: 40px;\n}\n\n.marging-right-45 {\n  margin-right: 45px;\n}\n\n.marging-right-50 {\n  margin-right: 50px;\n}\n\n.marging-right-55 {\n  margin-right: 55px;\n}\n\n.marging-right-60 {\n  margin-right: 60px;\n}\n\n.marging-right-65 {\n  margin-right: 65px;\n}\n\n.marging-right-70 {\n  margin-right: 70px;\n}\n\n.marging-right-75 {\n  margin-right: 75px;\n}\n\n.marging-right-80 {\n  margin-right: 80px;\n}\n\n.marging-right-85 {\n  margin-right: 85px;\n}\n\n.marging-right-90 {\n  margin-right: 90px;\n}\n\n.marging-right-95 {\n  margin-right: 95px;\n}\n\n.marging-right-100 {\n  margin-right: 100px;\n}\n\n.marging-5 {\n  margin: 5px;\n}\n\n.marging-10 {\n  margin: 10px;\n}\n\n.marging-top-left {\n  margin: 0px\n}\n\n.style {\n  flex-direction: column;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap\n}\n\n.f {\n  clear: both;\n}\n\n.marging-top-20 {\n  margin-top: 20%;\n  border-top: 2px solid blueviolet;\n}\n\n.marging-top-50 {\n  margin-top: 50%;\n  border-top: 2px solid blueviolet;\n}\n\n.example-radio-group {\n  display: inline-flex;\n  flex-direction: column;\n}\n\n.example-radio-button {\n  margin: 5px;\n  margin-left: 0px;\n}\n\n.example-selected-value {\n  margin: 15px 0;\n}\n\n.custom-textarea {\n  height: auto;\n  /**margin-top: 20px; */\n  min-height: 20px;\n  overflow: auto;\n  padding: 5px;\n  font-size: 20px;\n  word-break: break-word;\n}\n\ninput .input {\n  font-size: 20px;\n}\n\n.float-right {\n  float: right;\n  margin: 0 100px;\n}\n\n.card-header-bg-color {\n  /* background-color: rgb(165, 14, 132) ;\n    color: white ;\n    font: 100px;\n    border-radius: 5px; */\n  color: rgba(0, 0, 0, 0.842);\n  font: 100px;\n  border-left: 30px blueviolet;\n}\n\n.overlay {\n  position: fixed;\n  /* Sit on top of the page content */\n  display: block;\n  /* Hidden by default */\n  width: 100%;\n  /* Full width (cover the whole page) */\n  height: 100%;\n  /* Full height (cover the whole page) */\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  /* Black background with opacity */\n  z-index: 2;\n  /* Specify a stack order in case you're using a different order for other elements */\n  cursor: pointer;\n  /* Add a pointer on hover */\n}\n\n.overlay_1 {\n  position: fixed;\n  /* Sit on top of the page content */\n  display: block;\n  /* Hidden by default */\n  width: 80%;\n  /* Full width (cover the whole page) */\n  height: 100%;\n  /* Full height (cover the whole page) */\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(44, 9, 58, 0.979);\n  /* Black background with opacity */\n  z-index: 2;\n  /* Specify a stack order in case you're using a different order for other elements */\n  cursor: pointer;\n  /* Add a pointer on hover */\n}\n\ntable {\n  width: 100%;\n}\n\nth {\n  font-weight: bold;\n  color: black;\n  /* border: 1px  solid gray ; */\n  text-align: center;\n}\n\ntd {\n  color: black;\n  /* border: 1px  solid rgb(0, 0, 0) ;\n  border-collapse: collapse ; */\n  font-weight: normal;\n  padding: 20px ;\n}\n\n.mat-row {\n  height: auto;\n}\n\n.mat-cell {\n  padding: 14px 14px 14px 14px;\n}\n\n.card-header {\n  display: none ;\n}\n\n@page {\n  size: A4;\n  margin: 0;\n}\n\n@media print {\n  html, body {\n    width: 210mm;\n    height: 297mm;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJldmlldy1jdi9wcmV2aWV3LWN2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxVQUFVO0NBQ1g7O0FBRUQ7RUFDRSxXQUFXO0NBQ1o7O0FBRUQ7RUFDRSxXQUFXO0NBQ1o7O0FBRUQ7RUFDRSxXQUFXO0NBQ1o7O0FBRUQ7RUFDRSxXQUFXO0NBQ1o7O0FBRUQ7RUFDRSxXQUFXO0NBQ1o7O0FBRUQ7RUFDRSxXQUFXO0NBQ1o7O0FBRUQ7RUFDRSxXQUFXO0NBQ1o7O0FBRUQ7RUFDRSxXQUFXO0NBQ1o7O0FBRUQ7RUFDRSxXQUFXO0NBQ1o7O0FBRUQ7RUFDRSxXQUFXO0NBQ1o7O0FBRUQ7RUFDRSxXQUFXO0NBQ1o7O0FBRUQ7RUFDRSxXQUFXO0NBQ1o7O0FBRUQ7RUFDRSxXQUFXO0NBQ1o7O0FBRUQ7RUFDRSxXQUFXO0NBQ1o7O0FBRUQ7RUFDRSxXQUFXO0NBQ1o7O0FBRUQ7RUFDRSxXQUFXO0NBQ1o7O0FBRUQ7RUFDRSxXQUFXO0NBQ1o7O0FBRUQ7RUFDRSxXQUFXO0NBQ1o7O0FBRUQ7RUFDRSxZQUFZO0NBQ2I7O0FBR0Q7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBSUQ7RUFDRSxrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxXQUFXO0NBQ1o7O0FBRUQ7RUFDRSx1QkFBdUI7RUFDdkIsY0FBYztFQUNkLCtCQUErQjtFQUMvQixlQUFlO0NBQ2hCOztBQUVEO0VBQ0UsWUFBWTtDQUNiOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlDQUFpQztDQUNsQzs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixpQ0FBaUM7Q0FDbEM7O0FBSUQ7RUFDRSxxQkFBcUI7RUFDckIsdUJBQXVCO0NBQ3hCOztBQUVEO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQix1QkFBdUI7Q0FDeEI7O0FBRUQ7RUFDRSxnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0U7OzswQkFHd0I7RUFDeEIsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWiw2QkFBNkI7Q0FDOUI7O0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIsb0NBQW9DO0VBQ3BDLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLHVDQUF1QztFQUN2QyxhQUFhO0VBQ2Isd0NBQXdDO0VBQ3hDLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7RUFDVixxQ0FBcUM7RUFDckMsbUNBQW1DO0VBQ25DLFdBQVc7RUFDWCxxRkFBcUY7RUFDckYsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtDQUM3Qjs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixvQ0FBb0M7RUFDcEMsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsdUNBQXVDO0VBQ3ZDLGFBQWE7RUFDYix3Q0FBd0M7RUFDeEMsT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1QsVUFBVTtFQUNWLHlDQUF5QztFQUN6QyxtQ0FBbUM7RUFDbkMsV0FBVztFQUNYLHFGQUFxRjtFQUNyRixnQkFBZ0I7RUFDaEIsNEJBQTRCO0NBQzdCOztBQUdEO0VBQ0UsWUFBWTtDQUNiOztBQUVEO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsYUFBYTtFQUNiO2dDQUM4QjtFQUM5QixvQkFBb0I7RUFDcEIsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLDZCQUE2QjtDQUM5Qjs7QUFFRDtFQUNFLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSxTQUFTO0VBQ1QsVUFBVTtDQUNYOztBQUVEO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsY0FBYztHQUNmO0NBQ0YiLCJmaWxlIjoic3JjL2FwcC9wcmV2aWV3LWN2L3ByZXZpZXctY3YuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LWZpZWxkIHtcbiAgd2lkdGg6IDQwMHB4O1xufVxuXG4ud2lkdGgtNSB7XG4gIHdpZHRoOiA1JTtcbn1cblxuLndpZHRoLTEwIHtcbiAgd2lkdGg6IDEwJTtcbn1cblxuLndpZHRoLTE1IHtcbiAgd2lkdGg6IDE1JTtcbn1cblxuLndpZHRoLTIwIHtcbiAgd2lkdGg6IDIwJTtcbn1cblxuLndpZHRoLTI1IHtcbiAgd2lkdGg6IDI1JTtcbn1cblxuLndpZHRoLTMwIHtcbiAgd2lkdGg6IDMwJTtcbn1cblxuLndpZHRoLTM1IHtcbiAgd2lkdGg6IDM1JTtcbn1cblxuLndpZHRoLTQwIHtcbiAgd2lkdGg6IDQwJTtcbn1cblxuLndpZHRoLTQ1IHtcbiAgd2lkdGg6IDQ1JTtcbn1cblxuLndpZHRoLTUwIHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLndpZHRoLTU1IHtcbiAgd2lkdGg6IDU1JTtcbn1cblxuLndpZHRoLTYwIHtcbiAgd2lkdGg6IDYwJTtcbn1cblxuLndpZHRoLTY1IHtcbiAgd2lkdGg6IDY1JTtcbn1cblxuLndpZHRoLTcwIHtcbiAgd2lkdGg6IDcwJTtcbn1cblxuLndpZHRoLTc1IHtcbiAgd2lkdGg6IDc1JTtcbn1cblxuLndpZHRoLTgwIHtcbiAgd2lkdGg6IDgwJTtcbn1cblxuLndpZHRoLTg1IHtcbiAgd2lkdGg6IDg1JTtcbn1cblxuLndpZHRoLTkwIHtcbiAgd2lkdGg6IDkwJTtcbn1cblxuLndpZHRoLTk1IHtcbiAgd2lkdGg6IDk1JTtcbn1cblxuLndpZHRoLTEwMCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5cbi5tYXJnaW5nLWxlZnQtNSB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5tYXJnaW5nLWxlZnQtMTAge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLm1hcmdpbmctbGVmdC0xNSB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4ubWFyZ2luZy1sZWZ0LTIwIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5tYXJnaW5nLWxlZnQtMjUge1xuICBtYXJnaW4tbGVmdDogMjVweDtcbn1cblxuLm1hcmdpbmctbGVmdC0zMCB7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuXG4ubWFyZ2luZy1sZWZ0LTM1IHtcbiAgbWFyZ2luLWxlZnQ6IDM1cHg7XG59XG5cbi5tYXJnaW5nLWxlZnQtNDAge1xuICBtYXJnaW4tbGVmdDogNDBweDtcbn1cblxuLm1hcmdpbmctbGVmdC00NSB7XG4gIG1hcmdpbi1sZWZ0OiA0NXB4O1xufVxuXG4ubWFyZ2luZy1sZWZ0LTUwIHtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG59XG5cbi5tYXJnaW5nLWxlZnQtNTUge1xuICBtYXJnaW4tbGVmdDogNTVweDtcbn1cblxuLm1hcmdpbmctbGVmdC02MCB7XG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xufVxuXG4ubWFyZ2luZy1sZWZ0LTY1IHtcbiAgbWFyZ2luLWxlZnQ6IDY1cHg7XG59XG5cbi5tYXJnaW5nLWxlZnQtNzAge1xuICBtYXJnaW4tbGVmdDogNzBweDtcbn1cblxuLm1hcmdpbmctbGVmdC03NSB7XG4gIG1hcmdpbi1sZWZ0OiA3NXB4O1xufVxuXG4ubWFyZ2luZy1sZWZ0LTgwIHtcbiAgbWFyZ2luLWxlZnQ6IDgwcHg7XG59XG5cbi5tYXJnaW5nLWxlZnQtODUge1xuICBtYXJnaW4tbGVmdDogODVweDtcbn1cblxuLm1hcmdpbmctbGVmdC05MCB7XG4gIG1hcmdpbi1sZWZ0OiA5MHB4O1xufVxuXG4ubWFyZ2luZy1sZWZ0LTk1IHtcbiAgbWFyZ2luLWxlZnQ6IDk1cHg7XG59XG5cbi5tYXJnaW5nLWxlZnQtMTAwIHtcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xufVxuXG5cblxuLm1hcmdpbmctcmlnaHQtNSB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4ubWFyZ2luZy1yaWdodC0xMCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLm1hcmdpbmctcmlnaHQtMTUge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5tYXJnaW5nLXJpZ2h0LTIwIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4ubWFyZ2luZy1yaWdodC0yNSB7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbn1cblxuLm1hcmdpbmctcmlnaHQtMzAge1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG59XG5cbi5tYXJnaW5nLXJpZ2h0LTM1IHtcbiAgbWFyZ2luLXJpZ2h0OiAzNXB4O1xufVxuXG4ubWFyZ2luZy1yaWdodC00MCB7XG4gIG1hcmdpbi1yaWdodDogNDBweDtcbn1cblxuLm1hcmdpbmctcmlnaHQtNDUge1xuICBtYXJnaW4tcmlnaHQ6IDQ1cHg7XG59XG5cbi5tYXJnaW5nLXJpZ2h0LTUwIHtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xufVxuXG4ubWFyZ2luZy1yaWdodC01NSB7XG4gIG1hcmdpbi1yaWdodDogNTVweDtcbn1cblxuLm1hcmdpbmctcmlnaHQtNjAge1xuICBtYXJnaW4tcmlnaHQ6IDYwcHg7XG59XG5cbi5tYXJnaW5nLXJpZ2h0LTY1IHtcbiAgbWFyZ2luLXJpZ2h0OiA2NXB4O1xufVxuXG4ubWFyZ2luZy1yaWdodC03MCB7XG4gIG1hcmdpbi1yaWdodDogNzBweDtcbn1cblxuLm1hcmdpbmctcmlnaHQtNzUge1xuICBtYXJnaW4tcmlnaHQ6IDc1cHg7XG59XG5cbi5tYXJnaW5nLXJpZ2h0LTgwIHtcbiAgbWFyZ2luLXJpZ2h0OiA4MHB4O1xufVxuXG4ubWFyZ2luZy1yaWdodC04NSB7XG4gIG1hcmdpbi1yaWdodDogODVweDtcbn1cblxuLm1hcmdpbmctcmlnaHQtOTAge1xuICBtYXJnaW4tcmlnaHQ6IDkwcHg7XG59XG5cbi5tYXJnaW5nLXJpZ2h0LTk1IHtcbiAgbWFyZ2luLXJpZ2h0OiA5NXB4O1xufVxuXG4ubWFyZ2luZy1yaWdodC0xMDAge1xuICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xufVxuXG4ubWFyZ2luZy01IHtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5tYXJnaW5nLTEwIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4ubWFyZ2luZy10b3AtbGVmdCB7XG4gIG1hcmdpbjogMHB4XG59XG5cbi5zdHlsZSB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC13cmFwOiB3cmFwXG59XG5cbi5mIHtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5tYXJnaW5nLXRvcC0yMCB7XG4gIG1hcmdpbi10b3A6IDIwJTtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsdWV2aW9sZXQ7XG59XG5cbi5tYXJnaW5nLXRvcC01MCB7XG4gIG1hcmdpbi10b3A6IDUwJTtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsdWV2aW9sZXQ7XG59XG5cblxuXG4uZXhhbXBsZS1yYWRpby1ncm91cCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZXhhbXBsZS1yYWRpby1idXR0b24ge1xuICBtYXJnaW46IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuLmV4YW1wbGUtc2VsZWN0ZWQtdmFsdWUge1xuICBtYXJnaW46IDE1cHggMDtcbn1cblxuLmN1c3RvbS10ZXh0YXJlYSB7XG4gIGhlaWdodDogYXV0bztcbiAgLyoqbWFyZ2luLXRvcDogMjBweDsgKi9cbiAgbWluLWhlaWdodDogMjBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBhZGRpbmc6IDVweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xufVxuXG5pbnB1dCAuaW5wdXQge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5mbG9hdC1yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luOiAwIDEwMHB4O1xufVxuXG4uY2FyZC1oZWFkZXItYmctY29sb3Ige1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY1LCAxNCwgMTMyKSA7XG4gICAgY29sb3I6IHdoaXRlIDtcbiAgICBmb250OiAxMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7ICovXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODQyKTtcbiAgZm9udDogMTAwcHg7XG4gIGJvcmRlci1sZWZ0OiAzMHB4IGJsdWV2aW9sZXQ7XG59XG5cbi5vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICAvKiBTaXQgb24gdG9wIG9mIHRoZSBwYWdlIGNvbnRlbnQgKi9cbiAgZGlzcGxheTogYmxvY2s7XG4gIC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXG4gIHdpZHRoOiAxMDAlO1xuICAvKiBGdWxsIHdpZHRoIChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgaGVpZ2h0OiAxMDAlO1xuICAvKiBGdWxsIGhlaWdodCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAvKiBCbGFjayBiYWNrZ3JvdW5kIHdpdGggb3BhY2l0eSAqL1xuICB6LWluZGV4OiAyO1xuICAvKiBTcGVjaWZ5IGEgc3RhY2sgb3JkZXIgaW4gY2FzZSB5b3UncmUgdXNpbmcgYSBkaWZmZXJlbnQgb3JkZXIgZm9yIG90aGVyIGVsZW1lbnRzICovXG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLyogQWRkIGEgcG9pbnRlciBvbiBob3ZlciAqL1xufVxuXG4ub3ZlcmxheV8xIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICAvKiBTaXQgb24gdG9wIG9mIHRoZSBwYWdlIGNvbnRlbnQgKi9cbiAgZGlzcGxheTogYmxvY2s7XG4gIC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXG4gIHdpZHRoOiA4MCU7XG4gIC8qIEZ1bGwgd2lkdGggKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8qIEZ1bGwgaGVpZ2h0IChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ0LCA5LCA1OCwgMC45NzkpO1xuICAvKiBCbGFjayBiYWNrZ3JvdW5kIHdpdGggb3BhY2l0eSAqL1xuICB6LWluZGV4OiAyO1xuICAvKiBTcGVjaWZ5IGEgc3RhY2sgb3JkZXIgaW4gY2FzZSB5b3UncmUgdXNpbmcgYSBkaWZmZXJlbnQgb3JkZXIgZm9yIG90aGVyIGVsZW1lbnRzICovXG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLyogQWRkIGEgcG9pbnRlciBvbiBob3ZlciAqL1xufVxuXG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRoIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBibGFjaztcbiAgLyogYm9yZGVyOiAxcHggIHNvbGlkIGdyYXkgOyAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnRkIHtcbiAgY29sb3I6IGJsYWNrO1xuICAvKiBib3JkZXI6IDFweCAgc29saWQgcmdiKDAsIDAsIDApIDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZSA7ICovXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHBhZGRpbmc6IDIwcHggO1xufVxuXG4ubWF0LXJvdyB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLm1hdC1jZWxsIHtcbiAgcGFkZGluZzogMTRweCAxNHB4IDE0cHggMTRweDtcbn1cblxuLmNhcmQtaGVhZGVyIHtcbiAgZGlzcGxheTogbm9uZSA7XG59XG5cbkBwYWdlIHtcbiAgc2l6ZTogQTQ7XG4gIG1hcmdpbjogMDtcbn1cblxuQG1lZGlhIHByaW50IHtcbiAgaHRtbCwgYm9keSB7XG4gICAgd2lkdGg6IDIxMG1tO1xuICAgIGhlaWdodDogMjk3bW07XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/preview-cv/preview-cv.component.html":
/*!******************************************************!*\
  !*** ./src/app/preview-cv/preview-cv.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow-x: hidden ; width: 100% ; height: 100%;\">\n  <div [ngClass]=\"{'card-header': hideCard}\" id=\"pdfwrapper\">\n    <mat-card>\n      <mat-card-header>\n        <mat-card-title>YOUR CURRICULUM VITAE PREVIEW</mat-card-title>\n        <mat-card-subtitle>A preview of your CV before sumitting</mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content>\n        <div class=\"margin-top-20\">\n          <!-- <button mat-raised-button color=\"info\" class=\"marging-right-10\" (click)=\"downloadCVAsPDF()\"> DOWNLOAD CV -->\n          <!-- </button> -->\n          <button mat-raised-button color=\"accent\" class=\"marging-left-10\" (click)=\"submit()\">\n            SUBMIT CV NOW\n          </button>\n          <button mat-raised-button color=\"primary\" class=\"marging-left-10\" (click)=\"printCV()\">\n            PRINT CV\n          </button>\n          <button mat-raised-button color=\"primary\" class=\"marging-left-10\" [routerLink]=\"[ '/quick-survey']\">\n            QUICK SURVEY\n          </button>\n        </div>\n      </mat-card-content>\n    </mat-card>\n  </div>\n\n\n  <div style=\"margin-left: 100px ; margin-right: 100px;\">\n    <form>\n      <h3 style=\"font-weight: bold\">01. PERSONAL</h3>\n      <mat-table [dataSource]=\"ELEMENT_DATA\" class=\"mat-elevation-z8\" style=\"width: 100%\">\n\n        <ng-container matColumnDef=\"no\">\n          <th mat-header-cell *matHeaderCellDef></th>\n          <td mat-cell *matCellDef=\"let element ;let i  = index; \"> {{romanNumbering[i]}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"name\">\n          <th mat-header-cell *matHeaderCellDef> </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"value\">\n          <th mat-header-cell *matHeaderCellDef></th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.value}} </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </mat-table>\n\n\n\n      <h3 style=\" margin-top: 5% ; font-weight: bold\">02. EDUCATIONAL BACKGROUND</h3>\n      <div id=\"educationa-background\">\n\n        <mat-table [dataSource]=\"objectDataSource.eaphni.academicQualifications\" class=\"mat-elevation-z8\"\n          style=\"width: 100% ;\">\n          <!-- name Column -->\n\n          <ng-container matColumnDef=\"no\">\n            <th mat-header-cell *matHeaderCellDef></th>\n            <td mat-cell *matCellDef=\"let element ;let i  = index; \"> {{ i  + 1 }} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"edu\">\n            <th mat-header-cell *matHeaderCellDef> ACADEMIC QUALIFICATIONS </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n          </ng-container>\n\n          <!-- value Column -->\n          <ng-container matColumnDef=\"title\">\n            <th mat-header-cell *matHeaderCellDef> TITLE OF QUALIFICATION </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.title}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"date\">\n            <th mat-header-cell *matHeaderCellDef> DATE RECEIVED </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.date}} </td>\n          </ng-container>\n\n          <tr mat-header-row *matHeaderRowDef=\"academicQualificationsDisplayColumn\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: academicQualificationsDisplayColumn\"></tr>\n        </mat-table>\n\n\n\n        <h4 style=\" margin-top: 5% ; font-weight: bold\">(ii) ACADEMIC AND PROFESSIONAL QUALIFICATIONS (WITH DATES)</h4>\n        <h5 style=\" margin-top: 5% ; font-weight: bold\">(A) Academic Qualification </h5>\n        <mat-table [dataSource]=\"objectDataSource.eaphni.academicQualifications\" class=\"mat-elevation-z8\"\n          style=\"width: 100% ;\">\n\n          <ng-container matColumnDef=\"no\">\n            <th mat-header-cell *matHeaderCellDef></th>\n            <td mat-cell *matCellDef=\"let element ;let i  = index; \"> {{ i  + 1 }} </td>\n          </ng-container>\n\n\n          <!-- name Column -->\n          <ng-container matColumnDef=\"title\">\n            <th mat-header-cell *matHeaderCellDef> ACADEMIC QUALIFICATION </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.title}} </td>\n          </ng-container>\n\n          <!-- value Column -->\n          <ng-container matColumnDef=\"date\">\n            <th mat-header-cell *matHeaderCellDef> DATE </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.date}} </td>\n          </ng-container>\n\n          <tr mat-header-row *matHeaderRowDef=\"academicQualificationsDisplayColumn\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: academicQualificationsDisplayColumn\"></tr>\n        </mat-table>\n\n        <h5 style=\" margin-top: 5% ; font-weight: bold\">(B) Professional Qualification </h5>\n        <mat-table [dataSource]=\"objectDataSource.eaphni.professionalQualifications\" class=\"mat-elevation-z8\"\n          style=\"width: 100% ;\">\n\n          <ng-container matColumnDef=\"no\">\n            <th mat-header-cell *matHeaderCellDef></th>\n            <td mat-cell *matCellDef=\"let element ;let i  = index; \"> {{ i  + 1 }} </td>\n          </ng-container>\n\n          <!-- name Column -->\n          <ng-container matColumnDef=\"title\">\n            <th mat-header-cell *matHeaderCellDef> TITLE </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.title}} </td>\n          </ng-container>\n\n          <!-- value Column -->\n          <ng-container matColumnDef=\"date\">\n            <th mat-header-cell *matHeaderCellDef> DATE </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.date}} </td>\n          </ng-container>\n\n          <tr mat-header-row *matHeaderRowDef=\"professionalQualificationsDisplayColumn\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: professionalQualificationsDisplayColumn\"></tr>\n\n        </mat-table>\n\n\n\n\n        <h4 style=\" margin-top: 5% ; font-weight: bold\">(ii) PRIZES , HONOURS , SCHOLARSHIPS , NATIONAL AND\n          INTERNATIONAL RECOMMENDATION\n        </h4>\n        <mat-table [dataSource]=\"objectDataSource.eaphni.prizes\" class=\"mat-elevation-z8\" style=\"width: 100% ;\">\n\n          <ng-container matColumnDef=\"no\">\n            <th mat-header-cell *matHeaderCellDef></th>\n            <td mat-cell *matCellDef=\"let element ;let i  = index; \"> {{ i  + 1 }} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"receivedFrom\">\n            <th mat-header-cell *matHeaderCellDef> RECEIVED FROM </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.receivedFrom}} </td>\n          </ng-container>\n\n\n          <ng-container matColumnDef=\"title\">\n            <th mat-header-cell *matHeaderCellDef> TITLE </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.title}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"date\">\n            <th mat-header-cell *matHeaderCellDef> DATE </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.date}} </td>\n          </ng-container>\n\n          <tr mat-header-row *matHeaderRowDef=\"prizesDisplayColumn\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: prizesDisplayColumn\"></tr>\n\n        </mat-table>\n\n        <h4 style=\" margin-top: 5% ; font-weight: bold\"></h4>\n        <mat-table [dataSource]=\"objectDataSource.eaphni.honours\" class=\"mat-elevation-z8\" style=\"width: 100% ;\">\n\n          <ng-container matColumnDef=\"no\">\n            <th mat-header-cell *matHeaderCellDef></th>\n            <td mat-cell *matCellDef=\"let element ;let i  = index; \"> {{ i  + 1 }} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"receivedFrom\">\n            <th mat-header-cell *matHeaderCellDef> RECEIVED FROM </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.receivedFrom}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"title\">\n            <th mat-header-cell *matHeaderCellDef> TITLE </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.title}} </td>\n          </ng-container>\n\n\n          <ng-container matColumnDef=\"date\">\n            <th mat-header-cell *matHeaderCellDef> DATE </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.date}} </td>\n          </ng-container>\n\n          <tr mat-header-row *matHeaderRowDef=\"honoursDisplayColumn\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: honoursDisplayColumn\"></tr>\n\n        </mat-table>\n\n        <h4 style=\" margin-top: 5% ; font-weight: bold\"></h4>\n        <mat-table [dataSource]=\"objectDataSource.eaphni.nationalRecognitions\" class=\"mat-elevation-z8\"\n          style=\"width: 100% ;\">\n\n          <ng-container matColumnDef=\"no\">\n            <th mat-header-cell *matHeaderCellDef>S/N</th>\n            <td mat-cell *matCellDef=\"let element ;let i  = index; \"> {{ i  + 1 }} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"receivedFrom\">\n            <th mat-header-cell *matHeaderCellDef> RECEIVED FROM </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.title}} </td>\n          </ng-container>\n\n\n          <ng-container matColumnDef=\"title\">\n            <th mat-header-cell *matHeaderCellDef> TTILE </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.title}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"date\">\n            <th mat-header-cell *matHeaderCellDef> DATE </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.title}} </td>\n          </ng-container>\n\n          <tr mat-header-row *matHeaderRowDef=\"honoursDisplayColumn\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: honoursDisplayColumn\"></tr>\n\n        </mat-table>\n\n\n        <h4 style=\" margin-top: 5% ; font-weight: bold\">NATIONAL AND INTERNATIONAL RECOMMENDATION</h4>\n        <mat-table [dataSource]=\"objectDataSource.eaphni.nationalRecognitions\" class=\"mat-elevation-z8\"\n          style=\"width: 100% ;\">\n\n          <ng-container matColumnDef=\"no\">\n            <th mat-header-cell *matHeaderCellDef>S/N</th>\n            <td mat-cell *matCellDef=\"let element ;let i  = index; \"> {{ i  + 1 }} </td>\n          </ng-container>\n\n\n          <ng-container matColumnDef=\"receivedFrom\">\n            <th mat-header-cell *matHeaderCellDef> Title </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.receivedFrom}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"title\">\n            <th mat-header-cell *matHeaderCellDef> Title </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.title}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"date\">\n            <th mat-header-cell *matHeaderCellDef> Date </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.date}} </td>\n          </ng-container>\n\n          <tr mat-header-row *matHeaderRowDef=\"nationalRecognitionsDisplayColumn\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: nationalRecognitionsDisplayColumn\"></tr>\n\n        </mat-table>\n\n      </div>\n      <!----end-->\n\n\n      <h4 style=\" margin-top: 5% ; font-weight: bold\">03. WORK EXPERIENCE</h4>\n      <div id=\"work-experience\" #createdCV>\n\n        <h3 style=\" margin-top: 5% ; font-weight: bold\">(i) UNIVERSITY TEACHING AND RESEARCH EXPERIENCE</h3>\n        <mat-table [dataSource]=\"objectDataSource.masterFormGroupings.workExperience\" class=\"mat-elevation-z8\"\n          style=\"width: 100% ;\">\n          <!-- name Column -->\n\n          <ng-container matColumnDef=\"no\">\n            <th mat-header-cell *matHeaderCellDef>S/N</th>\n            <td mat-cell *matCellDef=\"let element ;let i  = index; \"> {{ i  + 1 }} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"organization\">\n            <th mat-header-cell *matHeaderCellDef> Organisation </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.organization}} </td>\n          </ng-container>\n\n          <!-- value Column -->\n          <ng-container matColumnDef=\"postHeld\">\n            <th mat-header-cell *matHeaderCellDef> POST HELD </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.postHeld}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"duties\">\n            <th mat-header-cell *matHeaderCellDef> DUTIES </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.duties}} </td>\n          </ng-container>\n\n\n          <ng-container matColumnDef=\"fromDate\">\n            <th mat-header-cell *matHeaderCellDef> FROM DATE </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.fromDate}} </td>\n          </ng-container>\n\n\n          <ng-container matColumnDef=\"toDate\">\n            <th mat-header-cell *matHeaderCellDef> TO DATE </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.toDate}} </td>\n          </ng-container>\n\n\n          <tr mat-header-row *matHeaderRowDef=\"workExperienceDisplayColumn\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: workExperienceDisplayColumn\"></tr>\n        </mat-table>\n      </div>\n\n\n\n      <h3 style=\" margin-top: 5% ; font-weight: bold\">(ii) COURSES TAUGHT IN THE LAST FOUR (4) YEARS</h3>\n      <mat-table [dataSource]=\"objectDataSource.masterFormGroupings.schoolworkexp\" class=\"mat-elevation-z8\"\n        style=\"width: 100% ;\">\n        <!-- name Column -->\n\n        <ng-container matColumnDef=\"no\">\n          <th mat-header-cell *matHeaderCellDef>S/N</th>\n          <td mat-cell *matCellDef=\"let element ;let i  = index; \"> {{ i  + 1 }} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"courseCode\">\n          <th mat-header-cell *matHeaderCellDef> COURSE CODE </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.courseCode}} </td>\n        </ng-container>\n\n        <!-- value Column -->\n        <ng-container matColumnDef=\"creditHours\">\n          <th mat-header-cell *matHeaderCellDef> CREDIT HOURS </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.creditHours}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"numOfLecturers\">\n          <th mat-header-cell *matHeaderCellDef> NUMBERS OF LECTURERS </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.duties}} </td>\n        </ng-container>\n\n\n        <ng-container matColumnDef=\"level\">\n          <th mat-header-cell *matHeaderCellDef> LEVEL </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.level}} </td>\n        </ng-container>\n\n\n        <ng-container matColumnDef=\"toDate\">\n          <th mat-header-cell *matHeaderCellDef> TO DATE </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.toDate}} </td>\n        </ng-container>\n\n\n        <ng-container matColumnDef=\"numberOfRegStd\">\n          <th mat-header-cell *matHeaderCellDef> NUMBER OF STUDENTSS REGISTERED </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.numberOfRegStd}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"contribution\">\n          <th mat-header-cell *matHeaderCellDef> CONTRIBUTION </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.contribution}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"session\">\n          <th mat-header-cell *matHeaderCellDef> SESSION </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.session}} </td>\n        </ng-container>\n\n\n        <ng-container matColumnDef=\"school\">\n          <th mat-header-cell *matHeaderCellDef> SCHOOL </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.school}} </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"schoolworkexpDisplayColumn\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: schoolworkexpDisplayColumn\"></tr>\n      </mat-table>\n\n\n\n\n      <h3 style=\" margin-top: 5% ; font-weight: bold\"> COURSE DESCRIPTION </h3>\n      <mat-table [dataSource]=\"objectDataSource.masterFormGroupings.courseDescriptions\" class=\"mat-elevation-z8\"\n        style=\"width: 100% ;\">\n        <!-- name Column -->\n\n        <ng-container matColumnDef=\"no\">\n          <th mat-header-cell *matHeaderCellDef>S/N</th>\n          <td mat-cell *matCellDef=\"let element ;let i  = index; \"> {{ i  + 1 }} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"courseCode\">\n          <th mat-header-cell *matHeaderCellDef> COURSE CODE </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.courseCode}} </td>\n        </ng-container>\n\n        <!-- value Column -->\n        <ng-container matColumnDef=\"courseTitle\">\n          <th mat-header-cell *matHeaderCellDef> COURSE TITLE </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.courseTitle}} </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"courseDescriptionsDisplayColumn\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: courseDescriptionsDisplayColumn\"></tr>\n      </mat-table>\n\n\n\n\n      <h4 style=\" margin-top: 5% ; font-weight: bold\"></h4>\n      <div id=\"work-experience\">\n\n        <h3 style=\" margin-top: 5% ; font-weight: bold\">(iii) OTHER WORK EXPERIENCE (OUTSIDE THE UNIVERSITY)</h3>\n        <mat-table [dataSource]=\"objectDataSource.masterFormGroupings.otherWorkExperience\" class=\"mat-elevation-z8\"\n          style=\"width: 100% ;\">\n          <!-- name Column -->\n\n          <ng-container matColumnDef=\"no\">\n            <th mat-header-cell *matHeaderCellDef>S/N</th>\n            <td mat-cell *matCellDef=\"let element ;let i  = index; \"> {{ i  + 1 }} </td>\n          </ng-container>\n\n\n          <ng-container matColumnDef=\"organization\">\n            <th mat-header-cell *matHeaderCellDef> ORGANISATION </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.organization}} </td>\n          </ng-container>\n\n          <!-- value Column -->\n          <ng-container matColumnDef=\"postHeld\">\n            <th mat-header-cell *matHeaderCellDef> POST HELD </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.postHeld}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"duties\">\n            <th mat-header-cell *matHeaderCellDef> DUTIES </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.duties}} </td>\n          </ng-container>\n\n\n          <ng-container matColumnDef=\"fromDate\">\n            <th mat-header-cell *matHeaderCellDef> FROM DATE </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.fromDate}} </td>\n          </ng-container>\n\n\n          <ng-container matColumnDef=\"toDate\">\n            <th mat-header-cell *matHeaderCellDef> TO DATE </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.toDate}} </td>\n          </ng-container>\n\n\n          <tr mat-header-row *matHeaderRowDef=\"otherWorkDisplayColumn\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: otherWorkDisplayColumn\"></tr>\n        </mat-table>\n        <mat-divider>\n        </mat-divider>\n\n\n        <h3 style=\" margin-top: 5% ; font-weight: bold\"> (iv) PAPER REVIEWING </h3>\n        <mat-table [dataSource]=\"objectDataSource.masterFormGroupings.paperReviewing\" class=\"mat-elevation-z8\"\n          style=\"width: 100% ;\">\n          <!-- name Column -->\n\n          <ng-container matColumnDef=\"no\">\n            <th mat-header-cell *matHeaderCellDef>S/N</th>\n            <td mat-cell *matCellDef=\"let element ;let i  = index; \"> {{ i  + 1 }} </td>\n          </ng-container>\n\n\n          <ng-container matColumnDef=\"paperR\">\n            <th mat-header-cell *matHeaderCellDef> PAPER REVIEWING </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.paperR}} </td>\n          </ng-container>\n\n\n          <tr mat-header-row *matHeaderRowDef=\"paperReviewingDisplayColumn\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: paperReviewingDisplayColumn\"></tr>\n        </mat-table>\n\n      </div>\n\n\n      <div>\n        <h3 style=\" margin-top: 5% ; font-weight: bold\"> 04. SPECIAL ASSIGNMENT/COMMUNITY SERVICE </h3>\n        <h4 style=\" margin-top: 5% ; font-weight: bold\"> A. ADMINISTRATIVE/TECHNICAL EXPERIENCE </h4>\n        <mat-table [dataSource]=\"objectDataSource.masterFormGroupings.specialAssignmentATE\" class=\"mat-elevation-z8\"\n          style=\"width: 100% ;\">\n          <!-- name Column -->\n\n          <ng-container matColumnDef=\"no\">\n            <th mat-header-cell *matHeaderCellDef>S/N</th>\n            <td mat-cell *matCellDef=\"let element ;let i  = index; \"> {{ i  + 1 }} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"postHeld\">\n            <th mat-header-cell *matHeaderCellDef> POST HELD </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.postHeld}} </td>\n          </ng-container>\n\n\n          <ng-container matColumnDef=\"organization\">\n            <th mat-header-cell *matHeaderCellDef> ORGANISATION </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.organization}} </td>\n          </ng-container>\n\n\n          <ng-container matColumnDef=\"fromDate\">\n            <th mat-header-cell *matHeaderCellDef> FROM DATE </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.fromDate}} </td>\n          </ng-container>\n\n\n          <ng-container matColumnDef=\"toDate\">\n            <th mat-header-cell *matHeaderCellDef> TO DATE </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.toDate}} </td>\n          </ng-container>\n\n          <tr mat-header-row *matHeaderRowDef=\"specialAssignmentATEDisplayColumn\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: specialAssignmentATEDisplayColumn\"></tr>\n        </mat-table>\n\n\n\n        <h4 style=\" margin-top: 5% ; font-weight: bold\"> B. MEMBERSHIP OF COMMITTEE </h4>\n        <mat-table [dataSource]=\"objectDataSource.masterFormGroupings.specialAssignmentMC\" class=\"mat-elevation-z8\"\n          style=\"width: 100% ;\">\n          <!-- name Column -->\n\n          <ng-container matColumnDef=\"no\">\n            <th mat-header-cell *matHeaderCellDef>S/N</th>\n            <td mat-cell *matCellDef=\"let element ;let i  = index; \"> {{ i  + 1 }} </td>\n          </ng-container>\n\n          <ng-container>\n            <th mat-header-cell *matHeaderCellDef> SN </th>\n            <td mat-cell *matCellDef=\"let element ;let i  = index\"> {{ i + 1}} </td>\n          </ng-container>\n\n\n          <ng-container matColumnDef=\"postHeld\">\n            <th mat-header-cell *matHeaderCellDef> POST HELD </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.postHeld}} </td>\n          </ng-container>\n\n\n          <ng-container matColumnDef=\"organization\">\n            <th mat-header-cell *matHeaderCellDef> ORGANISATION </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.organization}} </td>\n          </ng-container>\n\n\n          <ng-container matColumnDef=\"fromDate\">\n            <th mat-header-cell *matHeaderCellDef> FROM DATE </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.fromDate}} </td>\n          </ng-container>\n\n\n          <ng-container matColumnDef=\"toDate\">\n            <th mat-header-cell *matHeaderCellDef> TO DATE </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.toDate}} </td>\n          </ng-container>\n\n          <tr mat-header-row *matHeaderRowDef=\"specialAssignmentMCDisplayColumn\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: specialAssignmentMCDisplayColumn\"></tr>\n        </mat-table>\n\n\n\n        <h4 style=\" margin-top: 5% ; font-weight: bold\"> B. COMMUNITY SERVICE </h4>\n        <mat-table [dataSource]=\"objectDataSource.masterFormGroupings.specialAssignmentCS\" class=\"mat-elevation-z8\"\n          style=\"width: 100% ;\">\n          <!-- name Column -->\n\n          <ng-container matColumnDef=\"no\">\n            <th mat-header-cell *matHeaderCellDef>S/N</th>\n            <td mat-cell *matCellDef=\"let element ;let i  = index; \"> {{ i  + 1 }} </td>\n          </ng-container>\n\n\n          <ng-container matColumnDef=\"postHeld\">\n            <th mat-header-cell *matHeaderCellDef> POST HELD </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.postHeld}} </td>\n          </ng-container>\n\n\n          <ng-container matColumnDef=\"communityServiceDescription\">\n            <th mat-header-cell *matHeaderCellDef> COMMUNITY SERVICE DESCRIPTION </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.communityServiceDescription}} </td>\n          </ng-container>\n\n\n          <ng-container matColumnDef=\"fromDate\">\n            <th mat-header-cell *matHeaderCellDef> FROM DATE </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.fromDate}} </td>\n          </ng-container>\n\n\n          <ng-container matColumnDef=\"toDate\">\n            <th mat-header-cell *matHeaderCellDef> TO DATE </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.toDate}} </td>\n          </ng-container>\n\n          <tr mat-header-row *matHeaderRowDef=\"specialAssignmentCSDisplayColumn\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: specialAssignmentCSDisplayColumn\"></tr>\n        </mat-table>\n\n      </div>\n\n\n      <div>\n        <h3 style=\" margin-top: 5% ; font-weight: bold\"> 04. TRAINING PROGRAMME ATTENDED ( WITH DATES ) </h3>\n        <mat-table [dataSource]=\"objectDataSource.masterFormGroupings.trainingProgramme\" class=\"mat-elevation-z8\"\n          style=\"width: 100% ;\">\n          <!-- name Column -->\n\n          <ng-container matColumnDef=\"no\">\n            <th mat-header-cell *matHeaderCellDef>S/N</th>\n            <td mat-cell *matCellDef=\"let element ;let i  = index; \"> {{ i  + 1 }} </td>\n          </ng-container>\n\n\n          <ng-container matColumnDef=\"training\">\n            <th mat-header-cell *matHeaderCellDef> TRAINING </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.training}} </td>\n          </ng-container>\n\n\n          <ng-container matColumnDef=\"description\">\n            <th mat-header-cell *matHeaderCellDef> FULL DESCRIPTION </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\n          </ng-container>\n\n          <tr mat-header-row *matHeaderRowDef=\"trainingProgrammeDisplayColumn\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: trainingProgrammeDisplayColumn\"></tr>\n        </mat-table>\n\n      </div>\n\n\n      <div>\n        <h3 style=\" margin-top: 5% ; font-weight: bold\"> 06. COMMENDATION </h3>\n        <mat-table [dataSource]=\"objectDataSource.masterFormGroupings.commendation\" class=\"mat-elevation-z8\"\n          style=\"width: 100% ;\">\n          <!-- name Column -->\n\n          <ng-container matColumnDef=\"no\">\n            <th mat-header-cell *matHeaderCellDef>S/N</th>\n            <td mat-cell *matCellDef=\"let element ;let i  = index; \"> {{ i  + 1 }} </td>\n          </ng-container>\n\n\n          <ng-container matColumnDef=\"by\">\n            <th mat-header-cell *matHeaderCellDef> COMMENDATION LETTER BY </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.by}} </td>\n          </ng-container>\n\n\n          <ng-container matColumnDef=\"commendationFor\">\n            <th mat-header-cell *matHeaderCellDef> COMMENDATION LETTER FOR </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.commendationFor}} </td>\n          </ng-container>\n\n\n\n          <ng-container matColumnDef=\"commendationDate\">\n            <th mat-header-cell *matHeaderCellDef> COMMENDATION DATE </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.commendationDate}} </td>\n          </ng-container>\n\n          <tr mat-header-row *matHeaderRowDef=\"commendationDisplayColumn\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: commendationDisplayColumn\"></tr>\n\n        </mat-table>\n\n      </div>\n\n\n\n      <div>\n        <h3 style=\" margin-top: 5% ; font-weight: bold\"> 07. MEMBERSHIP OF PROFESSIONAL BODIES </h3>\n        <mat-table [dataSource]=\"objectDataSource.masterFormGroupings.membershipOfProfessionalBodies\"\n          class=\"mat-elevation-z8\" style=\"width: 100% ;\">\n          <!-- name Column -->\n\n          <ng-container matColumnDef=\"no\">\n            <th mat-header-cell *matHeaderCellDef>S/N</th>\n            <td mat-cell *matCellDef=\"let element ;let i  = index; \"> {{ i  + 1 }} </td>\n          </ng-container>\n\n\n          <ng-container matColumnDef=\"postHeld\">\n            <th mat-header-cell *matHeaderCellDef> POST </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.postHeld}} </td>\n          </ng-container>\n\n\n          <ng-container matColumnDef=\"organization\">\n            <th mat-header-cell *matHeaderCellDef> ORGANISATION </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.organization}} </td>\n          </ng-container>\n\n          <tr mat-header-row *matHeaderRowDef=\"membershipOfProfessionalBodiesDisplayColumn\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: membershipOfProfessionalBodiesDisplayColumn\"></tr>\n        </mat-table>\n\n\n      </div>\n\n\n      <div>\n        <h3 style=\" margin-top: 5% ; font-weight: bold\"> 08. RESEARCH INTEREST OR COMMISIONED PROJECTS </h3>\n        <h4 style=\" margin-top: 5% ; font-weight: bold\"> (i) RESEARCH INTERESTS </h4>\n        <mat-table [dataSource]=\"objectDataSource.masterFormGroupings.researchInterests\" class=\"mat-elevation-z8\"\n          style=\"width: 100% ;\">\n          <!-- ame Column -->\n\n          <ng-container matColumnDef=\"no\">\n            <th mat-header-cell *matHeaderCellDef>S/N</th>\n            <td mat-cell *matCellDef=\"let element ;let i  = index; \"> {{ i  + 1 }} </td>\n          </ng-container>\n\n\n          <ng-container matColumnDef=\"interest\">\n            <th mat-header-cell *matHeaderCellDef> RESEARCH INTEREST </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.interest}} </td>\n          </ng-container>\n\n          <tr mat-header-row *matHeaderRowDef=\"researchInterestsDisplayColumn\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: researchInterestsDisplayColumn\"></tr>\n        </mat-table>\n\n      </div>\n\n\n      <div>\n        <h3 style=\" margin-top: 5% ; font-weight: bold\"> 09. PUBLICATION </h3>\n        <h4 style=\" margin-top: 5% ; font-weight: bold\"> (i) JOURNAL ARTICLES IN PRINT </h4>\n        <mat-table [dataSource]=\"objectDataSource.masterFormGroupings.publications.artInP\" class=\"mat-elevation-z8\"\n          style=\"width: 100% ;\">\n          <!-- name Column   artInPDisplayColumn: string[] = ['no', 'pubName' , 'title', 'publisher' , 'sn', 'availableAt', 'used' , 'lf' , 'journalAc',];\n   -->\n\n\n          <ng-container matColumnDef=\"no\">\n            <th mat-header-cell *matHeaderCellDef>S/N</th>\n            <td mat-cell *matCellDef=\"let element ;let i  = index; \"> {{ i  + 1 }} </td>\n          </ng-container>\n\n\n          <ng-container matColumnDef=\"pubName\">\n            <th mat-header-cell *matHeaderCellDef> JOURNAL ARTICLES IN PRINT </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.pubName}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"title\">\n            <th mat-header-cell *matHeaderCellDef> TITLE </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.title}} </td>\n          </ng-container>\n\n\n          <ng-container matColumnDef=\"publisher\">\n            <th mat-header-cell *matHeaderCellDef> PUBLISHER </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.publisher}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"sn\">\n            <th mat-header-cell *matHeaderCellDef> SERIAL NUMBER </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.sn}} </td>\n          </ng-container>\n\n\n          <ng-container matColumnDef=\"availableAt\">\n            <th mat-header-cell *matHeaderCellDef> SERIAL NUMBER </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.availableAt}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"used\">\n            <th mat-header-cell *matHeaderCellDef> USED </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.used}} </td>\n          </ng-container>\n\n\n\n          <ng-container matColumnDef=\"lf\">\n            <th mat-header-cell *matHeaderCellDef> LOCAL / FOREING </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.used}} </td>\n          </ng-container>\n\n\n          <ng-container matColumnDef=\"journalA\">\n            <th mat-header-cell *matHeaderCellDef> FULL DETAILS </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.journalA}} </td>\n          </ng-container>\n\n\n          <tr mat-header-row *matHeaderRowDef=\"artInPDisplayColumn\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: artInPDisplayColumn\"></tr>\n        </mat-table>\n\n\n\n\n        <div>\n          <h4 style=\" margin-top: 5% ; font-weight: bold\"> (ii) ARTICLES ACCEPTED FOR PUBLICATION ( IN PRESS ) </h4>\n          <mat-table [dataSource]=\"objectDataSource.masterFormGroupings.publications.articlesAcc\"\n            class=\"mat-elevation-z8\" style=\"width: 100% ;\">\n            <!-- name Column -->\n\n            <ng-container matColumnDef=\"no\">\n              <th mat-header-cell *matHeaderCellDef>S/N</th>\n              <td mat-cell *matCellDef=\"let element ;let i  = index; \"> {{ i  + 1 }} </td>\n            </ng-container>\n\n\n            <ng-container matColumnDef=\"pubName\">\n              <th mat-header-cell *matHeaderCellDef> JOURNAL ARTICLES IN PRINT </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.pubName}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"title\">\n              <th mat-header-cell *matHeaderCellDef> TITLE </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.title}} </td>\n            </ng-container>\n\n\n            <ng-container matColumnDef=\"publisher\">\n              <th mat-header-cell *matHeaderCellDef> PUBLISHER </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.publisher}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"sn\">\n              <th mat-header-cell *matHeaderCellDef> SERIAL NUMBER </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.sn}} </td>\n            </ng-container>\n\n\n            <ng-container matColumnDef=\"availableAt\">\n              <th mat-header-cell *matHeaderCellDef> SERIAL NUMBER </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.availableAt}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"used\">\n              <th mat-header-cell *matHeaderCellDef> USED </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.used}} </td>\n            </ng-container>\n\n\n\n            <ng-container matColumnDef=\"lf\">\n              <th mat-header-cell *matHeaderCellDef> LOCAL / FOREING </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.used}} </td>\n            </ng-container>\n\n\n            <ng-container matColumnDef=\"journalAc\">\n              <th mat-header-cell *matHeaderCellDef> FULL DETAILS </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.journalAc}} </td>\n            </ng-container>\n\n\n            <tr mat-header-row *matHeaderRowDef=\"articlesAccDisplayColumn\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: articlesAccDisplayColumn\"></tr>\n          </mat-table>\n\n        </div>\n\n\n\n\n\n\n\n\n        <div>\n          <h4 style=\" margin-top: 5% ; font-weight: bold\"> (iii) BOOK ARTICLE OR CHAPTER </h4>\n          <mat-table [dataSource]=\"objectDataSource.masterFormGroupings.publications.bookArticlesOrChapter\"\n            class=\"mat-elevation-z8\" style=\"width: 100% ;\">\n\n\n            <ng-container matColumnDef=\"no\">\n              <th mat-header-cell *matHeaderCellDef>S/N</th>\n              <td mat-cell *matCellDef=\"let element ;let i  = index; \"> {{ i  + 1 }} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"bookArtChapt\">\n              <th mat-header-cell *matHeaderCellDef> BOOK </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.bookArtChapt}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"used\">\n              <th mat-header-cell *matHeaderCellDef> USED FOR PROMOTION </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.used}} </td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"bookArticlesOrChapterDisplayColumn\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: bookArticlesOrChapterDisplayColumn\"></tr>\n          </mat-table>\n\n        </div>\n\n\n\n\n        <div>\n          <h4 style=\" margin-top: 5% ; font-weight: bold\"> (iv) ARTICLES ACCEPTED FOR PUBLICATION ( IN PRESS ) </h4>\n          <mat-table [dataSource]=\"objectDataSource.masterFormGroupings.publications.bookArticlesOrChapter\"\n            class=\"mat-elevation-z8\" style=\"width: 100% ;\">\n\n\n            <ng-container matColumnDef=\"no\">\n              <th mat-header-cell *matHeaderCellDef>S/N</th>\n              <td mat-cell *matCellDef=\"let element ;let i  = index; \"> {{ i  + 1 }} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"bookArtChapt\">\n              <th mat-header-cell *matHeaderCellDef> BOOK ARTICLE / CHATPER </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.bookArtChapt}} </td>\n            </ng-container>\n\n\n            <ng-container matColumnDef=\"used\">\n              <th mat-header-cell *matHeaderCellDef> USED FOR PROMOTION </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.used}} </td>\n            </ng-container>\n\n\n            <tr mat-header-row *matHeaderRowDef=\"bookArticlesOrChapterDisplayColumn\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: bookArticlesOrChapterDisplayColumn\"></tr>\n          </mat-table>\n\n\n        </div>\n\n\n        <div>\n          <h4 style=\" margin-top: 5% ; font-weight: bold\"> (v) EDITED CONFERENCES PROCEEDINGS </h4>\n          <mat-table [dataSource]=\"objectDataSource.masterFormGroupings.publications.editedConf\"\n            class=\"mat-elevation-z8\" style=\"width: 100% ;\">\n\n            <ng-container matColumnDef=\"no\">\n              <th mat-header-cell *matHeaderCellDef>S/N</th>\n              <td mat-cell *matCellDef=\"let element ;let i  = index; \"> {{ i  + 1 }} </td>\n            </ng-container>\n\n\n            <ng-container matColumnDef=\"pubName\">\n              <th mat-header-cell *matHeaderCellDef> JOURNAL ARTICLES IN PRINT </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.pubName}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"title\">\n              <th mat-header-cell *matHeaderCellDef> TITLE </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.title}} </td>\n            </ng-container>\n\n\n            <ng-container matColumnDef=\"publisher\">\n              <th mat-header-cell *matHeaderCellDef> PUBLISHER </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.publisher}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"sn\">\n              <th mat-header-cell *matHeaderCellDef> SERIAL NUMBER </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.sn}} </td>\n            </ng-container>\n\n\n            <ng-container matColumnDef=\"availableAt\">\n              <th mat-header-cell *matHeaderCellDef> SERIAL NUMBER </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.availableAt}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"used\">\n              <th mat-header-cell *matHeaderCellDef> USED </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.used}} </td>\n            </ng-container>\n\n\n\n            <ng-container matColumnDef=\"lf\">\n              <th mat-header-cell *matHeaderCellDef> LOCAL / FOREING </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.used}} </td>\n            </ng-container>\n\n\n            <ng-container matColumnDef=\"editCP\">\n              <th mat-header-cell *matHeaderCellDef> FULL DETAILS </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.editCP}} </td>\n            </ng-container>\n\n\n            <tr mat-header-row *matHeaderRowDef=\"editedConfDisplayColumn\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: editedConfDisplayColumn\"></tr>\n          </mat-table>\n\n\n        </div>\n\n\n        <div>\n          <h4 style=\" margin-top: 5% ; font-weight: bold\"> (iii) RESEARCH IN PROGRESS </h4>\n          <mat-table [dataSource]=\"objectDataSource.masterFormGroupings.publications.researchInProgress\"\n            class=\"mat-elevation-z8\" style=\"width: 100% ;\">\n\n            <ng-container matColumnDef=\"no\">\n              <th mat-header-cell *matHeaderCellDef>S/N</th>\n              <td mat-cell *matCellDef=\"let element ; let i  = index ; \"> {{ i  + 1 }} </td>\n            </ng-container>\n\n\n            <ng-container matColumnDef=\"researchInProgress\">\n              <th mat-header-cell *matHeaderCellDef> TECHNICAL SUPPORT </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.researchInProgress}} </td>\n            </ng-container>\n\n\n            <tr mat-header-row *matHeaderRowDef=\"researchInProgressDisplayColumn\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: researchInProgressDisplayColumn\"></tr>\n          </mat-table>\n\n\n        </div>\n\n\n\n        <div>\n          <h4 style=\" margin-top: 5% ; font-weight: bold\"> (iv) TECHNICAL SUPPORT </h4>\n          <mat-table [dataSource]=\"objectDataSource.masterFormGroupings.publications.technicalReport\"\n            class=\"mat-elevation-z8\" style=\"width: 100% ;\">\n\n            <ng-container matColumnDef=\"no\">\n              <th mat-header-cell *matHeaderCellDef>S/N</th>\n              <td mat-cell *matCellDef=\"let element ;let i  = index; \"> {{ i  + 1 }} </td>\n            </ng-container>\n\n\n            <ng-container matColumnDef=\"report\">\n              <th mat-header-cell *matHeaderCellDef> TECHNICAL SUPPORT </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.report}} </td>\n            </ng-container>\n\n\n            <tr mat-header-row *matHeaderRowDef=\"technicalReportDisplayColumn\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: technicalReportDisplayColumn\"></tr>\n          </mat-table>\n\n\n        </div>\n\n\n\n        <div>\n          <h4 style=\" margin-top: 5% ; font-weight: bold\"> (v) THESIS , DISSERTATION AND PROJECTS </h4>\n          <mat-table [dataSource]=\"objectDataSource.masterFormGroupings.publications.technicalReport\"\n            class=\"mat-elevation-z8\" style=\"width: 100% ;\">\n\n\n            <ng-container matColumnDef=\"no\">\n              <th mat-header-cell *matHeaderCellDef>S/N</th>\n              <td mat-cell *matCellDef=\"let element ;let i  = index; \"> {{ i  + 1 }} </td>\n            </ng-container>\n\n\n            <ng-container matColumnDef=\"thesis\">\n              <th mat-header-cell *matHeaderCellDef>THESIS</th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.thesis}} </td>\n            </ng-container>\n\n\n            <tr mat-header-row *matHeaderRowDef=\"thesisDissProDisplayColumn\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: thesisDissProDisplayColumn\"></tr>\n          </mat-table>\n\n\n        </div>\n      </div>\n\n\n\n\n      <div>\n        <h4 style=\" margin-top: 5% ; font-weight: bold\"> 10. MAJOR CONFERENCES ATTENDED WITH PAPERS READ </h4>\n        <mat-table [dataSource]=\"objectDataSource.masterFormGroupings.conferencesAttended\" class=\"mat-elevation-z8\"\n          style=\"width: 100% ;\">\n\n          <ng-container matColumnDef=\"no\">\n            <th mat-header-cell *matHeaderCellDef>S/N</th>\n            <td mat-cell *matCellDef=\"let element ;let i  = index; \"> {{ i  + 1 }} </td>\n          </ng-container>\n\n\n          <ng-container matColumnDef=\"confPapR\">\n            <th mat-header-cell *matHeaderCellDef>MAJOR CONFERENCE ATTENDED</th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.confPapR}} </td>\n          </ng-container>\n\n\n          <tr mat-header-row *matHeaderRowDef=\"conferencesAttendedDisplayColumn\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: conferencesAttendedDisplayColumn\"></tr>\n        </mat-table>\n        <!-- <ol style=\"list-style: lower-roman;\">\n          <li *ngFor=\"let item of objectDataSource.masterFormGroupings.conferencesAttended\">\n            {{item.confPapR}}\n          </li>\n        </ol> -->\n\n\n\n\n\n        <h4 style=\" margin-top: 5% ; font-weight: bold\"> * PAPERS READ </h4>\n        <mat-table [dataSource]=\"objectDataSource.masterFormGroupings.papersRead\" class=\"mat-elevation-z8\"\n          style=\"width: 100% ;\">\n\n          <ng-container matColumnDef=\"no\">\n            <th mat-header-cell *matHeaderCellDef>S/N</th>\n            <td mat-cell *matCellDef=\"let element ;let i  = index; \"> {{ i  + 1 }} </td>\n          </ng-container>\n\n\n          <ng-container matColumnDef=\"paper\">\n            <th mat-header-cell *matHeaderCellDef>PAPER</th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.paper}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"used\">\n            <th mat-header-cell *matHeaderCellDef>USED FOR PROMOTION</th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.used}} </td>\n          </ng-container>\n\n\n          <tr mat-header-row *matHeaderRowDef=\"papersReadDisplayColumn\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: papersReadDisplayColumn\"></tr>\n        </mat-table>\n\n      </div>\n\n\n      <div>\n        <h3 style=\" margin-top: 5% ; font-weight: bold\"> 11. FELLOWSHIP , MASTER'S PROJECTS AND Ph.D. SUPERVISED </h3>\n        <h3 style=\" margin-top: 5% ; font-weight: bold\"> A. FELLOWSHIP </h3>\n        <mat-table [dataSource]=\"objectDataSource.masterFormGroupings.fellowship\" class=\"mat-elevation-z8\"\n          style=\"width: 100% ;\">\n\n\n          <ng-container matColumnDef=\"no\">\n            <th mat-header-cell *matHeaderCellDef>S/N</th>\n            <td mat-cell *matCellDef=\"let element ;let i  = index; \"> {{ i  + 1 }} </td>\n          </ng-container>\n\n\n          <ng-container matColumnDef=\"post\">\n            <th mat-header-cell *matHeaderCellDef>POST</th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.post}} </td>\n          </ng-container>\n\n\n          <ng-container matColumnDef=\"organization\">\n            <th mat-header-cell *matHeaderCellDef>ORGANISATION</th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.organization}} </td>\n          </ng-container>\n\n\n          <ng-container matColumnDef=\"date\">\n            <th mat-header-cell *matHeaderCellDef>DATE</th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.date}} </td>\n          </ng-container>\n\n\n          <tr mat-header-row *matHeaderRowDef=\"fellowshipProgrammeDisplayColumn\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: fellowshipProgrammeDisplayColumn\"></tr>\n        </mat-table>\n\n\n\n\n        <h4 style=\" margin-top: 5% ; font-weight: bold\"> B. SUPERVISION </h4>\n        <mat-table [dataSource]=\"objectDataSource.masterFormGroupings.supervisionPost\" class=\"mat-elevation-z8\"\n          style=\"width: 100% ;\">\n\n          <ng-container matColumnDef=\"no\">\n            <th mat-header-cell *matHeaderCellDef>S/N</th>\n            <td mat-cell *matCellDef=\"let element ;let i  = index; \"> {{ i  + 1 }} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"title\">\n            <th mat-header-cell *matHeaderCellDef>TITLE</th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.title}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"nameOfStudent\">\n            <th mat-header-cell *matHeaderCellDef>NAME OF STUDENT</th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.nameOfStudent}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"_d1\">\n            <th mat-header-cell *matHeaderCellDef>DATE / YEAR OF COMMENCEMENT</th>\n            <td mat-cell *matCellDef=\"let element\"> {{element._d1}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"_d2\">\n            <th mat-header-cell *matHeaderCellDef> COMPLETED / ONGOING </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element._d2}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"soleColla\">\n            <th mat-header-cell *matHeaderCellDef>COLLABORATION</th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.soleColla}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"degree\">\n            <th mat-header-cell *matHeaderCellDef>DEGREE</th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.degree}} </td>\n          </ng-container>\n\n          <tr mat-header-row *matHeaderRowDef=\"supervisionPostDisplayColumn\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: supervisionPostDisplayColumn\"></tr>\n        </mat-table>\n\n      </div>\n\n\n      <div>\n        <h4 style=\" margin-top: 5% ; font-weight: bold\"> 12. EXTRA CURRICULAR ACTIVITES </h4>\n        <mat-table [dataSource]=\"objectDataSource.masterFormGroupings.extraCurriculaActivities\" class=\"mat-elevation-z8\"\n          style=\"width: 100% ;\">\n\n          <ng-container matColumnDef=\"no\">\n            <th mat-header-cell *matHeaderCellDef>S/N</th>\n            <td mat-cell *matCellDef=\"let element ;let i  = index; \"> {{ i  + 1 }} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"activity\">\n            <th mat-header-cell *matHeaderCellDef>ACTIVITY</th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.activity}} </td>\n          </ng-container>\n\n          <tr mat-header-row *matHeaderRowDef=\"extraCurriculaActivitiesDisplayColumn\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: extraCurriculaActivitiesDisplayColumn\"></tr>\n        </mat-table>\n\n\n      </div>\n\n\n      <div>\n        <h4 style=\" margin-top: 5% ; font-weight: bold\"> 12. REFREES </h4>\n        <mat-table [dataSource]=\"objectDataSource.masterFormGroupings.refrees\" class=\"mat-elevation-z8\"\n          style=\"width: 100% ;\">\n\n          <ng-container matColumnDef=\"no\">\n            <th mat-header-cell *matHeaderCellDef>S/N</th>\n            <td mat-cell *matCellDef=\"let element ;let i  = index; \"> {{romanNumbering[i]}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"refreeFullName\">\n            <th mat-header-cell *matHeaderCellDef>REFREE FULL NAME</th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.refreeFullName}} </td>\n          </ng-container>\n\n\n          <ng-container matColumnDef=\"occupation\">\n            <th mat-header-cell *matHeaderCellDef> OCCUPATION </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.occupation}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"phoneNumber\">\n            <th mat-header-cell *matHeaderCellDef> PHONENUMBER </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.phoneNumber}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"address\">\n            <th mat-header-cell *matHeaderCellDef> ADDRESS </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.address}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"email\">\n            <th mat-header-cell *matHeaderCellDef>EMAIL</th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\n          </ng-container>\n\n          <tr mat-header-row *matHeaderRowDef=\"refreesDisplayColumn\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: refreesDisplayColumn\"></tr>\n\n        </mat-table>\n\n\n      </div>\n\n\n      <mat-card>\n        <mat-card-header color=\"accent\">\n          <mat-card-title>Your Signature</mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n          <div style=\"float: left ;margin: 10% 10% 20% 10%;\">\n            <div>\n              <img [src]=\"objectDataSource.masterFormGroupings.dateAndSignature.base64Image\" alt=\"Your Signature\"\n                width=\"400px\" height=\"400px\" srcset=\"\">\n              <h4 style=\" margin-top: 5% ; font-weight: bold\"> SIGNATURE </h4>\n            </div>\n            <h4 style=\" margin-top: 5% ; font-weight: bold\"> DATE :\n              {{objectDataSource.masterFormGroupings.dateAndSignature.dateSigned}} </h4>\n          </div>\n        </mat-card-content>\n        <mat-card-actions>\n        </mat-card-actions>\n      </mat-card>\n\n\n\n\n\n\n    </form>\n\n    <section id=\"educationalQualificationSect\"></section>\n\n    <section id=\"workExperinceSection\"></section>\n\n    <section id=\"\"></section>\n    <p-toast position=\"top-right\"></p-toast>\n\n  </div>\n\n\n\n  <ng-container *ngIf=\"showBlurBackgroundOverlay; then blurBody; else unBlurBody\"></ng-container>\n  <!--------------------------Background Overlay-------------------------------->\n  <ng-template #blurBody>\n    <img src=\"/assets/liquid-preloader_dribbble_v2.gif\" class=\"overlay\">\n  </ng-template>\n  <ng-template #unBlurBody>\n  </ng-template>\n  <p-toast position=\"top-right\"></p-toast>\n\n</div>\n"

/***/ }),

/***/ "./src/app/preview-cv/preview-cv.component.ts":
/*!****************************************************!*\
  !*** ./src/app/preview-cv/preview-cv.component.ts ***!
  \****************************************************/
/*! exports provided: PreviewCvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewCvComponent", function() { return PreviewCvComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _servies_cache_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../servies/cache.service */ "./src/app/servies/cache.service.ts");
/* harmony import */ var _servies_custom_http_services_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../servies/custom-http-services.service */ "./src/app/servies/custom-http-services.service.ts");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_7__);








var PreviewCvComponent = /** @class */ (function () {
    function PreviewCvComponent(activatedRoute, router, messageService, httpRequest, cacheService, fb) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.messageService = messageService;
        this.httpRequest = httpRequest;
        this.cacheService = cacheService;
        this.fb = fb;
        this.personalInformation = {};
        this.loginCredentials = [{}];
        this.eaphni = [{}];
        this.masterFormGroupings = [{}];
        this.base64Img = null;
        this.margins = {
            top: 70,
            bottom: 40,
            left: 30,
            width: 550
        };
        this.ELEMENT_DATA = [];
        this.EDU_DATA = [];
        this.WORk_DATA = [];
        this.COURSES_TAUGHT_DATA = [];
        this.COURSES_DESCRIPTION_DATA = [];
        this.showBlurBackgroundOverlay = false;
        this.hideCard = false;
        this.displayedColumns = ['no', 'name', 'value'];
        this.workExperienceDisplayColumn = ['no', 'organization', 'postHeld', 'duties', 'fromDate', 'toDate'];
        this.otherWorkDisplayColumn = ['no', 'organization', 'postHeld', 'duties', 'fromDate', 'toDate'];
        this.schoolworkexpDisplayColumn = ['courseCode', 'creditHours', 'numOfLecturers', 'numberOfRegStd', 'contribution', 'session', 'school', 'level'];
        this.courseDescriptionsDisplayColumn = ['no', 'courseCode', 'courseTitle'];
        this.commendationDisplayColumn = ['no', 'by', 'commendationFor', 'commendationDate'];
        this.researchInterestsDisplayColumn = ['no', 'interest'];
        this.commissionedProjectDisplayColumn = ['no', 'commissionedProject'];
        this.articlesAccDisplayColumn = ['no', 'pubName', 'title', 'publisher', 'sn', 'availableAt', 'used', 'lf', 'journalAc'];
        this.artInPDisplayColumn = ['no', 'pubName', 'title', 'publisher', 'sn', 'availableAt', 'used', 'lf', 'journalA'];
        this.booksDisplayColumn = ['no', 'book', 'used'];
        this.bookArticlesOrChapterDisplayColumn = ['no', 'bookArtChapt', 'used'];
        this.editedConfDisplayColumn = ['no', 'pubName', 'title', 'publisher', 'sn', 'availableAt', 'used', 'lf', 'editCP'];
        this.technicalReportDisplayColumn = ['no', 'report'];
        this.researchInProgressDisplayColumn = ['no', 'researchInProgress'];
        this.thesisDissProDisplayColumn = ['no', 'thesis'];
        this.papersDisplayColumn = ['no', 'paper', 'used'];
        this.conferencesAttendedDisplayColumn = ['no', 'confPapR'];
        this.paperDisplayColumn = ['no', 'confPapR', 'used'];
        this.refreesDisplayColumn = ['no', 'refreeFullName', 'occupation', 'phoneNumber', 'address', 'email'];
        this.papersReadDisplayColumn = ['no', 'paper', 'used'];
        this.membershipOfProfessionalBodiesDisplayColumn = ['no', 'postHeld', 'organization', 'no'];
        this.specialAssignmentATEDisplayColumn = ['no', 'postHeld', 'organization', 'fromDate', 'toDate'];
        this.specialAssignmentMCDisplayColumn = ['no', 'postHeld', 'organization', 'fromDate', 'toDate'];
        this.specialAssignmentCSDisplayColumn = ['no', 'postHeld', 'communityServiceDescription', 'fromDate', 'toDate'];
        this.trainingProgrammeDisplayColumn = ['no', 'description', 'training'];
        this.fellowshipProgrammeDisplayColumn = ['no', 'post', 'organization', 'date'];
        this.supervisionPostDisplayColumn = ['no', 'title', 'nameOfStudent', '_d1', '_d2', 'soleColla', 'degree'];
        this.extraCurriculaActivitiesDisplayColumn = ['no', 'activity'];
        this.educationArrayDisplayColumn = ['no', 'schoolAttended', 'fromDate', 'toDate'];
        this.academicQualificationsDisplayColumn = ['no', 'title', 'date'];
        this.professionalQualificationsDisplayColumn = ['no', 'title', 'date'];
        this.prizesDisplayColumn = ['no', 'title', 'date'];
        this.honoursDisplayColumn = ['no', 'title', 'date'];
        this.scholarshipsDisplayColumn = ['no', 'receivedFrom', 'title', 'date'];
        this.nationalRecognitionsDisplayColumn = ['no', 'receivedFrom', 'title', 'date'];
        this.internationalRecognitionsDisplayColumn = ['no', 'receivedFrom', 'title', 'date'];
        this.loginCredRecognitionsDisplayColumn = ['no', 'username', 'password', 'dateReg'];
        this.paperReviewingDisplayColumn = ['no', 'paperR'];
        this.displayEdu = ['no', 'edu', 'fromDate', 'toDate'];
        this.dataSource = this.ELEMENT_DATA;
        this.objectDataSource = {
            'masterFormGroupings': {
                'workExperience': [{}],
                'otherWorkExperience': [{}],
                'schoolworkexp': [{}],
                'courseDescriptions': [{}],
                'conferencesAttended': [{}],
                'papersRead': [{}],
                'refrees': [{}],
                'membershipOfProfessionalBodies': [{}],
                'specialAssignmentATE': [{}],
                'specialAssignmentMC': [{}],
                'specialAssignmentCS': [{}],
                'trainingProgramme': [{}],
                'fellowship': [{}],
                'supervisionPost': [{}],
                'supervisionPostPart': [{}],
                'extraCurriculaActivities': [{}],
                'dateAndSignature': { 'base64Image': '', 'signature': '', 'dateSigned': '' },
                'paperReviewing': [{}],
                'commendation': [{}],
                'researchInterests': [{}],
                'commissionedProject': [{}],
                'publications': {
                    'artInP': [{}],
                    'articlesAcc': [{}],
                    'books': [{}],
                    'bookArticlesOrChapter': [{}],
                    'editedConf': [{}],
                    'researchInProgress': [{}],
                    'technicalReport': [{}],
                    'thesisDissPro': [{}],
                    'papers': [{}]
                }
            },
            'eaphni': {
                'educationArray': [{}],
                'academicQualifications': [{}],
                'professionalQualifications': [{}],
                'prizes': [{}],
                'honours': [{}],
                'nationalRecognitions': [{}],
                'internationalRecognitions': [{}]
            },
            'personalInformation': {},
            'loginCredentials': [{}]
        };
        this.romanNumbering = ['(i)', '(ii)', '(iii)', '(iv)', '(v)', '(vi)', '(vii)', '(viii)', '(ix)', '(x)', '(xi)', '(xii)', '(xiii)'];
        if (this.activatedRoute.snapshot.paramMap.has('username')) {
            this.processOne();
            // } else if (this.activatedRoute.snapshot.paramMap.has('payload')) {
            //   this.processTwo();
        }
        else if (this.cacheService.payloadData !== '') {
            this.processTwo();
        }
        else {
            this.personalInformation = {};
            this.addErrorMessage('No data to load');
        }
        // this.objectDataSource =
        //   {
        //     'masterFormGroupings': {
        //       'workExperience': [{ 'organization': '', 'postHeld': '', 'duties': '', 'fromDate': '', 'toDate': '' }],
        //       'otherWorkExperience': [{ 'organization': '', 'postHeld': '', 'duties': '', 'fromDate': '', 'toDate': '' }],
        //       'schoolworkexp': [{
        //         'courseCode': '', 'creditHours': '', 'numOfLecturers': '',
        //         'numberOfRegStd': '', 'contribution': '', 'session': '', 'school': '', 'level': ''
        //       }],
        //       'courseDescriptions': [{ 'courseCode': '', 'courseTitle': '' }],
        //       'paperReviewing': [{ 'paperR': '' }],
        //       'commendation': [{ 'by': 'AKEEM', 'commendationFor': '', 'commendationDate': '' }],
        //       'researchInterests': [{ 'interest': '' }],
        //       'commissionedProject': [{ 'commissionedProject': '' }],
        //       'publications': {
        //         'artInP': [{ 'journalA': '', 'used': '' }],
        //         'articlesAcc': [{ 'journalAc': '', 'used': '' }],
        //         'books': [{ 'book': '', 'used': '' }],
        //         'bookArticlesOrChapter': [{ 'bookArtChapt': '', 'used': '' }],
        //         'editedConf': [{ 'editCP': '', 'used': '' }],
        //         'researchInProgress': [{ 'researchInProgress': '' }],
        //         'technicalReport': [{ 'report': '' }],
        //         'thesisDissPro': [{ 'thesis': '' }],
        //         'papers': [{ 'paper': '', 'used': '' }]
        //       },
        //       'conferencesAttended': [{ 'confPapR': '' }],
        //       'papersRead': [{ 'paper': '', 'used': '' }],
        //       'refrees': [{ 'refreeFullName': '', 'occupation': '', 'phoneNumber': '', 'address': '', 'email': '' }],
        //       'membershipOfProfessionalBodies': [{ 'postHeld': '', 'organization': '', 'no': '' }],
        //       'specialAssignmentATE': [{ 'postHeld': '', 'organization': '', 'fromDate': '', 'toDate': '' }],
        //       'specialAssignmentMC': [{ 'postHeld': '', 'organization': '', 'fromDate': '', 'toDate': '' }],
        //       'specialAssignmentCS': [{ 'postHeld': '', 'communityServiceDescription': '', 'fromDate': '', 'toDate': '' }],
        //       'trainingProgramme': [{ 'training': '', 'description': '' }],
        //       'fellowship': [{ 'post': '', 'organization': '', 'date': '' }],
        //       'supervisionPost': [{ 'title': '', 'nameOfStudent': '', '_d1': '', '_d2': '', 'soleColla': '', 'degree': '' }],
        //       'supervisionPostPart': [{ 'title': '', 'nameOfStudent': '', '_d1': '', '_d2': '', 'soleColla': '', 'degree': '' }],
        //       'extraCurriculaActivities': [{ 'activity': '' }],
        //       'dateAndSignature': { 'dateSigned': '', 'signature': null, 'base64Image': '' },
        //     },
        //     'personalInformation': {
        //       'nameInFull': '',
        //       'dob': '',
        //       'placeOfBirth': '',
        //       'age': '', 'sex': '',
        //       'maritalStatus': '',
        //       'nationality': '',
        //       'town': '',
        //       'townAndStateOfOrigin': '',
        //       'lga': '',
        //       'phoneNumbers': [{ 'phoneNumber': '' }],
        //       'emailAddresses': [{ 'emailAddress': '' }],
        //       'contactAddresses': [{ 'contactAddress': '' }],
        //       'presentEmployer': '',
        //       'presentPostAndSalary': '',
        //       'postOnPromotion': '',
        //     },
        //     'eaphni': {
        //       'educationArray': [{ 'schoolAttended': '', 'fromDate': '', 'toDate': '' }]
        //       , 'academicQualifications': [{ 'receivedFrom': '', 'title': '', 'date': '' }],
        //       'professionalQualifications': [{ 'receivedFrom': '', 'date': '' }],
        //       'prizes': [{ 'receivedFrom': '', 'title': '', 'date': '' }], 'scholarships': [{ 'receivedFrom': '', 'title': '', 'date': '' }],
        //       'honours': [{ 'receivedFrom': '', 'title': '', 'date': '' }],
        //       'nationalRecognitions': [{ 'receivedFrom': '', 'title': '', 'date': '' }],
        //       'internationalRecognitions': [{ 'receivedFrom': '', 'title': '', 'date': '' }]
        //     },
        //     'loginCred': { 'username': '', 'password': '', 'dateReg': 'Fri Jul 26 2019 23:05:19 GMT+0100 (West Africa Standard Time)' }
        //   };
        // this.personalInformation = this.objectDataSource['personalInformation'];
        // this.masterFormGroupings = this.objectDataSource['masterFormGroupings'];
        // this.eaphni = this.objectDataSource['eaphni'];
        // this.loginCredentials = this.objectDataSource['loginCredentials'];
        // const phoneNum = '';
        // const contactAdd = '';
        // const emailAdd = '';
        // Array<Object>(this.personalInformation['phoneNumbers']).forEach((phone) => {
        //   phoneNum.concat(`<li>${phoneNum}</li>`);
        // });
        // Array<Object>(this.personalInformation['contactAddresses']).forEach((comtact) => {
        //   phoneNum.concat(`<li>${contactAdd}</li>`);
        // });
        // Array<Object>(this.personalInformation['emailAddresses']).forEach((email) => {
        //   phoneNum.concat(`<li>${emailAdd}</li>`);
        // });
        // this.ELEMENT_DATA = [{ name: 'NAME IN FULL ', value: '' },
        // { name: 'DATE OF BIRTH', value: 'JUNE 14' },
        // { name: 'PLACE OF BIRTH', value: '' },
        // { name: 'AGE', value: '' },
        // { name: 'SEX', value: '' },
        // { name: 'MARITAL STATUS', value: '' },
        // { name: 'NATIONALITY', value: '' },
        // { name: 'TOWN AND STATE OF ORIGIN', value: '' },
        // { name: 'LOCAL GOVERNMENT AREA', value: '' },
        // { name: 'NATIONALITY', value: '' },
        // { name: 'PHONE NUMBER', value: phoneNum },
        // { name: 'CONTACT ADDRESS', value: contactAdd },
        // { name: 'EMAIL ADDRESSES', value: emailAdd },
        // { name: 'PRESENT POST AND SALARY', value: '' },
        // { name: 'POST ON PROMOTION', value: '' }
        // ];
    }
    PreviewCvComponent.prototype.ngOnInit = function () {
    };
    PreviewCvComponent.prototype.processOne = function () {
        this.username = this.activatedRoute.snapshot.paramMap.get('username');
        this.getUserInformation(this.username);
        this.tempo();
        this.addSuccessMessage('Your data was loaded successfully');
    };
    PreviewCvComponent.prototype.processTwo = function () {
        // this.objectDataSource = JSON.parse(this.activatedRoute.snapshot.paramMap.get('payload'));
        this.objectDataSource = JSON.parse(this.cacheService.payloadData);
        this.tempo();
        // console.log(this.objectDataSource);
        this.processLoadedData();
        this.addSuccessMessage('Your data was loaded successfully');
    };
    PreviewCvComponent.prototype.tempo = function () {
        var phoneNum = '';
        var contactAdd = '';
        var emailAdd = '';
        for (var index = 0; index < Object.keys(this.objectDataSource['personalInformation']['phoneNumbers']).length; index++) {
            var element = this.objectDataSource['personalInformation']['phoneNumbers'][index]['phoneNumber'];
            // // console.log(element);
            phoneNum += ' , ' + element;
            // console.log(phoneNum);
        }
        for (var index = 0; index < Object.keys(this.objectDataSource['personalInformation']['contactAddresses']).length; index++) {
            var element = this.objectDataSource['personalInformation']['contactAddresses'][index]['contactAddress'];
            // // console.log(element);
            contactAdd += ' ,  ' + element;
            // console.log(contactAdd);
        }
        for (var index = 0; index < Object.keys(this.objectDataSource['personalInformation']['emailAddresses']).length; index++) {
            var element = this.objectDataSource['personalInformation']['emailAddresses'][index]['emailAddress'];
            //console.log(element);
            emailAdd += ' , ' + element;
            // console.log(emailAdd);
        }
        this.ELEMENT_DATA = [{ name: 'NAME IN FULL ', value: this.objectDataSource['personalInformation']['nameInFull'] },
            { name: 'DATE OF BIRTH', value: this.objectDataSource['personalInformation']['dob'] },
            { name: 'PLACE OF BIRTH', value: this.objectDataSource['personalInformation']['placeOfBirth'] },
            { name: 'AGE', value: this.objectDataSource['personalInformation']['age'] },
            { name: 'SEX', value: this.objectDataSource['personalInformation']['sex'] },
            { name: 'MARITAL STATUS', value: this.objectDataSource['personalInformation']['maritalStatus'] },
            { name: 'NATIONALITY', value: this.objectDataSource['personalInformation']['nationality'] },
            { name: 'TOWN AND STATE OF ORIGIN', value: this.objectDataSource['personalInformation']['townAndStateOfOrigin'] },
            // { name: 'LOCAL GOVERNMENT AREA', value: this.objectDataSource['personalInformation']['lga'] },
            { name: 'CONTACT ADDRESS', value: contactAdd.toString() },
            { name: 'PHONE NUMBER', value: phoneNum.toString() },
            { name: 'EMAIL ADDRESSES', value: emailAdd.toString() },
            { name: 'PRESENT POST AND SALARY', value: this.objectDataSource['personalInformation']['presentPostAndSalary'] },
            { name: 'POST ON PROMOTION', value: this.objectDataSource['personalInformation']['postOnPromotion'] }
        ];
    };
    PreviewCvComponent.prototype.downloadCVAsPDF = function () {
        // const pdf = new jspdf('p', 'pt', 'letter');
        // // source can be HTML-formatted string, or a reference
        // // to an actual DOM element from which the text will be scraped.
        // const source = this.createdCV;
        // // we support special element handlers. Register them with jQuery-style 
        // // ID selector for either ID or node name. ("#iAmID", "div", "span" etc.)
        // // There is no support for any other type of selectors 
        // // (class, of compound) at this time.
        // const specialElementHandlers = {
        //   // element with id of "bypass" - jQuery style selector
        //   '#bypassme':  (element, renderer) {
        //     // true = "handled elsewhere, bypass text extraction"
        //     return true;
        //   }
        // };
        // const margins = {
        //   top: 80,
        //   bottom: 60,
        //   left: 40,
        //   width: 522
        // };
        // // all coords and widths are in jsPDF instance's declared units
        // // 'inches' in this case
        // pdf.fromHTML(
        //   source.nativeElement, // HTML string or DOM elem ref.
        //   margins.left, // x coord
        //   margins.top, { // y coord
        //     'width': margins.width, // max width of content on PDF
        //     'elementHandlers': specialElementHandlers
        //   },
        //    (dispose) {
        //     // dispose: object with X, Y of the last line add to the PDF
        //     //          this allow the insertion of new lines after html
        //     pdf.save('Test.pdf');
        //   }, margins);
        var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_7__('p', 'pt', 'a4');
        pdf.setFontSize(18);
        pdf.fromHTML(document.getElementById('pdfwrapper'), this.margins.left, // x coord
        this.margins.top, {
            // y coord
            width: this.margins.width // max width of content on PDF
        }, function (dispose) {
            var totalPages = pdf.internal.getNumberOfPages();
            for (var i = totalPages; i >= 1; i--) { // make this page, the current page we are currently working on.
                pdf.setPage(i);
                pdf.setFontSize(30);
                pdf.setTextColor(40);
                pdf.setFontStyle('normal');
                var margins = {
                    top: 70,
                    bottom: 40,
                    left: 30,
                    width: 550
                };
                // if (this.base64Img) {
                //   pdf.addImage(this.base64Img, 'JPEG', this.margins.left, 10, 40, 40);
                // }
                pdf.text('', margins.left + 50, 40);
                pdf.line(3, 70, margins.width + 43, 70); // horizontal line
                // this.toDataURL('https://www.gravatar.com/avatar/d50c83cc0c6523b4d3f6085295c953e0', function(dataUrl) {
                //   // console.log('RESULT:', dataUrl);
                // });
            }
        }, this.margins);
        var iframe = document.createElement('iframe');
        iframe.setAttribute('style', 'position:absolute;right:0; top:0; bottom:0; height:100%; width:650px; padding:20px;');
        document.body.appendChild(iframe);
        iframe.src = pdf.output('datauristring');
    };
    PreviewCvComponent.prototype.headerFooterFormatting = function (doc) {
    };
    PreviewCvComponent.prototype.header = function (doc) {
        doc.setFontSize(30);
        doc.setTextColor(40);
        doc.setFontStyle('normal');
        if (this.base64Img) {
            doc.addImage(this.base64Img, 'JPEG', this.margins.left, 10, 40, 40);
        }
        doc.text('', this.margins.left + 50, 40);
        doc.line(3, 70, this.margins.width + 43, 70); // horizontal line
        // this.toDataURL('https://www.gravatar.com/avatar/d50c83cc0c6523b4d3f6085295c953e0', function(dataUrl) {
        //   // console.log('RESULT:', dataUrl);
        // });
    };
    PreviewCvComponent.prototype.toDataURL = function (url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            var reader = new FileReader();
            reader.onloadend = function () {
                callback(reader.result);
            };
            reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.send();
    };
    PreviewCvComponent.prototype.printCV = function () {
        this.hideCard = true;
        // console.log(document.getElementsByClassName('card-header'));
        window.print(); // prints the web page
    };
    PreviewCvComponent.prototype.addErrorMessage = function (details) {
        this.messageService.add({ severity: 'error', summary: 'Error Message', detail: details });
    };
    PreviewCvComponent.prototype.addSuccessMessage = function (details) {
        this.messageService.add({ severity: 'success', summary: 'Success Message', detail: details });
    };
    // process the data recieved from the other view or from the server
    PreviewCvComponent.prototype.processLoadedData = function () {
        // this.personalInformation = this.objectDataSource['personalInformation'];
        // this.loginCredentials = this.objectDataSource['loginCredentials'];
        // this.eaphni = this.objectDataSource['eaphni'];
        // this.masterFormGroupings = this.objectDataSource['masterFormGroupings'];
    };
    PreviewCvComponent.prototype.getUserInformation = function (username) {
        var _this = this;
        this.httpRequest.getUserInformation(username).subscribe(function (data) {
            _this.objectDataSource = data; // assigns the username ;
            _this.processLoadedData();
        }, function (error) {
            _this.messageService.add({
                severity: 'error', detail: 'Error Message', summary: 'Failed to load user infomation'
            });
        });
    };
    PreviewCvComponent.prototype.submit = function () {
        var _this = this;
        this.hideCard = true;
        this.blurDocument(true);
        this.httpRequest.sendApplicantInformation(this.objectDataSource).subscribe(function (data) {
            // console.log('Response Message', data);
            _this.blurDocument(false);
            _this.cacheService.registered = true;
            _this.addSuccessMessage('Your Registration was successfull , please proceed to uploads files...');
            setTimeout(function () {
                _this.router.navigate(['/']);
                _this.deleteAllSavedFormsValues();
            }, 2000);
        }, function (error) {
            if (error.status === 500) {
                // console.log('Server error occured please contact admin');
                _this.addErrorMessage('Failed to submit registration form data');
            }
            else {
                // console.log(error);
            }
        });
    };
    PreviewCvComponent.prototype.done = function () {
        this.router.navigateByUrl('http://localhost:8083'); // user dashboard login page
    };
    PreviewCvComponent.prototype.blurDocument = function (cond) {
        this.showBlurBackgroundOverlay = cond;
    };
    PreviewCvComponent.prototype.deleteAllSavedFormsValues = function () {
        // save in local storage here
        window.localStorage.removeItem('personalInformation');
        window.localStorage.removeItem('loginCredentials');
        window.localStorage.removeItem('eaphni');
        window.localStorage.removeItem('masterFormGroupings');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('createdCV'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PreviewCvComponent.prototype, "createdCV", void 0);
    PreviewCvComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-preview-cv',
            template: __webpack_require__(/*! ./preview-cv.component.html */ "./src/app/preview-cv/preview-cv.component.html"),
            styles: [__webpack_require__(/*! ./preview-cv.component.css */ "./src/app/preview-cv/preview-cv.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"],
            _servies_custom_http_services_service__WEBPACK_IMPORTED_MODULE_6__["CustomHttpServicesService"],
            _servies_cache_service__WEBPACK_IMPORTED_MODULE_5__["CacheService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], PreviewCvComponent);
    return PreviewCvComponent;
}());



/***/ }),

/***/ "./src/app/search-cv/search-cv.component.css":
/*!***************************************************!*\
  !*** ./src/app/search-cv/search-cv.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC1jdi9zZWFyY2gtY3YuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/search-cv/search-cv.component.html":
/*!****************************************************!*\
  !*** ./src/app/search-cv/search-cv.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  search-cv works!\n</p>\n"

/***/ }),

/***/ "./src/app/search-cv/search-cv.component.ts":
/*!**************************************************!*\
  !*** ./src/app/search-cv/search-cv.component.ts ***!
  \**************************************************/
/*! exports provided: SearchCvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchCvComponent", function() { return SearchCvComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchCvComponent = /** @class */ (function () {
    function SearchCvComponent() {
    }
    SearchCvComponent.prototype.ngOnInit = function () {
    };
    SearchCvComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-cv',
            template: __webpack_require__(/*! ./search-cv.component.html */ "./src/app/search-cv/search-cv.component.html"),
            styles: [__webpack_require__(/*! ./search-cv.component.css */ "./src/app/search-cv/search-cv.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SearchCvComponent);
    return SearchCvComponent;
}());



/***/ }),

/***/ "./src/app/servies/cache.service.ts":
/*!******************************************!*\
  !*** ./src/app/servies/cache.service.ts ***!
  \******************************************/
/*! exports provided: CacheService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheService", function() { return CacheService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CacheService = /** @class */ (function () {
    function CacheService() {
        this.serverURL = 'http://localhost:8081';
    }
    CacheService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CacheService);
    return CacheService;
}());



/***/ }),

/***/ "./src/app/servies/custom-http-services.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/servies/custom-http-services.service.ts ***!
  \*********************************************************/
/*! exports provided: CustomHttpServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomHttpServicesService", function() { return CustomHttpServicesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _cache_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cache.service */ "./src/app/servies/cache.service.ts");




var CustomHttpServicesService = /** @class */ (function () {
    function CustomHttpServicesService(clientHttpRequest, cacheService) {
        this.clientHttpRequest = clientHttpRequest;
        this.cacheService = cacheService;
        this.serverURL = 'http://localhost:8081';
    }
    CustomHttpServicesService.prototype.sendApplicantInformation = function (data) {
        return this.clientHttpRequest.post(this.serverURL + '/applicants/register', data, { responseType: 'text' });
    };
    CustomHttpServicesService.prototype.sendFiles = function (data) {
        console.log(JSON.stringify(data['data']));
        return this.clientHttpRequest.post(this.serverURL + '/upload/' + data['url'], data['data'], { responseType: 'json' });
    };
    CustomHttpServicesService.prototype.removeFiles = function (data) {
        return this.clientHttpRequest.post(this.serverURL + '/upload/' + data['url'], data['data'], { responseType: 'text' });
    };
    /**
     *
     * @param username
     */
    CustomHttpServicesService.prototype.checkUsername = function (value) {
        return this.clientHttpRequest.post(this.serverURL + '/users/exists', { 'username': value }, { responseType: 'json' });
    };
    /**
     *
     * @param username
     */
    CustomHttpServicesService.prototype.grantUserLogin = function (username, password) {
        return this.clientHttpRequest.post(this.serverURL + '/users/grant', { 'username': username, 'password': password }, { responseType: 'json' });
    };
    /**
   *
   * @param username The usename of the user
   */
    CustomHttpServicesService.prototype.getUserInformation = function (username) {
        return this.clientHttpRequest.get("" + this.serverURL + '/applicants/byusername/' + username, { responseType: 'json' });
    };
    /**
     *
     * @param username The usename of the user
     */
    CustomHttpServicesService.prototype.submitSurvey = function (survey) {
        return this.clientHttpRequest.post("" + this.serverURL + '/survey/add', { 'survey': survey }, { responseType: 'json' });
    };
    CustomHttpServicesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _cache_service__WEBPACK_IMPORTED_MODULE_3__["CacheService"]])
    ], CustomHttpServicesService);
    return CustomHttpServicesService;
}());

/**
 *
 * checkEmailNotTaken(email: string) {
    return this.http
      .get('assets/users.json')
      .delay(1000)
      .map(res => res.json())
      .map(users => users.filter(user => user.email === email))
      .map(users => !users.length);
  }
 */


/***/ }),

/***/ "./src/app/servies/login-cache.service.ts":
/*!************************************************!*\
  !*** ./src/app/servies/login-cache.service.ts ***!
  \************************************************/
/*! exports provided: LoginCacheService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginCacheService", function() { return LoginCacheService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginCacheService = /** @class */ (function () {
    function LoginCacheService() {
        this.loggedIn = false;
        this.password = '';
        this.username = '';
    }
    LoginCacheService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginCacheService);
    return LoginCacheService;
}());



/***/ }),

/***/ "./src/app/survey-form/survey-form.component.css":
/*!*******************************************************!*\
  !*** ./src/app/survey-form/survey-form.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".radio-display {\n    display: flex ;\n    flex-direction: column ;\n    margin: 15px 0;\n}\n\n.radio-button-display {\n    margin: 5px ;\n}\n\n.marging-left-0 {\n    margin: 0 ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VydmV5LWZvcm0vc3VydmV5LWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsZUFBZTtDQUNsQjs7QUFFRDtJQUNJLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxXQUFXO0NBQ2QiLCJmaWxlIjoic3JjL2FwcC9zdXJ2ZXktZm9ybS9zdXJ2ZXktZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJhZGlvLWRpc3BsYXkge1xuICAgIGRpc3BsYXk6IGZsZXggO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gO1xuICAgIG1hcmdpbjogMTVweCAwO1xufVxuXG4ucmFkaW8tYnV0dG9uLWRpc3BsYXkge1xuICAgIG1hcmdpbjogNXB4IDtcbn1cblxuLm1hcmdpbmctbGVmdC0wIHtcbiAgICBtYXJnaW46IDAgO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/survey-form/survey-form.component.html":
/*!********************************************************!*\
  !*** ./src/app/survey-form/survey-form.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Start Preloader-->\n<div class=\"preloader\" style=\"display: none;\">\n  <div class=\"d-table\">\n    <div class=\"d-table-cell align-middle\">\n      <div class=\"spinner\">\n        <div class=\"double-bounce1\"></div>\n        <div class=\"double-bounce2\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n<!--End Preloader-->\n<!--start header-->\n<header id=\"header\">\n  <div class=\"container\">\n    <nav class=\"navbar navbar-expand-lg\">\n      <div class=\"container\">\n        <!-- Logo -->\n        <!-- <a class=\"logo\" href=\"#\"><img src=\"/assets/new-assets/images/logo.png\" alt=\"logo\"></a> -->\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarContent\"\n          aria-controls=\"navbarContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"icon-bar\"><i class=\"icofont-navigation-menu\"></i></span>\n        </button>\n        <!-- navbar links -->\n        <div class=\"collapse navbar-collapse\" id=\"navbarContent\">\n          <ul class=\"navbar-nav ml-auto\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link active\" data-scroll-nav=\"0\" [routerLink]=\"[ '' ]\">Home</a>\n            </li>\n            <li class=\"nav-item\">\n              <!-- <a class=\"nav-link\" href=\"#\" data-scroll-nav=\"1\">Features</a> -->\n              <a class=\"nav-link\" data-scroll-nav=\"1\" [routerLink]=\"[ '' ]\">About PGS</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#\" data-scroll-nav=\"2\" [routerLink]=\"[ '/' ]\" >Contact Administrator</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#\" data-scroll-nav=\"3\">Terms and Condition</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#\" data-scroll-nav=\"4\">FUNAAB Homepage</a>\n            </li>\n            <li class=\"nav-item\">\n              <!-- <a class=\"nav-link\" href=\"#\">Blog</a> -->\n            </li>\n            <li class=\"nav-item download-btn\">\n              <a class=\"nav-link\" data-scroll-nav=\"5\" [routerLink]=\"[ '/cv-documentation' ]\">Create and Submit CV </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </nav>\n  </div>\n</header>\n\n\n<section class=\"bg bg-2\" id=\"faq-area\">\n  <div class=\"faq-area-img\"><img alt=\"\" class=\"img-fluid\" src=\"/assets/new-assets/images/faq-bg-1.png\"></div>\n  <div class=\"container\" [formGroup]=\"surveyGroup\">\n    <div class=\"row\">\n      <div class=\"col-md-8 offset-md-2\">\n        <div class=\"section-heading text-center\">\n          <h5>A Quicky!</h5>\n          <h2 class=\"text-white\">Welcome to PGS Quick Survey Section</h2>\n          <p class=\"text-light\">This survey helps us serve you better and improve the promotional Grading System</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-7\">\n        <div id=\"accordion\" role=\"tablist\">\n\n          <div class=\"card v-dark\">\n            <div class=\"card-header active\" id=\"faq1\" role=\"tab\">\n              <h5 class=\"mb-0\"><a aria-controls=\"collapse1\" aria-expanded=\"true\" data-toggle=\"collapse\"\n                  href=\"#collapse1\">What do you think about the promotional grading system ?</a></h5>\n            </div>\n            <div aria-labelledby=\"faq1\" class=\"collapse show\" data-parent=\"#accordion\" id=\"collapse1\" role=\"tabpanel\">\n              <div class=\"card-body\">\n                <p>What do you think about the promotional grading system ?</p>\n                <textarea name=\"\" id=\"\" cols=\"40\" rows=\"10\" formControlName=\"survey1\"></textarea>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"card v-dark\">\n            <div class=\"card-header\" id=\"faq2\" role=\"tab\">\n              <h5 class=\"mb-0\"><a aria-controls=\"collapse2\" aria-expanded=\"false\" class=\"collapsed\"\n                  data-toggle=\"collapse\" href=\"#collapse2\">What other features do you think we can inporve on ?</a>\n              </h5>\n            </div>\n            <div aria-labelledby=\"faq2\" class=\"collapse\" data-parent=\"#accordion\" id=\"collapse2\" role=\"tabpanel\">\n              <div class=\"card-body\">\n                <textarea name=\"\" id=\"\" cols=\"40\" rows=\"10\" placeholder=\"Please enter your feebaack here\"\n                  formControlName=\"survey2\"></textarea>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"card v-dark\">\n            <div class=\"card-header\" id=\"faq3\" role=\"tab\">\n              <h5 class=\"mb-0\"><a aria-controls=\"collapse3\" aria-expanded=\"false\" class=\"collapsed\"\n                  data-toggle=\"collapse\" href=\"#collapse3\">What do you think about the user inteface ?</a></h5>\n            </div>\n            <div aria-labelledby=\"faq3\" class=\"collapse\" data-parent=\"#accordion\" id=\"collapse3\" role=\"tabpanel\">\n              <div class=\"card-body\">\n                <textarea name=\"\" id=\"\" cols=\"40\" rows=\"10\" placeholder=\"Enter your feedback here...\"\n                  formControlName=\"survey3\"></textarea>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"card v-dark\">\n            <div class=\"card-header\" id=\"faq4\" role=\"tab\">\n              <h5 class=\"mb-0\"><a aria-controls=\"collapse4\" aria-expanded=\"false\" class=\"collapsed\"\n                  data-toggle=\"collapse\" href=\"#collapse4\">Please tell us how the form preview is\n                </a> </h5>\n            </div>\n            <div aria-labelledby=\"faq4\" class=\"collapse\" data-parent=\"#accordion\" id=\"collapse4\" role=\"tabpanel\">\n              <div class=\"card-body\">\n                <p>\n                  <mat-radio-group class=\"radio-display\" formControlName=\"survey4\">\n                    <mat-radio-button value=\"Good\" class=\"radio-button-display\">Good</mat-radio-button>\n                    <mat-radio-button value=\"Very Good\" class=\"radio-button-display\">Very Good</mat-radio-button>\n                    <mat-radio-button value=\"Partially Good\" class=\"radio-button-display\">Partially Good\n                    </mat-radio-button>\n                    <mat-radio-button value=\"Aweful Look\" class=\"radio-button-display\">Aweful Look</mat-radio-button>\n                    <mat-radio-button value=\"Perfect\" class=\"radio-button-display\">Perfect</mat-radio-button>\n                  </mat-radio-group>\n                </p>\n              </div>\n            </div>\n\n           \n\n          </div>\n\n          <ul class=\"navbar-nav ml-auto container\">\n              <li class=\"nav-item download-btn\" style=\"width: 400px;\">\n                  <a class=\"nav-link\" data-scroll-nav=\"5\" (click)=\"submitSurvey()\"  style=\"color: white ;\"> Submit Survey Now </a>\n              </li>\n          </ul>\n\n        </div>\n      </div>\n\n    </div>\n  </div>\n</section>\n<p-toast position=\"bottom-right\"></p-toast>\n"

/***/ }),

/***/ "./src/app/survey-form/survey-form.component.ts":
/*!******************************************************!*\
  !*** ./src/app/survey-form/survey-form.component.ts ***!
  \******************************************************/
/*! exports provided: SurveyFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyFormComponent", function() { return SurveyFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _servies_custom_http_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../servies/custom-http-services.service */ "./src/app/servies/custom-http-services.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_4__);





var SurveyFormComponent = /** @class */ (function () {
    function SurveyFormComponent(fb, customHttp, messageService) {
        this.fb = fb;
        this.customHttp = customHttp;
        this.messageService = messageService;
        this.surveyGroup = this.fb.group({
            survey1: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            survey2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            survey3: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            survey4: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    }
    SurveyFormComponent.prototype.ngOnInit = function () {
    };
    SurveyFormComponent.prototype.submitSurvey = function () {
        var _this = this;
        // console.log(this.surveyGroup.value);
        this.customHttp.submitSurvey(this.surveyGroup.value).subscribe(function (e) {
            _this.messageService.add({
                severity: 'success', 'closable': true,
                detail: 'Response Received ', summary: 'Your Survey was successful'
            });
            _this.surveyGroup.setValue({ 'survey1': '', 'survey2': '', 'survey3': '', 'survey4': '' });
        }, function (error) {
            if (error.status === 500) {
                // console.log('Server side error occured please try again later');
            }
            else if (error.status === 404) {
                _this.messageService.add({
                    severity: 'success', 'closable': true,
                    detail: 'Client Error ', summary: 'Oops... rotue not found'
                });
            }
            else {
                // console.log(error);
                _this.messageService.add({
                    severity: 'error', 'closable': true,
                    detail: 'Client Error ', summary: 'Oops... Cant processs your survey for now!'
                });
            }
        });
    };
    SurveyFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-survey-form',
            template: __webpack_require__(/*! ./survey-form.component.html */ "./src/app/survey-form/survey-form.component.html"),
            styles: [__webpack_require__(/*! ./survey-form.component.css */ "./src/app/survey-form/survey-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _servies_custom_http_services_service__WEBPACK_IMPORTED_MODULE_3__["CustomHttpServicesService"], primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], SurveyFormComponent);
    return SurveyFormComponent;
}());



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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/keemcode/Documents/projects/javascript-projects/typescript-dev/promotional-grading-system/pgs-webapp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map