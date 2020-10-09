(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-ams-helpdesk-helpdesk-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-create-ticket/helpdesk-create-ticket.component.html":
    /*!****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-create-ticket/helpdesk-create-ticket.component.html ***!
      \****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsHelpdeskComponentsHelpdeskCreateTicketHelpdeskCreateTicketComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"help-desk-create-wrapper\">\n    <div class=\"main\">\n        <h4 class=\"mb-4\">\n            <span *ngIf=\"viewMode != 'edit'\">Create Ticket</span>\n            <span *ngIf=\"viewMode == 'edit'\">Edit Ticket</span>\n        </h4>\n        <condo-message class=\"mb-3\" *ngIf=\"message\"\n            [appearance]=\"message.appearance\"\n            [showIcon]=\"message.showIcon\"\n            [type]=\"message.type\"\n            [@shake]=\"message.shake\">\n        {{message.content}}\n        </condo-message>\n        <app-loader *ngIf=\"!isTrackerSubmitted\"></app-loader>\n        <div class=\"bg-card shadow\" *ngIf=\"isTrackerSubmitted\">\n            <form #createHelpDeskForm=\"ngForm\" name=\"createHelpDeskForm\">\n                <!-- radio button in create Mode-->\n                <div class=\"row\" *ngIf=\"isAdmin() && viewMode != 'edit'\">\n                    <div class=\"col-sm-12 text-center\">\n                        <div class=\"input-box radio-box\">\n                            <label>Create Ticket For </label>\n                            <div class=\"form-group\">\n                                <input  name=\"self\" id=\"Self\" [(ngModel)]=\"createdBY\" (change)=\"createdByChange()\"  value=\"self\" type=\"radio\" >\n                                <label class=\"radio-inline\" for=\"Self\">Self</label>\n                                </div>\n                            <div class=\"form-group\">\n                                <input  name=\"user\" id=\"User\"  [(ngModel)]=\"createdBY\" (change)=\"createdByChange()\"  value=\"owner\" type=\"radio\" >\n                                <label class=\"radio-inline\" for=\"User\">Owner</label>\n                            </div>\n                            <div class=\"form-group\">\n                                <input  name=\"user\" id=\"tenant\"  [(ngModel)]=\"createdBY\" (change)=\"createdByChange()\"  value=\"tenant\" type=\"radio\" >\n                                <label class=\"radio-inline\" for=\"tenant\">Tenant</label>\n                            </div>\n                            <div class=\"form-group\">\n                                <input  name=\"staff\" id=\"Staff\" [(ngModel)]=\"createdBY\"  (change)=\"createdByChange()\" value=\"staff\" type=\"radio\" >\n                                <label class=\"radio-inline\" for=\"Staff\">Staff</label>\n                            </div>\n                            <div class=\"form-group\">\n                                <input  name=\"admin\" id=\"Admin\" [(ngModel)]=\"createdBY\" (change)=\"createdByChange()\" value=\"admin\" type=\"radio\" >\n                                <label class=\"radio-inline\" for=\"Admin\">Admin</label>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- Tower Information in Edit mode -->\n                <div class=\"row\" *ngIf=\"ticket.apartmentBlockUnitUserId && viewMode == 'edit'\">\n                    <div class=\"col-sm-12\">\n                        <h6 class=\"mb-5 text-center text-primary\">{{blockunitprimeName}}</h6>\n                    </div>\n                </div>\n                <!-- Ticket Id,Date and CreatedBy in Edit Mode-->\n                <div class=\"row\" *ngIf=\"viewMode == 'edit'\">\n                    <div class=\"col-sm-4\">\n                        <div  class=\"input-box\">\n                            <label>Ticket ID</label>\n                            <p>{{ticket.ticketId}}</p>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-4\">\n                        <div  class=\"input-box\">\n                            <label>Date Of Creation</label>\n                            <p>{{ticket.insertedOn | date: 'MM-dd-y h:mm a' }}</p>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-4\">\n                        <div  class=\"input-box\">\n                            <label>Created By</label>\n                            <p>{{ticket.insertedby_Label}}</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-sm-4\">\n                        <div class=\"select-box\">\n                            <label>Ticket Type<span class=\"required\">*</span></label>\n                            <select name=\"ticketType\" id=\"ticketType\" class=\"form-control\" (change)=\"getCategoryList('change')\"\n                                [(ngModel)]=\"ticket.ticketTypeId\" required>\n                                <option value=\"\" disabled selected hidden>Select</option>\n                                <option *ngFor=\"let item of ticketTypeList\" [ngValue]=\"item.lookupValueId\"> {{ item.lookupValueName }}</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-4\" *ngIf=\"ticket.ticketTypeId\">\n                        <div class=\"select-box\">\n                            <label>Category<span class=\"required\">*</span></label>\n                            <select name=\"ticketCategory\" id=\"ticketCategory\" class=\"form-control\"\n                                [(ngModel)]=\"ticket.ticketCategoryId\" required>\n                                <option value=\"\" disabled selected hidden>Select</option>\n                                <option *ngFor=\"let item of ticketCategoryList | orderBy : 'lookupValueName'\" [ngValue]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-4\">\n                        <div class=\"input-box select-box\">\n                            <label>Priority<span class=\"required\">*</span></label>\n                            <select name=\"priortyType\" id=\"priortyType\" class=\"form-control\"\n                                [(ngModel)]=\"ticket.ticketPriorityId\" required>\n                                <option value=\"\" disabled selected hidden>Select</option>\n                                <option *ngFor=\"let item of priortyTypeList\" [ngValue]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n                            </select>\n                        </div>\n                    </div>\n                </div>\n                 <!-- supervisor in edit Mode-->\n                <div class=\"row\" *ngIf=\"viewMode == 'edit'\">\n                    <div class=\"col-sm-6\">\n                        <div class=\"select-box\">\n                            <label>Supervisor<span class=\"required\">*</span></label>\n                            <select name=\"supervisorId\" id=\"supervisorId\" class=\"form-control\"\n                                [(ngModel)]=\"ticket.supervisorId\" required>\n                                <option value=\"\" disabled selected hidden>Select</option>\n                                <option *ngFor=\"let item of staffsList  | orderBy : 'staffName'\" [ngValue]=\"item.userId\"> \n                                    {{item.staffName}}, {{item.roleName}} - {{item.staffCategoryName}}\n                                </option>\n                            </select>\n                        </div>\n                    </div>\n                </div>\n                <!-- staff and status  -->\n                <div class=\"row\">\n                    <div class=\"col-sm-6\" *ngIf=\"createdBY == 'staff'|| createdBY == 'admin' || viewMode == 'edit'\">\n                        <div class=\"select-box\">\n                            <label *ngIf=\"viewMode != 'edit' && createdBY == 'staff'\">Ticket For Staff<span class=\"required\">*</span></label>\n                            <label *ngIf=\"viewMode != 'edit' && createdBY == 'admin'\">Ticket For Admin<span class=\"required\">*</span></label>\n                            <label *ngIf=\"viewMode == 'edit'\">Assigned To Staff<span class=\"required\">*</span></label>\n                            <select name=\"ticketStaff\" id=\"ticketStaff\" class=\"form-control\"\n                                [(ngModel)]=\"ticket.staffId\" (change)=\"changeTicketStatus()\" required>\n                                <option [ngValue]=\"null\" disabled selected hidden>Select</option>\n                                <option *ngFor=\"let item of staffsList | orderBy : 'staffName'\" [ngValue]=\"item.staffId\"> \n                                    {{item.staffName}}, {{item.roleName}} - {{item.staffCategoryName}}\n                                </option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-4\" *ngIf=\" viewMode == 'edit'\">\n                        <div class=\"select-box\">\n                            <label>Status<span class=\"required\">*</span></label>\n                            <select name=\"ticketStatus\" id=\"ticketStatus\" class=\"form-control\"\n                                [(ngModel)]=\"ticket.ticketStatusId\" required>\n                                <option [ngValue]=\"null\" disabled selected hidden>Select</option>\n                                <option *ngFor=\"let item of statusTypeList\" [ngValue]=\"item.lookupValueId\"> {{ item.lookupValueName }}</option>\n                            </select>\n                        </div>\n                    </div>\n                </div>\n                <!-- block and unit in create Mode-->\n                <div class=\"row\" *ngIf=\"(createdBY == 'tenant' || createdBY == 'owner') && (viewMode != 'edit' && this.isAdmin())\">\n                    <div class=\"col-sm-4\">\n                        <div class=\"select-box\">\n                            <label>Tower No<span class=\"required\">*</span></label>\n                            <select name=\"apartmentBlockId\" id=\"blockNo\" [(ngModel)]=\"block.blockId\" class=\"form-control\" (change)=\"getBlockUnit()\" required>\n                                <option value=\"\" disabled selected hidden>Select</option>\n                                <option *ngFor=\"let item of blockList\" [ngValue]=\"item.apartmentBlockId\">{{ item.apartmentBlockNumber }}</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-4\" *ngIf=\"block.blockId\">\n                        <div class=\"select-box\">\n                            <label>Unit No<span class=\"required\">*</span></label>\n                            <select name=\"unitNo\" id=\"unitNo\" class=\"form-control\" [(ngModel)]=\"block.apartmentBlockUnitId\" (change)=\"getPrimaryNameForUnit()\" required>\n                                <option value=\"\" disabled selected hidden>Select</option>\n                                <option *ngFor=\"let item of blockUnitList\" [ngValue]=\"item.apartmentBlockUnitId\">{{ item.apartmentBlockUnitNumber }}</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-4\" *ngIf=\"block.apartmentBlockUnitId\">\n                        <div class=\"input-box\">\n                            <label>Primary Name</label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter text\" name=\"primaryName\" [value]=\"block.primaryName\" disabled>\n                        </div>\n                    </div>\n                </div>\n                <!-- Description and upload File -->\n                <div class=\"row\">\n                    <div class=\"col-sm-8\">\n                        <div class=\"input-box\">\n                            <label>Subject<span class=\"required\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter text\" name=\"ticketSubject\" [(ngModel)]=\"ticket.title\" [disabled]=\"viewMode == 'edit'\" required>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-12\">\n                        <div class=\"input-box\">\n                            <label>Description<span class=\"required\">*</span></label>\n                            <textarea placeholder=\"Enter value\" name=\"ticketDescription\" [(ngModel)]=\"ticket.description\" required></textarea>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-12\">\t\n                        <div class=\"mb-5\">\n                            <app-upload [fileIds]=\"ticket.fileDetailsIds\" [isEdit]=\"viewMode == 'edit'\" (outputParams)=\"getFileIds($event)\"\n                                [multiple]=\"true\"\n                            ></app-upload>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                        <button class=\"float-right\" *ngIf=\"this.viewMode != 'edit'\" mat-flat-button  [color]=\"'primary'\" (click)=\"createTicket()\">Create</button>\n                        <button class=\"float-right\" *ngIf=\"this.viewMode == 'edit'\" mat-flat-button  [color]=\"'primary'\" (click)=\"updateTicket()\">Update</button>\n                    </div>\n                </div>\n            </form>\n        </div>\n        <!-- create comment box -->\n        <div class=\"bg-card shadow\" *ngIf=\"viewMode == 'edit' && isTrackerSubmitted\">\n            <form>\n                <div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t<label>Add Comment</label>\n\t\t\t\t\t\t\t<textarea placeholder=\"some text here\" name=\"ticketComment\" [(ngModel)]=\"ticketComment\"\n\t\t\t\t\t\t\t\trequired></textarea>\n\t\t\t\t\t\t</div>\n                    </div>\n                    <div class=\"col-sm-12\">\n                        <button class=\"float-right\"  mat-flat-button  [color]=\"'accent'\" (click)=\"createComment('comment')\">Add Comment</button>\n                    </div>\n\t\t\t\t</div>\n            </form>\n        </div>\n        <!-- comment List -->\n        <div class=\"timeline\" *ngIf=\"viewMode == 'edit' && isTrackerSubmitted\">\n            <ul>\n                <li  *ngFor=\"let data of ticketCommentList; let i=index\">\n                    <div class=\"content\">\n                        <div class=\"bg-card shadow\" [ngClass]=\"{'log-border': data.isLog}\">\n                            <div class=\"d-flex\">\n                                <h5>{{data.insertedByName}}</h5>\n                                <span class=\"ml-3 text-secondary\">{{getTimeFormat(data.insertedOn)}}</span>\n                                <div class=\"ml-3 status-badge bg-status-green-700 status-curve\">\n                                    <span class=\"font-bold text-status-green-900 text-uppercase\">{{data.insertedByRole}}</span>\n                                </div>\n                            </div>\n                            <p [innerHTML]=\"data.comments\" class=\"desp\"></p>\n                        </div>\n                    </div>\n                    <div class=\"initial-letter font-medium\" [ngClass]=\"i%2==0 ? 'bg-highlight-base' : 'bg-highlight-light'\">{{data.insertedByName | slice:0:2  | uppercase}}</div>        \n                    <!-- <div class=\"image\">\n                        <img src=\"assets/images/user-icon.svg\" width=\"32\"  height=\"32\"> \n                    </div> -->\n                </li>\n                <div class=\"clear\"></div>\n            </ul>\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-reports/helpdesk-reports-data/helpdesk-reports-data.component.html":
    /*!*******************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-reports/helpdesk-reports-data/helpdesk-reports-data.component.html ***!
      \*******************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsHelpdeskComponentsHelpdeskReportsHelpdeskReportsDataHelpdeskReportsDataComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"user-report-data-wrapper\">\n\t\t<mat-drawer-container class=\"example-container\" [hasBackdrop]=\"true\" #matDrawer>\n\t\t\t\t<mat-drawer class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 p-0\" #filter mode=\"over\" position=\"end\">\n\t\t\t\t\t<div class=\"helpdesk-filter-drawer p-5\">\n\t\t\t\t\t\t<div class=\"title row\">\n\t\t\t\t\t\t\t<h4> Filter By </h4>\n\t\t\t\t\t\t\t<div class=\"ml-auto\">\n\t\t\t\t\t\t\t\t<button mat-icon-button (click)=\"goBack()\">\n\t\t\t\t\t\t\t\t\t<mat-icon [svgIcon]=\"'close'\"></mat-icon>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<condo-card>\n\t\t\t\t\t\t\t<div CondoCardHeader>\n\t\t\t\t\n\t\t\t\t\t\t\t\t<form>\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\n\t\t\t\t\t\t\t\t\t\t <condo-select [fieldModel]=\"blockId\" labelText=\"Tower No\" fieldPlaceholder=\"Select Tower\" fieldId=\"apartmentBlockId\"\n\t\t\t\t\t\t\t\t\t\t [fieldRequired]=\"'required'\" [fieldList]=\"unitBlocksData\" [isDisabled]=\"false\"  fieldValue=\"apartmentBlockNumber\" (fieldParams)=\"getSelectedType($event)\"></condo-select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Start Date<span class=\"required\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" name=\"startDate\" [owlDateTime]=\"startDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[owlDateTimeTrigger]=\"startDate\" placeholder=\"Date Time\" [(ngModel)]=\"start_date\"\n\t\t\t\t\t\t\t\t\t\t\t\t\trequired>\n\t\t\t\t\t\t\t\t\t\t\t\t<owl-date-time #startDate></owl-date-time>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"startDate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-icon svgIcon=\"feather:calendar\"></mat-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>End Date<span class=\"required\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" name=\"endDate\" [owlDateTime]=\"endDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[owlDateTimeTrigger]=\"endDate\" placeholder=\"Date\" [(ngModel)]=\"end_date\" required>\n\t\t\t\t\t\t\t\t\t\t\t\t<owl-date-time #endDate></owl-date-time>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"endDate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-icon svgIcon=\"feather:calendar\"></mat-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-right mt-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button mat-flat-button [color]=\"'primary'\" (click)=\"filterApply()\">Apply</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button mat-button (click)=\"clearFilter()\">Cancel</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</condo-card>\n\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</mat-drawer>\n\t\t\t\t<mat-drawer-content>\n\t\t<div class=\"main\">\n\t\n\t\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\t\t<condo-card *ngIf=\"isDataLoaded && (isListOfTickets())\">\n\t\t\t<div CondoCardHeader>\n\t\t\t\n\n\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<h4>{{pageName}}</h4>\n\t\t\t\t\t\t\t\t<p>{{totalItems}} results</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"ml-auto my-auto\">\n\t\t\t\t\t\t\t<app-table-search [input]=\"userReportData\" (outputParams)=\"onGlSearchFilter($event)\"></app-table-search>\n\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"d-none d-md-block mr-3 my-auto ml-3\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"mr-3 my-auto ml-3\">\n\t\t\t\t\t\t\t<app-print-dropdown (outputParams)=\"getPrintParams($event)\"></app-print-dropdown>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"mr-3 my-auto ml-3\">\n\t\t\t\t\t\t\t<button mat-flat-button [color]=\"'accent'\" (click)=\"filter.toggle()\" class=\"d-none d-md-block\">\n\t\t\t\t\t\t\t\t<mat-icon class=\"mr-2\" svgIcon=\"heroicons_outline:filter\"></mat-icon>Filter\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t<button class=\"d-block d-md-none table-add-btn\" mat-button (click)=\"filter.toggle()\">\n\t\t\t\t\t\t\t\t<mat-icon [svgIcon]=\"'heroicons_outline:filter'\"></mat-icon>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t  </div>\n\t\t\t</div>\n\t\t\t<div CondoCardBody>\n\t\t\t\t<jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n\t\t\t\t\t[filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n\t\t\t\t\t[enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n\t\t\t\t</jqxGrid>\n\t\t\t</div>\n\t\t</condo-card>\n\t\n\t\n\t\t<!-- De Activated Users -->\n\t\t<condo-card *ngIf=\"isDataLoaded && isListofAgedtickets()\">\n\t\t\t<div CondoCardHeader>\n\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h4>{{pageName}}</h4>\n\t\t\t\t\t\t<p>{{totalItems}} results</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ml-auto d-none d-md-block my-auto\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control mt-4\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\" (ngModelChange)=\"onSearchFilter()\">\n\n\t\t\t\t  </div>\n\t\t\t\t  \n\t\t\t\t\t<div class=\"d-none d-md-block mr-3 my-auto ml-3\">\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"d-none d-md-block mr-3 my-auto ml-3\">\n\t\t\t\t\t\t\t<app-print-dropdown (outputParams)=\"getPrintParams($event)\"></app-print-dropdown>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"d-none d-md-block mr-3 my-auto ml-3\">\n\t\t\t\t\t\t\t<button mat-flat-button [color]=\"'accent'\" (click)=\"filter.toggle()\">\n\t\t\t\t\t\t\t\t<mat-icon class=\"mr-2\" svgIcon=\"heroicons_outline:filter\"></mat-icon>Filter\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div CondoCardBody>\n\t\t\t\t<jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n\t\t\t\t\t[filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n\t\t\t\t\t[enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n\t\t\t\t</jqxGrid>\n\t\t\t</div>\n\t\t</condo-card>\n\t\n\t\n\t\n\t\t<!-- vehicle info -->\n\t\t<condo-card *ngIf=\"isDataLoaded && isListofUnassignedtickets()\">\n\t\t\t<div CondoCardHeader>\n\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h4>{{pageName}}</h4>\n\t\t\t\t\t\t<p>{{totalItems}} results</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ml-auto d-none d-md-block my-auto\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control mt-4\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\" (ngModelChange)=\"onSearchFilter()\">\n\n\t\t\t\t  </div>\n\t\t\t\t  \n\t\t\t\t\t<div class=\"d-none d-md-block mr-3 my-auto ml-3\">\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"d-none d-md-block mr-3 my-auto ml-3\">\n\t\t\t\t\t\t\t<app-print-dropdown (outputParams)=\"getPrintParams($event)\"></app-print-dropdown>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"d-none d-md-block mr-3 my-auto ml-3\">\n\t\t\t\t\t\t\t<button mat-flat-button [color]=\"'accent'\" (click)=\"filter.toggle()\">\n\t\t\t\t\t\t\t\t<mat-icon class=\"mr-2\" svgIcon=\"heroicons_outline:filter\"></mat-icon>Filter\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div CondoCardBody>\n\t\t\t\t<jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n\t\t\t\t\t[filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n\t\t\t\t\t[enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n\t\t\t\t</jqxGrid>\n\t\t\t</div>\n\t\t</condo-card>\n\t\n\t\n\t\t\n\t\n\t\n\t</div>\n</mat-drawer-content>\n</mat-drawer-container>\n\t\n\t</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.html":
    /*!****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.html ***!
      \****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsHelpdeskComponentsHelpdeskReportsHelpdeskReportsComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"reports-wrapper\">\n\t<div class=\"main\">\n\t\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t\t<ng-container *ngIf=\"isDataLoaded\">\n\n\t\t\t<h5 class=\"mb-4\">Helpdesk Reports</h5>\n\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-6 mb-4\" *ngFor=\"let report of reportDataList; let i = index\">\n\n\t\t\t\t\t<condo-card>\n\t\t\t\t\t\t<div CondoCardHeader>\n\t\t\t\t\t\t\t<a class=\"t-no-decor\" href=\"javascript:void(0)\" routerLink=\"{{getReportRedirectPath(report.lookupValueName)}}/{{report.lookupValueID}}\"\n\t\t\t\t\t\t\t routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n\t\t\t\t\t\t\t\t<h6>{{report.lookupValueName}}</h6>\n\t\t\t\t\t\t\t\t<p>{{report.description}}</p>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div CondoCardBody>\n\t\t\t\t\t\t\t\t<div class=\"p-4 bg-cool-gray-50\"></div> \n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</condo-card>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</ng-container>\n\t</div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-reports/open-tickets-report/open-tickets-report.component.html":
    /*!***************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-reports/open-tickets-report/open-tickets-report.component.html ***!
      \***************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsHelpdeskComponentsHelpdeskReportsOpenTicketsReportOpenTicketsReportComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"user-report-data-wrapper\">\n\t\t<div class=\"main\">\n\t\n\t\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\t\t<condo-card *ngIf=\"isDataLoaded && (isListOfResidents() || isListOfApprovedUsers())\">\n\t\t\t<div CondoCardHeader>\n\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h4>{{pageName}}</h4>\n\t\t\t\t\t\t<p>{{totalItems}} results</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ml-auto d-none d-md-block mr-3\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mr-3\">\n\t\t\t\t\t\t<select name=\"blockId\" id=\"blockId\" class=\"form-control\" [(ngModel)]=\"blockId\"\n\t\t\t\t\t\t(ngModelChange)=\"getBlockDetails()\" required>\n\t\t\t\t\t\t<option value=\"\">All Blocks</option>\n\t\t\t\t\t\t<option *ngFor=\"let item of unitBlocksData\" [value]=\"item.apartmentBlockId\">\n\t\t\t\t\t\t\t{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div CondoCardBody>\n\t\t\t\t<jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n\t\t\t\t\t[filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n\t\t\t\t\t[enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n\t\t\t\t</jqxGrid>\n\t\t\t</div>\n\t\t</condo-card>\n\t\n\t\n\t\t<!-- De Activated Users -->\n\t\t<condo-card *ngIf=\"isDataLoaded && isListOfDeactivatedUsers()\">\n\t\t\t<div CondoCardHeader>\n\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h4>{{pageName}}</h4>\n\t\t\t\t\t\t<p>{{totalItems}} results</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ml-auto d-none d-md-block mr-3\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mr-3\">\n\t\t\t\t\t\t<select name=\"blockId\" id=\"blockId\" class=\"form-control\" [(ngModel)]=\"blockId\"\n\t\t\t\t\t\t(ngModelChange)=\"getBlockDetails()\" required>\n\t\t\t\t\t\t<option value=\"\">All Blocks</option>\n\t\t\t\t\t\t<option *ngFor=\"let item of unitBlocksData\" [value]=\"item.apartmentBlockId\">\n\t\t\t\t\t\t\t{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div CondoCardBody>\n\t\t\t\t<jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n\t\t\t\t\t[filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n\t\t\t\t\t[enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n\t\t\t\t</jqxGrid>\n\t\t\t</div>\n\t\t</condo-card>\n\t\n\t\n\t\n\t\t<!-- vehicle info -->\n\t\t<condo-card *ngIf=\"isDataLoaded && isListOfResidentsVehicleInfo()\">\n\t\t\t<div CondoCardHeader>\n\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h4>{{pageName}}</h4>\n\t\t\t\t\t\t<p>{{totalItems}} results</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ml-auto d-none d-md-block mr-3\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mr-3\">\n\t\t\t\t\t\t<select name=\"blockId\" id=\"blockId\" class=\"form-control\" [(ngModel)]=\"blockId\"\n\t\t\t\t\t\t(ngModelChange)=\"getBlockDetails()\" required>\n\t\t\t\t\t\t<option value=\"\">All Blocks</option>\n\t\t\t\t\t\t<option *ngFor=\"let item of unitBlocksData\" [value]=\"item.apartmentBlockId\">\n\t\t\t\t\t\t\t{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div CondoCardBody>\n\t\t\t\t<jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n\t\t\t\t\t[filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n\t\t\t\t\t[enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n\t\t\t\t</jqxGrid>\n\t\t\t</div>\n\t\t</condo-card>\n\t\n\t\n\t\t<!-- Rental info -->\n\t\t<condo-card *ngIf=\"isDataLoaded && isListOfExpiringRental()\">\n\t\t\t<div CondoCardHeader>\n\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h4>{{pageName}}</h4>\n\t\t\t\t\t\t<p>{{totalItems}} results</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ml-auto d-none d-md-block mr-3\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mr-3\">\n\t\t\t\t\t\t<select name=\"blockId\" id=\"blockId\" class=\"form-control\" [(ngModel)]=\"blockId\"\n\t\t\t\t\t\t(ngModelChange)=\"getBlockDetails()\" required>\n\t\t\t\t\t\t<option value=\"\">All Blocks</option>\n\t\t\t\t\t\t<option *ngFor=\"let item of unitBlocksData\" [value]=\"item.apartmentBlockId\">\n\t\t\t\t\t\t\t{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div CondoCardBody>\n\t\t\t\t<jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n\t\t\t\t\t[filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n\t\t\t\t\t[enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n\t\t\t\t</jqxGrid>\n\t\t\t</div>\n\t\t</condo-card>\n\t\n\t\n\t\t<!-- Pets info -->\n\t\t<condo-card *ngIf=\"isDataLoaded && isListOfUsersWithPets()\">\n\t\t\t<div CondoCardHeader>\n\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h4>{{pageName}}</h4>\n\t\t\t\t\t\t<p>{{totalItems}} results</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ml-auto d-none d-md-block mr-3\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mr-3\">\n\t\t\t\t\t\t<select name=\"blockId\" id=\"blockId\" class=\"form-control\" [(ngModel)]=\"blockId\"\n\t\t\t\t\t\t(ngModelChange)=\"getBlockDetails()\" required>\n\t\t\t\t\t\t<option value=\"\">All Blocks</option>\n\t\t\t\t\t\t<option *ngFor=\"let item of unitBlocksData\" [value]=\"item.apartmentBlockId\">\n\t\t\t\t\t\t\t{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div CondoCardBody>\n\t\t\t\t<jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n\t\t\t\t\t[filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n\t\t\t\t\t[enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n\t\t\t\t</jqxGrid>\n\t\t\t</div>\n\t\t</condo-card>\n\t\n\t\t<!-- List of Units -->\n\t\t<condo-card *ngIf=\"isDataLoaded && isListOfUnits()\">\n\t\t\t<div CondoCardHeader>\n\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h4>{{pageName}}</h4>\n\t\t\t\t\t\t<p>{{totalItems}} results</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ml-auto d-none d-md-block mr-3\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mr-3\">\n\t\t\t\t\t\t<select name=\"blockId\" id=\"blockId\" class=\"form-control\" [(ngModel)]=\"blockId\"\n\t\t\t\t\t\t(ngModelChange)=\"getBlockDetails()\" required>\n\t\t\t\t\t\t<option value=\"\">All Blocks</option>\n\t\t\t\t\t\t<option *ngFor=\"let item of unitBlocksData\" [value]=\"item.apartmentBlockId\">\n\t\t\t\t\t\t\t{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div CondoCardBody>\n\t\t\t\t<jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n\t\t\t\t\t[filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n\t\t\t\t\t[enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n\t\t\t\t</jqxGrid>\n\t\t\t</div>\n\t\t</condo-card>\n\t\n\t\t<!-- List of Blocks -->\n\t\t<condo-card *ngIf=\"isDataLoaded && isListOfBlocks()\">\n\t\t\t<div CondoCardHeader>\n\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h4>{{pageName}}</h4>\n\t\t\t\t\t\t<p>{{totalItems}} results</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ml-auto d-none d-md-block mr-3\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mr-3\">\n\t\t\t\t\t\t<select name=\"blockId\" id=\"blockId\" class=\"form-control\" [(ngModel)]=\"blockId\"\n\t\t\t\t\t\t(ngModelChange)=\"getBlockDetails()\" required>\n\t\t\t\t\t\t<option value=\"\">All Blocks</option>\n\t\t\t\t\t\t<option *ngFor=\"let item of unitBlocksData\" [value]=\"item.apartmentBlockId\">\n\t\t\t\t\t\t\t{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div CondoCardBody>\n\t\t\t\t<jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n\t\t\t\t\t[filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n\t\t\t\t\t[enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n\t\t\t\t</jqxGrid>\n\t\t\t</div>\n\t\t</condo-card>\n\t\n\t\t<!-- List of Tenant -->\n\t\t<condo-card *ngIf=\"isDataLoaded && isListOfTenants()\">\n\t\t\t<div CondoCardHeader>\n\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h4>{{pageName}}</h4>\n\t\t\t\t\t\t<p>{{totalItems}} results</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ml-auto d-none d-md-block mr-3\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mr-3\">\n\t\t\t\t\t\t<select name=\"blockId\" id=\"blockId\" class=\"form-control\" [(ngModel)]=\"blockId\"\n\t\t\t\t\t\t(ngModelChange)=\"getBlockDetails()\" required>\n\t\t\t\t\t\t<option value=\"\">All Blocks</option>\n\t\t\t\t\t\t<option *ngFor=\"let item of unitBlocksData\" [value]=\"item.apartmentBlockId\">\n\t\t\t\t\t\t\t{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div CondoCardBody>\n\t\t\t\t<jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n\t\t\t\t\t[filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n\t\t\t\t\t[enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n\t\t\t\t</jqxGrid>\n\t\t\t</div>\n\t\t</condo-card>\n\t\n\t\t<!-- List of Owners -->\n\t\t<condo-card *ngIf=\"isDataLoaded && isListOfOwners()\">\n\t\t\t<div CondoCardHeader>\n\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h4>{{pageName}}</h4>\n\t\t\t\t\t\t<p>{{totalItems}} results</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ml-auto d-none d-md-block mr-3\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mr-3\">\n\t\t\t\t\t\t<select name=\"blockId\" id=\"blockId\" class=\"form-control\" [(ngModel)]=\"blockId\"\n\t\t\t\t\t\t(ngModelChange)=\"getBlockDetails()\" required>\n\t\t\t\t\t\t<option value=\"\">All Blocks</option>\n\t\t\t\t\t\t<option *ngFor=\"let item of unitBlocksData\" [value]=\"item.apartmentBlockId\">\n\t\t\t\t\t\t\t{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div CondoCardBody>\n\t\t\t\t<jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n\t\t\t\t\t[filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n\t\t\t\t\t[enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n\t\t\t\t</jqxGrid>\n\t\t\t</div>\n\t\t</condo-card>\n\t\n\t\t<!-- List of Admins -->\n\t\t<condo-card *ngIf=\"isDataLoaded && isListOfAdmins()\">\n\t\t\t<div CondoCardHeader>\n\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h4>{{pageName}}</h4>\n\t\t\t\t\t\t<p>{{totalItems}} results</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ml-auto d-none d-md-block mr-3\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mr-3\">\n\t\t\t\t\t\t<select name=\"blockId\" id=\"blockId\" class=\"form-control\" [(ngModel)]=\"blockId\"\n\t\t\t\t\t\t(ngModelChange)=\"getBlockDetails()\" required>\n\t\t\t\t\t\t<option value=\"\">All Blocks</option>\n\t\t\t\t\t\t<option *ngFor=\"let item of unitBlocksData\" [value]=\"item.apartmentBlockId\">\n\t\t\t\t\t\t\t{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div CondoCardBody>\n\t\t\t\t<jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n\t\t\t\t\t[filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n\t\t\t\t\t[enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n\t\t\t\t</jqxGrid>\n\t\t\t</div>\n\t\t</condo-card>\n\t\n\t</div>\n\t</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-setup/add-ticket-category/add-ticket-category.component.html":
    /*!*************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-setup/add-ticket-category/add-ticket-category.component.html ***!
      \*************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsHelpdeskComponentsHelpdeskSetupAddTicketCategoryAddTicketCategoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"add-ticket-cateory-wrapper\">\n    <div class=\"main\">\n        <div class=\"bg-card shadow mb-0\">\n            <div class=\"d-flex mb-4\">\n                <h4>\n                    <span *ngIf=\"data.type == 'common'\">COMMON TICKET CATEGORY</span>\n                    <span *ngIf=\"data.type == 'private'\">PRIVATE TICKET CATEGORY</span>\n                </h4>\n                <mat-icon class=\"ml-auto\" [svgIcon]=\"'close'\" mat-dialog-close></mat-icon>\n            </div>\n            <condo-message class=\"mb-3\" *ngIf=\"message\"\n                [appearance]=\"message.appearance\"\n                [showIcon]=\"message.showIcon\"\n                [type]=\"message.type\"\n                [@shake]=\"message.shake\">\n                {{message.content}}\n            </condo-message>\n            <form #ticketCategoryForm=\"ngForm\" name=\"ticketCategoryForm\">\n                <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                        <div class=\"input-box\">\n                            <label>Category Name<span class=\"required\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Category Name\" name=\"categoryName\" [(ngModel)]=\"ticketCategoryData.categoryName\" (input)=\"errorMessage=''\" required>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-12\">\n                        <condo-select \n                            labelText=\"Default Supervisor\"\n                            fieldPlaceholder=\"Default Supervisor\"\n                            [fieldList]=\"staffsList | orderBy : 'staffName'\"\n                            fieldValue=\"customLabel\"\n                            [fieldModel]=\"ticketCategoryData.staffOne\"\n                            fieldId=\"userId\"\n                            (fieldParams)=\"isExistUser($event,'one')\" \n                        ></condo-select>  \n                    </div>\n                    <div class=\"col-sm-12\">\n                        <h6 class=\"mb-4\">Esclation Setup (Optional)</h6>\n                    </div>\n                    <div class=\"col-sm-12\">\n                        <div class=\"input-box\">\n                            <label>Auto Esclate to Level 1 After</label>\n                            <div class=\"d-flex\">\n                                <input OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Days\" name=\"escdayone\" [(ngModel)]=\"ticketCategoryData.escalationDaysOne\">\n                                <label class=\"ml-4 align-self-end\">Days</label>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-12\">\n                        <condo-select \n                        labelText=\"Select Level-1 Manager\"\n                        fieldPlaceholder=\"Select Level-1 Manager\"\n                        [fieldList]=\"staffsList | orderBy : 'staffName'\"\n                        fieldValue=\"customLabel\"\n                        [fieldModel]=\"ticketCategoryData.staffTwo\"\n                        fieldId=\"userId\"\n                        (fieldParams)=\"isExistUser($event,'two')\" \n                        ></condo-select> \n                    </div>\n                    <div class=\"col-sm-12\">\n                        <div class=\"input-box\">\n                            <label>Auto Esclate to Level 2 After</label>\n                            <div class=\"d-flex\">\n                                <input OnlyNumber=\"true\" class=\"form-control d-inline-block w-40\" placeholder=\"Days\" name=\"escdaytwo\" [(ngModel)]=\"ticketCategoryData.escalationDaysTwo\">\n                                <label class=\"ml-4 align-self-end\">Days</label>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-12\">\n                        <condo-select \n                        labelText=\"Select Level-2 Manager\"\n                        fieldPlaceholder=\"Select Level-2 Manager\"\n                        [fieldList]=\"staffsList | orderBy : 'staffName'\"\n                        fieldValue=\"customLabel\"\n                        [fieldModel]=\"ticketCategoryData.staffThree\"\n                        fieldId=\"userId\"\n                        (fieldParams)=\"isExistUser($event,'three')\" \n                        ></condo-select> \n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                        <submit-button class=\"float-right\" [isSubmit]=\"isTicketSubmitted\" *ngIf=\"data.mode == 'create'\" (click)=\"createCategory()\">Create</submit-button>\n                        <submit-button class=\"float-right\" [isSubmit]=\"isTicketSubmitted\" *ngIf=\"data.mode == 'edit'\" (click)=\"updateCategory()\">Update</submit-button>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-setup/common-category/common-category.component.html":
    /*!*****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-setup/common-category/common-category.component.html ***!
      \*****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsHelpdeskComponentsHelpdeskSetupCommonCategoryCommonCategoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"common-category-wrapper\">\n    <!-- Loader -->\n    <app-loader *ngIf=\"isDataLoaded\"></app-loader>\n    <!-- Table -->\n    <condo-card *ngIf=\"!isDataLoaded\">\n        <div CondoCardHeader>\n            <div class=\"d-flex\">\n                <div>\n                    <h4>Common Category</h4>\n                    <p>{{totalItems}} results</p>\n                </div>\n                <div class=\"ml-auto mr-3\">\n                    <app-table-search [input]=\"commonFilter\" (outputParams)=\"onGlSearchFilter($event)\"></app-table-search>\n                </div>\n                <div class=\"mr-3\">\n                    <app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown>\n                </div>\n                <div>\n                    <button mat-flat-button [color]=\"'primary'\" (click)=\"addTicket('create','')\">\n                        <mat-icon class=\"mr-2\" [svgIcon]=\"'add'\"></mat-icon>Add\n                    </button>\n                </div>\n            </div>\n        </div>\n        <div CondoCardBody>\n            <jqxGrid \n                [theme]=\"'material'\"\n                [width]=\"'100%'\"\n                [rowsheight]=\"48\"\n                [autoheight]=\"true\"\n                [pageable]=\"true\"\n                [filterable]=\"true\"\n                [sortable]=\"true\"\n                [source]=\"commonListData\"\n                [columns]=\"commonColumns\"\n                [columnsresize]=\"true\"\n                [enablehover]=\"false\"\n                #commondatagrid>\n            </jqxGrid> \n        </div>\n    </condo-card>\n</div>\n        ";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-setup/helpdesk-setup.component.html":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-setup/helpdesk-setup.component.html ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsHelpdeskComponentsHelpdeskSetupHelpdeskSetupComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"helpdesk-setup-wrapper\">  \n\t<div class=\"main\">\n\t\t<h4 class=\"mb-4\">Settings</h4>\n\t\t<!-- Tips -->\n\t\t<div class=\"bg-card shadow p-0\">\n\t\t\t<mat-accordion>\n\t\t\t\t<mat-expansion-panel>\n\t\t\t\t\t<mat-expansion-panel-header>\n\t\t\t\t\t\t<mat-panel-title>Tips</mat-panel-title>\n\t\t\t\t\t</mat-expansion-panel-header>\n\t\t\t\t\t<mat-panel-description>\n\t\t\t\t\t\t<div class=\"text-hint\">\n\t\t\t\t\t\t\t<p>Tips :  You have two types of Ticket Category to setup.</p>\n\t\t\t\t\t\t\t<p>Common category refer to the issues related to condo which is at common to all units (For Example : Swimming pool not clean)</p>\n\t\t\t\t\t\t\t<p>Private category refer to the issues inside  the units ( For Example : Plumbing inside the Condo)</p>\n\t\t\t\t\t\t\t<p class=\"mt-4\">We have some standard Common Categories created for you, you can assign a supervisor and assign escalation if you required.</p>\n\t\t\t\t\t\t\t<p>If you have supervisor assigned to a Category , tickets will get assigned to Supervisor automatically. Supervisor will have to re-assign the ticket to Staff.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</mat-panel-description>\n\t\t\t\t</mat-expansion-panel>\n\t\t\t</mat-accordion>\n\t\t</div>\n\t\t<div class=\"bg-card shadow p-0\">\n\t\t\t<nav mat-tab-nav-bar>\n\t\t\t\t<a mat-tab-link *ngFor=\"let link of navArray\" [routerLink]=\"link.link\" \n\t\t\t\t\trouterLinkActive #rla=\"routerLinkActive\" [active]=\"rla.isActive\">\n\t\t\t\t{{link.name}}\n\t\t\t\t</a>\n\t\t\t</nav>\n\t\t\t<router-outlet></router-outlet>\n\t\t</div>\n\t</div>\n</div>\n\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-setup/private-category/private-category.component.html":
    /*!*******************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-setup/private-category/private-category.component.html ***!
      \*******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsHelpdeskComponentsHelpdeskSetupPrivateCategoryPrivateCategoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"private-category-wrapper\">\n    <!-- Loader -->\n    <app-loader *ngIf=\"isDataLoaded\"></app-loader>\n    <!-- Table -->\n    <condo-card *ngIf=\"!isDataLoaded\">\n        <div CondoCardHeader>\n            <div class=\"d-flex\">\n                <div>\n                    <h4>Private Category</h4>\n                    <p>{{totalItems}} results</p>\n                </div>\n                <div class=\"ml-auto mr-3\">\n                    <app-table-search [input]=\"privateFilter\" (outputParams)=\"onGlSearchFilter($event)\"></app-table-search>\n                </div>\n                <div class=\"mr-3\">\n                    <app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown>\n                </div>\n                <div>\n                    <button mat-flat-button [color]=\"'primary'\" (click)=\"addTicket('create','')\">\n                        <mat-icon class=\"mr-2\" [svgIcon]=\"'add'\"></mat-icon>Add\n                    </button>\n                </div>\n            </div>\n        </div>\n        <div CondoCardBody>\n            <jqxGrid \n                [theme]=\"'material'\"\n                [width]=\"'100%'\"\n                [rowsheight]=\"48\"\n                [autoheight]=\"true\"\n                [pageable]=\"true\"\n                [filterable]=\"true\"\n                [sortable]=\"true\"\n                [source]=\"privateListData\"\n                [columns]=\"privateColumns\"\n                [columnsresize]=\"true\"\n                [enablehover]=\"false\"\n                #privatedatagrid>\n            </jqxGrid> \n        </div>\n    </condo-card>\n</div>\n    ";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-ticket-filter/helpdesk-ticket-filter.component.html":
    /*!****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-ticket-filter/helpdesk-ticket-filter.component.html ***!
      \****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsHelpdeskComponentsHelpdeskTicketFilterHelpdeskTicketFilterComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"helpdesk-all-tickets-wrapper content-layout right-sidebar-fullheight-basic-inner-scroll\">\n    <mat-drawer-container class=\"example-container\" [hasBackdrop]=\"true\" #matDrawer>\n        <mat-drawer class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 p-0\" #filter mode=\"over\" position=\"end\">\n\t\t\t<div class=\"helpdesk-filter-drawer\">\n\t\t\t\t<div class=\"title\">\n\t\t\t\t\t<h4> Status </h4>\n\t\t\t\t\t<div class=\"ml-auto\">\n\t\t\t\t\t\t<button mat-icon-button (click)=\"goBack()\">\n\t\t\t\t\t\t\t<mat-icon [svgIcon]=\"'close'\"></mat-icon>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<form>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<condo-select \n                            labelText=\"Ticket Status\"\n                            fieldPlaceholder=\"Status\"\n                            [fieldList]=\"ticketStatusList\"\n                            fieldValue=\"lookupValueName\"\n                            [fieldModel]=\"filterData.ticketStatus\"\n                            fieldId=\"lookupValueId\"\n                            (fieldParams)=\"dropDownSelect($event,'status')\" \n                        \t></condo-select>  \n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<condo-select \n                            labelText=\"Staff\"\n                            fieldPlaceholder=\"Staff\"\n                            [fieldList]=\"staffsList | orderBy : 'staffName'\"\n                            fieldValue=\"customLabel\"\n                            [fieldModel]=\"filterData.staff\"\n                            fieldId=\"staffId\"\n                            (fieldParams)=\"dropDownSelect($event,'staff')\" \n                        \t></condo-select>  \n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<condo-select \n                            labelText=\"Supervisor\"\n                            fieldPlaceholder=\"Supervisor\"\n\t\t\t\t\t\t\t[fieldList]=\"staffsList | orderBy : 'staffName'\"\n                            fieldValue=\"customLabel\"\n                            [fieldModel]=\"filterData.supervisor\"\n                            fieldId=\"staffId\"\n                            (fieldParams)=\"dropDownSelect($event,'supervisor')\" \n                        \t></condo-select>  \n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<div class=\"text-right mt-4\">\n\t\t\t\t\t\t\t\t<button mat-flat-button [color]=\"'primary'\" (click)=\"filterApply()\">Apply</button>\n\t\t\t\t\t\t\t\t<button mat-button (click)=\"clearFilter()\">Cancel</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n        </mat-drawer>\n        <mat-drawer-content>\n\t\t\t<div class=\"main\">\n\t\t\t\t<!-- Loader -->\n\t\t\t\t<app-loader *ngIf=\"!isTicketDataLoaded\"></app-loader>\n\t\t\t\t<!-- Indicator -->\n\t\t\t\t<div class=\"d-flex justify-content-end\">\n\t\t\t\t\t<ul class=\"legends mb-4 list-inline\" *ngIf=\"isTicketDataLoaded\">\n\t\t\t\t\t\t<li class=\"list-inline-item\"><img class=\"mb-1 mr-1\" width=\"17\" src=\"assets/images/common-ticket-icon.svg\"><span>Common</span></li>\n\t\t\t\t\t\t<li class=\"list-inline-item\"><img class=\"mb-1 mr-1\" width=\"17\" src=\"assets/images/private-ticket-icon.svg\"><span>Private</span></li>\n\t\t\t\t\t</ul>\n\t\t\t\t\n\t\t\t\t\t<ul class=\"legends mb-4 ml-3 list-inline\" *ngIf=\"isTicketDataLoaded\">\n\t\t\t\t\t\t<li class=\"list-inline-item\"><span class=\"dots bg-orange-900\"></span><span>High</span></li>\n\t\t\t\t\t\t<li class=\"list-inline-item\"><span class=\"dots bg-green-900\"></span>Medium</li>\n\t\t\t\t\t\t<li class=\"list-inline-item mr-0\"><span class=\"dots bg-purple-900\"></span>Low</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<!-- Table -->\n\t\t\t\t<condo-card *ngIf=\"isTicketDataLoaded\">\n\t\t\t\t\t<div CondoCardHeader>\n\t\t\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"urlType=='all-tickets'\">All Tickets</span>\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"urlType=='open-tickets'\">Open Assigned and Holded Tickets</span>\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"urlType=='closed-tickets'\">Closed Tickets</span>\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"urlType=='unassigned'\">Unassigned Tickets</span>\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"urlType=='assigned-to-me'\">My Tickets</span>\n\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t<p>{{totalItems}} results</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"ml-auto mr-3\">\n\t\t\t\t\t\t\t\t<app-table-search [input]=\"ticketSearch\" (outputParams)=\"onGlSearchFilter($event)\"></app-table-search>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"mr-3\">\n\t\t\t\t\t\t\t\t<app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<button mat-flat-button [color]=\"'primary'\" (click)=\"createTicketNavigate()\">Add Ticket</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"ml-3\" *ngIf=\"urlType=='all-tickets' && isAdmin()\">\n\t\t\t\t\t\t\t\t<button mat-flat-button [color]=\"'accent'\" (click)=\"filter.toggle()\">\n\t\t\t\t\t\t\t\t\t<mat-icon class=\"mr-2\" svgIcon=\"heroicons_outline:filter\"></mat-icon>Filter\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div CondoCardBody>\n\t\t\t\t\t\t<jqxGrid\n\t\t\t\t\t\t\t[theme]=\"'material'\"\n\t\t\t\t\t\t\t[width]=\"'100%'\"\n\t\t\t\t\t\t\t[rowsheight]=\"48\"\n\t\t\t\t\t\t\t[autoheight]=\"true\"\n\t\t\t\t\t\t\t[pageable]=\"true\"\n\t\t\t\t\t\t\t[filterable]=\"true\"\n\t\t\t\t\t\t\t[sortable]=\"true\"\n\t\t\t\t\t\t\t[source]=\"ticketListData\"\n\t\t\t\t\t\t\t[columns]=\"columnData\"\n\t\t\t\t\t\t\t[columnsresize]=\"true\"\n\t\t\t\t\t\t\t[enablehover]=\"false\"\n\t\t\t\t\t\t\t#datagrid>\n\t\t\t\t\t\t</jqxGrid>\n\t\t\t\t\t</div>\n\t\t\t\t</condo-card>\n\t\t\t</div>\n        </mat-drawer-content>\n    </mat-drawer-container>\n</div>\n\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/helpdesk.component.html":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/helpdesk.component.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsHelpdeskHelpdeskComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
      /***/
    },

    /***/
    "./src/app/modules/ams/helpdesk/components/helpdesk-create-ticket/helpdesk-create-ticket.component.scss":
    /*!**************************************************************************************************************!*\
      !*** ./src/app/modules/ams/helpdesk/components/helpdesk-create-ticket/helpdesk-create-ticket.component.scss ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsHelpdeskComponentsHelpdeskCreateTicketHelpdeskCreateTicketComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* Colors for the ripple elements.*/\n/* stylelint-disable-next-line material/theme-mixin-api */\n/* stylelint-disable-next-line material/theme-mixin-api */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.condo-theme-crescent .help-desk-create-wrapper .timeline {\n  margin: 20px 0 20px 20px;\n  position: relative;\n}\n@media (min-width: 0) and (max-width: 575px) {\n  .condo-theme-crescent .help-desk-create-wrapper .timeline {\n    margin-left: 0;\n  }\n}\n.condo-theme-crescent .help-desk-create-wrapper .timeline:before {\n  content: \"\";\n  position: absolute;\n  left: 0%;\n  width: 3px;\n  height: 100%;\n  background-color: #cfd8e3;\n}\n@media (max-width: 767px) {\n  .condo-theme-crescent .help-desk-create-wrapper .timeline:before {\n    left: 0%;\n  }\n}\n.condo-theme-crescent .help-desk-create-wrapper .timeline li {\n  position: relative;\n  width: 95%;\n  float: right;\n  text-align: left;\n  clear: both;\n  margin: 10px 0;\n}\n@media (max-width: 767px) {\n  .condo-theme-crescent .help-desk-create-wrapper .timeline li {\n    width: 96%;\n  }\n}\n@media (min-width: 0) and (max-width: 575px) {\n  .condo-theme-crescent .help-desk-create-wrapper .timeline li {\n    width: 93%;\n  }\n}\n.condo-theme-crescent .help-desk-create-wrapper .timeline li .initial-letter {\n  position: absolute;\n  top: 15px;\n  left: -82px;\n  width: 35px;\n  height: 35px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  border-radius: 35px !important;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .condo-theme-crescent .help-desk-create-wrapper .timeline li .initial-letter {\n    left: -58px;\n  }\n}\n@media (min-width: 576px) and (max-width: 767px) {\n  .condo-theme-crescent .help-desk-create-wrapper .timeline li .initial-letter {\n    left: -42px;\n  }\n}\n@media (min-width: 0) and (max-width: 575px) {\n  .condo-theme-crescent .help-desk-create-wrapper .timeline li .initial-letter {\n    left: -38px;\n  }\n}\n.condo-theme-crescent .help-desk-create-wrapper .timeline li .content {\n  text-align: justify;\n}\n.condo-theme-crescent .help-desk-create-wrapper .timeline li .content .log-border {\n  border-left: 5px solid #9f26b2;\n}\n.condo-theme-crescent .help-desk-create-wrapper .timeline li .content .status-curve {\n  padding-top: 3px;\n  padding-bottom: 3px;\n  border-radius: 11px !important;\n}\n.condo-theme-light .help-desk-create-wrapper .timeline {\n  margin: 20px 0 20px 20px;\n  position: relative;\n}\n@media (min-width: 0) and (max-width: 575px) {\n  .condo-theme-light .help-desk-create-wrapper .timeline {\n    margin-left: 0;\n  }\n}\n.condo-theme-light .help-desk-create-wrapper .timeline:before {\n  content: \"\";\n  position: absolute;\n  left: 0%;\n  width: 3px;\n  height: 100%;\n  background-color: #cfd8e3;\n}\n@media (max-width: 767px) {\n  .condo-theme-light .help-desk-create-wrapper .timeline:before {\n    left: 0%;\n  }\n}\n.condo-theme-light .help-desk-create-wrapper .timeline li {\n  position: relative;\n  width: 95%;\n  float: right;\n  text-align: left;\n  clear: both;\n  margin: 10px 0;\n}\n@media (max-width: 767px) {\n  .condo-theme-light .help-desk-create-wrapper .timeline li {\n    width: 96%;\n  }\n}\n@media (min-width: 0) and (max-width: 575px) {\n  .condo-theme-light .help-desk-create-wrapper .timeline li {\n    width: 93%;\n  }\n}\n.condo-theme-light .help-desk-create-wrapper .timeline li .initial-letter {\n  position: absolute;\n  top: 15px;\n  left: -82px;\n  width: 35px;\n  height: 35px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  border-radius: 35px !important;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .condo-theme-light .help-desk-create-wrapper .timeline li .initial-letter {\n    left: -58px;\n  }\n}\n@media (min-width: 576px) and (max-width: 767px) {\n  .condo-theme-light .help-desk-create-wrapper .timeline li .initial-letter {\n    left: -42px;\n  }\n}\n@media (min-width: 0) and (max-width: 575px) {\n  .condo-theme-light .help-desk-create-wrapper .timeline li .initial-letter {\n    left: -38px;\n  }\n}\n.condo-theme-light .help-desk-create-wrapper .timeline li .content {\n  text-align: justify;\n}\n.condo-theme-light .help-desk-create-wrapper .timeline li .content .log-border {\n  border-left: 5px solid #9f26b2;\n}\n.condo-theme-light .help-desk-create-wrapper .timeline li .content .status-curve {\n  padding-top: 3px;\n  padding-bottom: 3px;\n  border-radius: 11px !important;\n}\n.condo-theme-orange .help-desk-create-wrapper .timeline {\n  margin: 20px 0 20px 20px;\n  position: relative;\n}\n@media (min-width: 0) and (max-width: 575px) {\n  .condo-theme-orange .help-desk-create-wrapper .timeline {\n    margin-left: 0;\n  }\n}\n.condo-theme-orange .help-desk-create-wrapper .timeline:before {\n  content: \"\";\n  position: absolute;\n  left: 0%;\n  width: 3px;\n  height: 100%;\n  background-color: #cfd8e3;\n}\n@media (max-width: 767px) {\n  .condo-theme-orange .help-desk-create-wrapper .timeline:before {\n    left: 0%;\n  }\n}\n.condo-theme-orange .help-desk-create-wrapper .timeline li {\n  position: relative;\n  width: 95%;\n  float: right;\n  text-align: left;\n  clear: both;\n  margin: 10px 0;\n}\n@media (max-width: 767px) {\n  .condo-theme-orange .help-desk-create-wrapper .timeline li {\n    width: 96%;\n  }\n}\n@media (min-width: 0) and (max-width: 575px) {\n  .condo-theme-orange .help-desk-create-wrapper .timeline li {\n    width: 93%;\n  }\n}\n.condo-theme-orange .help-desk-create-wrapper .timeline li .initial-letter {\n  position: absolute;\n  top: 15px;\n  left: -82px;\n  width: 35px;\n  height: 35px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  border-radius: 35px !important;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .condo-theme-orange .help-desk-create-wrapper .timeline li .initial-letter {\n    left: -58px;\n  }\n}\n@media (min-width: 576px) and (max-width: 767px) {\n  .condo-theme-orange .help-desk-create-wrapper .timeline li .initial-letter {\n    left: -42px;\n  }\n}\n@media (min-width: 0) and (max-width: 575px) {\n  .condo-theme-orange .help-desk-create-wrapper .timeline li .initial-letter {\n    left: -38px;\n  }\n}\n.condo-theme-orange .help-desk-create-wrapper .timeline li .content {\n  text-align: justify;\n}\n.condo-theme-orange .help-desk-create-wrapper .timeline li .content .log-border {\n  border-left: 5px solid #9f26b2;\n}\n.condo-theme-orange .help-desk-create-wrapper .timeline li .content .status-curve {\n  padding-top: 3px;\n  padding-bottom: 3px;\n  border-radius: 11px !important;\n}\n.condo-theme-maroon .help-desk-create-wrapper .timeline {\n  margin: 20px 0 20px 20px;\n  position: relative;\n}\n@media (min-width: 0) and (max-width: 575px) {\n  .condo-theme-maroon .help-desk-create-wrapper .timeline {\n    margin-left: 0;\n  }\n}\n.condo-theme-maroon .help-desk-create-wrapper .timeline:before {\n  content: \"\";\n  position: absolute;\n  left: 0%;\n  width: 3px;\n  height: 100%;\n  background-color: #cfd8e3;\n}\n@media (max-width: 767px) {\n  .condo-theme-maroon .help-desk-create-wrapper .timeline:before {\n    left: 0%;\n  }\n}\n.condo-theme-maroon .help-desk-create-wrapper .timeline li {\n  position: relative;\n  width: 95%;\n  float: right;\n  text-align: left;\n  clear: both;\n  margin: 10px 0;\n}\n@media (max-width: 767px) {\n  .condo-theme-maroon .help-desk-create-wrapper .timeline li {\n    width: 96%;\n  }\n}\n@media (min-width: 0) and (max-width: 575px) {\n  .condo-theme-maroon .help-desk-create-wrapper .timeline li {\n    width: 93%;\n  }\n}\n.condo-theme-maroon .help-desk-create-wrapper .timeline li .initial-letter {\n  position: absolute;\n  top: 15px;\n  left: -82px;\n  width: 35px;\n  height: 35px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  border-radius: 35px !important;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .condo-theme-maroon .help-desk-create-wrapper .timeline li .initial-letter {\n    left: -58px;\n  }\n}\n@media (min-width: 576px) and (max-width: 767px) {\n  .condo-theme-maroon .help-desk-create-wrapper .timeline li .initial-letter {\n    left: -42px;\n  }\n}\n@media (min-width: 0) and (max-width: 575px) {\n  .condo-theme-maroon .help-desk-create-wrapper .timeline li .initial-letter {\n    left: -38px;\n  }\n}\n.condo-theme-maroon .help-desk-create-wrapper .timeline li .content {\n  text-align: justify;\n}\n.condo-theme-maroon .help-desk-create-wrapper .timeline li .content .log-border {\n  border-left: 5px solid #9f26b2;\n}\n.condo-theme-maroon .help-desk-create-wrapper .timeline li .content .status-curve {\n  padding-top: 3px;\n  padding-bottom: 3px;\n  border-radius: 11px !important;\n}\n.condo-theme-blue .help-desk-create-wrapper .timeline {\n  margin: 20px 0 20px 20px;\n  position: relative;\n}\n@media (min-width: 0) and (max-width: 575px) {\n  .condo-theme-blue .help-desk-create-wrapper .timeline {\n    margin-left: 0;\n  }\n}\n.condo-theme-blue .help-desk-create-wrapper .timeline:before {\n  content: \"\";\n  position: absolute;\n  left: 0%;\n  width: 3px;\n  height: 100%;\n  background-color: #cfd8e3;\n}\n@media (max-width: 767px) {\n  .condo-theme-blue .help-desk-create-wrapper .timeline:before {\n    left: 0%;\n  }\n}\n.condo-theme-blue .help-desk-create-wrapper .timeline li {\n  position: relative;\n  width: 95%;\n  float: right;\n  text-align: left;\n  clear: both;\n  margin: 10px 0;\n}\n@media (max-width: 767px) {\n  .condo-theme-blue .help-desk-create-wrapper .timeline li {\n    width: 96%;\n  }\n}\n@media (min-width: 0) and (max-width: 575px) {\n  .condo-theme-blue .help-desk-create-wrapper .timeline li {\n    width: 93%;\n  }\n}\n.condo-theme-blue .help-desk-create-wrapper .timeline li .initial-letter {\n  position: absolute;\n  top: 15px;\n  left: -82px;\n  width: 35px;\n  height: 35px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  border-radius: 35px !important;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .condo-theme-blue .help-desk-create-wrapper .timeline li .initial-letter {\n    left: -58px;\n  }\n}\n@media (min-width: 576px) and (max-width: 767px) {\n  .condo-theme-blue .help-desk-create-wrapper .timeline li .initial-letter {\n    left: -42px;\n  }\n}\n@media (min-width: 0) and (max-width: 575px) {\n  .condo-theme-blue .help-desk-create-wrapper .timeline li .initial-letter {\n    left: -38px;\n  }\n}\n.condo-theme-blue .help-desk-create-wrapper .timeline li .content {\n  text-align: justify;\n}\n.condo-theme-blue .help-desk-create-wrapper .timeline li .content .log-border {\n  border-left: 5px solid #018bfe;\n}\n.condo-theme-blue .help-desk-create-wrapper .timeline li .content .status-curve {\n  padding-top: 3px;\n  padding-bottom: 3px;\n  border-radius: 11px !important;\n}\n.condo-theme-dark .help-desk-create-wrapper .timeline {\n  margin: 20px 0 20px 20px;\n  position: relative;\n}\n@media (min-width: 0) and (max-width: 575px) {\n  .condo-theme-dark .help-desk-create-wrapper .timeline {\n    margin-left: 0;\n  }\n}\n.condo-theme-dark .help-desk-create-wrapper .timeline:before {\n  content: \"\";\n  position: absolute;\n  left: 0%;\n  width: 3px;\n  height: 100%;\n  background-color: #27303f;\n}\n@media (max-width: 767px) {\n  .condo-theme-dark .help-desk-create-wrapper .timeline:before {\n    left: 0%;\n  }\n}\n.condo-theme-dark .help-desk-create-wrapper .timeline li {\n  position: relative;\n  width: 95%;\n  float: right;\n  text-align: left;\n  clear: both;\n  margin: 10px 0;\n}\n@media (max-width: 767px) {\n  .condo-theme-dark .help-desk-create-wrapper .timeline li {\n    width: 96%;\n  }\n}\n@media (min-width: 0) and (max-width: 575px) {\n  .condo-theme-dark .help-desk-create-wrapper .timeline li {\n    width: 93%;\n  }\n}\n.condo-theme-dark .help-desk-create-wrapper .timeline li .initial-letter {\n  position: absolute;\n  top: 15px;\n  left: -82px;\n  width: 35px;\n  height: 35px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  border-radius: 35px !important;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .condo-theme-dark .help-desk-create-wrapper .timeline li .initial-letter {\n    left: -58px;\n  }\n}\n@media (min-width: 576px) and (max-width: 767px) {\n  .condo-theme-dark .help-desk-create-wrapper .timeline li .initial-letter {\n    left: -42px;\n  }\n}\n@media (min-width: 0) and (max-width: 575px) {\n  .condo-theme-dark .help-desk-create-wrapper .timeline li .initial-letter {\n    left: -38px;\n  }\n}\n.condo-theme-dark .help-desk-create-wrapper .timeline li .content {\n  text-align: justify;\n}\n.condo-theme-dark .help-desk-create-wrapper .timeline li .content .log-border {\n  border-left: 5px solid #0694a2;\n}\n.condo-theme-dark .help-desk-create-wrapper .timeline li .content .status-curve {\n  padding-top: 3px;\n  padding-bottom: 3px;\n  border-radius: 11px !important;\n}\n.condo-theme-public .help-desk-create-wrapper .timeline {\n  margin: 20px 0 20px 20px;\n  position: relative;\n}\n@media (min-width: 0) and (max-width: 575px) {\n  .condo-theme-public .help-desk-create-wrapper .timeline {\n    margin-left: 0;\n  }\n}\n.condo-theme-public .help-desk-create-wrapper .timeline:before {\n  content: \"\";\n  position: absolute;\n  left: 0%;\n  width: 3px;\n  height: 100%;\n  background-color: #cfd8e3;\n}\n@media (max-width: 767px) {\n  .condo-theme-public .help-desk-create-wrapper .timeline:before {\n    left: 0%;\n  }\n}\n.condo-theme-public .help-desk-create-wrapper .timeline li {\n  position: relative;\n  width: 95%;\n  float: right;\n  text-align: left;\n  clear: both;\n  margin: 10px 0;\n}\n@media (max-width: 767px) {\n  .condo-theme-public .help-desk-create-wrapper .timeline li {\n    width: 96%;\n  }\n}\n@media (min-width: 0) and (max-width: 575px) {\n  .condo-theme-public .help-desk-create-wrapper .timeline li {\n    width: 93%;\n  }\n}\n.condo-theme-public .help-desk-create-wrapper .timeline li .initial-letter {\n  position: absolute;\n  top: 15px;\n  left: -82px;\n  width: 35px;\n  height: 35px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  border-radius: 35px !important;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .condo-theme-public .help-desk-create-wrapper .timeline li .initial-letter {\n    left: -58px;\n  }\n}\n@media (min-width: 576px) and (max-width: 767px) {\n  .condo-theme-public .help-desk-create-wrapper .timeline li .initial-letter {\n    left: -42px;\n  }\n}\n@media (min-width: 0) and (max-width: 575px) {\n  .condo-theme-public .help-desk-create-wrapper .timeline li .initial-letter {\n    left: -38px;\n  }\n}\n.condo-theme-public .help-desk-create-wrapper .timeline li .content {\n  text-align: justify;\n}\n.condo-theme-public .help-desk-create-wrapper .timeline li .content .log-border {\n  border-left: 5px solid #0694a2;\n}\n.condo-theme-public .help-desk-create-wrapper .timeline li .content .status-curve {\n  padding-top: 3px;\n  padding-bottom: 3px;\n  border-radius: 11px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9fdGhlbWluZy5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2Ftcy9oZWxwZGVzay9jb21wb25lbnRzL2hlbHBkZXNrLWNyZWF0ZS10aWNrZXQvaGVscGRlc2stY3JlYXRlLXRpY2tldC5jb21wb25lbnQuc2NzcyIsInNyYy9AY29uZG8vc3R5bGVzL3V0aWxpdGllcy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMnREQSxtQ0FBQTtBQWdKQSx5REFBQTtBQTZYQSx5REFBQTtBQTR6REEsMkNBQUE7QUF3Q0EscUJBQUE7QUNqa0lJO0VBQ0Usd0JBQUE7RUFJQSxrQkFBQTtBQVJOO0FDdUlNO0VEcElGO0lBR0csY0FBQTtFQUZMO0FBQ0Y7QUFJTTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBRlI7QUMwSE07RUQ5SEE7SUFRSSxRQUFBO0VBQVI7QUFDRjtBQUVNO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBT0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFOUjtBQzZHTTtFRG5IQTtJQUlJLFVBQUE7RUFNUjtBQUNGO0FDd0dNO0VEbkhBO0lBT0ksVUFBQTtFQVFSO0FBQ0Y7QUFIUTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUNvQ1IsV0RuQ3lCO0VDb0N6QixZRHBDeUI7RUNxQ3pCLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLFlEekNtQztFQ3ZDcEMsOEJBQUE7QURvREQ7QUNxRk07RUR0R0U7SUFNSSxXQUFBO0VBZVY7QUFDRjtBQ2dGTTtFRHRHRTtJQVNJLFdBQUE7RUFpQlY7QUFDRjtBQzJFTTtFRHRHRTtJQVlJLFdBQUE7RUFtQlY7QUFDRjtBQWpCUTtFQUNFLG1CQUFBO0FBbUJWO0FBbEJVO0VBQ0UsOEJBQUE7QUFvQlo7QUFsQlU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VDekRYLDhCQUFBO0FEZ0ZEO0FBM0VJO0VBQ0Usd0JBQUE7RUFJQSxrQkFBQTtBQTJFTjtBQ29ETTtFRHBJRjtJQUdHLGNBQUE7RUFpRkw7QUFDRjtBQS9FTTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBaUZSO0FDdUNNO0VEOUhBO0lBUUksUUFBQTtFQW1GUjtBQUNGO0FBakZNO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBT0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUE2RVI7QUMwQk07RURuSEE7SUFJSSxVQUFBO0VBeUZSO0FBQ0Y7QUNxQk07RURuSEE7SUFPSSxVQUFBO0VBMkZSO0FBQ0Y7QUF0RlE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VDb0NSLFdEbkN5QjtFQ29DekIsWURwQ3lCO0VDcUN6QixvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxZRHpDbUM7RUN2Q3BDLDhCQUFBO0FEdUlEO0FDRU07RUR0R0U7SUFNSSxXQUFBO0VBa0dWO0FBQ0Y7QUNITTtFRHRHRTtJQVNJLFdBQUE7RUFvR1Y7QUFDRjtBQ1JNO0VEdEdFO0lBWUksV0FBQTtFQXNHVjtBQUNGO0FBcEdRO0VBQ0UsbUJBQUE7QUFzR1Y7QUFyR1U7RUFDRSw4QkFBQTtBQXVHWjtBQXJHVTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUN6RFgsOEJBQUE7QURtS0Q7QUE5Skk7RUFDRSx3QkFBQTtFQUlBLGtCQUFBO0FBOEpOO0FDL0JNO0VEcElGO0lBR0csY0FBQTtFQW9LTDtBQUNGO0FBbEtNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFvS1I7QUM1Q007RUQ5SEE7SUFRSSxRQUFBO0VBc0tSO0FBQ0Y7QUFwS007RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFPQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQWdLUjtBQ3pETTtFRG5IQTtJQUlJLFVBQUE7RUE0S1I7QUFDRjtBQzlETTtFRG5IQTtJQU9JLFVBQUE7RUE4S1I7QUFDRjtBQXpLUTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUNvQ1IsV0RuQ3lCO0VDb0N6QixZRHBDeUI7RUNxQ3pCLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLFlEekNtQztFQ3ZDcEMsOEJBQUE7QUQwTkQ7QUNqRk07RUR0R0U7SUFNSSxXQUFBO0VBcUxWO0FBQ0Y7QUN0Rk07RUR0R0U7SUFTSSxXQUFBO0VBdUxWO0FBQ0Y7QUMzRk07RUR0R0U7SUFZSSxXQUFBO0VBeUxWO0FBQ0Y7QUF2TFE7RUFDRSxtQkFBQTtBQXlMVjtBQXhMVTtFQUNFLDhCQUFBO0FBMExaO0FBeExVO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQ3pEWCw4QkFBQTtBRHNQRDtBQWpQSTtFQUNFLHdCQUFBO0VBSUEsa0JBQUE7QUFpUE47QUNsSE07RURwSUY7SUFHRyxjQUFBO0VBdVBMO0FBQ0Y7QUFyUE07RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQXVQUjtBQy9ITTtFRDlIQTtJQVFJLFFBQUE7RUF5UFI7QUFDRjtBQXZQTTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQU9BLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBbVBSO0FDNUlNO0VEbkhBO0lBSUksVUFBQTtFQStQUjtBQUNGO0FDakpNO0VEbkhBO0lBT0ksVUFBQTtFQWlRUjtBQUNGO0FBNVBRO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQ29DUixXRG5DeUI7RUNvQ3pCLFlEcEN5QjtFQ3FDekIsb0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsWUR6Q21DO0VDdkNwQyw4QkFBQTtBRDZTRDtBQ3BLTTtFRHRHRTtJQU1JLFdBQUE7RUF3UVY7QUFDRjtBQ3pLTTtFRHRHRTtJQVNJLFdBQUE7RUEwUVY7QUFDRjtBQzlLTTtFRHRHRTtJQVlJLFdBQUE7RUE0UVY7QUFDRjtBQTFRUTtFQUNFLG1CQUFBO0FBNFFWO0FBM1FVO0VBQ0UsOEJBQUE7QUE2UVo7QUEzUVU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VDekRYLDhCQUFBO0FEeVVEO0FBcFVJO0VBQ0Usd0JBQUE7RUFJQSxrQkFBQTtBQW9VTjtBQ3JNTTtFRHBJRjtJQUdHLGNBQUE7RUEwVUw7QUFDRjtBQXhVTTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBMFVSO0FDbE5NO0VEOUhBO0lBUUksUUFBQTtFQTRVUjtBQUNGO0FBMVVNO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBT0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFzVVI7QUMvTk07RURuSEE7SUFJSSxVQUFBO0VBa1ZSO0FBQ0Y7QUNwT007RURuSEE7SUFPSSxVQUFBO0VBb1ZSO0FBQ0Y7QUEvVVE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VDb0NSLFdEbkN5QjtFQ29DekIsWURwQ3lCO0VDcUN6QixvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxZRHpDbUM7RUN2Q3BDLDhCQUFBO0FEZ1lEO0FDdlBNO0VEdEdFO0lBTUksV0FBQTtFQTJWVjtBQUNGO0FDNVBNO0VEdEdFO0lBU0ksV0FBQTtFQTZWVjtBQUNGO0FDalFNO0VEdEdFO0lBWUksV0FBQTtFQStWVjtBQUNGO0FBN1ZRO0VBQ0UsbUJBQUE7QUErVlY7QUE5VlU7RUFDRSw4QkFBQTtBQWdXWjtBQTlWVTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUN6RFgsOEJBQUE7QUQ0WkQ7QUF2Wkk7RUFDRSx3QkFBQTtFQUlBLGtCQUFBO0FBdVpOO0FDeFJNO0VEcElGO0lBR0csY0FBQTtFQTZaTDtBQUNGO0FBM1pNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUE2WlI7QUNyU007RUQ5SEE7SUFRSSxRQUFBO0VBK1pSO0FBQ0Y7QUE3Wk07RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFPQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQXlaUjtBQ2xUTTtFRG5IQTtJQUlJLFVBQUE7RUFxYVI7QUFDRjtBQ3ZUTTtFRG5IQTtJQU9JLFVBQUE7RUF1YVI7QUFDRjtBQWxhUTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUNvQ1IsV0RuQ3lCO0VDb0N6QixZRHBDeUI7RUNxQ3pCLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLFlEekNtQztFQ3ZDcEMsOEJBQUE7QURtZEQ7QUMxVU07RUR0R0U7SUFNSSxXQUFBO0VBOGFWO0FBQ0Y7QUMvVU07RUR0R0U7SUFTSSxXQUFBO0VBZ2JWO0FBQ0Y7QUNwVk07RUR0R0U7SUFZSSxXQUFBO0VBa2JWO0FBQ0Y7QUFoYlE7RUFDRSxtQkFBQTtBQWtiVjtBQWpiVTtFQUNFLDhCQUFBO0FBbWJaO0FBamJVO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQ3pEWCw4QkFBQTtBRCtlRDtBQTFlSTtFQUNFLHdCQUFBO0VBSUEsa0JBQUE7QUEwZU47QUMzV007RURwSUY7SUFHRyxjQUFBO0VBZ2ZMO0FBQ0Y7QUE5ZU07RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQWdmUjtBQ3hYTTtFRDlIQTtJQVFJLFFBQUE7RUFrZlI7QUFDRjtBQWhmTTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQU9BLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBNGVSO0FDcllNO0VEbkhBO0lBSUksVUFBQTtFQXdmUjtBQUNGO0FDMVlNO0VEbkhBO0lBT0ksVUFBQTtFQTBmUjtBQUNGO0FBcmZRO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQ29DUixXRG5DeUI7RUNvQ3pCLFlEcEN5QjtFQ3FDekIsb0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsWUR6Q21DO0VDdkNwQyw4QkFBQTtBRHNpQkQ7QUM3Wk07RUR0R0U7SUFNSSxXQUFBO0VBaWdCVjtBQUNGO0FDbGFNO0VEdEdFO0lBU0ksV0FBQTtFQW1nQlY7QUFDRjtBQ3ZhTTtFRHRHRTtJQVlJLFdBQUE7RUFxZ0JWO0FBQ0Y7QUFuZ0JRO0VBQ0UsbUJBQUE7QUFxZ0JWO0FBcGdCVTtFQUNFLDhCQUFBO0FBc2dCWjtBQXBnQlU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VDekRYLDhCQUFBO0FEa2tCRCIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL2hlbHBkZXNrL2NvbXBvbmVudHMvaGVscGRlc2stY3JlYXRlLXRpY2tldC9oZWxwZGVzay1jcmVhdGUtdGlja2V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRmlsZSBmb3Igd2hpY2ggYWxsIGltcG9ydHMgYXJlIHJlc29sdmVkIGFuZCBidW5kbGVkLiBUaGlzIGlzIHRoZSBlbnRyeS1wb2ludCBmb3Jcbi8vIHRoZSBgQGFuZ3VsYXIvbWF0ZXJpYWxgIHRoZW1pbmcgU2FzcyBidW5kbGUuIFNlZSBgLy9zcmMvbWF0ZXJpYWw6dGhlbWluZ19idW5kbGVgLlxuXG4vLyBJbXBvcnQgYWxsIHRoZSB0aGVtaW5nIGZ1bmN0aW9uYWxpdHkuXG4vLyBXZSB3YW50IG92ZXJsYXlzIHRvIGFsd2F5cyBhcHBlYXIgb3ZlciB1c2VyIGNvbnRlbnQsIHNvIHNldCBhIGJhc2VsaW5lXG4vLyB2ZXJ5IGhpZ2ggei1pbmRleCBmb3IgdGhlIG92ZXJsYXkgY29udGFpbmVyLCB3aGljaCBpcyB3aGVyZSB3ZSBjcmVhdGUgdGhlIG5ld1xuLy8gc3RhY2tpbmcgY29udGV4dCBmb3IgYWxsIG92ZXJsYXlzLlxuJGNkay16LWluZGV4LW92ZXJsYXktY29udGFpbmVyOiAxMDAwICFkZWZhdWx0O1xuJGNkay16LWluZGV4LW92ZXJsYXk6IDEwMDAgIWRlZmF1bHQ7XG4kY2RrLXotaW5kZXgtb3ZlcmxheS1iYWNrZHJvcDogMTAwMCAhZGVmYXVsdDtcblxuLy8gQmFja2dyb3VuZCBjb2xvciBmb3IgYWxsIG9mIHRoZSBiYWNrZHJvcHNcbiRjZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9wLWJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zMikgIWRlZmF1bHQ7XG5cbi8vIERlZmF1bHQgYmFja2Ryb3AgYW5pbWF0aW9uIGlzIGJhc2VkIG9uIHRoZSBNYXRlcmlhbCBEZXNpZ24gc3dpZnQtZWFzZS1vdXQuXG4kYmFja2Ryb3AtYW5pbWF0aW9uLWR1cmF0aW9uOiA0MDBtcyAhZGVmYXVsdDtcbiRiYWNrZHJvcC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKSAhZGVmYXVsdDtcblxuXG5AbWl4aW4gY2RrLW92ZXJsYXkoKSB7XG4gIC5jZGstb3ZlcmxheS1jb250YWluZXIsIC5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlciB7XG4gICAgLy8gRGlzYWJsZSBldmVudHMgZnJvbSBiZWluZyBjYXB0dXJlZCBvbiB0aGUgb3ZlcmxheSBjb250YWluZXIuXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICAvLyBUaGUgY29udGFpbmVyIHNob3VsZCBiZSB0aGUgc2l6ZSBvZiB0aGUgdmlld3BvcnQuXG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLy8gVGhlIG92ZXJsYXktY29udGFpbmVyIGlzIGFuIGludmlzaWJsZSBlbGVtZW50IHdoaWNoIGNvbnRhaW5zIGFsbCBpbmRpdmlkdWFsIG92ZXJsYXlzLlxuICAuY2RrLW92ZXJsYXktY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogJGNkay16LWluZGV4LW92ZXJsYXktY29udGFpbmVyO1xuXG4gICAgJjplbXB0eSB7XG4gICAgICAvLyBIaWRlIHRoZSBlbGVtZW50IHdoZW4gaXQgZG9lc24ndCBoYXZlIGFueSBjaGlsZCBub2Rlcy4gVGhpcyBkb2Vzbid0XG4gICAgICAvLyBpbmNsdWRlIG92ZXJsYXlzIHRoYXQgaGF2ZSBiZWVuIGRldGFjaGVkLCByYXRoZXIgdGhhbiBkaXNwb3NlZC5cbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLy8gV2UgdXNlIGFuIGV4dHJhIHdyYXBwZXIgZWxlbWVudCBpbiBvcmRlciB0byB1c2UgbWFrZSB0aGUgb3ZlcmxheSBpdHNlbGYgYSBmbGV4IGl0ZW0uXG4gIC8vIFRoaXMgbWFrZXMgY2VudGVyaW5nIHRoZSBvdmVybGF5IGVhc3kgd2l0aG91dCBydW5uaW5nIGludG8gdGhlIHN1YnBpeGVsIHJlbmRlcmluZ1xuICAvLyBwcm9ibGVtcyB0aWVkIHRvIHVzaW5nIGB0cmFuc2Zvcm1gIGFuZCB3aXRob3V0IGludGVyZmVyaW5nIHdpdGggdGhlIG90aGVyIHBvc2l0aW9uXG4gIC8vIHN0cmF0ZWdpZXMuXG4gIC5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogJGNkay16LWluZGV4LW92ZXJsYXk7XG4gIH1cblxuICAvLyBBIHNpbmdsZSBvdmVybGF5IHBhbmUuXG4gIC5jZGstb3ZlcmxheS1wYW5lIHtcbiAgICAvLyBOb3RlOiBpdCdzIGltcG9ydGFudCBmb3IgdGhpcyBvbmUgdG8gc3RhcnQgb2ZmIGBhYnNvbHV0ZWAsXG4gICAgLy8gaW4gb3JkZXIgZm9yIHVzIHRvIGJlIGFibGUgdG8gbWVhc3VyZSBpdCBjb3JyZWN0bHkuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgei1pbmRleDogJGNkay16LWluZGV4LW92ZXJsYXk7XG5cbiAgICAvLyBGb3IgY29ubmVjdGVkLXBvc2l0aW9uIG92ZXJsYXlzLCB3ZSBzZXQgYGRpc3BsYXk6IGZsZXhgIGluXG4gICAgLy8gb3JkZXIgdG8gZm9yY2UgYG1heC13aWR0aGAgYW5kIGBtYXgtaGVpZ2h0YCB0byB0YWtlIGVmZmVjdC5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLmNkay1vdmVybGF5LWJhY2tkcm9wIHtcbiAgICAvLyBUT0RPKGplbGJvdXJuKTogcmV1c2Ugc2lkZW5hdiBmdWxsc2NyZWVuIG1peGluLlxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG5cbiAgICB6LWluZGV4OiAkY2RrLXotaW5kZXgtb3ZlcmxheS1iYWNrZHJvcDtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgJGJhY2tkcm9wLWFuaW1hdGlvbi1kdXJhdGlvbiAkYmFja2Ryb3AtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjtcbiAgICBvcGFjaXR5OiAwO1xuXG4gICAgJi5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5nIHtcbiAgICAgIG9wYWNpdHk6IDE7XG5cbiAgICAgIC8vIEluIGhpZ2ggY29udHJhc3QgbW9kZSB0aGUgcmdiYSBiYWNrZ3JvdW5kIHdpbGwgYmVjb21lIHNvbGlkIHNvIHdlIG5lZWQgdG8gZmFsbCBiYWNrXG4gICAgICAvLyB0byBtYWtpbmcgaXQgb3BhcXVlIHVzaW5nIGBvcGFjaXR5YC4gTm90ZSB0aGF0IHdlIGNhbid0IHVzZSB0aGUgYGNkay1oaWdoLWNvbnRyYXN0YFxuICAgICAgLy8gbWl4aW4sIGJlY2F1c2Ugd2UgY2FuJ3Qgbm9ybWFsaXplIHRoZSBpbXBvcnQgcGF0aCB0byB0aGUgX2ExMXkuc2NzcyBib3RoIGZvciB0aGVcbiAgICAgIC8vIHNvdXJjZSBhbmQgd2hlbiB0aGlzIGZpbGUgaXMgZGlzdHJpYnV0ZWQuIFNlZSAjMTA5MDguXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xuICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNkay1vdmVybGF5LWRhcmstYmFja2Ryb3Age1xuICAgIGJhY2tncm91bmQ6ICRjZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9wLWJhY2tncm91bmQ7XG4gIH1cblxuICAuY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3Age1xuICAgIC8vIE5vdGU6IGFzIG9mIEZpcmVmb3ggNTcsIGhhdmluZyB0aGUgYmFja2Ryb3AgYmUgYGJhY2tncm91bmQ6IG5vbmVgIHdpbGwgcHJldmVudCBpdCBmcm9tXG4gICAgLy8gY2FwdHVyaW5nIHRoZSB1c2VyJ3MgbW91c2Ugc2Nyb2xsIGV2ZW50cy4gU2luY2Ugd2UgYWxzbyBjYW4ndCB1c2Ugc29tZXRoaW5nIGxpa2VcbiAgICAvLyBgcmdiYSgwLCAwLCAwLCAwKWAsIHdlIHdvcmsgYXJvdW5kIHRoZSBpbmNvbnNpc3RlbmN5IGJ5IG5vdCBzZXR0aW5nIHRoZSBiYWNrZ3JvdW5kIGF0XG4gICAgLy8gYWxsIGFuZCB1c2luZyBgb3BhY2l0eWAgdG8gbWFrZSB0aGUgZWxlbWVudCB0cmFuc3BhcmVudC5cbiAgICAmLCAmLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmcge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cblxuICAvLyBPdmVybGF5IHBhcmVudCBlbGVtZW50IHVzZWQgd2l0aCB0aGUgY29ubmVjdGVkIHBvc2l0aW9uIHN0cmF0ZWd5LiBVc2VkIHRvIGNvbnN0cmFpbiB0aGVcbiAgLy8gb3ZlcmxheSBlbGVtZW50J3Mgc2l6ZSB0byBmaXQgd2l0aGluIHRoZSB2aWV3cG9ydC5cbiAgLmNkay1vdmVybGF5LWNvbm5lY3RlZC1wb3NpdGlvbi1ib3VuZGluZy1ib3gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAkY2RrLXotaW5kZXgtb3ZlcmxheTtcblxuICAgIC8vIFdlIHVzZSBgZGlzcGxheTogZmxleGAgb24gdGhpcyBlbGVtZW50IGV4Y2x1c2l2ZWx5IGZvciBjZW50ZXJpbmcgY29ubmVjdGVkIG92ZXJsYXlzLlxuICAgIC8vIFdoZW4gKm5vdCogY2VudGVyaW5nLCBhIHRvcC9sZWZ0L2JvdHRvbS9yaWdodCB3aWxsIGJlIHNldCB3aGljaCBvdmVycmlkZXMgdGhlIG5vcm1hbFxuICAgIC8vIGZsZXggbGF5b3V0LlxuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAvLyBXZSB1c2UgdGhlIGBjb2x1bW5gIGRpcmVjdGlvbiBoZXJlIHRvIGF2b2lkIHNvbWUgZmxleGJveCBpc3N1ZXMgaW4gRWRnZVxuICAgIC8vIHdoZW4gdXNpbmcgdGhlIFwiZ3JvdyBhZnRlciBvcGVuXCIgb3B0aW9ucy5cbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgLy8gQWRkIHNvbWUgZGltZW5zaW9ucyBzbyB0aGUgZWxlbWVudCBoYXMgYW4gYGlubmVyVGV4dGAgd2hpY2ggc29tZSBwZW9wbGUgZGVwZW5kIG9uIGluIHRlc3RzLlxuICAgIG1pbi13aWR0aDogMXB4O1xuICAgIG1pbi1oZWlnaHQ6IDFweDtcbiAgfVxuXG4gIC8vIFVzZWQgd2hlbiBkaXNhYmxpbmcgZ2xvYmFsIHNjcm9sbGluZy5cbiAgLmNkay1nbG9iYWwtc2Nyb2xsYmxvY2sge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcblxuICAgIC8vIE5lY2Vzc2FyeSBmb3IgdGhlIGNvbnRlbnQgbm90IHRvIGxvc2UgaXRzIHdpZHRoLiBOb3RlIHRoYXQgd2UncmUgdXNpbmcgMTAwJSwgaW5zdGVhZCBvZlxuICAgIC8vIDEwMHZ3LCBiZWNhdXNlIDEwMHZ3IGluY2x1ZGVzIHRoZSB3aWR0aCBwbHVzIHRoZSBzY3JvbGxiYXIsIHdoZXJlYXMgMTAwJSBpcyB0aGUgd2lkdGhcbiAgICAvLyB0aGF0IHRoZSBlbGVtZW50IGhhZCBiZWZvcmUgd2UgbWFkZSBpdCBgZml4ZWRgLlxuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLy8gTm90ZTogdGhpcyB3aWxsIGFsd2F5cyBhZGQgYSBzY3JvbGxiYXIgdG8gd2hhdGV2ZXIgZWxlbWVudCBpdCBpcyBvbiwgd2hpY2ggY2FuXG4gICAgLy8gcG90ZW50aWFsbHkgcmVzdWx0IGluIGRvdWJsZSBzY3JvbGxiYXJzLiBJdCBzaG91bGRuJ3QgYmUgYW4gaXNzdWUsIGJlY2F1c2Ugd2Ugd29uJ3RcbiAgICAvLyBibG9jayBzY3JvbGxpbmcgb24gYSBwYWdlIHRoYXQgZG9lc24ndCBoYXZlIGEgc2Nyb2xsYmFyIGluIHRoZSBmaXJzdCBwbGFjZS5cbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIH1cbn1cblxuQG1peGluIGNkay1hMTF5IHtcbiAgLmNkay12aXN1YWxseS1oaWRkZW4ge1xuICAgIGJvcmRlcjogMDtcbiAgICBjbGlwOiByZWN0KDAgMCAwIDApO1xuICAgIGhlaWdodDogMXB4O1xuICAgIG1hcmdpbjogLTFweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxcHg7XG5cbiAgICAvLyBBdm9pZCBicm93c2VycyByZW5kZXJpbmcgdGhlIGZvY3VzIHJpbmcgaW4gc29tZSBjYXNlcy5cbiAgICBvdXRsaW5lOiAwO1xuXG4gICAgLy8gQXZvaWQgc29tZSBjYXNlcyB3aGVyZSB0aGUgYnJvd3NlciB3aWxsIHN0aWxsIHJlbmRlciB0aGUgbmF0aXZlIGNvbnRyb2xzIChzZWUgIzkwNDkpLlxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIH1cbn1cblxuLy8vIEVtaXRzIHRoZSBtaXhpbidzIGNvbnRlbnQgbmVzdGVkIHVuZGVyIGAkc2VsZWN0b3ItY29udGV4dGAgaWYgYCRzZWxlY3Rvci1jb250ZXh0YFxuLy8vIGlzIG5vbi1lbXB0eS5cbi8vLyBAcGFyYW0gc2VsZWN0b3ItY29udGV4dCBUaGUgc2VsZWN0b3IgdW5kZXIgd2hpY2ggdG8gbmVzdCB0aGUgbWl4aW4ncyBjb250ZW50LlxuQG1peGluIF9jZGstb3B0aW9uYWxseS1uZXN0LWNvbnRlbnQoJHNlbGVjdG9yLWNvbnRleHQpIHtcbiAgQGlmICgkc2VsZWN0b3ItY29udGV4dCA9PSAnJykge1xuICAgIEBjb250ZW50O1xuICB9XG4gIEBlbHNlIHtcbiAgICAjeyRzZWxlY3Rvci1jb250ZXh0fSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8vIEFwcGxpZXMgc3R5bGVzIGZvciB1c2VycyBpbiBoaWdoIGNvbnRyYXN0IG1vZGUuIE5vdGUgdGhhdCB0aGlzIG9ubHkgYXBwbGllc1xuLy8vIHRvIE1pY3Jvc29mdCBicm93c2Vycy4gQ2hyb21lIGNhbiBiZSBpbmNsdWRlZCBieSBjaGVja2luZyBmb3IgdGhlIGBodG1sW2hjXWBcbi8vLyBhdHRyaWJ1dGUsIGhvd2V2ZXIgQ2hyb21lIGhhbmRsZXMgaGlnaCBjb250cmFzdCBkaWZmZXJlbnRseS5cbi8vL1xuLy8vIEBwYXJhbSB0YXJnZXQgV2hpY2gga2luZCBvZiBoaWdoIGNvbnRyYXN0IHNldHRpbmcgdG8gdGFyZ2V0LiBEZWZhdWx0cyB0byBgYWN0aXZlYCwgY2FuIGJlXG4vLy8gICAgYHdoaXRlLW9uLWJsYWNrYCBvciBgYmxhY2stb24td2hpdGVgLlxuLy8vIEBwYXJhbSBlbmNhcHN1bGF0aW9uIFdoZXRoZXIgdG8gZW1pdCBzdHlsZXMgZm9yIHZpZXcgZW5jYXBzdWxhdGlvbi4gVmFsdWVzIGFyZTpcbi8vLyAgICAgKiBgb25gIC0gd29ya3MgZm9yIGBFbXVsYXRlZGAsIGBOYXRpdmVgLCBhbmQgYFNoYWRvd0RvbWBcbi8vLyAgICAgKiBgb2ZmYCAtIHdvcmtzIGZvciBgTm9uZWBcbi8vLyAgICAgKiBgYW55YCAtIHdvcmtzIGZvciBhbGwgZW5jYXBzdWxhdGlvbiBtb2RlcyBieSBlbWl0dGluZyB0aGUgQ1NTIHR3aWNlIChkZWZhdWx0KS5cbkBtaXhpbiBjZGstaGlnaC1jb250cmFzdCgkdGFyZ2V0OiBhY3RpdmUsICRlbmNhcHN1bGF0aW9uOiAnYW55Jykge1xuICBAaWYgKCR0YXJnZXQgIT0gJ2FjdGl2ZScgYW5kICR0YXJnZXQgIT0gJ2JsYWNrLW9uLXdoaXRlJyBhbmQgJHRhcmdldCAhPSAnd2hpdGUtb24tYmxhY2snKSB7XG4gICAgQGVycm9yICdVbmtub3duIGNkay1oaWdoLWNvbnRyYXN0IHZhbHVlIFwiI3skdGFyZ2V0fVwiIHByb3ZpZGVkLiAnICtcbiAgICAgICAgICAgJ0FsbG93ZWQgdmFsdWVzIGFyZSBcImFjdGl2ZVwiLCBcImJsYWNrLW9uLXdoaXRlXCIsIGFuZCBcIndoaXRlLW9uLWJsYWNrXCInO1xuICB9XG5cbiAgQGlmICgkZW5jYXBzdWxhdGlvbiAhPSAnb24nIGFuZCAkZW5jYXBzdWxhdGlvbiAhPSAnb2ZmJyBhbmQgJGVuY2Fwc3VsYXRpb24gIT0gJ2FueScpIHtcbiAgICBAZXJyb3IgJ1Vua25vd24gY2RrLWhpZ2gtY29udHJhc3QgZW5jYXBzdWxhdGlvbiBcIiN7JGVuY2Fwc3VsYXRpb259XCIgcHJvdmlkZWQuICcgK1xuICAgICAgICAgICAnQWxsb3dlZCB2YWx1ZXMgYXJlIFwib25cIiwgXCJvZmZcIiwgYW5kIFwiYW55XCInO1xuICB9XG5cbiAgLy8gSWYgdGhlIHNlbGVjdG9yIGNvbnRleHQgaGFzIG11bHRpcGxlIHBhcnRzLCBzdWNoIGFzIGAuc2VjdGlvbiwgLnJlZ2lvbmAsIGp1c3QgZG9pbmdcbiAgLy8gYC5jZGstaGlnaC1jb250cmFzdC14eHggI3smfWAgd2lsbCBvbmx5IGFwcGx5IHRoZSBwYXJlbnQgc2VsZWN0b3IgdG8gdGhlIGZpcnN0IHBhcnQgb2YgdGhlXG4gIC8vIGNvbnRleHQuIFdlIGFkZHJlc3MgdGhpcyBieSBuZXN0aW5nIHRoZSBzZWxlY3RvciBjb250ZXh0IHVuZGVyIC5jZGstaGlnaC1jb250cmFzdC5cbiAgQGF0LXJvb3Qge1xuICAgICRzZWxlY3Rvci1jb250ZXh0OiAjeyZ9O1xuXG4gICAgQGlmICgkZW5jYXBzdWxhdGlvbiAhPSAnb24nKSB7XG4gICAgICAuY2RrLWhpZ2gtY29udHJhc3QtI3skdGFyZ2V0fSB7XG4gICAgICAgIEBpbmNsdWRlIF9jZGstb3B0aW9uYWxseS1uZXN0LWNvbnRlbnQoJHNlbGVjdG9yLWNvbnRleHQpIHtcbiAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIEBpZiAoJGVuY2Fwc3VsYXRpb24gIT0gJ29mZicpIHtcbiAgICAgIC5jZGstaGlnaC1jb250cmFzdC0jeyR0YXJnZXR9IDpob3N0IHtcbiAgICAgICAgQGluY2x1ZGUgX2Nkay1vcHRpb25hbGx5LW5lc3QtY29udGVudCgkc2VsZWN0b3ItY29udGV4dCkge1xuICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIENvcmUgc3R5bGVzIHRoYXQgZW5hYmxlIG1vbml0b3JpbmcgYXV0b2ZpbGwgc3RhdGUgb2YgdGV4dCBmaWVsZHMuXG5AbWl4aW4gY2RrLXRleHQtZmllbGQge1xuICAvLyBLZXlmcmFtZXMgdGhhdCBhcHBseSBubyBzdHlsZXMsIGJ1dCBhbGxvdyB1cyB0byBtb25pdG9yIHdoZW4gYW4gdGV4dCBmaWVsZCBiZWNvbWVzIGF1dG9maWxsZWRcbiAgLy8gYnkgd2F0Y2hpbmcgZm9yIHRoZSBhbmltYXRpb24gZXZlbnRzIHRoYXQgYXJlIGZpcmVkIHdoZW4gdGhleSBzdGFydC4gTm90ZTogdGhlIC8qISovIGNvbW1lbnQgaXNcbiAgLy8gbmVlZGVkIHRvIHByZXZlbnQgTGliU2FzcyBmcm9tIHN0cmlwcGluZyB0aGUga2V5ZnJhbWVzIG91dC5cbiAgLy8gQmFzZWQgb246IGh0dHBzOi8vbWVkaXVtLmNvbS9AYnJ1bm4vZGV0ZWN0aW5nLWF1dG9maWxsZWQtZmllbGRzLWluLWphdmFzY3JpcHQtYWVkNTk4ZDI1ZGE3XG4gIEBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnQgey8qISovfVxuICBAa2V5ZnJhbWVzIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWVuZCB7LyohKi99XG5cbiAgLmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDotd2Via2l0LWF1dG9maWxsIHtcbiAgICAvLyBTaW5jZSBDaHJvbWUgODAgd2UgbmVlZCBhIDFtcyBkZWxheSwgb3IgdGhlIGFuaW1hdGlvbnN0YXJ0IGV2ZW50IHdvbid0IGZpcmUuXG4gICAgYW5pbWF0aW9uOiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydCAwcyAxbXM7XG4gIH1cblxuICAuY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvcmVkOm5vdCg6LXdlYmtpdC1hdXRvZmlsbCkge1xuICAgIC8vIFNpbmNlIENocm9tZSA4MCB3ZSBuZWVkIGEgMW1zIGRlbGF5LCBvciB0aGUgYW5pbWF0aW9uc3RhcnQgZXZlbnQgd29uJ3QgZmlyZS5cbiAgICBhbmltYXRpb246IGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWVuZCAwcyAxbXM7XG4gIH1cblxuICAvLyBSZW1vdmUgdGhlIHJlc2l6ZSBoYW5kbGUgb24gYXV0b3NpemluZyB0ZXh0YXJlYXMsIGJlY2F1c2Ugd2hhdGV2ZXIgaGVpZ2h0XG4gIC8vIHRoZSB1c2VyIHJlc2l6ZWQgdG8gd2lsbCBiZSBvdmVyd3JpdHRlbiBvbmNlIHRoZXkgc3RhcnQgdHlwaW5nIGFnYWluLlxuICB0ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUge1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgfVxuXG4gIC8vIFRoaXMgY2xhc3MgaXMgdGVtcG9yYXJpbHkgYXBwbGllZCB0byB0aGUgdGV4dGFyZWEgd2hlbiBpdCBpcyBiZWluZyBtZWFzdXJlZC4gSXQgaXMgaW1tZWRpYXRlbHlcbiAgLy8gcmVtb3ZlZCB3aGVuIG1lYXN1cmluZyBpcyBjb21wbGV0ZS4gV2UgdXNlIGAhaW1wb3J0YW50YCBydWxlcyBoZXJlIHRvIG1ha2Ugc3VyZSB1c2VyLXNwZWNpZmllZFxuICAvLyBydWxlcyBkbyBub3QgaW50ZXJmZXJlIHdpdGggdGhlIG1lYXN1cmVtZW50LlxuICB0ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5nIHtcbiAgICBAaW5jbHVkZSBfY2RrLXRleHRhcmVhLWF1dG9zaXplLW1lYXN1cmluZy1iYXNlO1xuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgfVxuXG4gIC8vIFNpbWlsYXIgdG8gdGhlIGBjZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5nYCBjbGFzcywgYnV0IG9ubHkgYXBwbGllZCBvbiBGaXJlZm94LiBXZSBuZWVkXG4gIC8vIHRvIHVzZSB0aGlzIGNsYXNzLCBiZWNhdXNlIEZpcmVmb3ggaGFzIGEgYnVnIHdoZXJlIGNoYW5naW5nIHRoZSBgb3ZlcmZsb3dgIGJyZWFrcyB0aGUgdXNlcidzXG4gIC8vIGFiaWxpdHkgdG8gdW5kby9yZWRvIHdoYXQgdGhleSB3ZXJlIHR5cGluZyAoc2VlICMxNjYyOSkuIFRoaXMgY2xhc3MgaXMgb25seSBzY29wZWQgdG8gRmlyZWZveCxcbiAgLy8gYmVjYXVzZSB0aGUgbWVhc3VyZW1lbnRzIHRoZXJlIGRvbid0IHNlZW0gdG8gYmUgYWZmZWN0ZWQgYnkgdGhlIGBoZWlnaHQ6IDBgLCB3aGVyZWFzIG9uIG90aGVyXG4gIC8vIGJyb3dzZXJzIHRoZXkgYXJlLCBlLmcuIENocm9tZSBkZXRlY3RzIGxvbmdlciB0ZXh0IGFuZCBJRSBkb2VzJ3QgcmVzaXplIGJhY2sgdG8gbm9ybWFsLlxuICAvLyBJZGVudGljYWwgaXNzdWUgcmVwb3J0OiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD00NDg3ODRcbiAgdGV4dGFyZWEuY2RrLXRleHRhcmVhLWF1dG9zaXplLW1lYXN1cmluZy1maXJlZm94IHtcbiAgICBAaW5jbHVkZSBfY2RrLXRleHRhcmVhLWF1dG9zaXplLW1lYXN1cmluZy1iYXNlO1xuICAgIGhlaWdodDogMCAhaW1wb3J0YW50O1xuICB9XG59XG5cbkBtaXhpbiBfY2RrLXRleHRhcmVhLWF1dG9zaXplLW1lYXN1cmluZy1iYXNlIHtcbiAgLy8gSGF2aW5nIDJweCB0b3AgYW5kIGJvdHRvbSBwYWRkaW5nIHNlZW1zIHRvIGZpeCBhIGJ1ZyB3aGVyZSBDaHJvbWUgZ2V0cyBhbiBpbmNvcnJlY3RcbiAgLy8gbWVhc3VyZW1lbnQuIFdlIGp1c3QgaGF2ZSB0byBhY2NvdW50IGZvciBpdCBsYXRlciBhbmQgc3VidHJhY3QgaXQgb2ZmIHRoZSBmaW5hbCByZXN1bHQuXG4gIHBhZGRpbmc6IDJweCAwICFpbXBvcnRhbnQ7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94ICFpbXBvcnRhbnQ7XG59XG5cbi8vIFVzZWQgdG8gZ2VuZXJhdGUgVUlEcyBmb3Iga2V5ZnJhbWVzIHVzZWQgdG8gY2hhbmdlIHRoZSB0ZXh0IGZpZWxkIGF1dG9maWxsIHN0eWxlcy5cbiRjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudDogMDtcblxuLy8gTWl4aW4gdXNlZCB0byBhcHBseSBjdXN0b20gYmFja2dyb3VuZCBhbmQgZm9yZWdyb3VuZCBjb2xvcnMgdG8gYW4gYXV0b2ZpbGxlZCB0ZXh0IGZpZWxkLlxuLy8gQmFzZWQgb246IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI3ODE1NDkvXG4vLyByZW1vdmluZy1pbnB1dC1iYWNrZ3JvdW5kLWNvbG91ci1mb3ItY2hyb21lLWF1dG9jb21wbGV0ZSNhbnN3ZXItMzc0MzIyNjBcbkBtaXhpbiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvcigkYmFja2dyb3VuZCwgJGZvcmVncm91bmQ6JycpIHtcbiAgQGtleWZyYW1lcyBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci0jeyRjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudH0ge1xuICAgIHRvIHtcbiAgICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kO1xuICAgICAgQGlmICRmb3JlZ3JvdW5kICE9ICcnIHsgY29sb3I6ICRmb3JlZ3JvdW5kOyB9XG4gICAgfVxuICB9XG5cbiAgJjotd2Via2l0LWF1dG9maWxsIHtcbiAgICBhbmltYXRpb246IGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLSN7JGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50fSBib3RoO1xuICB9XG5cbiAgJi5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6LXdlYmtpdC1hdXRvZmlsbCB7XG4gICAgLy8gU2luY2UgQ2hyb21lIDgwIHdlIG5lZWQgYSAxbXMgZGVsYXkgZm9yIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLXN0YXJ0LCBvciB0aGUgYW5pbWF0aW9uc3RhcnRcbiAgICAvLyBldmVudCB3b24ndCBmaXJlLlxuICAgIGFuaW1hdGlvbjogY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnQgMHMgMW1zLFxuICAgICAgICAgICAgICAgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItI3skY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnR9IGJvdGg7XG4gIH1cblxuICAkY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnQ6XG4gICAgICAkY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnQgKyAxICFnbG9iYWw7XG59XG5cblxuLy8gQ29yZSBzdHlsZXMgdGhhdCBjYW4gYmUgdXNlZCB0byBhcHBseSBtYXRlcmlhbCBkZXNpZ24gdHJlYXRtZW50cyB0byBhbnkgZWxlbWVudC5cbi8vIE1lZGlhIHF1ZXJpZXNcbi8vIFRPRE8oam9zZXBocGVycm90dCk6IENoYW5nZSAkbWF0LXhzbWFsbCBhbmQgJG1hdC1zbWFsbCB1c2FnZXMgdG8gcmVseSBvbiBCcmVha3BvaW50T2JzZXJ2ZXIsXG4kbWF0LXhzbWFsbDogJ21heC13aWR0aDogNTk5cHgnO1xuJG1hdC1zbWFsbDogJ21heC13aWR0aDogOTU5cHgnO1xuXG4vLyBUT0RPOiBSZXZpc2l0IGFsbCB6LWluZGljZXMgYmVmb3JlIGJldGFcbi8vIHotaW5kZXggbWFzdGVyIGxpc3RcblxuJHotaW5kZXgtZmFiOiAyMCAhZGVmYXVsdDtcbiR6LWluZGV4LWRyYXdlcjogMTAwICFkZWZhdWx0O1xuXG4vLyBHbG9iYWwgY29uc3RhbnRzXG4kcGk6IDMuMTQxNTkyNjU7XG5cbi8vIFBhZGRpbmcgYmV0d2VlbiBpbnB1dCB0b2dnbGVzIGFuZCB0aGVpciBsYWJlbHNcbiRtYXQtdG9nZ2xlLXBhZGRpbmc6IDhweCAhZGVmYXVsdDtcbi8vIFdpZHRoIGFuZCBoZWlnaHQgb2YgaW5wdXQgdG9nZ2xlc1xuJG1hdC10b2dnbGUtc2l6ZTogMjBweCAhZGVmYXVsdDtcblxuLy8gRWFzaW5nIEN1cnZlc1xuLy8gVE9ETyhqZWxib3Vybik6IGFsbCBvZiB0aGVzZSBuZWVkIHRvIGJlIHJldmlzaXRlZFxuXG4vLyBUaGUgZGVmYXVsdCBhbmltYXRpb24gY3VydmVzIHVzZWQgYnkgbWF0ZXJpYWwgZGVzaWduLlxuJG1hdC1saW5lYXItb3V0LXNsb3ctaW4tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAwLjEpICFkZWZhdWx0O1xuJG1hdC1mYXN0LW91dC1zbG93LWluLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAhZGVmYXVsdDtcbiRtYXQtZmFzdC1vdXQtbGluZWFyLWluLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMSwgMSkgIWRlZmF1bHQ7XG5cbiRlYXNlLWluLW91dC1jdXJ2ZS1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMzUsIDAsIDAuMjUsIDEpICFkZWZhdWx0O1xuXG4kc3dpZnQtZWFzZS1vdXQtZHVyYXRpb246IDQwMG1zICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2Utb3V0LXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSkgIWRlZmF1bHQ7XG4kc3dpZnQtZWFzZS1vdXQ6IGFsbCAkc3dpZnQtZWFzZS1vdXQtZHVyYXRpb24gJHN3aWZ0LWVhc2Utb3V0LXRpbWluZy1mdW5jdGlvbiAhZGVmYXVsdDtcblxuJHN3aWZ0LWVhc2UtaW4tZHVyYXRpb246IDMwMG1zICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2UtaW4tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMCwgMC41NSwgMC4yKSAhZGVmYXVsdDtcbiRzd2lmdC1lYXNlLWluOiBhbGwgJHN3aWZ0LWVhc2UtaW4tZHVyYXRpb24gJHN3aWZ0LWVhc2UtaW4tdGltaW5nLWZ1bmN0aW9uICFkZWZhdWx0O1xuXG4kc3dpZnQtZWFzZS1pbi1vdXQtZHVyYXRpb246IDUwMG1zICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2UtaW4tb3V0LXRpbWluZy1mdW5jdGlvbjogJGVhc2UtaW4tb3V0LWN1cnZlLWZ1bmN0aW9uICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2UtaW4tb3V0OiBhbGwgJHN3aWZ0LWVhc2UtaW4tb3V0LWR1cmF0aW9uICRzd2lmdC1lYXNlLWluLW91dC10aW1pbmctZnVuY3Rpb24gIWRlZmF1bHQ7XG5cbiRzd2lmdC1saW5lYXItZHVyYXRpb246IDgwbXMgIWRlZmF1bHQ7XG4kc3dpZnQtbGluZWFyLXRpbWluZy1mdW5jdGlvbjogbGluZWFyICFkZWZhdWx0O1xuJHN3aWZ0LWxpbmVhcjogYWxsICRzd2lmdC1saW5lYXItZHVyYXRpb24gJHN3aWZ0LWxpbmVhci10aW1pbmctZnVuY3Rpb24gIWRlZmF1bHQ7XG5cblxuXG4vLyBBIGNvbGxlY3Rpb24gb2YgbWl4aW5zIGFuZCBDU1MgY2xhc3NlcyB0aGF0IGNhbiBiZSB1c2VkIHRvIGFwcGx5IGVsZXZhdGlvbiB0byBhIG1hdGVyaWFsXG4vLyBlbGVtZW50LlxuLy8gU2VlOiBodHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi9lbnZpcm9ubWVudC9lbGV2YXRpb24uaHRtbFxuLy8gRXhhbXBsZXM6XG4vL1xuLy9cbi8vIC5tYXQtZm9vIHtcbi8vICAgQGluY2x1ZGUgJG1hdC1lbGV2YXRpb24oMik7XG4vL1xuLy8gICAmOmFjdGl2ZSB7XG4vLyAgICAgQGluY2x1ZGUgJG1hdC1lbGV2YXRpb24oOCk7XG4vLyAgIH1cbi8vIH1cbi8vXG4vLyA8ZGl2IGlkPVwiZXh0ZXJuYWwtY2FyZFwiIGNsYXNzPVwibWF0LWVsZXZhdGlvbi16MlwiPjxwPlNvbWUgY29udGVudDwvcD48L2Rpdj5cbi8vXG4vLyBGb3IgYW4gZXhwbGFuYXRpb24gb2YgdGhlIGRlc2lnbiBiZWhpbmQgaG93IGVsZXZhdGlvbiBpcyBpbXBsZW1lbnRlZCwgc2VlIHRoZSBkZXNpZ24gZG9jIGF0XG4vLyBodHRwczovL2dvby5nbC9LcTBrOVouXG5cbi8vIENvbG9ycyBmb3IgdW1icmEsIHBlbnVtYnJhLCBhbmQgYW1iaWVudCBzaGFkb3dzLiBBcyBkZXNjcmliZWQgaW4gdGhlIGRlc2lnbiBkb2MsIGVhY2ggZWxldmF0aW9uXG4vLyBsZXZlbCBpcyBjcmVhdGVkIHVzaW5nIGEgc2V0IG9mIDMgc2hhZG93IHZhbHVlcywgb25lIGZvciB1bWJyYSAodGhlIHNoYWRvdyByZXByZXNlbnRpbmcgdGhlXG4vLyBzcGFjZSBjb21wbGV0ZWx5IG9ic2N1cmVkIGJ5IGFuIG9iamVjdCByZWxhdGl2ZSB0byBpdHMgbGlnaHQgc291cmNlKSwgb25lIGZvciBwZW51bWJyYSAodGhlXG4vLyBzcGFjZSBwYXJ0aWFsbHkgb2JzY3VyZWQgYnkgYW4gb2JqZWN0KSwgYW5kIG9uZSBmb3IgYW1iaWVudCAodGhlIHNwYWNlIHdoaWNoIGNvbnRhaW5zIHRoZSBvYmplY3Rcbi8vIGl0c2VsZikuIEZvciBhIGZ1cnRoZXIgZXhwbGFuYXRpb24gb2YgdGhlc2UgdGVybXMgYW5kIHRoZWlyIG1lYW5pbmdzLCBzZWVcbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1VtYnJhLF9wZW51bWJyYV9hbmRfYW50dW1icmEuXG5cbi8vIE1hcHMgZm9yIHRoZSBkaWZmZXJlbnQgc2hhZG93IHNldHMgYW5kIHRoZWlyIHZhbHVlcyB3aXRoaW4gZWFjaCB6LXNwYWNlLiBUaGVzZSB2YWx1ZXMgd2VyZVxuLy8gY3JlYXRlZCBieSB0YWtpbmcgYSBmZXcgcmVmZXJlbmNlIHNoYWRvdyBzZXRzIGNyZWF0ZWQgYnkgR29vZ2xlJ3MgRGVzaWduZXJzIGFuZCBpbnRlcnBvbGF0aW5nXG4vLyBhbGwgb2YgdGhlIHZhbHVlcyBiZXR3ZWVuIHRoZW0uXG5cbkBmdW5jdGlvbiBfZ2V0LXVtYnJhLW1hcCgkY29sb3IsICRvcGFjaXR5KSB7XG4gICRzaGFkb3ctY29sb3I6IGlmKHR5cGUtb2YoJGNvbG9yKSA9PSBjb2xvciwgcmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4yKSwgJGNvbG9yKTtcblxuICBAcmV0dXJuIChcbiAgICAwOiAnMHB4IDBweCAwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE6ICcwcHggMnB4IDFweCAtMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI6ICcwcHggM3B4IDFweCAtMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDM6ICcwcHggM3B4IDNweCAtMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDQ6ICcwcHggMnB4IDRweCAtMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDU6ICcwcHggM3B4IDVweCAtMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDY6ICcwcHggM3B4IDVweCAtMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDc6ICcwcHggNHB4IDVweCAtMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDg6ICcwcHggNXB4IDVweCAtM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDk6ICcwcHggNXB4IDZweCAtM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEwOiAnMHB4IDZweCA2cHggLTNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMTogJzBweCA2cHggN3B4IC00cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTI6ICcwcHggN3B4IDhweCAtNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEzOiAnMHB4IDdweCA4cHggLTRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNDogJzBweCA3cHggOXB4IC00cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTU6ICcwcHggOHB4IDlweCAtNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE2OiAnMHB4IDhweCAxMHB4IC01cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTc6ICcwcHggOHB4IDExcHggLTVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxODogJzBweCA5cHggMTFweCAtNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE5OiAnMHB4IDlweCAxMnB4IC02cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjA6ICcwcHggMTBweCAxM3B4IC02cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjE6ICcwcHggMTBweCAxM3B4IC02cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjI6ICcwcHggMTBweCAxNHB4IC02cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjM6ICcwcHggMTFweCAxNHB4IC03cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjQ6ICcwcHggMTFweCAxNXB4IC03cHggI3skc2hhZG93LWNvbG9yfSdcbiAgKTtcbn1cblxuQGZ1bmN0aW9uIF9nZXQtcGVudW1icmEtbWFwKCRjb2xvciwgJG9wYWNpdHkpIHtcbiAgJHNoYWRvdy1jb2xvcjogaWYodHlwZS1vZigkY29sb3IpID09IGNvbG9yLCByZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjE0KSwgJGNvbG9yKTtcblxuICBAcmV0dXJuIChcbiAgICAwOiAnMHB4IDBweCAwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE6ICcwcHggMXB4IDFweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjogJzBweCAycHggMnB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAzOiAnMHB4IDNweCA0cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDQ6ICcwcHggNHB4IDVweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNTogJzBweCA1cHggOHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA2OiAnMHB4IDZweCAxMHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA3OiAnMHB4IDdweCAxMHB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA4OiAnMHB4IDhweCAxMHB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA5OiAnMHB4IDlweCAxMnB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMDogJzBweCAxMHB4IDE0cHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDExOiAnMHB4IDExcHggMTVweCAxcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTI6ICcwcHggMTJweCAxN3B4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMzogJzBweCAxM3B4IDE5cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE0OiAnMHB4IDE0cHggMjFweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTU6ICcwcHggMTVweCAyMnB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNjogJzBweCAxNnB4IDI0cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE3OiAnMHB4IDE3cHggMjZweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTg6ICcwcHggMThweCAyOHB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOTogJzBweCAxOXB4IDI5cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIwOiAnMHB4IDIwcHggMzFweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjE6ICcwcHggMjFweCAzM3B4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMjogJzBweCAyMnB4IDM1cHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIzOiAnMHB4IDIzcHggMzZweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjQ6ICcwcHggMjRweCAzOHB4IDNweCAjeyRzaGFkb3ctY29sb3J9J1xuICApO1xufVxuXG5AZnVuY3Rpb24gX2dldC1hbWJpZW50LW1hcCgkY29sb3IsICRvcGFjaXR5KSB7XG4gICRzaGFkb3ctY29sb3I6IGlmKHR5cGUtb2YoJGNvbG9yKSA9PSBjb2xvciwgcmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xMiksICRjb2xvcik7XG5cbiAgQHJldHVybiAoXG4gICAgMDogJzBweCAwcHggMHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOiAnMHB4IDFweCAzcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI6ICcwcHggMXB4IDVweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMzogJzBweCAxcHggOHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA0OiAnMHB4IDFweCAxMHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA1OiAnMHB4IDFweCAxNHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA2OiAnMHB4IDFweCAxOHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA3OiAnMHB4IDJweCAxNnB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA4OiAnMHB4IDNweCAxNHB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA5OiAnMHB4IDNweCAxNnB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMDogJzBweCA0cHggMThweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTE6ICcwcHggNHB4IDIwcHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEyOiAnMHB4IDVweCAyMnB4IDRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMzogJzBweCA1cHggMjRweCA0cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTQ6ICcwcHggNXB4IDI2cHggNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE1OiAnMHB4IDZweCAyOHB4IDVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNjogJzBweCA2cHggMzBweCA1cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTc6ICcwcHggNnB4IDMycHggNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE4OiAnMHB4IDdweCAzNHB4IDZweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOTogJzBweCA3cHggMzZweCA2cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjA6ICcwcHggOHB4IDM4cHggN3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIxOiAnMHB4IDhweCA0MHB4IDdweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMjogJzBweCA4cHggNDJweCA3cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjM6ICcwcHggOXB4IDQ0cHggOHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI0OiAnMHB4IDlweCA0NnB4IDhweCAjeyRzaGFkb3ctY29sb3J9J1xuICApO1xufVxuXG4vLyBUaGUgZGVmYXVsdCBkdXJhdGlvbiB2YWx1ZSBmb3IgZWxldmF0aW9uIHRyYW5zaXRpb25zLlxuJG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi1kdXJhdGlvbjogMjgwbXMgIWRlZmF1bHQ7XG5cbi8vIFRoZSBkZWZhdWx0IGVhc2luZyB2YWx1ZSBmb3IgZWxldmF0aW9uIHRyYW5zaXRpb25zLlxuJG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ICRtYXQtZmFzdC1vdXQtc2xvdy1pbi10aW1pbmctZnVuY3Rpb247XG5cbi8vIFRoZSBkZWZhdWx0IGNvbG9yIGZvciBlbGV2YXRpb24gc2hhZG93cy5cbiRtYXQtZWxldmF0aW9uLWNvbG9yOiBibGFjayAhZGVmYXVsdDtcblxuLy8gVGhlIGRlZmF1bHQgb3BhY2l0eSBzY2FsaW5nIHZhbHVlIGZvciBlbGV2YXRpb24gc2hhZG93cy5cbiRtYXQtZWxldmF0aW9uLW9wYWNpdHk6IDEgIWRlZmF1bHQ7XG5cbi8vIFByZWZpeCBmb3IgZWxldmF0aW9uLXJlbGF0ZWQgc2VsZWN0b3JzLlxuJF9tYXQtZWxldmF0aW9uLXByZWZpeDogJ21hdC1lbGV2YXRpb24teic7XG5cbi8vIEFwcGxpZXMgdGhlIGNvcnJlY3QgY3NzIHJ1bGVzIHRvIGFuIGVsZW1lbnQgdG8gZ2l2ZSBpdCB0aGUgZWxldmF0aW9uIHNwZWNpZmllZCBieSAkelZhbHVlLlxuLy8gVGhlICR6VmFsdWUgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDI0LlxuQG1peGluIG1hdC1lbGV2YXRpb24oJHpWYWx1ZSwgJGNvbG9yOiAkbWF0LWVsZXZhdGlvbi1jb2xvciwgJG9wYWNpdHk6ICRtYXQtZWxldmF0aW9uLW9wYWNpdHkpIHtcbiAgQGlmIHR5cGUtb2YoJHpWYWx1ZSkgIT0gbnVtYmVyIG9yIG5vdCB1bml0bGVzcygkelZhbHVlKSB7XG4gICAgQGVycm9yICckelZhbHVlIG11c3QgYmUgYSB1bml0bGVzcyBudW1iZXInO1xuICB9XG4gIEBpZiAkelZhbHVlIDwgMCBvciAkelZhbHVlID4gMjQge1xuICAgIEBlcnJvciAnJHpWYWx1ZSBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMjQnO1xuICB9XG5cbiAgYm94LXNoYWRvdzogI3ttYXAtZ2V0KF9nZXQtdW1icmEtbWFwKCRjb2xvciwgJG9wYWNpdHkpLCAkelZhbHVlKX0sXG4gICAgICAgICAgICAgICN7bWFwLWdldChfZ2V0LXBlbnVtYnJhLW1hcCgkY29sb3IsICRvcGFjaXR5KSwgJHpWYWx1ZSl9LFxuICAgICAgICAgICAgICAje21hcC1nZXQoX2dldC1hbWJpZW50LW1hcCgkY29sb3IsICRvcGFjaXR5KSwgJHpWYWx1ZSl9O1xufVxuXG5AbWl4aW4gX21hdC10aGVtZS1lbGV2YXRpb24oJHpWYWx1ZSwgJGNvbmZpZywgJG9wYWNpdHk6ICRtYXQtZWxldmF0aW9uLW9wYWNpdHkpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG4gICRlbGV2YXRpb24tY29sb3I6IG1hcC1nZXQoJGZvcmVncm91bmQsIGVsZXZhdGlvbik7XG4gICRlbGV2YXRpb24tY29sb3Itb3ItZGVmYXVsdDogaWYoJGVsZXZhdGlvbi1jb2xvciA9PSBudWxsLCAkbWF0LWVsZXZhdGlvbi1jb2xvciwgJGVsZXZhdGlvbi1jb2xvcik7XG5cbiAgQGluY2x1ZGUgbWF0LWVsZXZhdGlvbigkelZhbHVlLCAkZWxldmF0aW9uLWNvbG9yLW9yLWRlZmF1bHQsICRvcGFjaXR5KTtcbn1cblxuLy8gQXBwbGllcyB0aGUgZWxldmF0aW9uIHRvIGFuIGVsZW1lbnQgaW4gYSBtYW5uZXIgdGhhdCBhbGxvd3Ncbi8vIGNvbnN1bWVycyB0byBvdmVycmlkZSBpdCB2aWEgdGhlIE1hdGVyaWFsIGVsZXZhdGlvbiBjbGFzc2VzLlxuQG1peGluIG1hdC1vdmVycmlkYWJsZS1lbGV2YXRpb24oXG4gICAgJHpWYWx1ZSxcbiAgICAkY29sb3I6ICRtYXQtZWxldmF0aW9uLWNvbG9yLFxuICAgICRvcGFjaXR5OiAkbWF0LWVsZXZhdGlvbi1vcGFjaXR5KSB7XG4gICY6bm90KFtjbGFzcyo9JyN7JF9tYXQtZWxldmF0aW9uLXByZWZpeH0nXSkge1xuICAgIEBpbmNsdWRlIG1hdC1lbGV2YXRpb24oJHpWYWx1ZSwgJGNvbG9yLCAkb3BhY2l0eSk7XG4gIH1cbn1cblxuQG1peGluIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKCR6VmFsdWUsICRjb25maWcsICRvcGFjaXR5OiAkbWF0LWVsZXZhdGlvbi1vcGFjaXR5KSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuICAkZWxldmF0aW9uLWNvbG9yOiBtYXAtZ2V0KCRmb3JlZ3JvdW5kLCBlbGV2YXRpb24pO1xuICAkZWxldmF0aW9uLWNvbG9yLW9yLWRlZmF1bHQ6IGlmKCRlbGV2YXRpb24tY29sb3IgPT0gbnVsbCwgJG1hdC1lbGV2YXRpb24tY29sb3IsICRlbGV2YXRpb24tY29sb3IpO1xuXG4gIEBpbmNsdWRlIG1hdC1vdmVycmlkYWJsZS1lbGV2YXRpb24oJHpWYWx1ZSwgJGVsZXZhdGlvbi1jb2xvci1vci1kZWZhdWx0LCAkb3BhY2l0eSk7XG59XG5cbi8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBjYW4gYmUgdXNlZCBhcyB0aGUgdmFsdWUgZm9yIGEgdHJhbnNpdGlvbiBwcm9wZXJ0eSBmb3IgZWxldmF0aW9uLlxuLy8gQ2FsbGluZyB0aGlzIGZ1bmN0aW9uIGRpcmVjdGx5IGlzIHVzZWZ1bCBpbiBzaXR1YXRpb25zIHdoZXJlIGEgY29tcG9uZW50IG5lZWRzIHRvIHRyYW5zaXRpb25cbi8vIG1vcmUgdGhhbiBvbmUgcHJvcGVydHkuXG4vL1xuLy8gLmZvbyB7XG4vLyAgIHRyYW5zaXRpb246IG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi1wcm9wZXJ0eS12YWx1ZSgpLCBvcGFjaXR5IDEwMG1zIGVhc2U7XG4vLyB9XG5AZnVuY3Rpb24gbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLXByb3BlcnR5LXZhbHVlKFxuICAgICRkdXJhdGlvbjogJG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi1kdXJhdGlvbixcbiAgICAkZWFzaW5nOiAkbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbikge1xuICBAcmV0dXJuIGJveC1zaGFkb3cgI3skZHVyYXRpb259ICN7JGVhc2luZ307XG59XG5cbi8vIEFwcGxpZXMgdGhlIGNvcnJlY3QgY3NzIHJ1bGVzIG5lZWRlZCB0byBoYXZlIGFuIGVsZW1lbnQgdHJhbnNpdGlvbiBiZXR3ZWVuIGVsZXZhdGlvbnMuXG4vLyBUaGlzIG1peGluIHNob3VsZCBiZSBhcHBsaWVkIHRvIGVsZW1lbnRzIHdob3NlIGVsZXZhdGlvbiB2YWx1ZXMgd2lsbCBjaGFuZ2UgZGVwZW5kaW5nIG9uIHRoZWlyXG4vLyBjb250ZXh0IChlLmcuIHdoZW4gYWN0aXZlIG9yIGRpc2FibGVkKS5cbi8vXG4vLyBOT1RFKHRyYXZpc2thdWZtYW4pOiBCb3RoIHRoaXMgbWl4aW4gYW5kIHRoZSBhYm92ZSBmdW5jdGlvbiB1c2UgZGVmYXVsdCBwYXJhbWV0ZXJzIHNvIHRoZXkgY2FuXG4vLyBiZSB1c2VkIGluIHRoZSBzYW1lIHdheSBieSBjbGllbnRzLlxuQG1peGluIG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbihcbiAgICAkZHVyYXRpb246ICRtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tZHVyYXRpb24sXG4gICAgJGVhc2luZzogJG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24pIHtcbiAgdHJhbnNpdGlvbjogbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLXByb3BlcnR5LXZhbHVlKCRkdXJhdGlvbiwgJGVhc2luZyk7XG59XG5cbi8vIENvbG9yIHBhbGV0dGVzIGZyb20gdGhlIE1hdGVyaWFsIERlc2lnbiBzcGVjLlxuLy8gU2VlIGh0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL2NvbG9yL1xuLy9cbi8vIENvbnRyYXN0IGNvbG9ycyBhcmUgaGFyZC1jb2RlZCBiZWNhdXNlIGl0IGlzIHRvbyBkaWZmaWN1bHQgKHByb2JhYmx5IGltcG9zc2libGUpIHRvXG4vLyBjYWxjdWxhdGUgdGhlbS4gVGhlc2UgY29udHJhc3QgY29sb3JzIGFyZSBwdWxsZWQgZnJvbSB0aGUgcHVibGljIE1hdGVyaWFsIERlc2lnbiBzcGVjIHN3YXRjaGVzLlxuLy8gV2hpbGUgdGhlIGNvbnRyYXN0IGNvbG9ycyBpbiB0aGUgc3BlYyBhcmUgbm90IHByZXNjcmlwdGl2ZSwgd2UgdXNlIHRoZW0gZm9yIGNvbnZlbmllbmNlLlxuXG5cbi8vIEBkZXByZWNhdGVkIHJlbmFtZWQgdG8gJGRhcmstcHJpbWFyeS10ZXh0LlxuLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuJGJsYWNrLTg3LW9wYWNpdHk6IHJnYmEoYmxhY2ssIDAuODcpO1xuLy8gQGRlcHJlY2F0ZWQgcmVuYW1lZCB0byAkbGlnaHQtcHJpbWFyeS10ZXh0LlxuLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuJHdoaXRlLTg3LW9wYWNpdHk6IHJnYmEod2hpdGUsIDAuODcpO1xuLy8gQGRlcHJlY2F0ZWQgdXNlICRkYXJrLVtzZWNvbmRhcnktdGV4dCxkaXNhYmxlZC10ZXh0LGRpdmlkZXJzLGZvY3VzZWRdIGluc3RlYWQuXG4vLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4kYmxhY2stMTItb3BhY2l0eTogcmdiYShibGFjaywgMC4xMik7XG4vLyBAZGVwcmVjYXRlZCB1c2UgJGxpZ2h0LVtzZWNvbmRhcnktdGV4dCxkaXNhYmxlZC10ZXh0LGRpdmlkZXJzLGZvY3VzZWRdIGluc3RlYWQuXG4vLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4kd2hpdGUtMTItb3BhY2l0eTogcmdiYSh3aGl0ZSwgMC4xMik7XG4vLyBAZGVwcmVjYXRlZCB1c2UgJGRhcmstW3NlY29uZGFyeS10ZXh0LGRpc2FibGVkLXRleHQsZGl2aWRlcnMsZm9jdXNlZF0gaW5zdGVhZC5cbi8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjBcbiRibGFjay02LW9wYWNpdHk6IHJnYmEoYmxhY2ssIDAuMDYpO1xuLy8gQGRlcHJlY2F0ZWQgdXNlICRsaWdodC1bc2Vjb25kYXJ5LXRleHQsZGlzYWJsZWQtdGV4dCxkaXZpZGVycyxmb2N1c2VkXSBpbnN0ZWFkLlxuLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuJHdoaXRlLTYtb3BhY2l0eTogcmdiYSh3aGl0ZSwgMC4wNik7XG5cbiRkYXJrLXByaW1hcnktdGV4dDogcmdiYShibGFjaywgMC44Nyk7XG4kZGFyay1zZWNvbmRhcnktdGV4dDogcmdiYShibGFjaywgMC41NCk7XG4kZGFyay1kaXNhYmxlZC10ZXh0OiByZ2JhKGJsYWNrLCAwLjM4KTtcbiRkYXJrLWRpdmlkZXJzOiByZ2JhKGJsYWNrLCAwLjEyKTtcbiRkYXJrLWZvY3VzZWQ6IHJnYmEoYmxhY2ssIDAuMTIpO1xuJGxpZ2h0LXByaW1hcnktdGV4dDogd2hpdGU7XG4kbGlnaHQtc2Vjb25kYXJ5LXRleHQ6IHJnYmEod2hpdGUsIDAuNyk7XG4kbGlnaHQtZGlzYWJsZWQtdGV4dDogcmdiYSh3aGl0ZSwgMC41KTtcbiRsaWdodC1kaXZpZGVyczogcmdiYSh3aGl0ZSwgMC4xMik7XG4kbGlnaHQtZm9jdXNlZDogcmdiYSh3aGl0ZSwgMC4xMik7XG5cbiRtYXQtcmVkOiAoXG4gIDUwOiAjZmZlYmVlLFxuICAxMDA6ICNmZmNkZDIsXG4gIDIwMDogI2VmOWE5YSxcbiAgMzAwOiAjZTU3MzczLFxuICA0MDA6ICNlZjUzNTAsXG4gIDUwMDogI2Y0NDMzNixcbiAgNjAwOiAjZTUzOTM1LFxuICA3MDA6ICNkMzJmMmYsXG4gIDgwMDogI2M2MjgyOCxcbiAgOTAwOiAjYjcxYzFjLFxuICBBMTAwOiAjZmY4YTgwLFxuICBBMjAwOiAjZmY1MjUyLFxuICBBNDAwOiAjZmYxNzQ0LFxuICBBNzAwOiAjZDUwMDAwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtcGluazogKFxuICA1MDogI2ZjZTRlYyxcbiAgMTAwOiAjZjhiYmQwLFxuICAyMDA6ICNmNDhmYjEsXG4gIDMwMDogI2YwNjI5MixcbiAgNDAwOiAjZWM0MDdhLFxuICA1MDA6ICNlOTFlNjMsXG4gIDYwMDogI2Q4MWI2MCxcbiAgNzAwOiAjYzIxODViLFxuICA4MDA6ICNhZDE0NTcsXG4gIDkwMDogIzg4MGU0ZixcbiAgQTEwMDogI2ZmODBhYixcbiAgQTIwMDogI2ZmNDA4MSxcbiAgQTQwMDogI2Y1MDA1NyxcbiAgQTcwMDogI2M1MTE2MixcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LXB1cnBsZTogKFxuICA1MDogI2YzZTVmNSxcbiAgMTAwOiAjZTFiZWU3LFxuICAyMDA6ICNjZTkzZDgsXG4gIDMwMDogI2JhNjhjOCxcbiAgNDAwOiAjYWI0N2JjLFxuICA1MDA6ICM5YzI3YjAsXG4gIDYwMDogIzhlMjRhYSxcbiAgNzAwOiAjN2IxZmEyLFxuICA4MDA6ICM2YTFiOWEsXG4gIDkwMDogIzRhMTQ4YyxcbiAgQTEwMDogI2VhODBmYyxcbiAgQTIwMDogI2UwNDBmYixcbiAgQTQwMDogI2Q1MDBmOSxcbiAgQTcwMDogI2FhMDBmZixcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtZGVlcC1wdXJwbGU6IChcbiAgNTA6ICNlZGU3ZjYsXG4gIDEwMDogI2QxYzRlOSxcbiAgMjAwOiAjYjM5ZGRiLFxuICAzMDA6ICM5NTc1Y2QsXG4gIDQwMDogIzdlNTdjMixcbiAgNTAwOiAjNjczYWI3LFxuICA2MDA6ICM1ZTM1YjEsXG4gIDcwMDogIzUxMmRhOCxcbiAgODAwOiAjNDUyN2EwLFxuICA5MDA6ICMzMTFiOTIsXG4gIEExMDA6ICNiMzg4ZmYsXG4gIEEyMDA6ICM3YzRkZmYsXG4gIEE0MDA6ICM2NTFmZmYsXG4gIEE3MDA6ICM2MjAwZWEsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWluZGlnbzogKFxuICA1MDogI2U4ZWFmNixcbiAgMTAwOiAjYzVjYWU5LFxuICAyMDA6ICM5ZmE4ZGEsXG4gIDMwMDogIzc5ODZjYixcbiAgNDAwOiAjNWM2YmMwLFxuICA1MDA6ICMzZjUxYjUsXG4gIDYwMDogIzM5NDlhYixcbiAgNzAwOiAjMzAzZjlmLFxuICA4MDA6ICMyODM1OTMsXG4gIDkwMDogIzFhMjM3ZSxcbiAgQTEwMDogIzhjOWVmZixcbiAgQTIwMDogIzUzNmRmZSxcbiAgQTQwMDogIzNkNWFmZSxcbiAgQTcwMDogIzMwNGZmZSxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtYmx1ZTogKFxuICA1MDogI2UzZjJmZCxcbiAgMTAwOiAjYmJkZWZiLFxuICAyMDA6ICM5MGNhZjksXG4gIDMwMDogIzY0YjVmNixcbiAgNDAwOiAjNDJhNWY1LFxuICA1MDA6ICMyMTk2ZjMsXG4gIDYwMDogIzFlODhlNSxcbiAgNzAwOiAjMTk3NmQyLFxuICA4MDA6ICMxNTY1YzAsXG4gIDkwMDogIzBkNDdhMSxcbiAgQTEwMDogIzgyYjFmZixcbiAgQTIwMDogIzQ0OGFmZixcbiAgQTQwMDogIzI5NzlmZixcbiAgQTcwMDogIzI5NjJmZixcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWxpZ2h0LWJsdWU6IChcbiAgNTA6ICNlMWY1ZmUsXG4gIDEwMDogI2IzZTVmYyxcbiAgMjAwOiAjODFkNGZhLFxuICAzMDA6ICM0ZmMzZjcsXG4gIDQwMDogIzI5YjZmNixcbiAgNTAwOiAjMDNhOWY0LFxuICA2MDA6ICMwMzliZTUsXG4gIDcwMDogIzAyODhkMSxcbiAgODAwOiAjMDI3N2JkLFxuICA5MDA6ICMwMTU3OWIsXG4gIEExMDA6ICM4MGQ4ZmYsXG4gIEEyMDA6ICM0MGM0ZmYsXG4gIEE0MDA6ICMwMGIwZmYsXG4gIEE3MDA6ICMwMDkxZWEsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtY3lhbjogKFxuICA1MDogI2UwZjdmYSxcbiAgMTAwOiAjYjJlYmYyLFxuICAyMDA6ICM4MGRlZWEsXG4gIDMwMDogIzRkZDBlMSxcbiAgNDAwOiAjMjZjNmRhLFxuICA1MDA6ICMwMGJjZDQsXG4gIDYwMDogIzAwYWNjMSxcbiAgNzAwOiAjMDA5N2E3LFxuICA4MDA6ICMwMDgzOGYsXG4gIDkwMDogIzAwNjA2NCxcbiAgQTEwMDogIzg0ZmZmZixcbiAgQTIwMDogIzE4ZmZmZixcbiAgQTQwMDogIzAwZTVmZixcbiAgQTcwMDogIzAwYjhkNCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LXRlYWw6IChcbiAgNTA6ICNlMGYyZjEsXG4gIDEwMDogI2IyZGZkYixcbiAgMjAwOiAjODBjYmM0LFxuICAzMDA6ICM0ZGI2YWMsXG4gIDQwMDogIzI2YTY5YSxcbiAgNTAwOiAjMDA5Njg4LFxuICA2MDA6ICMwMDg5N2IsXG4gIDcwMDogIzAwNzk2YixcbiAgODAwOiAjMDA2OTVjLFxuICA5MDA6ICMwMDRkNDAsXG4gIEExMDA6ICNhN2ZmZWIsXG4gIEEyMDA6ICM2NGZmZGEsXG4gIEE0MDA6ICMxZGU5YjYsXG4gIEE3MDA6ICMwMGJmYTUsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1ncmVlbjogKFxuICA1MDogI2U4ZjVlOSxcbiAgMTAwOiAjYzhlNmM5LFxuICAyMDA6ICNhNWQ2YTcsXG4gIDMwMDogIzgxYzc4NCxcbiAgNDAwOiAjNjZiYjZhLFxuICA1MDA6ICM0Y2FmNTAsXG4gIDYwMDogIzQzYTA0NyxcbiAgNzAwOiAjMzg4ZTNjLFxuICA4MDA6ICMyZTdkMzIsXG4gIDkwMDogIzFiNWUyMCxcbiAgQTEwMDogI2I5ZjZjYSxcbiAgQTIwMDogIzY5ZjBhZSxcbiAgQTQwMDogIzAwZTY3NixcbiAgQTcwMDogIzAwYzg1MyxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtbGlnaHQtZ3JlZW46IChcbiAgNTA6ICNmMWY4ZTksXG4gIDEwMDogI2RjZWRjOCxcbiAgMjAwOiAjYzVlMWE1LFxuICAzMDA6ICNhZWQ1ODEsXG4gIDQwMDogIzljY2M2NSxcbiAgNTAwOiAjOGJjMzRhLFxuICA2MDA6ICM3Y2IzNDIsXG4gIDcwMDogIzY4OWYzOCxcbiAgODAwOiAjNTU4YjJmLFxuICA5MDA6ICMzMzY5MWUsXG4gIEExMDA6ICNjY2ZmOTAsXG4gIEEyMDA6ICNiMmZmNTksXG4gIEE0MDA6ICM3NmZmMDMsXG4gIEE3MDA6ICM2NGRkMTcsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtbGltZTogKFxuICA1MDogI2Y5ZmJlNyxcbiAgMTAwOiAjZjBmNGMzLFxuICAyMDA6ICNlNmVlOWMsXG4gIDMwMDogI2RjZTc3NSxcbiAgNDAwOiAjZDRlMTU3LFxuICA1MDA6ICNjZGRjMzksXG4gIDYwMDogI2MwY2EzMyxcbiAgNzAwOiAjYWZiNDJiLFxuICA4MDA6ICM5ZTlkMjQsXG4gIDkwMDogIzgyNzcxNyxcbiAgQTEwMDogI2Y0ZmY4MSxcbiAgQTIwMDogI2VlZmY0MSxcbiAgQTQwMDogI2M2ZmYwMCxcbiAgQTcwMDogI2FlZWEwMCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQteWVsbG93OiAoXG4gIDUwOiAjZmZmZGU3LFxuICAxMDA6ICNmZmY5YzQsXG4gIDIwMDogI2ZmZjU5ZCxcbiAgMzAwOiAjZmZmMTc2LFxuICA0MDA6ICNmZmVlNTgsXG4gIDUwMDogI2ZmZWIzYixcbiAgNjAwOiAjZmRkODM1LFxuICA3MDA6ICNmYmMwMmQsXG4gIDgwMDogI2Y5YTgyNSxcbiAgOTAwOiAjZjU3ZjE3LFxuICBBMTAwOiAjZmZmZjhkLFxuICBBMjAwOiAjZmZmZjAwLFxuICBBNDAwOiAjZmZlYTAwLFxuICBBNzAwOiAjZmZkNjAwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWFtYmVyOiAoXG4gIDUwOiAjZmZmOGUxLFxuICAxMDA6ICNmZmVjYjMsXG4gIDIwMDogI2ZmZTA4MixcbiAgMzAwOiAjZmZkNTRmLFxuICA0MDA6ICNmZmNhMjgsXG4gIDUwMDogI2ZmYzEwNyxcbiAgNjAwOiAjZmZiMzAwLFxuICA3MDA6ICNmZmEwMDAsXG4gIDgwMDogI2ZmOGYwMCxcbiAgOTAwOiAjZmY2ZjAwLFxuICBBMTAwOiAjZmZlNTdmLFxuICBBMjAwOiAjZmZkNzQwLFxuICBBNDAwOiAjZmZjNDAwLFxuICBBNzAwOiAjZmZhYjAwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LW9yYW5nZTogKFxuICA1MDogI2ZmZjNlMCxcbiAgMTAwOiAjZmZlMGIyLFxuICAyMDA6ICNmZmNjODAsXG4gIDMwMDogI2ZmYjc0ZCxcbiAgNDAwOiAjZmZhNzI2LFxuICA1MDA6ICNmZjk4MDAsXG4gIDYwMDogI2ZiOGMwMCxcbiAgNzAwOiAjZjU3YzAwLFxuICA4MDA6ICNlZjZjMDAsXG4gIDkwMDogI2U2NTEwMCxcbiAgQTEwMDogI2ZmZDE4MCxcbiAgQTIwMDogI2ZmYWI0MCxcbiAgQTQwMDogI2ZmOTEwMCxcbiAgQTcwMDogI2ZmNmQwMCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogYmxhY2ssXG4gIClcbik7XG5cbiRtYXQtZGVlcC1vcmFuZ2U6IChcbiAgNTA6ICNmYmU5ZTcsXG4gIDEwMDogI2ZmY2NiYyxcbiAgMjAwOiAjZmZhYjkxLFxuICAzMDA6ICNmZjhhNjUsXG4gIDQwMDogI2ZmNzA0MyxcbiAgNTAwOiAjZmY1NzIyLFxuICA2MDA6ICNmNDUxMWUsXG4gIDcwMDogI2U2NGExOSxcbiAgODAwOiAjZDg0MzE1LFxuICA5MDA6ICNiZjM2MGMsXG4gIEExMDA6ICNmZjllODAsXG4gIEEyMDA6ICNmZjZlNDAsXG4gIEE0MDA6ICNmZjNkMDAsXG4gIEE3MDA6ICNkZDJjMDAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWJyb3duOiAoXG4gIDUwOiAjZWZlYmU5LFxuICAxMDA6ICNkN2NjYzgsXG4gIDIwMDogI2JjYWFhNCxcbiAgMzAwOiAjYTE4ODdmLFxuICA0MDA6ICM4ZDZlNjMsXG4gIDUwMDogIzc5NTU0OCxcbiAgNjAwOiAjNmQ0YzQxLFxuICA3MDA6ICM1ZDQwMzcsXG4gIDgwMDogIzRlMzQyZSxcbiAgOTAwOiAjM2UyNzIzLFxuICBBMTAwOiAjZDdjY2M4LFxuICBBMjAwOiAjYmNhYWE0LFxuICBBNDAwOiAjOGQ2ZTYzLFxuICBBNzAwOiAjNWQ0MDM3LFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWdyZXk6IChcbiAgNTA6ICNmYWZhZmEsXG4gIDEwMDogI2Y1ZjVmNSxcbiAgMjAwOiAjZWVlZWVlLFxuICAzMDA6ICNlMGUwZTAsXG4gIDQwMDogI2JkYmRiZCxcbiAgNTAwOiAjOWU5ZTllLFxuICA2MDA6ICM3NTc1NzUsXG4gIDcwMDogIzYxNjE2MSxcbiAgODAwOiAjNDI0MjQyLFxuICA5MDA6ICMyMTIxMjEsXG4gIEExMDA6ICNmZmZmZmYsXG4gIEEyMDA6ICNlZWVlZWUsXG4gIEE0MDA6ICNiZGJkYmQsXG4gIEE3MDA6ICM2MTYxNjEsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuLy8gQWxpYXMgZm9yIGFsdGVybmF0ZSBzcGVsbGluZy5cbiRtYXQtZ3JheTogJG1hdC1ncmV5O1xuXG4kbWF0LWJsdWUtZ3JleTogKFxuICA1MDogI2VjZWZmMSxcbiAgMTAwOiAjY2ZkOGRjLFxuICAyMDA6ICNiMGJlYzUsXG4gIDMwMDogIzkwYTRhZSxcbiAgNDAwOiAjNzg5MDljLFxuICA1MDA6ICM2MDdkOGIsXG4gIDYwMDogIzU0NmU3YSxcbiAgNzAwOiAjNDU1YTY0LFxuICA4MDA6ICMzNzQ3NGYsXG4gIDkwMDogIzI2MzIzOCxcbiAgQTEwMDogI2NmZDhkYyxcbiAgQTIwMDogI2IwYmVjNSxcbiAgQTQwMDogIzc4OTA5YyxcbiAgQTcwMDogIzQ1NWE2NCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4vLyBBbGlhcyBmb3IgYWx0ZXJuYXRlIHNwZWxsaW5nLlxuJG1hdC1ibHVlLWdyYXk6ICRtYXQtYmx1ZS1ncmV5O1xuXG5cbi8vIEJhY2tncm91bmQgcGFsZXR0ZSBmb3IgbGlnaHQgdGhlbWVzLlxuJG1hdC1saWdodC10aGVtZS1iYWNrZ3JvdW5kOiAoXG4gIHN0YXR1cy1iYXI6IG1hcF9nZXQoJG1hdC1ncmV5LCAzMDApLFxuICBhcHAtYmFyOiAgICBtYXBfZ2V0KCRtYXQtZ3JleSwgMTAwKSxcbiAgYmFja2dyb3VuZDogbWFwX2dldCgkbWF0LWdyZXksIDUwKSxcbiAgaG92ZXI6ICAgICAgcmdiYShibGFjaywgMC4wNCksIC8vIFRPRE8oa2FyYSk6IGNoZWNrIHN0eWxlIHdpdGggTWF0ZXJpYWwgRGVzaWduIFVYXG4gIGNhcmQ6ICAgICAgIHdoaXRlLFxuICBkaWFsb2c6ICAgICB3aGl0ZSxcbiAgZGlzYWJsZWQtYnV0dG9uOiByZ2JhKGJsYWNrLCAwLjEyKSxcbiAgcmFpc2VkLWJ1dHRvbjogd2hpdGUsXG4gIGZvY3VzZWQtYnV0dG9uOiAkZGFyay1mb2N1c2VkLFxuICBzZWxlY3RlZC1idXR0b246IG1hcF9nZXQoJG1hdC1ncmV5LCAzMDApLFxuICBzZWxlY3RlZC1kaXNhYmxlZC1idXR0b246IG1hcF9nZXQoJG1hdC1ncmV5LCA0MDApLFxuICBkaXNhYmxlZC1idXR0b24tdG9nZ2xlOiBtYXBfZ2V0KCRtYXQtZ3JleSwgMjAwKSxcbiAgdW5zZWxlY3RlZC1jaGlwOiBtYXBfZ2V0KCRtYXQtZ3JleSwgMzAwKSxcbiAgZGlzYWJsZWQtbGlzdC1vcHRpb246IG1hcF9nZXQoJG1hdC1ncmV5LCAyMDApLFxuICB0b29sdGlwOiBtYXBfZ2V0KCRtYXQtZ3JleSwgNzAwKSxcbik7XG5cbi8vIEJhY2tncm91bmQgcGFsZXR0ZSBmb3IgZGFyayB0aGVtZXMuXG4kbWF0LWRhcmstdGhlbWUtYmFja2dyb3VuZDogKFxuICBzdGF0dXMtYmFyOiBibGFjayxcbiAgYXBwLWJhcjogICAgbWFwX2dldCgkbWF0LWdyZXksIDkwMCksXG4gIGJhY2tncm91bmQ6ICMzMDMwMzAsXG4gIGhvdmVyOiAgICAgIHJnYmEod2hpdGUsIDAuMDQpLCAvLyBUT0RPKGthcmEpOiBjaGVjayBzdHlsZSB3aXRoIE1hdGVyaWFsIERlc2lnbiBVWFxuICBjYXJkOiAgICAgICBtYXBfZ2V0KCRtYXQtZ3JleSwgODAwKSxcbiAgZGlhbG9nOiAgICAgbWFwX2dldCgkbWF0LWdyZXksIDgwMCksXG4gIGRpc2FibGVkLWJ1dHRvbjogcmdiYSh3aGl0ZSwgMC4xMiksXG4gIHJhaXNlZC1idXR0b246IG1hcC1nZXQoJG1hdC1ncmV5LCA4MDApLFxuICBmb2N1c2VkLWJ1dHRvbjogJGxpZ2h0LWZvY3VzZWQsXG4gIHNlbGVjdGVkLWJ1dHRvbjogbWFwX2dldCgkbWF0LWdyZXksIDkwMCksXG4gIHNlbGVjdGVkLWRpc2FibGVkLWJ1dHRvbjogbWFwX2dldCgkbWF0LWdyZXksIDgwMCksXG4gIGRpc2FibGVkLWJ1dHRvbi10b2dnbGU6IGJsYWNrLFxuICB1bnNlbGVjdGVkLWNoaXA6IG1hcF9nZXQoJG1hdC1ncmV5LCA3MDApLFxuICBkaXNhYmxlZC1saXN0LW9wdGlvbjogYmxhY2ssXG4gIHRvb2x0aXA6IG1hcF9nZXQoJG1hdC1ncmV5LCA3MDApLFxuKTtcblxuLy8gRm9yZWdyb3VuZCBwYWxldHRlIGZvciBsaWdodCB0aGVtZXMuXG4kbWF0LWxpZ2h0LXRoZW1lLWZvcmVncm91bmQ6IChcbiAgYmFzZTogICAgICAgICAgICAgIGJsYWNrLFxuICBkaXZpZGVyOiAgICAgICAgICAgJGRhcmstZGl2aWRlcnMsXG4gIGRpdmlkZXJzOiAgICAgICAgICAkZGFyay1kaXZpZGVycyxcbiAgZGlzYWJsZWQ6ICAgICAgICAgICRkYXJrLWRpc2FibGVkLXRleHQsXG4gIGRpc2FibGVkLWJ1dHRvbjogICByZ2JhKGJsYWNrLCAwLjI2KSxcbiAgZGlzYWJsZWQtdGV4dDogICAgICRkYXJrLWRpc2FibGVkLXRleHQsXG4gIGVsZXZhdGlvbjogICAgICAgICBibGFjayxcbiAgaGludC10ZXh0OiAgICAgICAgICRkYXJrLWRpc2FibGVkLXRleHQsXG4gIHNlY29uZGFyeS10ZXh0OiAgICAkZGFyay1zZWNvbmRhcnktdGV4dCxcbiAgaWNvbjogICAgICAgICAgICAgIHJnYmEoYmxhY2ssIDAuNTQpLFxuICBpY29uczogICAgICAgICAgICAgcmdiYShibGFjaywgMC41NCksXG4gIHRleHQ6ICAgICAgICAgICAgICByZ2JhKGJsYWNrLCAwLjg3KSxcbiAgc2xpZGVyLW1pbjogICAgICAgIHJnYmEoYmxhY2ssIDAuODcpLFxuICBzbGlkZXItb2ZmOiAgICAgICAgcmdiYShibGFjaywgMC4yNiksXG4gIHNsaWRlci1vZmYtYWN0aXZlOiByZ2JhKGJsYWNrLCAwLjM4KSxcbik7XG5cbi8vIEZvcmVncm91bmQgcGFsZXR0ZSBmb3IgZGFyayB0aGVtZXMuXG4kbWF0LWRhcmstdGhlbWUtZm9yZWdyb3VuZDogKFxuICBiYXNlOiAgICAgICAgICAgICAgd2hpdGUsXG4gIGRpdmlkZXI6ICAgICAgICAgICAkbGlnaHQtZGl2aWRlcnMsXG4gIGRpdmlkZXJzOiAgICAgICAgICAkbGlnaHQtZGl2aWRlcnMsXG4gIGRpc2FibGVkOiAgICAgICAgICAkbGlnaHQtZGlzYWJsZWQtdGV4dCxcbiAgZGlzYWJsZWQtYnV0dG9uOiAgIHJnYmEod2hpdGUsIDAuMyksXG4gIGRpc2FibGVkLXRleHQ6ICAgICAkbGlnaHQtZGlzYWJsZWQtdGV4dCxcbiAgZWxldmF0aW9uOiAgICAgICAgIGJsYWNrLFxuICBoaW50LXRleHQ6ICAgICAgICAgJGxpZ2h0LWRpc2FibGVkLXRleHQsXG4gIHNlY29uZGFyeS10ZXh0OiAgICAkbGlnaHQtc2Vjb25kYXJ5LXRleHQsXG4gIGljb246ICAgICAgICAgICAgICB3aGl0ZSxcbiAgaWNvbnM6ICAgICAgICAgICAgIHdoaXRlLFxuICB0ZXh0OiAgICAgICAgICAgICAgd2hpdGUsXG4gIHNsaWRlci1taW46ICAgICAgICB3aGl0ZSxcbiAgc2xpZGVyLW9mZjogICAgICAgIHJnYmEod2hpdGUsIDAuMyksXG4gIHNsaWRlci1vZmYtYWN0aXZlOiByZ2JhKHdoaXRlLCAwLjMpLFxuKTtcblxuXG4vLyBXaGV0aGVyIGRlbnNpdHkgc2hvdWxkIGJlIGdlbmVyYXRlZCBieSBkZWZhdWx0LlxuJF9tYXQtdGhlbWUtZ2VuZXJhdGUtZGVmYXVsdC1kZW5zaXR5OiB0cnVlICFkZWZhdWx0O1xuXG4vLyBGb3IgYSBnaXZlbiBodWUgaW4gYSBwYWxldHRlLCByZXR1cm4gdGhlIGNvbnRyYXN0IGNvbG9yIGZyb20gdGhlIG1hcCBvZiBjb250cmFzdCBwYWxldHRlcy5cbi8vIEBwYXJhbSAkY29sb3ItbWFwXG4vLyBAcGFyYW0gJGh1ZVxuQGZ1bmN0aW9uIG1hdC1jb250cmFzdCgkcGFsZXR0ZSwgJGh1ZSkge1xuICBAcmV0dXJuIG1hcC1nZXQobWFwLWdldCgkcGFsZXR0ZSwgY29udHJhc3QpLCAkaHVlKTtcbn1cblxuXG4vLyBDcmVhdGVzIGEgbWFwIG9mIGh1ZXMgdG8gY29sb3JzIGZvciBhIHRoZW1lLiBUaGlzIGlzIHVzZWQgdG8gZGVmaW5lIGEgdGhlbWUgcGFsZXR0ZSBpbiB0ZXJtc1xuLy8gb2YgdGhlIE1hdGVyaWFsIERlc2lnbiBodWVzLlxuLy8gQHBhcmFtICRjb2xvci1tYXBcbi8vIEBwYXJhbSAkcHJpbWFyeVxuLy8gQHBhcmFtICRsaWdodGVyXG5AZnVuY3Rpb24gbWF0LXBhbGV0dGUoJGJhc2UtcGFsZXR0ZSwgJGRlZmF1bHQ6IDUwMCwgJGxpZ2h0ZXI6IDEwMCwgJGRhcmtlcjogNzAwLCAkdGV4dDogJGRlZmF1bHQpIHtcbiAgJHJlc3VsdDogbWFwX21lcmdlKCRiYXNlLXBhbGV0dGUsIChcbiAgICBkZWZhdWx0OiBtYXAtZ2V0KCRiYXNlLXBhbGV0dGUsICRkZWZhdWx0KSxcbiAgICBsaWdodGVyOiBtYXAtZ2V0KCRiYXNlLXBhbGV0dGUsICRsaWdodGVyKSxcbiAgICBkYXJrZXI6IG1hcC1nZXQoJGJhc2UtcGFsZXR0ZSwgJGRhcmtlciksXG4gICAgdGV4dDogbWFwLWdldCgkYmFzZS1wYWxldHRlLCAkdGV4dCksXG5cbiAgICBkZWZhdWx0LWNvbnRyYXN0OiBtYXQtY29udHJhc3QoJGJhc2UtcGFsZXR0ZSwgJGRlZmF1bHQpLFxuICAgIGxpZ2h0ZXItY29udHJhc3Q6IG1hdC1jb250cmFzdCgkYmFzZS1wYWxldHRlLCAkbGlnaHRlciksXG4gICAgZGFya2VyLWNvbnRyYXN0OiBtYXQtY29udHJhc3QoJGJhc2UtcGFsZXR0ZSwgJGRhcmtlcilcbiAgKSk7XG5cbiAgLy8gRm9yIGVhY2ggaHVlIGluIHRoZSBwYWxldHRlLCBhZGQgYSBcIi1jb250cmFzdFwiIGNvbG9yIHRvIHRoZSBtYXAuXG4gIEBlYWNoICRodWUsICRjb2xvciBpbiAkYmFzZS1wYWxldHRlIHtcbiAgICAkcmVzdWx0OiBtYXBfbWVyZ2UoJHJlc3VsdCwgKFxuICAgICAgJyN7JGh1ZX0tY29udHJhc3QnOiBtYXQtY29udHJhc3QoJGJhc2UtcGFsZXR0ZSwgJGh1ZSlcbiAgICApKTtcbiAgfVxuXG4gIEByZXR1cm4gJHJlc3VsdDtcbn1cblxuXG4vLyBHZXRzIGEgY29sb3IgZnJvbSBhIHRoZW1lIHBhbGV0dGUgKHRoZSBvdXRwdXQgb2YgbWF0LXBhbGV0dGUpLlxuLy8gVGhlIGh1ZSBjYW4gYmUgb25lIG9mIHRoZSBzdGFuZGFyZCB2YWx1ZXMgKDUwMCwgQTQwMCwgZXRjLiksIG9uZSBvZiB0aGUgdGhyZWUgcHJlY29uZmlndXJlZFxuLy8gaHVlcyAoZGVmYXVsdCwgbGlnaHRlciwgZGFya2VyKSwgb3IgYW55IG9mIHRoZSBhZm9yZW1lbnRpb25lZCBwcmVmaXhlZCB3aXRoIFwiLWNvbnRyYXN0XCIuXG4vL1xuLy8gQHBhcmFtICRjb2xvci1tYXAgVGhlIHRoZW1lIHBhbGV0dGUgKG91dHB1dCBvZiBtYXQtcGFsZXR0ZSkuXG4vLyBAcGFyYW0gJGh1ZSBUaGUgaHVlIGZyb20gdGhlIHBhbGV0dGUgdG8gdXNlLiBJZiB0aGlzIGlzIGEgdmFsdWUgYmV0d2VlbiAwIGFuZCAxLCBpdCB3aWxsXG4vLyAgICAgYmUgdHJlYXRlZCBhcyBvcGFjaXR5LlxuLy8gQHBhcmFtICRvcGFjaXR5IFRoZSBhbHBoYSBjaGFubmVsIHZhbHVlIGZvciB0aGUgY29sb3IuXG5AZnVuY3Rpb24gbWF0LWNvbG9yKCRwYWxldHRlLCAkaHVlOiBkZWZhdWx0LCAkb3BhY2l0eTogbnVsbCkge1xuICAvLyBJZiBodWVLZXkgaXMgYSBudW1iZXIgYmV0d2VlbiB6ZXJvIGFuZCBvbmUsIHRoZW4gaXQgYWN0dWFsbHkgY29udGFpbnMgYW5cbiAgLy8gb3BhY2l0eSB2YWx1ZSwgc28gcmVjYWxsIHRoaXMgZnVuY3Rpb24gd2l0aCB0aGUgZGVmYXVsdCBodWUgYW5kIHRoYXQgZ2l2ZW4gb3BhY2l0eS5cbiAgQGlmIHR5cGUtb2YoJGh1ZSkgPT0gbnVtYmVyIGFuZCAkaHVlID49IDAgYW5kICRodWUgPD0gMSB7XG4gICAgQHJldHVybiBtYXQtY29sb3IoJHBhbGV0dGUsIGRlZmF1bHQsICRodWUpO1xuICB9XG5cbiAgJGNvbG9yOiBtYXAtZ2V0KCRwYWxldHRlLCAkaHVlKTtcblxuICBAaWYgKHR5cGUtb2YoJGNvbG9yKSAhPSBjb2xvcikge1xuICAgIC8vIElmIHRoZSAkY29sb3IgcmVzb2x2ZWQgdG8gc29tZXRoaW5nIGRpZmZlcmVudCBmcm9tIGEgY29sb3IgKGUuZy4gYSBDU1MgdmFyaWFibGUpLFxuICAgIC8vIHdlIGNhbid0IGFwcGx5IHRoZSBvcGFjaXR5IGFueXdheSBzbyB3ZSByZXR1cm4gdGhlIHZhbHVlIGFzIGlzLCBvdGhlcndpc2UgU2FzcyBjYW5cbiAgICAvLyB0aHJvdyBhbiBlcnJvciBvciBvdXRwdXQgc29tZXRoaW5nIGludmFsaWQuXG4gICAgQHJldHVybiAkY29sb3I7XG4gIH1cblxuICBAcmV0dXJuIHJnYmEoJGNvbG9yLCBpZigkb3BhY2l0eSA9PSBudWxsLCBvcGFjaXR5KCRjb2xvciksICRvcGFjaXR5KSk7XG59XG5cbi8vIFZhbGlkYXRlcyB0aGUgc3BlY2lmaWVkIHRoZW1lIGJ5IGVuc3VyaW5nIHRoYXQgdGhlIG9wdGlvbmFsIGNvbG9yIGNvbmZpZyBkZWZpbmVzXG4vLyBhIHByaW1hcnksIGFjY2VudCBhbmQgd2FybiBwYWxldHRlLiBSZXR1cm5zIHRoZSB0aGVtZSBpZiBubyBmYWlsdXJlcyB3ZXJlIGZvdW5kLlxuQGZ1bmN0aW9uIF9tYXQtdmFsaWRhdGUtdGhlbWUoJHRoZW1lKSB7XG4gIEBpZiBtYXBfZ2V0KCR0aGVtZSwgY29sb3IpIHtcbiAgICAkY29sb3I6IG1hcF9nZXQoJHRoZW1lLCBjb2xvcik7XG4gICAgQGlmIG5vdCBtYXBfZ2V0KCRjb2xvciwgcHJpbWFyeSkge1xuICAgICAgQGVycm9yICdUaGVtZSBkb2VzIG5vdCBkZWZpbmUgYSB2YWxpZCBcInByaW1hcnlcIiBwYWxldHRlLic7XG4gICAgfVxuICAgIEBlbHNlIGlmIG5vdCBtYXBfZ2V0KCRjb2xvciwgYWNjZW50KSB7XG4gICAgICBAZXJyb3IgJ1RoZW1lIGRvZXMgbm90IGRlZmluZSBhIHZhbGlkIFwiYWNjZW50XCIgcGFsZXR0ZS4nO1xuICAgIH1cbiAgICBAZWxzZSBpZiBub3QgbWFwX2dldCgkY29sb3IsIHdhcm4pIHtcbiAgICAgIEBlcnJvciAnVGhlbWUgZG9lcyBub3QgZGVmaW5lIGEgdmFsaWQgXCJ3YXJuXCIgcGFsZXR0ZS4nO1xuICAgIH1cbiAgfVxuICBAcmV0dXJuICR0aGVtZTtcbn1cblxuLy8gQ3JlYXRlcyBhIGJhY2t3YXJkcyBjb21wYXRpYmxlIHRoZW1lLiBQcmV2aW91c2x5IGluIEFuZ3VsYXIgTWF0ZXJpYWwsIHRoZW1lIG9iamVjdHNcbi8vIGNvbnRhaW5lZCB0aGUgY29sb3IgY29uZmlndXJhdGlvbiBkaXJlY3RseS4gV2l0aCB0aGUgcmVjZW50IHJlZmFjdG9yaW5nIG9mIHRoZSB0aGVtaW5nXG4vLyBzeXN0ZW0gdG8gYWxsb3cgZm9yIGRlbnNpdHkgYW5kIHR5cG9ncmFwaHkgY29uZmlndXJhdGlvbnMsIHRoaXMgaXMgbm8gbG9uZ2VyIHRoZSBjYXNlLlxuLy8gVG8gZW5zdXJlIHRoYXQgY29uc3RydWN0ZWQgdGhlbWVzIHdoaWNoIHdpbGwgYmUgcGFzc2VkIHRvIGN1c3RvbSB0aGVtZSBtaXhpbnMgZG8gbm90IGJyZWFrLFxuLy8gd2UgY29weSB0aGUgY29sb3IgY29uZmlndXJhdGlvbiBhbmQgcHV0IGl0cyBwcm9wZXJ0aWVzIGF0IHRoZSB0b3AtbGV2ZWwgb2YgdGhlIHRoZW1lIG9iamVjdC5cbi8vIEhlcmUgaXMgYW4gZXhhbXBsZSBvZiBhIHBhdHRlcm4gdGhhdCBzaG91bGQgc3RpbGwgd29yayB1bnRpbCBpdCdzIG9mZmljaWFsbHkgbWFya2VkIGFzIGFcbi8vIGJyZWFraW5nIGNoYW5nZTpcbi8vXG4vLyAgICBAbWl4aW4gbXktY3VzdG9tLWNvbXBvbmVudC10aGVtZSgkdGhlbWUpIHtcbi8vICAgICAgLm15LWNvbXAge1xuLy8gICAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcihtYXBfZ2V0KCR0aGVtZSwgcHJpbWFyeSkpO1xuLy8gICAgICB9XG4vLyAgICB9XG4vL1xuLy8gTm90ZSB0aGF0IHRoZSBgJHRoZW1lLnByaW1hcnlgIGtleSBkb2VzIHVzdWFsbHkgbm90IGV4aXN0IHNpbmNlIHRoZSBjb2xvciBjb25maWd1cmF0aW9uXG4vLyBpcyBzdG9yZWQgaW4gYCR0aGVtZS5jb2xvcmAgd2hpY2ggY29udGFpbnMgYSBwcm9wZXJ0eSBmb3IgYHByaW1hcnlgLiBUaGlzIG1ldGhvZCBjb3BpZXNcbi8vIHRoZSBtYXAgZnJvbSBgJHRoZW1lLmNvbG9yYCB0byBgJHRoZW1lYCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG5AZnVuY3Rpb24gX21hdC1jcmVhdGUtYmFja3dhcmRzLWNvbXBhdGliaWxpdHktdGhlbWUoJHRoZW1lKSB7XG4gIEBpZiBub3QgbWFwX2dldCgkdGhlbWUsIGNvbG9yKSB7XG4gICAgQHJldHVybiAkdGhlbWU7XG4gIH1cbiAgJGNvbG9yOiBtYXBfZ2V0KCR0aGVtZSwgY29sb3IpO1xuICBAcmV0dXJuIG1hcF9tZXJnZSgkdGhlbWUsICRjb2xvcik7XG59XG5cbi8vIENyZWF0ZXMgYSBsaWdodC10aGVtZWQgY29sb3IgY29uZmlndXJhdGlvbiBmcm9tIHRoZSBzcGVjaWZpZWRcbi8vIHByaW1hcnksIGFjY2VudCBhbmQgd2FybiBwYWxldHRlcy5cbkBmdW5jdGlvbiBfbWF0LWNyZWF0ZS1saWdodC1jb2xvci1jb25maWcoJHByaW1hcnksICRhY2NlbnQsICR3YXJuOiBudWxsKSB7XG4gIEByZXR1cm4gKFxuICAgIHByaW1hcnk6ICRwcmltYXJ5LFxuICAgIGFjY2VudDogJGFjY2VudCxcbiAgICB3YXJuOiBpZigkd2FybiAhPSBudWxsLCAkd2FybiwgbWF0LXBhbGV0dGUoJG1hdC1yZWQpKSxcbiAgICBpcy1kYXJrOiBmYWxzZSxcbiAgICBmb3JlZ3JvdW5kOiAkbWF0LWxpZ2h0LXRoZW1lLWZvcmVncm91bmQsXG4gICAgYmFja2dyb3VuZDogJG1hdC1saWdodC10aGVtZS1iYWNrZ3JvdW5kLFxuICApO1xufVxuXG4vLyBDcmVhdGVzIGEgZGFyay10aGVtZWQgY29sb3IgY29uZmlndXJhdGlvbiBmcm9tIHRoZSBzcGVjaWZpZWRcbi8vIHByaW1hcnksIGFjY2VudCBhbmQgd2FybiBwYWxldHRlcy5cbkBmdW5jdGlvbiBfbWF0LWNyZWF0ZS1kYXJrLWNvbG9yLWNvbmZpZygkcHJpbWFyeSwgJGFjY2VudCwgJHdhcm46IG51bGwpIHtcbiAgQHJldHVybiAoXG4gICAgcHJpbWFyeTogJHByaW1hcnksXG4gICAgYWNjZW50OiAkYWNjZW50LFxuICAgIHdhcm46IGlmKCR3YXJuICE9IG51bGwsICR3YXJuLCBtYXQtcGFsZXR0ZSgkbWF0LXJlZCkpLFxuICAgIGlzLWRhcms6IHRydWUsXG4gICAgZm9yZWdyb3VuZDogJG1hdC1kYXJrLXRoZW1lLWZvcmVncm91bmQsXG4gICAgYmFja2dyb3VuZDogJG1hdC1kYXJrLXRoZW1lLWJhY2tncm91bmQsXG4gICk7XG59XG5cbi8vIENyZWF0ZXMgYSBjb250YWluZXIgb2JqZWN0IGZvciBhIGxpZ2h0IHRoZW1lIHRvIGJlIGdpdmVuIHRvIGluZGl2aWR1YWwgY29tcG9uZW50IHRoZW1lIG1peGlucy5cbi8vIFRPRE86IFJlbW92ZSBsZWdhY3kgQVBJIGFuZCByZW5hbWUgYCRwcmltYXJ5YCB0byBgJGNvbmZpZ2AuIEN1cnJlbnRseSBpdCBjYW5ub3QgYmUgcmVuYW1lZFxuLy8gYXMgaXQgd291bGQgYnJlYWsgZXhpc3RpbmcgYXBwcyB0aGF0IHNldCB0aGUgcGFyYW1ldGVyIGJ5IG5hbWUuXG5AZnVuY3Rpb24gbWF0LWxpZ2h0LXRoZW1lKCRwcmltYXJ5LCAkYWNjZW50OiBudWxsLCAkd2FybjogbWF0LXBhbGV0dGUoJG1hdC1yZWQpKSB7XG4gIC8vIFRoaXMgZnVuY3Rpb24gY3JlYXRlcyBhIGNvbnRhaW5lciBvYmplY3QgZm9yIHRoZSBpbmRpdmlkdWFsIGNvbXBvbmVudCB0aGVtZSBtaXhpbnMuIENvbnN1bWVyc1xuICAvLyBjYW4gY29uc3RydWN0IHN1Y2ggYW4gb2JqZWN0IGJ5IGNhbGxpbmcgdGhpcyBmdW5jdGlvbiwgb3IgYnkgYnVpbGRpbmcgdGhlIG9iamVjdCBtYW51YWxseS5cbiAgLy8gVGhlcmUgYXJlIHR3byBwb3NzaWJsZSB3YXlzIHRvIGludm9rZSB0aGlzIGZ1bmN0aW9uIGluIG9yZGVyIHRvIGNyZWF0ZSBzdWNoIGFuIG9iamVjdDpcbiAgLy9cbiAgLy8gICAgKDEpIFBhc3NpbmcgaW4gYSBtYXAgdGhhdCBob2xkcyBvcHRpb25hbCBjb25maWd1cmF0aW9ucyBmb3IgaW5kaXZpZHVhbCBwYXJ0cyBvZiB0aGVcbiAgLy8gICAgICAgIHRoZW1pbmcgc3lzdGVtLiBGb3IgYGNvbG9yYCBjb25maWd1cmF0aW9ucywgdGhlIGZ1bmN0aW9uIG9ubHkgZXhwZWN0cyB0aGUgcGFsZXR0ZXNcbiAgLy8gICAgICAgIGZvciBgcHJpbWFyeWAgYW5kIGBhY2NlbnRgIChhbmQgb3B0aW9uYWxseSBgd2FybmApLiBUaGUgZnVuY3Rpb24gd2lsbCBleHBhbmQgdGhlXG4gIC8vICAgICAgICBzaG9ydGhhbmQgaW50byBhbiBhY3R1YWwgY29uZmlndXJhdGlvbiB0aGF0IGNhbiBiZSBjb25zdW1lZCBpbiBgLWNvbG9yYCBtaXhpbnMuXG4gIC8vICAgICgyKSBMZWdhY3kgcGF0dGVybjogUGFzc2luZyBpbiB0aGUgcGFsZXR0ZXMgYXMgcGFyYW1ldGVycy4gVGhpcyBpcyBub3QgYXMgZmxleGlibGVcbiAgLy8gICAgICAgIGFzIHBhc3NpbmcgaW4gYSBjb25maWd1cmF0aW9uIG1hcCBiZWNhdXNlIG9ubHkgdGhlIGBjb2xvcmAgc3lzdGVtIGNhbiBiZSBjb25maWd1cmVkLlxuICAvL1xuICAvLyBJZiB0aGUgbGVnYWN5IHBhdHRlcm4gaXMgdXNlZCwgd2UgZ2VuZXJhdGUgYSBjb250YWluZXIgb2JqZWN0IG9ubHkgd2l0aCBhIGxpZ2h0LXRoZW1lZFxuICAvLyBjb25maWd1cmF0aW9uIGZvciB0aGUgYGNvbG9yYCB0aGVtaW5nIHBhcnQuXG4gIEBpZiAkYWNjZW50ICE9IG51bGwge1xuICAgIEByZXR1cm4gX21hdC1jcmVhdGUtYmFja3dhcmRzLWNvbXBhdGliaWxpdHktdGhlbWUoX21hdC12YWxpZGF0ZS10aGVtZSgoXG4gICAgICBfaXMtbGVnYWN5LXRoZW1lOiB0cnVlLFxuICAgICAgY29sb3I6IF9tYXQtY3JlYXRlLWxpZ2h0LWNvbG9yLWNvbmZpZygkcHJpbWFyeSwgJGFjY2VudCwgJHdhcm4pLFxuICAgICkpKTtcbiAgfVxuICAvLyBJZiB0aGUgbWFwIHBhdHRlcm4gaXMgdXNlZCAoMSksIHdlIGp1c3QgcGFzcy10aHJvdWdoIHRoZSBjb25maWd1cmF0aW9ucyBmb3IgaW5kaXZpZHVhbFxuICAvLyBwYXJ0cyBvZiB0aGUgdGhlbWluZyBzeXN0ZW0sIGJ1dCB1cGRhdGUgdGhlIGBjb2xvcmAgY29uZmlndXJhdGlvbiBpZiBzZXQuIEFzIGV4cGxhaW5lZFxuICAvLyBhYm92ZSwgdGhlIGNvbG9yIHNob3J0aGFuZCB3aWxsIGJlIGV4cGFuZGVkIHRvIGFuIGFjdHVhbCBsaWdodC10aGVtZWQgY29sb3IgY29uZmlndXJhdGlvbi5cbiAgJHJlc3VsdDogJHByaW1hcnk7XG4gIEBpZiBtYXBfZ2V0KCRwcmltYXJ5LCBjb2xvcikge1xuICAgICRjb2xvci1zZXR0aW5nczogbWFwX2dldCgkcHJpbWFyeSwgY29sb3IpO1xuICAgICRwcmltYXJ5OiBtYXBfZ2V0KCRjb2xvci1zZXR0aW5ncywgcHJpbWFyeSk7XG4gICAgJGFjY2VudDogbWFwX2dldCgkY29sb3Itc2V0dGluZ3MsIGFjY2VudCk7XG4gICAgJHdhcm46IG1hcF9nZXQoJGNvbG9yLXNldHRpbmdzLCB3YXJuKTtcbiAgICAkcmVzdWx0OiBtYXBfbWVyZ2UoJHJlc3VsdCwgKGNvbG9yOiBfbWF0LWNyZWF0ZS1saWdodC1jb2xvci1jb25maWcoJHByaW1hcnksICRhY2NlbnQsICR3YXJuKSkpO1xuICB9XG4gIEByZXR1cm4gX21hdC1jcmVhdGUtYmFja3dhcmRzLWNvbXBhdGliaWxpdHktdGhlbWUoX21hdC12YWxpZGF0ZS10aGVtZSgkcmVzdWx0KSk7XG59XG5cbi8vIENyZWF0ZXMgYSBjb250YWluZXIgb2JqZWN0IGZvciBhIGRhcmsgdGhlbWUgdG8gYmUgZ2l2ZW4gdG8gaW5kaXZpZHVhbCBjb21wb25lbnQgdGhlbWUgbWl4aW5zLlxuLy8gVE9ETzogUmVtb3ZlIGxlZ2FjeSBBUEkgYW5kIHJlbmFtZSBgJHByaW1hcnlgIHRvIGAkY29uZmlnYC4gQ3VycmVudGx5IGl0IGNhbm5vdCBiZSByZW5hbWVkXG4vLyBhcyBpdCB3b3VsZCBicmVhayBleGlzdGluZyBhcHBzIHRoYXQgc2V0IHRoZSBwYXJhbWV0ZXIgYnkgbmFtZS5cbkBmdW5jdGlvbiBtYXQtZGFyay10aGVtZSgkcHJpbWFyeSwgJGFjY2VudDogbnVsbCwgJHdhcm46IG1hdC1wYWxldHRlKCRtYXQtcmVkKSkge1xuICAvLyBUaGlzIGZ1bmN0aW9uIGNyZWF0ZXMgYSBjb250YWluZXIgb2JqZWN0IGZvciB0aGUgaW5kaXZpZHVhbCBjb21wb25lbnQgdGhlbWUgbWl4aW5zLiBDb25zdW1lcnNcbiAgLy8gY2FuIGNvbnN0cnVjdCBzdWNoIGFuIG9iamVjdCBieSBjYWxsaW5nIHRoaXMgZnVuY3Rpb24sIG9yIGJ5IGJ1aWxkaW5nIHRoZSBvYmplY3QgbWFudWFsbHkuXG4gIC8vIFRoZXJlIGFyZSB0d28gcG9zc2libGUgd2F5cyB0byBpbnZva2UgdGhpcyBmdW5jdGlvbiBpbiBvcmRlciB0byBjcmVhdGUgc3VjaCBhbiBvYmplY3Q6XG4gIC8vXG4gIC8vICAgICgxKSBQYXNzaW5nIGluIGEgbWFwIHRoYXQgaG9sZHMgb3B0aW9uYWwgY29uZmlndXJhdGlvbnMgZm9yIGluZGl2aWR1YWwgcGFydHMgb2YgdGhlXG4gIC8vICAgICAgICB0aGVtaW5nIHN5c3RlbS4gRm9yIGBjb2xvcmAgY29uZmlndXJhdGlvbnMsIHRoZSBmdW5jdGlvbiBvbmx5IGV4cGVjdHMgdGhlIHBhbGV0dGVzXG4gIC8vICAgICAgICBmb3IgYHByaW1hcnlgIGFuZCBgYWNjZW50YCAoYW5kIG9wdGlvbmFsbHkgYHdhcm5gKS4gVGhlIGZ1bmN0aW9uIHdpbGwgZXhwYW5kIHRoZVxuICAvLyAgICAgICAgc2hvcnRoYW5kIGludG8gYW4gYWN0dWFsIGNvbmZpZ3VyYXRpb24gdGhhdCBjYW4gYmUgY29uc3VtZWQgaW4gYC1jb2xvcmAgbWl4aW5zLlxuICAvLyAgICAoMikgTGVnYWN5IHBhdHRlcm46IFBhc3NpbmcgaW4gdGhlIHBhbGV0dGVzIGFzIHBhcmFtZXRlcnMuIFRoaXMgaXMgbm90IGFzIGZsZXhpYmxlXG4gIC8vICAgICAgICBhcyBwYXNzaW5nIGluIGEgY29uZmlndXJhdGlvbiBtYXAgYmVjYXVzZSBvbmx5IHRoZSBgY29sb3JgIHN5c3RlbSBjYW4gYmUgY29uZmlndXJlZC5cbiAgLy9cbiAgLy8gSWYgdGhlIGxlZ2FjeSBwYXR0ZXJuIGlzIHVzZWQsIHdlIGdlbmVyYXRlIGEgY29udGFpbmVyIG9iamVjdCBvbmx5IHdpdGggYSBkYXJrLXRoZW1lZFxuICAvLyBjb25maWd1cmF0aW9uIGZvciB0aGUgYGNvbG9yYCB0aGVtaW5nIHBhcnQuXG4gIEBpZiAkYWNjZW50ICE9IG51bGwge1xuICAgIEByZXR1cm4gX21hdC1jcmVhdGUtYmFja3dhcmRzLWNvbXBhdGliaWxpdHktdGhlbWUoX21hdC12YWxpZGF0ZS10aGVtZSgoXG4gICAgICBfaXMtbGVnYWN5LXRoZW1lOiB0cnVlLFxuICAgICAgY29sb3I6IF9tYXQtY3JlYXRlLWRhcmstY29sb3ItY29uZmlnKCRwcmltYXJ5LCAkYWNjZW50LCAkd2FybiksXG4gICAgKSkpO1xuICB9XG4gIC8vIElmIHRoZSBtYXAgcGF0dGVybiBpcyB1c2VkICgxKSwgd2UganVzdCBwYXNzLXRocm91Z2ggdGhlIGNvbmZpZ3VyYXRpb25zIGZvciBpbmRpdmlkdWFsXG4gIC8vIHBhcnRzIG9mIHRoZSB0aGVtaW5nIHN5c3RlbSwgYnV0IHVwZGF0ZSB0aGUgYGNvbG9yYCBjb25maWd1cmF0aW9uIGlmIHNldC4gQXMgZXhwbGFpbmVkXG4gIC8vIGFib3ZlLCB0aGUgY29sb3Igc2hvcnRoYW5kIHdpbGwgYmUgZXhwYW5kZWQgdG8gYW4gYWN0dWFsIGRhcmstdGhlbWVkIGNvbG9yIGNvbmZpZ3VyYXRpb24uXG4gICRyZXN1bHQ6ICRwcmltYXJ5O1xuICBAaWYgbWFwX2dldCgkcHJpbWFyeSwgY29sb3IpIHtcbiAgICAkY29sb3Itc2V0dGluZ3M6IG1hcF9nZXQoJHByaW1hcnksIGNvbG9yKTtcbiAgICAkcHJpbWFyeTogbWFwX2dldCgkY29sb3Itc2V0dGluZ3MsIHByaW1hcnkpO1xuICAgICRhY2NlbnQ6IG1hcF9nZXQoJGNvbG9yLXNldHRpbmdzLCBhY2NlbnQpO1xuICAgICR3YXJuOiBtYXBfZ2V0KCRjb2xvci1zZXR0aW5ncywgd2Fybik7XG4gICAgJHJlc3VsdDogbWFwX21lcmdlKCRyZXN1bHQsIChjb2xvcjogX21hdC1jcmVhdGUtZGFyay1jb2xvci1jb25maWcoJHByaW1hcnksICRhY2NlbnQsICR3YXJuKSkpO1xuICB9XG4gIEByZXR1cm4gX21hdC1jcmVhdGUtYmFja3dhcmRzLWNvbXBhdGliaWxpdHktdGhlbWUoX21hdC12YWxpZGF0ZS10aGVtZSgkcmVzdWx0KSk7XG59XG5cbi8vLyBHZXRzIHRoZSBjb2xvciBjb25maWd1cmF0aW9uIGZyb20gdGhlIGdpdmVuIHRoZW1lIG9yIGNvbmZpZ3VyYXRpb24uXG5AZnVuY3Rpb24gbWF0LWdldC1jb2xvci1jb25maWcoJHRoZW1lLCAkZGVmYXVsdDogbnVsbCkge1xuICAvLyBJZiBhIGNvbmZpZ3VyYXRpb24gaGFzIGJlZW4gcGFzc2VkLCByZXR1cm4gdGhlIGNvbmZpZyBkaXJlY3RseS5cbiAgQGlmIG5vdCBfbWF0LWlzLXRoZW1lLW9iamVjdCgkdGhlbWUpIHtcbiAgICBAcmV0dXJuICR0aGVtZTtcbiAgfVxuICAvLyBJZiB0aGUgdGhlbWUgaGFzIGJlZW4gY29uc3RydWN0ZWQgdGhyb3VnaCB0aGUgbGVnYWN5IHRoZW1pbmcgQVBJLCB3ZSB1c2UgdGhlIHRoZW1lIG9iamVjdFxuICAvLyBhcyBjb2xvciBjb25maWd1cmF0aW9uIGluc3RlYWQgb2YgdGhlIGRlZGljYXRlZCBgY29sb3JgIHByb3BlcnR5LiBXZSBkbyB0aGlzIGJlY2F1c2UgZm9yXG4gIC8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LCB3ZSBjb3BpZWQgdGhlIGNvbG9yIGNvbmZpZ3VyYXRpb24gZnJvbSBgJHRoZW1lLmNvbG9yYCB0byBgJHRoZW1lYC5cbiAgLy8gSGVuY2UgZGV2ZWxvcGVycyBjb3VsZCBjdXN0b21pemUgdGhlIGNvbG9ycyBhdCB0b3AtbGV2ZWwgYW5kIHdhbnQgdG8gcmVzcGVjdCB0aGVzZSBjaGFuZ2VzXG4gIC8vIFRPRE86IFJlbW92ZSB3aGVuIGxlZ2FjeSB0aGVtaW5nIEFQSSBpcyByZW1vdmVkLlxuICBAaWYgX21hdC1pcy1sZWdhY3ktY29uc3RydWN0ZWQtdGhlbWUoJHRoZW1lKSB7XG4gICAgQHJldHVybiAkdGhlbWU7XG4gIH1cbiAgQGlmIG1hcF9oYXNfa2V5KCR0aGVtZSwgY29sb3IpIHtcbiAgICBAcmV0dXJuIG1hcF9nZXQoJHRoZW1lLCBjb2xvcik7XG4gIH1cbiAgQHJldHVybiAkZGVmYXVsdDtcbn1cblxuLy8vIEdldHMgdGhlIGRlbnNpdHkgY29uZmlndXJhdGlvbiBmcm9tIHRoZSBnaXZlbiB0aGVtZSBvciBjb25maWd1cmF0aW9uLlxuQGZ1bmN0aW9uIG1hdC1nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lLW9yLWNvbmZpZywgJGRlZmF1bHQ6IDApIHtcbiAgLy8gSWYgYSBjb25maWd1cmF0aW9uIGhhcyBiZWVuIHBhc3NlZCwgcmV0dXJuIHRoZSBjb25maWcgZGlyZWN0bHkuXG4gIEBpZiBub3QgX21hdC1pcy10aGVtZS1vYmplY3QoJHRoZW1lLW9yLWNvbmZpZykge1xuICAgIEByZXR1cm4gJHRoZW1lLW9yLWNvbmZpZztcbiAgfVxuICAvLyBJbiBjYXNlIGEgdGhlbWUgaGFzIGJlZW4gcGFzc2VkLCBleHRyYWN0IHRoZSBjb25maWd1cmF0aW9uIGlmIHByZXNlbnQsXG4gIC8vIG9yIGZhbGwgYmFjayB0byB0aGUgZGVmYXVsdCBkZW5zaXR5IGNvbmZpZy5cbiAgQGlmIG1hcF9oYXNfa2V5KCR0aGVtZS1vci1jb25maWcsIGRlbnNpdHkpIHtcbiAgICBAcmV0dXJuIG1hcF9nZXQoJHRoZW1lLW9yLWNvbmZpZywgZGVuc2l0eSk7XG4gIH1cbiAgQHJldHVybiAkZGVmYXVsdDtcbn1cblxuLy8vIEdldHMgdGhlIHR5cG9ncmFwaHkgY29uZmlndXJhdGlvbiBmcm9tIHRoZSBnaXZlbiB0aGVtZSBvciBjb25maWd1cmF0aW9uLlxuLy8vIEZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSwgdHlwb2dyYXBoeSBpcyBub3QgaW5jbHVkZWQgYnkgZGVmYXVsdC5cbkBmdW5jdGlvbiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZS1vci1jb25maWcsICRkZWZhdWx0OiBudWxsKSB7XG4gIC8vIElmIGEgY29uZmlndXJhdGlvbiBoYXMgYmVlbiBwYXNzZWQsIHJldHVybiB0aGUgY29uZmlnIGRpcmVjdGx5LlxuICBAaWYgbm90IF9tYXQtaXMtdGhlbWUtb2JqZWN0KCR0aGVtZS1vci1jb25maWcpIHtcbiAgICBAcmV0dXJuICR0aGVtZS1vci1jb25maWc7XG4gIH1cbiAgLy8gSW4gY2FzZSBhIHRoZW1lIGhhcyBiZWVuIHBhc3NlZCwgZXh0cmFjdCB0aGUgY29uZmlndXJhdGlvbiBpZiBwcmVzZW50LFxuICAvLyBvciBmYWxsIGJhY2sgdG8gdGhlIGRlZmF1bHQgdHlwb2dyYXBoeSBjb25maWcuXG4gIEBpZiAobWFwX2hhc19rZXkoJHRoZW1lLW9yLWNvbmZpZywgdHlwb2dyYXBoeSkpIHtcbiAgICBAcmV0dXJuIG1hcF9nZXQoJHRoZW1lLW9yLWNvbmZpZywgdHlwb2dyYXBoeSk7XG4gIH1cbiAgQHJldHVybiAkZGVmYXVsdDtcbn1cblxuLy8gQ2hlY2tzIHdoZXRoZXIgdGhlIGdpdmVuIHZhbHVlIHJlc29sdmVzIHRvIGEgdGhlbWUgb2JqZWN0LiBUaGVtZSBvYmplY3RzIGFyZSBhbHdheXNcbi8vIG9mIHR5cGUgYG1hcGAgYW5kIGNhbiBvcHRpb25hbGx5IG9ubHkgc3BlY2lmeSBgY29sb3JgLCBgZGVuc2l0eWAgb3IgYHR5cG9ncmFwaHlgLlxuQGZ1bmN0aW9uIF9tYXQtaXMtdGhlbWUtb2JqZWN0KCR2YWx1ZSkge1xuICBAcmV0dXJuIHR5cGUtb2YoJHZhbHVlKSA9PSAnbWFwJyBhbmQgKFxuICAgIG1hcF9oYXNfa2V5KCR2YWx1ZSwgY29sb3IpIG9yXG4gICAgbWFwX2hhc19rZXkoJHZhbHVlLCBkZW5zaXR5KSBvclxuICAgIG1hcF9oYXNfa2V5KCR2YWx1ZSwgdHlwb2dyYXBoeSkgb3JcbiAgICBsZW5ndGgoJHZhbHVlKSA9PSAwXG4gICk7XG59XG5cbi8vIENoZWNrcyB3aGV0aGVyIGEgZ2l2ZW4gdmFsdWUgY29ycmVzcG9uZHMgdG8gYSBsZWdhY3kgY29uc3RydWN0ZWQgdGhlbWUuXG5AZnVuY3Rpb24gX21hdC1pcy1sZWdhY3ktY29uc3RydWN0ZWQtdGhlbWUoJHZhbHVlKSB7XG4gIEByZXR1cm4gdHlwZS1vZigkdmFsdWUpID09ICdtYXAnIGFuZCBtYXBfZ2V0KCR2YWx1ZSwgJ19pcy1sZWdhY3ktdGhlbWUnKTtcbn1cblxuLy8gR2V0cyB0aGUgdGhlbWUgZnJvbSB0aGUgZ2l2ZW4gdmFsdWUgdGhhdCBpcyBlaXRoZXIgYWxyZWFkeSBhIHRoZW1lLCBvciBhIGNvbG9yIGNvbmZpZ3VyYXRpb24uXG4vLyBUaGlzIGhhbmRsZXMgdGhlIGxlZ2FjeSBjYXNlIHdoZXJlIGRldmVsb3BlcnMgcGFzcyBhIGNvbG9yIGNvbmZpZ3VyYXRpb24gZGlyZWN0bHkgdG8gdGhlXG4vLyB0aGVtZSBtaXhpbi4gQmVmb3JlIHdlIGludHJvZHVjZWQgdGhlIG5ldyBwYXR0ZXJuIGZvciBjb25zdHJ1Y3RpbmcgYSB0aGVtZSwgZGV2ZWxvcGVycyBwYXNzZWRcbi8vIHRoZSBjb2xvciBjb25maWd1cmF0aW9uIGRpcmVjdGx5IHRvIHRoZSB0aGVtZSBtaXhpbnMuIFRoaXMgY2FuIGJlIHN0aWxsIHRoZSBjYXNlIGlmIGRldmVsb3BlcnNcbi8vIGNvbnN0cnVjdCBhIHRoZW1lIG1hbnVhbGx5IGFuZCBwYXNzIGl0IHRvIGEgdGhlbWUuIFdlIHN1cHBvcnQgdGhpcyBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4vLyBUT0RPKGRldnZlcnNpb24pOiByZW1vdmUgdGhpcyBpbiB0aGUgZnV0dXJlLiBDb25zdHJ1Y3RpbmcgdGhlbWVzIG1hbnVhbGx5IGlzIHJhcmUsXG4vLyBhbmQgdGhlIGNvZGUgY2FuIGJlIGVhc2lseSB1cGRhdGVkIHRvIHRoZSBuZXcgQVBJLlxuQGZ1bmN0aW9uIF9tYXQtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gIEBpZiBfbWF0LWlzLXRoZW1lLW9iamVjdCgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICAgQHJldHVybiAkdGhlbWUtb3ItY29sb3ItY29uZmlnO1xuICB9XG4gIEByZXR1cm4gX21hdC1jcmVhdGUtYmFja3dhcmRzLWNvbXBhdGliaWxpdHktdGhlbWUoKFxuICAgIF9pcy1sZWdhY3ktdGhlbWU6IHRydWUsXG4gICAgY29sb3I6ICR0aGVtZS1vci1jb2xvci1jb25maWdcbiAgKSk7XG59XG5cblxuXG4vLyBXaGV0aGVyIGR1cGxpY2F0aW9uIHdhcm5pbmdzIHNob3VsZCBiZSBkaXNhYmxlZC4gV2FybmluZ3MgZW5hYmxlZCBieSBkZWZhdWx0LlxuJG1hdC10aGVtZS1pZ25vcmUtZHVwbGljYXRpb24td2FybmluZ3M6IGZhbHNlICFkZWZhdWx0O1xuXG4vLyBXYXJuaW5nIHRoYXQgd2lsbCBiZSBwcmludGVkIGlmIGR1cGxpY2F0ZWQgc3R5bGVzIGFyZSBnZW5lcmF0ZWQgYnkgYSB0aGVtZS5cbiRfbWF0LXRoZW1lLWR1cGxpY2F0ZS13YXJuaW5nOiAnUmVhZCBtb3JlIGFib3V0IGhvdyBzdHlsZSBkdXBsaWNhdGlvbiBjYW4gYmUgYXZvaWRlZCBpbiBhICcgK1xuICAnZGVkaWNhdGVkIGd1aWRlLiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9jb21wb25lbnRzL2Jsb2IvbWFzdGVyL2d1aWRlcy9kdXBsaWNhdGUtdGhlbWluZy1zdHlsZXMubWQnO1xuXG4vLyBUaGVzZSB2YXJpYWJsZSBhcmUgbm90IGludGVuZGVkIHRvIGJlIG92ZXJyaWRkZW4gZXh0ZXJuYWxseS4gVGhleSB1c2UgYCFkZWZhdWx0YCB0b1xuLy8gYXZvaWQgYmVpbmcgcmVzZXQgZXZlcnkgdGltZSB0aGlzIGZpbGUgaXMgaW1wb3J0ZWQuXG4kX21hdC10aGVtZS1lbWl0dGVkLWNvbG9yOiAoKSAhZGVmYXVsdDtcbiRfbWF0LXRoZW1lLWVtaXR0ZWQtdHlwb2dyYXBoeTogKCkgIWRlZmF1bHQ7XG4kX21hdC10aGVtZS1lbWl0dGVkLWRlbnNpdHk6ICgpICFkZWZhdWx0O1xuXG4vLyBDaGVja3MgaWYgY29uZmlndXJhdGlvbnMgdGhhdCBoYXZlIGJlZW4gZGVjbGFyZWQgaW4gdGhlIGdpdmVuIHRoZW1lIGhhdmUgYmVlbiBnZW5lcmF0ZWRcbi8vIGJlZm9yZS4gSWYgc28sIHdhcm5pbmdzIHdpbGwgYmUgcmVwb3J0ZWQuIFRoaXMgc2hvdWxkIG5vdGlmeSBkZXZlbG9wZXJzIGluIGNhc2UgZHVwbGljYXRlXG4vLyBzdHlsZXMgYXJlIGFjY2lkZW50YWxseSBnZW5lcmF0ZWQgZHVlIHRvIHdyb25nIHVzYWdlIG9mIHRoZSBhbGwtdGhlbWUgbWl4aW5zLlxuLy9cbi8vIEFkZGl0aW9uYWxseSwgdGhpcyBtaXhpbiBjb250cm9scyB0aGUgZGVmYXVsdCB2YWx1ZSBmb3IgdGhlIGRlbnNpdHkgY29uZmlndXJhdGlvbi4gQnlcbi8vIGRlZmF1bHQsIGRlbnNpdHkgc3R5bGVzIGFyZSBnZW5lcmF0ZWQgYXQgc2NhbGUgemVyby4gSWYgdGhlIHNhbWUgZGVuc2l0eSBzdHlsZXMgd291bGQgYmVcbi8vIGdlbmVyYXRlZCBhIHNlY29uZCB0aW1lIHRob3VnaCwgdGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBjaGFuZ2UgdG8gYXZvaWQgZHVwbGljYXRlIHN0eWxlcy5cbi8vXG4vLyBUaGUgbWl4aW4ga2VlcHMgdHJhY2sgb2YgYWxsIGNvbmZpZ3VyYXRpb25zIGluIGEgbGlzdCB0aGF0IGlzIHNjb3BlZCB0byB0aGUgc3BlY2lmaWVkXG4vLyBpZC4gVGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSBhIGdpdmVuIHRoZW1lIGNhbiBiZSBwYXNzZWQgdG8gbXVsdGlwbGUgZGlzam9pbnQgdGhlbWUgbWl4aW5zXG4vLyAoZS5nLiBgYW5ndWxhci1tYXRlcmlhbC10aGVtZWAgYW5kIGBhbmd1bGFyLW1hdGVyaWFsLW1kYy10aGVtZWApIHdpdGhvdXQgY2F1c2luZyBhbnlcbi8vIHN0eWxlIGR1cGxpY2F0aW9uLlxuQG1peGluIF9tYXQtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUtb3ItY29sb3ItY29uZmlnLCAkaWQpIHtcbiAgJHRoZW1lOiBfbWF0LWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gICRjb2xvci1jb25maWc6IG1hdC1nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICRkZW5zaXR5LWNvbmZpZzogbWF0LWdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAkdHlwb2dyYXBoeS1jb25maWc6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcbiAgLy8gTGlzdHMgb2YgcHJldmlvdXMgYGNvbG9yYCwgYGRlbnNpdHlgIGFuZCBgdHlwb2dyYXBoeWAgY29uZmlndXJhdGlvbnMuXG4gICRwcmV2aW91cy1jb2xvcjogbWFwX2dldCgkX21hdC10aGVtZS1lbWl0dGVkLWNvbG9yLCAkaWQpIG9yICgpO1xuICAkcHJldmlvdXMtdHlwb2dyYXBoeTogbWFwX2dldCgkX21hdC10aGVtZS1lbWl0dGVkLXR5cG9ncmFwaHksICRpZCkgb3IgKCk7XG4gICRwcmV2aW91cy1kZW5zaXR5OiBtYXBfZ2V0KCRfbWF0LXRoZW1lLWVtaXR0ZWQtZGVuc2l0eSwgJGlkKSBvciAoKTtcbiAgLy8gV2hldGhlciBkdXBsaWNhdGUgbGVnYWN5IGRlbnNpdHkgc3R5bGVzIHdvdWxkIGJlIGdlbmVyYXRlZC5cbiAgJGR1cGxpY2F0ZS1sZWdhY3ktZGVuc2l0eTogZmFsc2U7XG5cbiAgLy8gQ2hlY2sgaWYgdGhlIGNvbG9yIGNvbmZpZ3VyYXRpb24gaGFzIGJlZW4gZ2VuZXJhdGVkIGJlZm9yZS5cbiAgQGlmICRjb2xvci1jb25maWcgIT0gbnVsbCB7XG4gICAgQGlmIGluZGV4KCRwcmV2aW91cy1jb2xvciwgJGNvbG9yLWNvbmZpZykgIT0gbnVsbCBhbmRcbiAgICAgICAgbm90ICRtYXQtdGhlbWUtaWdub3JlLWR1cGxpY2F0aW9uLXdhcm5pbmdzIHtcbiAgICAgIEB3YXJuICdUaGUgc2FtZSBjb2xvciBzdHlsZXMgYXJlIGdlbmVyYXRlZCBtdWx0aXBsZSB0aW1lcy4gJyArXG4gICAgICAgICAgJF9tYXQtdGhlbWUtZHVwbGljYXRlLXdhcm5pbmc7XG4gICAgfVxuICAgICRwcmV2aW91cy1jb2xvcjogYXBwZW5kKCRwcmV2aW91cy1jb2xvciwgJGNvbG9yLWNvbmZpZyk7XG4gIH1cblxuICAvLyBDaGVjayBpZiB0aGUgdHlwb2dyYXBoeSBjb25maWd1cmF0aW9uIGhhcyBiZWVuIGdlbmVyYXRlZCBiZWZvcmUuXG4gIEBpZiAkdHlwb2dyYXBoeS1jb25maWcgIT0gbnVsbCB7XG4gICAgQGlmIGluZGV4KCRwcmV2aW91cy10eXBvZ3JhcGh5LCAkdHlwb2dyYXBoeS1jb25maWcpICE9IG51bGwgYW5kXG4gICAgICAgIG5vdCAkbWF0LXRoZW1lLWlnbm9yZS1kdXBsaWNhdGlvbi13YXJuaW5ncyB7XG4gICAgICBAd2FybiAnVGhlIHNhbWUgdHlwb2dyYXBoeSBzdHlsZXMgYXJlIGdlbmVyYXRlZCBtdWx0aXBsZSB0aW1lcy4gJyArXG4gICAgICAgICAgJF9tYXQtdGhlbWUtZHVwbGljYXRlLXdhcm5pbmc7XG4gICAgfVxuICAgICRwcmV2aW91cy10eXBvZ3JhcGh5OiBhcHBlbmQoJHByZXZpb3VzLXR5cG9ncmFwaHksICR0eXBvZ3JhcGh5LWNvbmZpZyk7XG4gIH1cblxuICAvLyBDaGVjayBpZiB0aGUgZGVuc2l0eSBjb25maWd1cmF0aW9uIGhhcyBiZWVuIGdlbmVyYXRlZCBiZWZvcmUuXG4gIEBpZiAkZGVuc2l0eS1jb25maWcgIT0gbnVsbCB7XG4gICAgQGlmIGluZGV4KCRwcmV2aW91cy1kZW5zaXR5LCAkZGVuc2l0eS1jb25maWcpICE9IG51bGwge1xuICAgICAgLy8gT25seSByZXBvcnQgYSB3YXJuaW5nIGlmIGRlbnNpdHkgc3R5bGVzIHdvdWxkIGJlIGR1cGxpY2F0ZWQgZm9yIG5vbi1sZWdhY3kgdGhlbWVcbiAgICAgIC8vIGRlZmluaXRpb25zLiBGb3IgbGVnYWN5IHRoZW1lcywgd2UgaGF2ZSBjb21wYXRpYmlsaXR5IGxvZ2ljIHRoYXQgYXZvaWRzIGR1cGxpY2F0aW9uXG4gICAgICAvLyBvZiBkZWZhdWx0IGRlbnNpdHkgc3R5bGVzLiBXZSBkb24ndCB3YW50IHRvIHJlcG9ydCBhIHdhcm5pbmcgaW4gdGhvc2UgY2FzZXMuXG4gICAgICBAaWYgX21hdC1pcy1sZWdhY3ktY29uc3RydWN0ZWQtdGhlbWUoJHRoZW1lKSB7XG4gICAgICAgICRkdXBsaWNhdGUtbGVnYWN5LWRlbnNpdHk6IHRydWU7XG4gICAgICB9XG4gICAgICBAZWxzZSBpZiBub3QgJG1hdC10aGVtZS1pZ25vcmUtZHVwbGljYXRpb24td2FybmluZ3Mge1xuICAgICAgICBAd2FybiAnVGhlIHNhbWUgZGVuc2l0eSBzdHlsZXMgYXJlIGdlbmVyYXRlZCBtdWx0aXBsZSB0aW1lcy4gJyArXG4gICAgICAgICAgICRfbWF0LXRoZW1lLWR1cGxpY2F0ZS13YXJuaW5nO1xuICAgICAgfVxuICAgIH1cbiAgICAkcHJldmlvdXMtZGVuc2l0eTogYXBwZW5kKCRwcmV2aW91cy1kZW5zaXR5LCAkZGVuc2l0eS1jb25maWcpO1xuICB9XG5cbiAgJF9tYXQtdGhlbWUtZW1pdHRlZC1jb2xvcjogbWFwX21lcmdlKFxuICAgICAgJF9tYXQtdGhlbWUtZW1pdHRlZC1jb2xvciwgKCRpZDogJHByZXZpb3VzLWNvbG9yKSkgIWdsb2JhbDtcbiAgJF9tYXQtdGhlbWUtZW1pdHRlZC1kZW5zaXR5OiBtYXBfbWVyZ2UoXG4gICAgICAkX21hdC10aGVtZS1lbWl0dGVkLWRlbnNpdHksICgkaWQ6ICRwcmV2aW91cy1kZW5zaXR5KSkgIWdsb2JhbDtcbiAgJF9tYXQtdGhlbWUtZW1pdHRlZC10eXBvZ3JhcGh5OiBtYXBfbWVyZ2UoXG4gICAgICAkX21hdC10aGVtZS1lbWl0dGVkLXR5cG9ncmFwaHksICgkaWQ6ICRwcmV2aW91cy10eXBvZ3JhcGh5KSkgIWdsb2JhbDtcblxuICAvLyBPcHRpb25hbGx5LCBjb25zdW1lcnMgb2YgdGhpcyBtaXhpbiBjYW4gd3JhcCBjb250ZW50cyBpbnNpZGUgc28gdGhhdCBuZXN0ZWRcbiAgLy8gZHVwbGljYXRlIHN0eWxlIGNoZWNrcyBkbyBub3QgcmVwb3J0IGFub3RoZXIgd2FybmluZy4gZS5nLiBpZiBkZXZlbG9wZXJzIGluY2x1ZGVcbiAgLy8gdGhlIGBhbmd1bGFyLW1hdGVyaWFsLXRoZW1lYCBtaXhpbiB0d2ljZSwgb25seSB0aGUgdG9wLWxldmVsIGR1cGxpY2F0ZSBzdHlsZXMgY2hlY2tcbiAgLy8gc2hvdWxkIHJlcG9ydCBhIHdhcm5pbmcuIE5vdCBhbGwgaW5kaXZpZHVhbCBjb21wb25lbnRzIHNob3VsZCByZXBvcnQgYSB3YXJuaW5nIHRvby5cbiAgJG9yaWctbWF0LXRoZW1lLWlnbm9yZS1kdXBsaWNhdGlvbi13YXJuaW5nczogJG1hdC10aGVtZS1pZ25vcmUtZHVwbGljYXRpb24td2FybmluZ3M7XG4gICRtYXQtdGhlbWUtaWdub3JlLWR1cGxpY2F0aW9uLXdhcm5pbmdzOiB0cnVlICFnbG9iYWw7XG5cbiAgLy8gSWYgZHVwbGljYXRlIGRlZmF1bHQgZGVuc2l0eSBzdHlsZXMgd291bGQgYmUgZ2VuZXJhdGVkIGZvciBhIGxlZ2FjeSBjb25zdHJ1Y3RlZCB0aGVtZSxcbiAgLy8gd2UgYWRqdXN0IHRoZSBkZW5zaXR5IGdlbmVyYXRpb24gc28gdGhhdCBubyBkZW5zaXR5IHN0eWxlcyBhcmUgZ2VuZXJhdGVkIGJ5IGRlZmF1bHQuXG4gIC8vIElmIG5vIGRlZmF1bHQgZGVuc2l0eSBzdHlsZXMgaGF2ZSBiZWVuIGdlbmVyYXRlZCB5ZXQsIHdlIGVuc3VyZSB0aGF0IHRoZSBzdHlsZXNcbiAgLy8gYXJlIGdlbmVyYXRlZCBhdCByb290LiBGb3IgbGVnYWN5IHRoZW1lcyBvdXIgZ29hbCBpcyB0byBnZW5lcmF0ZSBkZWZhdWx0IGRlbnNpdHlcbiAgLy8gc3R5bGVzICoqb25jZSoqIGFuZCBhdCByb290LiBUaGlzIG1hdGNoZXMgdGhlIG9sZCBiZWhhdmlvciB3aGVyZSBkZW5zaXR5IHN0eWxlcyB3ZXJlXG4gIC8vIHBhcnQgb2YgdGhlIGJhc2UgY29tcG9uZW50IHN0eWxlcyAodGhhdCBkaWQgbm90IHVzZSB2aWV3IGVuY2Fwc3VsYXRpb24pLlxuICAvLyBUT0RPOiBSZW1vdmUgdGhpcyBjb21wYXRpYmlsaXR5IGxvZ2ljIHdoZW4gdGhlIGxlZ2FjeSB0aGVtaW5nIEFQSSBpcyByZW1vdmVkLlxuICAkX21hdC1kZW5zaXR5LWdlbmVyYXRlLWF0LXJvb3Q6IF9tYXQtaXMtbGVnYWN5LWNvbnN0cnVjdGVkLXRoZW1lKCR0aGVtZSkgIWdsb2JhbDtcbiAgJF9tYXQtZGVuc2l0eS1nZW5lcmF0ZS1zdHlsZXM6IG5vdCAkZHVwbGljYXRlLWxlZ2FjeS1kZW5zaXR5ICFnbG9iYWw7XG5cbiAgQGNvbnRlbnQ7XG4gICRtYXQtdGhlbWUtaWdub3JlLWR1cGxpY2F0aW9uLXdhcm5pbmdzOiAkb3JpZy1tYXQtdGhlbWUtaWdub3JlLWR1cGxpY2F0aW9uLXdhcm5pbmdzICFnbG9iYWw7XG5cbiAgJF9tYXQtZGVuc2l0eS1nZW5lcmF0ZS1hdC1yb290OiBmYWxzZSAhZ2xvYmFsO1xuICAkX21hdC1kZW5zaXR5LWdlbmVyYXRlLXN0eWxlczogdHJ1ZSAhZ2xvYmFsO1xufVxuXG5cblxuJG1hdC1yaXBwbGUtY29sb3Itb3BhY2l0eTogMC4xO1xuXG5AbWl4aW4gbWF0LXJpcHBsZSgpIHtcblxuICAvLyBUaGUgaG9zdCBlbGVtZW50IG9mIGFuIG1hdC1yaXBwbGUgZGlyZWN0aXZlIHNob3VsZCBhbHdheXMgaGF2ZSBhIHBvc2l0aW9uIG9mIFwiYWJzb2x1dGVcIiBvclxuICAvLyBcInJlbGF0aXZlXCIgc28gdGhhdCB0aGUgcmlwcGxlcyBpbnNpZGUgYXJlIGNvcnJlY3RseSBwb3NpdGlvbmVkIHJlbGF0aXZlbHkgdG8gdGhlIGNvbnRhaW5lci5cbiAgLm1hdC1yaXBwbGUge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAvLyBCeSBkZWZhdWx0LCBldmVyeSByaXBwbGUgY29udGFpbmVyIHNob3VsZCBoYXZlIHBvc2l0aW9uOiByZWxhdGl2ZSBpbiBmYXZvciBvZiBjcmVhdGluZyBhblxuICAgIC8vIGVhc3kgQVBJIGZvciBkZXZlbG9wZXJzIHVzaW5nIHRoZSBNYXRSaXBwbGUgZGlyZWN0aXZlLlxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIC8vIFByb21vdGUgY29udGFpbmVycyB0aGF0IGhhdmUgcmlwcGxlcyB0byBhIG5ldyBsYXllci4gV2Ugd2FudCB0byB0YXJnZXQgYDpub3QoOmVtcHR5KWAsXG4gICAgLy8gYmVjYXVzZSB3ZSBkb24ndCB3YW50IGFsbCByaXBwbGUgY29udGFpbmVycyB0byBoYXZlIHRoZWlyIG93biBsYXllciBzaW5jZSB0aGV5J3JlIHVzZWQgaW4gYVxuICAgIC8vIGxvdCBvZiBwbGFjZXMgYW5kIHRoZSBsYXllciBpcyBvbmx5IHJlbGV2YW50IHdoaWxlIGFuaW1hdGluZy4gTm90ZSB0aGF0IGlkZWFsbHkgd2UnZCB1c2VcbiAgICAvLyB0aGUgYGNvbnRhaW5gIHByb3BlcnR5IGhlcmUgKHNlZSAjMTMxNzUpLCBiZWNhdXNlIGA6ZW1wdHlgIGNhbiBiZSBicm9rZW4gYnkgaGF2aW5nIGV4dHJhXG4gICAgLy8gdGV4dCBpbnNpZGUgdGhlIGVsZW1lbnQsIGJ1dCBpdCBpc24ndCB2ZXJ5IHdlbGwgc3VwcG9ydGVkIHlldC5cbiAgICAmOm5vdCg6ZW1wdHkpIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICB9XG4gIH1cblxuICAubWF0LXJpcHBsZS5tYXQtcmlwcGxlLXVuYm91bmRlZCB7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIH1cblxuICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSwgdHJhbnNmb3JtIDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuXG4gICAgLy8gSW4gaGlnaCBjb250cmFzdCBtb2RlIHRoZSByaXBwbGUgaXMgb3BhcXVlLCBjYXVzaW5nIGl0IHRvIG9ic3RydWN0IHRoZSBjb250ZW50LlxuICAgIEBpbmNsdWRlIGNkay1oaWdoLWNvbnRyYXN0KGFjdGl2ZSwgb2ZmKSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuXG4vKiBDb2xvcnMgZm9yIHRoZSByaXBwbGUgZWxlbWVudHMuKi9cbkBtaXhpbiBtYXQtcmlwcGxlLWNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRmb3JlZ3JvdW5kOiBtYXBfZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuICAkZm9yZWdyb3VuZC1iYXNlOiBtYXBfZ2V0KCRmb3JlZ3JvdW5kLCBiYXNlKTtcblxuICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAvLyBJZiB0aGUgcmlwcGxlIGNvbG9yIGlzIHJlc29sdmVzIHRvIGEgY29sb3IgKnR5cGUqLCB3ZSBjYW4gdXNlIGl0IGRpcmVjdGx5LCBvdGhlcndpc2VcbiAgICAvLyAoZS5nLiBpdCByZXNvbHZlcyB0byBhIENTUyB2YXJpYWJsZSkgd2UgZmFsbCBiYWNrIHRvIHVzaW5nIHRoZSBjb2xvciBhbmQgc2V0dGluZyBhbiBvcGFjaXR5LlxuICAgIEBpZiAodHlwZS1vZigkZm9yZWdyb3VuZC1iYXNlKSA9PSBjb2xvcikge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkZm9yZWdyb3VuZC1iYXNlLCAkbWF0LXJpcHBsZS1jb2xvci1vcGFjaXR5KTtcbiAgICB9XG4gICAgQGVsc2Uge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGZvcmVncm91bmQtYmFzZTtcbiAgICAgIG9wYWNpdHk6ICRtYXQtcmlwcGxlLWNvbG9yLW9wYWNpdHk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtcmlwcGxlLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiBfbWF0LWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIF9tYXQtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtcmlwcGxlJykge1xuICAgICRjb2xvcjogbWF0LWdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LXJpcHBsZS1jb2xvcigkY29sb3IpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gVGhpcyBtaXhpbiBlbnN1cmVzIGFuIGVsZW1lbnQgc3BhbnMgdG8gZmlsbCB0aGUgbmVhcmVzdCBhbmNlc3RvciB3aXRoIGRlZmluZWQgcG9zaXRpb25pbmcuXG5AbWl4aW4gbWF0LWZpbGwge1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuXG4vLy8gTWl4aW4gdGhhdCB0dXJucyBvbiBzdHJvbmcgZm9jdXMgaW5kaWNhdG9ycy5cbi8vL1xuLy8vIEBleGFtcGxlXG4vLy8gICAubXktYXBwIHtcbi8vLyAgICAgQGluY2x1ZGUgbWF0LXN0cm9uZy1mb2N1cy1pbmRpY2F0b3JzKCRjb25maWcpO1xuLy8vICAgfVxuQG1peGluIG1hdC1zdHJvbmctZm9jdXMtaW5kaWNhdG9ycygkY29uZmlnOiAoKSkge1xuICAvLyBEZWZhdWx0IGZvY3VzIGluZGljYXRvciBjb25maWcuXG4gICRkZWZhdWx0LWNvbmZpZzogKFxuICAgIGJvcmRlci1zdHlsZTogc29saWQsXG4gICAgYm9yZGVyLXdpZHRoOiAzcHgsXG4gICAgYm9yZGVyLXJhZGl1czogNHB4LFxuICApO1xuXG4gIC8vIE1lcmdlIGRlZmF1bHQgY29uZmlnIHdpdGggdXNlciBjb25maWcuXG4gICRjb25maWc6IG1hcC1tZXJnZSgkZGVmYXVsdC1jb25maWcsICRjb25maWcpO1xuICAkYm9yZGVyLXN0eWxlOiBtYXAtZ2V0KCRjb25maWcsIGJvcmRlci1zdHlsZSk7XG4gICRib3JkZXItd2lkdGg6IG1hcC1nZXQoJGNvbmZpZywgYm9yZGVyLXdpZHRoKTtcbiAgJGJvcmRlci1yYWRpdXM6IG1hcC1nZXQoJGNvbmZpZywgYm9yZGVyLXJhZGl1cyk7XG5cbiAgLy8gQmFzZSBzdHlsZXMgZm9yIGZvY3VzIGluZGljYXRvcnMuXG4gIC5tYXQtZm9jdXMtaW5kaWNhdG9yOjpiZWZvcmUge1xuICAgIEBpbmNsdWRlIG1hdC1maWxsKCk7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBib3JkZXI6ICRib3JkZXItd2lkdGggJGJvcmRlci1zdHlsZSB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAgfVxuXG4gIC8vIEJ5IGRlZmF1bHQsIGFsbCBmb2N1cyBpbmRpY2F0b3JzIGFyZSBmbHVzaCB3aXRoIHRoZSBib3VuZGluZyBib3ggb2YgdGhlaXJcbiAgLy8gaG9zdCBlbGVtZW50LiBGb3IgcGFydGljdWxhciBlbGVtZW50cyAobGlzdGVkIGJlbG93KSwgZGVmYXVsdCBpbnNldC9vZmZzZXRcbiAgLy8gdmFsdWVzIGFyZSBuZWNlc3NhcnkgdG8gZW5zdXJlIHRoYXQgdGhlIGZvY3VzIGluZGljYXRvciBpcyBzdWZmaWNpZW50bHlcbiAgLy8gY29udHJhc3RpdmUgYW5kIHJlbmRlcnMgYXBwcm9wcmlhdGVseS5cblxuICAubWF0LWZvY3VzLWluZGljYXRvci5tYXQtZmxhdC1idXR0b246OmJlZm9yZSxcbiAgLm1hdC1mb2N1cy1pbmRpY2F0b3IubWF0LXJhaXNlZC1idXR0b246OmJlZm9yZSxcbiAgLm1hdC1mb2N1cy1pbmRpY2F0b3IubWF0LWZhYjo6YmVmb3JlLFxuICAubWF0LWZvY3VzLWluZGljYXRvci5tYXQtbWluaS1mYWI6OmJlZm9yZSxcbiAgLm1hdC1mb2N1cy1pbmRpY2F0b3IubWF0LWNoaXA6OmJlZm9yZSxcbiAgLm1hdC1mb2N1cy1pbmRpY2F0b3IubWF0LXNvcnQtaGVhZGVyLWNvbnRhaW5lcjo6YmVmb3JlIHtcbiAgICBtYXJnaW46IC0oJGJvcmRlci13aWR0aCArIDJweCk7XG4gIH1cblxuICAubWF0LWZvY3VzLWluZGljYXRvci5tYXQtc3Ryb2tlZC1idXR0b246OmJlZm9yZSxcbiAgLm1hdC1mb2N1cy1pbmRpY2F0b3IubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50OjpiZWZvcmUge1xuICAgIG1hcmdpbjogLSgkYm9yZGVyLXdpZHRoICsgM3B4KTtcbiAgfVxuXG4gIC5tYXQtZm9jdXMtaW5kaWNhdG9yLm1hdC10YWItbGluazo6YmVmb3JlLFxuICAubWF0LWZvY3VzLWluZGljYXRvci5tYXQtdGFiLWxhYmVsOjpiZWZvcmUge1xuICAgIG1hcmdpbjogNXB4O1xuICB9XG5cbiAgLy8gUmVuZGVyIHRoZSBmb2N1cyBpbmRpY2F0b3Igb24gZm9jdXMuIERlZmluaW5nIGEgcHNldWRvIGVsZW1lbnQnc1xuICAvLyBjb250ZW50IHdpbGwgY2F1c2UgaXQgdG8gcmVuZGVyLlxuXG4gIC8vIENoZWNrYm94ZXMsIHJhZGlvcywgYW5kIHNsaWRlIHRvZ2dsZXMgcmVuZGVyIGZvY3VzIGluZGljYXRvcnMgd2hlbiB0aGVcbiAgLy8gYXNzb2NpYXRlZCB2aXN1YWxseS1oaWRkZW4gaW5wdXQgaXMgZm9jdXNlZC5cbiAgLm1hdC1jaGVja2JveC1pbnB1dDpmb2N1cyB+IC5tYXQtZm9jdXMtaW5kaWNhdG9yOjpiZWZvcmUsXG4gIC5tYXQtcmFkaW8taW5wdXQ6Zm9jdXMgfiAubWF0LWZvY3VzLWluZGljYXRvcjo6YmVmb3JlLFxuICAubWF0LXNsaWRlLXRvZ2dsZS1pbnB1dDpmb2N1cyB+IC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iLWNvbnRhaW5lciAubWF0LWZvY3VzLWluZGljYXRvcjo6YmVmb3JlLFxuXG4gIC8vIEZvciBvcHRpb25zLCByZW5kZXIgdGhlIGZvY3VzIGluZGljYXRvciB3aGVuIHRoZSBjbGFzcyAubWF0LWFjdGl2ZVxuICAvLyBpcyBwcmVzZW50LlxuICAubWF0LWZvY3VzLWluZGljYXRvci5tYXQtb3B0aW9uLm1hdC1hY3RpdmU6OmJlZm9yZSxcblxuICAvLyBGb3IgY2FsZW5kYXIgY2VsbHMsIHJlbmRlciB0aGUgZm9jdXMgaW5kaWNhdG9yIHdoZW4gdGhlIHBhcmVudCBjZWxsIGlzXG4gIC8vIGZvY3VzZWQuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1jZWxsOmZvY3VzIC5tYXQtZm9jdXMtaW5kaWNhdG9yOjpiZWZvcmUsXG5cbiAgLy8gRm9yIGFsbCBvdGhlciBjb21wb25lbnRzLCByZW5kZXIgdGhlIGZvY3VzIGluZGljYXRvciBvbiBmb2N1cy5cbiAgLm1hdC1mb2N1cy1pbmRpY2F0b3I6Zm9jdXM6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gIH1cbn1cblxuLy8gTWl4aW4gdGhhdCBhcHBsaWVzIHRoZSBib3JkZXIgY29sb3IgZm9yIHRoZSBmb2N1cyBpbmRpY2F0b3JzLlxuQG1peGluIF9tYXQtc3Ryb25nLWZvY3VzLWluZGljYXRvcnMtYm9yZGVyLWNvbG9yKCRjb2xvcikge1xuICAubWF0LWZvY3VzLWluZGljYXRvcjo6YmVmb3JlIHtcbiAgICBib3JkZXItY29sb3I6ICRjb2xvcjtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXN0cm9uZy1mb2N1cy1pbmRpY2F0b3JzLWNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gIEBpbmNsdWRlIF9tYXQtc3Ryb25nLWZvY3VzLWluZGljYXRvcnMtYm9yZGVyLWNvbG9yKG1hdC1jb2xvcihtYXBfZ2V0KCRjb25maWcsIHByaW1hcnkpKSk7XG59XG5cbi8vLyBNaXhpbiB0aGF0IHNldHMgdGhlIGNvbG9yIG9mIHRoZSBmb2N1cyBpbmRpY2F0b3JzLlxuLy8vXG4vLy8gQHBhcmFtIHtjb2xvcnxtYXB9ICR0aGVtZS1vci1jb2xvclxuLy8vICAgSWYgdGhlbWUsIGZvY3VzIGluZGljYXRvcnMgYXJlIHNldCB0byB0aGUgcHJpbWFyeSBjb2xvciBvZiB0aGUgdGhlbWUuIElmXG4vLy8gICBjb2xvciwgZm9jdXMgaW5kaWNhdG9ycyBhcmUgc2V0IHRvIHRoYXQgY29sb3IuXG4vLy9cbi8vLyBAZXhhbXBsZVxuLy8vICAgLmRlbW8tZGFyay10aGVtZSB7XG4vLy8gICAgIEBpbmNsdWRlIG1hdC1zdHJvbmctZm9jdXMtaW5kaWNhdG9ycy10aGVtZSgkZGFyay10aGVtZS1tYXApO1xuLy8vICAgfVxuLy8vXG4vLy8gQGV4YW1wbGVcbi8vLyAgIC5kZW1vLXJlZC10aGVtZSB7XG4vLy8gICAgIEBpbmNsdWRlIG1hdC1zdHJvbmctZm9jdXMtaW5kaWNhdG9ycy10aGVtZSgjZjAwKTtcbi8vLyAgIH1cbi8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXRlcmlhbC90aGVtZS1taXhpbi1hcGkgKi9cbkBtaXhpbiBtYXQtc3Ryb25nLWZvY3VzLWluZGljYXRvcnMtdGhlbWUoJHRoZW1lLW9yLWNvbG9yKSB7XG4gIEBpZiB0eXBlLW9mKCR0aGVtZS1vci1jb2xvcikgIT0gJ21hcCcge1xuICAgIEBpbmNsdWRlIF9tYXQtc3Ryb25nLWZvY3VzLWluZGljYXRvcnMtYm9yZGVyLWNvbG9yKCR0aGVtZS1vci1jb2xvcik7XG4gIH1cbiAgQGVsc2Uge1xuICAgICR0aGVtZTogX21hdC1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvcik7XG4gICAgQGluY2x1ZGUgX21hdC1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1zdHJvbmctZm9jdXMtaW5kaWNhdG9ycycpIHtcbiAgICAgICRjb2xvcjogbWF0LWdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICAgIEBpbmNsdWRlIG1hdC1zdHJvbmctZm9jdXMtaW5kaWNhdG9ycy1jb2xvcigkY29sb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBNaXhpbiB0aGF0IGVuc3VyZXMgZm9jdXMgaW5kaWNhdG9yIGhvc3QgZWxlbWVudHMgYXJlIHBvc2l0aW9uZWQgc28gdGhhdCB0aGUgZm9jdXMgaW5kaWNhdG9yXG4vLyBwc2V1ZG8gZWxlbWVudCB3aXRoaW4gaXMgcG9zaXRpb25lZCByZWxhdGl2ZSB0byB0aGUgaG9zdC4gUHJpdmF0ZSBtaXhpbiBpbmNsdWRlZCB3aXRoaW5cbi8vIGBtYXQtY29yZWAuXG5AbWl4aW4gX21hdC1zdHJvbmctZm9jdXMtaW5kaWNhdG9ycy1wb3NpdGlvbmluZygpIHtcbiAgLm1hdC1mb2N1cy1pbmRpY2F0b3Ige1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxufVxuXG5cblxuXG4vLyBVdGlsaXR5IGZvciBmZXRjaGluZyBhIG5lc3RlZCB2YWx1ZSBmcm9tIGEgdHlwb2dyYXBoeSBjb25maWcuXG5AZnVuY3Rpb24gX21hdC1nZXQtdHlwZS12YWx1ZSgkY29uZmlnLCAkbGV2ZWwsICRuYW1lKSB7XG4gIEByZXR1cm4gbWFwLWdldChtYXAtZ2V0KCRjb25maWcsICRsZXZlbCksICRuYW1lKTtcbn1cblxuLy8gR2V0cyB0aGUgZm9udCBzaXplIGZvciBhIGxldmVsIGluc2lkZSBhIHR5cG9ncmFwaHkgY29uZmlnLlxuQGZ1bmN0aW9uIG1hdC1mb250LXNpemUoJGNvbmZpZywgJGxldmVsKSB7XG4gIEByZXR1cm4gX21hdC1nZXQtdHlwZS12YWx1ZSgkY29uZmlnLCAkbGV2ZWwsIGZvbnQtc2l6ZSk7XG59XG5cbi8vIEdldHMgdGhlIGxpbmUgaGVpZ2h0IGZvciBhIGxldmVsIGluc2lkZSBhIHR5cG9ncmFwaHkgY29uZmlnLlxuQGZ1bmN0aW9uIG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCAkbGV2ZWwpIHtcbiAgQHJldHVybiBfbWF0LWdldC10eXBlLXZhbHVlKCRjb25maWcsICRsZXZlbCwgbGluZS1oZWlnaHQpO1xufVxuXG4vLyBHZXRzIHRoZSBmb250IHdlaWdodCBmb3IgYSBsZXZlbCBpbnNpZGUgYSB0eXBvZ3JhcGh5IGNvbmZpZy5cbkBmdW5jdGlvbiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgJGxldmVsKSB7XG4gIEByZXR1cm4gX21hdC1nZXQtdHlwZS12YWx1ZSgkY29uZmlnLCAkbGV2ZWwsIGZvbnQtd2VpZ2h0KTtcbn1cblxuLy8gR2V0cyB0aGUgbGV0dGVyIHNwYWNpbmcgZm9yIGEgbGV2ZWwgaW5zaWRlIGEgdHlwb2dyYXBoeSBjb25maWcuXG5AZnVuY3Rpb24gbWF0LWxldHRlci1zcGFjaW5nKCRjb25maWcsICRsZXZlbCkge1xuICBAcmV0dXJuIF9tYXQtZ2V0LXR5cGUtdmFsdWUoJGNvbmZpZywgJGxldmVsLCBsZXR0ZXItc3BhY2luZyk7XG59XG5cbi8vIEdldHMgdGhlIGZvbnQtZmFtaWx5IGZyb20gYSB0eXBvZ3JhcGh5IGNvbmZpZyBhbmQgcmVtb3ZlcyB0aGUgcXVvdGVzIGFyb3VuZCBpdC5cbkBmdW5jdGlvbiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgJGxldmVsOiBudWxsKSB7XG4gICRmb250LWZhbWlseTogbWFwLWdldCgkY29uZmlnLCBmb250LWZhbWlseSk7XG5cbiAgQGlmICRsZXZlbCAhPSBudWxsIHtcbiAgICAkZm9udC1mYW1pbHk6IF9tYXQtZ2V0LXR5cGUtdmFsdWUoJGNvbmZpZywgJGxldmVsLCBmb250LWZhbWlseSk7XG4gIH1cblxuICAvLyBHdWFyZCBhZ2FpbnN0IHVucXVvdGluZyBub24tc3RyaW5nIHZhbHVlcywgYmVjYXVzZSBpdCdzIGRlcHJlY2F0ZWQuXG4gIEByZXR1cm4gaWYodHlwZS1vZigkZm9udC1mYW1pbHkpID09IHN0cmluZywgdW5xdW90ZSgkZm9udC1mYW1pbHkpLCAkZm9udC1mYW1pbHkpO1xufVxuXG4vLyBPdXRwdXRzIHRoZSBzaG9ydGhhbmQgYGZvbnRgIENTUyBwcm9wZXJ0eSwgYmFzZWQgb24gYSBzZXQgb2YgdHlwb2dyYXBoeSB2YWx1ZXMuIEZhbGxzIGJhY2sgdG9cbi8vIHRoZSBpbmRpdmlkdWFsIHByb3BlcnRpZXMgaWYgYSB2YWx1ZSB0aGF0IGlzbid0IGFsbG93ZWQgaW4gdGhlIHNob3J0aGFuZCBpcyBwYXNzZWQgaW4uXG5AbWl4aW4gbWF0LXR5cG9ncmFwaHktZm9udC1zaG9ydGhhbmQoJGZvbnQtc2l6ZSwgJGZvbnQtd2VpZ2h0LCAkbGluZS1oZWlnaHQsICRmb250LWZhbWlseSkge1xuICAvLyBJZiBhbnkgb2YgdGhlIHZhbHVlcyBhcmUgc2V0IHRvIGBpbmhlcml0YCwgd2UgY2FuJ3QgdXNlIHRoZSBzaG9ydGhhbmRcbiAgLy8gc28gd2UgZmFsbCBiYWNrIHRvIHBhc3NpbmcgaW4gdGhlIGluZGl2aWR1YWwgcHJvcGVydGllcy5cbiAgQGlmICgkZm9udC1zaXplID09IGluaGVyaXQgb3JcbiAgICAgICAkZm9udC13ZWlnaHQgPT0gaW5oZXJpdCBvclxuICAgICAgICRsaW5lLWhlaWdodCA9PSBpbmhlcml0IG9yXG4gICAgICAgJGZvbnQtZmFtaWx5ID09IGluaGVyaXQgb3JcbiAgICAgICAkZm9udC1zaXplID09IG51bGwgb3JcbiAgICAgICAkZm9udC13ZWlnaHQgPT0gbnVsbCBvclxuICAgICAgICRsaW5lLWhlaWdodCA9PSBudWxsIG9yXG4gICAgICAgJGZvbnQtZmFtaWx5ID09IG51bGwpIHtcblxuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xuICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XG4gICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgfVxuICBAZWxzZSB7XG4gICAgLy8gT3RoZXJ3aXNlIHVzZSB0aGUgc2hvcnRoYW5kIGBmb250YCwgYmVjYXVzZSBpdCdzIHRoZSBsZWFzdCBhbW91bnQgb2YgYnl0ZXMuIE5vdGVcbiAgICAvLyB0aGF0IHdlIG5lZWQgdG8gdXNlIGludGVycG9sYXRpb24gZm9yIGBmb250LXNpemUvbGluZS1oZWlnaHRgIGluIG9yZGVyIHRvIHByZXZlbnRcbiAgICAvLyBTYXNzIGZyb20gZGl2aWRpbmcgdGhlIHR3byB2YWx1ZXMuXG4gICAgZm9udDogJGZvbnQtd2VpZ2h0ICN7JGZvbnQtc2l6ZX0vI3skbGluZS1oZWlnaHR9ICRmb250LWZhbWlseTtcbiAgfVxufVxuXG4vLyBDb252ZXJ0cyBhIHR5cG9ncmFwaHkgbGV2ZWwgaW50byBDU1Mgc3R5bGVzLlxuQG1peGluIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCAkbGV2ZWwpIHtcbiAgJGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCAkbGV2ZWwpO1xuICAkZm9udC13ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCAkbGV2ZWwpO1xuICAkbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCAkbGV2ZWwpO1xuICAkZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCAkbGV2ZWwpO1xuXG4gIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWZvbnQtc2hvcnRoYW5kKCRmb250LXNpemUsICRmb250LXdlaWdodCwgJGxpbmUtaGVpZ2h0LCAkZm9udC1mYW1pbHkpO1xuICBsZXR0ZXItc3BhY2luZzogbWF0LWxldHRlci1zcGFjaW5nKCRjb25maWcsICRsZXZlbCk7XG59XG5cblxuQG1peGluIG1hdC1vcHRpb24tY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuICAkcHJpbWFyeTogbWFwLWdldCgkY29uZmlnLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkY29uZmlnLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkY29uZmlnLCB3YXJuKTtcblxuICAubWF0LW9wdGlvbiB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgICAmOmhvdmVyOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCksXG4gICAgJjpmb2N1czpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIpO1xuICAgIH1cblxuICAgIC8vIEluIG11bHRpcGxlIG1vZGUgdGhlcmUgaXMgYSBjaGVja2JveCB0byBzaG93IHRoYXQgdGhlIG9wdGlvbiBpcyBzZWxlY3RlZC5cbiAgICAmLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tbXVsdGlwbGUpOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3Zlcik7XG4gICAgfVxuXG4gICAgJi5tYXQtYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIpO1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgfVxuXG4gICAgJi5tYXQtb3B0aW9uLWRpc2FibGVkIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGhpbnQtdGV4dCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1wcmltYXJ5IC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtYWNjZW50IC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQsIHRleHQpO1xuICB9XG5cbiAgLm1hdC13YXJuIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuLCB0ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LW9wdGlvbi10eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgLm1hdC1vcHRpb24ge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBzdWJoZWFkaW5nLTIpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gX21hdC1vcHRpb24tZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gbWF0LW9wdGlvbi10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogX21hdC1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSBfbWF0LWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LW9wdGlvbicpIHtcbiAgICAkY29sb3I6IG1hdC1nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IG1hdC1nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1vcHRpb24tY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgX21hdC1vcHRpb24tZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1vcHRpb24tdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LW9wdGdyb3VwLWNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtb3B0Z3JvdXAtbGFiZWwge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtb3B0Z3JvdXAtZGlzYWJsZWQgLm1hdC1vcHRncm91cC1sYWJlbCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgaGludC10ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LW9wdGdyb3VwLXR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAubWF0LW9wdGdyb3VwLWxhYmVsIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgYm9keS0yKTtcbiAgfVxufVxuXG5AbWl4aW4gX21hdC1vcHRncm91cC1kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiBtYXQtb3B0Z3JvdXAtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IF9tYXQtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgX21hdC1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1vcHRncm91cCcpIHtcbiAgICAkY29sb3I6IG1hdC1nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IG1hdC1nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1vcHRncm91cC1jb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LW9wdGdyb3VwLWRlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtb3B0Z3JvdXAtdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG5cblxuXG5cbkBtaXhpbiBtYXQtcHNldWRvLWNoZWNrYm94LWNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCRjb25maWcsIGlzLWRhcmspO1xuICAkcHJpbWFyeTogbWFwLWdldCgkY29uZmlnLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkY29uZmlnLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkY29uZmlnLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG5cbiAgLy8gTk9URSh0cmF2aXNrYXVmbWFuKTogV2hpbGUgdGhlIHNwZWMgY2FsbHMgZm9yIHRyYW5zbHVjZW50IGJsYWNrcy93aGl0ZXMgZm9yIGRpc2FibGVkIGNvbG9ycyxcbiAgLy8gdGhpcyBkb2VzIG5vdCB3b3JrIHdlbGwgd2l0aCBlbGVtZW50cyBsYXllcmVkIG9uIHRvcCBvZiBvbmUgYW5vdGhlci4gVG8gZ2V0IGFyb3VuZCB0aGlzIHdlXG4gIC8vIGJsZW5kIHRoZSBjb2xvcnMgdG9nZXRoZXIgYmFzZWQgb24gdGhlIGJhc2UgY29sb3IgYW5kIHRoZSB0aGVtZSBiYWNrZ3JvdW5kLlxuICAkd2hpdGUtMzBwY3Qtb3BhY2l0eS1vbi1kYXJrOiAjNjg2ODY4O1xuICAkYmxhY2stMjZwY3Qtb3BhY2l0eS1vbi1saWdodDogI2IwYjBiMDtcbiAgJGRpc2FibGVkLWNvbG9yOiBpZigkaXMtZGFyay10aGVtZSwgJHdoaXRlLTMwcGN0LW9wYWNpdHktb24tZGFyaywgJGJsYWNrLTI2cGN0LW9wYWNpdHktb24tbGlnaHQpO1xuICAkY29sb3JlZC1ib3gtc2VsZWN0b3I6ICcubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLCAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlJztcblxuICAubWF0LXBzZXVkby1jaGVja2JveCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcihtYXAtZ2V0KCRjb25maWcsIGZvcmVncm91bmQpLCBzZWNvbmRhcnktdGV4dCk7XG5cbiAgICAmOjphZnRlciB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBiYWNrZ3JvdW5kKTtcbiAgICB9XG4gIH1cblxuICAubWF0LXBzZXVkby1jaGVja2JveC1kaXNhYmxlZCB7XG4gICAgY29sb3I6ICRkaXNhYmxlZC1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtcHJpbWFyeSAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuICAubWF0LXByaW1hcnkgLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKG1hcC1nZXQoJGNvbmZpZywgcHJpbWFyeSkpO1xuICB9XG5cbiAgLy8gRGVmYXVsdCB0byB0aGUgYWNjZW50IGNvbG9yLiBOb3RlIHRoYXQgdGhlIHBzZXVkbyBjaGVja2JveGVzIGFyZSBtZWFudCB0byBpbmhlcml0IHRoZVxuICAvLyB0aGVtZSBmcm9tIHRoZWlyIHBhcmVudCwgcmF0aGVyIHRoYW4gaW1wbGVtZW50aW5nIHRoZWlyIG93biB0aGVtaW5nLCB3aGljaCBpcyB3aHkgd2VcbiAgLy8gZG9uJ3QgYXR0YWNoIHRvIHRoZSBgbWF0LSpgIGNsYXNzZXMuIEFsc28gbm90ZSB0aGF0IHRoaXMgbmVlZHMgdG8gYmUgYmVsb3cgYC5tYXQtcHJpbWFyeWBcbiAgLy8gaW4gb3JkZXIgdG8gYWxsb3cgZm9yIHRoZSBjb2xvciB0byBiZSBvdmVyd3JpdHRlbiBpZiB0aGUgY2hlY2tib3ggaXMgaW5zaWRlIGEgcGFyZW50IHRoYXRcbiAgLy8gaGFzIGBtYXQtYWNjZW50YCBhbmQgaXMgcGxhY2VkIGluc2lkZSBhbm90aGVyIHBhcmVudCB0aGF0IGhhcyBgbWF0LXByaW1hcnlgLlxuICAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuICAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlLFxuICAubWF0LWFjY2VudCAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuICAubWF0LWFjY2VudCAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IobWFwLWdldCgkY29uZmlnLCBhY2NlbnQpKTtcbiAgfVxuXG4gIC5tYXQtd2FybiAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuICAubWF0LXdhcm4gLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKG1hcC1nZXQoJGNvbmZpZywgd2FybikpO1xuICB9XG5cbiAgLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCxcbiAgLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSB7XG4gICAgJi5tYXQtcHNldWRvLWNoZWNrYm94LWRpc2FibGVkIHtcbiAgICAgIGJhY2tncm91bmQ6ICRkaXNhYmxlZC1jb2xvcjtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1wc2V1ZG8tY2hlY2tib3gtdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gX21hdC1wc2V1ZG8tY2hlY2tib3gtZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gbWF0LXBzZXVkby1jaGVja2JveC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogX21hdC1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSBfbWF0LWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LXBzZXVkby1jaGVja2JveCcpIHtcbiAgICAkY29sb3I6IG1hdC1nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IG1hdC1nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1wc2V1ZG8tY2hlY2tib3gtY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgX21hdC1wc2V1ZG8tY2hlY2tib3gtZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1wc2V1ZG8tY2hlY2tib3gtdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBSZXByZXNlbnRzIGEgdHlwb2dyYXBoeSBsZXZlbCBmcm9tIHRoZSBNYXRlcmlhbCBkZXNpZ24gc3BlYy5cbkBmdW5jdGlvbiBtYXQtdHlwb2dyYXBoeS1sZXZlbChcbiAgJGZvbnQtc2l6ZSxcbiAgJGxpbmUtaGVpZ2h0OiAkZm9udC1zaXplLFxuICAkZm9udC13ZWlnaHQ6IDQwMCxcbiAgJGZvbnQtZmFtaWx5OiBudWxsLFxuICAkbGV0dGVyLXNwYWNpbmc6IG5vcm1hbCkge1xuXG4gIEByZXR1cm4gKFxuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSxcbiAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LFxuICAgIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQsXG4gICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseSxcbiAgICBsZXR0ZXItc3BhY2luZzogJGxldHRlci1zcGFjaW5nXG4gICk7XG59XG5cbi8vIFJlcHJlc2VudHMgYSBjb2xsZWN0aW9uIG9mIHR5cG9ncmFwaHkgbGV2ZWxzLlxuLy8gRGVmYXVsdHMgY29tZSBmcm9tIGh0dHBzOi8vbWF0ZXJpYWwuaW8vZ3VpZGVsaW5lcy9zdHlsZS90eXBvZ3JhcGh5Lmh0bWxcbi8vIE5vdGU6IFRoZSBzcGVjIGRvZXNuJ3QgbWVudGlvbiBsZXR0ZXIgc3BhY2luZy4gVGhlIHZhbHVlcyBoZXJlIGNvbWUgZnJvbVxuLy8gZXllYmFsbGluZyBpdCB1bnRpbCBpdCBsb29rZWQgZXhhY3RseSBsaWtlIHRoZSBzcGVjIGV4YW1wbGVzLlxuQGZ1bmN0aW9uIG1hdC10eXBvZ3JhcGh5LWNvbmZpZyhcbiAgJGZvbnQtZmFtaWx5OiAgICdSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZicsXG4gICRkaXNwbGF5LTQ6ICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgxMTJweCwgMTEycHgsIDMwMCwgJGxldHRlci1zcGFjaW5nOiAtMC4wNWVtKSxcbiAgJGRpc3BsYXktMzogICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDU2cHgsIDU2cHgsIDQwMCwgJGxldHRlci1zcGFjaW5nOiAtMC4wMmVtKSxcbiAgJGRpc3BsYXktMjogICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDQ1cHgsIDQ4cHgsIDQwMCwgJGxldHRlci1zcGFjaW5nOiAtMC4wMDVlbSksXG4gICRkaXNwbGF5LTE6ICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgzNHB4LCA0MHB4LCA0MDApLFxuICAkaGVhZGxpbmU6ICAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMjRweCwgMzJweCwgNDAwKSxcbiAgJHRpdGxlOiAgICAgICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDIwcHgsIDMycHgsIDUwMCksXG4gICRzdWJoZWFkaW5nLTI6ICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgxNnB4LCAyOHB4LCA0MDApLFxuICAkc3ViaGVhZGluZy0xOiAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMTVweCwgMjRweCwgNDAwKSxcbiAgJGJvZHktMjogICAgICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDE0cHgsIDI0cHgsIDUwMCksXG4gICRib2R5LTE6ICAgICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgxNHB4LCAyMHB4LCA0MDApLFxuICAkY2FwdGlvbjogICAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMTJweCwgMjBweCwgNDAwKSxcbiAgJGJ1dHRvbjogICAgICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDE0cHgsIDE0cHgsIDUwMCksXG4gIC8vIExpbmUtaGVpZ2h0IG11c3QgYmUgdW5pdC1sZXNzIGZyYWN0aW9uIG9mIHRoZSBmb250LXNpemUuXG4gICRpbnB1dDogICAgICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbChpbmhlcml0LCAxLjEyNSwgNDAwKVxuKSB7XG5cbiAgLy8gRGVjbGFyZSBhbiBpbml0aWFsIG1hcCB3aXRoIGFsbCBvZiB0aGUgbGV2ZWxzLlxuICAkY29uZmlnOiAoXG4gICAgZGlzcGxheS00OiAgICAgICRkaXNwbGF5LTQsXG4gICAgZGlzcGxheS0zOiAgICAgICRkaXNwbGF5LTMsXG4gICAgZGlzcGxheS0yOiAgICAgICRkaXNwbGF5LTIsXG4gICAgZGlzcGxheS0xOiAgICAgICRkaXNwbGF5LTEsXG4gICAgaGVhZGxpbmU6ICAgICAgICRoZWFkbGluZSxcbiAgICB0aXRsZTogICAgICAgICAgJHRpdGxlLFxuICAgIHN1YmhlYWRpbmctMjogICAkc3ViaGVhZGluZy0yLFxuICAgIHN1YmhlYWRpbmctMTogICAkc3ViaGVhZGluZy0xLFxuICAgIGJvZHktMjogICAgICAgICAkYm9keS0yLFxuICAgIGJvZHktMTogICAgICAgICAkYm9keS0xLFxuICAgIGNhcHRpb246ICAgICAgICAkY2FwdGlvbixcbiAgICBidXR0b246ICAgICAgICAgJGJ1dHRvbixcbiAgICBpbnB1dDogICAgICAgICAgJGlucHV0LFxuICApO1xuXG4gIC8vIExvb3AgdGhyb3VnaCB0aGUgbGV2ZWxzIGFuZCBzZXQgdGhlIGBmb250LWZhbWlseWAgb2YgdGhlIG9uZXMgdGhhdCBkb24ndCBoYXZlIG9uZSB0byB0aGUgYmFzZS5cbiAgLy8gTm90ZSB0aGF0IFNhc3MgY2FuJ3QgbW9kaWZ5IG1hcHMgaW4gcGxhY2UsIHdoaWNoIG1lYW5zIHRoYXQgd2UgbmVlZCB0byBtZXJnZSBhbmQgcmUtYXNzaWduLlxuICBAZWFjaCAka2V5LCAkbGV2ZWwgaW4gJGNvbmZpZyB7XG4gICAgQGlmIG1hcC1nZXQoJGxldmVsLCBmb250LWZhbWlseSkgPT0gbnVsbCB7XG4gICAgICAkbmV3LWxldmVsOiBtYXAtbWVyZ2UoJGxldmVsLCAoZm9udC1mYW1pbHk6ICRmb250LWZhbWlseSkpO1xuICAgICAgJGNvbmZpZzogbWFwLW1lcmdlKCRjb25maWcsICgka2V5OiAkbmV3LWxldmVsKSk7XG4gICAgfVxuICB9XG5cbiAgLy8gQWRkIHRoZSBiYXNlIGZvbnQgZmFtaWx5IHRvIHRoZSBjb25maWcuXG4gIEByZXR1cm4gbWFwLW1lcmdlKCRjb25maWcsIChmb250LWZhbWlseTogJGZvbnQtZmFtaWx5KSk7XG59XG5cbi8vIEFkZHMgdGhlIGJhc2UgdHlwb2dyYXBoeSBzdHlsZXMsIGJhc2VkIG9uIGEgY29uZmlnLlxuLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIG1hdGVyaWFsL3RoZW1lLW1peGluLWFwaSAqL1xuQG1peGluIG1hdC1iYXNlLXR5cG9ncmFwaHkoJGNvbmZpZywgJHNlbGVjdG9yOiAnLm1hdC10eXBvZ3JhcGh5Jykge1xuICAubWF0LWgxLCAubWF0LWhlYWRsaW5lLCAjeyRzZWxlY3Rvcn0gaDEge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBoZWFkbGluZSk7XG4gICAgbWFyZ2luOiAwIDAgMTZweDtcbiAgfVxuXG4gIC5tYXQtaDIsIC5tYXQtdGl0bGUsICN7JHNlbGVjdG9yfSBoMiB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIHRpdGxlKTtcbiAgICBtYXJnaW46IDAgMCAxNnB4O1xuICB9XG5cbiAgLm1hdC1oMywgLm1hdC1zdWJoZWFkaW5nLTIsICN7JHNlbGVjdG9yfSBoMyB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIHN1YmhlYWRpbmctMik7XG4gICAgbWFyZ2luOiAwIDAgMTZweDtcbiAgfVxuXG4gIC5tYXQtaDQsIC5tYXQtc3ViaGVhZGluZy0xLCAjeyRzZWxlY3Rvcn0gaDQge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBzdWJoZWFkaW5nLTEpO1xuICAgIG1hcmdpbjogMCAwIDE2cHg7XG4gIH1cblxuICAvLyBOb3RlOiB0aGUgc3BlYyBkb2Vzbid0IGhhdmUgYW55dGhpbmcgdGhhdCB3b3VsZCBjb3JyZXNwb25kIHRvIGg1IGFuZCBoNiwgYnV0IHdlIGFkZCB0aGVzZSBmb3JcbiAgLy8gY29uc2lzdGVuY3kuIFRoZSBmb250IHNpemVzIGNvbWUgZnJvbSB0aGUgQ2hyb21lIHVzZXIgYWdlbnQgc3R5bGVzIHdoaWNoIGhhdmUgaDUgYXQgMC44M2VtXG4gIC8vIGFuZCBoNiBhdCAwLjY3ZW0uXG4gIC5tYXQtaDUsICN7JHNlbGVjdG9yfSBoNSB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktZm9udC1zaG9ydGhhbmQoXG4gICAgICAgLy8gY2FsYyBpcyB1c2VkIGhlcmUgdG8gc3VwcG9ydCBjc3MgdmFyaWFibGVzXG4gICAgICBjYWxjKCN7bWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpfSAqIDAuODMpLFxuICAgICAgbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMSksXG4gICAgICBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgYm9keS0xKSxcbiAgICAgIG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBib2R5LTEpXG4gICAgKTtcblxuICAgIG1hcmdpbjogMCAwIDEycHg7XG4gIH1cblxuICAubWF0LWg2LCAjeyRzZWxlY3Rvcn0gaDYge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWZvbnQtc2hvcnRoYW5kKFxuICAgICAgIC8vIGNhbGMgaXMgdXNlZCBoZXJlIHRvIHN1cHBvcnQgY3NzIHZhcmlhYmxlc1xuICAgICAgY2FsYygje21hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKX0gKiAwLjY3KSxcbiAgICAgIG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTEpLFxuICAgICAgbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGJvZHktMSksXG4gICAgICBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgYm9keS0xKVxuICAgICk7XG5cbiAgICBtYXJnaW46IDAgMCAxMnB4O1xuICB9XG5cbiAgLm1hdC1ib2R5LXN0cm9uZywgLm1hdC1ib2R5LTIge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBib2R5LTIpO1xuICB9XG5cbiAgLm1hdC1ib2R5LCAubWF0LWJvZHktMSwgI3skc2VsZWN0b3J9IHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgYm9keS0xKTtcblxuICAgIHAge1xuICAgICAgbWFyZ2luOiAwIDAgMTJweDtcbiAgICB9XG4gIH1cblxuICAubWF0LXNtYWxsLCAubWF0LWNhcHRpb24ge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBjYXB0aW9uKTtcbiAgfVxuXG4gIC5tYXQtZGlzcGxheS00LCAjeyRzZWxlY3Rvcn0gLm1hdC1kaXNwbGF5LTQge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBkaXNwbGF5LTQpO1xuICAgIG1hcmdpbjogMCAwIDU2cHg7XG4gIH1cblxuICAubWF0LWRpc3BsYXktMywgI3skc2VsZWN0b3J9IC5tYXQtZGlzcGxheS0zIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgZGlzcGxheS0zKTtcbiAgICBtYXJnaW46IDAgMCA2NHB4O1xuICB9XG5cbiAgLm1hdC1kaXNwbGF5LTIsICN7JHNlbGVjdG9yfSAubWF0LWRpc3BsYXktMiB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGRpc3BsYXktMik7XG4gICAgbWFyZ2luOiAwIDAgNjRweDtcbiAgfVxuXG4gIC5tYXQtZGlzcGxheS0xLCAjeyRzZWxlY3Rvcn0gLm1hdC1kaXNwbGF5LTEge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBkaXNwbGF5LTEpO1xuICAgIG1hcmdpbjogMCAwIDY0cHg7XG4gIH1cbn1cblxuXG5cblxuXG5AbWl4aW4gbWF0LWF1dG9jb21wbGV0ZS1jb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG5cbiAgLm1hdC1hdXRvY29tcGxldGUtcGFuZWwge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDQsICRjb25maWcpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgICAvLyBTZWxlY3RlZCBvcHRpb25zIGluIGF1dG9jb21wbGV0ZXMgc2hvdWxkIG5vdCBiZSBncmF5LCBidXQgd2VcbiAgICAvLyBvbmx5IHdhbnQgdG8gb3ZlcnJpZGUgdGhlIGJhY2tncm91bmQgZm9yIHNlbGVjdGVkIG9wdGlvbnMgaWZcbiAgICAvLyB0aGV5IGFyZSAqbm90KiBpbiBob3ZlciBvciBmb2N1cyBzdGF0ZS4gVGhpcyBjaGFuZ2UgaGFzIHRvIGJlXG4gICAgLy8gbWFkZSBoZXJlIGJlY2F1c2UgYmFzZSBvcHRpb24gc3R5bGVzIGFyZSBzaGFyZWQgYmV0d2VlbiB0aGVcbiAgICAvLyBhdXRvY29tcGxldGUgYW5kIHRoZSBzZWxlY3QuXG4gICAgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LWFjdGl2ZSk6bm90KDpob3Zlcikge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcblxuICAgICAgJjpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtYXV0b2NvbXBsZXRlLXR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIF9tYXQtYXV0b2NvbXBsZXRlLWRlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIG1hdC1hdXRvY29tcGxldGUtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IF9tYXQtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgX21hdC1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1hdXRvY29tcGxldGUnKSB7XG4gICAgJGNvbG9yOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiBtYXQtZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtYXV0b2NvbXBsZXRlLWNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtYXV0b2NvbXBsZXRlLWRlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtYXV0b2NvbXBsZXRlLXR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBUaGlzIGNvbnRhaW5zIGFsbCBvZiB0aGUgc3R5bGVzIGZvciB0aGUgYmFkZ2Vcbi8vIHJhdGhlciB0aGFuIGp1c3QgdGhlIGNvbG9yL3RoZW1lIGJlY2F1c2Ugb2Zcbi8vIG5vIHN0eWxlIHNoZWV0IHN1cHBvcnQgZm9yIGRpcmVjdGl2ZXMuXG5cblxuXG5cblxuXG4kbWF0LWJhZGdlLWZvbnQtc2l6ZTogMTJweDtcbiRtYXQtYmFkZ2UtZm9udC13ZWlnaHQ6IDYwMDtcbiRtYXQtYmFkZ2UtZGVmYXVsdC1zaXplOiAyMnB4ICFkZWZhdWx0O1xuJG1hdC1iYWRnZS1zbWFsbC1zaXplOiAkbWF0LWJhZGdlLWRlZmF1bHQtc2l6ZSAtIDY7XG4kbWF0LWJhZGdlLWxhcmdlLXNpemU6ICRtYXQtYmFkZ2UtZGVmYXVsdC1zaXplICsgNjtcblxuLy8gTWl4aW4gZm9yIGJ1aWxkaW5nIG9mZnNldCBnaXZlbiBkaWZmZXJlbnQgc2l6ZXNcbkBtaXhpbiBfbWF0LWJhZGdlLXNpemUoJHNpemUpIHtcbiAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICB3aWR0aDogJHNpemU7XG4gICAgaGVpZ2h0OiAkc2l6ZTtcbiAgICBsaW5lLWhlaWdodDogJHNpemU7XG4gIH1cblxuICAmLm1hdC1iYWRnZS1hYm92ZSB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIHRvcDogLSRzaXplIC8gMjtcbiAgICB9XG4gIH1cblxuICAmLm1hdC1iYWRnZS1iZWxvdyB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIGJvdHRvbTogLSRzaXplIC8gMjtcbiAgICB9XG4gIH1cblxuICAmLm1hdC1iYWRnZS1iZWZvcmUge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICBsZWZ0OiAtJHNpemU7XG4gICAgfVxuICB9XG5cbiAgW2Rpcj0ncnRsJ10gJi5tYXQtYmFkZ2UtYmVmb3JlIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgbGVmdDogYXV0bztcbiAgICAgIHJpZ2h0OiAtJHNpemU7XG4gICAgfVxuICB9XG5cbiAgJi5tYXQtYmFkZ2UtYWZ0ZXIge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICByaWdodDogLSRzaXplO1xuICAgIH1cbiAgfVxuXG4gIFtkaXI9J3J0bCddICYubWF0LWJhZGdlLWFmdGVyIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICBsZWZ0OiAtJHNpemU7XG4gICAgfVxuICB9XG5cbiAgJi5tYXQtYmFkZ2Utb3ZlcmxhcCB7XG4gICAgJi5tYXQtYmFkZ2UtYmVmb3JlIHtcbiAgICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICAgIGxlZnQ6IC0kc2l6ZSAvIDI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgW2Rpcj0ncnRsJ10gJi5tYXQtYmFkZ2UtYmVmb3JlIHtcbiAgICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICAgIGxlZnQ6IGF1dG87XG4gICAgICAgIHJpZ2h0OiAtJHNpemUgLyAyO1xuICAgICAgfVxuICAgIH1cblxuICAgICYubWF0LWJhZGdlLWFmdGVyIHtcbiAgICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICAgIHJpZ2h0OiAtJHNpemUgLyAyO1xuICAgICAgfVxuICAgIH1cblxuICAgIFtkaXI9J3J0bCddICYubWF0LWJhZGdlLWFmdGVyIHtcbiAgICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICBsZWZ0OiAtJHNpemUgLyAyO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWJhZGdlLWNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJGNvbmZpZywgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJGNvbmZpZywgd2Fybik7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCRjb25maWcsIHByaW1hcnkpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuXG4gICAgQGluY2x1ZGUgY2RrLWhpZ2gtY29udHJhc3QoYWN0aXZlLCBvZmYpIHtcbiAgICAgIG91dGxpbmU6IHNvbGlkIDFweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1iYWRnZS1hY2NlbnQge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQsIGRlZmF1bHQtY29udHJhc3QpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYmFkZ2Utd2FybiB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4sIGRlZmF1bHQtY29udHJhc3QpO1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJhZGdlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAubWF0LWJhZGdlLWhpZGRlbiB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1iYWRnZS1kaXNhYmxlZCB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgICRhcHAtYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCAnYmFja2dyb3VuZCcpO1xuICAgICAgJGJhZGdlLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLWJ1dHRvbik7XG5cbiAgICAgIC8vIFRoZSBkaXNhYmxlZCBjb2xvciB1c3VhbGx5IGhhcyBzb21lIGtpbmQgb2Ygb3BhY2l0eSwgYnV0IGJlY2F1c2UgdGhlIGJhZGdlIGlzIG92ZXJsYXllZFxuICAgICAgLy8gb24gdG9wIG9mIHNvbWV0aGluZyBlbHNlLCBpdCB3b24ndCBsb29rIGdvb2QgaWYgaXQncyBvcGFxdWUuIElmIGl0IGlzIGEgY29sb3IgKnR5cGUqLFxuICAgICAgLy8gd2UgY29udmVydCBpdCBpbnRvIGEgc29saWQgY29sb3IgYnkgdGFraW5nIHRoZSBvcGFjaXR5IGZyb20gdGhlIHJnYmEgdmFsdWUgYW5kIHVzaW5nXG4gICAgICAvLyB0aGUgdmFsdWUgdG8gZGV0ZXJtaW5lIHRoZSBwZXJjZW50YWdlIG9mIHRoZSBiYWNrZ3JvdW5kIHRvIHB1dCBpbnRvIGZvcmVncm91bmQgd2hlblxuICAgICAgLy8gbWl4aW5nIHRoZSBjb2xvcnMgdG9nZXRoZXIuXG4gICAgICBAaWYgKHR5cGUtb2YoJGJhZGdlLWNvbG9yKSA9PSBjb2xvciBhbmQgdHlwZS1vZigkYXBwLWJhY2tncm91bmQpID09IGNvbG9yKSB7XG4gICAgICAgICRiYWRnZS1vcGFjaXR5OiBvcGFjaXR5KCRiYWRnZS1jb2xvcik7XG4gICAgICAgIGJhY2tncm91bmQ6IG1peCgkYXBwLWJhY2tncm91bmQsIHJnYmEoJGJhZGdlLWNvbG9yLCAxKSwgKDEgLSAkYmFkZ2Utb3BhY2l0eSkgKiAxMDAlKTtcbiAgICAgIH1cbiAgICAgIEBlbHNlIHtcbiAgICAgICAgYmFja2dyb3VuZDogJGJhZGdlLWNvbG9yO1xuICAgICAgfVxuXG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuXG4gIC5uZy1hbmltYXRlLWRpc2FibGVkIC5tYXQtYmFkZ2UtY29udGVudCxcbiAgLm1hdC1iYWRnZS1jb250ZW50Ll9tYXQtYW5pbWF0aW9uLW5vb3BhYmxlIHtcbiAgICB0cmFuc2l0aW9uOiBub25lO1xuICB9XG5cbiAgLy8gVGhlIGFjdGl2ZSBjbGFzcyBpcyBhZGRlZCBhZnRlciB0aGUgZWxlbWVudCBpcyBhZGRlZFxuICAvLyBzbyBpdCBjYW4gYW5pbWF0ZSBzY2FsZSB0byBkZWZhdWx0XG4gIC5tYXQtYmFkZ2UtY29udGVudC5tYXQtYmFkZ2UtYWN0aXZlIHtcbiAgICAvLyBTY2FsZSB0byBgbm9uZWAgaW5zdGVhZCBvZiBgMWAgdG8gYXZvaWQgYmx1cnJ5IHRleHQgaW4gc29tZSBicm93c2Vycy5cbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cblxuICAubWF0LWJhZGdlLXNtYWxsIHtcbiAgICBAaW5jbHVkZSBfbWF0LWJhZGdlLXNpemUoJG1hdC1iYWRnZS1zbWFsbC1zaXplKTtcbiAgfVxuICAubWF0LWJhZGdlLW1lZGl1bSB7XG4gICAgQGluY2x1ZGUgX21hdC1iYWRnZS1zaXplKCRtYXQtYmFkZ2UtZGVmYXVsdC1zaXplKTtcbiAgfVxuICAubWF0LWJhZGdlLWxhcmdlIHtcbiAgICBAaW5jbHVkZSBfbWF0LWJhZGdlLXNpemUoJG1hdC1iYWRnZS1sYXJnZS1zaXplKTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWJhZGdlLXR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgIGZvbnQtd2VpZ2h0OiAkbWF0LWJhZGdlLWZvbnQtd2VpZ2h0O1xuICAgIGZvbnQtc2l6ZTogJG1hdC1iYWRnZS1mb250LXNpemU7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtYmFkZ2Utc21hbGwgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAvLyBTZXQgdGhlIGZvbnQgc2l6ZSB0byA3NSUgb2YgdGhlIG9yaWdpbmFsLlxuICAgIGZvbnQtc2l6ZTogJG1hdC1iYWRnZS1mb250LXNpemUgKiAwLjc1O1xuICB9XG5cbiAgLm1hdC1iYWRnZS1sYXJnZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgIGZvbnQtc2l6ZTogJG1hdC1iYWRnZS1mb250LXNpemUgKiAyO1xuICB9XG59XG5cbkBtaXhpbiBfbWF0LWJhZGdlLWRlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIG1hdC1iYWRnZS10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogX21hdC1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSBfbWF0LWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LWJhZGdlJykge1xuICAgICRjb2xvcjogbWF0LWdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogbWF0LWdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LWJhZGdlLWNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtYmFkZ2UtZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1iYWRnZS10eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuQG1peGluIG1hdC1ib3R0b20tc2hlZXQtY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtYm90dG9tLXNoZWV0LWNvbnRhaW5lciB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oMTYsICRjb25maWcpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZGlhbG9nKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWJvdHRvbS1zaGVldC10eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgLm1hdC1ib3R0b20tc2hlZXQtY29udGFpbmVyIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgYm9keS0xKTtcbiAgfVxufVxuXG5AbWl4aW4gX21hdC1ib3R0b20tc2hlZXQtZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gbWF0LWJvdHRvbS1zaGVldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogX21hdC1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSBfbWF0LWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LWJvdHRvbS1zaGVldCcpIHtcbiAgICAkY29sb3I6IG1hdC1nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IG1hdC1nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1ib3R0b20tc2hlZXQtY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgX21hdC1ib3R0b20tc2hlZXQtZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1ib3R0b20tc2hlZXQtdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG4kX21hdC1idXR0b24tcmlwcGxlLW9wYWNpdHk6IDAuMTtcblxuLy8gQXBwbGllcyBhIGZvY3VzIHN0eWxlIHRvIGFuIG1hdC1idXR0b24gZWxlbWVudCBmb3IgZWFjaCBvZiB0aGUgc3VwcG9ydGVkIHBhbGV0dGVzLlxuQG1peGluIF9tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXktY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJGNvbmZpZywgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJGNvbmZpZywgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJGNvbmZpZywgd2Fybik7XG5cbiAgJi5tYXQtcHJpbWFyeSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICB9XG5cbiAgJi5tYXQtYWNjZW50IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgfVxuXG4gICYubWF0LXdhcm4gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgfVxuXG4gICYubWF0LWJ1dHRvbi1kaXNhYmxlZCAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxufVxuXG4vLyBBcHBsaWVzIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIGZvciBhIHJpcHBsZS4gSWYgdGhlIHZhbHVlIHByb3ZpZGVkIGlzIG5vdCBhIFNhc3MgY29sb3IsXG4vLyB3ZSBhc3N1bWUgdGhhdCB3ZSd2ZSBiZWVuIGdpdmVuIGEgQ1NTIHZhcmlhYmxlLiBTaW5jZSB3ZSBjYW4ndCBwZXJmb3JtIGFscGhhLWJsZW5kaW5nXG4vLyBvbiBhIENTUyB2YXJpYWJsZSwgd2UgaW5zdGVhZCBhZGQgdGhlIG9wYWNpdHkgZGlyZWN0bHkgdG8gdGhlIHJpcHBsZSBlbGVtZW50LlxuQG1peGluIF9tYXQtYnV0dG9uLXJpcHBsZS1iYWNrZ3JvdW5kKCRwYWxldHRlLCAkaHVlLCAkb3BhY2l0eSkge1xuICAkYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlLCAkaHVlLCAkb3BhY2l0eSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xuICBAaWYgKHR5cGUtb2YoJGJhY2tncm91bmQtY29sb3IpICE9IGNvbG9yKSB7XG4gICAgb3BhY2l0eTogJG9wYWNpdHk7XG4gIH1cbn1cblxuQG1peGluIF9tYXQtYnV0dG9uLXJpcHBsZS1jb2xvcigkdGhlbWUsICRodWUsICRvcGFjaXR5OiAkX21hdC1idXR0b24tcmlwcGxlLW9wYWNpdHkpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG5cbiAgJi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBAaW5jbHVkZSBfbWF0LWJ1dHRvbi1yaXBwbGUtYmFja2dyb3VuZCgkcHJpbWFyeSwgJGh1ZSwgJG9wYWNpdHkpO1xuICB9XG5cbiAgJi5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIEBpbmNsdWRlIF9tYXQtYnV0dG9uLXJpcHBsZS1iYWNrZ3JvdW5kKCRhY2NlbnQsICRodWUsICRvcGFjaXR5KTtcbiAgfVxuXG4gICYubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tcmlwcGxlLWJhY2tncm91bmQoJHdhcm4sICRodWUsICRvcGFjaXR5KTtcbiAgfVxufVxuXG4vLyBBcHBsaWVzIGEgcHJvcGVydHkgdG8gYW4gbWF0LWJ1dHRvbiBlbGVtZW50IGZvciBlYWNoIG9mIHRoZSBzdXBwb3J0ZWQgcGFsZXR0ZXMuXG5AbWl4aW4gX21hdC1idXR0b24tdGhlbWUtcHJvcGVydHkoJHRoZW1lLCAkcHJvcGVydHksICRodWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgJi5tYXQtcHJpbWFyeSB7XG4gICAgI3skcHJvcGVydHl9OiBtYXQtY29sb3IoJHByaW1hcnksICRodWUpO1xuICB9XG4gICYubWF0LWFjY2VudCB7XG4gICAgI3skcHJvcGVydHl9OiBtYXQtY29sb3IoJGFjY2VudCwgJGh1ZSk7XG4gIH1cbiAgJi5tYXQtd2FybiB7XG4gICAgI3skcHJvcGVydHl9OiBtYXQtY29sb3IoJHdhcm4sICRodWUpO1xuICB9XG5cbiAgJi5tYXQtcHJpbWFyeSwgJi5tYXQtYWNjZW50LCAmLm1hdC13YXJuLCAmLm1hdC1idXR0b24tZGlzYWJsZWQge1xuICAgICYubWF0LWJ1dHRvbi1kaXNhYmxlZCB7XG4gICAgICAkcGFsZXR0ZTogaWYoJHByb3BlcnR5ID09ICdjb2xvcicsICRmb3JlZ3JvdW5kLCAkYmFja2dyb3VuZCk7XG4gICAgICAjeyRwcm9wZXJ0eX06IG1hdC1jb2xvcigkcGFsZXR0ZSwgZGlzYWJsZWQtYnV0dG9uKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1idXR0b24tY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJGNvbmZpZywgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJGNvbmZpZywgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJGNvbmZpZywgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWJ1dHRvbiwgLm1hdC1pY29uLWJ1dHRvbiwgLm1hdC1zdHJva2VkLWJ1dHRvbiB7XG4gICAgLy8gQnV0dG9ucyB3aXRob3V0IGEgYmFja2dyb3VuZCBjb2xvciBzaG91bGQgaW5oZXJpdCB0aGUgZm9udCBjb2xvci4gVGhpcyBpcyBuZWNlc3NhcnkgdG9cbiAgICAvLyBlbnN1cmUgdGhhdCB0aGUgYnV0dG9uIGlzIHJlYWRhYmxlIG9uIGN1c3RvbSBiYWNrZ3JvdW5kIGNvbG9ycy4gSXQncyB3cm9uZyB0byBhbHdheXMgYXNzdW1lXG4gICAgLy8gdGhhdCB0aG9zZSBidXR0b25zIGFyZSBhbHdheXMgcGxhY2VkIGluc2lkZSBvZiBjb250YWluZXJzIHdpdGggdGhlIGRlZmF1bHQgYmFja2dyb3VuZFxuICAgIC8vIGNvbG9yIG9mIHRoZSB0aGVtZSAoZS5nLiB0aGVtZWQgdG9vbGJhcnMpLlxuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tdGhlbWUtcHJvcGVydHkoJGNvbmZpZywgJ2NvbG9yJywgdGV4dCk7XG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tZm9jdXMtb3ZlcmxheS1jb2xvcigkY29uZmlnKTtcblxuICAgIC8vIFNldHVwIHRoZSByaXBwbGUgY29sb3IgdG8gYmUgYmFzZWQgb24gdGhlIHRleHQgY29sb3IuIFRoaXMgZW5zdXJlcyB0aGF0IHRoZSByaXBwbGVzXG4gICAgLy8gYXJlIG1hdGNoaW5nIHdpdGggdGhlIGN1cnJlbnQgdGhlbWUgcGFsZXR0ZSBhbmQgYXJlIGluIGNvbnRyYXN0IHRvIHRoZSBiYWNrZ3JvdW5kIGNvbG9yXG4gICAgLy8gKGUuZyBpbiB0aGVtZWQgdG9vbGJhcnMpLlxuICAgIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgICAgb3BhY2l0eTogJF9tYXQtYnV0dG9uLXJpcHBsZS1vcGFjaXR5O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQ6IG1hcF9nZXQoJGZvcmVncm91bmQsIGJhc2UpO1xuICB9XG5cbiAgLy8gTm90ZTogdGhpcyBuZWVkcyBhIGJpdCBleHRyYSBzcGVjaWZpY2l0eSwgYmVjYXVzZSB3ZSdyZSBub3QgZ3VhcmFudGVlZCB0aGUgaW5jbHVzaW9uXG4gIC8vIG9yZGVyIG9mIHRoZSB0aGVtZSBzdHlsZXMgYW5kIHRoZSBidXR0b24gcmVzZXQgbWF5IGVuZCB1cCByZXNldHRpbmcgdGhpcyBhcyB3ZWxsLlxuICAubWF0LXN0cm9rZWQtYnV0dG9uOm5vdCgubWF0LWJ1dHRvbi1kaXNhYmxlZCkge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxuXG4gIC5tYXQtZmxhdC1idXR0b24sIC5tYXQtcmFpc2VkLWJ1dHRvbiwgLm1hdC1mYWIsIC5tYXQtbWluaS1mYWIge1xuICAgIC8vIERlZmF1bHQgZm9udCBhbmQgYmFja2dyb3VuZCBjb2xvciB3aGVuIG5vdCB1c2luZyBhbnkgY29sb3IgcGFsZXR0ZS5cbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIHJhaXNlZC1idXR0b24pO1xuXG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tdGhlbWUtcHJvcGVydHkoJGNvbmZpZywgJ2NvbG9yJywgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tdGhlbWUtcHJvcGVydHkoJGNvbmZpZywgJ2JhY2tncm91bmQtY29sb3InLCBkZWZhdWx0KTtcbiAgICBAaW5jbHVkZSBfbWF0LWJ1dHRvbi1yaXBwbGUtY29sb3IoJGNvbmZpZywgZGVmYXVsdC1jb250cmFzdCk7XG4gIH1cblxuICAubWF0LXN0cm9rZWQtYnV0dG9uLCAubWF0LWZsYXQtYnV0dG9uIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigwLCAkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMiwgJGNvbmZpZyk7XG5cbiAgICAmOm5vdCgubWF0LWJ1dHRvbi1kaXNhYmxlZCk6YWN0aXZlIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDgsICRjb25maWcpO1xuICAgIH1cblxuICAgICYubWF0LWJ1dHRvbi1kaXNhYmxlZCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigwLCAkY29uZmlnKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWZhYiwgLm1hdC1taW5pLWZhYiB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oNiwgJGNvbmZpZyk7XG5cbiAgICAmOm5vdCgubWF0LWJ1dHRvbi1kaXNhYmxlZCk6YWN0aXZlIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDEyLCAkY29uZmlnKTtcbiAgICB9XG5cbiAgICAmLm1hdC1idXR0b24tZGlzYWJsZWQge1xuICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMCwgJGNvbmZpZyk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtYnV0dG9uLXR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAubWF0LWJ1dHRvbiwgLm1hdC1yYWlzZWQtYnV0dG9uLCAubWF0LWljb24tYnV0dG9uLCAubWF0LXN0cm9rZWQtYnV0dG9uLFxuICAubWF0LWZsYXQtYnV0dG9uLCAubWF0LWZhYiwgLm1hdC1taW5pLWZhYiB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgYnV0dG9uKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYnV0dG9uKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJ1dHRvbik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBfbWF0LWJ1dHRvbi1kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiBtYXQtYnV0dG9uLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiBfbWF0LWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIF9tYXQtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtYnV0dG9uJykge1xuICAgICRjb2xvcjogbWF0LWdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogbWF0LWdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LWJ1dHRvbi1jb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWJ1dHRvbi1kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LWJ1dHRvbi10eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuLy8gVGFrZW4gZnJvbSBtYXQtZGVuc2l0eSB3aXRoIHNtYWxsIG1vZGlmaWNhdGlvbnMgdG8gbm90IHJlbHkgb24gdGhlIG5ldyBTYXNzIG1vZHVsZVxuLy8gc3lzdGVtLCBhbmQgdG8gc3VwcG9ydCBhcmJpdHJhcnkgcHJvcGVydGllcyBpbiBhIGRlbnNpdHkgY29uZmlndXJhdGlvbi5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRlcmlhbC1jb21wb25lbnRzL21hdGVyaWFsLWNvbXBvbmVudHMtd2ViL2Jsb2IvbWFzdGVyL3BhY2thZ2VzL21kYy1kZW5zaXR5XG5cbiRfbWF0LWRlbnNpdHktaW50ZXJ2YWw6IDRweCAhZGVmYXVsdDtcbiRfbWF0LWRlbnNpdHktbWluaW11bS1zY2FsZTogbWluaW11bSAhZGVmYXVsdDtcbiRfbWF0LWRlbnNpdHktbWF4aW11bS1zY2FsZTogbWF4aW11bSAhZGVmYXVsdDtcbiRfbWF0LWRlbnNpdHktc3VwcG9ydGVkLXNjYWxlczogKGRlZmF1bHQsIG1pbmltdW0sIG1heGltdW0pICFkZWZhdWx0O1xuJF9tYXQtZGVuc2l0eS1kZWZhdWx0LXNjYWxlOiAwICFkZWZhdWx0O1xuXG4vLyBXaGV0aGVyIGRlbnNpdHkgc2hvdWxkIGJlIGdlbmVyYXRlZCBhdCByb290LiBUaGlzIHdpbGwgYmUgdGVtcG9yYXJpbHkgc2V0IHRvIGB0cnVlYFxuLy8gd2hlbmV2ZXIgZGVuc2l0eSBzdHlsZXMgZm9yIGxlZ2FjeSB0aGVtZXMgYXJlIGdlbmVyYXRlZC5cbiRfbWF0LWRlbnNpdHktZ2VuZXJhdGUtYXQtcm9vdDogZmFsc2U7XG4vLyBXaGV0aGVyIGRlbnNpdHkgc3R5bGVzIHNob3VsZCBiZSBnZW5lcmF0ZWQuIFRoaXMgd2lsbCBiZSB0ZW1wb3JhcmlseSBzZXQgdG8gYGZhbHNlYCBpZlxuLy8gZHVwbGljYXRlIGRlbnNpdHkgc3R5bGVzIGZvciBhIGxlZ2FjeSB0aGVtZSB3b3VsZCBiZSBnZW5lcmF0ZWQuIEZvciBsZWdhY3kgdGhlbWVzLFxuLy8gd2UgYWx3YXlzIGdlbmVyYXRlIHRoZSBkZWZhdWx0IGRlbnNpdHkgKipvbmx5IG9uY2UqKiBhdCByb290LlxuJF9tYXQtZGVuc2l0eS1nZW5lcmF0ZS1zdHlsZXM6IHRydWU7XG5cbi8vIE1peGluIHRoYXQgY2FuIGJlIHVzZWQgdG8gd3JhcCBkZW5zaXR5IHN0eWxlcyBvZiBnaXZlbiBjb21wb25lbnRzLiBUaGUgbWl4aW4gd2lsbFxuLy8gbW92ZSB0aGUgZGVuc2l0eSBzdHlsZXMgdG8gcm9vdCBpZiB0aGUgYCRfbWF0LWRlbnNpdHktZ2VuZXJhdGUtYXQtcm9vdGAgZ2xvYmFsIHZhcmlhYmxlXG4vLyBpcyBzZXQuIElmIGAkX21hdC1kZW5zaXR5LWdlbmVyYXRlLXN0eWxlc2AgaXMgc2V0IHRvIGBmYWxzZWAsIGdlbmVyYXRpb24gb2YgZGVuc2l0eVxuLy8gc3R5bGVzIHdyYXBwZWQgaW4gdGhpcyBtaXhpbiBpcyBza2lwcGVkLiBUaGlzIG1peGluIGV4aXN0cyB0byBpbXByb3ZlIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG4vLyBvZiB0aGUgbmV3IHRoZW1pbmcgQVBJIHdoZXJlIGRlbnNpdHkgc3R5bGVzIGFyZSBpbmNsdWRlZCBhcyBwYXJ0IG9mIHRoZW1lcy4gUHJldmlvdXNseSxcbi8vIGRlbnNpdHkgc3R5bGVzIG9mIGNvbXBvbmVudHMgd2VyZSBwYXJ0IG9mIHRoZWlyIGJhc2Ugc3R5bGVzLiBXaXRoIHRoZSBuZXcgQVBJLCB0aGV5IGFyZVxuLy8gcGFydCBvZiB0aGUgdGhlbWluZyBzeXN0ZW0uIFRoZSBgPC4uPi10aGVtZWAgbWl4aW5zIGdlbmVyYXRlIGRlbnNpdHkgYnkgZGVmYXVsdCB1bmxlc3Ncbi8vIHRoZSBkZW5zaXR5IGNvbmZpZ3VyYXRpb24gaXMgZXhwbGljaXRseSBzcGVjaWZpZWQgYXMgcGVyIG5ldyBBUEkuIFRoaXMgbWVhbnMsIHRoYXQgcHJvamVjdHNcbi8vIHVzaW5nIGA8Li4+LXRoZW1lYCBtaXhpbnMgZm9yIHNlcGFyYXRlIHRoZW1lcyAobGlrZSBgLmRhcmstdGhlbWVgKSB3aWxsIGNhdXNlIGR1cGxpY2F0ZVxuLy8gZGVuc2l0eSBzdHlsZXMuIFRoaXMgaXMgYnJlYWtpbmcgYXMgaXQgaW5jcmVhc2VzIHNwZWNpZmljaXR5IG9mIGRlbnNpdHkgc3R5bGVzLiBUaGlzIG1peGluXG4vLyBwcm92aWRlcyBhbiBBUEkgdG8gY29udHJvbCBnZW5lcmF0aW9uIG9mIGRlbnNpdHkgc3R5bGVzIHNvIHRoYXQgd2UgY2FuIGVuc3VyZSB0aGV5IGFyZSBvbmx5XG4vLyBjcmVhdGVkICpvbmNlKiBhbmQgYXQgcm9vdC5cbkBtaXhpbiBfbWF0LWRlbnNpdHktbGVnYWN5LWNvbXBhdGliaWxpdHkoKSB7XG4gIEBpZiAkX21hdC1kZW5zaXR5LWdlbmVyYXRlLXN0eWxlcyBhbmQgJF9tYXQtZGVuc2l0eS1nZW5lcmF0ZS1hdC1yb290IHtcbiAgICBAYXQtcm9vdCB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbiAgQGVsc2UgaWYgJF9tYXQtZGVuc2l0eS1nZW5lcmF0ZS1zdHlsZXMge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBmdW5jdGlvbiBfbWF0LWRlbnNpdHktcHJvcC12YWx1ZSgkZGVuc2l0eS1jb25maWcsICRkZW5zaXR5LXNjYWxlLCAkcHJvcGVydHktbmFtZSkge1xuICBAaWYgKHR5cGUtb2YoJGRlbnNpdHktc2NhbGUpID09ICdzdHJpbmcnIGFuZFxuICAgICAgaW5kZXgoJGxpc3Q6ICRfbWF0LWRlbnNpdHktc3VwcG9ydGVkLXNjYWxlcywgJHZhbHVlOiAkZGVuc2l0eS1zY2FsZSkgPT0gbnVsbCkge1xuICAgIEBlcnJvciAnbWF0LWRlbnNpdHk6IFN1cHBvcnRlZCBkZW5zaXR5IHNjYWxlcyAjeyRfbWF0LWRlbnNpdHktc3VwcG9ydGVkLXNjYWxlc30sICcgICtcbiAgICAgICdidXQgcmVjZWl2ZWQgI3skZGVuc2l0eS1zY2FsZX0uJztcbiAgfVxuXG4gICR2YWx1ZTogbnVsbDtcbiAgJHByb3BlcnR5LXNjYWxlLW1hcDogbWFwX2dldCgkZGVuc2l0eS1jb25maWcsICRwcm9wZXJ0eS1uYW1lKTtcblxuICBAaWYgbWFwX2hhc19rZXkoJHByb3BlcnR5LXNjYWxlLW1hcCwgJGRlbnNpdHktc2NhbGUpIHtcbiAgICAkdmFsdWU6IG1hcF9nZXQoJHByb3BlcnR5LXNjYWxlLW1hcCwgJGRlbnNpdHktc2NhbGUpO1xuICB9XG4gIEBlbHNlIHtcbiAgICAkdmFsdWU6IG1hcF9nZXQoJHByb3BlcnR5LXNjYWxlLW1hcCwgZGVmYXVsdCkgKyAkZGVuc2l0eS1zY2FsZSAqICRfbWF0LWRlbnNpdHktaW50ZXJ2YWw7XG4gIH1cblxuICAkbWluLXZhbHVlOiBtYXBfZ2V0KCRwcm9wZXJ0eS1zY2FsZS1tYXAsICRfbWF0LWRlbnNpdHktbWluaW11bS1zY2FsZSk7XG4gICRtYXgtdmFsdWU6IG1hcF9nZXQoJHByb3BlcnR5LXNjYWxlLW1hcCwgJF9tYXQtZGVuc2l0eS1tYXhpbXVtLXNjYWxlKTtcblxuICBAaWYgKCR2YWx1ZSA8ICRtaW4tdmFsdWUgb3IgJHZhbHVlID4gJG1heC12YWx1ZSkge1xuICAgIEBlcnJvciAnbWF0LWRlbnNpdHk6ICN7JHByb3BlcnR5LW5hbWV9IG11c3QgYmUgYmV0d2VlbiAjeyRtaW4tdmFsdWV9IGFuZCAnICtcbiAgICAgICcjeyRtYXgtdmFsdWV9IChpbmNsdXNpdmUpLCBidXQgcmVjZWl2ZWQgI3skdmFsdWV9Lic7XG4gIH1cblxuICBAcmV0dXJuICR2YWx1ZTtcbn1cblxuJG1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYXJkLWhlaWdodDogNDhweCAhZGVmYXVsdDtcbi8vIE1pbmltdW0gaGVpZ2h0IGZvciBoaWdoZXN0IGRlbnNpdHkgY2FuIHZhcnkgYmFzZWQgb24gdGhlIGNvbnRlbnQgdGhhdCBkZXZlbG9wZXJzXG4vLyBwcm9qZWN0IGludG8gYnV0dG9uLXRvZ2dsZSdzLiBXZSB1c2UgYSBtaW5pbXVtIG9mIGAyNHB4YCB0aG91Z2ggYmVjYXVzZSBjb21tb25seVxuLy8gaWNvbnMgb3IgdGV4dCBhcmUgZGlzcGxheWVkLiBJY29ucyBieSBkZWZhdWx0IGhhdmUgYSBzaXplIG9mIGAyNHB4YC5cbiRtYXQtYnV0dG9uLXRvZ2dsZS1zdGFuZGFyZC1taW5pbXVtLWhlaWdodDogMjRweCAhZGVmYXVsdDtcbiRtYXQtYnV0dG9uLXRvZ2dsZS1zdGFuZGFyZC1tYXhpbXVtLWhlaWdodDogJG1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYXJkLWhlaWdodCAhZGVmYXVsdDtcblxuJG1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYXJkLWRlbnNpdHktY29uZmlnOiAoXG4gIGhlaWdodDogKFxuICAgIGRlZmF1bHQ6ICRtYXQtYnV0dG9uLXRvZ2dsZS1zdGFuZGFyZC1oZWlnaHQsXG4gICAgbWF4aW11bTogJG1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYXJkLW1heGltdW0taGVpZ2h0LFxuICAgIG1pbmltdW06ICRtYXQtYnV0dG9uLXRvZ2dsZS1zdGFuZGFyZC1taW5pbXVtLWhlaWdodCxcbiAgKVxuKSAhZGVmYXVsdDtcblxuXG5AbWl4aW4gbWF0LWJ1dHRvbi10b2dnbGUtY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuICAkZGl2aWRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcblxuICAubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZSxcbiAgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigyLCAkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1zdGFuZGFsb25lLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQsXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBoaW50LXRleHQpO1xuXG4gICAgLm1hdC1idXR0b24tdG9nZ2xlLWZvY3VzLW92ZXJsYXkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBmb2N1c2VkLWJ1dHRvbik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG5cbiAgICAubWF0LWJ1dHRvbi10b2dnbGUtZm9jdXMtb3ZlcmxheSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGZvY3VzZWQtYnV0dG9uLCAxKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUgKyAubWF0LWJ1dHRvbi10b2dnbGUge1xuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggJGRpdmlkZXItY29sb3I7XG4gIH1cblxuICBbZGlyPSdydGwnXSAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUgKyAubWF0LWJ1dHRvbi10b2dnbGUge1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4ICRkaXZpZGVyLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQubWF0LWJ1dHRvbi10b2dnbGUtdmVydGljYWwge1xuICAgIC5tYXQtYnV0dG9uLXRvZ2dsZSArIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCAkZGl2aWRlci1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBzZWxlY3RlZC1idXR0b24pO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcblxuICAgICYubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtZGlzYWJsZWQge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLWJ1dHRvbik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBkaXNhYmxlZC1idXR0b24tdG9nZ2xlKTtcblxuICAgICYubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIH1cblxuICAgICYubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIHNlbGVjdGVkLWRpc2FibGVkLWJ1dHRvbik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmUubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCxcbiAgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICAgIGJvcmRlcjogc29saWQgMXB4ICRkaXZpZGVyLWNvbG9yO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtYnV0dG9uLXRvZ2dsZS10eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG59XG5cbkBtaXhpbiBfbWF0LWJ1dHRvbi10b2dnbGUtZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRkZW5zaXR5LXNjYWxlOiBtYXQtZ2V0LWRlbnNpdHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkc3RhbmRhcmQtaGVpZ2h0OiBfbWF0LWRlbnNpdHktcHJvcC12YWx1ZShcbiAgICAgICRtYXQtYnV0dG9uLXRvZ2dsZS1zdGFuZGFyZC1kZW5zaXR5LWNvbmZpZywgJGRlbnNpdHktc2NhbGUsIGhlaWdodCk7XG5cbiAgQGluY2x1ZGUgX21hdC1kZW5zaXR5LWxlZ2FjeS1jb21wYXRpYmlsaXR5KCkge1xuICAgIC5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtYnV0dG9uLXRvZ2dsZS1sYWJlbC1jb250ZW50IHtcbiAgICAgIGxpbmUtaGVpZ2h0OiAkc3RhbmRhcmQtaGVpZ2h0O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWJ1dHRvbi10b2dnbGUtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IF9tYXQtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgX21hdC1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1idXR0b24tdG9nZ2xlJykge1xuICAgICRjb2xvcjogbWF0LWdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogbWF0LWdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LWJ1dHRvbi10b2dnbGUtY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgX21hdC1idXR0b24tdG9nZ2xlLWRlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtYnV0dG9uLXRvZ2dsZS10eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LWNhcmQtY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtY2FyZCB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMSwgJGNvbmZpZyk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgIC8vIE5lZWRzIGV4dHJhIHNwZWNpZmljaXR5IHRvIGJlIGFibGUgdG8gb3ZlcnJpZGUgdGhlIGVsZXZhdGlvbiBzZWxlY3RvcnMuXG4gICAgJi5tYXQtY2FyZC1mbGF0IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDAsICRjb25maWcpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2FyZC1zdWJ0aXRsZSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtY2FyZC10eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgLm1hdC1jYXJkIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1jYXJkLXRpdGxlIHtcbiAgICBmb250OiB7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGhlYWRsaW5lKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIHRpdGxlKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC10aXRsZSB7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIHRpdGxlKTtcbiAgfVxuXG4gIC5tYXQtY2FyZC1zdWJ0aXRsZSxcbiAgLm1hdC1jYXJkLWNvbnRlbnQge1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpO1xuICB9XG59XG5cbkBtaXhpbiBfbWF0LWNhcmQtZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gbWF0LWNhcmQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IF9tYXQtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgX21hdC1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1jYXJkJykge1xuICAgICRjb2xvcjogbWF0LWdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogbWF0LWdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LWNhcmQtY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgX21hdC1jYXJkLWRlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtY2FyZC10eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtY2hlY2tib3gtY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJGNvbmZpZywgaXMtZGFyayk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCRjb25maWcsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCRjb25maWcsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCRjb25maWcsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG5cblxuICAvLyBUaGUgY29sb3Igb2YgdGhlIGNoZWNrYm94J3MgY2hlY2ttYXJrIC8gbWl4ZWRtYXJrLlxuICAkY2hlY2tib3gtbWFyay1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBiYWNrZ3JvdW5kKTtcblxuICAvLyBOT1RFKHRyYXZpc2thdWZtYW4pOiBXaGlsZSB0aGUgc3BlYyBjYWxscyBmb3IgdHJhbnNsdWNlbnQgYmxhY2tzL3doaXRlcyBmb3IgZGlzYWJsZWQgY29sb3JzLFxuICAvLyB0aGlzIGRvZXMgbm90IHdvcmsgd2VsbCB3aXRoIGVsZW1lbnRzIGxheWVyZWQgb24gdG9wIG9mIG9uZSBhbm90aGVyLiBUbyBnZXQgYXJvdW5kIHRoaXMgd2VcbiAgLy8gYmxlbmQgdGhlIGNvbG9ycyB0b2dldGhlciBiYXNlZCBvbiB0aGUgYmFzZSBjb2xvciBhbmQgdGhlIHRoZW1lIGJhY2tncm91bmQuXG4gICR3aGl0ZS0zMHBjdC1vcGFjaXR5LW9uLWRhcms6ICM2ODY4Njg7XG4gICRibGFjay0yNnBjdC1vcGFjaXR5LW9uLWxpZ2h0OiAjYjBiMGIwO1xuICAkZGlzYWJsZWQtY29sb3I6IGlmKCRpcy1kYXJrLXRoZW1lLCAkd2hpdGUtMzBwY3Qtb3BhY2l0eS1vbi1kYXJrLCAkYmxhY2stMjZwY3Qtb3BhY2l0eS1vbi1saWdodCk7XG5cbiAgLm1hdC1jaGVja2JveC1mcmFtZSB7XG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtY2hlY2tib3gtY2hlY2ttYXJrIHtcbiAgICBmaWxsOiAkY2hlY2tib3gtbWFyay1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtY2hlY2tib3gtY2hlY2ttYXJrLXBhdGgge1xuICAgIC8vICFpbXBvcnRhbnQgaXMgbmVlZGVkIGhlcmUgYmVjYXVzZSBhIHN0cm9rZSBtdXN0IGJlIHNldCBhcyBhblxuICAgIC8vIGF0dHJpYnV0ZSBvbiB0aGUgU1ZHIGluIG9yZGVyIGZvciBsaW5lIGFuaW1hdGlvbiB0byB3b3JrIHByb3Blcmx5LlxuICAgIHN0cm9rZTogJGNoZWNrYm94LW1hcmstY29sb3IgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYXQtY2hlY2tib3gtbWl4ZWRtYXJrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2hlY2tib3gtbWFyay1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSwgLm1hdC1jaGVja2JveC1jaGVja2VkIHtcbiAgICAmLm1hdC1wcmltYXJ5IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4gLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkd2Fybik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jaGVja2JveC1kaXNhYmxlZCB7XG4gICAgJi5tYXQtY2hlY2tib3gtY2hlY2tlZCxcbiAgICAmLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgICAgIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkaXNhYmxlZC1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOm5vdCgubWF0LWNoZWNrYm94LWNoZWNrZWQpIHtcbiAgICAgIC5tYXQtY2hlY2tib3gtZnJhbWUge1xuICAgICAgICBib3JkZXItY29sb3I6ICRkaXNhYmxlZC1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWF0LWNoZWNrYm94LWxhYmVsIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgICB9XG4gIH1cblxuICAvLyBTd2l0Y2ggdGhpcyB0byBhIHNvbGlkIGNvbG9yIHNpbmNlIHdlJ3JlIHVzaW5nIGBvcGFjaXR5YFxuICAvLyB0byBjb250cm9sIGhvdyBvcGFxdWUgdGhlIHJpcHBsZSBzaG91bGQgYmUuXG4gIC5tYXQtY2hlY2tib3ggLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWFwX2dldChtYXAtZ2V0KCRjb25maWcsIGZvcmVncm91bmQpLCBiYXNlKTtcbiAgfVxuXG4gIC5tYXQtY2hlY2tib3gtY2hlY2tlZDpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCksXG4gIC5tYXQtY2hlY2tib3g6YWN0aXZlOm5vdCgubWF0LWNoZWNrYm94LWRpc2FibGVkKSB7XG4gICAgJi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJHdhcm4pO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWNoZWNrYm94LXR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAubWF0LWNoZWNrYm94IHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLy8gVE9ETyhrYXJhKTogUmVtb3ZlIHRoaXMgc3R5bGUgd2hlbiBmaXhpbmcgdmVydGljYWwgYmFzZWxpbmVcbiAgLm1hdC1jaGVja2JveC1sYXlvdXQgLm1hdC1jaGVja2JveC1sYWJlbCB7XG4gICAgbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICB9XG59XG5cbkBtaXhpbiBfbWF0LWNoZWNrYm94LWRlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIG1hdC1jaGVja2JveC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogX21hdC1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSBfbWF0LWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LWNoZWNrYm94Jykge1xuICAgICRjb2xvcjogbWF0LWdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogbWF0LWdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LWNoZWNrYm94LWNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtY2hlY2tib3gtZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1jaGVja2JveC10eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuJG1hdC1jaGlwLXJlbW92ZS1mb250LXNpemU6IDE4cHg7XG5cbkBtaXhpbiBfbWF0LWNoaXAtZWxlbWVudC1jb2xvcigkZm9yZWdyb3VuZCwgJGJhY2tncm91bmQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQ7XG4gIGNvbG9yOiAkZm9yZWdyb3VuZDtcblxuICAubWF0LWNoaXAtcmVtb3ZlIHtcbiAgICBjb2xvcjogJGZvcmVncm91bmQ7XG4gICAgb3BhY2l0eTogMC40O1xuICB9XG59XG5cblxuLy8gQXBwbGllcyB0aGUgYmFja2dyb3VuZCBjb2xvciBmb3IgYSByaXBwbGUgZWxlbWVudC5cbi8vIElmIHRoZSBjb2xvciB2YWx1ZSBwcm92aWRlZCBpcyBub3QgYSBTYXNzIGNvbG9yLFxuLy8gd2UgYXNzdW1lIHRoYXQgd2UndmUgYmVlbiBnaXZlbiBhIENTUyB2YXJpYWJsZS5cbi8vIFNpbmNlIHdlIGNhbid0IHBlcmZvcm0gYWxwaGEtYmxlbmRpbmcgb24gYSBDU1MgdmFyaWFibGUsXG4vLyB3ZSBpbnN0ZWFkIGFkZCB0aGUgb3BhY2l0eSBkaXJlY3RseSB0byB0aGUgcmlwcGxlIGVsZW1lbnQuXG5AbWl4aW4gX21hdC1jaGlwcy1yaXBwbGUtYmFja2dyb3VuZCgkcGFsZXR0ZSwgJGRlZmF1bHQtY29udHJhc3QsICRvcGFjaXR5KSB7XG4gICRiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUsICRkZWZhdWx0LWNvbnRyYXN0LCAkb3BhY2l0eSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xuICBAaWYgKHR5cGUtb2YoJGJhY2tncm91bmQtY29sb3IpICE9IGNvbG9yKSB7XG4gICAgb3BhY2l0eTogJG9wYWNpdHk7XG4gIH1cbn1cblxuQG1peGluIF9tYXQtY2hpcC10aGVtZS1jb2xvcigkcGFsZXR0ZSkge1xuICBAaW5jbHVkZSBfbWF0LWNoaXAtZWxlbWVudC1jb2xvcihtYXQtY29sb3IoJHBhbGV0dGUsIGRlZmF1bHQtY29udHJhc3QpLCBtYXQtY29sb3IoJHBhbGV0dGUpKTtcblxuICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBAaW5jbHVkZSBfbWF0LWNoaXBzLXJpcHBsZS1iYWNrZ3JvdW5kKCRwYWxldHRlLCBkZWZhdWx0LWNvbnRyYXN0LCAwLjEpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtY2hpcHMtY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJGNvbmZpZywgaXMtZGFyayk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCRjb25maWcsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCRjb25maWcsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCRjb25maWcsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG5cbiAgJHVuc2VsZWN0ZWQtYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCB1bnNlbGVjdGVkLWNoaXApO1xuICAkdW5zZWxlY3RlZC1mb3JlZ3JvdW5kOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gIC5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcCB7XG4gICAgQGluY2x1ZGUgX21hdC1jaGlwLWVsZW1lbnQtY29sb3IoJHVuc2VsZWN0ZWQtZm9yZWdyb3VuZCwgJHVuc2VsZWN0ZWQtYmFja2dyb3VuZCk7XG5cbiAgICAmOm5vdCgubWF0LWNoaXAtZGlzYWJsZWQpIHtcbiAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oMywgJGNvbmZpZyk7XG4gICAgICB9XG5cbiAgICAgIC5tYXQtY2hpcC1yZW1vdmU6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjU0O1xuICAgICAgfVxuICAgIH1cblxuICAgICYubWF0LWNoaXAtZGlzYWJsZWQge1xuICAgICAgb3BhY2l0eTogMC40O1xuICAgIH1cblxuICAgICY6OmFmdGVyIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hcF9nZXQoJGZvcmVncm91bmQsIGJhc2UpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZCB7XG4gICAgJi5tYXQtcHJpbWFyeSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWNoaXAtdGhlbWUtY29sb3IoJHByaW1hcnkpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgQGluY2x1ZGUgX21hdC1jaGlwLXRoZW1lLWNvbG9yKCR3YXJuKTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgQGluY2x1ZGUgX21hdC1jaGlwLXRoZW1lLWNvbG9yKCRhY2NlbnQpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWNoaXBzLXR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAubWF0LWNoaXAge1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTIpO1xuICAgIGZvbnQtd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcblxuICAgIC5tYXQtY2hpcC10cmFpbGluZy1pY29uLm1hdC1pY29uLFxuICAgIC5tYXQtY2hpcC1yZW1vdmUubWF0LWljb24ge1xuICAgICAgZm9udC1zaXplOiAkbWF0LWNoaXAtcmVtb3ZlLWZvbnQtc2l6ZTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIF9tYXQtY2hpcHMtZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gbWF0LWNoaXBzLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiBfbWF0LWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIF9tYXQtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtY2hpcHMnKSB7XG4gICAgJGNvbG9yOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiBtYXQtZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtY2hpcHMtY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgX21hdC1jaGlwcy1kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LWNoaXBzLXR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LWRpdmlkZXItY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1kaXZpZGVyIHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG5cbiAgLm1hdC1kaXZpZGVyLXZlcnRpY2FsIHtcbiAgICBib3JkZXItcmlnaHQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cbn1cblxuQG1peGluIG1hdC1kaXZpZGVyLXR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIF9tYXQtZGl2aWRlci1kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiBtYXQtZGl2aWRlci10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogX21hdC1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSBfbWF0LWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LWRpdmlkZXInKSB7XG4gICAgJGNvbG9yOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiBtYXQtZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtZGl2aWRlci1jb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWRpdmlkZXItZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1kaXZpZGVyLXR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuQG1peGluIG1hdC10YWJsZS1jb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC10YWJsZSB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCAnY2FyZCcpO1xuICB9XG5cbiAgLm1hdC10YWJsZSB0aGVhZCwgLm1hdC10YWJsZSB0Ym9keSwgLm1hdC10YWJsZSB0Zm9vdCxcbiAgbWF0LWhlYWRlci1yb3csIG1hdC1yb3csIG1hdC1mb290ZXItcm93LFxuICBbbWF0LWhlYWRlci1yb3ddLCBbbWF0LXJvd10sIFttYXQtZm9vdGVyLXJvd10sXG4gIC5tYXQtdGFibGUtc3RpY2t5IHtcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICB9XG5cbiAgbWF0LXJvdywgbWF0LWhlYWRlci1yb3csIG1hdC1mb290ZXItcm93LFxuICB0aC5tYXQtaGVhZGVyLWNlbGwsIHRkLm1hdC1jZWxsLCB0ZC5tYXQtZm9vdGVyLWNlbGwge1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cblxuICAubWF0LWhlYWRlci1jZWxsIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LWNlbGwsIC5tYXQtZm9vdGVyLWNlbGwge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtdGFibGUtdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gIC5tYXQtdGFibGUge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LWhlYWRlci1jZWxsIHtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbik7XG4gICAgZm9udC13ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICB9XG5cbiAgLm1hdC1jZWxsLCAubWF0LWZvb3Rlci1jZWxsIHtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgfVxufVxuXG5AbWl4aW4gX21hdC10YWJsZS1kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiBtYXQtdGFibGUtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IF9tYXQtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgX21hdC1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC10YWJsZScpIHtcbiAgICAkY29sb3I6IG1hdC1nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IG1hdC1nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC10YWJsZS1jb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRhYmxlLWRlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtdGFibGUtdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cblxuJG1hdC1kYXRlcGlja2VyLXNlbGVjdGVkLXRvZGF5LWJveC1zaGFkb3ctd2lkdGg6IDFweDtcbiRtYXQtZGF0ZXBpY2tlci1zZWxlY3RlZC1mYWRlLWFtb3VudDogMC42O1xuJG1hdC1kYXRlcGlja2VyLXJhbmdlLWZhZGUtYW1vdW50OiAwLjI7XG4kbWF0LWRhdGVwaWNrZXItdG9kYXktZmFkZS1hbW91bnQ6IDAuMjtcbiRtYXQtY2FsZW5kYXItYm9keS1mb250LXNpemU6IDEzcHggIWRlZmF1bHQ7XG4kbWF0LWNhbGVuZGFyLXdlZWtkYXktdGFibGUtZm9udC1zaXplOiAxMXB4ICFkZWZhdWx0O1xuXG5AbWl4aW4gX21hdC1kYXRlcGlja2VyLWNvbG9yKCRwYWxldHRlKSB7XG4gIEBpbmNsdWRlIG1hdC1kYXRlLXJhbmdlLWNvbG9ycyhcbiAgICBtYXQtY29sb3IoJHBhbGV0dGUsIGRlZmF1bHQsICRtYXQtZGF0ZXBpY2tlci1yYW5nZS1mYWRlLWFtb3VudCkpO1xuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCA+IC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCB7XG4gICAgJGJhY2tncm91bmQ6IG1hdC1jb2xvcigkcGFsZXR0ZSk7XG5cbiAgICBAaWYgKHR5cGUtb2YoJGJhY2tncm91bmQpID09IGNvbG9yKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBmYWRlLW91dCgkYmFja2dyb3VuZCwgJG1hdC1kYXRlcGlja2VyLXNlbGVjdGVkLWZhZGUtYW1vdW50KTtcbiAgICB9XG4gICAgQGVsc2Uge1xuICAgICAgLy8gSWYgd2UgY291bGRuJ3QgcmVzb2x2ZSB0byBiYWNrZ3JvdW5kIHRvIGEgY29sb3IgKGUuZy4gaXQncyBhIENTUyB2YXJpYWJsZSksXG4gICAgICAvLyBmYWxsIGJhY2sgdG8gZmFkaW5nIHRoZSBjb250ZW50IG91dCB2aWEgYG9wYWNpdHlgLlxuICAgICAgb3BhY2l0eTogJG1hdC1kYXRlcGlja2VyLXRvZGF5LWZhZGUtYW1vdW50O1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS10b2RheS5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgJG1hdC1kYXRlcGlja2VyLXNlbGVjdGVkLXRvZGF5LWJveC1zaGFkb3ctd2lkdGhcbiAgICAgICAgICAgICAgICBtYXQtY29sb3IoJHBhbGV0dGUsIGRlZmF1bHQtY29udHJhc3QpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtZGF0ZXBpY2tlci1jb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG5cbiAgLm1hdC1jYWxlbmRhci1hcnJvdyB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBpY29uKTtcbiAgfVxuXG4gIC8vIFRoZSBwcmV2L25leHQgYnV0dG9ucyBuZWVkIGEgYml0IG1vcmUgc3BlY2lmaWNpdHkgdG9cbiAgLy8gYXZvaWQgYmVpbmcgb3ZlcndyaXR0ZW4gYnkgdGhlIC5tYXQtaWNvbi1idXR0b24uXG4gIC5tYXQtZGF0ZXBpY2tlci10b2dnbGUsXG4gIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50IC5tYXQtY2FsZW5kYXItbmV4dC1idXR0b24sXG4gIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50IC5tYXQtY2FsZW5kYXItcHJldmlvdXMtYnV0dG9uIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBpY29uKTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItdGFibGUtaGVhZGVyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBoaW50LXRleHQpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci10YWJsZS1oZWFkZXItZGl2aWRlcjo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktbGFiZWwge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQsXG4gIC5tYXQtZGF0ZS1yYW5nZS1pbnB1dC1zZXBhcmF0b3Ige1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQgPiAubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpLFxuICAubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1kYXRlLXJhbmdlLWlucHV0LXNlcGFyYXRvciB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktY2VsbDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkKTpob3ZlcixcbiAgLmNkay1rZXlib2FyZC1mb2N1c2VkIC5tYXQtY2FsZW5kYXItYm9keS1hY3RpdmUsXG4gIC5jZGstcHJvZ3JhbS1mb2N1c2VkIC5tYXQtY2FsZW5kYXItYm9keS1hY3RpdmUge1xuICAgICYgPiAubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1pbi1wcmV2aWV3IHtcbiAgICAkZGl2aWRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcblxuICAgIEBpZiB0eXBlLW9mKCRkaXZpZGVyLWNvbG9yKSA9PSBjb2xvciB7XG4gICAgICAvLyBUaGUgZGl2aWRlciBjb2xvciBpcyBzZXQgdW5kZXIgdGhlIGFzc3VtcHRpb24gdGhhdCBpdCdsbCBiZSB1c2VkXG4gICAgICAvLyBmb3IgYSBzb2xpZCBib3JkZXIsIGJ1dCBiZWNhdXNlIHdlJ3JlIHVzaW5nIGEgZGFzaGVkIGJvcmRlciBmb3IgdGhlXG4gICAgICAvLyBwcmV2aWV3IHJhbmdlLCB3ZSBuZWVkIHRvIGJ1bXAgaXRzIG9wYWNpdHkgdG8gZW5zdXJlIHRoYXQgaXQncyB2aXNpYmxlLlxuICAgICAgY29sb3I6IHJnYmEoJGRpdmlkZXItY29sb3IsIG1pbihvcGFjaXR5KCRkaXZpZGVyLWNvbG9yKSAqIDIsIDEpKTtcbiAgICB9XG4gICAgQGVsc2Uge1xuICAgICAgY29sb3I6ICRkaXZpZGVyLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS10b2RheTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKSB7XG4gICAgLy8gTm90ZTogdGhvdWdoIGl0J3Mgbm90IHRleHQsIHRoZSBib3JkZXIgaXMgYSBoaW50IGFib3V0IHRoZSBmYWN0IHRoYXQgdGhpcyBpcyB0b2RheSdzIGRhdGUsXG4gICAgLy8gc28gd2UgdXNlIHRoZSBoaW50IGNvbG9yLlxuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBoaW50LXRleHQpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkID4gLm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpIHtcbiAgICAkY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgaGludC10ZXh0KTtcblxuICAgIEBpZiAodHlwZS1vZigkY29sb3IpID09IGNvbG9yKSB7XG4gICAgICBib3JkZXItY29sb3I6IGZhZGUtb3V0KCRjb2xvciwgJG1hdC1kYXRlcGlja2VyLXRvZGF5LWZhZGUtYW1vdW50KTtcbiAgICB9XG4gICAgQGVsc2Uge1xuICAgICAgLy8gSWYgdGhlIGNvbG9yIGRpZG4ndCByZXNvbHZlIHRvIGEgY29sb3IgdmFsdWUsIGJ1dCBzb21ldGhpbmcgbGlrZSBhIENTUyB2YXJpYWJsZSwgd2UgY2FuJ3RcbiAgICAgIC8vIGZhZGUgaXQgb3V0IHNvIHdlIGZhbGwgYmFjayB0byByZWR1Y2luZyB0aGUgZWxlbWVudCBvcGFjaXR5LiBOb3RlIHRoYXQgd2UgZG9uJ3QgdXNlIHRoZVxuICAgICAgLy8gJG1hdC1kYXRlcGlja2VyLXRvZGF5LWZhZGUtYW1vdW50LCBiZWNhdXNlIGhpbnQgdGV4dCB1c3VhbGx5IGhhcyBzb21lIG9wYWNpdHkgYXBwbGllZFxuICAgICAgLy8gdG8gaXQgYWxyZWFkeSBhbmQgd2UgZG9uJ3Qgd2FudCB0aGVtIHRvIHN0YWNrIG9uIHRvcCBvZiBlYWNoIG90aGVyLlxuICAgICAgb3BhY2l0eTogMC41O1xuICAgIH1cbiAgfVxuXG4gIEBpbmNsdWRlIF9tYXQtZGF0ZXBpY2tlci1jb2xvcihtYXAtZ2V0KCRjb25maWcsIHByaW1hcnkpKTtcblxuICAubWF0LWRhdGVwaWNrZXItY29udGVudCB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oNCwgJGNvbmZpZyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWRhdGVwaWNrZXItY29sb3IobWFwLWdldCgkY29uZmlnLCBhY2NlbnQpKTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtZGF0ZXBpY2tlci1jb2xvcihtYXAtZ2V0KCRjb25maWcsIHdhcm4pKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWRhdGVwaWNrZXItY29udGVudC10b3VjaCB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oMCwgJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LWRhdGVwaWNrZXItdG9nZ2xlLWFjdGl2ZSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcihtYXAtZ2V0KCRjb25maWcsIHByaW1hcnkpLCB0ZXh0KTtcblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKG1hcC1nZXQoJGNvbmZpZywgYWNjZW50KSwgdGV4dCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKG1hcC1nZXQoJGNvbmZpZywgd2FybiksIHRleHQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZGF0ZS1yYW5nZS1pbnB1dC1pbm5lcltkaXNhYmxlZF0ge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtZGF0ZXBpY2tlci10eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgLm1hdC1jYWxlbmRhciB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keSB7XG4gICAgZm9udC1zaXplOiAkbWF0LWNhbGVuZGFyLWJvZHktZm9udC1zaXplO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWxhYmVsLFxuICAubWF0LWNhbGVuZGFyLXBlcmlvZC1idXR0b24ge1xuICAgIGZvbnQ6IHtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYnV0dG9uKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJ1dHRvbik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jYWxlbmRhci10YWJsZS1oZWFkZXIgdGgge1xuICAgIGZvbnQ6IHtcbiAgICAgIHNpemU6ICRtYXQtY2FsZW5kYXItd2Vla2RheS10YWJsZS1mb250LXNpemU7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTEpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWRhdGUtcmFuZ2UtY29sb3JzKFxuICAkcmFuZ2UtY29sb3IsXG4gICRjb21wYXJpc29uLWNvbG9yOiByZ2JhKCNmOWFiMDAsICRtYXQtZGF0ZXBpY2tlci1yYW5nZS1mYWRlLWFtb3VudCksXG4gICRvdmVybGFwLWNvbG9yOiAjYThkYWI1LFxuICAkb3ZlcmxhcC1zZWxlY3RlZC1jb2xvcjogZGFya2VuKCRvdmVybGFwLWNvbG9yLCAzMCUpKSB7XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWluLXJhbmdlOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQ6ICRyYW5nZS1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1pbi1jb21wYXJpc29uLXJhbmdlOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQ6ICRjb21wYXJpc29uLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24tYnJpZGdlLXN0YXJ0OjpiZWZvcmUsXG4gIFtkaXI9J3J0bCddIC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWJyaWRnZS1lbmQ6OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkcmFuZ2UtY29sb3IgNTAlLCAkY29tcGFyaXNvbi1jb2xvciA1MCUpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24tYnJpZGdlLWVuZDo6YmVmb3JlLFxuICBbZGlyPSdydGwnXSAubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1icmlkZ2Utc3RhcnQ6OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICRyYW5nZS1jb2xvciA1MCUsICRjb21wYXJpc29uLWNvbG9yIDUwJSk7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktaW4tY29tcGFyaXNvbi1yYW5nZS5tYXQtY2FsZW5kYXItYm9keS1pbi1yYW5nZTo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6ICRvdmVybGFwLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWluLWNvbXBhcmlzb24tcmFuZ2UgPiAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQ6ICRvdmVybGFwLXNlbGVjdGVkLWNvbG9yO1xuXG4gIH1cbn1cblxuQG1peGluIF9tYXQtZGF0ZXBpY2tlci1kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiBtYXQtZGF0ZXBpY2tlci10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogX21hdC1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSBfbWF0LWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LWRhdGVwaWNrZXInKSB7XG4gICAgJGNvbG9yOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiBtYXQtZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtZGF0ZXBpY2tlci1jb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWRhdGVwaWNrZXItZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1kYXRlcGlja2VyLXR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtZGlhbG9nLWNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWRpYWxvZy1jb250YWluZXIge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDI0LCAkY29uZmlnKTtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGRpYWxvZyk7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1kaWFsb2ctdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gIC5tYXQtZGlhbG9nLXRpdGxlIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgdGl0bGUpO1xuICB9XG59XG5cbkBtaXhpbiBfbWF0LWRpYWxvZy1kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiBtYXQtZGlhbG9nLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiBfbWF0LWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIF9tYXQtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtZGlhbG9nJykge1xuICAgICRjb2xvcjogbWF0LWdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogbWF0LWdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LWRpYWxvZy1jb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWRpYWxvZy1kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LWRpYWxvZy10eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuLy8gRGVmYXVsdCBtaW5pbXVtIGFuZCBtYXhpbXVtIGhlaWdodCBmb3IgY29sbGFwc2VkIHBhbmVsIGhlYWRlcnMuXG4kbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItY29sbGFwc2VkLWhlaWdodDogNDhweCAhZGVmYXVsdDtcbiRtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1jb2xsYXBzZWQtbWluaW11bS1oZWlnaHQ6IDM2cHggIWRlZmF1bHQ7XG4kbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItY29sbGFwc2VkLW1heGltdW0taGVpZ2h0OlxuICAgICRtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1jb2xsYXBzZWQtaGVpZ2h0ICFkZWZhdWx0O1xuXG4vLyBEZWZhdWx0IG1pbmltdW0gYW5kIG1heGltdW0gaGVpZ2h0IGZvciBleHBhbmRlZCBwYW5lbCBoZWFkZXJzLlxuJG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWV4cGFuZGVkLWhlaWdodDogNjRweCAhZGVmYXVsdDtcbiRtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1leHBhbmRlZC1taW5pbXVtLWhlaWdodDogNDhweCAhZGVmYXVsdDtcbiRtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1leHBhbmRlZC1tYXhpbXVtLWhlaWdodDpcbiAgICAkbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZXhwYW5kZWQtaGVpZ2h0ICFkZWZhdWx0O1xuXG4vLyBEZW5zaXR5IGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBleHBhbnNpb24gcGFuZWwuIENhcHR1cmVzIHRoZVxuLy8gaGVpZ2h0IGZvciBib3RoIGV4cGFuZGVkIGFuZCBjb2xsYXBzZWQgcGFuZWwgaGVhZGVycy5cbiRtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZW5zaXR5LWNvbmZpZzogKFxuICBjb2xsYXBzZWQtaGVpZ2h0OiAoXG4gICAgZGVmYXVsdDogJG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWNvbGxhcHNlZC1oZWlnaHQsXG4gICAgbWF4aW11bTogJG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWNvbGxhcHNlZC1tYXhpbXVtLWhlaWdodCxcbiAgICBtaW5pbXVtOiAkbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItY29sbGFwc2VkLW1pbmltdW0taGVpZ2h0LFxuICApLFxuICBleHBhbmRlZC1oZWlnaHQ6IChcbiAgICBkZWZhdWx0OiAkbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZXhwYW5kZWQtaGVpZ2h0LFxuICAgIG1heGltdW06ICRtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1leHBhbmRlZC1tYXhpbXVtLWhlaWdodCxcbiAgICBtaW5pbXVtOiAkbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZXhwYW5kZWQtbWluaW11bS1oZWlnaHQsXG4gIClcbikgIWRlZmF1bHQ7XG5cbi8vIE5vdGU6IEtlZXAgdGhpcyBpbiBzeW5jIHdpdGggdGhlIGFuaW1hdGlvbiB0aW1pbmcgZm9yIHRoZSB0b2dnbGUgaW5kaWNhdG9yXG4vLyBhbmQgYm9keSBleHBhbnNpb24uIFRoZXNlIGFyZSBhbmltYXRlZCB1c2luZyBBbmd1bGFyIGFuaW1hdGlvbnMuXG4kbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdHJhbnNpdGlvbjogMjI1bXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcblxuXG5AbWl4aW4gbWF0LWV4cGFuc2lvbi1wYW5lbC1jb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDIsICRjb25maWcpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cblxuICAubWF0LWFjdGlvbi1yb3cge1xuICAgIGJvcmRlci10b3AtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cblxuICAubWF0LWV4cGFuc2lvbi1wYW5lbCB7XG4gICAgJiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIuY2RrLWtleWJvYXJkLWZvY3VzZWQsXG4gICAgJiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIuY2RrLXByb2dyYW0tZm9jdXNlZCxcbiAgICAmOm5vdCgubWF0LWV4cGFuZGVkKSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI6aG92ZXIge1xuICAgICAgJjpub3QoW2FyaWEtZGlzYWJsZWQ9J3RydWUnXSkge1xuICAgICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGhvdmVyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBEaXNhYmxlIHRoZSBob3ZlciBvbiB0b3VjaCBkZXZpY2VzIHNpbmNlIGl0IGNhbiBhcHBlYXIgbGlrZSBpdCBpcyBzdHVjay4gV2UgY2FuJ3QgdXNlXG4gIC8vIGBAbWVkaWEgKGhvdmVyKWAgYWJvdmUsIGJlY2F1c2UgdGhlIGRlc2t0b3Agc3VwcG9ydCBicm93c2VyIHN1cHBvcnQgaXNuJ3QgZ3JlYXQuXG4gIEBtZWRpYSAoaG92ZXI6IG5vbmUpIHtcbiAgICAubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoLm1hdC1leHBhbmRlZCk6bm90KFthcmlhLWRpc2FibGVkPSd0cnVlJ10pXG4gICAgICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uLFxuICAubWF0LWV4cGFuc2lvbi1pbmRpY2F0b3I6OmFmdGVyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJbYXJpYS1kaXNhYmxlZD0ndHJ1ZSddIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC1idXR0b24pO1xuXG4gICAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlLFxuICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XG4gICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1leHBhbnNpb24tcGFuZWwtdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgc3ViaGVhZGluZy0xKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgc3ViaGVhZGluZy0xKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIHN1YmhlYWRpbmctMSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtY29udGVudCB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGJvZHktMSk7XG4gIH1cbn1cblxuQG1peGluIF9tYXQtZXhwYW5zaW9uLXBhbmVsLWRlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkZGVuc2l0eS1zY2FsZTogbWF0LWdldC1kZW5zaXR5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGV4cGFuZGVkLWhlaWdodDogX21hdC1kZW5zaXR5LXByb3AtdmFsdWUoXG4gICAgICAgICRtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZW5zaXR5LWNvbmZpZywgJGRlbnNpdHktc2NhbGUsIGV4cGFuZGVkLWhlaWdodCk7XG4gICRjb2xsYXBzZWQtaGVpZ2h0OiBfbWF0LWRlbnNpdHktcHJvcC12YWx1ZShcbiAgICAgICRtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZW5zaXR5LWNvbmZpZywgJGRlbnNpdHktc2NhbGUsIGNvbGxhcHNlZC1oZWlnaHQpO1xuXG4gIEBpbmNsdWRlIF9tYXQtZGVuc2l0eS1sZWdhY3ktY29tcGF0aWJpbGl0eSgpIHtcbiAgICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICAgICAgaGVpZ2h0OiAkY29sbGFwc2VkLWhlaWdodDtcblxuICAgICAgJi5tYXQtZXhwYW5kZWQge1xuICAgICAgICBoZWlnaHQ6ICRleHBhbmRlZC1oZWlnaHQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtZXhwYW5zaW9uLXBhbmVsLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiBfbWF0LWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIF9tYXQtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtZXhwYW5zaW9uLXBhbmVsJykge1xuICAgICRjb2xvcjogbWF0LWdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogbWF0LWdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LWV4cGFuc2lvbi1wYW5lbC1jb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWV4cGFuc2lvbi1wYW5lbC1kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LWV4cGFuc2lvbi1wYW5lbC10eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG4vLyBUaGlzIG1peGluIHdpbGwgZW5zdXJlIHRoYXQgbGluZXMgdGhhdCBvdmVyZmxvdyB0aGUgY29udGFpbmVyIHdpbGwgaGlkZSB0aGUgb3ZlcmZsb3cgYW5kXG4vLyB0cnVuY2F0ZSBuZWF0bHkgd2l0aCBhbiBlbGxpcHNpcy5cbkBtaXhpbiBtYXQtdHJ1bmNhdGUtbGluZSgpIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi8vIE1peGluIHRvIHByb3ZpZGUgYWxsIG1hdC1saW5lIHN0eWxlcywgY2hhbmdpbmcgc2Vjb25kYXJ5IGZvbnQgc2l6ZSBiYXNlZCBvbiB3aGV0aGVyIHRoZSBsaXN0XG4vLyBpcyBpbiBkZW5zZSBtb2RlLlxuQG1peGluIG1hdC1saW5lLWJhc2UoJHNlY29uZGFyeS1mb250LXNpemUpIHtcbiAgLm1hdC1saW5lIHtcbiAgICBAaW5jbHVkZSBtYXQtdHJ1bmNhdGUtbGluZSgpO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICAvLyBhbGwgbGluZXMgYnV0IHRoZSB0b3AgbGluZSBzaG91bGQgaGF2ZSBzbWFsbGVyIHRleHRcbiAgICAmOm50aC1jaGlsZChuKzIpIHtcbiAgICAgIGZvbnQtc2l6ZTogJHNlY29uZGFyeS1mb250LXNpemU7XG4gICAgfVxuICB9XG59XG5cbi8vIFRoaXMgbWl4aW4gbm9ybWFsaXplcyBkZWZhdWx0IGVsZW1lbnQgc3R5bGVzLCBlLmcuIGZvbnQgd2VpZ2h0IGZvciBoZWFkaW5nIHRleHQuXG5AbWl4aW4gbWF0LW5vcm1hbGl6ZS10ZXh0KCkge1xuICAmID4gKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gIH1cbn1cblxuLy8gVGhpcyBtaXhpbiBwcm92aWRlcyBiYXNlIHN0eWxlcyBmb3IgdGhlIHdyYXBwZXIgYXJvdW5kIG1hdC1saW5lIGVsZW1lbnRzIGluIGEgbGlzdC5cbkBtaXhpbiBtYXQtbGluZS13cmFwcGVyLWJhc2UoKSB7XG4gIEBpbmNsdWRlIG1hdC1ub3JtYWxpemUtdGV4dCgpO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXg6IGF1dG87XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgLy8gTXVzdCByZW1vdmUgd3JhcHBlciB3aGVuIGxpbmVzIGFyZSBlbXB0eSBvciBpdCB0YWtlcyB1cCBob3Jpem9udGFsXG4gIC8vIHNwYWNlIGFuZCBwdXNoZXMgb3RoZXIgZWxlbWVudHMgdG8gdGhlIHJpZ2h0LlxuICAmOmVtcHR5IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cblxuXG4vLyBJbmNsdWRlIHRoaXMgZW1wdHkgbWl4aW4gZm9yIGNvbnNpc3RlbmN5IHdpdGggdGhlIG90aGVyIGNvbXBvbmVudHMuXG5AbWl4aW4gbWF0LWdyaWQtbGlzdC1jb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gbWF0LWdyaWQtbGlzdC10eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgLm1hdC1ncmlkLXRpbGUtaGVhZGVyLFxuICAubWF0LWdyaWQtdGlsZS1mb290ZXIge1xuICAgIEBpbmNsdWRlIG1hdC1saW5lLWJhc2UobWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKSk7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gIH1cbn1cblxuQG1peGluIF9tYXQtZ3JpZC1saXN0LWRlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIG1hdC1ncmlkLWxpc3QtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IF9tYXQtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgX21hdC1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1ncmlkLWxpc3QnKSB7XG4gICAgJGNvbG9yOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiBtYXQtZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtZ3JpZC1saXN0LWNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtZ3JpZC1saXN0LWRlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtZ3JpZC1saXN0LXR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5AbWl4aW4gbWF0LWljb24tY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJGNvbmZpZywgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJGNvbmZpZywgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJGNvbmZpZywgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWljb24ge1xuICAgICYubWF0LXByaW1hcnkge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgdGV4dCk7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCwgdGV4dCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuLCB0ZXh0KTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1pY29uLXR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIF9tYXQtaWNvbi1kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiBtYXQtaWNvbi10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogX21hdC1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSBfbWF0LWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LWljb24nKSB7XG4gICAgJGNvbG9yOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiBtYXQtZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtaWNvbi1jb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWljb24tZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1pY29uLXR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG4vLyBSZW5kZXJzIGEgZ3JhZGllbnQgZm9yIHNob3dpbmcgdGhlIGRhc2hlZCBsaW5lIHdoZW4gdGhlIGlucHV0IGlzIGRpc2FibGVkLlxuLy8gVW5saWtlIHVzaW5nIGEgYm9yZGVyLCBhIGdyYWRpZW50IGFsbG93cyB1cyB0byBhZGp1c3QgdGhlIHNwYWNpbmcgb2YgdGhlIGRvdHRlZCBsaW5lXG4vLyB0byBtYXRjaCB0aGUgTWF0ZXJpYWwgRGVzaWduIHNwZWMuXG5AbWl4aW4gbWF0LWNvbnRyb2wtZGlzYWJsZWQtdW5kZXJsaW5lKCRjb2xvcikge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRjb2xvciAwJSwgJGNvbG9yIDMzJSwgdHJhbnNwYXJlbnQgMCUpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDRweCAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG59XG5cbi8vIEZpZ3VyZXMgb3V0IHRoZSBjb2xvciBvZiB0aGUgcGxhY2Vob2xkZXIgZm9yIGEgZm9ybSBjb250cm9sLlxuLy8gVXNlZCBwcmltYXJpbHkgdG8gcHJldmVudCB0aGUgdmFyaW91cyBmb3JtIGNvbnRyb2xzIGZyb21cbi8vIGJlY29taW5nIG91dCBvZiBzeW5jIHNpbmNlIHRoZXNlIGNvbG9ycyBhcmVuJ3QgaW4gYSBwYWxldHRlLlxuQGZ1bmN0aW9uIF9tYXQtY29udHJvbC1wbGFjZWhvbGRlci1jb2xvcigkY29uZmlnKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkY29uZmlnLCBpcy1kYXJrKTtcbiAgQHJldHVybiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0LCBpZigkaXMtZGFyay10aGVtZSwgMC41LCAwLjQyKSk7XG59XG5cblxuLyogc3R5bGVsaW50LWRpc2FibGUgbWF0ZXJpYWwvbm8tcHJlZml4ZXMgKi9cbkBtaXhpbiB1c2VyLXNlbGVjdCgkdmFsdWUpIHtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogJHZhbHVlO1xuICAtbW96LXVzZXItc2VsZWN0OiAkdmFsdWU7XG4gIC1tcy11c2VyLXNlbGVjdDogJHZhbHVlO1xuICB1c2VyLXNlbGVjdDogJHZhbHVlO1xufVxuXG5AbWl4aW4gaW5wdXQtcGxhY2Vob2xkZXIge1xuICAmOjpwbGFjZWhvbGRlciB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cblxuICAmOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICBAY29udGVudDtcbiAgfVxuXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIEBjb250ZW50O1xuICB9XG5cbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBjdXJzb3ItZ3JhYiB7XG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiO1xuICBjdXJzb3I6IGdyYWI7XG59XG5cbkBtaXhpbiBjdXJzb3ItZ3JhYmJpbmcge1xuICBjdXJzb3I6IC13ZWJraXQtZ3JhYmJpbmc7XG4gIGN1cnNvcjogZ3JhYmJpbmc7XG59XG5cbkBtaXhpbiBiYWNrZmFjZS12aXNpYmlsaXR5KCR2YWx1ZSkge1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6ICR2YWx1ZTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogJHZhbHVlO1xufVxuLyogc3R5bGVsaW50LWVuYWJsZSAqL1xuXG5cblxuQG1peGluIG1hdC1pbnB1dC1jb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkcHJpbWFyeTogbWFwLWdldCgkY29uZmlnLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkY29uZmlnLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkY29uZmlnLCB3YXJuKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1pbnB1dC1lbGVtZW50OmRpc2FibGVkLFxuICAubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgY2FyZXQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgdGV4dCk7XG5cbiAgICBAaW5jbHVkZSBpbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogX21hdC1jb250cm9sLXBsYWNlaG9sZGVyLWNvbG9yKCRjb25maWcpO1xuICAgIH1cblxuICAgIC8vIE9uIGRhcmsgdGhlbWVzIHdlIHNldCB0aGUgbmF0aXZlIGBzZWxlY3RgIGNvbG9yIHRvIHNvbWUgc2hhZGUgb2Ygd2hpdGUsXG4gICAgLy8gaG93ZXZlciB0aGUgY29sb3IgcHJvcGFnYXRlcyB0byBhbGwgb2YgdGhlIGBvcHRpb25gIGVsZW1lbnRzLCB3aGljaCBhcmVcbiAgICAvLyBhbHdheXMgb24gYSB3aGl0ZSBiYWNrZ3JvdW5kIGluc2lkZSB0aGUgZHJvcGRvd24sIGNhdXNpbmcgdGhlbSB0byBibGVuZCBpbi5cbiAgICAvLyBTaW5jZSB3ZSBjYW4ndCBjaGFuZ2UgYmFja2dyb3VuZCBvZiB0aGUgZHJvcGRvd24sIHdlIG5lZWQgdG8gZXhwbGljaXRseVxuICAgIC8vIHJlc2V0IHRoZSBjb2xvciBvZiB0aGUgb3B0aW9ucyB0byBzb21ldGhpbmcgZGFyay5cbiAgICBAaWYgKG1hcC1nZXQoJGNvbmZpZywgaXMtZGFyaykpIHtcbiAgICAgIG9wdGlvbiB7XG4gICAgICAgIGNvbG9yOiAkZGFyay1wcmltYXJ5LXRleHQ7XG4gICAgICB9XG5cbiAgICAgIG9wdGlvbjpkaXNhYmxlZCB7XG4gICAgICAgIGNvbG9yOiAkZGFyay1kaXNhYmxlZC10ZXh0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC5tYXQtYWNjZW50IC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgY2FyZXQtY29sb3I6IG1hdC1jb2xvcigkYWNjZW50LCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC5tYXQtd2FybiAubWF0LWlucHV0LWVsZW1lbnQsXG4gIC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgY2FyZXQtY29sb3I6IG1hdC1jb2xvcigkd2FybiwgdGV4dCk7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4sIHRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtaW5wdXQtdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gIC8vIFRoZSB1bml0LWxlc3MgbGluZS1oZWlnaHQgZnJvbSB0aGUgZm9udCBjb25maWcuXG4gICRsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGlucHV0KTtcblxuICAvLyBUaGUgYW1vdW50IG9mIHNwYWNlIGJldHdlZW4gdGhlIHRvcCBvZiB0aGUgbGluZSBhbmQgdGhlIHRvcCBvZiB0aGUgYWN0dWFsIHRleHRcbiAgLy8gKGFzIGEgZnJhY3Rpb24gb2YgdGhlIGZvbnQtc2l6ZSkuXG4gICRsaW5lLXNwYWNpbmc6ICgkbGluZS1oZWlnaHQgLSAxKSAvIDI7XG5cbiAgLy8gPGlucHV0PiBlbGVtZW50cyBzZWVtIHRvIGhhdmUgdGhlaXIgaGVpZ2h0IHNldCBzbGlnaHRseSB0b28gbGFyZ2Ugb24gU2FmYXJpIGNhdXNpbmcgdGhlIHRleHQgdG9cbiAgLy8gYmUgbWlzYWxpZ25lZCB3LnIudC4gdGhlIHBsYWNlaG9sZGVyLiBBZGRpbmcgdGhpcyBtYXJnaW4gY29ycmVjdHMgaXQuXG4gIGlucHV0Lm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBtYXJnaW4tdG9wOiAtJGxpbmUtc3BhY2luZyAqIDFlbTtcbiAgfVxufVxuXG5AbWl4aW4gX21hdC1pbnB1dC1kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiBtYXQtaW5wdXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IF9tYXQtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgX21hdC1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1pbnB1dCcpIHtcbiAgICAkY29sb3I6IG1hdC1nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IG1hdC1nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1pbnB1dC1jb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWlucHV0LWRlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtaW5wdXQtdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cblxuQG1peGluIG1hdC1saXN0LWNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWxpc3QtYmFzZSB7XG4gICAgLm1hdC1saXN0LWl0ZW0ge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgfVxuXG4gICAgLm1hdC1saXN0LW9wdGlvbiB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICB9XG5cbiAgICAubWF0LXN1YmhlYWRlciB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1saXN0LWl0ZW0tZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZGlzYWJsZWQtbGlzdC1vcHRpb24pO1xuICB9XG5cbiAgLm1hdC1saXN0LW9wdGlvbixcbiAgLm1hdC1uYXYtbGlzdCAubWF0LWxpc3QtaXRlbSxcbiAgLm1hdC1hY3Rpb24tbGlzdCAubWF0LWxpc3QtaXRlbSB7XG4gICAgJjpob3ZlciwgJjpmb2N1cyB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdob3ZlcicpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtbGlzdC1zaW5nbGUtc2VsZWN0ZWQtb3B0aW9uIHtcbiAgICAmLCAmOmhvdmVyLCAmOmZvY3VzIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIsIDAuMTIpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWxpc3QtdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuXG4gIC5tYXQtbGlzdC1pdGVtIHtcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICB9XG5cbiAgLm1hdC1saXN0LW9wdGlvbiB7XG4gICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgfVxuXG4gIC8vIERlZmF1bHQgbGlzdFxuICAubWF0LWxpc3QtYmFzZSB7XG4gICAgLm1hdC1saXN0LWl0ZW0ge1xuICAgICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIHN1YmhlYWRpbmctMik7XG4gICAgICBAaW5jbHVkZSBtYXQtbGluZS1iYXNlKG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKSk7XG4gICAgfVxuXG4gICAgLm1hdC1saXN0LW9wdGlvbiB7XG4gICAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgc3ViaGVhZGluZy0yKTtcbiAgICAgIEBpbmNsdWRlIG1hdC1saW5lLWJhc2UobWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpKTtcbiAgICB9XG5cbiAgICAubWF0LXN1YmhlYWRlciB7XG4gICAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGJvZHktMik7XG4gICAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0yKTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcbiAgICB9XG4gIH1cblxuICAvLyBEZW5zZSBsaXN0XG4gIC5tYXQtbGlzdC1iYXNlW2RlbnNlXSB7XG4gICAgLm1hdC1saXN0LWl0ZW0ge1xuICAgICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pO1xuICAgICAgQGluY2x1ZGUgbWF0LWxpbmUtYmFzZShtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pKTtcbiAgICB9XG5cbiAgICAubWF0LWxpc3Qtb3B0aW9uIHtcbiAgICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICAgIEBpbmNsdWRlIG1hdC1saW5lLWJhc2UobWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKSk7XG4gICAgfVxuXG4gICAgLm1hdC1zdWJoZWFkZXIge1xuICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIF9tYXQtbGlzdC1kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiBtYXQtbGlzdC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogX21hdC1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSBfbWF0LWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LWxpc3QnKSB7XG4gICAgJGNvbG9yOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiBtYXQtZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtbGlzdC1jb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWxpc3QtZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1saXN0LXR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtbWVudS1jb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1tZW51LXBhbmVsIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbig0LCAkY29uZmlnKTtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdjYXJkJyk7XG4gIH1cblxuICAubWF0LW1lbnUtaXRlbSB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgJ3RleHQnKTtcblxuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICYsICY6OmFmdGVyIHtcbiAgICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgJ2Rpc2FibGVkJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1hdC1tZW51LWl0ZW0gLm1hdC1pY29uLW5vLWNvbG9yLFxuICAubWF0LW1lbnUtaXRlbS1zdWJtZW51LXRyaWdnZXI6OmFmdGVyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCAnaWNvbicpO1xuICB9XG5cbiAgLm1hdC1tZW51LWl0ZW06aG92ZXIsXG4gIC5tYXQtbWVudS1pdGVtLmNkay1wcm9ncmFtLWZvY3VzZWQsXG4gIC5tYXQtbWVudS1pdGVtLmNkay1rZXlib2FyZC1mb2N1c2VkLFxuICAubWF0LW1lbnUtaXRlbS1oaWdobGlnaHRlZCB7XG4gICAgJjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCAnaG92ZXInKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1tZW51LXR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAubWF0LW1lbnUtaXRlbSB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgYm9keS0xKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMSk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBfbWF0LW1lbnUtZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gbWF0LW1lbnUtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IF9tYXQtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgX21hdC1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1tZW51Jykge1xuICAgICRjb2xvcjogbWF0LWdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogbWF0LWdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LW1lbnUtY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgX21hdC1tZW51LWRlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtbWVudS10eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuJG1hdC1wYWdpbmF0b3ItaGVpZ2h0OiA1NnB4ICFkZWZhdWx0O1xuLy8gTWluaW11bSBoZWlnaHQgZm9yIHBhZ2luYXRvcidzIGluIHRoZSBoaWdoZXN0IGRlbnNpdHkgaXMgZGV0ZXJtaW5lZCBiYXNlZCBvbiBob3dcbi8vIG11Y2ggdGhlIHBhZ2luYXRvciBjYW4gc2hyaW5rIHVudGlsIHRoZSBjb250ZW50IGV4Y2VlZHMgKGkuZS4gbmF2aWdhdGlvbiBidXR0b25zKS5cbiRtYXQtcGFnaW5hdG9yLW1pbmltdW0taGVpZ2h0OiA0MHB4ICFkZWZhdWx0O1xuJG1hdC1wYWdpbmF0b3ItbWF4aW11bS1oZWlnaHQ6ICRtYXQtcGFnaW5hdG9yLWhlaWdodCAhZGVmYXVsdDtcblxuJG1hdC1wYWdpbmF0b3ItZGVuc2l0eS1jb25maWc6IChcbiAgaGVpZ2h0OiAoXG4gICAgZGVmYXVsdDogJG1hdC1wYWdpbmF0b3ItaGVpZ2h0LFxuICAgIG1heGltdW06ICRtYXQtcGFnaW5hdG9yLW1heGltdW0taGVpZ2h0LFxuICAgIG1pbmltdW06ICRtYXQtcGFnaW5hdG9yLW1pbmltdW0taGVpZ2h0LFxuICApXG4pICFkZWZhdWx0O1xuXG5cbkBtaXhpbiBtYXQtcGFnaW5hdG9yLWNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcblxuICAubWF0LXBhZ2luYXRvciB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCAnY2FyZCcpO1xuICB9XG5cbiAgLm1hdC1wYWdpbmF0b3IsXG4gIC5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZSAubWF0LXNlbGVjdC10cmlnZ2VyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LXBhZ2luYXRvci1kZWNyZW1lbnQsXG4gIC5tYXQtcGFnaW5hdG9yLWluY3JlbWVudCB7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgJ2ljb24nKTtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBtYXQtY29sb3IoJGZvcmVncm91bmQsICdpY29uJyk7XG4gIH1cblxuICAubWF0LXBhZ2luYXRvci1maXJzdCxcbiAgLm1hdC1wYWdpbmF0b3ItbGFzdCB7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgJ2ljb24nKTtcbiAgfVxuXG4gIC5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdIHtcbiAgICAubWF0LXBhZ2luYXRvci1kZWNyZW1lbnQsXG4gICAgLm1hdC1wYWdpbmF0b3ItaW5jcmVtZW50LFxuICAgIC5tYXQtcGFnaW5hdG9yLWZpcnN0LFxuICAgIC5tYXQtcGFnaW5hdG9yLWxhc3Qge1xuICAgICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsICdkaXNhYmxlZCcpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXBhZ2luYXRvci10eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgLm1hdC1wYWdpbmF0b3IsXG4gIC5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZSAubWF0LXNlbGVjdC10cmlnZ2VyIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBfbWF0LXBhZ2luYXRvci1kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGRlbnNpdHktc2NhbGU6IG1hdC1nZXQtZGVuc2l0eS1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRoZWlnaHQ6IF9tYXQtZGVuc2l0eS1wcm9wLXZhbHVlKCRtYXQtcGFnaW5hdG9yLWRlbnNpdHktY29uZmlnLCAkZGVuc2l0eS1zY2FsZSwgaGVpZ2h0KTtcblxuICBAaW5jbHVkZSBfbWF0LWRlbnNpdHktbGVnYWN5LWNvbXBhdGliaWxpdHkoKSB7XG4gICAgLm1hdC1wYWdpbmF0b3ItY29udGFpbmVyIHtcbiAgICAgIG1pbi1oZWlnaHQ6ICRoZWlnaHQ7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtcGFnaW5hdG9yLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiBfbWF0LWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIF9tYXQtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtcGFnaW5hdG9yJykge1xuICAgICRjb2xvcjogbWF0LWdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogbWF0LWdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LXBhZ2luYXRvci1jb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXBhZ2luYXRvci1kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LXBhZ2luYXRvci10eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5AbWl4aW4gbWF0LXByb2dyZXNzLWJhci1jb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkcHJpbWFyeTogbWFwLWdldCgkY29uZmlnLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkY29uZmlnLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkY29uZmlnLCB3YXJuKTtcblxuICAubWF0LXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kIHtcbiAgICBmaWxsOiBtYXQtY29sb3IoJHByaW1hcnksIGxpZ2h0ZXIpO1xuICB9XG5cbiAgLm1hdC1wcm9ncmVzcy1iYXItYnVmZmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnksIGxpZ2h0ZXIpO1xuICB9XG5cbiAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gIH1cblxuICAubWF0LXByb2dyZXNzLWJhci5tYXQtYWNjZW50IHtcbiAgICAubWF0LXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kIHtcbiAgICAgIGZpbGw6IG1hdC1jb2xvcigkYWNjZW50LCBsaWdodGVyKTtcbiAgICB9XG5cbiAgICAubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQsIGxpZ2h0ZXIpO1xuICAgIH1cblxuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgICB9XG4gIH1cblxuICAubWF0LXByb2dyZXNzLWJhci5tYXQtd2FybiB7XG4gICAgLm1hdC1wcm9ncmVzcy1iYXItYmFja2dyb3VuZCB7XG4gICAgICBmaWxsOiBtYXQtY29sb3IoJHdhcm4sIGxpZ2h0ZXIpO1xuICAgIH1cblxuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHdhcm4sIGxpZ2h0ZXIpO1xuICAgIH1cblxuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkd2Fybik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtcHJvZ3Jlc3MtYmFyLXR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIF9tYXQtcHJvZ3Jlc3MtYmFyLWRlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIG1hdC1wcm9ncmVzcy1iYXItdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IF9tYXQtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgX21hdC1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1wcm9ncmVzcy1iYXInKSB7XG4gICAgJGNvbG9yOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiBtYXQtZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtcHJvZ3Jlc3MtYmFyLWNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtcHJvZ3Jlc3MtYmFyLWRlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtcHJvZ3Jlc3MtYmFyLXR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuQG1peGluIG1hdC1wcm9ncmVzcy1zcGlubmVyLWNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCRjb25maWcsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCRjb25maWcsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCRjb25maWcsIHdhcm4pO1xuXG4gIC5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lciwgLm1hdC1zcGlubmVyIHtcbiAgICBjaXJjbGUge1xuICAgICAgc3Ryb2tlOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCBjaXJjbGUge1xuICAgICAgc3Ryb2tlOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiBjaXJjbGUge1xuICAgICAgc3Ryb2tlOiBtYXQtY29sb3IoJHdhcm4pO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXByb2dyZXNzLXNwaW5uZXItdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gX21hdC1wcm9ncmVzcy1zcGlubmVyLWRlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIG1hdC1wcm9ncmVzcy1zcGlubmVyLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiBfbWF0LWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIF9tYXQtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtcHJvZ3Jlc3Mtc3Bpbm5lcicpIHtcbiAgICAkY29sb3I6IG1hdC1nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IG1hdC1nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1wcm9ncmVzcy1zcGlubmVyLWNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtcHJvZ3Jlc3Mtc3Bpbm5lci1kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LXByb2dyZXNzLXNwaW5uZXItdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5AbWl4aW4gX21hdC1yYWRpby1jb2xvcigkcGFsZXR0ZSkge1xuICAmLm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSk7XG4gIH1cblxuICAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSxcbiAgLm1hdC1yYWRpby1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudDpub3QoLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSksXG4gICYubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSxcbiAgJjphY3RpdmUgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlKTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXJhZGlvLWNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCRjb25maWcsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCRjb25maWcsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCRjb25maWcsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LXJhZGlvLWJ1dHRvbiB7XG4gICAgJi5tYXQtcHJpbWFyeSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXJhZGlvLWNvbG9yKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgQGluY2x1ZGUgX21hdC1yYWRpby1jb2xvcigkYWNjZW50KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtcmFkaW8tY29sb3IoJHdhcm4pO1xuICAgIH1cblxuICAgIC8vIFRoaXMgbmVlZHMgZXh0cmEgc3BlY2lmaWNpdHksIGJlY2F1c2UgdGhlIGNsYXNzZXMgYWJvdmUgYXJlIGNvbWJpbmVkXG4gICAgLy8gKGUuZy4gYC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnRgKSB3aGljaCBpbmNyZWFzZXMgdGhlaXIgc3BlY2lmaWNpdHkgYSBsb3QuXG4gICAgLy8gVE9ETzogY29uc2lkZXIgbWFraW5nIHRoZSBzZWxlY3RvcnMgaW50byBkZXNjZW5kYW50cyAoYC5tYXQtcHJpbWFyeSAubWF0LXJhZGlvLWJ1dHRvbmApLlxuICAgICYubWF0LXJhZGlvLWRpc2FibGVkIHtcbiAgICAgICYubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUsXG4gICAgICAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZCk7XG4gICAgICB9XG5cbiAgICAgIC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQsXG4gICAgICAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQpO1xuICAgICAgfVxuXG4gICAgICAubWF0LXJhZGlvLWxhYmVsLWNvbnRlbnQge1xuICAgICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU3dpdGNoIHRoaXMgdG8gYSBzb2xpZCBjb2xvciBzaW5jZSB3ZSdyZSB1c2luZyBgb3BhY2l0eWBcbiAgICAvLyB0byBjb250cm9sIGhvdyBvcGFxdWUgdGhlIHJpcHBsZSBzaG91bGQgYmUuXG4gICAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXBfZ2V0KCRmb3JlZ3JvdW5kLCBiYXNlKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1yYWRpby10eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgLm1hdC1yYWRpby1idXR0b24ge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cbn1cblxuQG1peGluIF9tYXQtcmFkaW8tZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gbWF0LXJhZGlvLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiBfbWF0LWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIF9tYXQtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtcmFkaW8nKSB7XG4gICAgJGNvbG9yOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiBtYXQtZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtcmFkaW8tY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgX21hdC1yYWRpby1kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LXJhZGlvLXR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG5cblxuQG1peGluIG1hdC1zZWxlY3QtY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuICAkcHJpbWFyeTogbWFwLWdldCgkY29uZmlnLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkY29uZmlnLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkY29uZmlnLCB3YXJuKTtcblxuICAubWF0LXNlbGVjdC12YWx1ZSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cblxuICAubWF0LXNlbGVjdC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IF9tYXQtY29udHJvbC1wbGFjZWhvbGRlci1jb2xvcigkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtc2VsZWN0LWRpc2FibGVkIC5tYXQtc2VsZWN0LXZhbHVlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LXNlbGVjdC1wYW5lbCB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbig0LCAkY29uZmlnKTtcblxuICAgIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tbXVsdGlwbGUpIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIsIDAuMTIpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgJi5tYXQtZm9jdXNlZCB7XG4gICAgICAmLm1hdC1wcmltYXJ5IC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICAgICAgY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgdGV4dCk7XG4gICAgICB9XG5cbiAgICAgICYubWF0LWFjY2VudCAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCwgdGV4dCk7XG4gICAgICB9XG5cbiAgICAgICYubWF0LXdhcm4gLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgICAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuLCB0ZXh0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWF0LXNlbGVjdC5tYXQtc2VsZWN0LWludmFsaWQgLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkd2FybiwgdGV4dCk7XG4gICAgfVxuXG4gICAgLm1hdC1zZWxlY3QubWF0LXNlbGVjdC1kaXNhYmxlZCAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1zZWxlY3QtdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gIC8vIFRoZSB1bml0LWxlc3MgbGluZS1oZWlnaHQgZnJvbSB0aGUgZm9udCBjb25maWcuXG4gICRsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGlucHV0KTtcblxuICAubWF0LXNlbGVjdCB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtc2VsZWN0LXRyaWdnZXIge1xuICAgIGhlaWdodDogJGxpbmUtaGVpZ2h0ICogMWVtO1xuICB9XG59XG5cbkBtaXhpbiBfbWF0LXNlbGVjdC1kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiBtYXQtc2VsZWN0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiBfbWF0LWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIF9tYXQtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtc2VsZWN0Jykge1xuICAgICRjb2xvcjogbWF0LWdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogbWF0LWdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LXNlbGVjdC1jb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXNlbGVjdC1kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LXNlbGVjdC10eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtc2lkZW5hdi1jb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkcHJpbWFyeTogbWFwLWdldCgkY29uZmlnLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkY29uZmlnLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkY29uZmlnLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuXG4gICRkcmF3ZXItYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBkaWFsb2cpO1xuICAkZHJhd2VyLWNvbnRhaW5lci1iYWNrZ3JvdW5kLWNvbG9yOiAgbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBiYWNrZ3JvdW5kKTtcbiAgJGRyYXdlci1wdXNoLWJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZGlhbG9nKTtcbiAgJGRyYXdlci1zaWRlLWJvcmRlcjogc29saWQgMXB4IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG5cbiAgLm1hdC1kcmF3ZXItY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZHJhd2VyLWNvbnRhaW5lci1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG5cbiAgLm1hdC1kcmF3ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRkcmF3ZXItYmFja2dyb3VuZC1jb2xvcjtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgICYubWF0LWRyYXdlci1wdXNoIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkcmF3ZXItcHVzaC1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgIH1cblxuICAgICY6bm90KC5tYXQtZHJhd2VyLXNpZGUpIHtcbiAgICAgIC8vIFRoZSBlbGV2YXRpb24gb2Ygei0xNiBpcyBub3RlZCBpbiB0aGUgZGVzaWduIHNwZWNpZmljYXRpb25zLlxuICAgICAgLy8gU2VlIGh0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL2NvbXBvbmVudHMvbmF2aWdhdGlvbi1kcmF3ZXIuaHRtbFxuICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oMTYsICRjb25maWcpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZHJhd2VyLXNpZGUge1xuICAgIGJvcmRlci1yaWdodDogJGRyYXdlci1zaWRlLWJvcmRlcjtcblxuICAgICYubWF0LWRyYXdlci1lbmQge1xuICAgICAgYm9yZGVyLWxlZnQ6ICRkcmF3ZXItc2lkZS1ib3JkZXI7XG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgW2Rpcj0ncnRsJ10gLm1hdC1kcmF3ZXItc2lkZSB7XG4gICAgYm9yZGVyLWxlZnQ6ICRkcmF3ZXItc2lkZS1ib3JkZXI7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuXG4gICAgJi5tYXQtZHJhd2VyLWVuZCB7XG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICAgIGJvcmRlci1yaWdodDogJGRyYXdlci1zaWRlLWJvcmRlcjtcbiAgICB9XG4gIH1cblxuICAubWF0LWRyYXdlci1iYWNrZHJvcC5tYXQtZHJhd2VyLXNob3duIHtcbiAgICAkb3BhY2l0eTogMC42O1xuICAgICRiYWNrZHJvcC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkLCAkb3BhY2l0eSk7XG5cbiAgICBAaWYgKHR5cGUtb2YoJGJhY2tkcm9wLWNvbG9yKSA9PSBjb2xvcikge1xuICAgICAgLy8gV2UgdXNlIGludmVydCgpIGhlcmUgdG8gaGF2ZSB0aGUgZGFya2VuIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIGV4cGVjdGVkIHRvIGJlIHVzZWQuIElmIHRoZVxuICAgICAgLy8gYmFja2dyb3VuZCBpcyBsaWdodCwgd2UgdXNlIGEgZGFyayBiYWNrZHJvcC4gSWYgdGhlIGJhY2tncm91bmQgaXMgZGFyayxcbiAgICAgIC8vIHdlIHVzZSBhIGxpZ2h0IGJhY2tkcm9wLlxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW52ZXJ0KCRiYWNrZHJvcC1jb2xvcik7XG4gICAgfVxuICAgIEBlbHNlIHtcbiAgICAgIC8vIElmIHdlIGNvdWxkbid0IHJlc29sdmUgdGhlIGJhY2tkcm9wIGNvbG9yIHRvIGEgY29sb3IgdmFsdWUsIGZhbGwgYmFjayB0byB1c2luZ1xuICAgICAgLy8gYG9wYWNpdHlgIHRvIG1ha2UgaXQgb3BhcXVlIHNpbmNlIGl0cyBlbmQgdmFsdWUgY291bGQgYmUgYSBzb2xpZCBjb2xvci5cbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZHJvcC1jb2xvcjtcbiAgICAgIG9wYWNpdHk6ICRvcGFjaXR5O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNpZGVuYXYtdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gX21hdC1zaWRlbmF2LWRlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIG1hdC1zaWRlbmF2LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiBfbWF0LWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIF9tYXQtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtc2lkZW5hdicpIHtcbiAgICAkY29sb3I6IG1hdC1nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IG1hdC1nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1zaWRlbmF2LWNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtc2lkZW5hdi1kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LXNpZGVuYXYtdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cbkBtaXhpbiBfbWF0LXNsaWRlLXRvZ2dsZS1jaGVja2VkKCRwYWxldHRlLCAkdGh1bWItY2hlY2tlZC1odWUpIHtcbiAgJi5tYXQtY2hlY2tlZCB7XG4gICAgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlLCAkdGh1bWItY2hlY2tlZC1odWUpO1xuICAgIH1cblxuICAgIC5tYXQtc2xpZGUtdG9nZ2xlLWJhciB7XG4gICAgICAvLyBPcGFjaXR5IGlzIGRldGVybWluZWQgZnJvbSB0aGUgc3BlY3MgZm9yIHRoZSBzZWxlY3Rpb24gY29udHJvbHMuXG4gICAgICAvLyBTZWU6IGh0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL2NvbXBvbmVudHMvc2VsZWN0aW9uLWNvbnRyb2xzLmh0bWwjc3BlY3NcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSwgJHRodW1iLWNoZWNrZWQtaHVlLCAwLjU0KTtcbiAgICB9XG5cbiAgICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIC8vIFNldCBubyBvcGFjaXR5IGZvciB0aGUgcmlwcGxlcyBiZWNhdXNlIHRoZSByaXBwbGUgb3BhY2l0eSB3aWxsIGJlIGFkanVzdGVkIGR5bmFtaWNhbGx5XG4gICAgICAvLyBiYXNlZCBvbiB0aGUgdHlwZSBvZiBpbnRlcmFjdGlvbiB3aXRoIHRoZSBzbGlkZS10b2dnbGUgKGUuZy4gZm9yIGhvdmVyLCBmb2N1cylcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSwgJHRodW1iLWNoZWNrZWQtaHVlKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1zbGlkZS10b2dnbGUtY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGlzLWRhcms6IG1hcF9nZXQoJGNvbmZpZywgaXMtZGFyayk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCRjb25maWcsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCRjb25maWcsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCRjb25maWcsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG5cbiAgLy8gQ29sb3IgaHVlcyBhcmUgYmFzZWQgb24gdGhlIHNwZWNzIHdoaWNoIGJyaWVmbHkgc2hvdyB0aGUgaHVlcyB0aGF0IGFyZSBhcHBsaWVkIHRvIGEgc3dpdGNoLlxuICAvLyBUaGUgMjAxOCBzcGVjcyBubyBsb25nZXIgZGVzY3JpYmUgaG93IGRhcmsgc3dpdGNoZXMgc2hvdWxkIGxvb2sgbGlrZS4gRHVlIHRvIHRoZSBsYWNrIG9mXG4gIC8vIGluZm9ybWF0aW9uIGZvciBkYXJrIHRoZW1lZCBzd2l0Y2hlcywgd2UgcGFydGlhbGx5IGtlZXAgdGhlIG9sZCBiZWhhdmlvciB0aGF0IGlzIGJhc2VkIG9uXG4gIC8vIHRoZSBwcmV2aW91cyBzcGVjaWZpY2F0aW9ucy4gRm9yIHRoZSBjaGVja2VkIGNvbG9yIHdlIGFsd2F5cyB1c2UgdGhlIGBkZWZhdWx0YCBodWUgYmVjYXVzZVxuICAvLyB0aGF0IGZvbGxvd3MgTURDIGFuZCBhbHNvIG1ha2VzIGl0IGVhc2llciBmb3IgcGVvcGxlIHRvIGNyZWF0ZSBhIGN1c3RvbSB0aGVtZSB3aXRob3V0IG5lZWRpbmdcbiAgLy8gdG8gc3BlY2lmeSBlYWNoIGh1ZSBpbmRpdmlkdWFsbHkuXG4gICR0aHVtYi11bmNoZWNrZWQtaHVlOiBpZigkaXMtZGFyaywgNDAwLCA1MCk7XG4gICR0aHVtYi1jaGVja2VkLWh1ZTogZGVmYXVsdDtcblxuICAkYmFyLXVuY2hlY2tlZC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZCk7XG4gICRyaXBwbGUtdW5jaGVja2VkLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGJhc2UpO1xuXG4gIC5tYXQtc2xpZGUtdG9nZ2xlIHtcbiAgICBAaW5jbHVkZSBfbWF0LXNsaWRlLXRvZ2dsZS1jaGVja2VkKCRhY2NlbnQsICR0aHVtYi1jaGVja2VkLWh1ZSk7XG5cbiAgICAmLm1hdC1wcmltYXJ5IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtc2xpZGUtdG9nZ2xlLWNoZWNrZWQoJHByaW1hcnksICR0aHVtYi1jaGVja2VkLWh1ZSk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXNsaWRlLXRvZ2dsZS1jaGVja2VkKCR3YXJuLCAkdGh1bWItY2hlY2tlZC1odWUpO1xuICAgIH1cblxuICAgICY6bm90KC5tYXQtY2hlY2tlZCkgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICAvLyBTZXQgbm8gb3BhY2l0eSBmb3IgdGhlIHJpcHBsZXMgYmVjYXVzZSB0aGUgcmlwcGxlIG9wYWNpdHkgd2lsbCBiZSBhZGp1c3RlZCBkeW5hbWljYWxseVxuICAgICAgLy8gYmFzZWQgb24gdGhlIHR5cGUgb2YgaW50ZXJhY3Rpb24gd2l0aCB0aGUgc2xpZGUtdG9nZ2xlIChlLmcuIGZvciBob3ZlciwgZm9jdXMpXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmlwcGxlLXVuY2hlY2tlZC1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYiB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oMSwgJGNvbmZpZyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRtYXQtZ3JleSwgJHRodW1iLXVuY2hlY2tlZC1odWUpO1xuICB9XG5cbiAgLm1hdC1zbGlkZS10b2dnbGUtYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFyLXVuY2hlY2tlZC1jb2xvcjtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNsaWRlLXRvZ2dsZS10eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgLm1hdC1zbGlkZS10b2dnbGUtY29udGVudCB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxufVxuXG5AbWl4aW4gX21hdC1zbGlkZS10b2dnbGUtZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gbWF0LXNsaWRlLXRvZ2dsZS10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogX21hdC1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSBfbWF0LWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LXNsaWRlLXRvZ2dsZScpIHtcbiAgICAkY29sb3I6IG1hdC1nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IG1hdC1nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1zbGlkZS10b2dnbGUtY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgX21hdC1zbGlkZS10b2dnbGUtZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1zbGlkZS10b2dnbGUtdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cbkBtaXhpbiBfbWF0LXNsaWRlci1pbm5lci1jb250ZW50LXRoZW1lKCRwYWxldHRlKSB7XG4gIC5tYXQtc2xpZGVyLXRyYWNrLWZpbGwsXG4gIC5tYXQtc2xpZGVyLXRodW1iLFxuICAubWF0LXNsaWRlci10aHVtYi1sYWJlbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlKTtcbiAgfVxuXG4gIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXRleHQge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUsIGRlZmF1bHQtY29udHJhc3QpO1xuICB9XG5cbiAgLm1hdC1zbGlkZXItZm9jdXMtcmluZyB7XG4gICAgJG9wYWNpdHk6IDAuMjtcbiAgICAkY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSwgZGVmYXVsdCwgJG9wYWNpdHkpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcblxuICAgIC8vIGBtYXQtY29sb3JgIHVzZXMgYHJnYmFgIGZvciB0aGUgb3BhY2l0eSB3aGljaCB3b24ndCB3b3JrIHdpdGhcbiAgICAvLyBDU1MgdmFyaWFibGVzIHNvIHdlIG5lZWQgdG8gdXNlIGBvcGFjaXR5YCBhcyBhIGZhbGxiYWNrLlxuICAgIEBpZiAodHlwZS1vZigkY29sb3IpICE9IGNvbG9yKSB7XG4gICAgICBvcGFjaXR5OiAkb3BhY2l0eTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1zbGlkZXItY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJGNvbmZpZywgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJGNvbmZpZywgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJGNvbmZpZywgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcblxuICAkbWF0LXNsaWRlci1vZmYtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2xpZGVyLW9mZik7XG4gICRtYXQtc2xpZGVyLW9mZi1mb2N1c2VkLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNsaWRlci1vZmYtYWN0aXZlKTtcbiAgJG1hdC1zbGlkZXItZGlzYWJsZWQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2xpZGVyLW9mZik7XG4gICRtYXQtc2xpZGVyLWxhYmVsZWQtbWluLXZhbHVlLXRodW1iLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNsaWRlci1taW4pO1xuICAkbWF0LXNsaWRlci1sYWJlbGVkLW1pbi12YWx1ZS10aHVtYi1sYWJlbC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzbGlkZXItb2ZmKTtcbiAgJG1hdC1zbGlkZXItdGljay1vcGFjaXR5OiAwLjc7XG4gICRtYXQtc2xpZGVyLXRpY2stY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgYmFzZSwgJG1hdC1zbGlkZXItdGljay1vcGFjaXR5KTtcbiAgJG1hdC1zbGlkZXItdGljay1zaXplOiAycHg7XG5cbiAgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItb2ZmLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1wcmltYXJ5IHtcbiAgICBAaW5jbHVkZSBfbWF0LXNsaWRlci1pbm5lci1jb250ZW50LXRoZW1lKCRwcmltYXJ5KTtcbiAgfVxuXG4gIC5tYXQtYWNjZW50IHtcbiAgICBAaW5jbHVkZSBfbWF0LXNsaWRlci1pbm5lci1jb250ZW50LXRoZW1lKCRhY2NlbnQpO1xuICB9XG5cbiAgLm1hdC13YXJuIHtcbiAgICBAaW5jbHVkZSBfbWF0LXNsaWRlci1pbm5lci1jb250ZW50LXRoZW1lKCR3YXJuKTtcbiAgfVxuXG4gIC5tYXQtc2xpZGVyOmhvdmVyLFxuICAuY2RrLWZvY3VzZWQge1xuICAgIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItb2ZmLWZvY3VzZWQtY29sb3I7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zbGlkZXItZGlzYWJsZWQge1xuICAgIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQsXG4gICAgLm1hdC1zbGlkZXItdHJhY2stZmlsbCxcbiAgICAubWF0LXNsaWRlci10aHVtYiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1kaXNhYmxlZC1jb2xvcjtcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1kaXNhYmxlZC1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LXNsaWRlci1taW4tdmFsdWUge1xuICAgIC5tYXQtc2xpZGVyLWZvY3VzLXJpbmcge1xuICAgICAgJG9wYWNpdHk6IDAuMTI7XG4gICAgICAkY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgYmFzZSwgJG9wYWNpdHkpO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xuXG4gICAgICAvLyBgbWF0LWNvbG9yYCB1c2VzIGByZ2JhYCBmb3IgdGhlIG9wYWNpdHkgd2hpY2ggd29uJ3Qgd29yayB3aXRoXG4gICAgICAvLyBDU1MgdmFyaWFibGVzIHNvIHdlIG5lZWQgdG8gdXNlIGBvcGFjaXR5YCBhcyBhIGZhbGxiYWNrLlxuICAgICAgQGlmICh0eXBlLW9mKCRjb2xvcikgIT0gY29sb3IpIHtcbiAgICAgICAgb3BhY2l0eTogJG9wYWNpdHk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcge1xuICAgICAgLm1hdC1zbGlkZXItdGh1bWIsXG4gICAgICAubWF0LXNsaWRlci10aHVtYi1sYWJlbCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLWxhYmVsZWQtbWluLXZhbHVlLXRodW1iLWNvbG9yO1xuICAgICAgfVxuXG4gICAgICAmLmNkay1mb2N1c2VkIHtcbiAgICAgICAgLm1hdC1zbGlkZXItdGh1bWIsXG4gICAgICAgIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1sYWJlbGVkLW1pbi12YWx1ZS10aHVtYi1sYWJlbC1jb2xvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICY6bm90KC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcpIHtcbiAgICAgIC5tYXQtc2xpZGVyLXRodW1iIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkbWF0LXNsaWRlci1vZmYtY29sb3I7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyLFxuICAgICAgJi5jZGstZm9jdXNlZCB7XG4gICAgICAgIC5tYXQtc2xpZGVyLXRodW1iIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICRtYXQtc2xpZGVyLW9mZi1mb2N1c2VkLWNvbG9yO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5tYXQtc2xpZGVyLWRpc2FibGVkIC5tYXQtc2xpZGVyLXRodW1iIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICRtYXQtc2xpZGVyLWRpc2FibGVkLWNvbG9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zbGlkZXItaGFzLXRpY2tzIC5tYXQtc2xpZGVyLXdyYXBwZXI6OmFmdGVyIHtcbiAgICBib3JkZXItY29sb3I6ICRtYXQtc2xpZGVyLXRpY2stY29sb3I7XG5cbiAgICAvLyBgbWF0LWNvbG9yYCB1c2VzIGByZ2JhYCBmb3IgdGhlIG9wYWNpdHkgd2hpY2ggd29uJ3Qgd29yayB3aXRoXG4gICAgLy8gQ1NTIHZhcmlhYmxlcyBzbyB3ZSBuZWVkIHRvIHVzZSBgb3BhY2l0eWAgYXMgYSBmYWxsYmFjay5cbiAgICBAaWYgKHR5cGUtb2YoJG1hdC1zbGlkZXItdGljay1jb2xvcikgIT0gY29sb3IpIHtcbiAgICAgIG9wYWNpdHk6ICRtYXQtc2xpZGVyLXRpY2stb3BhY2l0eTtcbiAgICB9XG4gIH1cblxuICAubWF0LXNsaWRlci1ob3Jpem9udGFsIC5tYXQtc2xpZGVyLXRpY2tzIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkbWF0LXNsaWRlci10aWNrLWNvbG9yLFxuICAgICAgICAkbWF0LXNsaWRlci10aWNrLWNvbG9yICRtYXQtc2xpZGVyLXRpY2stc2l6ZSwgdHJhbnNwYXJlbnQgMCwgdHJhbnNwYXJlbnQpO1xuICAgIC8vIEZpcmVmb3ggZG9lc24ndCBkcmF3IHRoZSBncmFkaWVudCBjb3JyZWN0bHkgd2l0aCAndG8gcmlnaHQnXG4gICAgLy8gKHNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xMzE0MzE5KS5cbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LXJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoMC4wMDAxZGVnLCAkbWF0LXNsaWRlci10aWNrLWNvbG9yLFxuICAgICAgICAkbWF0LXNsaWRlci10aWNrLWNvbG9yICRtYXQtc2xpZGVyLXRpY2stc2l6ZSwgdHJhbnNwYXJlbnQgMCwgdHJhbnNwYXJlbnQpO1xuXG4gICAgLy8gYG1hdC1jb2xvcmAgdXNlcyBgcmdiYWAgZm9yIHRoZSBvcGFjaXR5IHdoaWNoIHdvbid0IHdvcmsgd2l0aFxuICAgIC8vIENTUyB2YXJpYWJsZXMgc28gd2UgbmVlZCB0byB1c2UgYG9wYWNpdHlgIGFzIGEgZmFsbGJhY2suXG4gICAgQGlmICh0eXBlLW9mKCRtYXQtc2xpZGVyLXRpY2stY29sb3IpICE9IGNvbG9yKSB7XG4gICAgICBvcGFjaXR5OiAkbWF0LXNsaWRlci10aWNrLW9wYWNpdHk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zbGlkZXItdmVydGljYWwgLm1hdC1zbGlkZXItdGlja3Mge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAkbWF0LXNsaWRlci10aWNrLWNvbG9yLFxuICAgICAgICAkbWF0LXNsaWRlci10aWNrLWNvbG9yICRtYXQtc2xpZGVyLXRpY2stc2l6ZSwgdHJhbnNwYXJlbnQgMCwgdHJhbnNwYXJlbnQpO1xuXG4gICAgLy8gYG1hdC1jb2xvcmAgdXNlcyBgcmdiYWAgZm9yIHRoZSBvcGFjaXR5IHdoaWNoIHdvbid0IHdvcmsgd2l0aFxuICAgIC8vIENTUyB2YXJpYWJsZXMgc28gd2UgbmVlZCB0byB1c2UgYG9wYWNpdHlgIGFzIGEgZmFsbGJhY2suXG4gICAgQGlmICh0eXBlLW9mKCRtYXQtc2xpZGVyLXRpY2stY29sb3IpICE9IGNvbG9yKSB7XG4gICAgICBvcGFjaXR5OiAkbWF0LXNsaWRlci10aWNrLW9wYWNpdHk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtc2xpZGVyLXR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0IHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbik7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gX21hdC1zbGlkZXItZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gbWF0LXNsaWRlci10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogX21hdC1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSBfbWF0LWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LXNsaWRlcicpIHtcbiAgICAkY29sb3I6IG1hdC1nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IG1hdC1nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1zbGlkZXItY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgX21hdC1zbGlkZXItZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1zbGlkZXItdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG4kbWF0LXN0ZXBwZXItaGVhZGVyLWhlaWdodDogNzJweCAhZGVmYXVsdDtcbi8vIE1pbmltdW0gaGVpZ2h0IGZvciBoaWdoZXN0IGRlbnNpdHkgc3RlcHBlcidzIGlzIGRldGVybWluZWQgYmFzZWQgb24gaG93IG11Y2hcbi8vIHN0ZXBwZXIgaGVhZGVycyBjYW4gc2hyaW5rIHVudGlsIHRoZSBzdGVwIGljb24gb3Igc3RlcCBsYWJlbCBleGNlZWQuIFdlIGNhbid0IHVzZVxuLy8gYSB2YWx1ZSBiZWxvdyBgNDJweGAgYmVjYXVzZSB0aGUgb3B0aW9uYWwgbGFiZWwgZm9yIHN0ZXBzIHdvdWxkIG90aGVyd2lzZSBleGNlZWQuXG4kbWF0LXN0ZXBwZXItaGVhZGVyLW1pbmltdW0taGVpZ2h0OiA0MnB4ICFkZWZhdWx0O1xuJG1hdC1zdGVwcGVyLWhlYWRlci1tYXhpbXVtLWhlaWdodDogJG1hdC1zdGVwcGVyLWhlYWRlci1oZWlnaHQgIWRlZmF1bHQ7XG5cbiRtYXQtc3RlcHBlci1kZW5zaXR5LWNvbmZpZzogKFxuICBoZWlnaHQ6IChcbiAgICBkZWZhdWx0OiAkbWF0LXN0ZXBwZXItaGVhZGVyLWhlaWdodCxcbiAgICBtYXhpbXVtOiAkbWF0LXN0ZXBwZXItaGVhZGVyLW1heGltdW0taGVpZ2h0LFxuICAgIG1pbmltdW06ICRtYXQtc3RlcHBlci1oZWFkZXItbWluaW11bS1oZWlnaHQsXG4gIClcbikgIWRlZmF1bHQ7XG5cbi8vIE5vdGU6IFRoZXNlIHZhcmlhYmxlcyBhcmUgbm90IGRlbm90ZWQgd2l0aCBgIWRlZmF1bHRgIGJlY2F1c2UgdGhleSBhcmUgdXNlZCBpbiB0aGUgbm9uLXRoZW1lXG4vLyBjb21wb25lbnQgc3R5bGVzLiBNb2RpZnlpbmcgdGhlc2UgdmFyaWFibGVzIGRvZXMgbm90IGhhdmUgdGhlIGRlc2lyZWQgZWZmZWN0IGZvciBjb25zdW1lcnMuXG4kbWF0LXN0ZXBwZXItbGFiZWwtaGVhZGVyLWhlaWdodDogMjRweDtcbiRtYXQtc3RlcHBlci1sYWJlbC1wb3NpdGlvbi1ib3R0b20tdG9wLWdhcDogMTZweDtcbiRtYXQtc3RlcHBlci1sYWJlbC1taW4td2lkdGg6IDUwcHg7XG5cbiRtYXQtdmVydGljYWwtc3RlcHBlci1jb250ZW50LW1hcmdpbjogMzZweDtcblxuJG1hdC1zdGVwcGVyLXNpZGUtZ2FwOiAyNHB4O1xuJG1hdC1zdGVwcGVyLWxpbmUtd2lkdGg6IDFweDtcbiRtYXQtc3RlcHBlci1saW5lLWdhcDogOHB4O1xuXG4kbWF0LXN0ZXAtc3ViLWxhYmVsLWZvbnQtc2l6ZTogMTJweDtcbiRtYXQtc3RlcC1oZWFkZXItaWNvbi1zaXplOiAxNnB4O1xuXG5cbkBtaXhpbiBtYXQtc3RlcHBlci1jb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCRjb25maWcsIHByaW1hcnkpO1xuICAkd2FybjogbWFwLWdldCgkY29uZmlnLCB3YXJuKTtcblxuICAubWF0LXN0ZXAtaGVhZGVyIHtcbiAgICAmLmNkay1rZXlib2FyZC1mb2N1c2VkLFxuICAgICYuY2RrLXByb2dyYW0tZm9jdXNlZCxcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIpO1xuICAgIH1cblxuICAgIC8vIE9uIHRvdWNoIGRldmljZXMgdGhlIDpob3ZlciBzdGF0ZSB3aWxsIGxpbmdlciBvbiB0aGUgZWxlbWVudCBhZnRlciBhIHRhcC5cbiAgICAvLyBSZXNldCBpdCB2aWEgYEBtZWRpYWAgYWZ0ZXIgdGhlIGRlY2xhcmF0aW9uLCBiZWNhdXNlIHRoZSBtZWRpYSBxdWVyeSBpc24ndFxuICAgIC8vIHN1cHBvcnRlZCBieSBhbGwgYnJvd3NlcnMgeWV0LlxuICAgIEBtZWRpYSAoaG92ZXI6IG5vbmUpIHtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tYXQtc3RlcC1sYWJlbCxcbiAgICAubWF0LXN0ZXAtb3B0aW9uYWwge1xuICAgICAgLy8gVE9ETyhqb3NlcGhwZXJyb3R0KTogVXBkYXRlIHRvIHVzaW5nIGEgY29ycmVjdGVkIGRpc2FibGVkLXRleHQgY29udHJhc3RcbiAgICAgIC8vIGluc3RlYWQgb2Ygc2Vjb25kYXJ5LXRleHQuXG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gICAgfVxuXG4gICAgLm1hdC1zdGVwLWljb24ge1xuICAgICAgLy8gVE9ETyhqb3NlcGhwZXJyb3R0KTogVXBkYXRlIHRvIHVzaW5nIGEgY29ycmVjdGVkIGRpc2FibGVkLXRleHQgY29udHJhc3RcbiAgICAgIC8vIGluc3RlYWQgb2Ygc2Vjb25kYXJ5LXRleHQuXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnksIGRlZmF1bHQtY29udHJhc3QpO1xuICAgIH1cblxuICAgIC5tYXQtc3RlcC1pY29uLXNlbGVjdGVkLFxuICAgIC5tYXQtc3RlcC1pY29uLXN0YXRlLWRvbmUsXG4gICAgLm1hdC1zdGVwLWljb24tc3RhdGUtZWRpdCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgfVxuXG4gICAgLm1hdC1zdGVwLWljb24tc3RhdGUtZXJyb3Ige1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuLCB0ZXh0KTtcbiAgICB9XG5cbiAgICAubWF0LXN0ZXAtbGFiZWwubWF0LXN0ZXAtbGFiZWwtYWN0aXZlIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIH1cblxuICAgIC5tYXQtc3RlcC1sYWJlbC5tYXQtc3RlcC1sYWJlbC1lcnJvciB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuLCB0ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCwgLm1hdC1zdGVwcGVyLXZlcnRpY2FsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICB9XG5cbiAgLm1hdC1zdGVwcGVyLXZlcnRpY2FsLWxpbmU6OmJlZm9yZSB7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cblxuICAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXI6OmJlZm9yZSxcbiAgLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyOjphZnRlcixcbiAgLm1hdC1zdGVwcGVyLWhvcml6b250YWwtbGluZSB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXN0ZXBwZXItdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gIC5tYXQtc3RlcHBlci12ZXJ0aWNhbCwgLm1hdC1zdGVwcGVyLWhvcml6b250YWwge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LXN0ZXAtbGFiZWwge1xuICAgIGZvbnQ6IHtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMSk7XG4gICAgfTtcbiAgfVxuXG4gIC5tYXQtc3RlcC1zdWItbGFiZWwtZXJyb3Ige1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIH1cblxuICAubWF0LXN0ZXAtbGFiZWwtZXJyb3Ige1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTIpO1xuICB9XG5cbiAgLm1hdC1zdGVwLWxhYmVsLXNlbGVjdGVkIHtcbiAgICBmb250OiB7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMik7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICAgIH07XG4gIH1cbn1cblxuQG1peGluIF9tYXQtc3RlcHBlci1kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGRlbnNpdHktc2NhbGU6IG1hdC1nZXQtZGVuc2l0eS1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRoZWlnaHQ6IF9tYXQtZGVuc2l0eS1wcm9wLXZhbHVlKCRtYXQtc3RlcHBlci1kZW5zaXR5LWNvbmZpZywgJGRlbnNpdHktc2NhbGUsIGhlaWdodCk7XG4gICR2ZXJ0aWNhbC1wYWRkaW5nOiAoJGhlaWdodCAtICRtYXQtc3RlcHBlci1sYWJlbC1oZWFkZXItaGVpZ2h0KSAvIDI7XG5cbiAgQGluY2x1ZGUgX21hdC1kZW5zaXR5LWxlZ2FjeS1jb21wYXRpYmlsaXR5KCkge1xuICAgIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlciB7XG4gICAgICBoZWlnaHQ6ICRoZWlnaHQ7XG4gICAgfVxuXG4gICAgLm1hdC1zdGVwcGVyLWxhYmVsLXBvc2l0aW9uLWJvdHRvbSAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXIsXG4gICAgLm1hdC12ZXJ0aWNhbC1zdGVwcGVyLWhlYWRlciwge1xuICAgICAgcGFkZGluZzogJHZlcnRpY2FsLXBhZGRpbmcgJG1hdC1zdGVwcGVyLXNpZGUtZ2FwO1xuICAgIH1cblxuICAgIC8vIEVuc3VyZXMgdGhhdCB0aGUgdmVydGljYWwgbGluZXMgZm9yIHRoZSBzdGVwIGNvbnRlbnQgZXhjZWVkIGludG8gdGhlIHN0ZXBcbiAgICAvLyBoZWFkZXJzIHdpdGggYSBnaXZlbiBkaXN0YW5jZSAoYCRtYXQtc3RlcHBlci1saW5lLWdhcGApIHRvIHRoZSBzdGVwIGljb24uXG4gICAgLm1hdC1zdGVwcGVyLXZlcnRpY2FsLWxpbmU6OmJlZm9yZSB7XG4gICAgICB0b3A6ICRtYXQtc3RlcHBlci1saW5lLWdhcCAtICR2ZXJ0aWNhbC1wYWRkaW5nO1xuICAgICAgYm90dG9tOiAkbWF0LXN0ZXBwZXItbGluZS1nYXAgLSAkdmVydGljYWwtcGFkZGluZztcbiAgICB9XG5cbiAgICAvLyBFbnN1cmVzIHRoYXQgdGhlIGhvcml6b250YWwgbGluZXMgZm9yIHRoZSBzdGVwIGhlYWRlciBhcmUgY2VudGVyZWQgdmVydGljYWxseS5cbiAgICAubWF0LXN0ZXBwZXItbGFiZWwtcG9zaXRpb24tYm90dG9tIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlciB7XG4gICAgICAmOjphZnRlciwgJjo6YmVmb3JlIHtcbiAgICAgICAgdG9wOiAkdmVydGljYWwtcGFkZGluZyArICRtYXQtc3RlcHBlci1sYWJlbC1oZWFkZXItaGVpZ2h0IC8gMjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBFbnN1cmVzIHRoYXQgdGhlIGhvcml6b250YWwgbGluZSBmb3IgdGhlIHN0ZXAgY29udGVudCBpcyBhbGlnbmVkIGNlbnRlcmVkIHZlcnRpY2FsbHkuXG4gICAgLm1hdC1zdGVwcGVyLWxhYmVsLXBvc2l0aW9uLWJvdHRvbSAubWF0LXN0ZXBwZXItaG9yaXpvbnRhbC1saW5lIHtcbiAgICAgIHRvcDogJHZlcnRpY2FsLXBhZGRpbmcgKyAkbWF0LXN0ZXBwZXItbGFiZWwtaGVhZGVyLWhlaWdodCAvIDI7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtc3RlcHBlci10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogX21hdC1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSBfbWF0LWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LXN0ZXBwZXInKSB7XG4gICAgJGNvbG9yOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiBtYXQtZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtc3RlcHBlci1jb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXN0ZXBwZXItZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1zdGVwcGVyLXR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5AbWl4aW4gbWF0LXNvcnQtY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtc29ydC1oZWFkZXItYXJyb3cge1xuICAgICR0YWJsZS1iYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdjYXJkJyk7XG4gICAgJHRleHQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuXG4gICAgLy8gQmVjYXVzZSB0aGUgYXJyb3cgaXMgbWFkZSB1cCBvZiBtdWx0aXBsZSBlbGVtZW50cyB0aGF0IGFyZSBzdGFja2VkIG9uIHRvcCBvZiBlYWNoIG90aGVyLFxuICAgIC8vIHdlIGNhbid0IHVzZSB0aGUgc2VtaS10cmFuc3BhcmVudCBjb2xvciBmcm9tIHRoZSB0aGVtZSBkaXJlY3RseS4gSWYgdGhlIHZhbHVlIGlzIGEgY29sb3JcbiAgICAvLyAqdHlwZSosIHdlIGNvbnZlcnQgaXQgaW50byBhIHNvbGlkIGNvbG9yIGJ5IHRha2luZyB0aGUgb3BhY2l0eSBmcm9tIHRoZSByZ2JhIHZhbHVlIGFuZFxuICAgIC8vIHVzaW5nIHRoZSB2YWx1ZSB0byBkZXRlcm1pbmUgdGhlIHBlcmNlbnRhZ2Ugb2YgdGhlIGJhY2tncm91bmQgdG8gcHV0IGludG8gZm9yZWdyb3VuZFxuICAgIC8vIHdoZW4gbWl4aW5nIHRoZSBjb2xvcnMgdG9nZXRoZXIuIE90aGVyd2lzZSwgaWYgaXQgcmVzb2x2ZXMgdG8gc29tZXRoaW5nIGRpZmZlcmVudFxuICAgIC8vIChlLmcuIGl0IHJlc29sdmVzIHRvIGEgQ1NTIHZhcmlhYmxlKSwgd2UgdXNlIHRoZSBjb2xvciBkaXJlY3RseS5cbiAgICBAaWYgKHR5cGUtb2YoJHRhYmxlLWJhY2tncm91bmQpID09IGNvbG9yIGFuZCB0eXBlLW9mKCR0ZXh0LWNvbG9yKSA9PSBjb2xvcikge1xuICAgICAgJHRleHQtb3BhY2l0eTogb3BhY2l0eSgkdGV4dC1jb2xvcik7XG4gICAgICBjb2xvcjogbWl4KCR0YWJsZS1iYWNrZ3JvdW5kLCByZ2JhKCR0ZXh0LWNvbG9yLCAxKSwgKDEgLSAkdGV4dC1vcGFjaXR5KSAqIDEwMCUpO1xuICAgIH1cbiAgICBAZWxzZSB7XG4gICAgICBjb2xvcjogJHRleHQtY29sb3I7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtc29ydC10eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiBfbWF0LXNvcnQtZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gbWF0LXNvcnQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IF9tYXQtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgX21hdC1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1zb3J0Jykge1xuICAgICRjb2xvcjogbWF0LWdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogbWF0LWdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LXNvcnQtY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgX21hdC1zb3J0LWRlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtc29ydC10eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtdGFicy1jb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkcHJpbWFyeTogbWFwLWdldCgkY29uZmlnLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkY29uZmlnLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkY29uZmlnLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuICAkaGVhZGVyLWJvcmRlcjogMXB4IHNvbGlkIG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG5cbiAgLm1hdC10YWItbmF2LWJhcixcbiAgLm1hdC10YWItaGVhZGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAkaGVhZGVyLWJvcmRlcjtcbiAgfVxuXG4gIC5tYXQtdGFiLWdyb3VwLWludmVydGVkLWhlYWRlciB7XG4gICAgLm1hdC10YWItbmF2LWJhcixcbiAgICAubWF0LXRhYi1oZWFkZXIge1xuICAgICAgYm9yZGVyLXRvcDogJGhlYWRlci1ib3JkZXI7XG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtdGFiLWxhYmVsLCAubWF0LXRhYi1saW5rIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgICYubWF0LXRhYi1kaXNhYmxlZCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cblxuICAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gIH1cblxuICAvLyBSZW1vdmUgaGVhZGVyIGJvcmRlciB3aGVuIHRoZXJlIGlzIGEgYmFja2dyb3VuZCBjb2xvclxuICAubWF0LXRhYi1ncm91cFtjbGFzcyo9J21hdC1iYWNrZ3JvdW5kLSddIC5tYXQtdGFiLWhlYWRlcixcbiAgLm1hdC10YWItbmF2LWJhcltjbGFzcyo9J21hdC1iYWNrZ3JvdW5kLSddIHtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gIH1cblxuICAubWF0LXRhYi1ncm91cCwgLm1hdC10YWItbmF2LWJhciB7XG4gICAgJHRoZW1lLWNvbG9yczogKFxuICAgICAgcHJpbWFyeTogJHByaW1hcnksXG4gICAgICBhY2NlbnQ6ICRhY2NlbnQsXG4gICAgICB3YXJuOiAkd2FyblxuICAgICk7XG5cbiAgICBAZWFjaCAkbmFtZSwgJGNvbG9yIGluICR0aGVtZS1jb2xvcnMge1xuICAgICAgLy8gU2V0IHRoZSBmb3JlZ3JvdW5kIGNvbG9yIG9mIHRoZSB0YWJzXG4gICAgICAmLm1hdC0jeyRuYW1lfSB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtdGFiLWxhYmVsLWZvY3VzKCRjb2xvcik7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtaW5rLWJhcigkY29sb3IpO1xuXG4gICAgICAgIC8vIE92ZXJyaWRlIGluayBiYXIgd2hlbiBiYWNrZ3JvdW5kIGNvbG9yIGlzIHRoZSBzYW1lXG4gICAgICAgICYubWF0LWJhY2tncm91bmQtI3skbmFtZX0ge1xuICAgICAgICAgIEBpbmNsdWRlIF9tYXQtaW5rLWJhcigkY29sb3IsIGRlZmF1bHQtY29udHJhc3QpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgQGVhY2ggJG5hbWUsICRjb2xvciBpbiAkdGhlbWUtY29sb3JzIHtcbiAgICAgIC8vIFNldCBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSB0YWJzIGFuZCBvdmVycmlkZSBmb2N1cyBjb2xvclxuICAgICAgJi5tYXQtYmFja2dyb3VuZC0jeyRuYW1lfSB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtdGFiLWxhYmVsLWZvY3VzKCRjb2xvcik7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtdGFicy1iYWNrZ3JvdW5kKCRjb2xvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBfbWF0LWluay1iYXIoJGNvbG9yLCAkaHVlOiBkZWZhdWx0KSB7XG4gIC5tYXQtaW5rLWJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRjb2xvciwgJGh1ZSk7XG4gIH1cbn1cblxuQG1peGluIF9tYXQtdGFiLWxhYmVsLWZvY3VzKCR0YWItZm9jdXMtY29sb3IpIHtcbiAgLm1hdC10YWItbGFiZWwsXG4gIC5tYXQtdGFiLWxpbmsge1xuICAgICYuY2RrLWtleWJvYXJkLWZvY3VzZWQsXG4gICAgJi5jZGstcHJvZ3JhbS1mb2N1c2VkIHtcbiAgICAgICY6bm90KC5tYXQtdGFiLWRpc2FibGVkKSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkdGFiLWZvY3VzLWNvbG9yLCBsaWdodGVyLCAwLjMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gX21hdC10YWJzLWJhY2tncm91bmQoJGJhY2tncm91bmQtY29sb3IpIHtcbiAgLy8gU2V0IGJhY2tncm91bmQgY29sb3IgZm9yIHRoZSB0YWIgZ3JvdXBcbiAgLm1hdC10YWItaGVhZGVyLCAubWF0LXRhYi1saW5rcywgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZC1jb2xvcik7XG4gIH1cblxuICAvLyBTZXQgbGFiZWxzIHRvIGNvbnRyYXN0IGFnYWluc3QgYmFja2dyb3VuZFxuICAubWF0LXRhYi1sYWJlbCwgLm1hdC10YWItbGluayB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZC1jb2xvciwgZGVmYXVsdC1jb250cmFzdCk7XG5cbiAgICAmLm1hdC10YWItZGlzYWJsZWQge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZC1jb2xvciwgZGVmYXVsdC1jb250cmFzdCwgMC40KTtcbiAgICB9XG4gIH1cblxuICAvLyBTZXQgcGFnaW5hdGlvbiBjaGV2cm9ucyB0byBjb250cmFzdCBiYWNrZ3JvdW5kXG4gIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24ge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgfVxuXG4gIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24ge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yLCBkZWZhdWx0LWNvbnRyYXN0LCAwLjQpO1xuICB9XG5cbiAgLy8gU2V0IHJpcHBsZXMgY29sb3IgdG8gYmUgdGhlIGNvbnRyYXN0IGNvbG9yIG9mIHRoZSBuZXcgYmFja2dyb3VuZC4gT3RoZXJ3aXNlIHRoZSByaXBwbGVcbiAgLy8gY29sb3Igd2lsbCBiZSBiYXNlZCBvbiB0aGUgYXBwIGJhY2tncm91bmQgY29sb3IuXG4gIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZC1jb2xvciwgZGVmYXVsdC1jb250cmFzdCwgMC4xMik7XG4gIH1cbn1cblxuQG1peGluIG1hdC10YWJzLXR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAubWF0LXRhYi1ncm91cCB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtdGFiLWxhYmVsLCAubWF0LXRhYi1saW5rIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBidXR0b24pO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBidXR0b24pO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYnV0dG9uKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIF9tYXQtdGFicy1kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiBtYXQtdGFicy10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogX21hdC1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSBfbWF0LWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LXRhYnMnKSB7XG4gICAgJGNvbG9yOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiBtYXQtZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtdGFicy1jb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRhYnMtZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC10YWJzLXR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG4vLyBNaW5pbXVtIGhlaWdodCBmb3IgdG9vbGJhcidzIGluIHRoZSBoaWdoZXN0IGRlbnNpdHkgaXMgZGlmZmljdWx0IHRvIGRldGVybWluZSBiZWNhdXNlXG4vLyBkZXZlbG9wZXJzIGNhbiBwcm9qZWN0IGFyYml0cmFyeSBjb250ZW50LiBXZSB1c2UgYSBtaW5pbXVtIHZhbHVlIHRoYXQgZW5zdXJlcyB0aGF0IG1vc3Rcbi8vIGNvbW1vbiBjb250ZW50IChlLmcuIGljb24gYnV0dG9ucykgZG9lcyBub3QgZXhjZWVkIHRoZSByb3cgYm91bmRhcmllcyBpbiBoaWdoZXN0IGRlbnNpdHkuXG4kbWF0LXRvb2xiYXItbWluaW11bS1oZWlnaHQ6IDQ0cHggIWRlZmF1bHQ7XG5cbiRtYXQtdG9vbGJhci1oZWlnaHQtZGVza3RvcDogNjRweCAhZGVmYXVsdDtcbiRtYXQtdG9vbGJhci1tYXhpbXVtLWhlaWdodC1kZXNrdG9wOiAkbWF0LXRvb2xiYXItaGVpZ2h0LWRlc2t0b3AgIWRlZmF1bHQ7XG4kbWF0LXRvb2xiYXItbWluaW11bS1oZWlnaHQtZGVza3RvcDogJG1hdC10b29sYmFyLW1pbmltdW0taGVpZ2h0ICFkZWZhdWx0O1xuXG4kbWF0LXRvb2xiYXItaGVpZ2h0LW1vYmlsZTogNTZweCAhZGVmYXVsdDtcbiRtYXQtdG9vbGJhci1tYXhpbXVtLWhlaWdodC1tb2JpbGU6ICRtYXQtdG9vbGJhci1oZWlnaHQtbW9iaWxlICFkZWZhdWx0O1xuJG1hdC10b29sYmFyLW1pbmltdW0taGVpZ2h0LW1vYmlsZTogJG1hdC10b29sYmFyLW1pbmltdW0taGVpZ2h0ICFkZWZhdWx0O1xuXG4kbWF0LXRvb2xiYXItZGVza3RvcC1kZW5zaXR5LWNvbmZpZzogKFxuICBoZWlnaHQ6IChcbiAgICBkZWZhdWx0OiAkbWF0LXRvb2xiYXItaGVpZ2h0LWRlc2t0b3AsXG4gICAgbWF4aW11bTogJG1hdC10b29sYmFyLW1heGltdW0taGVpZ2h0LWRlc2t0b3AsXG4gICAgbWluaW11bTogJG1hdC10b29sYmFyLW1pbmltdW0taGVpZ2h0LWRlc2t0b3AsXG4gIClcbikgIWRlZmF1bHQ7XG5cbiRtYXQtdG9vbGJhci1tb2JpbGUtZGVuc2l0eS1jb25maWc6IChcbiAgaGVpZ2h0OiAoXG4gICAgZGVmYXVsdDogJG1hdC10b29sYmFyLWhlaWdodC1tb2JpbGUsXG4gICAgbWF4aW11bTogJG1hdC10b29sYmFyLW1heGltdW0taGVpZ2h0LW1vYmlsZSxcbiAgICBtaW5pbXVtOiAkbWF0LXRvb2xiYXItbWluaW11bS1oZWlnaHQtbW9iaWxlLFxuICApXG4pICFkZWZhdWx0O1xuXG5cbkBtaXhpbiBfbWF0LXRvb2xiYXItaGVpZ2h0KCRoZWlnaHQpIHtcbiAgLm1hdC10b29sYmFyLW11bHRpcGxlLXJvd3Mge1xuICAgIG1pbi1oZWlnaHQ6ICRoZWlnaHQ7XG4gIH1cbiAgLm1hdC10b29sYmFyLXJvdywgLm1hdC10b29sYmFyLXNpbmdsZS1yb3cge1xuICAgIGhlaWdodDogJGhlaWdodDtcbiAgfVxufVxuXG5AbWl4aW4gX21hdC10b29sYmFyLWNvbG9yKCRwYWxldHRlKSB7XG4gIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkcGFsZXR0ZSk7XG4gIGNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUsIGRlZmF1bHQtY29udHJhc3QpO1xufVxuXG5AbWl4aW4gX21hdC10b29sYmFyLWZvcm0tZmllbGQtb3ZlcnJpZGVzIHtcbiAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSxcbiAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSxcbiAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgLm1hdC1zZWxlY3QtdmFsdWUsXG4gIC5tYXQtc2VsZWN0LWFycm93LFxuICAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICB9XG5cbiAgLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBjYXJldC1jb2xvcjogY3VycmVudENvbG9yO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtdG9vbGJhci1jb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkcHJpbWFyeTogbWFwLWdldCgkY29uZmlnLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkY29uZmlnLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkY29uZmlnLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtdG9vbGJhciB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBhcHAtYmFyKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgICYubWF0LXByaW1hcnkge1xuICAgICAgQGluY2x1ZGUgX21hdC10b29sYmFyLWNvbG9yKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgQGluY2x1ZGUgX21hdC10b29sYmFyLWNvbG9yKCRhY2NlbnQpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgQGluY2x1ZGUgX21hdC10b29sYmFyLWNvbG9yKCR3YXJuKTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBfbWF0LXRvb2xiYXItZm9ybS1maWVsZC1vdmVycmlkZXM7XG4gIH1cbn1cblxuQG1peGluIG1hdC10b29sYmFyLXR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAubWF0LXRvb2xiYXIsXG4gIC5tYXQtdG9vbGJhciBoMSxcbiAgLm1hdC10b29sYmFyIGgyLFxuICAubWF0LXRvb2xiYXIgaDMsXG4gIC5tYXQtdG9vbGJhciBoNCxcbiAgLm1hdC10b29sYmFyIGg1LFxuICAubWF0LXRvb2xiYXIgaDYge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCB0aXRsZSk7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG5cbkBtaXhpbiBfbWF0LXRvb2xiYXItZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRkZW5zaXR5LXNjYWxlOiBtYXQtZ2V0LWRlbnNpdHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkaGVpZ2h0LWRlc2t0b3A6IF9tYXQtZGVuc2l0eS1wcm9wLXZhbHVlKFxuICAgICAgJG1hdC10b29sYmFyLWRlc2t0b3AtZGVuc2l0eS1jb25maWcsICRkZW5zaXR5LXNjYWxlLCBoZWlnaHQpO1xuICAkaGVpZ2h0LW1vYmlsZTogX21hdC1kZW5zaXR5LXByb3AtdmFsdWUoXG4gICAgICAkbWF0LXRvb2xiYXItbW9iaWxlLWRlbnNpdHktY29uZmlnLCAkZGVuc2l0eS1zY2FsZSwgaGVpZ2h0KTtcblxuICBAaW5jbHVkZSBfbWF0LWRlbnNpdHktbGVnYWN5LWNvbXBhdGliaWxpdHkoKSB7XG4gICAgLy8gU2V0IHRoZSBkZWZhdWx0IGhlaWdodCBmb3IgdGhlIHRvb2xiYXIuXG4gICAgQGluY2x1ZGUgX21hdC10b29sYmFyLWhlaWdodCgkaGVpZ2h0LWRlc2t0b3ApO1xuXG4gICAgLy8gQXMgcGVyIHNwZWNzLCB0b29sYmFycyBzaG91bGQgaGF2ZSBhIGRpZmZlcmVudCBoZWlnaHQgaW4gbW9iaWxlIGRldmljZXMuIFRoaXMgaGFzIGJlZW5cbiAgICAvLyBzcGVjaWZpZWQgaW4gdGhlIG9sZCBndWlkZWxpbmVzIGFuZCBpcyBzdGlsbCBvYnNlcnZhYmxlIGluIHRoZSBuZXcgc3BlY2lmaWNhdGlvbnMgYnlcbiAgICAvLyBsb29raW5nIGF0IHRoZSBzcGVjIGltYWdlcy4gU2VlOiBodHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi9jb21wb25lbnRzL2FwcC1iYXJzLXRvcC5odG1sI2FuYXRvbXlcbiAgICBAbWVkaWEgKCRtYXQteHNtYWxsKSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRvb2xiYXItaGVpZ2h0KCRoZWlnaHQtbW9iaWxlKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC10b29sYmFyLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiBfbWF0LWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIF9tYXQtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtdG9vbGJhcicpIHtcbiAgICAkY29sb3I6IG1hdC1nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IG1hdC1nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC10b29sYmFyLWNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdG9vbGJhci1kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LXRvb2xiYXItdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG4kbWF0LXRvb2x0aXAtdGFyZ2V0LWhlaWdodDogMjJweDtcbiRtYXQtdG9vbHRpcC1mb250LXNpemU6IDEwcHg7XG4kbWF0LXRvb2x0aXAtdmVydGljYWwtcGFkZGluZzogKCRtYXQtdG9vbHRpcC10YXJnZXQtaGVpZ2h0IC0gJG1hdC10b29sdGlwLWZvbnQtc2l6ZSkgLyAyO1xuXG4kbWF0LXRvb2x0aXAtaGFuZHNldC10YXJnZXQtaGVpZ2h0OiAzMHB4O1xuJG1hdC10b29sdGlwLWhhbmRzZXQtZm9udC1zaXplOiAxNHB4O1xuJG1hdC10b29sdGlwLWhhbmRzZXQtdmVydGljYWwtcGFkZGluZzpcbiAgICAoJG1hdC10b29sdGlwLWhhbmRzZXQtdGFyZ2V0LWhlaWdodCAtICRtYXQtdG9vbHRpcC1oYW5kc2V0LWZvbnQtc2l6ZSkgLyAyO1xuXG5AbWl4aW4gbWF0LXRvb2x0aXAtY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG5cbiAgLm1hdC10b29sdGlwIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIHRvb2x0aXAsIDAuOSk7XG4gIH1cbn1cblxuQG1peGluIG1hdC10b29sdGlwLXR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAubWF0LXRvb2x0aXAge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gICAgZm9udC1zaXplOiAkbWF0LXRvb2x0aXAtZm9udC1zaXplO1xuICAgIHBhZGRpbmctdG9wOiAkbWF0LXRvb2x0aXAtdmVydGljYWwtcGFkZGluZztcbiAgICBwYWRkaW5nLWJvdHRvbTogJG1hdC10b29sdGlwLXZlcnRpY2FsLXBhZGRpbmc7XG4gIH1cblxuICAubWF0LXRvb2x0aXAtaGFuZHNldCB7XG4gICAgZm9udC1zaXplOiAkbWF0LXRvb2x0aXAtaGFuZHNldC1mb250LXNpemU7XG4gICAgcGFkZGluZy10b3A6ICRtYXQtdG9vbHRpcC1oYW5kc2V0LXZlcnRpY2FsLXBhZGRpbmc7XG4gICAgcGFkZGluZy1ib3R0b206ICRtYXQtdG9vbHRpcC1oYW5kc2V0LXZlcnRpY2FsLXBhZGRpbmc7XG4gIH1cbn1cblxuQG1peGluIF9tYXQtdG9vbHRpcC1kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiBtYXQtdG9vbHRpcC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogX21hdC1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSBfbWF0LWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LXRvb2x0aXAnKSB7XG4gICAgJGNvbG9yOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiBtYXQtZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtdG9vbHRpcC1jb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRvb2x0aXAtZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC10b29sdGlwLXR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtc25hY2stYmFyLWNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCRjb25maWcsIGlzLWRhcmspO1xuICAkYWNjZW50OiBtYXAtZ2V0KCRjb25maWcsIGFjY2VudCk7XG5cbiAgLm1hdC1zbmFjay1iYXItY29udGFpbmVyIHtcbiAgICAvLyBVc2UgdGhlIHByaW1hcnkgdGV4dCBvbiB0aGUgZGFyayB0aGVtZSwgZXZlbiB0aG91Z2ggdGhlIGxpZ2h0ZXIgb25lIHVzZXNcbiAgICAvLyBhIHNlY29uZGFyeSwgYmVjYXVzZSB0aGUgY29udHJhc3Qgb24gdGhlIGxpZ2h0IHByaW1hcnkgdGV4dCBpcyBwb29yLlxuICAgIGNvbG9yOiBpZigkaXMtZGFyay10aGVtZSwgJGRhcmstcHJpbWFyeS10ZXh0LCAkbGlnaHQtc2Vjb25kYXJ5LXRleHQpO1xuICAgIGJhY2tncm91bmQ6IGlmKCRpcy1kYXJrLXRoZW1lLCBtYXAtZ2V0KCRtYXQtZ3JleSwgNTApLCAjMzIzMjMyKTtcblxuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDYsICRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1zaW1wbGUtc25hY2tiYXItYWN0aW9uIHtcbiAgICBjb2xvcjogaWYoJGlzLWRhcmstdGhlbWUsIGluaGVyaXQsIG1hdC1jb2xvcigkYWNjZW50LCB0ZXh0KSk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1zbmFjay1iYXItdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gIC5tYXQtc2ltcGxlLXNuYWNrYmFyIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBib2R5LTEpO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtc2ltcGxlLXNuYWNrYmFyLWFjdGlvbiB7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBpbmhlcml0O1xuICAgICAgc2l6ZTogaW5oZXJpdDtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJ1dHRvbik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBfbWF0LXNuYWNrLWJhci1kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiBtYXQtc25hY2stYmFyLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiBfbWF0LWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIF9tYXQtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtc25hY2stYmFyJykge1xuICAgICRjb2xvcjogbWF0LWdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogbWF0LWdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LXNuYWNrLWJhci1jb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXNuYWNrLWJhci1kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LXNuYWNrLWJhci10eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gVGhlbWUgc3R5bGVzIHRoYXQgb25seSBhcHBseSB0byB0aGUgZmlsbCBhcHBlYXJhbmNlIG9mIHRoZSBmb3JtLWZpZWxkLlxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtZmlsbC1jb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJGNvbmZpZywgaXMtZGFyayk7XG5cbiAgJGZpbGwtYmFja2dyb3VuZDogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBiYXNlLCBpZigkaXMtZGFyay10aGVtZSwgMC4xLCAwLjA0KSk7XG4gICRmaWxsLWRpc2FibGVkLWJhY2tncm91bmQ6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgYmFzZSwgaWYoJGlzLWRhcmstdGhlbWUsIDAuMDUsIDAuMDIpKTtcbiAgJHVuZGVybGluZS1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMC41LCAwLjQyKSk7XG4gICRsYWJlbC1kaXNhYmxlZC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIHtcbiAgICAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZmlsbC1iYWNrZ3JvdW5kO1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGZpbGwtZGlzYWJsZWQtYmFja2dyb3VuZDtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lOjpiZWZvcmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1jb2xvcjtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIHtcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIGNvbG9yOiAkbGFiZWwtZGlzYWJsZWQtY29sb3I7XG4gICAgICB9XG5cbiAgICAgIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmU6OmJlZm9yZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBVc2VkIHRvIG1ha2UgaW5zdGFuY2VzIG9mIHRoZSBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcgbWl4aW4gbmVnbGlnaWJseSBkaWZmZXJlbnQsXG4vLyBhbmQgcHJldmVudCBHb29nbGUncyBDU1MgT3B0aW1pemVyIGZyb20gY29sbGFwc2luZyB0aGUgZGVjbGFyYXRpb25zLiBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIHNvbWVcbi8vIG9mIHRoZSBzZWxlY3RvcnMgY29udGFpbiBwc2V1ZG8tY2xhc3NlcyBub3QgcmVjb2duaXplZCBpbiBhbGwgYnJvd3NlcnMuIElmIGEgYnJvd3NlciBlbmNvdW50ZXJzXG4vLyBhbiB1bmtub3duIHBzZXVkby1jbGFzcyBpdCB3aWxsIGRpc2NhcmQgdGhlIGVudGlyZSBydWxlIHNldC5cbiRtYXQtZm9ybS1maWVsZC1maWxsLWRlZHVwZTogMDtcblxuLy8gQXBwbGllcyBhIGZsb2F0aW5nIGxhYmVsIGFib3ZlIHRoZSBmb3JtIGZpZWxkIGNvbnRyb2wgaXRzZWxmLlxuQG1peGluIF9tYXQtZm9ybS1maWVsZC1maWxsLWxhYmVsLWZsb2F0aW5nKCRmb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0kaW5maXgtbWFyZ2luLXRvcCAtICRpbmZpeC1wYWRkaW5nICsgJG1hdC1mb3JtLWZpZWxkLWZpbGwtZGVkdXBlKVxuICAgICAgICAgICAgIHNjYWxlKCRmb250LXNjYWxlKTtcbiAgd2lkdGg6IDEwMCUgLyAkZm9udC1zY2FsZSArICRtYXQtZm9ybS1maWVsZC1maWxsLWRlZHVwZTtcblxuICAkbWF0LWZvcm0tZmllbGQtZmlsbC1kZWR1cGU6ICRtYXQtZm9ybS1maWVsZC1maWxsLWRlZHVwZSArIDAuMDAwMDEgIWdsb2JhbDtcbn1cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLWZpbGwtdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gIC8vIFRoZSB1bml0LWxlc3MgbGluZS1oZWlnaHQgZnJvbSB0aGUgZm9udCBjb25maWcuXG4gICRsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGlucHV0KTtcbiAgLy8gVGhlIGFtb3VudCB0byBzY2FsZSB0aGUgZm9udCBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsIGFuZCBzdWJzY3JpcHQuXG4gICRzdWJzY3JpcHQtZm9udC1zY2FsZTogMC43NTtcbiAgLy8gVGhlIHBhZGRpbmcgb24gdG9wIG9mIHRoZSBpbmZpeC5cbiAgJGluZml4LXBhZGRpbmctdG9wOiAwLjI1ZW07XG4gIC8vIFRoZSBwYWRkaW5nIGJlbG93IHRoZSBpbmZpeC5cbiAgJGluZml4LXBhZGRpbmctYm90dG9tOiAwLjc1ZW07XG4gIC8vIFRoZSBtYXJnaW4gYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC1pbmZpeCB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgZmxvYXRpbmcgbGFiZWwuXG4gICRpbmZpeC1tYXJnaW4tdG9wOiAxZW0gKiAkbGluZS1oZWlnaHQgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIFRoZSBhbW91bnQgd2Ugb2Zmc2V0IHRoZSBsYWJlbCBmcm9tIHRoZSBpbnB1dCB0ZXh0IGluIHRoZSBmaWxsIGFwcGVhcmFuY2UuXG4gICRmaWxsLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0OiAtMC41ZW07XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICAgIHBhZGRpbmc6ICRpbmZpeC1wYWRkaW5nLXRvcCAwICRpbmZpeC1wYWRkaW5nLWJvdHRvbSAwO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICB0b3A6ICRpbmZpeC1tYXJnaW4tdG9wICsgJGluZml4LXBhZGRpbmctdG9wO1xuICAgICAgbWFyZ2luLXRvcDogJGZpbGwtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQ7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQge1xuICAgICAgJi5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtZmlsbC1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLXRvcCArICRmaWxsLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0LFxuICAgICAgICAgICAgICAgICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2VydmVyLXNpZGUgcmVuZGVyZWQgbWF0SW5wdXQgd2l0aCBhIGxhYmVsIGF0dHJpYnV0ZSBidXQgbGFiZWwgbm90IHNob3duXG4gICAgICAvLyAodXNlZCBhcyBhIHB1cmUgQ1NTIHN0YW5kLWluIGZvciBtYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQpLlxuICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1maWxsLWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmctdG9wICsgJGZpbGwtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQsXG4gICAgICAgICAgICAgICAgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gX21hdC1mb3JtLWZpZWxkLWZpbGwtZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtZmlsbC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogX21hdC1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSBfbWF0LWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LWZvcm0tZmllbGQtZmlsbCcpIHtcbiAgICAkY29sb3I6IG1hdC1nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IG1hdC1nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLWZpbGwtY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWZpbGwtZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLWZpbGwtdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cblxuLy8gVGhlbWUgc3R5bGVzIHRoYXQgb25seSBhcHBseSB0byB0aGUgbGVnYWN5IGFwcGVhcmFuY2Ugb2YgdGhlIGZvcm0tZmllbGQuXG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1sZWdhY3ktY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCRjb25maWcsIGlzLWRhcmspO1xuXG4gICRsYWJlbC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gICR1bmRlcmxpbmUtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDAuNywgMC40MikpO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIGNvbG9yOiAkbGFiZWwtY29sb3I7XG4gICAgfVxuXG4gICAgLm1hdC1oaW50IHtcbiAgICAgIGNvbG9yOiAkbGFiZWwtY29sb3I7XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yO1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgICBAaW5jbHVkZSBtYXQtY29udHJvbC1kaXNhYmxlZC11bmRlcmxpbmUoJHVuZGVybGluZS1jb2xvcik7XG4gICAgfVxuICB9XG59XG5cbi8vIFVzZWQgdG8gbWFrZSBpbnN0YW5jZXMgb2YgdGhlIF9tYXQtZm9ybS1maWVsZC1sYWJlbC1mbG9hdGluZyBtaXhpbiBuZWdsaWdpYmx5IGRpZmZlcmVudCxcbi8vIGFuZCBwcmV2ZW50IEdvb2dsZSdzIENTUyBPcHRpbWl6ZXIgZnJvbSBjb2xsYXBzaW5nIHRoZSBkZWNsYXJhdGlvbnMuIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2Ugc29tZVxuLy8gb2YgdGhlIHNlbGVjdG9ycyBjb250YWluIHBzZXVkby1jbGFzc2VzIG5vdCByZWNvZ25pemVkIGluIGFsbCBicm93c2Vycy4gSWYgYSBicm93c2VyIGVuY291bnRlcnNcbi8vIGFuIHVua25vd24gcHNldWRvLWNsYXNzIGl0IHdpbGwgZGlzY2FyZCB0aGUgZW50aXJlIHJ1bGUgc2V0LlxuJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGU6IDA7XG5cbi8vIEFwcGxpZXMgYSBmbG9hdGluZyBsYWJlbCBhYm92ZSB0aGUgZm9ybSBmaWVsZCBjb250cm9sIGl0c2VsZi5cbkBtaXhpbiBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nKCRmb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApIHtcbiAgLy8gV2UgdXNlIHBlcnNwZWN0aXZlIHRvIGZpeCB0aGUgdGV4dCBibHVycmluZXNzIGFzIGRlc2NyaWJlZCBoZXJlOlxuICAvLyBodHRwOi8vd3d3LnVzZXJhZ2VudG1hbi5jb20vYmxvZy8yMDE0LzA1LzA0L2ZpeGluZy10eXBvZ3JhcGh5LWluc2lkZS1vZi0yLWQtY3NzLXRyYW5zZm9ybXMvXG4gIC8vIFRoaXMgcmVzdWx0cyBpbiBhIHNtYWxsIGppdHRlciBhZnRlciB0aGUgbGFiZWwgZmxvYXRzIG9uIEZpcmVmb3gsIHdoaWNoIHRoZVxuICAvLyB0cmFuc2xhdGVaIGZpeGVzLlxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRpbmZpeC1tYXJnaW4tdG9wIC0gJGluZml4LXBhZGRpbmcpIHNjYWxlKCRmb250LXNjYWxlKSBwZXJzcGVjdGl2ZSgxMDBweClcbiAgdHJhbnNsYXRlWigwLjAwMXB4ICsgJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGUpO1xuICAvLyBUaGUgdHJpY2tzIGFib3ZlIHVzZWQgdG8gc21vb3RoIG91dCB0aGUgYW5pbWF0aW9uIG9uIGNocm9tZSBhbmQgZmlyZWZveCBhY3R1YWxseSBtYWtlIHRoaW5nc1xuICAvLyB3b3JzZSBvbiBJRSwgc28gd2UgZG9uJ3QgaW5jbHVkZSB0aGVtIGluIHRoZSBJRSB2ZXJzaW9uLlxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0kaW5maXgtbWFyZ2luLXRvcCAtICRpbmZpeC1wYWRkaW5nICsgJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGUpXG4gICAgICAgICAgICAgICAgICBzY2FsZSgkZm9udC1zY2FsZSk7XG5cbiAgd2lkdGg6IDEwMCUgLyAkZm9udC1zY2FsZSArICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlO1xuXG4gICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlOiAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZSArIDAuMDAwMDEgIWdsb2JhbDtcbn1cblxuLy8gU2FtZSBhcyBtaXhpbiBhYm92ZSwgYnV0IG9taXRzIHRoZSB0cmFuc2xhdGVaIGZvciBwcmludGluZyBwdXJwb3Nlcy5cbkBtaXhpbiBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nLXByaW50KCRmb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApIHtcbiAgLy8gVGhpcyByZXN1bHRzIGluIGEgc21hbGwgaml0dGVyIGFmdGVyIHRoZSBsYWJlbCBmbG9hdHMgb24gRmlyZWZveCwgd2hpY2ggdGhlXG4gIC8vIHRyYW5zbGF0ZVogZml4ZXMuXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtJGluZml4LW1hcmdpbi10b3AgLSAkaW5maXgtcGFkZGluZyArICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlKVxuICAgICAgICAgICAgICAgICAgc2NhbGUoJGZvbnQtc2NhbGUpO1xuICAvLyBUaGUgdHJpY2tzIGFib3ZlIHVzZWQgdG8gc21vb3RoIG91dCB0aGUgYW5pbWF0aW9uIG9uIGNocm9tZSBhbmQgZmlyZWZveCBhY3R1YWxseSBtYWtlIHRoaW5nc1xuICAvLyB3b3JzZSBvbiBJRSwgc28gd2UgZG9uJ3QgaW5jbHVkZSB0aGVtIGluIHRoZSBJRSB2ZXJzaW9uLlxuICAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZTogJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGUgKyAwLjAwMDAxICFnbG9iYWw7XG59XG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1sZWdhY3ktdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gIC8vIFRoZSB1bml0LWxlc3MgbGluZS1oZWlnaHQgZnJvbSB0aGUgZm9udCBjb25maWcuXG4gICRsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGlucHV0KTtcbiAgLy8gVGhlIGFtb3VudCB0byBzY2FsZSB0aGUgZm9udCBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsIGFuZCBzdWJzY3JpcHQuXG4gICRzdWJzY3JpcHQtZm9udC1zY2FsZTogMC43NTtcbiAgLy8gVGhlIGFtb3VudCBvZiBzcGFjZSBiZXR3ZWVuIHRoZSB0b3Agb2YgdGhlIGxpbmUgYW5kIHRoZSB0b3Agb2YgdGhlIGFjdHVhbCB0ZXh0XG4gIC8vIChhcyBhIGZyYWN0aW9uIG9mIHRoZSBmb250LXNpemUpLlxuICAkbGluZS1zcGFjaW5nOiAoJGxpbmUtaGVpZ2h0IC0gMSkgLyAyO1xuICAvLyBUaGUgcGFkZGluZyBvbiB0aGUgaW5maXguIE1vY2tzIHNob3cgaGFsZiBvZiB0aGUgdGV4dCBzaXplLCBidXQgc2VlbSB0byBtZWFzdXJlIGZyb20gdGhlIGVkZ2VcbiAgLy8gb2YgdGhlIHRleHQgaXRzZWxmLCBub3QgdGhlIGVkZ2Ugb2YgdGhlIGxpbmU7IHRoZXJlZm9yZSB3ZSBzdWJ0cmFjdCBvZmYgdGhlIGxpbmUgc3BhY2luZy5cbiAgJGluZml4LXBhZGRpbmc6IDAuNWVtIC0gJGxpbmUtc3BhY2luZztcbiAgLy8gVGhlIG1hcmdpbiBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLWluZml4IHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBmbG9hdGluZyBsYWJlbC5cbiAgJGluZml4LW1hcmdpbi10b3A6IDFlbSAqICRsaW5lLWhlaWdodCAqICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcbiAgLy8gVGhlIHNwYWNlIGJldHdlZW4gdGhlIGJvdHRvbSBvZiB0aGUgLm1hdC1mb3JtLWZpZWxkLWZsZXggYXJlYSBhbmQgdGhlIHN1YnNjcmlwdCB3cmFwcGVyLlxuICAvLyBNb2NrcyBzaG93IGhhbGYgb2YgdGhlIHRleHQgc2l6ZSwgYnV0IHRoaXMgbWFyZ2luIGlzIGFwcGxpZWQgdG8gYW4gZWxlbWVudCB3aXRoIHRoZSBzdWJzY3JpcHRcbiAgLy8gdGV4dCBmb250IHNpemUsIHNvIHdlIG5lZWQgdG8gZGl2aWRlIGJ5IHRoZSBzY2FsZSBmYWN0b3IgdG8gbWFrZSBpdCBoYWxmIG9mIHRoZSBvcmlnaW5hbCB0ZXh0XG4gIC8vIHNpemUuIFdlIGFnYWluIG5lZWQgdG8gc3VidHJhY3Qgb2ZmIHRoZSBsaW5lIHNwYWNpbmcgc2luY2UgdGhlIG1vY2tzIG1lYXN1cmUgdG8gdGhlIGVkZ2Ugb2YgdGhlXG4gIC8vIHRleHQsIG5vdCB0aGUgIGVkZ2Ugb2YgdGhlIGxpbmUuXG4gICRzdWJzY3JpcHQtbWFyZ2luLXRvcDogMC41ZW0gLyAkc3Vic2NyaXB0LWZvbnQtc2NhbGUgLSAoJGxpbmUtc3BhY2luZyAqIDIpO1xuICAvLyBUaGUgcGFkZGluZyBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLXdyYXBwZXIgdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIHN1YnNjcmlwdCwgc2luY2UgaXQnc1xuICAvLyBhYnNvbHV0ZWx5IHBvc2l0aW9uZWQuIFRoaXMgaXMgYSBjb21iaW5hdGlvbiBvZiB0aGUgc3Vic2NyaXB0J3MgbWFyZ2luIGFuZCBsaW5lLWhlaWdodCwgYnV0IHdlXG4gIC8vIG5lZWQgdG8gbXVsdGlwbHkgYnkgdGhlIHN1YnNjcmlwdCBmb250IHNjYWxlIGZhY3RvciBzaW5jZSB0aGUgd3JhcHBlciBoYXMgYSBsYXJnZXIgZm9udCBzaXplLlxuICAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTogKCRzdWJzY3JpcHQtbWFyZ2luLXRvcCArICRsaW5lLWhlaWdodCkgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IHtcbiAgICAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogJHdyYXBwZXItcGFkZGluZy1ib3R0b207XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICAgIHBhZGRpbmc6ICRpbmZpeC1wYWRkaW5nIDA7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQge1xuICAgICAgJi5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgIH1cblxuICAgICAgLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMCB3aWxsIHJlbHkgb24gQXV0b2ZpbGxNb25pdG9yIGluc3RlYWQuXG4gICAgICAubWF0LWZvcm0tZmllbGQtYXV0b2ZpbGwtY29udHJvbDotd2Via2l0LWF1dG9maWxsICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXJ2ZXItc2lkZSByZW5kZXJlZCBtYXRJbnB1dCB3aXRoIGEgbGFiZWwgYXR0cmlidXRlIGJ1dCBsYWJlbCBub3Qgc2hvd25cbiAgICAgIC8vICh1c2VkIGFzIGEgcHVyZSBDU1Mgc3RhbmQtaW4gZm9yIG1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCkuXG4gICAgICAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIHRvcDogJGluZml4LW1hcmdpbi10b3AgKyAkaW5maXgtcGFkZGluZztcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAgIC8vIFdlIHdhbnQgdGhlIHVuZGVybGluZSB0byBzdGFydCBhdCB0aGUgZW5kIG9mIHRoZSBjb250ZW50IGJveCwgbm90IHRoZSBwYWRkaW5nIGJveCxcbiAgICAgIC8vIHNvIHdlIG1vdmUgaXQgdXAgYnkgdGhlIHBhZGRpbmcgYW1vdW50LlxuICAgICAgYm90dG9tOiAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXIge1xuICAgICAgbWFyZ2luLXRvcDogJHN1YnNjcmlwdC1tYXJnaW4tdG9wO1xuXG4gICAgICAvLyBXZSB3YW50IHRoZSBzdWJzY3JpcHQgdG8gc3RhcnQgYXQgdGhlIGVuZCBvZiB0aGUgY29udGVudCBib3gsIG5vdCB0aGUgcGFkZGluZyBib3gsXG4gICAgICAvLyBzbyB3ZSBtb3ZlIGl0IHVwIGJ5IHRoZSBwYWRkaW5nIGFtb3VudCAoYWRqdXN0ZWQgZm9yIHRoZSBzbWFsbGVyIGZvbnQgc2l6ZSk7XG4gICAgICB0b3A6IGNhbGMoMTAwJSAtICN7JHdyYXBwZXItcGFkZGluZy1ib3R0b20gLyAkc3Vic2NyaXB0LWZvbnQtc2NhbGV9KTtcbiAgICB9XG4gIH1cblxuICAvLyB0cmFuc2xhdGVaIGNhdXNlcyB0aGUgbGFiZWwgdG8gbm90IGFwcGVhciB3aGlsZSBwcmludGluZywgc28gd2Ugb3ZlcnJpZGUgaXQgdG8gbm90XG4gIC8vIGFwcGx5IHRyYW5zbGF0ZVogd2hpbGUgcHJpbnRpbmdcbiAgQG1lZGlhIHByaW50IHtcbiAgICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kge1xuICAgICAgJi5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQge1xuICAgICAgICAmLm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gICAgICAgIC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nLXByaW50KFxuICAgICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMCB3aWxsIHJlbHkgb24gQXV0b2ZpbGxNb25pdG9yIGluc3RlYWQuXG4gICAgICAgIC5tYXQtZm9ybS1maWVsZC1hdXRvZmlsbC1jb250cm9sOi13ZWJraXQtYXV0b2ZpbGwgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmctcHJpbnQoXG4gICAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXJ2ZXItc2lkZSByZW5kZXJlZCBtYXRJbnB1dCB3aXRoIGEgbGFiZWwgYXR0cmlidXRlIGJ1dCBsYWJlbCBub3Qgc2hvd25cbiAgICAgICAgLy8gKHVzZWQgYXMgYSBwdXJlIENTUyBzdGFuZC1pbiBmb3IgbWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0KS5cbiAgICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nLXByaW50KFxuICAgICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogX21hdC1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSBfbWF0LWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LWZvcm0tZmllbGQtbGVnYWN5Jykge1xuICAgICRjb2xvcjogbWF0LWdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogbWF0LWdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtbGVnYWN5LWNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS10eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuXG4vLyBUaGVtZSBzdHlsZXMgdGhhdCBvbmx5IGFwcGx5IHRvIHRoZSBvdXRsaW5lIGFwcGVhcmFuY2Ugb2YgdGhlIGZvcm0tZmllbGQuXG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1vdXRsaW5lLWNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCRjb25maWcsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCRjb25maWcsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCRjb25maWcsIHdhcm4pO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJGNvbmZpZywgaXMtZGFyayk7XG5cbiAgJGxhYmVsLWRpc2FibGVkLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICAkb3V0bGluZS1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMC4zLCAwLjEyKSk7XG4gICRvdXRsaW5lLWNvbG9yLWhvdmVyOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAxLCAwLjg3KSk7XG4gICRvdXRsaW5lLWNvbG9yLXByaW1hcnk6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gICRvdXRsaW5lLWNvbG9yLWFjY2VudDogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICAkb3V0bGluZS1jb2xvci13YXJuOiBtYXQtY29sb3IoJHdhcm4pO1xuICAkb3V0bGluZS1jb2xvci1kaXNhYmxlZDogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMC4xNSwgMC4wNikpO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUge1xuICAgIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcbiAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvcjtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gICAgICBjb2xvcjogJG91dGxpbmUtY29sb3ItaG92ZXI7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9jdXNlZCB7XG4gICAgICAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gICAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvci1wcmltYXJ5O1xuICAgICAgfVxuXG4gICAgICAmLm1hdC1hY2NlbnQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICAgICAgICBjb2xvcjogJG91dGxpbmUtY29sb3ItYWNjZW50O1xuICAgICAgfVxuXG4gICAgICAmLm1hdC13YXJuIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yLXdhcm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2xhc3MgcmVwZWF0ZWQgc28gdGhhdCBydWxlIGlzIHNwZWNpZmljIGVub3VnaCB0byBvdmVycmlkZSBmb2N1c2VkIGFjY2VudCBjb2xvciBjYXNlLlxuICAgICYubWF0LWZvcm0tZmllbGQtaW52YWxpZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIHtcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yLXdhcm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCB7XG4gICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBjb2xvcjogJGxhYmVsLWRpc2FibGVkLWNvbG9yO1xuICAgICAgfVxuXG4gICAgICAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XG4gICAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvci1kaXNhYmxlZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gVXNlZCB0byBtYWtlIGluc3RhbmNlcyBvZiB0aGUgX21hdC1mb3JtLWZpZWxkLWxhYmVsLWZsb2F0aW5nIG1peGluIG5lZ2xpZ2libHkgZGlmZmVyZW50LFxuLy8gYW5kIHByZXZlbnQgR29vZ2xlJ3MgQ1NTIE9wdGltaXplciBmcm9tIGNvbGxhcHNpbmcgdGhlIGRlY2xhcmF0aW9ucy4gVGhpcyBpcyBuZWVkZWQgYmVjYXVzZSBzb21lXG4vLyBvZiB0aGUgc2VsZWN0b3JzIGNvbnRhaW4gcHNldWRvLWNsYXNzZXMgbm90IHJlY29nbml6ZWQgaW4gYWxsIGJyb3dzZXJzLiBJZiBhIGJyb3dzZXIgZW5jb3VudGVyc1xuLy8gYW4gdW5rbm93biBwc2V1ZG8tY2xhc3MgaXQgd2lsbCBkaXNjYXJkIHRoZSBlbnRpcmUgcnVsZSBzZXQuXG4kbWF0LWZvcm0tZmllbGQtb3V0bGluZS1kZWR1cGU6IDA7XG5cbi8vIEFwcGxpZXMgYSBmbG9hdGluZyBsYWJlbCBhYm92ZSB0aGUgZm9ybSBmaWVsZCBjb250cm9sIGl0c2VsZi5cbkBtaXhpbiBfbWF0LWZvcm0tZmllbGQtb3V0bGluZS1sYWJlbC1mbG9hdGluZygkZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtJGluZml4LW1hcmdpbi10b3AgLSAkaW5maXgtcGFkZGluZyArICRtYXQtZm9ybS1maWVsZC1vdXRsaW5lLWRlZHVwZSlcbiAgc2NhbGUoJGZvbnQtc2NhbGUpO1xuICB3aWR0aDogMTAwJSAvICRmb250LXNjYWxlICsgJG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZGVkdXBlO1xuXG4gICRtYXQtZm9ybS1maWVsZC1vdXRsaW5lLWRlZHVwZTogJG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZGVkdXBlICsgMC4wMDAwMSAhZ2xvYmFsO1xufVxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtb3V0bGluZS10eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgLy8gVGhlIHVuaXQtbGVzcyBsaW5lLWhlaWdodCBmcm9tIHRoZSBmb250IGNvbmZpZy5cbiAgJGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgaW5wdXQpO1xuICAvLyBUaGUgYW1vdW50IHRvIHNjYWxlIHRoZSBmb250IGZvciB0aGUgZmxvYXRpbmcgbGFiZWwgYW5kIHN1YnNjcmlwdC5cbiAgJHN1YnNjcmlwdC1mb250LXNjYWxlOiAwLjc1O1xuICAvLyBUaGUgcGFkZGluZyBhYm92ZSBhbmQgYmVsb3cgdGhlIGluZml4LlxuICAkaW5maXgtcGFkZGluZzogMWVtO1xuICAvLyBUaGUgbWFyZ2luIGFwcGxpZWQgdG8gdGhlIGZvcm0tZmllbGQtaW5maXggdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsLlxuICAkaW5maXgtbWFyZ2luLXRvcDogMWVtICogJGxpbmUtaGVpZ2h0ICogJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBUaGUgc3BhY2UgYmV0d2VlbiB0aGUgYm90dG9tIG9mIHRoZSAubWF0LWZvcm0tZmllbGQtZmxleCBhcmVhIGFuZCB0aGUgc3Vic2NyaXB0IHdyYXBwZXIuXG4gIC8vIE1vY2tzIHNob3cgaGFsZiBvZiB0aGUgdGV4dCBzaXplLCBidXQgdGhpcyBtYXJnaW4gaXMgYXBwbGllZCB0byBhbiBlbGVtZW50IHdpdGggdGhlIHN1YnNjcmlwdFxuICAvLyB0ZXh0IGZvbnQgc2l6ZSwgc28gd2UgbmVlZCB0byBkaXZpZGUgYnkgdGhlIHNjYWxlIGZhY3RvciB0byBtYWtlIGl0IGhhbGYgb2YgdGhlIG9yaWdpbmFsIHRleHRcbiAgLy8gc2l6ZS5cbiAgJHN1YnNjcmlwdC1tYXJnaW4tdG9wOiAwLjVlbSAvICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcbiAgLy8gVGhlIHBhZGRpbmcgYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC13cmFwcGVyIHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBzdWJzY3JpcHQsIHNpbmNlIGl0J3NcbiAgLy8gYWJzb2x1dGVseSBwb3NpdGlvbmVkLiBUaGlzIGlzIGEgY29tYmluYXRpb24gb2YgdGhlIHN1YnNjcmlwdCdzIG1hcmdpbiBhbmQgbGluZS1oZWlnaHQsIGJ1dCB3ZVxuICAvLyBuZWVkIHRvIG11bHRpcGx5IGJ5IHRoZSBzdWJzY3JpcHQgZm9udCBzY2FsZSBmYWN0b3Igc2luY2UgdGhlIHdyYXBwZXIgaGFzIGEgbGFyZ2VyIGZvbnQgc2l6ZS5cbiAgJHdyYXBwZXItcGFkZGluZy1ib3R0b206ICgkc3Vic2NyaXB0LW1hcmdpbi10b3AgKyAkbGluZS1oZWlnaHQpICogJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBUaGUgYW1vdW50IHdlIG9mZnNldCB0aGUgbGFiZWwgZnJvbSB0aGUgaW5wdXQgdGV4dCBpbiB0aGUgb3V0bGluZSBhcHBlYXJhbmNlLlxuICAkb3V0bGluZS1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldDogLTAuMjVlbTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIHtcbiAgICAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgICAgcGFkZGluZzogJGluZml4LXBhZGRpbmcgMCAkaW5maXgtcGFkZGluZyAwO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICB0b3A6ICRpbmZpeC1tYXJnaW4tdG9wICsgJGluZml4LXBhZGRpbmc7XG4gICAgICBtYXJnaW4tdG9wOiAkb3V0bGluZS1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldDtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCB7XG4gICAgICAmLm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gICAgICAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcgKyAkb3V0bGluZS1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldCxcbiAgICAgICAgICAgICAgICAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFNlcnZlci1zaWRlIHJlbmRlcmVkIG1hdElucHV0IHdpdGggYSBsYWJlbCBhdHRyaWJ1dGUgYnV0IGxhYmVsIG5vdCBzaG93blxuICAgICAgLy8gKHVzZWQgYXMgYSBwdXJlIENTUyBzdGFuZC1pbiBmb3IgbWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0KS5cbiAgICAgIC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4gICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtb3V0bGluZS1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nICsgJG91dGxpbmUtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQsXG4gICAgICAgICAgICAgICAgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gX21hdC1mb3JtLWZpZWxkLW91dGxpbmUtZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogX21hdC1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSBfbWF0LWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LWZvcm0tZmllbGQtb3V0bGluZScpIHtcbiAgICAkY29sb3I6IG1hdC1nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IG1hdC1nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLW91dGxpbmUtZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cblxuXG4vLyBUaGVtZSBzdHlsZXMgdGhhdCBvbmx5IGFwcGx5IHRvIHRoZSBzdGFuZGFyZCBhcHBlYXJhbmNlIG9mIHRoZSBmb3JtLWZpZWxkLlxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtc3RhbmRhcmQtY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCRjb25maWcsIGlzLWRhcmspO1xuXG4gICR1bmRlcmxpbmUtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDAuNywgMC40MikpO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3I7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1jb250cm9sLWRpc2FibGVkLXVuZGVybGluZSgkdW5kZXJsaW5lLWNvbG9yKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLXN0YW5kYXJkLXR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIF9tYXQtZm9ybS1maWVsZC1zdGFuZGFyZC1kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1zdGFuZGFyZC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogX21hdC1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSBfbWF0LWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LWZvcm0tZmllbGQtc3RhbmRhcmQnKSB7XG4gICAgJGNvbG9yOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiBtYXQtZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1zdGFuZGFyZC1jb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtc3RhbmRhcmQtZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLXN0YW5kYXJkLXR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIENvbG9yIHN0eWxlcyB0aGF0IGFwcGx5IHRvIGFsbCBhcHBlYXJhbmNlcyBvZiB0aGUgZm9ybS1maWVsZC5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1jb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkcHJpbWFyeTogbWFwLWdldCgkY29uZmlnLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkY29uZmlnLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkY29uZmlnLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkY29uZmlnLCBpcy1kYXJrKTtcblxuICAvLyBMYWJlbCBjb2xvcnMuIFJlcXVpcmVkIGlzIHVzZWQgZm9yIHRoZSBgKmAgc3RhciBzaG93biBpbiB0aGUgbGFiZWwuXG4gICRsYWJlbC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCwgaWYoJGlzLWRhcmstdGhlbWUsIDAuNywgMC42KSk7XG4gICRmb2N1c2VkLWxhYmVsLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnksIHRleHQpO1xuICAkcmVxdWlyZWQtbGFiZWwtY29sb3I6IG1hdC1jb2xvcigkYWNjZW50LCB0ZXh0KTtcblxuICAvLyBVbmRlcmxpbmUgY29sb3JzLlxuICAkdW5kZXJsaW5lLWNvbG9yLWJhc2U6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDEsIDAuODcpKTtcbiAgJHVuZGVybGluZS1jb2xvci1hY2NlbnQ6IG1hdC1jb2xvcigkYWNjZW50LCB0ZXh0KTtcbiAgJHVuZGVybGluZS1jb2xvci13YXJuOiBtYXQtY29sb3IoJHdhcm4sIHRleHQpO1xuICAkdW5kZXJsaW5lLWZvY3VzZWQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgdGV4dCk7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICBjb2xvcjogJGxhYmVsLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1oaW50IHtcbiAgICBjb2xvcjogJGxhYmVsLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgY29sb3I6ICRmb2N1c2VkLWxhYmVsLWNvbG9yO1xuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLWFjY2VudDtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLXdhcm47XG4gICAgfVxuICB9XG5cbiAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yZXF1aXJlZC1tYXJrZXIge1xuICAgIGNvbG9yOiAkcmVxdWlyZWQtbGFiZWwtY29sb3I7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLWJhc2U7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQge1xuICAgIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1mb2N1c2VkLWNvbG9yO1xuXG4gICAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLWFjY2VudDtcbiAgICAgIH1cblxuICAgICAgJi5tYXQtd2FybiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9jdXNlZDpub3QoLm1hdC1mb3JtLWZpZWxkLWludmFsaWQpIHtcbiAgICAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWZvY3VzZWQtY29sb3I7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICAgICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3ItYWNjZW50O1xuICAgIH1cblxuICAgICYubWF0LXdhcm4gLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gICAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuICAgIH1cbiAgfVxuXG4gIC8vIFN0eWxpbmcgZm9yIHRoZSBlcnJvciBzdGF0ZSBvZiB0aGUgZm9ybSBmaWVsZC4gTm90ZSB0aGF0IHdoaWxlIHRoZSBzYW1lIGNhbiBiZVxuICAvLyBhY2hpZXZlZCB3aXRoIHRoZSBuZy0qIGNsYXNzZXMsIHdlIHVzZSB0aGlzIGFwcHJvYWNoIGluIG9yZGVyIHRvIGVuc3VyZSB0aGF0IHRoZSBzYW1lXG4gIC8vIGxvZ2ljIGlzIHVzZWQgdG8gc3R5bGUgdGhlIGVycm9yIHN0YXRlIGFuZCB0byBzaG93IHRoZSBlcnJvciBtZXNzYWdlcy5cbiAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQge1xuICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuXG4gICAgICAmLm1hdC1hY2NlbnQsXG4gICAgICAubWF0LWZvcm0tZmllbGQtcmVxdWlyZWQtbWFya2VyIHtcbiAgICAgICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtcmlwcGxlLFxuICAgIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUubWF0LWFjY2VudCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLXdhcm47XG4gICAgfVxuICB9XG5cbiAgLm1hdC1lcnJvciB7XG4gICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcbiAgfVxuXG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1jb2xvcigkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtc3RhbmRhcmQtY29sb3IoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLWZpbGwtY29sb3IoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtY29sb3IoJGNvbmZpZyk7XG59XG5cbi8vIFVzZWQgdG8gbWFrZSBpbnN0YW5jZXMgb2YgdGhlIF9tYXQtZm9ybS1maWVsZC1sYWJlbC1mbG9hdGluZyBtaXhpbiBuZWdsaWdpYmx5IGRpZmZlcmVudCxcbi8vIGFuZCBwcmV2ZW50IEdvb2dsZSdzIENTUyBPcHRpbWl6ZXIgZnJvbSBjb2xsYXBzaW5nIHRoZSBkZWNsYXJhdGlvbnMuIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2Ugc29tZVxuLy8gb2YgdGhlIHNlbGVjdG9ycyBjb250YWluIHBzZXVkby1jbGFzc2VzIG5vdCByZWNvZ25pemVkIGluIGFsbCBicm93c2Vycy4gSWYgYSBicm93c2VyIGVuY291bnRlcnNcbi8vIGFuIHVua25vd24gcHNldWRvLWNsYXNzIGl0IHdpbGwgZGlzY2FyZCB0aGUgZW50aXJlIHJ1bGUgc2V0LlxuJG1hdC1mb3JtLWZpZWxkLWRlZHVwZTogMDtcblxuLy8gQXBwbGllcyBhIGZsb2F0aW5nIGxhYmVsIGFib3ZlIHRoZSBmb3JtIGZpZWxkIGNvbnRyb2wgaXRzZWxmLlxuQG1peGluIF9tYXQtZm9ybS1maWVsZC1sYWJlbC1mbG9hdGluZygkZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtJGluZml4LW1hcmdpbi10b3AgLSAkaW5maXgtcGFkZGluZyArICRtYXQtZm9ybS1maWVsZC1kZWR1cGUpXG4gICAgICAgICAgICAgc2NhbGUoJGZvbnQtc2NhbGUpO1xuICB3aWR0aDogMTAwJSAvICRmb250LXNjYWxlICsgJG1hdC1mb3JtLWZpZWxkLWRlZHVwZTtcblxuICAkbWF0LWZvcm0tZmllbGQtZGVkdXBlOiAkbWF0LWZvcm0tZmllbGQtZGVkdXBlICsgMC4wMDAwMSAhZ2xvYmFsO1xufVxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gIC8vIFRoZSB1bml0LWxlc3MgbGluZS1oZWlnaHQgZnJvbSB0aGUgZm9udCBjb25maWcuXG4gICRsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGlucHV0KTtcblxuICAvLyBUaGUgYW1vdW50IHRvIHNjYWxlIHRoZSBmb250IGZvciB0aGUgZmxvYXRpbmcgbGFiZWwgYW5kIHN1YnNjcmlwdC5cbiAgJHN1YnNjcmlwdC1mb250LXNjYWxlOiAwLjc1O1xuICAvLyBUaGUgYW1vdW50IHRvIHNjYWxlIHRoZSBmb250IGZvciB0aGUgcHJlZml4IGFuZCBzdWZmaXggaWNvbnMuXG4gICRwcmVmaXgtc3VmZml4LWljb24tZm9udC1zY2FsZTogMS41O1xuXG4gIC8vIFRoZSBwYWRkaW5nIG9uIHRoZSBpbmZpeC4gTW9ja3Mgc2hvdyBoYWxmIG9mIHRoZSB0ZXh0IHNpemUuXG4gICRpbmZpeC1wYWRkaW5nOiAwLjVlbTtcbiAgLy8gVGhlIG1hcmdpbiBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLWluZml4IHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBmbG9hdGluZyBsYWJlbC5cbiAgJGluZml4LW1hcmdpbi10b3A6IDFlbSAqICRsaW5lLWhlaWdodCAqICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcbiAgLy8gRm9udCBzaXplIHRvIHVzZSBmb3IgdGhlIGxhYmVsIGFuZCBzdWJzY3JpcHQgdGV4dC5cbiAgJHN1YnNjcmlwdC1mb250LXNpemU6ICRzdWJzY3JpcHQtZm9udC1zY2FsZSAqIDEwMCU7XG4gIC8vIEZvbnQgc2l6ZSB0byB1c2UgZm9yIHRoZSBmb3IgdGhlIHByZWZpeCBhbmQgc3VmZml4IGljb25zLlxuICAkcHJlZml4LXN1ZmZpeC1pY29uLWZvbnQtc2l6ZTogJHByZWZpeC1zdWZmaXgtaWNvbi1mb250LXNjYWxlICogMTAwJTtcbiAgLy8gVGhlIHNwYWNlIGJldHdlZW4gdGhlIGJvdHRvbSBvZiB0aGUgLm1hdC1mb3JtLWZpZWxkLWZsZXggYXJlYSBhbmQgdGhlIHN1YnNjcmlwdCB3cmFwcGVyLlxuICAvLyBNb2NrcyBzaG93IGhhbGYgb2YgdGhlIHRleHQgc2l6ZSwgYnV0IHRoaXMgbWFyZ2luIGlzIGFwcGxpZWQgdG8gYW4gZWxlbWVudCB3aXRoIHRoZSBzdWJzY3JpcHRcbiAgLy8gdGV4dCBmb250IHNpemUsIHNvIHdlIG5lZWQgdG8gZGl2aWRlIGJ5IHRoZSBzY2FsZSBmYWN0b3IgdG8gbWFrZSBpdCBoYWxmIG9mIHRoZSBvcmlnaW5hbCB0ZXh0XG4gIC8vIHNpemUuXG4gICRzdWJzY3JpcHQtbWFyZ2luLXRvcDogMC41ZW0gLyAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIFRoZSBwYWRkaW5nIGFwcGxpZWQgdG8gdGhlIGZvcm0tZmllbGQtd3JhcHBlciB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgc3Vic2NyaXB0LCBzaW5jZSBpdCdzXG4gIC8vIGFic29sdXRlbHkgcG9zaXRpb25lZC4gVGhpcyBpcyBhIGNvbWJpbmF0aW9uIG9mIHRoZSBzdWJzY3JpcHQncyBtYXJnaW4gYW5kIGxpbmUtaGVpZ2h0LCBidXQgd2VcbiAgLy8gbmVlZCB0byBtdWx0aXBseSBieSB0aGUgc3Vic2NyaXB0IGZvbnQgc2NhbGUgZmFjdG9yIHNpbmNlIHRoZSB3cmFwcGVyIGhhcyBhIGxhcmdlciBmb250IHNpemUuXG4gICR3cmFwcGVyLXBhZGRpbmctYm90dG9tOiAoJHN1YnNjcmlwdC1tYXJnaW4tdG9wICsgJGxpbmUtaGVpZ2h0KSAqICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcblxuICAubWF0LWZvcm0tZmllbGQge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBpbnB1dCk7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gICAgcGFkZGluZy1ib3R0b206ICR3cmFwcGVyLXBhZGRpbmctYm90dG9tO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXByZWZpeCxcbiAgLm1hdC1mb3JtLWZpZWxkLXN1ZmZpeCB7XG4gICAgLy8gQWxsb3cgaWNvbnMgaW4gYSBwcmVmaXggb3Igc3VmZml4IHRvIGFkYXB0IHRvIHRoZSBjb3JyZWN0IHNpemUuXG4gICAgLm1hdC1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogJHByZWZpeC1zdWZmaXgtaWNvbi1mb250LXNpemU7XG4gICAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xuICAgIH1cblxuICAgIC8vIEFsbG93IGljb24gYnV0dG9ucyBpbiBhIHByZWZpeCBvciBzdWZmaXggdG8gYWRhcHQgdG8gdGhlIGNvcnJlY3Qgc2l6ZS5cbiAgICAubWF0LWljb24tYnV0dG9uIHtcbiAgICAgIGhlaWdodDogJHByZWZpeC1zdWZmaXgtaWNvbi1mb250LXNjYWxlICogMWVtO1xuICAgICAgd2lkdGg6ICRwcmVmaXgtc3VmZml4LWljb24tZm9udC1zY2FsZSAqIDFlbTtcblxuICAgICAgLm1hdC1pY29uIHtcbiAgICAgICAgaGVpZ2h0OiAkbGluZS1oZWlnaHQgKiAxZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICBwYWRkaW5nOiAkaW5maXgtcGFkZGluZyAwO1xuICAgIC8vIFRocm93cyBvZmYgdGhlIGJhc2VsaW5lIGlmIHdlIGRvIGl0IGFzIGEgcmVhbCBtYXJnaW4sIHNvIHdlIGRvIGl0IGFzIGEgYm9yZGVyIGluc3RlYWQuXG4gICAgYm9yZGVyLXRvcDogJGluZml4LW1hcmdpbi10b3Agc29saWQgdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IHtcbiAgICAmLm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gICAgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgfVxuXG4gICAgLy8gU2VydmVyLXNpZGUgcmVuZGVyZWQgbWF0SW5wdXQgd2l0aCBhIGxhYmVsIGF0dHJpYnV0ZSBidXQgbGFiZWwgbm90IHNob3duXG4gICAgLy8gKHVzZWQgYXMgYSBwdXJlIENTUyBzdGFuZC1pbiBmb3IgbWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0KS5cbiAgICAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIge1xuICAgIHRvcDogLSRpbmZpeC1tYXJnaW4tdG9wO1xuICAgIHBhZGRpbmctdG9wOiAkaW5maXgtbWFyZ2luLXRvcDtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgdG9wOiAkaW5maXgtbWFyZ2luLXRvcCArICRpbmZpeC1wYWRkaW5nO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgLy8gV2Ugd2FudCB0aGUgdW5kZXJsaW5lIHRvIHN0YXJ0IGF0IHRoZSBlbmQgb2YgdGhlIGNvbnRlbnQgYm94LCBub3QgdGhlIHBhZGRpbmcgYm94LFxuICAgIC8vIHNvIHdlIG1vdmUgaXQgdXAgYnkgdGhlIHBhZGRpbmcgYW1vdW50LlxuICAgIGJvdHRvbTogJHdyYXBwZXItcGFkZGluZy1ib3R0b207XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXIge1xuICAgIGZvbnQtc2l6ZTogJHN1YnNjcmlwdC1mb250LXNpemU7XG4gICAgbWFyZ2luLXRvcDogJHN1YnNjcmlwdC1tYXJnaW4tdG9wO1xuXG4gICAgLy8gV2Ugd2FudCB0aGUgc3Vic2NyaXB0IHRvIHN0YXJ0IGF0IHRoZSBlbmQgb2YgdGhlIGNvbnRlbnQgYm94LCBub3QgdGhlIHBhZGRpbmcgYm94LFxuICAgIC8vIHNvIHdlIG1vdmUgaXQgdXAgYnkgdGhlIHBhZGRpbmcgYW1vdW50IChhZGp1c3RlZCBmb3IgdGhlIHNtYWxsZXIgZm9udCBzaXplKTtcbiAgICB0b3A6IGNhbGMoMTAwJSAtICN7JHdyYXBwZXItcGFkZGluZy1ib3R0b20gLyAkc3Vic2NyaXB0LWZvbnQtc2NhbGV9KTtcbiAgfVxuXG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1zdGFuZGFyZC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1maWxsLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdHlwb2dyYXBoeSgkY29uZmlnKTtcbn1cblxuQG1peGluIF9tYXQtZm9ybS1maWVsZC1kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGRlbnNpdHktc2NhbGU6IG1hdC1nZXQtZGVuc2l0eS1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVuc2l0eSgkZGVuc2l0eS1zY2FsZSk7XG4gIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1zdGFuZGFyZC1kZW5zaXR5KCRkZW5zaXR5LXNjYWxlKTtcbiAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWZpbGwtZGVuc2l0eSgkZGVuc2l0eS1zY2FsZSk7XG4gIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWRlbnNpdHkoJGRlbnNpdHktc2NhbGUpO1xufVxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IF9tYXQtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgX21hdC1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1mb3JtLWZpZWxkJykge1xuICAgICRjb2xvcjogbWF0LWdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogbWF0LWdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWRlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC10eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cbiRtYXQtdHJlZS1ub2RlLWhlaWdodDogNDhweCAhZGVmYXVsdDtcbi8vIE1pbmltdW0gaGVpZ2h0IGZvciB0cmVlIG5vZGVzIGluIGhpZ2hlc3QgZGVuc2l0eSBpcyBkaWZmaWN1bHQgdG8gZGV0ZXJtaW5lIGFzXG4vLyBkZXZlbG9wZXJzIGNhbiBkaXNwbGF5IGFyYml0cmFyeSBjb250ZW50LiBXZSB1c2UgYSBtaW5pbXVtIGhlaWdodCB3aGljaCBlbnN1cmVzXG4vLyB0aGF0IGNvbW1vbiBjb250ZW50IHBsYWNlZCBpbiB0cmVlIG5vZGVzIGRvZXMgbm90IGV4Y2VlZCAoZS5nLiBpY29ucywgY2hlY2tib3hlcykuXG4kbWF0LXRyZWUtbm9kZS1taW5pbXVtLWhlaWdodDogMjRweCAhZGVmYXVsdDtcbiRtYXQtdHJlZS1ub2RlLW1heGltdW0taGVpZ2h0OiAkbWF0LXRyZWUtbm9kZS1oZWlnaHQgIWRlZmF1bHQ7XG5cbiRtYXQtdHJlZS1kZW5zaXR5LWNvbmZpZzogKFxuICBoZWlnaHQ6IChcbiAgICBkZWZhdWx0OiAkbWF0LXRyZWUtbm9kZS1oZWlnaHQsXG4gICAgbWF4aW11bTogJG1hdC10cmVlLW5vZGUtbWF4aW11bS1oZWlnaHQsXG4gICAgbWluaW11bTogJG1hdC10cmVlLW5vZGUtbWluaW11bS1oZWlnaHQsXG4gIClcbikgIWRlZmF1bHQ7XG5cblxuQG1peGluIG1hdC10cmVlLWNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LXRyZWUge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2NhcmQnKTtcbiAgfVxuXG4gIC5tYXQtdHJlZS1ub2RlLFxuICAubWF0LW5lc3RlZC10cmVlLW5vZGUge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtdHJlZS10eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgLm1hdC10cmVlIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC10cmVlLW5vZGUsXG4gIC5tYXQtbmVzdGVkLXRyZWUtbm9kZSB7XG4gICAgZm9udC13ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTEpO1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpO1xuICB9XG59XG5cbkBtaXhpbiBfbWF0LXRyZWUtZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRkZW5zaXR5LXNjYWxlOiBtYXQtZ2V0LWRlbnNpdHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkaGVpZ2h0OiBfbWF0LWRlbnNpdHktcHJvcC12YWx1ZSgkbWF0LXRyZWUtZGVuc2l0eS1jb25maWcsICRkZW5zaXR5LXNjYWxlLCBoZWlnaHQpO1xuXG4gIEBpbmNsdWRlIF9tYXQtZGVuc2l0eS1sZWdhY3ktY29tcGF0aWJpbGl0eSgpIHtcbiAgICAubWF0LXRyZWUtbm9kZSB7XG4gICAgICBtaW4taGVpZ2h0OiAkaGVpZ2h0O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXRyZWUtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IF9tYXQtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgX21hdC1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC10cmVlJykge1xuICAgICRjb2xvcjogbWF0LWdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogbWF0LWdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LXRyZWUtY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgX21hdC10cmVlLWRlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtdHJlZS10eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuLy8gSW5jbHVkZXMgYWxsIG9mIHRoZSB0eXBvZ3JhcGhpYyBzdHlsZXMuXG5AbWl4aW4gYW5ndWxhci1tYXRlcmlhbC10eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWU6IG51bGwpIHtcbiAgJGNvbmZpZzogaWYoX21hdC1pcy10aGVtZS1vYmplY3QoJGNvbmZpZy1vci10aGVtZSksXG4gICAgICBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpLCAkY29uZmlnLW9yLXRoZW1lKTtcblxuICAvLyBJZiBubyBhY3R1YWwgY29sb3IgY29uZmlndXJhdGlvbiBoYXMgYmVlbiBzcGVjaWZpZWQsIGNyZWF0ZSBhIGRlZmF1bHQgb25lLlxuICBAaWYgbm90ICRjb25maWcge1xuICAgICRjb25maWc6IG1hdC10eXBvZ3JhcGh5LWNvbmZpZygpO1xuICB9XG5cbiAgLy8gVE9ETzogQ09NUC0zMDk6IERvIG5vdCB1c2UgaW5kaXZpZHVhbCBtaXhpbnMuIEluc3RlYWQsIHVzZSB0aGUgYWxsLXRoZW1lIG1peGluIGFuZCBvbmx5XG4gIC8vIHNwZWNpZnkgYSBgdHlwb2dyYXBoeWAgY29uZmlnIHdoaWxlIHNldHRpbmcgYGNvbG9yYCBhbmQgYGRlbnNpdHlgIHRvIGBudWxsYC4gVGhpcyBpcyBjdXJyZW50bHlcbiAgLy8gbm90IHBvc3NpYmxlIGFzIGl0IHdvdWxkIGludHJvZHVjZSBhIGNpcmN1bGFyIGRlcGVuZGVuY3kgZm9yIHR5cG9ncmFwaHkgYmVjYXVzZSB0aGUgYG1hdC1jb3JlYFxuICAvLyBtaXhpbiB0aGF0IGlzIHRyYW5zaXRpdmVseSBsb2FkZWQgYnkgdGhlIGBhbGwtdGhlbWVgIGZpbGUsIGltcG9ydHMgYGFsbC10eXBvZ3JhcGh5YCB3aGljaFxuICAvLyB3b3VsZCB0aGVuIGxvYWQgYGFsbC10aGVtZWAgYWdhaW4uIFRoaXMgdWx0aW1hdGVseSByZXN1bHRzIGEgY2lyY3VsYXIgZGVwZW5kZW5jeS5cblxuICBAaW5jbHVkZSBtYXQtYmFkZ2UtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWJhc2UtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWF1dG9jb21wbGV0ZS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtYm90dG9tLXNoZWV0LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1idXR0b24tdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWJ1dHRvbi10b2dnbGUtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWNhcmQtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWNoZWNrYm94LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1jaGlwcy10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZGl2aWRlci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtdGFibGUtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWRhdGVwaWNrZXItdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWRpYWxvZy10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZXhwYW5zaW9uLXBhbmVsLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1ncmlkLWxpc3QtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWljb24tdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWlucHV0LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1tZW51LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1wYWdpbmF0b3ItdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXByb2dyZXNzLWJhci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtcmFkaW8tdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXNlbGVjdC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtc2lkZW5hdi10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtc2xpZGUtdG9nZ2xlLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1zbGlkZXItdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXN0ZXBwZXItdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXNvcnQtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXRhYnMtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXRvb2xiYXItdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXRvb2x0aXAtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWxpc3QtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LW9wdGlvbi10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtb3B0Z3JvdXAtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXNuYWNrLWJhci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtdHJlZS10eXBvZ3JhcGh5KCRjb25maWcpO1xufVxuXG5cbi8vIE1peGluIHRoYXQgcmVuZGVycyBhbGwgb2YgdGhlIGNvcmUgc3R5bGVzIHRoYXQgYXJlIG5vdCB0aGVtZS1kZXBlbmRlbnQuXG5AbWl4aW4gbWF0LWNvcmUoJHR5cG9ncmFwaHktY29uZmlnOiBudWxsKSB7XG4gIEBpbmNsdWRlIGFuZ3VsYXItbWF0ZXJpYWwtdHlwb2dyYXBoeSgkdHlwb2dyYXBoeS1jb25maWcpO1xuICBAaW5jbHVkZSBtYXQtcmlwcGxlKCk7XG4gIEBpbmNsdWRlIGNkay1hMTF5KCk7XG4gIEBpbmNsdWRlIGNkay1vdmVybGF5KCk7XG4gIEBpbmNsdWRlIGNkay10ZXh0LWZpZWxkKCk7XG5cbiAgQGluY2x1ZGUgX21hdC1zdHJvbmctZm9jdXMtaW5kaWNhdG9ycy1wb3NpdGlvbmluZygpO1xuICBAaW5jbHVkZSBfbWF0LW1kYy1jb3JlKCk7XG59XG5cbkBtaXhpbiBtYXQtY29yZS1jb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAvLyBXcmFwcGVyIGVsZW1lbnQgdGhhdCBwcm92aWRlcyB0aGUgdGhlbWUgYmFja2dyb3VuZCB3aGVuIHRoZSB1c2VyJ3MgY29udGVudCBpc24ndFxuICAvLyBpbnNpZGUgb2YgYSBgbWF0LXNpZGVuYXYtY29udGFpbmVyYC4gTm90ZSB0aGF0IHdlIG5lZWQgdG8gZXhjbHVkZSB0aGUgYW1wZXJzYW5kXG4gIC8vIHNlbGVjdG9yIGluIGNhc2UgdGhlIG1peGluIGlzIGluY2x1ZGVkIGF0IHRoZSB0b3AgbGV2ZWwuXG4gIC5tYXQtYXBwLWJhY2tncm91bmQje2lmKCYsICcsICYubWF0LWFwcC1iYWNrZ3JvdW5kJywgJycpfSB7XG4gICAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG4gICAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGJhY2tncm91bmQpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG5cbiAgLy8gUHJvdmlkZXMgZXh0ZXJuYWwgQ1NTIGNsYXNzZXMgZm9yIGVhY2ggZWxldmF0aW9uIHZhbHVlLiBFYWNoIENTUyBjbGFzcyBpcyBmb3JtYXR0ZWQgYXNcbiAgLy8gYG1hdC1lbGV2YXRpb24teiR6VmFsdWVgIHdoZXJlIGAkelZhbHVlYCBjb3JyZXNwb25kcyB0byB0aGUgei1zcGFjZSB0byB3aGljaCB0aGUgZWxlbWVudCBpc1xuICAvLyBlbGV2YXRlZC5cbiAgQGZvciAkelZhbHVlIGZyb20gMCB0aHJvdWdoIDI0IHtcbiAgICAuI3skX21hdC1lbGV2YXRpb24tcHJlZml4fSN7JHpWYWx1ZX0ge1xuICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oJHpWYWx1ZSwgJGNvbmZpZyk7XG4gICAgfVxuICB9XG5cbiAgLy8gTWFya2VyIHRoYXQgaXMgdXNlZCB0byBkZXRlcm1pbmUgd2hldGhlciB0aGUgdXNlciBoYXMgYWRkZWQgYSB0aGVtZSB0byB0aGVpciBwYWdlLlxuICBAYXQtcm9vdCB7XG4gICAgLm1hdC10aGVtZS1sb2FkZWQtbWFya2VyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cbi8vIE1peGluIHRoYXQgcmVuZGVycyBhbGwgb2YgdGhlIGNvcmUgc3R5bGVzIHRoYXQgZGVwZW5kIG9uIHRoZSB0aGVtZS5cbkBtaXhpbiBtYXQtY29yZS10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogX21hdC1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICAvLyBXcmFwIHRoZSBzdWItdGhlbWUgaW5jbHVkZXMgaW4gdGhlIGR1cGxpY2F0ZSB0aGVtZSBzdHlsZXMgbWl4aW4uIFRoaXMgZW5zdXJlcyB0aGF0XG4gIC8vIHRoZXJlIHdvbid0IGJlIG11bHRpcGxlIHdhcm5pbmdzLiBlLmcuIGlmIGBtYXQtY29yZS10aGVtZWAgcmVwb3J0cyBhIHdhcm5pbmcsIHRoZW5cbiAgLy8gdGhlIGltcG9ydGVkIHRoZW1lcyAoc3VjaCBhcyBgbWF0LXJpcHBsZS10aGVtZWApIHNob3VsZCBub3QgcmVwb3J0IGFnYWluLlxuICBAaW5jbHVkZSBfbWF0LWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LWNvcmUnKSB7XG4gICAgQGluY2x1ZGUgbWF0LXJpcHBsZS10aGVtZSgkdGhlbWUpO1xuICAgIEBpbmNsdWRlIG1hdC1vcHRpb24tdGhlbWUoJHRoZW1lKTtcbiAgICBAaW5jbHVkZSBtYXQtb3B0Z3JvdXAtdGhlbWUoJHRoZW1lKTtcbiAgICBAaW5jbHVkZSBtYXQtcHNldWRvLWNoZWNrYm94LXRoZW1lKCR0aGVtZSk7XG5cbiAgICAkY29sb3I6IG1hdC1nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1jb3JlLWNvbG9yKCRjb2xvcik7XG4gICAgfVxuICB9XG59XG5cbi8vIE1peGluIHRoYXQgcmVuZGVycyBhbGwgb2YgdGhlIGNvcmUgTURDIHN0eWxlcy4gUHJpdmF0ZSBtaXhpbiBpbmNsdWRlZCB3aXRoIGBtYXQtY29yZWAuXG5AbWl4aW4gX21hdC1tZGMtY29yZSgpIHtcbiAgQGluY2x1ZGUgX21hdC1tZGMtc3Ryb25nLWZvY3VzLWluZGljYXRvcnMtcG9zaXRpb25pbmcoKTtcbn1cblxuLy8gTWl4aW4gdGhhdCBlbnN1cmVzIGZvY3VzIGluZGljYXRvciBob3N0IGVsZW1lbnRzIGFyZSBwb3NpdGlvbmVkIHNvIHRoYXQgdGhlIGZvY3VzIGluZGljYXRvclxuLy8gcHNldWRvIGVsZW1lbnQgd2l0aGluIGlzIHBvc2l0aW9uZWQgcmVsYXRpdmUgdG8gdGhlIGhvc3QuIFByaXZhdGUgbWl4aW4gaW5jbHVkZWQgd2l0aGluXG4vLyBgX21hdC1tZGMtY29yZWAuXG5AbWl4aW4gX21hdC1tZGMtc3Ryb25nLWZvY3VzLWluZGljYXRvcnMtcG9zaXRpb25pbmcoKSB7XG4gIC5tYXQtbWRjLWZvY3VzLWluZGljYXRvciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIENyZWF0ZSBhIHRoZW1lLlxuQG1peGluIGFuZ3VsYXItbWF0ZXJpYWwtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICBAaW5jbHVkZSBfbWF0LWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZywgJ2FuZ3VsYXItbWF0ZXJpYWwtdGhlbWUnKSB7XG4gICAgQGluY2x1ZGUgbWF0LWNvcmUtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gICAgQGluY2x1ZGUgbWF0LWF1dG9jb21wbGV0ZS10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgICBAaW5jbHVkZSBtYXQtYmFkZ2UtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gICAgQGluY2x1ZGUgbWF0LWJvdHRvbS1zaGVldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgICBAaW5jbHVkZSBtYXQtYnV0dG9uLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICAgIEBpbmNsdWRlIG1hdC1idXR0b24tdG9nZ2xlLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICAgIEBpbmNsdWRlIG1hdC1jYXJkLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICAgIEBpbmNsdWRlIG1hdC1jaGVja2JveC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgICBAaW5jbHVkZSBtYXQtY2hpcHMtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gICAgQGluY2x1ZGUgbWF0LXRhYmxlLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICAgIEBpbmNsdWRlIG1hdC1kYXRlcGlja2VyLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICAgIEBpbmNsdWRlIG1hdC1kaWFsb2ctdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gICAgQGluY2x1ZGUgbWF0LWRpdmlkZXItdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gICAgQGluY2x1ZGUgbWF0LWV4cGFuc2lvbi1wYW5lbC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgICBAaW5jbHVkZSBtYXQtZ3JpZC1saXN0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICAgIEBpbmNsdWRlIG1hdC1pY29uLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICAgIEBpbmNsdWRlIG1hdC1pbnB1dC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgICBAaW5jbHVkZSBtYXQtbGlzdC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgICBAaW5jbHVkZSBtYXQtbWVudS10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgICBAaW5jbHVkZSBtYXQtcGFnaW5hdG9yLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICAgIEBpbmNsdWRlIG1hdC1wcm9ncmVzcy1iYXItdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gICAgQGluY2x1ZGUgbWF0LXByb2dyZXNzLXNwaW5uZXItdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gICAgQGluY2x1ZGUgbWF0LXJhZGlvLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICAgIEBpbmNsdWRlIG1hdC1zZWxlY3QtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gICAgQGluY2x1ZGUgbWF0LXNpZGVuYXYtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gICAgQGluY2x1ZGUgbWF0LXNsaWRlLXRvZ2dsZS10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgICBAaW5jbHVkZSBtYXQtc2xpZGVyLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICAgIEBpbmNsdWRlIG1hdC1zdGVwcGVyLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICAgIEBpbmNsdWRlIG1hdC1zb3J0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICAgIEBpbmNsdWRlIG1hdC10YWJzLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICAgIEBpbmNsdWRlIG1hdC10b29sYmFyLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICAgIEBpbmNsdWRlIG1hdC10b29sdGlwLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICAgIEBpbmNsdWRlIG1hdC10cmVlLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICAgIEBpbmNsdWRlIG1hdC1zbmFjay1iYXItdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIH1cbn1cblxuXG4vLyBJbmNsdWRlcyBhbGwgb2YgdGhlIGNvbG9yIHN0eWxlcy5cbkBtaXhpbiBhbmd1bGFyLW1hdGVyaWFsLWNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgLy8gSW4gY2FzZSBhIHRoZW1lIG9iamVjdCBoYXMgYmVlbiBwYXNzZWQgaW5zdGVhZCBvZiBhIGNvbmZpZ3VyYXRpb24gZm9yXG4gIC8vIHRoZSBjb2xvciBzeXN0ZW0sIGV4dHJhY3QgdGhlIGNvbG9yIGNvbmZpZyBmcm9tIHRoZSB0aGVtZSBvYmplY3QuXG4gICRjb25maWc6IGlmKF9tYXQtaXMtdGhlbWUtb2JqZWN0KCRjb25maWctb3ItdGhlbWUpLFxuICAgICAgbWF0LWdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSksICRjb25maWctb3ItdGhlbWUpO1xuXG4gIEBpZiAkY29uZmlnID09IG51bGwge1xuICAgIEBlcnJvciAnTm8gY29sb3IgY29uZmlndXJhdGlvbiBzcGVjaWZpZWQuJztcbiAgfVxuXG4gIEBpbmNsdWRlIGFuZ3VsYXItbWF0ZXJpYWwtdGhlbWUoKFxuICAgIGNvbG9yOiAkY29uZmlnLFxuICAgIHR5cG9ncmFwaHk6IG51bGwsXG4gICAgZGVuc2l0eTogbnVsbCxcbiAgKSk7XG59XG5cblxuXG4vLyBJbmNsdWRlcyBhbGwgb2YgdGhlIGRlbnNpdHkgc3R5bGVzLlxuQG1peGluIF9hbmd1bGFyLW1hdGVyaWFsLWRlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAvLyBJbiBjYXNlIGEgdGhlbWUgb2JqZWN0IGhhcyBiZWVuIHBhc3NlZCBpbnN0ZWFkIG9mIGEgY29uZmlndXJhdGlvbiBmb3JcbiAgLy8gdGhlIGRlbnNpdHkgc3lzdGVtLCBleHRyYWN0IHRoZSBkZW5zaXR5IGNvbmZpZyBmcm9tIHRoZSB0aGVtZSBvYmplY3QuXG4gICRjb25maWc6IGlmKF9tYXQtaXMtdGhlbWUtb2JqZWN0KCRjb25maWctb3ItdGhlbWUpLFxuICAgICAgbWF0LWdldC1kZW5zaXR5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKSwgJGNvbmZpZy1vci10aGVtZSk7XG5cbiAgQGlmICRjb25maWcgPT0gbnVsbCB7XG4gICAgQGVycm9yICdObyBkZW5zaXR5IGNvbmZpZ3VyYXRpb24gc3BlY2lmaWVkLic7XG4gIH1cblxuICBAaW5jbHVkZSBhbmd1bGFyLW1hdGVyaWFsLXRoZW1lKChcbiAgICBjb2xvcjogbnVsbCxcbiAgICB0eXBvZ3JhcGh5OiBudWxsLFxuICAgIGRlbnNpdHk6ICRjb25maWcsXG4gICkpO1xufVxuXG5cblxuIiwiQGltcG9ydCBcIn5zcmMvQGNvbmRvL3N0eWxlcy9jb25kb1wiO1xuXG5AaW5jbHVkZSBjb25kby10aGVtZSB7XG5cbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGlzLWRhcms6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcbiAgJGRhc2hib2FyZDogbWFwLWdldCgkdGhlbWUsIGRhc2hib2FyZCk7XG4gICRoaWdodGxpZ2h0OiBtYXAtZ2V0KCRkYXNoYm9hcmQgLCBuYWRhZ2FtKTtcblxuICAuaGVscC1kZXNrLWNyZWF0ZS13cmFwcGVyIHtcbiAgICAudGltZWxpbmUge1xuICAgICAgbWFyZ2luOiAyMHB4IDAgMjBweCAyMHB4O1xuICAgICAgQGluY2x1ZGUgY29uZG8tYnJlYWtwb2ludCgneHMnKSB7XG4gICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICB9XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAmOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDAlO1xuICAgICAgICB3aWR0aDogM3B4O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3IgOiBpZigkaXMtZGFyaywgY29uZG8tY29sb3IoJ2Nvb2wtZ3JheScsIDgwMCksIGNvbmRvLWNvbG9yKCdjb29sLWdyYXknLCAzMDApKTtcbiAgICAgICAgQGluY2x1ZGUgY29uZG8tYnJlYWtwb2ludCgnbHQtbWQnKSB7XG4gICAgICAgICAgbGVmdDogMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICBAaW5jbHVkZSBjb25kby1icmVha3BvaW50KCdsdC1tZCcpIHtcbiAgICAgICAgICB3aWR0aDogOTYlO1xuICAgICAgICB9XG4gICAgICAgIEBpbmNsdWRlIGNvbmRvLWJyZWFrcG9pbnQoJ3hzJykge1xuICAgICAgICAgIHdpZHRoOiA5MyU7XG4gICAgICAgIH1cbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBjbGVhcjogYm90aDtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgIC5pbml0aWFsLWxldHRlciB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMTVweDtcbiAgICAgICAgICBsZWZ0OiAtODJweDtcbiAgICAgICAgICBAaW5jbHVkZSBjaXJjbGVzKDM1cHgsbnVsbCx3aGl0ZSk7XG4gICAgICAgICAgQGluY2x1ZGUgY29uZG8tYnJlYWtwb2ludCgnbWQnKSB7IC8vSXBhZCBwcm8gYW5kIGRlc2t0b3BcbiAgICAgICAgICAgIGxlZnQ6IC01OHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBAaW5jbHVkZSBjb25kby1icmVha3BvaW50KCdzbScpIHsgLy8gaXBhZFxuICAgICAgICAgICAgbGVmdDogLTQycHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBpbmNsdWRlIGNvbmRvLWJyZWFrcG9pbnQoJ3hzJykgeyAgLy9tb2JpbGVcbiAgICAgICAgICAgIGxlZnQ6IC0zOHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgICAgICAubG9nLWJvcmRlciB7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIG1hcC1nZXQoJGhpZ2h0bGlnaHQgLCBiYXNlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnN0YXR1cy1jdXJ2ZSB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogM3B4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDNweDtcbiAgICAgICAgICAgIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoMTFweCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgICAgXG4gIH1cbn0iLCJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcbiBcbkBtaXhpbiBib3JkZXItcmFkaXVzICgkcmFkaXVzKSB7XG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuXHQtbW96LWJvcmRlci1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcblx0Ym9yZGVyLXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cyAoJHJhZGl1cykge1xuICAtd2Via2l0LWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbiAgLW1vei1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbn1cblxuQG1peGluIG9wYWNpdHkgKCR2YWx1ZSkge1xuICBvcGFjaXR5OiAkdmFsdWU7XG4gIC1tb3otb3BhY2l0eTogJHZhbHVlO1xuICAtd2Via2l0LW9wYWNpdHk6ICR2YWx1ZTtcbn1cblxuQG1peGluIGJveC1zaGFkb3cgKCRydWxlcy4uLikge1xuICBib3gtc2hhZG93OiAkcnVsZXM7XG4gIC1tb3otYm94LXNoYWRvdzogJHJ1bGVzO1xuICAtd2Via2l0LWJveC1zaGFkb3c6ICRydWxlcztcbn1cblxuQG1peGluIHRleHQtc2hhZG93ICgkcnVsZXMpIHtcbiAgdGV4dC1zaGFkb3c6ICRydWxlcztcbiAgLW1vei10ZXh0LXNoYWRvdzogJHJ1bGVzO1xuICAtd2Via2l0LXRleHQtc2hhZG93OiAkcnVsZXM7XG59XG5cbkBtaXhpbiB0cmFuc2Zvcm0gKCRydWxlcykge1xuXHQtd2Via2l0LXRyYW5zZm9ybTogJHJ1bGVzICFpbXBvcnRhbnQ7XG5cdC1tb3otdHJhbnNmb3JtOiAkcnVsZXMgIWltcG9ydGFudDtcblx0dHJhbnNmb3JtOiAkcnVsZXMgIWltcG9ydGFudDtcbn1cblxuQG1peGluIHRyYW5zaXRpb24gKCRydWxlcy4uLikge1xuXHQtd2Via2l0LXRyYW5zaXRpb246ICRydWxlcztcblx0LW1vei10cmFuc2l0aW9uOiAkcnVsZXM7XG5cdHRyYW5zaXRpb246ICRydWxlcztcbn1cblxuQG1peGluIGFuaW1hdGlvbi1kZWxheSAoJHZhbHVlKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG4gIGFuaW1hdGlvbi1kZWxheTogJHZhbHVlO1xufVxuXG5AbWl4aW4gYm94LXNpemluZyAoJHJ1bGVzLi4uKSB7XG4gIC13ZWJraXQtYm94LXNpemluZzogJHJ1bGVzO1xuICAtbW96LWJveC1zaXppbmc6ICRydWxlcztcbiAgYm94LXNpemluZzogJHJ1bGVzO1xufVxuXG5AbWl4aW4gYXBwZWFyYW5jZSAoJHJ1bGVzLi4uKSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogJHJ1bGVzO1xuICAtbW96LWFwcGVhcmFuY2U6ICRydWxlcztcbn1cblxuQG1peGluIGRlc2VsZWN0ICgpIHtcbiAgLW1vei11c2VyLXNlbGVjdDogLW1vei1ub25lO1xuXHQta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG5cdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG5cdC1vLXVzZXItc2VsZWN0OiBub25lO1xuXHR1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuQG1peGluIHZpc2liaWxpdHkgKCRydWxlcykge1xuICB2aXNpYmlsaXR5OiAkcnVsZXM7XG59XG5cbkBtaXhpbiBuby1tcCAoKSB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiBjaXJjbGVzKCRyLCAkYmc6bnVsbCwgJHRjOm51bGwpIHtcbiAgd2lkdGg6ICRyO1xuICBoZWlnaHQ6ICRyO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmc7XG4gIGNvbG9yOiAkdGM7XG4gIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoJHIpO1xufVxuXG5AbWl4aW4gbGluZWFyLWdyYWRpZW50KCRkaXJlY3Rpb24sICRjb2xvci1zdG9wcy4uLikge1xuICAvLyBEaXJlY3Rpb24gaGFzIGJlZW4gb21pdHRlZCBhbmQgaGFwcGVucyB0byBiZSBhIGNvbG9yLXN0b3BcbiAgQGlmIGlzLWRpcmVjdGlvbigkZGlyZWN0aW9uKSA9PSBmYWxzZSB7XG4gICAgJGNvbG9yLXN0b3BzOiAkZGlyZWN0aW9uLCAkY29sb3Itc3RvcHM7XG4gICAgJGRpcmVjdGlvbjogMTgwZGVnO1xuICB9XG5cbiAgYmFja2dyb3VuZDogbnRoKG50aCgkY29sb3Itc3RvcHMsIDEpLCAxKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVnYWN5LWRpcmVjdGlvbigkZGlyZWN0aW9uKSwgJGNvbG9yLXN0b3BzKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRkaXJlY3Rpb24sICRjb2xvci1zdG9wcyk7XG59XG5cbkBtaXhpbiBmbGlwKCRkaXJlY3Rpb24pIHtcbiAgdHJhbnNmb3JtIDogcm90YXRlWSgkZGlyZWN0aW9uKTtcbn0gXG4gXG5AbWl4aW4gcGxhY2Vob2xkZXIge1xuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtAY29udGVudH1cbiAgJjotbW96LXBsYWNlaG9sZGVyICAgICAgICAgICB7QGNvbnRlbnR9XG4gICY6Oi1tb3otcGxhY2Vob2xkZXIgICAgICAgICAge0Bjb250ZW50fVxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciAgICAgIHtAY29udGVudH0gIFxufVxuXG5AbWl4aW4gZnQtY2FsYygkcGl4ZWxzKSB7XG4gIGZvbnQtc2l6ZTogKCAkcGl4ZWxzIC8gJHJlbS1iYXNlICkgKyByZW07XG59XG5cbkBtaXhpbiBjb25kby1pY29uLXNpemUoJHNpemUsICRpbXBvcnRhbnQ6IGZhbHNlKSB7XG4gIHdpZHRoOiAjeygkc2l6ZSkgKyAncHgnfSBpZigkaW1wb3J0YW50LCAhaW1wb3J0YW50LCBudWxsKTtcbiAgaGVpZ2h0OiAjeygkc2l6ZSkgKyAncHgnfSBpZigkaW1wb3J0YW50LCAhaW1wb3J0YW50LCBudWxsKTtcbiAgbWluLXdpZHRoOiAjeygkc2l6ZSkgKyAncHgnfSBpZigkaW1wb3J0YW50LCAhaW1wb3J0YW50LCBudWxsKTtcbiAgbWluLWhlaWdodDogI3soJHNpemUpICsgJ3B4J30gaWYoJGltcG9ydGFudCwgIWltcG9ydGFudCwgbnVsbCk7XG4gIGZvbnQtc2l6ZTogI3soJHNpemUpICsgJ3B4J30gaWYoJGltcG9ydGFudCwgIWltcG9ydGFudCwgbnVsbCk7XG4gIGxpbmUtaGVpZ2h0OiAjeygkc2l6ZSkgKyAncHgnfSBpZigkaW1wb3J0YW50LCAhaW1wb3J0YW50LCBudWxsKTtcblxuICBzdmcge1xuICAgICAgd2lkdGg6ICN7KCRzaXplKSArICdweCd9IGlmKCRpbXBvcnRhbnQsICFpbXBvcnRhbnQsIG51bGwpO1xuICAgICAgaGVpZ2h0OiAjeygkc2l6ZSkgKyAncHgnfSBpZigkaW1wb3J0YW50LCAhaW1wb3J0YW50LCBudWxsKTtcbiAgfVxufVxuXG5AbWl4aW4gY29uZG8tYnV0dG9uLXNpemUoJHNpemUsICRpbXBvcnRhbnQ6IGZhbHNlKSB7XG4gIGhlaWdodDogI3soJHNpemUpICsgJ3B4J30gaWYoJGltcG9ydGFudCwgIWltcG9ydGFudCwgbnVsbCk7XG4gIG1pbi1oZWlnaHQ6ICN7KCRzaXplKSArICdweCd9IGlmKCRpbXBvcnRhbnQsICFpbXBvcnRhbnQsIG51bGwpO1xuICBsaW5lLWhlaWdodDogI3soJHNpemUpICsgJ3B4J30gaWYoJGltcG9ydGFudCwgIWltcG9ydGFudCwgbnVsbCk7XG59XG5cbkBtaXhpbiBjb25kby1icmVha3BvaW50KCRicmVha3BvaW50KSB7XG5cbiAgJG1lZGlhUXVlcnk6IG1hcC1nZXQoJGNvbmRvLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCk7XG5cbiAgQGlmICgkbWVkaWFRdWVyeSAhPSBudWxsKSB7XG5cbiAgICAgIEBtZWRpYSAjeyRtZWRpYVF1ZXJ5fSB7XG4gICAgICAgICAgQGNvbnRlbnRcbiAgICAgIH1cbiAgfSBAZWxzZSB7XG5cbiAgICAgIEBtZWRpYSAjeyRicmVha3BvaW50fSB7XG4gICAgICAgICAgQGNvbnRlbnRcbiAgICAgIH1cbiAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/modules/ams/helpdesk/components/helpdesk-create-ticket/helpdesk-create-ticket.component.ts":
    /*!************************************************************************************************************!*\
      !*** ./src/app/modules/ams/helpdesk/components/helpdesk-create-ticket/helpdesk-create-ticket.component.ts ***!
      \************************************************************************************************************/

    /*! exports provided: HelpdeskCreateTicketComponent */

    /***/
    function srcAppModulesAmsHelpdeskComponentsHelpdeskCreateTicketHelpdeskCreateTicketComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HelpdeskCreateTicketComponent", function () {
        return HelpdeskCreateTicketComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/api/controllers/Lookup */
      "./src/app/api/controllers/Lookup.ts");
      /* harmony import */


      var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/shared.service */
      "./src/app/shared/services/shared.service.ts");
      /* harmony import */


      var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/api/controllers/Apartment */
      "./src/app/api/controllers/Apartment.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/api/controllers/Ticket */
      "./src/app/api/controllers/Ticket.ts");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/core/session/session.service */
      "./src/app/core/session/session.service.ts");
      /* harmony import */


      var src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/api/controllers/Staff */
      "./src/app/api/controllers/Staff.ts");
      /* harmony import */


      var src_condo_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/@condo/animations */
      "./src/@condo/animations/index.ts");

      var HelpdeskCreateTicketComponent = /*#__PURE__*/function () {
        function HelpdeskCreateTicketComponent(router, acticateRoute, ticketService, lookupService, sharedService, sessionService, apartmentService, staffService, _changeDetectorRef) {
          var _this = this;

          _classCallCheck(this, HelpdeskCreateTicketComponent);

          this.router = router;
          this.acticateRoute = acticateRoute;
          this.ticketService = ticketService;
          this.lookupService = lookupService;
          this.sharedService = sharedService;
          this.sessionService = sessionService;
          this.apartmentService = apartmentService;
          this.staffService = staffService;
          this._changeDetectorRef = _changeDetectorRef;
          this.isTrackerSubmitted = true;
          this.ticket = {
            ticketTypeId: '',
            ticketPriorityId: '',
            staffId: null
          };
          this.createdBY = 'self';
          this.ticketTypeList = [];
          this.ticketCategoryList = [];
          this.priortyTypeList = [];
          this.message = null; //staff

          this.staffsList = []; //block

          this.block = {
            blockId: '',
            apartmentBlockUnitId: '',
            primaryName: ''
          };
          this.blockList = [];
          this.blockUnitList = [];
          this.statusTypeList = [];
          this.ticketCommentList = [];
          this.oldData = {};
          this.acticateRoute.params.subscribe(function (data) {
            if (data.id) {
              _this.ticketId = parseInt(data.id);
              _this.viewMode = 'edit';
            }
          });
        }

        _createClass(HelpdeskCreateTicketComponent, [{
          key: "isAdmin",
          value: function isAdmin() {
            return this.sessionService.isAdmin();
          }
        }, {
          key: "getTimeFormat",
          value: function getTimeFormat(date) {
            return moment__WEBPACK_IMPORTED_MODULE_7__(date).format('MMM D YYYY, ddd hh:mm a');
          }
        }, {
          key: "createdByChange",
          value: function createdByChange() {
            this.ticket = {
              ticketTypeId: '',
              ticketPriorityId: '',
              staffId: null,
              apartmentBlockUnitUserId: null
            };
            this.block = {
              blockId: ''
            };
            this.ticketCategoryList = [];
            this.blockUnitList = [];
          }
        }, {
          key: "getCategoryList",
          value: function getCategoryList(type) {
            var _this2 = this;

            if (type == 'change') this.ticket.ticketCategoryId = ""; //24 is common type so we passed 17
            //27 is private type so we passed 16

            var params = {
              ApartmentId: this.sessionService.apartmentId,
              LookupTypeId: this.ticket.ticketTypeId == 24 ? 17 : 16
            };
            this.lookupService.getLookupValueByLookupTypeId(params).subscribe(function (res) {
              _this2.ticketCategoryList = res;
            });
          }
        }, {
          key: "changeTicketStatus",
          value: function changeTicketStatus() {
            if (this.ticket.ticketStatusId == 32) {
              this.ticket.ticketStatusId = 33;
            }
          }
        }, {
          key: "getBlockUnit",
          value: function getBlockUnit() {
            var _this3 = this;

            this.block.apartmentBlockUnitId = '';
            this.blockUnitList = [];
            var unitParams = {
              apartmentBlockId: this.block.blockId
            };
            this.apartmentService.getApartmentBlockUnitByBlockId(unitParams).subscribe(function (res) {
              _this3.blockUnitList = res;
            });
          }
        }, {
          key: "getPrimaryNameForUnit",
          value: function getPrimaryNameForUnit() {
            var _this4 = this;

            var unitDetails, primaryDetails;
            this.ticket.apartmentBlockUnitUserId = '';
            this.block.primaryName = '';
            unitDetails = this.blockUnitList.filter(function (data) {
              return data.apartmentBlockUnitId == _this4.block.apartmentBlockUnitId;
            });
            primaryDetails = unitDetails[0].blockUnitUserIsPrimaryContact;

            if (primaryDetails.length > 0) {
              this.ticket.apartmentBlockUnitUserId = primaryDetails[0].primaryContactUserId;
              this.block.primaryName = primaryDetails[0].primaryContactName; //view Mode
            }
          }
        }, {
          key: "getFileIds",
          value: function getFileIds(event) {
            this.ticket.fileDetailsIds = event.join();
          }
        }, {
          key: "createTicket",
          value: function createTicket() {
            var _this5 = this;

            this.message = null;

            if (!this.form.valid) {
              window.scroll({
                top: 0,
                behavior: 'smooth'
              }); // Show the validation message

              this.message = {
                appearance: 'outline',
                content: "Fill the Required Fields",
                shake: true,
                showIcon: true,
                type: 'error'
              }; //Mark for check

              this._changeDetectorRef.markForCheck();
            } else {
              this.isTrackerSubmitted = false;
              var params = {
                ticket: {
                  ticketId: 0,
                  apartmentId: this.sessionService.apartmentId,
                  ticketTypeId: this.ticket.ticketTypeId,
                  title: this.ticket.title,
                  description: this.ticket.description,
                  resolutionDescription: null,
                  ticketStatusId: 32,
                  ticketCategoryId: this.ticket.ticketCategoryId,
                  ticketPriorityId: this.ticket.ticketPriorityId,
                  fileDetailsId1: null,
                  fileDetailsId2: null,
                  assignedTo: null,
                  raisedBy: this.sessionService.userId,
                  isActive: true,
                  apartmentBlockUnitUserId: this.ticket.apartmentBlockUnitUserId,
                  staffId: this.ticket.staffId,
                  insertedBy: this.sessionService.userId,
                  insertedOn: new Date().toISOString(),
                  updatedBy: null,
                  updatedOn: null,
                  fileDetailsIds: this.ticket.fileDetailsIds
                }
              };
              this.ticketService.addTicket(params).subscribe(function (res) {
                if (res.message) {
                  if (_this5.sessionService.isAdmin()) {
                    _this5.router.navigate(['/ams/helpdesk/open-tickets']);
                  } else {
                    _this5.router.navigate(['/user/servicedesk/all-tickets']);
                  }

                  _this5.sharedService.openSnackBar('Ticket added successfully', 'success');
                }

                _this5.isTrackerSubmitted = true;
              }, function (error) {
                _this5.isTrackerSubmitted = true;

                _this5.sharedService.openSnackBar('Server Error', 'error');
              });
            }
          }
        }, {
          key: "updateTicket",
          value: function updateTicket() {
            var _this6 = this;

            this.message = null;

            if (!this.form.valid) {
              window.scroll({
                top: 0,
                behavior: 'smooth'
              }); // Show the validation message

              this.message = {
                appearance: 'outline',
                content: "Fill the Required Fields",
                shake: true,
                showIcon: true,
                type: 'error'
              }; //Mark for check

              this._changeDetectorRef.markForCheck();
            } else {
              this.isTrackerSubmitted = false;
              var params = {
                ticket: {
                  ticketId: this.ticket.ticketId,
                  apartmentId: this.ticket.apartmentId,
                  ticketTypeId: this.ticket.ticketTypeId,
                  title: this.ticket.title,
                  description: this.ticket.description,
                  resolutionDescription: this.ticket.resolutionDescription,
                  raisedBy: this.ticket.raisedBy,
                  ticketStatusId: this.ticket.ticketStatusId,
                  ticketCategoryId: this.ticket.ticketCategoryId,
                  supervisorId: this.ticket.supervisorId,
                  ticketPriorityId: this.ticket.ticketPriorityId,
                  fileDetailsId1: this.ticket.fileDetailsId1,
                  fileDetailsId2: this.ticket.fileDetailsId2,
                  isActive: true,
                  apartmentBlockUnitUserId: this.ticket.apartmentBlockUnitUserId,
                  staffId: this.ticket.staffId,
                  insertedBy: this.ticket.insertedBy,
                  insertedOn: this.ticket.insertedOn,
                  updatedBy: this.sessionService.userId,
                  updatedOn: new Date().toISOString(),
                  fileDetailsIds: this.ticket.fileDetailsIds
                }
              };
              this.ticketService.updateTicket(params).subscribe(function (res) {
                if (res.message) {
                  _this6.sharedService.openSnackBar(res.message, 'success'); //comment section


                  _this6.ticketComment = '';

                  for (var key in params.ticket) {
                    if (params.ticket[key] != _this6.oldData[key]) {
                      if (key == 'ticketPriorityId') _this6.ticketComment += "User has changed the Priority from ".concat(_this6.getLabel(_this6.oldData[key], _this6.priortyTypeList), " to ").concat(_this6.getLabel(params.ticket[key], _this6.priortyTypeList), "<br>");else if (key == 'ticketTypeId') _this6.ticketComment += "User has changed the Ticket Type from ".concat(_this6.getLabel(_this6.oldData[key], _this6.ticketTypeList), " to ").concat(_this6.getLabel(params.ticket[key], _this6.ticketTypeList), " and Category also changed<br>");else if (key == 'description') _this6.ticketComment += "User has changed the Description ".concat(params.ticket[key], "<br>");else if (key == 'ticketStatusId') {
                        _this6.ticketComment += "User has changed the Status from ".concat(_this6.getLabel(_this6.oldData[key], _this6.statusTypeList), " to ").concat(_this6.getLabel(params.ticket[key], _this6.statusTypeList), "<br>");
                      }
                    }
                  }

                  if (_this6.ticketComment.length > 0) {
                    _this6.oldData = params.ticket;

                    _this6.createComment('log');
                  }
                } else _this6.sharedService.openSnackBar(res.errorMessage, 'error');

                _this6.isTrackerSubmitted = true;
              }, function (error) {
                _this6.isTrackerSubmitted = true;

                _this6.sharedService.openSnackBar('Server Error', 'error');
              });
            }
          }
        }, {
          key: "getLabel",
          value: function getLabel(id, list) {
            var label = list.filter(function (data) {
              return data.lookupValueId == id;
            });
            if (label.length > 0) return label[0].lookupValueName;else return '';
          }
        }, {
          key: "createComment",
          value: function createComment(type) {
            var _this7 = this;

            var commentDetails = {
              "ticketComment": {
                "ticketId": this.ticket.ticketId,
                "comments": this.ticketComment,
                "isActive": true,
                "isLog": type == 'log' ? true : false,
                "insertedBy": this.sessionService.userId,
                "insertedOn": new Date().toISOString(),
                "updatedBy": null,
                "updatedOn": null
              }
            };
            this.ticketService.addTicketComment(commentDetails).subscribe(function (res) {
              if (res.code == 200) {
                _this7.getCommentList();

                _this7.ticketComment = '';

                if (type != 'log') {
                  _this7.sharedService.openSnackBar('Comment Added Successfully', 'success');
                }
              } else _this7.sharedService.openSnackBar(res.errorMessage, 'error');
            }, function (error) {
              _this7.sharedService.openSnackBar('Server Error', 'error');
            });
          }
        }, {
          key: "getCommentList",
          value: function getCommentList() {
            var _this8 = this;

            var params = {
              ticketId: this.ticketId
            };
            this.ticketService.getAllTicketCommentsByTicketId(params).subscribe(function (res) {
              if (res.length > 0) {
                _this8.ticketCommentList = res.reverse();
              }
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            // Login Based View for admin or owner
            if (!this.isAdmin()) {
              this.createdBY = 'owner';
              this.ticket.apartmentBlockUnitUserId = this.sessionService.apartmentBlockUnitUserId;
            } //Ticket Type List


            var ticketTypeParams = {
              LookupTypeId: 7
            };
            this.lookupService.getLookupValueByLookupTypeId(ticketTypeParams).subscribe(function (res) {
              _this9.ticketTypeList = res;
            }); //priorityList

            var priority = {
              LookupTypeId: 14
            };
            this.lookupService.getLookupValueByLookupTypeId(priority).subscribe(function (res) {
              _this9.priortyTypeList = res;
            }); //tower

            var params = {
              apartmentId: this.sessionService.apartmentId
            };
            this.apartmentService.getApartmentBlockByApartmentId(params).subscribe(function (res) {
              _this9.blockList = res;
            }); //staff

            var staffParms = {
              apartmentId: this.sessionService.apartmentId,
              RoleTypeId: this.sessionService.roleTypeId
            };
            this.staffService.getAllStaffs(staffParms).subscribe(function (res) {
              if (res.length) {
                _this9.staffsList = res;
              }
            }); //Edit Mode

            if (this.viewMode == 'edit') {
              var ticketId = {
                ticketId: this.ticketId
              };
              this.ticketService.getTicketById(ticketId).subscribe(function (res) {
                var _a = res[0],
                    fileDetailsPath = _a.fileDetailsPath,
                    response = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["fileDetailsPath"]);
                _this9.ticket = response; //Get File Information

                if (fileDetailsPath && fileDetailsPath.length > 0) {
                  _this9.ticket.fileDetailsIds = fileDetailsPath.reduce(function (acc, file, index) {
                    if (index == 0) {
                      return "".concat(file.fileDetailsId);
                    } else {
                      return "".concat(acc, ",").concat(file.fileDetailsId);
                    }
                  }, '');
                } else _this9.ticket.fileDetailsIds = null; //owner or tenant edit mode


                if (_this9.ticket.apartmentBlockUnitUserId) {
                  _this9.createdBY = 'owner';
                  _this9.blockunitprimeName = "".concat(_this9.ticket.tower_Unit, " ").concat(_this9.ticket.primaryContactName);
                } //staff Edit Mode


                if (_this9.ticket.staffId) {
                  _this9.createdBY = 'staff';
                }

                _this9.oldData = Object.assign({}, _this9.ticket); //log info

                _this9.getCategoryList('edit');
              });
              var statusParams = {
                LookupTypeId: 9
              };
              this.lookupService.getLookupValueByLookupTypeId(statusParams).subscribe(function (res) {
                _this9.statusTypeList = res;
              });
              this.getCommentList();
            }
          }
        }]);

        return HelpdeskCreateTicketComponent;
      }();

      HelpdeskCreateTicketComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_6__["TicketService"]
        }, {
          type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__["LookupService"]
        }, {
          type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
        }, {
          type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_8__["SessionService"]
        }, {
          type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"]
        }, {
          type: src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_9__["StaffService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }];
      };

      HelpdeskCreateTicketComponent.propDecorators = {
        form: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['createHelpDeskForm']
        }]
      };
      HelpdeskCreateTicketComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-helpdesk-create-ticket',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./helpdesk-create-ticket.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-create-ticket/helpdesk-create-ticket.component.html"))["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        animations: src_condo_animations__WEBPACK_IMPORTED_MODULE_10__["CondoAnimations"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./helpdesk-create-ticket.component.scss */
        "./src/app/modules/ams/helpdesk/components/helpdesk-create-ticket/helpdesk-create-ticket.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_6__["TicketService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__["LookupService"], src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_8__["SessionService"], src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"], src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_9__["StaffService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], HelpdeskCreateTicketComponent);
      /***/
    },

    /***/
    "./src/app/modules/ams/helpdesk/components/helpdesk-reports/helpdesk-reports-data/helpdesk-reports-data.component.scss":
    /*!*****************************************************************************************************************************!*\
      !*** ./src/app/modules/ams/helpdesk/components/helpdesk-reports/helpdesk-reports-data/helpdesk-reports-data.component.scss ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsHelpdeskComponentsHelpdeskReportsHelpdeskReportsDataHelpdeskReportsDataComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL2hlbHBkZXNrL2NvbXBvbmVudHMvaGVscGRlc2stcmVwb3J0cy9oZWxwZGVzay1yZXBvcnRzLWRhdGEvaGVscGRlc2stcmVwb3J0cy1kYXRhLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/modules/ams/helpdesk/components/helpdesk-reports/helpdesk-reports-data/helpdesk-reports-data.component.ts":
    /*!***************************************************************************************************************************!*\
      !*** ./src/app/modules/ams/helpdesk/components/helpdesk-reports/helpdesk-reports-data/helpdesk-reports-data.component.ts ***!
      \***************************************************************************************************************************/

    /*! exports provided: HelpdeskReportsDataComponent */

    /***/
    function srcAppModulesAmsHelpdeskComponentsHelpdeskReportsHelpdeskReportsDataHelpdeskReportsDataComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HelpdeskReportsDataComponent", function () {
        return HelpdeskReportsDataComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/api/controllers/User */
      "./src/app/api/controllers/User.ts");
      /* harmony import */


      var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/api/controllers/Apartment */
      "./src/app/api/controllers/Apartment.ts");
      /* harmony import */


      var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/api/controllers/Lookup */
      "./src/app/api/controllers/Lookup.ts");
      /* harmony import */


      var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/shared.service */
      "./src/app/shared/services/shared.service.ts");
      /* harmony import */


      var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/core/session/session.service */
      "./src/app/core/session/session.service.ts");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */
      "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
      /* harmony import */


      var src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/api/controllers/Ticket */
      "./src/app/api/controllers/Ticket.ts");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");

      var HelpdeskReportsDataComponent = /*#__PURE__*/function () {
        function HelpdeskReportsDataComponent(router, route, userService, apartmentService, lookupService, sharedService, sessionService, ticketService) {
          _classCallCheck(this, HelpdeskReportsDataComponent);

          this.router = router;
          this.route = route;
          this.userService = userService;
          this.apartmentService = apartmentService;
          this.lookupService = lookupService;
          this.sharedService = sharedService;
          this.sessionService = sessionService;
          this.ticketService = ticketService;
          this.pageName = "";
          this.pageDesp = "";
          this.userReportData = "";
          this.ItemStartIndex = 0;
          this.itemLimit = 10;
          this.unitFieldType = "unitno";
          this.unitOrder = true;
          this.isDataLoaded = false;
          this.blockId = null;
          this.blockNo = "";
          this.end_date = null;
          this.start_date = null;
        }

        _createClass(HelpdeskReportsDataComponent, [{
          key: "isMobileView",
          value: function isMobileView() {
            return window.innerWidth <= 767 ? 'table-responsive' : '';
          }
        }, {
          key: "isItemsAvailable",
          value: function isItemsAvailable() {
            return this.totalItems > 0 ? true : false;
          }
        }, {
          key: "isNoItemsAvailable",
          value: function isNoItemsAvailable() {
            return this.totalItems == 0 ? true : false;
          }
        }, {
          key: "isListOfResidents",
          value: function isListOfResidents() {
            return this.pageName == "List of Residents";
          }
        }, {
          key: "isListOfTickets",
          value: function isListOfTickets() {
            return this.pageName == "List of tickets";
          }
        }, {
          key: "isListofAgedtickets",
          value: function isListofAgedtickets() {
            return this.pageName == "List of Aged tickets";
          }
        }, {
          key: "isListofUnassignedtickets",
          value: function isListofUnassignedtickets() {
            return this.pageName == "List of Unassigned tickets";
          }
        }, {
          key: "isListOfApprovedUsers",
          value: function isListOfApprovedUsers() {
            return this.pageName == "List of Approved Users";
          }
        }, {
          key: "isListOfDeactivatedUsers",
          value: function isListOfDeactivatedUsers() {
            return this.pageName == "List of De-activated Users";
          }
        }, {
          key: "isListOfResidentsVehicleInfo",
          value: function isListOfResidentsVehicleInfo() {
            return this.pageName == "List of Residents Vehicle Info";
          }
        }, {
          key: "isListOfExpiringRental",
          value: function isListOfExpiringRental() {
            return this.pageName == "List of Expiring Rental  Lease Agreements";
          }
        }, {
          key: "isListOfUsersWithPets",
          value: function isListOfUsersWithPets() {
            return this.pageName == "List of Users with Pets";
          }
        }, {
          key: "isListOfUnits",
          value: function isListOfUnits() {
            return this.pageName == "List of Units";
          }
        }, {
          key: "isListOfBlocks",
          value: function isListOfBlocks() {
            return this.pageName == "List of Blocks";
          }
        }, {
          key: "isListOfOwners",
          value: function isListOfOwners() {
            return this.pageName == "List of Owners";
          }
        }, {
          key: "isListOfTenants",
          value: function isListOfTenants() {
            return this.pageName == "List of Tenants";
          }
        }, {
          key: "isListOfAdmins",
          value: function isListOfAdmins() {
            return this.pageName == "List of Admins";
          }
        }, {
          key: "getDate",
          value: function getDate(date) {
            return moment__WEBPACK_IMPORTED_MODULE_8__(date).format("MM-DD-YYYY");
          }
        }, {
          key: "getSelectedType",
          value: function getSelectedType(event) {
            this.blockId = event[0].apartmentBlockId; //this.blockNo = event[0].apartmentBlockId;
            //    if(this.blockId != "" && this.blockId != null){
            // 	let filterGroup = new jqx.filter();
            // 	let filterOperator = 1;
            // 	let filterValue = event[0].apartmentBlockNumber;
            // 	let filterCondition = 'contains';
            // 	let filterData = filterGroup.createfilter('stringfilter', filterValue, filterCondition);
            // 	filterGroup.operator = 'or';
            // 	filterGroup.addfilter(filterOperator, filterData);
            // 	this.datagrid.showfiltercolumnbackground(false);
            // 	this.columnData.forEach(item => {
            // 	  if(item.datafield === 'blockNo') {
            // 		this.datagrid.addfilter(item.datafield, filterGroup, true);
            // 	  }
            // 	})
            // 	this.datagrid.applyfilters();
            //   }
            //   else {
            // 	this.datagrid.clearfilters();
            //   }
          }
        }, {
          key: "onGlSearchFilter",
          value: function onGlSearchFilter(event) {
            var _this10 = this;

            if (event != "") {
              var filtergroup = new jqx.filter();
              var filter_or_operator = 1;
              var filtervalue = event;
              var filtercondition = 'contains';
              var filterData = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
              filtergroup.operator = 'or';
              filtergroup.addfilter(filter_or_operator, filterData);
              this.datagrid.showfiltercolumnbackground(false);
              this.columnData.forEach(function (item) {
                if (item.datafield != 'Actions') {
                  _this10.datagrid.addfilter(item.datafield, filtergroup, true);
                }
              });
              this.datagrid.applyfilters();
            } else {
              this.datagrid.clearfilters();
            }
          }
        }, {
          key: "getBlockDetails",
          value: function getBlockDetails(details) {
            var _this11 = this;

            //jqx column generating
            var cellsrenderer = function cellsrenderer(row, column, value) {
              return '<div class="jqx-custom-inner-cell">' + value + '</div>';
            };

            var columnrenderer = function columnrenderer(value) {
              return '<div style="padding: 14px">' + value + '</div>';
            };

            this.isDataLoaded = false;

            if (this.isListOfTickets()) {
              this.columnData = [{
                text: 'User Name',
                datafield: 'userName',
                width: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Block Number',
                datafield: 'blockNo',
                minwidth: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Unit Number',
                datafield: 'unitNo',
                minwidth: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Ticket Type',
                datafield: 'ticketType',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'User Type',
                datafield: 'userTypeName',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Subject',
                datafield: 'subject',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Ticket Priority',
                datafield: 'ticketPriority',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }];
              this.ticketService.getReportsForListofOpenCloseTicketsMultiFilter(details).subscribe(function (res) {
                var gridSourceData = {
                  localdata: res,
                  datatype: "array"
                };
                _this11.userReportDataList = new jqx.dataAdapter(gridSourceData);
                _this11.totalItems = _this11.userReportDataList.length;
                _this11.isDataLoaded = true;

                _this11.showItems();
              });
            } else if (this.isListofAgedtickets()) {
              this.columnData = [{
                text: 'User Name',
                datafield: 'userName',
                width: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Block Number',
                datafield: 'blockNo',
                minwidth: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Unit Number',
                datafield: 'unitNo',
                minwidth: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Ticket Type',
                datafield: 'ticketType',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'User Type',
                datafield: 'userTypeName',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Subject',
                datafield: 'subject',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Ticket Priority',
                datafield: 'ticketPriority',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }];
              this.ticketService.getReportsForListofAgedTicketsMultiFilter(details).subscribe(function (res) {
                var gridSourceData = {
                  localdata: res,
                  datatype: "array"
                };
                _this11.userReportDataList = new jqx.dataAdapter(gridSourceData);
                _this11.isDataLoaded = true;

                _this11.showItems();
              });
            } else if (this.isListofUnassignedtickets()) {
              this.columnData = [{
                text: 'User Name',
                datafield: 'userName',
                width: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Block Number',
                datafield: 'blockNo',
                minwidth: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Unit Number',
                datafield: 'unitNo',
                minwidth: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Ticket Type',
                datafield: 'ticketType',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'User Type',
                datafield: 'userTypeName',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Subject',
                datafield: 'subject',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Ticket Priority',
                datafield: 'ticketPriority',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }];
              this.ticketService.getReportsForListofUnAssignedTicketsMultiFilter(details).subscribe(function (res) {
                var gridSourceData = {
                  localdata: res,
                  datatype: "array"
                };
                _this11.userReportDataList = new jqx.dataAdapter(gridSourceData);
                _this11.isDataLoaded = true;

                _this11.showItems();
              });
            }
          }
        }, {
          key: "showItems",
          value: function showItems() {
            this.totalItems = this.userReportDataList["_source"].localdata.length;

            if (this.totalItems > this.itemLimit) {
              this.ItemEndIndex = this.itemLimit;
            } else {
              this.ItemEndIndex = this.totalItems;
            }
          }
        }, {
          key: "getPrintParams",
          value: function getPrintParams(event) {
            this.datagrid.exportdata(event, 'HelpdeskReportsData');
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.matDrawer.close();
          }
        }, {
          key: "filterApply",
          value: function filterApply() {
            this.goBack();
            this.isDataLoaded = false;
            var details = {
              ApartmentID: this.sessionService.apartmentId,
              ApartmentBlockID: this.blockId === "" ? 1 : parseInt(this.blockId),
              StartDate: this.getDate(this.start_date),
              EndDate: this.getDate(this.end_date),
              TicketStatus: this.TicketStatus,
              TicketType: this.TicketType,
              TicketRaisedBy: this.TicketRaisedBy,
              AssignedToStaffId: this.AssignedToStaffId,
              StaffCategoryType: this.StaffCategoryType,
              StaffSubCategoryType: this.StaffSubCategoryType
            };
            this.getBlockDetails(details);
          }
        }, {
          key: "clearFilter",
          value: function clearFilter() {
            this.blockId = null;
            this.start_date = null;
            this.end_date = null; // =this.getTicketByAdmin();

            var details = {
              ApartmentID: this.sessionService.apartmentId,
              ApartmentBlockID: this.blockId === "" ? 1 : parseInt(this.blockId),
              StartDate: this.getDate(this.start_date),
              EndDate: this.getDate(this.end_date),
              TicketStatus: this.TicketStatus,
              TicketType: this.TicketType,
              TicketRaisedBy: this.TicketRaisedBy,
              AssignedToStaffId: this.AssignedToStaffId,
              StaffCategoryType: this.StaffCategoryType,
              StaffSubCategoryType: this.StaffSubCategoryType
            };
            this.getBlockDetails(details);
            this.goBack();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this12 = this;

            this.pageName = this.route.params['value'].name;
            var unitBlockParams = {
              apartmentId: this.sessionService.apartmentId
            };
            this.apartmentService.getApartmentBlockByApartmentId(unitBlockParams).subscribe(function (res) {
              _this12.unitBlocksData = res;
            });
            var params = {
              LookupTypeId: 87
            };
            this.lookupService.getLookupValueByLookupTypeId(params).subscribe(function (res) {
              var data = res.filter(function (item) {
                return item.lookupValueId == _this12.route.params['value'].id;
              });
              _this12.pageName = data[0].lookupValueName.replace('/', '');
              _this12.pageDesp = data[0].description;
            });
            var details = {
              ApartmentID: this.sessionService.apartmentId,
              ApartmentBlockID: this.blockId === "" ? 1 : parseInt(this.blockId),
              StartDate: this.getDate(this.start_date),
              EndDate: this.getDate(this.end_date),
              TicketStatus: this.TicketStatus,
              TicketType: this.TicketType,
              TicketRaisedBy: this.TicketRaisedBy,
              AssignedToStaffId: this.AssignedToStaffId,
              StaffCategoryType: this.StaffCategoryType,
              StaffSubCategoryType: this.StaffSubCategoryType
            };
            this.getBlockDetails(details);
          }
        }]);

        return HelpdeskReportsDataComponent;
      }();

      HelpdeskReportsDataComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }, {
          type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"]
        }, {
          type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"]
        }, {
          type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]
        }, {
          type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"]
        }, {
          type: src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_10__["TicketService"]
        }];
      };

      HelpdeskReportsDataComponent.propDecorators = {
        gridResident: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['gridResident', {
            "static": false
          }]
        }],
        datagrid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['datagrid', {
            "static": false
          }]
        }],
        matDrawer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['matDrawer', {
            "static": true
          }]
        }]
      };
      HelpdeskReportsDataComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-helpdesk-reports-data',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./helpdesk-reports-data.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-reports/helpdesk-reports-data/helpdesk-reports-data.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./helpdesk-reports-data.component.scss */
        "./src/app/modules/ams/helpdesk/components/helpdesk-reports/helpdesk-reports-data/helpdesk-reports-data.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"], src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"], src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"], src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"], src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_10__["TicketService"]])], HelpdeskReportsDataComponent);
      /***/
    },

    /***/
    "./src/app/modules/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.scss":
    /*!**************************************************************************************************!*\
      !*** ./src/app/modules/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.scss ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsHelpdeskComponentsHelpdeskReportsHelpdeskReportsComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL2hlbHBkZXNrL2NvbXBvbmVudHMvaGVscGRlc2stcmVwb3J0cy9oZWxwZGVzay1yZXBvcnRzLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/modules/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.ts":
    /*!************************************************************************************************!*\
      !*** ./src/app/modules/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.ts ***!
      \************************************************************************************************/

    /*! exports provided: HelpdeskReportsComponent */

    /***/
    function srcAppModulesAmsHelpdeskComponentsHelpdeskReportsHelpdeskReportsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HelpdeskReportsComponent", function () {
        return HelpdeskReportsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/api/controllers/Lookup */
      "./src/app/api/controllers/Lookup.ts");
      /* harmony import */


      var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/session/session.service */
      "./src/app/core/session/session.service.ts");

      var HelpdeskReportsComponent = /*#__PURE__*/function () {
        function HelpdeskReportsComponent(lookupService, sessionService) {
          _classCallCheck(this, HelpdeskReportsComponent);

          this.lookupService = lookupService;
          this.sessionService = sessionService;
          this.isDataLoaded = false;
        }

        _createClass(HelpdeskReportsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this13 = this;

            var details = {
              ApartmentId: this.sessionService.apartmentId,
              LookupTypeId: 87,
              MenuName: 'HelpdeskTracker'
            }; // this.reportDataList = [
            //   {lookupValueName: 'List of Open tickets', description:'Gives the list of open tickets in the condo',type:'customer'},
            // ]
            //  this.isDataLoaded = true;

            this.lookupService.getLookupValuesByApartmentIdLookupTypeIdMenuName(details).subscribe(function (res) {
              _this13.reportDataList = res;
              _this13.isDataLoaded = true;
            });
          }
        }, {
          key: "getReportRedirectPath",
          value: function getReportRedirectPath(path) {
            return path.replace('/', '');
          }
        }]);

        return HelpdeskReportsComponent;
      }();

      HelpdeskReportsComponent.ctorParameters = function () {
        return [{
          type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__["LookupService"]
        }, {
          type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"]
        }];
      };

      HelpdeskReportsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-helpdesk-reports',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./helpdesk-reports.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./helpdesk-reports.component.scss */
        "./src/app/modules/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__["LookupService"], src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"]])], HelpdeskReportsComponent);
      /***/
    },

    /***/
    "./src/app/modules/ams/helpdesk/components/helpdesk-reports/open-tickets-report/open-tickets-report.component.scss":
    /*!*************************************************************************************************************************!*\
      !*** ./src/app/modules/ams/helpdesk/components/helpdesk-reports/open-tickets-report/open-tickets-report.component.scss ***!
      \*************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsHelpdeskComponentsHelpdeskReportsOpenTicketsReportOpenTicketsReportComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL2hlbHBkZXNrL2NvbXBvbmVudHMvaGVscGRlc2stcmVwb3J0cy9vcGVuLXRpY2tldHMtcmVwb3J0L29wZW4tdGlja2V0cy1yZXBvcnQuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/modules/ams/helpdesk/components/helpdesk-reports/open-tickets-report/open-tickets-report.component.ts":
    /*!***********************************************************************************************************************!*\
      !*** ./src/app/modules/ams/helpdesk/components/helpdesk-reports/open-tickets-report/open-tickets-report.component.ts ***!
      \***********************************************************************************************************************/

    /*! exports provided: OpenTicketsReportComponent */

    /***/
    function srcAppModulesAmsHelpdeskComponentsHelpdeskReportsOpenTicketsReportOpenTicketsReportComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OpenTicketsReportComponent", function () {
        return OpenTicketsReportComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/api/controllers/User */
      "./src/app/api/controllers/User.ts");
      /* harmony import */


      var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/api/controllers/Apartment */
      "./src/app/api/controllers/Apartment.ts");
      /* harmony import */


      var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/api/controllers/Lookup */
      "./src/app/api/controllers/Lookup.ts");
      /* harmony import */


      var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/shared.service */
      "./src/app/shared/services/shared.service.ts");
      /* harmony import */


      var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/core/session/session.service */
      "./src/app/core/session/session.service.ts");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */
      "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");

      var OpenTicketsReportComponent = /*#__PURE__*/function () {
        function OpenTicketsReportComponent(router, route, userService, apartmentService, lookupService, sharedService, sessionService) {
          _classCallCheck(this, OpenTicketsReportComponent);

          this.router = router;
          this.route = route;
          this.userService = userService;
          this.apartmentService = apartmentService;
          this.lookupService = lookupService;
          this.sharedService = sharedService;
          this.sessionService = sessionService;
          this.pageName = "";
          this.pageDesp = "";
          this.ItemStartIndex = 0;
          this.itemLimit = 10;
          this.unitFieldType = "unitno";
          this.unitOrder = true;
          this.isDataLoaded = false;
          this.blockId = parseInt(localStorage.getItem('apartmentBlockID'));
          this.blockNo = "All Blocks";
        }

        _createClass(OpenTicketsReportComponent, [{
          key: "getIndexParams",
          value: function getIndexParams(event) {
            this.ItemStartIndex = event.ItemStartIndex;
            this.ItemEndIndex = event.ItemEndIndex; // this.itemLimit = event.itemLimit;
          }
        }, {
          key: "sortUnitData",
          value: function sortUnitData(type) {
            this.unitFieldType = type;
            this.unitOrder = !this.unitOrder;
          }
        }, {
          key: "getFieldOrderBy",
          value: function getFieldOrderBy(type) {
            if (this.unitFieldType == type) {
              return this.unitOrder ? 'asc' : 'desc';
            } else return '';
          }
        }, {
          key: "isMobileView",
          value: function isMobileView() {
            return window.innerWidth <= 767 ? 'table-responsive' : '';
          }
        }, {
          key: "isItemsAvailable",
          value: function isItemsAvailable() {
            return this.totalItems > 0 ? true : false;
          }
        }, {
          key: "isNoItemsAvailable",
          value: function isNoItemsAvailable() {
            return this.totalItems == 0 ? true : false;
          }
        }, {
          key: "isListOfResidents",
          value: function isListOfResidents() {
            return this.pageName == "List of Residents";
          }
        }, {
          key: "isListOfApprovedUsers",
          value: function isListOfApprovedUsers() {
            return this.pageName == "List of Approved Users";
          }
        }, {
          key: "isListOfDeactivatedUsers",
          value: function isListOfDeactivatedUsers() {
            return this.pageName == "List of De-activated Users";
          }
        }, {
          key: "isListOfResidentsVehicleInfo",
          value: function isListOfResidentsVehicleInfo() {
            return this.pageName == "List of Residents Vehicle Info";
          }
        }, {
          key: "isListOfExpiringRental",
          value: function isListOfExpiringRental() {
            return this.pageName == "List of Expiring Rental  Lease Agreements";
          }
        }, {
          key: "isListOfUsersWithPets",
          value: function isListOfUsersWithPets() {
            return this.pageName == "List of Users with Pets";
          }
        }, {
          key: "isListOfUnits",
          value: function isListOfUnits() {
            return this.pageName == "List of Units";
          }
        }, {
          key: "isListOfBlocks",
          value: function isListOfBlocks() {
            return this.pageName == "List of Blocks";
          }
        }, {
          key: "isListOfOwners",
          value: function isListOfOwners() {
            return this.pageName == "List of Owners";
          }
        }, {
          key: "isListOfTenants",
          value: function isListOfTenants() {
            return this.pageName == "List of Tenants";
          }
        }, {
          key: "isListOfAdmins",
          value: function isListOfAdmins() {
            return this.pageName == "List of Admins";
          }
        }, {
          key: "getDate",
          value: function getDate(date) {
            return moment__WEBPACK_IMPORTED_MODULE_8__(date).format("MM-DD-YYYY");
          }
        }, {
          key: "getBlockDetails",
          value: function getBlockDetails() {
            var _this14 = this;

            //jqx column generating
            var cellsrenderer = function cellsrenderer(row, column, value) {
              return '<div class="jqx-custom-inner-cell">' + value + '</div>';
            };

            var columnrenderer = function columnrenderer(value) {
              return '<div style="padding: 14px">' + value + '</div>';
            };

            this.isDataLoaded = false;
            var details = {
              ApartmentID: this.sessionService.apartmentId,
              ApartmentBlockID: this.blockId
            };

            if (this.isListOfResidents()) {
              this.columnData = [{
                text: 'User Name',
                datafield: 'unitUserName',
                width: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Block Number',
                datafield: 'blockNo',
                minwidth: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Unit Number',
                datafield: 'unitNo',
                minwidth: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Email Id',
                datafield: 'emailID',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'User Type',
                datafield: 'userTypeName',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Mobile',
                datafield: 'mobile',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Vehicle Model',
                datafield: 'vehicleModel',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Vehicle Number',
                datafiled: 'vehicleNumber',
                width: 120,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }];
              this.userService.getReportUnitUserResidentsbyApartmentIdBlockId(details).subscribe(function (res) {
                var gridSourceData = {
                  localdata: res,
                  datatype: "array"
                };
                _this14.userReportDataList = new jqx.dataAdapter(gridSourceData);
                _this14.isDataLoaded = true;

                _this14.showItems();
              });
            } else if (this.isListOfApprovedUsers()) {
              this.columnData = [{
                text: 'User Name',
                datafield: 'unitUserName',
                width: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Block Number',
                datafield: 'blockNo',
                minwidth: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Unit Number',
                datafield: 'unitNo',
                minwidth: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Email Id',
                datafield: 'emailID',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'User Type',
                datafield: 'userTypeName',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Mobile',
                datafield: 'mobile',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Vehicle Model',
                datafield: 'vehicleModel',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Vehicle Number',
                datafiled: 'vehicleNumber',
                width: 120,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }];
              this.userService.getReportApprovedUnitUserbyApartmentIdBlockId(details).subscribe(function (res) {
                var gridSourceData = {
                  localdata: res,
                  datatype: "array"
                };
                _this14.userReportDataList = new jqx.dataAdapter(gridSourceData);
                _this14.isDataLoaded = true;

                _this14.showItems();
              });
            } else if (this.isListOfDeactivatedUsers()) {
              this.columnData = [{
                text: 'User Name',
                datafield: 'unitUserName',
                width: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Block Number',
                datafield: 'blockNo',
                minwidth: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Unit Number',
                datafield: 'unitNo',
                minwidth: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Email Id',
                datafield: 'emailID',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'User Type',
                datafield: 'userTypeName',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Mobile',
                datafield: 'mobile',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }];
              this.userService.getReportDeActivatedUnitUserbyApartmentIdBlockId(details).subscribe(function (res) {
                var gridSourceData = {
                  localdata: res,
                  datatype: "array"
                };
                _this14.userReportDataList = new jqx.dataAdapter(gridSourceData);
                _this14.isDataLoaded = true;

                _this14.showItems();
              });
            } else if (this.isListOfResidentsVehicleInfo()) {
              this.columnData = [{
                text: 'User Name',
                datafield: 'unitUserName',
                width: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Block Number',
                datafield: 'blockNo',
                minwidth: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Unit Number',
                datafield: 'unitNo',
                minwidth: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Vehicle Number',
                datafield: 'vehicleNumber',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Vehicle Model',
                datafield: 'vehicleModel',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Email Id',
                datafield: 'emailID',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Mobile',
                datafield: 'mobile',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }];
              this.userService.getReportUnitUserResidentsVehicleInfobyApartmentIdBlockId(details).subscribe(function (res) {
                var gridSourceData = {
                  localdata: res,
                  datatype: "array"
                };
                _this14.userReportDataList = new jqx.dataAdapter(gridSourceData);
                _this14.isDataLoaded = true;

                _this14.showItems();
              });
            } else if (this.isListOfExpiringRental()) {
              this.columnData = [{
                text: 'User Name',
                datafield: 'unitUserName',
                width: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Block Number',
                datafield: 'blockNo',
                minwidth: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Unit Number',
                datafield: 'unitNo',
                minwidth: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Start Date',
                datafield: 'agreementStartDate',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'End Date',
                datafield: 'agreementEndDate',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Rental Lease',
                datafield: 'rentalorLease',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Email Id',
                datafield: 'emailID',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }];
              this.userService.getReportExpiredRentLeaseAgreemtbyApartmentIdBlockId(details).subscribe(function (res) {
                var gridSourceData = {
                  localdata: res,
                  datatype: "array"
                };
                _this14.userReportDataList = new jqx.dataAdapter(gridSourceData);
                _this14.isDataLoaded = true;

                _this14.showItems();
              });
            } else if (this.isListOfUsersWithPets()) {
              this.columnData = [{
                text: 'User Name',
                datafield: 'unitUserName',
                width: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Block Number',
                datafield: 'blockNo',
                minwidth: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Unit Number',
                datafield: 'unitNo',
                minwidth: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Pet Name',
                datafield: 'petName',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Last Vaccination Date',
                datafield: 'lastVaccinationDate',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Email Id',
                datafield: 'emailID',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Mobile',
                datafield: 'mobile',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }];
              this.userService.getReportUnitUserPetInfobyApartmentIdBlockId(details).subscribe(function (res) {
                var gridSourceData = {
                  localdata: res,
                  datatype: "array"
                };
                _this14.userReportDataList = new jqx.dataAdapter(gridSourceData);
                _this14.isDataLoaded = true;

                _this14.showItems();
              });
            } else if (this.isListOfUnits()) {
              this.columnData = [{
                text: 'User Type',
                datafield: 'unitType',
                width: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Block Number',
                datafield: 'apartmentBlockNumber',
                minwidth: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Unit Number',
                datafield: 'apartmentBlockUnitNumber',
                minwidth: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Mobile',
                datafield: 'intercom',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Available Date Date',
                datafield: 'availableDate',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }];
              var params = {
                apartmentId: this.sessionService.apartmentId
              };
              this.apartmentService.getApartmentBlockUnitByApartmentId(params).subscribe(function (res) {
                var gridSourceData = {
                  localdata: res,
                  datatype: "array"
                };
                _this14.userReportDataList = new jqx.dataAdapter(gridSourceData);
                _this14.isDataLoaded = true;

                _this14.showItems();
              });
            } else if (this.isListOfBlocks()) {
              this.columnData = [{
                text: 'Block Number',
                datafield: 'apartmentBlockNumber',
                width: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Block Common Area',
                datafield: 'blockCommonArea',
                minwidth: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Block Constructed Area',
                datafield: 'blockConstructedArea',
                minwidth: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Description',
                datafield: 'description',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'No Of Units',
                datafield: 'totalNounits',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'No Of Floors',
                datafield: 'totalnofloors',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }];
              var _params = {
                apartmentId: this.sessionService.apartmentId
              };
              this.apartmentService.getApartmentBlockByApartmentId(_params).subscribe(function (res) {
                var gridSourceData = {
                  localdata: res,
                  datatype: "array"
                };
                _this14.userReportDataList = new jqx.dataAdapter(gridSourceData);
                _this14.isDataLoaded = true;

                _this14.showItems();
              });
            } else if (this.isListOfTenants()) {
              this.columnData = [{
                text: 'Name',
                datafield: 'firstName',
                width: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Phone Number',
                datafield: 'phoneNumber',
                minwidth: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Gender',
                datafield: 'genderId',
                minwidth: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Email Id',
                datafield: 'emailId',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Date of Birth',
                datafield: 'dob',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }];
              var _params2 = {
                apartmentId: this.sessionService.apartmentId,
                roleId: 2
              };
              this.userService.getApartmentUsersByRoleId(_params2).subscribe(function (res) {
                var gridSourceData = {
                  localdata: res,
                  datatype: "array"
                };
                _this14.userReportDataList = new jqx.dataAdapter(gridSourceData);
                _this14.isDataLoaded = true;

                _this14.showItems();
              });
            } else if (this.isListOfOwners()) {
              this.columnData = [{
                text: 'Name',
                datafield: 'firstName',
                width: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Phone Number',
                datafield: 'phoneNumber',
                minwidth: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Gender',
                datafield: 'genderId',
                minwidth: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Email Id',
                datafield: 'emailId',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Date of Birth',
                datafield: 'dob',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }];
              var _params3 = {
                apartmentId: this.sessionService.apartmentId,
                roleId: 4
              };
              this.userService.getApartmentUsersByRoleId(_params3).subscribe(function (res) {
                var gridSourceData = {
                  localdata: res,
                  datatype: "array"
                };
                _this14.userReportDataList = new jqx.dataAdapter(gridSourceData);
                _this14.isDataLoaded = true;

                _this14.showItems();
              });
            } else if (this.isListOfAdmins()) {
              this.columnData = [{
                text: 'Name',
                datafield: 'firstName',
                width: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Phone Number',
                datafield: 'phoneNumber',
                minwidth: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Gender',
                datafield: 'genderId',
                minwidth: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Email Id',
                datafield: 'emailId',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }, {
                text: 'Date of Birth',
                datafield: 'dob',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
              }];
              var _params4 = {
                apartmentId: this.sessionService.apartmentId,
                roleId: 1
              };
              this.userService.getApartmentUsersByRoleId(_params4).subscribe(function (res) {
                var gridSourceData = {
                  localdata: res,
                  datatype: "array"
                };
                _this14.userReportDataList = new jqx.dataAdapter(gridSourceData);
                _this14.isDataLoaded = true;

                _this14.showItems();
              });
            }
          }
        }, {
          key: "showItems",
          value: function showItems() {
            this.totalItems = this.userReportDataList.length;

            if (this.totalItems > this.itemLimit) {
              this.ItemEndIndex = this.itemLimit;
            } else {
              this.ItemEndIndex = this.totalItems;
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this15 = this;

            this.pageName = this.route.params['value'].name;
            var unitBlockParams = {
              apartmentId: this.sessionService.apartmentId
            };
            this.apartmentService.getApartmentBlockByApartmentId(unitBlockParams).subscribe(function (res) {
              _this15.unitBlocksData = res;
            });
            var params = {
              LookupTypeId: 87
            };
            this.lookupService.getLookupValueByLookupTypeId(params).subscribe(function (res) {
              var data = res.filter(function (item) {
                return item.lookupValueId == _this15.route.params['value'].id;
              });
              _this15.pageName = data[0].lookupValueName.replace('/', '');
              _this15.pageDesp = data[0].description;
            });
            this.getBlockDetails();
          }
        }]);

        return OpenTicketsReportComponent;
      }();

      OpenTicketsReportComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }, {
          type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"]
        }, {
          type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"]
        }, {
          type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]
        }, {
          type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"]
        }];
      };

      OpenTicketsReportComponent.propDecorators = {
        gridResident: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['gridResident', {
            "static": false
          }]
        }]
      };
      OpenTicketsReportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-open-tickets-report',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./open-tickets-report.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-reports/open-tickets-report/open-tickets-report.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./open-tickets-report.component.scss */
        "./src/app/modules/ams/helpdesk/components/helpdesk-reports/open-tickets-report/open-tickets-report.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"], src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"], src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"], src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"]])], OpenTicketsReportComponent);
      /***/
    },

    /***/
    "./src/app/modules/ams/helpdesk/components/helpdesk-setup/add-ticket-category/add-ticket-category.component.scss":
    /*!***********************************************************************************************************************!*\
      !*** ./src/app/modules/ams/helpdesk/components/helpdesk-setup/add-ticket-category/add-ticket-category.component.scss ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsHelpdeskComponentsHelpdeskSetupAddTicketCategoryAddTicketCategoryComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL2hlbHBkZXNrL2NvbXBvbmVudHMvaGVscGRlc2stc2V0dXAvYWRkLXRpY2tldC1jYXRlZ29yeS9hZGQtdGlja2V0LWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/modules/ams/helpdesk/components/helpdesk-setup/add-ticket-category/add-ticket-category.component.ts":
    /*!*********************************************************************************************************************!*\
      !*** ./src/app/modules/ams/helpdesk/components/helpdesk-setup/add-ticket-category/add-ticket-category.component.ts ***!
      \*********************************************************************************************************************/

    /*! exports provided: AddTicketCategoryComponent */

    /***/
    function srcAppModulesAmsHelpdeskComponentsHelpdeskSetupAddTicketCategoryAddTicketCategoryComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddTicketCategoryComponent", function () {
        return AddTicketCategoryComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
      /* harmony import */


      var src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/api/controllers/Staff */
      "./src/app/api/controllers/Staff.ts");
      /* harmony import */


      var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/session/session.service */
      "./src/app/core/session/session.service.ts");
      /* harmony import */


      var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/api/controllers/Lookup */
      "./src/app/api/controllers/Lookup.ts");
      /* harmony import */


      var src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/api/controllers/Ticket */
      "./src/app/api/controllers/Ticket.ts");
      /* harmony import */


      var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/shared.service */
      "./src/app/shared/services/shared.service.ts");
      /* harmony import */


      var src_condo_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/@condo/animations */
      "./src/@condo/animations/index.ts");

      var AddTicketCategoryComponent = /*#__PURE__*/function () {
        function AddTicketCategoryComponent(dialogRef, staffService, sessionService, lookupService, ticketService, sharedService, _changeDetectorRef, data) {
          _classCallCheck(this, AddTicketCategoryComponent);

          this.dialogRef = dialogRef;
          this.staffService = staffService;
          this.sessionService = sessionService;
          this.lookupService = lookupService;
          this.ticketService = ticketService;
          this.sharedService = sharedService;
          this._changeDetectorRef = _changeDetectorRef;
          this.data = data;
          this.ticketCategoryData = {};
          this.staffsList = [];
          this.editData = {};
          this.isTicketSubmitted = false;
          this.message = null;
        }

        _createClass(AddTicketCategoryComponent, [{
          key: "isExistUser",
          value: function isExistUser(event, type) {
            if (type == 'one') this.ticketCategoryData.staffOne = event[0].userId;else if (type == 'two') this.ticketCategoryData.staffTwo = event[0].userId;else if (type == 'three') this.ticketCategoryData.staffThree = event[0].userId;
          }
        }, {
          key: "createCategory",
          value: function createCategory() {
            var _this16 = this;

            this.message = null;

            if (!this.form.valid) {
              window.scroll({
                top: 0,
                behavior: 'smooth'
              }); // Show the validation message

              this.message = {
                appearance: 'outline',
                content: "Fill the Required Fields",
                shake: true,
                showIcon: true,
                type: 'error'
              }; //Mark for check

              this._changeDetectorRef.markForCheck();
            } else {
              this.isTicketSubmitted = true;
              var entity = {
                description: this.ticketCategoryData.categoryName,
                lookupTypeId: this.data.type == 'private' ? 16 : 17,
                lookupValueName: this.ticketCategoryData.categoryName,
                apartmentId: this.sessionService.apartmentId,
                insertedBy: parseInt(this.sessionService.userId),
                insertedOn: new Date().toISOString(),
                isActive: true,
                updatedBy: 0,
                updatedOn: null
              };
              var lookupvalue = {
                lookupvalue: entity
              };
              this.lookupService.addLookupValue(lookupvalue).subscribe(function (res) {
                if (res.code == 200) {
                  _this16.sharedService.openSnackBar(res.statusMessage, 'success');

                  _this16.createEsclation(parseInt(res.message));
                } else {
                  _this16.isTicketSubmitted = false;

                  _this16.sharedService.openSnackBar(res.responseData.value.errorMessage, 'error');
                }
              }, function (error) {
                _this16.isTicketSubmitted = false;

                _this16.sharedService.openSnackBar('Network Error', 'error');
              });
            }
          }
        }, {
          key: "createEsclation",
          value: function createEsclation(ticketCategoryId) {
            var _this17 = this;

            var addTicket = [];
            var esclator = {
              ticketCategoryId: ticketCategoryId,
              ticketTypeId: this.data.type == 'private' ? 27 : 24,
              isDefault: true,
              isActive: true,
              apartmentId: this.sessionService.apartmentId,
              insertedBy: parseInt(this.sessionService.userId),
              insertedOn: new Date().toISOString(),
              updatedBy: this.data.mode == 'edit' ? parseInt(this.sessionService.userId) : 0,
              updatedOn: this.data.mode == 'edit' ? new Date().toISOString() : null
            };

            for (var i = 0; i < 3; i++) {
              if (i == 0) {
                var esclatorMain = {
                  ticketManagerId: this.data.mode == 'edit' ? this.ticketCategoryData.ticketManagerId : 0,
                  userId: this.ticketCategoryData.staffOne ? this.ticketCategoryData.staffOne : null,
                  escalationLevelId: 0,
                  escalationDays: 0
                };
                addTicket.push(Object.assign(Object.assign({}, esclator), esclatorMain));
              } else if (i == 1 && this.ticketCategoryData.staffTwo && this.ticketCategoryData.escalationDaysOne) {
                var _esclatorMain = {
                  ticketManagerId: this.data.mode == 'edit' ? this.ticketCategoryData.ticketManagerIdOne : 0,
                  userId: this.ticketCategoryData.staffTwo,
                  escalationLevelId: 1,
                  escalationDays: this.ticketCategoryData.escalationDaysOne
                };
                addTicket.push(Object.assign(Object.assign({}, esclator), _esclatorMain));
              } else if (i == 2 && this.ticketCategoryData.staffThree && this.ticketCategoryData.escalationDaysTwo) {
                var _esclatorMain2 = {
                  ticketManagerId: this.data.mode == 'edit' ? this.ticketCategoryData.ticketManagerIdTwo : 0,
                  userId: this.ticketCategoryData.staffThree,
                  escalationLevelId: 2,
                  escalationDays: this.ticketCategoryData.escalationDaysTwo
                };
                addTicket.push(Object.assign(Object.assign({}, esclator), _esclatorMain2));
              }
            }

            var params = {
              ticketManagers: addTicket
            };
            this.ticketService.addTicketManagerMultiple(params).subscribe(function (res) {
              if (res.code == 200) {
                _this17.isTicketSubmitted = false;

                _this17.sharedService.openSnackBar(res.statusMessage, 'success');

                _this17.dialogRef.close(true);
              } else {
                _this17.isTicketSubmitted = false;

                _this17.sharedService.openSnackBar(res.errorMessage, 'error');
              }
            }, function (error) {
              _this17.isTicketSubmitted = false;

              _this17.sharedService.openSnackBar('Server Error', 'error');
            });
          }
        }, {
          key: "updateCategory",
          value: function updateCategory() {
            var _this18 = this;

            this.message = null;

            if (!this.form.valid) {
              window.scroll({
                top: 0,
                behavior: 'smooth'
              }); // Show the validation message

              this.message = {
                appearance: 'outline',
                content: "Fill the Required Fields",
                shake: true,
                showIcon: true,
                type: 'error'
              }; //Mark for check

              this._changeDetectorRef.markForCheck();
            } else {
              this.isTicketSubmitted = true;

              if (this.ticketCategoryData.categoryName != this.editData.ticketCategoryName) {
                var entity = {
                  lookupValueId: this.editData.ticketCategoryId,
                  description: this.ticketCategoryData.categoryName,
                  lookupTypeId: this.data.type == 'private' ? 16 : 17,
                  lookupValueName: this.ticketCategoryData.categoryName,
                  apartmentId: this.sessionService.apartmentId,
                  insertedBy: parseInt(this.sessionService.userId),
                  insertedOn: new Date().toISOString(),
                  isActive: true,
                  updatedBy: parseInt(this.sessionService.userId),
                  updatedOn: new Date().toISOString()
                };
                var lookupvalue = {
                  lookupvalue: entity
                };
                this.lookupService.updateLookupValue(lookupvalue).subscribe(function (res) {
                  if (res.message) {
                    _this18.sharedService.openSnackBar(res.message, 'success');

                    _this18.createEsclation(_this18.editData.ticketCategoryId);
                  } else {
                    _this18.isTicketSubmitted = false;

                    _this18.sharedService.openSnackBar(res.errorMessage, 'error');
                  }
                }, function (error) {
                  _this18.isTicketSubmitted = false;

                  _this18.sharedService.openSnackBar('Server Error', 'error');
                });
              } else {
                this.createEsclation(this.editData.ticketCategoryId);
              }
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this19 = this;

            var staffParms = {
              apartmentId: this.sessionService.apartmentId,
              RoleTypeId: this.sessionService.roleTypeId
            };
            this.staffService.getAllStaffs(staffParms).subscribe(function (res) {
              if (res.length) {
                res.forEach(function (ele) {
                  ele.customLabel = "".concat(ele.staffName, ", ").concat(ele.roleName, " - ").concat(ele.staffCategoryName);
                });
                _this19.staffsList = res;
              }
            }, function (error) {
              console.log(error);
            }); //Edit Mode

            if (this.data.mode == 'edit' && this.data.categoryId) {
              var queryParamBase = {
                apartmentId: this.sessionService.apartmentId,
                ticketCategoryId: this.data.categoryId,
                ticketTypeId: this.data.type == 'private' ? 27 : 24
              };
              this.ticketService.getTicketManagerByTicketCategoryId(queryParamBase).subscribe(function (res) {
                _this19.editData = res[0];
                _this19.ticketCategoryData.categoryName = res[0].ticketCategoryName;
                _this19.ticketCategoryData.ticketManagerId = res[0].escalationLevelId0.ticketManagerId;
                _this19.ticketCategoryData.staffOne = res[0].escalationLevelId0.userId;

                if (res[0].escalationLevelId1) {
                  _this19.ticketCategoryData.escalationDaysOne = res[0].escalationLevelId1.escalationDays;
                  _this19.ticketCategoryData.ticketManagerIdOne = res[0].escalationLevelId1.ticketManagerId;
                  _this19.ticketCategoryData.staffTwo = res[0].escalationLevelId1.userId;
                }

                if (res[0].escalationLevelId2) {
                  _this19.ticketCategoryData.escalationDaysTwo = res[0].escalationLevelId2.escalationDays;
                  _this19.ticketCategoryData.ticketManagerIdTwo = res[0].escalationLevelId2.ticketManagerId;
                  _this19.ticketCategoryData.staffThree = res[0].escalationLevelId2.userId;
                }
              });
            }
          }
        }]);

        return AddTicketCategoryComponent;
      }();

      AddTicketCategoryComponent.ctorParameters = function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
        }, {
          type: src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_3__["StaffService"]
        }, {
          type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]
        }, {
          type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"]
        }, {
          type: src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_6__["TicketService"]
        }, {
          type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
          }]
        }];
      };

      AddTicketCategoryComponent.propDecorators = {
        form: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['ticketCategoryForm']
        }]
      };
      AddTicketCategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-ticket-category',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./add-ticket-category.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-setup/add-ticket-category/add-ticket-category.component.html"))["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        animations: src_condo_animations__WEBPACK_IMPORTED_MODULE_8__["CondoAnimations"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./add-ticket-category.component.scss */
        "./src/app/modules/ams/helpdesk/components/helpdesk-setup/add-ticket-category/add-ticket-category.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_3__["StaffService"], src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"], src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_6__["TicketService"], src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], Object])], AddTicketCategoryComponent);
      /***/
    },

    /***/
    "./src/app/modules/ams/helpdesk/components/helpdesk-setup/common-category/common-category.component.scss":
    /*!***************************************************************************************************************!*\
      !*** ./src/app/modules/ams/helpdesk/components/helpdesk-setup/common-category/common-category.component.scss ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsHelpdeskComponentsHelpdeskSetupCommonCategoryCommonCategoryComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL2hlbHBkZXNrL2NvbXBvbmVudHMvaGVscGRlc2stc2V0dXAvY29tbW9uLWNhdGVnb3J5L2NvbW1vbi1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/modules/ams/helpdesk/components/helpdesk-setup/common-category/common-category.component.ts":
    /*!*************************************************************************************************************!*\
      !*** ./src/app/modules/ams/helpdesk/components/helpdesk-setup/common-category/common-category.component.ts ***!
      \*************************************************************************************************************/

    /*! exports provided: CommonCategoryComponent */

    /***/
    function srcAppModulesAmsHelpdeskComponentsHelpdeskSetupCommonCategoryCommonCategoryComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommonCategoryComponent", function () {
        return CommonCategoryComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/session/session.service */
      "./src/app/core/session/session.service.ts");
      /* harmony import */


      var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */
      "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
      /* harmony import */


      var _add_ticket_category_add_ticket_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../add-ticket-category/add-ticket-category.component */
      "./src/app/modules/ams/helpdesk/components/helpdesk-setup/add-ticket-category/add-ticket-category.component.ts");
      /* harmony import */


      var src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/api/controllers/Ticket */
      "./src/app/api/controllers/Ticket.ts");
      /* harmony import */


      var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/shared.service */
      "./src/app/shared/services/shared.service.ts");
      /* harmony import */


      var src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/modal.service */
      "./src/app/shared/services/modal.service.ts");

      var CommonCategoryComponent = /*#__PURE__*/function () {
        function CommonCategoryComponent(dialog, sharedService, ticketService, sessionService, injector) {
          _classCallCheck(this, CommonCategoryComponent);

          this.dialog = dialog;
          this.sharedService = sharedService;
          this.ticketService = ticketService;
          this.sessionService = sessionService;
          this.injector = injector;
          this.commonFilter = "";
          this.isDataLoaded = true;
          this.totalItems = 0;
          this.modalService = this.injector.get(src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_8__["ModalService"]);
        }

        _createClass(CommonCategoryComponent, [{
          key: "addTicket",
          value: function addTicket(mode, categoryId) {
            var _this20 = this;

            var data = {
              type: 'common',
              mode: mode,
              categoryId: categoryId
            };
            var dialogRef = this.dialog.open(_add_ticket_category_add_ticket_category_component__WEBPACK_IMPORTED_MODULE_5__["AddTicketCategoryComponent"], {
              panelClass: 'material-dialog-medium',
              data: data
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result) {
                _this20.getCommonCategoryList();
              }
            });
          }
        }, {
          key: "onCommonCatEdit",
          value: function onCommonCatEdit(detail) {
            var dataRecord = this.commondatagrid.getrowdata(detail.rowId);
            this.addTicket('edit', dataRecord.ticketCategoryId);
          }
        }, {
          key: "onCommonCatDelete",
          value: function onCommonCatDelete(detail) {
            var dataRecord = this.commondatagrid.getrowdata(detail.rowId);
            this.modalService.showConfirmModal({
              id: dataRecord.ticketCategoryId,
              index: detail.rowId
            });
          }
        }, {
          key: "onGlSearchFilter",
          value: function onGlSearchFilter(event) {
            var _this21 = this;

            if (event != "") {
              var filtergroup = new jqx.filter();
              var filter_or_operator = 1;
              var filtervalue = event;
              var filtercondition = 'contains';
              var filterData = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
              filtergroup.operator = 'or';
              filtergroup.addfilter(filter_or_operator, filterData);
              this.commondatagrid.showfiltercolumnbackground(false);
              this.commonColumns.forEach(function (item) {
                if (item.datafield != 'Actions') {
                  _this21.commondatagrid.addfilter(item.datafield, filtergroup, true);
                }
              });
              this.commondatagrid.applyfilters();
            } else {
              this.commondatagrid.clearfilters();
            }
          }
        }, {
          key: "getCommonCategoryList",
          value: function getCommonCategoryList() {
            var _this22 = this;

            this.isDataLoaded = true;
            var params = {
              apartmentId: this.sessionService.apartmentId,
              ticketTypeId: 24
            };
            this.ticketService.getAllTicketManagerByApartmentId(params).subscribe(function (res) {
              if (res.length > 0) {
                _this22.totalItems = res.length;
                var data = {
                  localdata: res.reverse(),
                  datatype: "array"
                };
                _this22.commonListData = new jqx.dataAdapter(data);
              }

              _this22.isDataLoaded = false;
            }, function (error) {
              _this22.isDataLoaded = false;

              _this22.sharedService.openSnackBar('Server Error', 'error');
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this23 = this;

            this.getCommonCategoryList();

            var cellsrendererCommon = function cellsrendererCommon(row, column, value) {
              return '<div class="jqx-custom-inner-cell">' + value + '</div>';
            };

            var columnrendererCommon = function columnrendererCommon(value) {
              return '<div style="padding: 14px">' + value + '</div>';
            };

            this.commonColumns = [{
              text: 'Category',
              datafield: 'ticketCategoryName',
              width: 200,
              pinned: true,
              cellsrenderer: cellsrendererCommon,
              renderer: columnrendererCommon
            }, {
              text: 'Supervisor',
              datafield: "escalationLevelId0",
              cellsrenderer: function cellsrenderer(row, column, value) {
                var field = _this23.commonListData.loadedData[row].escalationLevelId0;
                if (field && field.userName) value = field.userName;else value = '';
                return '<div class="jqx-custom-inner-cell">' + value + '</div>';
              },
              minwidth: 150,
              renderer: columnrendererCommon
            }, {
              text: 'Level-1',
              datafield: 'escalationLevelId1',
              cellsrenderer: function cellsrenderer(row, column, value) {
                var field = _this23.commonListData.loadedData[row].escalationLevelId1;
                if (field && field.userName) value = field.userName;else value = '';
                return '<div class="jqx-custom-inner-cell">' + value + '</div>';
              },
              minwidth: 150,
              renderer: columnrendererCommon
            }, {
              text: 'L1 escdays',
              cellsrenderer: function cellsrenderer(row, column, value) {
                var field = _this23.commonListData.loadedData[row].escalationLevelId1;
                if (field && field.escalationDays) value = field.escalationDays;else value = '';
                return '<div class="jqx-custom-inner-cell">' + value + '</div>';
              },
              width: 120,
              renderer: columnrendererCommon
            }, {
              text: 'Level-2',
              datafield: 'escalationLevelId2',
              cellsrenderer: function cellsrenderer(row, column, value) {
                var field = _this23.commonListData.loadedData[row].escalationLevelId2;
                if (field && field.userName) value = field.userName;else value = '';
                return '<div class="jqx-custom-inner-cell">' + value + '</div>';
              },
              minwidth: 150,
              renderer: columnrendererCommon
            }, {
              text: 'L2 escdays',
              cellsrenderer: function cellsrenderer(row, column, value) {
                var field = _this23.commonListData.loadedData[row].escalationLevelId2;
                if (field && field.escalationDays) value = field.escalationDays;else value = '';
                return '<div class="jqx-custom-inner-cell">' + value + '</div>';
              },
              width: 120,
              renderer: columnrendererCommon
            }, {
              text: 'Actions',
              cellsalign: 'center',
              align: 'center',
              width: 120,
              cellsrenderer: function cellsrenderer(row) {
                return '<div class="simple-actions"><a href="javascript:void(0)" class="mr-2" onClick="editCommonCatEvent(' + row + ')"><i class="fa fa-pencil icon edit" title="Edit" aria-hidden="true"></i></a><a href="javascript:void(0)" class="mr-2" onClick="showConfirmDeleteEventCommon(' + row + ')"><i class="fa fa-trash icon delete" title="Delete" aria-hidden="true"></i></a></div>';
              },
              renderer: columnrendererCommon
            }]; //Delete Category

            this.apiSubscribe = this.sharedService.unitlistdeleteindexcast.subscribe(function (item) {
              if (item != null && item.id) {
                var params = {
                  apartmentId: _this23.sessionService.apartmentId,
                  ticketCategoryId: item.id,
                  deleteBy: _this23.sessionService.userId
                };

                _this23.ticketService.deleteTicketManagerByTicketCategoryId(params).subscribe(function (res) {
                  if (res.message) {
                    _this23.sharedService.setUnitListDeleteIndex(null);

                    _this23.commondatagrid.deleterow(item.index);
                  }
                });
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.apiSubscribe.unsubscribe();
          }
        }]);

        return CommonCategoryComponent;
      }();

      CommonCategoryComponent.ctorParameters = function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
        }, {
          type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"]
        }, {
          type: src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_6__["TicketService"]
        }, {
          type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
        }];
      };

      CommonCategoryComponent.propDecorators = {
        commondatagrid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['commondatagrid', {
            "static": false
          }]
        }],
        onCommonCatEdit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['window:onCommonCatEdit', ['$event.detail']]
        }],
        onCommonCatDelete: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['window:onCommonCatDelete', ['$event.detail']]
        }]
      };
      CommonCategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-common-category',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./common-category.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-setup/common-category/common-category.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./common-category.component.scss */
        "./src/app/modules/ams/helpdesk/components/helpdesk-setup/common-category/common-category.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"], src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_6__["TicketService"], src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])], CommonCategoryComponent);

      function showConfirmDeleteEventCommon(row) {
        var event = new CustomEvent('onCommonCatDelete', {
          detail: {
            rowId: row
          }
        });
        window.dispatchEvent(event);
      }

      window.showConfirmDeleteEventCommon = showConfirmDeleteEventCommon;

      function editCommonCatEvent(row) {
        var event = new CustomEvent('onCommonCatEdit', {
          detail: {
            rowId: row
          }
        });
        window.dispatchEvent(event);
      }

      window.editCommonCatEvent = editCommonCatEvent;
      /***/
    },

    /***/
    "./src/app/modules/ams/helpdesk/components/helpdesk-setup/helpdesk-setup.component.scss":
    /*!**********************************************************************************************!*\
      !*** ./src/app/modules/ams/helpdesk/components/helpdesk-setup/helpdesk-setup.component.scss ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsHelpdeskComponentsHelpdeskSetupHelpdeskSetupComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".mandatory {\n  color: red;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hbXMvaGVscGRlc2svY29tcG9uZW50cy9oZWxwZGVzay1zZXR1cC9oZWxwZGVzay1zZXR1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2Ftcy9oZWxwZGVzay9jb21wb25lbnRzL2hlbHBkZXNrLXNldHVwL2hlbHBkZXNrLXNldHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hbmRhdG9yeXtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/modules/ams/helpdesk/components/helpdesk-setup/helpdesk-setup.component.ts":
    /*!********************************************************************************************!*\
      !*** ./src/app/modules/ams/helpdesk/components/helpdesk-setup/helpdesk-setup.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: HelpdeskSetupComponent */

    /***/
    function srcAppModulesAmsHelpdeskComponentsHelpdeskSetupHelpdeskSetupComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HelpdeskSetupComponent", function () {
        return HelpdeskSetupComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var HelpdeskSetupComponent = /*#__PURE__*/function () {
        function HelpdeskSetupComponent() {
          _classCallCheck(this, HelpdeskSetupComponent);
        }

        _createClass(HelpdeskSetupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.navArray = [{
              link: 'private-category',
              name: 'Private Category'
            }, {
              link: 'common-category',
              name: 'Common Category'
            }];
          }
        }]);

        return HelpdeskSetupComponent;
      }();

      HelpdeskSetupComponent.ctorParameters = function () {
        return [];
      };

      HelpdeskSetupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-helpdesk-setup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./helpdesk-setup.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-setup/helpdesk-setup.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./helpdesk-setup.component.scss */
        "./src/app/modules/ams/helpdesk/components/helpdesk-setup/helpdesk-setup.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], HelpdeskSetupComponent);
      /***/
    },

    /***/
    "./src/app/modules/ams/helpdesk/components/helpdesk-setup/private-category/private-category.component.scss":
    /*!*****************************************************************************************************************!*\
      !*** ./src/app/modules/ams/helpdesk/components/helpdesk-setup/private-category/private-category.component.scss ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsHelpdeskComponentsHelpdeskSetupPrivateCategoryPrivateCategoryComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL2hlbHBkZXNrL2NvbXBvbmVudHMvaGVscGRlc2stc2V0dXAvcHJpdmF0ZS1jYXRlZ29yeS9wcml2YXRlLWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/modules/ams/helpdesk/components/helpdesk-setup/private-category/private-category.component.ts":
    /*!***************************************************************************************************************!*\
      !*** ./src/app/modules/ams/helpdesk/components/helpdesk-setup/private-category/private-category.component.ts ***!
      \***************************************************************************************************************/

    /*! exports provided: PrivateCategoryComponent */

    /***/
    function srcAppModulesAmsHelpdeskComponentsHelpdeskSetupPrivateCategoryPrivateCategoryComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrivateCategoryComponent", function () {
        return PrivateCategoryComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/session/session.service */
      "./src/app/core/session/session.service.ts");
      /* harmony import */


      var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */
      "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
      /* harmony import */


      var _add_ticket_category_add_ticket_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../add-ticket-category/add-ticket-category.component */
      "./src/app/modules/ams/helpdesk/components/helpdesk-setup/add-ticket-category/add-ticket-category.component.ts");
      /* harmony import */


      var src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/api/controllers/Ticket */
      "./src/app/api/controllers/Ticket.ts");
      /* harmony import */


      var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/shared.service */
      "./src/app/shared/services/shared.service.ts");
      /* harmony import */


      var src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/modal.service */
      "./src/app/shared/services/modal.service.ts");

      var PrivateCategoryComponent = /*#__PURE__*/function () {
        function PrivateCategoryComponent(dialog, sharedService, ticketService, injector, sessionService) {
          _classCallCheck(this, PrivateCategoryComponent);

          this.dialog = dialog;
          this.sharedService = sharedService;
          this.ticketService = ticketService;
          this.injector = injector;
          this.sessionService = sessionService;
          this.privateFilter = '';
          this.isDataLoaded = true;
          this.totalItems = 0;
          this.modalService = this.injector.get(src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_8__["ModalService"]);
        }

        _createClass(PrivateCategoryComponent, [{
          key: "addTicket",
          value: function addTicket(mode, categoryId) {
            var _this24 = this;

            var data = {
              type: 'private',
              mode: mode,
              categoryId: categoryId
            };
            var dialogRef = this.dialog.open(_add_ticket_category_add_ticket_category_component__WEBPACK_IMPORTED_MODULE_5__["AddTicketCategoryComponent"], {
              panelClass: 'material-dialog-medium',
              data: data
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result) {
                _this24.getPrivateCategoryList();
              }
            });
          }
        }, {
          key: "onPrivateCatEdit",
          value: function onPrivateCatEdit(detail) {
            var dataRecord = this.privatedatagrid.getrowdata(detail.rowId);
            this.addTicket('edit', dataRecord.ticketCategoryId);
          }
        }, {
          key: "onPrivateCatDelete",
          value: function onPrivateCatDelete(detail) {
            var dataRecord = this.privatedatagrid.getrowdata(detail.rowId);
            this.modalService.showConfirmModal({
              id: dataRecord.ticketCategoryId,
              index: detail.rowId
            });
          }
        }, {
          key: "onGlSearchFilter",
          value: function onGlSearchFilter(event) {
            var _this25 = this;

            if (event != "") {
              var filtergroup = new jqx.filter();
              var filter_or_operator = 1;
              var filtervalue = event;
              var filtercondition = 'contains';
              var filterData = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
              filtergroup.operator = 'or';
              filtergroup.addfilter(filter_or_operator, filterData);
              this.privatedatagrid.showfiltercolumnbackground(false);
              this.privateColumns.forEach(function (item) {
                if (item.datafield != 'Actions') {
                  _this25.privatedatagrid.addfilter(item.datafield, filtergroup, true);
                }
              });
              this.privatedatagrid.applyfilters();
            } else {
              this.privatedatagrid.clearfilters();
            }
          }
        }, {
          key: "getPrivateCategoryList",
          value: function getPrivateCategoryList() {
            var _this26 = this;

            this.isDataLoaded = true;
            var params = {
              apartmentId: this.sessionService.apartmentId,
              ticketTypeId: 27
            };
            this.ticketService.getAllTicketManagerByApartmentId(params).subscribe(function (res) {
              if (res.length > 0) {
                _this26.totalItems = res.length;
                var data = {
                  localdata: res.reverse(),
                  datatype: "array"
                };
                _this26.privateListData = new jqx.dataAdapter(data);
              }

              _this26.isDataLoaded = false;
            }, function (error) {
              _this26.isDataLoaded = false;

              _this26.sharedService.openSnackBar('Server Error', 'error');
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this27 = this;

            this.getPrivateCategoryList();

            var cellsrendererPrivate = function cellsrendererPrivate(row, column, value) {
              return '<div class="jqx-custom-inner-cell">' + value + '</div>';
            };

            var columnrendererPrivate = function columnrendererPrivate(value) {
              return '<div style="padding: 14px">' + value + '</div>';
            };

            this.privateColumns = [{
              text: 'Category',
              datafield: 'ticketCategoryName',
              width: 200,
              pinned: true,
              cellsrenderer: cellsrendererPrivate,
              renderer: columnrendererPrivate
            }, {
              text: 'Supervisor',
              datafield: "escalationLevelId0",
              cellsrenderer: function cellsrenderer(row, column, value) {
                var field = _this27.privateListData.loadedData[row].escalationLevelId0;
                if (field && field.userName) value = field.userName;else value = '';
                return '<div class="jqx-custom-inner-cell">' + value + '</div>';
              },
              minwidth: 150,
              renderer: columnrendererPrivate
            }, {
              text: 'Level-1',
              datafield: 'escalationLevelId1',
              cellsrenderer: function cellsrenderer(row, column, value) {
                var field = _this27.privateListData.loadedData[row].escalationLevelId1;
                if (field && field.userName) value = field.userName;else value = '';
                return '<div class="jqx-custom-inner-cell">' + value + '</div>';
              },
              minwidth: 150,
              renderer: columnrendererPrivate
            }, {
              text: 'L1 escdays',
              cellsrenderer: function cellsrenderer(row, column, value) {
                var field = _this27.privateListData.loadedData[row].escalationLevelId1;
                if (field && field.escalationDays) value = field.escalationDays;else value = '';
                return '<div class="jqx-custom-inner-cell">' + value + '</div>';
              },
              width: 120,
              renderer: columnrendererPrivate
            }, {
              text: 'Level-2',
              datafield: 'escalationLevelId2',
              cellsrenderer: function cellsrenderer(row, column, value) {
                var field = _this27.privateListData.loadedData[row].escalationLevelId2;
                if (field && field.userName) value = field.userName;else value = '';
                return '<div class="jqx-custom-inner-cell">' + value + '</div>';
              },
              minwidth: 150,
              renderer: columnrendererPrivate
            }, {
              text: 'L2 escdays',
              cellsrenderer: function cellsrenderer(row, column, value) {
                var field = _this27.privateListData.loadedData[row].escalationLevelId2;
                if (field && field.escalationDays) value = field.escalationDays;else value = '';
                return '<div class="jqx-custom-inner-cell">' + value + '</div>';
              },
              width: 120,
              renderer: columnrendererPrivate
            }, {
              text: 'Actions',
              cellsalign: 'center',
              align: 'center',
              width: 120,
              cellsrenderer: function cellsrenderer(row) {
                return '<div class="simple-actions"><a href="javascript:void(0)" class="mr-2" onClick="editPrivateCatEvent(' + row + ')"><i class="fa fa-pencil icon edit" title="Edit" aria-hidden="true"></i></a><a href="javascript:void(0)" class="mr-2" onClick="showConfirmDeleteEventPrivate(' + row + ')"><i class="fa fa-trash icon delete" title="Delete" aria-hidden="true"></i></a></div>';
              },
              renderer: columnrendererPrivate
            }]; //Delete Category

            this.apiSubscribe = this.sharedService.unitlistdeleteindexcast.subscribe(function (item) {
              if (item != null && item.id) {
                var params = {
                  apartmentId: _this27.sessionService.apartmentId,
                  ticketCategoryId: item.id,
                  deleteBy: _this27.sessionService.userId
                };

                _this27.ticketService.deleteTicketManagerByTicketCategoryId(params).subscribe(function (res) {
                  if (res.message) {
                    _this27.sharedService.setUnitListDeleteIndex(null);

                    _this27.privatedatagrid.deleterow(item.index);
                  }
                });
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.apiSubscribe.unsubscribe();
          }
        }]);

        return PrivateCategoryComponent;
      }();

      PrivateCategoryComponent.ctorParameters = function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
        }, {
          type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"]
        }, {
          type: src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_6__["TicketService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
        }, {
          type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]
        }];
      };

      PrivateCategoryComponent.propDecorators = {
        privatedatagrid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['privatedatagrid', {
            "static": false
          }]
        }],
        onPrivateCatEdit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['window:onPrivateCatEdit', ['$event.detail']]
        }],
        onPrivateCatDelete: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['window:onPrivateCatDelete', ['$event.detail']]
        }]
      };
      PrivateCategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-private-category',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./private-category.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-setup/private-category/private-category.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./private-category.component.scss */
        "./src/app/modules/ams/helpdesk/components/helpdesk-setup/private-category/private-category.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"], src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_6__["TicketService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]])], PrivateCategoryComponent);

      function showConfirmDeleteEventPrivate(row) {
        var event = new CustomEvent('onPrivateCatDelete', {
          detail: {
            rowId: row
          }
        });
        window.dispatchEvent(event);
      }

      window.showConfirmDeleteEventPrivate = showConfirmDeleteEventPrivate;

      function editPrivateCatEvent(row) {
        var event = new CustomEvent('onPrivateCatEdit', {
          detail: {
            rowId: row
          }
        });
        window.dispatchEvent(event);
      }

      window.editPrivateCatEvent = editPrivateCatEvent;
      /***/
    },

    /***/
    "./src/app/modules/ams/helpdesk/components/helpdesk-ticket-filter/helpdesk-ticket-filter.component.scss":
    /*!**************************************************************************************************************!*\
      !*** ./src/app/modules/ams/helpdesk/components/helpdesk-ticket-filter/helpdesk-ticket-filter.component.scss ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsHelpdeskComponentsHelpdeskTicketFilterHelpdeskTicketFilterComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "app-helpdesk-ticket-filter {\n  display: flex;\n  flex: 1 1 auto;\n}\napp-helpdesk-ticket-filter .mat-drawer-container .mat-drawer {\n  max-width: 480px !important;\n  width: 480px !important;\n}\napp-helpdesk-ticket-filter .mat-drawer-container .mat-drawer .helpdesk-filter-drawer {\n  padding: 30px 25px 30px 25px;\n}\napp-helpdesk-ticket-filter .mat-drawer-container .mat-drawer .helpdesk-filter-drawer .title {\n  display: flex;\n  margin: 0 0 30px 0;\n}\napp-helpdesk-ticket-filter .mat-drawer-container .mat-drawer .helpdesk-filter-drawer .title h4 {\n  padding: 10px 0 0 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hbXMvaGVscGRlc2svY29tcG9uZW50cy9oZWxwZGVzay10aWNrZXQtZmlsdGVyL2hlbHBkZXNrLXRpY2tldC1maWx0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQUNKO0FBQUk7RUFDSSwyQkFBQTtFQUNBLHVCQUFBO0FBRVI7QUFEUTtFQUNJLDRCQUFBO0FBR1o7QUFGWTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtBQUloQjtBQUhnQjtFQUNJLDhCQUFBO0FBS3BCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hbXMvaGVscGRlc2svY29tcG9uZW50cy9oZWxwZGVzay10aWNrZXQtZmlsdGVyL2hlbHBkZXNrLXRpY2tldC1maWx0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtaGVscGRlc2stdGlja2V0LWZpbHRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAubWF0LWRyYXdlci1jb250YWluZXIgLm1hdC1kcmF3ZXIge1xuICAgICAgICBtYXgtd2lkdGg6IDQ4MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHdpZHRoOiA0ODBweCAhaW1wb3J0YW50O1xuICAgICAgICAuaGVscGRlc2stZmlsdGVyLWRyYXdlciB7XG4gICAgICAgICAgICBwYWRkaW5nOiAzMHB4IDI1cHggMzBweCAyNXB4O1xuICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDMwcHggMDtcbiAgICAgICAgICAgICAgICBoNCB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMCAwIDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/modules/ams/helpdesk/components/helpdesk-ticket-filter/helpdesk-ticket-filter.component.ts":
    /*!************************************************************************************************************!*\
      !*** ./src/app/modules/ams/helpdesk/components/helpdesk-ticket-filter/helpdesk-ticket-filter.component.ts ***!
      \************************************************************************************************************/

    /*! exports provided: HelpdeskTicketFilterComponent */

    /***/
    function srcAppModulesAmsHelpdeskComponentsHelpdeskTicketFilterHelpdeskTicketFilterComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HelpdeskTicketFilterComponent", function () {
        return HelpdeskTicketFilterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */
      "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
      /* harmony import */


      var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/api/controllers/User */
      "./src/app/api/controllers/User.ts");
      /* harmony import */


      var src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/api/controllers/Staff */
      "./src/app/api/controllers/Staff.ts");
      /* harmony import */


      var src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/api/controllers/Ticket */
      "./src/app/api/controllers/Ticket.ts");
      /* harmony import */


      var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/api/controllers/Lookup */
      "./src/app/api/controllers/Lookup.ts");
      /* harmony import */


      var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/shared.service */
      "./src/app/shared/services/shared.service.ts");
      /* harmony import */


      var src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/modal.service */
      "./src/app/shared/services/modal.service.ts");
      /* harmony import */


      var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/core/session/session.service */
      "./src/app/core/session/session.service.ts");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);

      var HelpdeskTicketFilterComponent = /*#__PURE__*/function () {
        function HelpdeskTicketFilterComponent(activateRouter, router, injector, userService, staffService, ticketService, lookupService, sharedService, sessionService) {
          _classCallCheck(this, HelpdeskTicketFilterComponent);

          this.activateRouter = activateRouter;
          this.router = router;
          this.injector = injector;
          this.userService = userService;
          this.staffService = staffService;
          this.ticketService = ticketService;
          this.lookupService = lookupService;
          this.sharedService = sharedService;
          this.sessionService = sessionService;
          this.ticketSearch = "";
          this.isTicketDataLoaded = false; //Filter Purpose

          this.filterData = {
            ticketStatus: '',
            staff: null,
            supervisor: null
          };
          this.staffsList = [];
          this.ticketStatusList = [];
          this.modalService = this.injector.get(src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_9__["ModalService"]);
        }

        _createClass(HelpdeskTicketFilterComponent, [{
          key: "onEditTicket",
          value: function onEditTicket(detail) {
            var dataRecord = this.datagrid.getrowdata(detail.rowId);
            var ticketId = dataRecord.ticketId;
            if (this.isAdmin()) this.router.navigateByUrl('/ams/helpdesk/edit-ticket/' + ticketId);else this.router.navigate(['/user/servicedesk/edit-ticket/' + ticketId]);
          }
        }, {
          key: "getPrintParams",
          value: function getPrintParams(event) {
            this.datagrid.exportdata(event, 'helpdeskData');
          }
        }, {
          key: "isAdmin",
          value: function isAdmin() {
            return this.sessionService.isAdmin();
          }
        }, {
          key: "createTicketNavigate",
          value: function createTicketNavigate() {
            if (this.isAdmin()) this.router.navigate(['/ams/helpdesk/create-ticket']);else this.router.navigate(['/user/servicedesk/create-ticket']);
          } //condo-select

        }, {
          key: "dropDownSelect",
          value: function dropDownSelect(event, type) {
            if (type == 'status') this.filterData.ticketStatus = event[0].lookupValueId;else if (type == 'staff') this.filterData.staff = event[0].staffId;else if (type == 'supervisor') this.filterData.supervisor = event[0].staffId;
          }
        }, {
          key: "onGlSearchFilter",
          value: function onGlSearchFilter(event) {
            var _this28 = this;

            if (event != "") {
              var filtergroup = new jqx.filter();
              var filter_or_operator = 1;
              var filtervalue = event;
              var filtercondition = 'contains';
              var filterData = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
              filtergroup.operator = 'or';
              filtergroup.addfilter(filter_or_operator, filterData);
              this.datagrid.showfiltercolumnbackground(false);
              this.columnData.forEach(function (item) {
                if (item.datafield != 'Actions') {
                  _this28.datagrid.addfilter(item.datafield, filtergroup, true);
                }
              });
              this.datagrid.applyfilters();
            } else {
              this.datagrid.clearfilters();
            }
          }
        }, {
          key: "filterApply",
          value: function filterApply() {
            var _this29 = this;

            this.goBack();
            this.isTicketDataLoaded = false;
            var params = {
              apartmentId: this.sessionService.apartmentId,
              ticketStatusIds: this.filterData.ticketStatus,
              assigntoSupervisorId: this.filterData.supervisor,
              assigntoStaffId: this.filterData.staff
            };
            this.ticketService.getAllTicketsByApartmentId(params).subscribe(function (res) {
              _this29.isTicketDataLoaded = true;

              if (res.length > 0) {
                res.sort(function (a, b) {
                  return b.serialNo - a.serialNo;
                });
                var ticketInfo = {
                  localdata: res,
                  datatype: "array"
                };
                _this29.totalItems = ticketInfo.localdata.length;
                _this29.ticketListData = new jqx.dataAdapter(ticketInfo);
              }
            }, function (error) {
              _this29.isTicketDataLoaded = true;

              _this29.sharedService.openSnackBar('Server Error', 'error');
            });
          }
        }, {
          key: "clearFilter",
          value: function clearFilter() {
            this.filterData.ticketStatus = null;
            this.filterData.staff = null;
            this.filterData.supervisor = null;
            this.getTicketByAdmin();
            this.goBack();
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.matDrawer.close();
          }
        }, {
          key: "getTicketByAdmin",
          value: function getTicketByAdmin() {
            var _this30 = this;

            this.isTicketDataLoaded = false;
            var params = {
              apartmentId: this.sessionService.apartmentId
            };

            if (this.urlType == 'open-tickets') {
              params.ticketStatusIds = "32,33,46";
            } else if (this.urlType == 'closed-tickets') {
              params.ticketStatusIds = "34";
            } else if (this.urlType == 'unassigned') {
              params.isStaffassigned = false;
            } else if (this.urlType == 'assigned-to-me') {
              this.getTicketByAssignedUser();
              return;
            }

            this.ticketService.getAllTicketsByApartmentId(params).subscribe(function (res) {
              _this30.isTicketDataLoaded = true;

              if (res.length > 0) {
                res.sort(function (a, b) {
                  return b.serialNo - a.serialNo;
                });
                var ticketInfo = {
                  localdata: res,
                  datatype: "array"
                };
                _this30.totalItems = ticketInfo.localdata.length;
                _this30.ticketListData = new jqx.dataAdapter(ticketInfo);
              }
            }, function (error) {
              _this30.isTicketDataLoaded = true;

              _this30.sharedService.openSnackBar('Server Error', 'error');
            });
          }
        }, {
          key: "getTicketByAssignedUser",
          value: function getTicketByAssignedUser() {
            var _this31 = this;

            var params = {
              apartmentId: this.sessionService.apartmentId,
              userId: this.sessionService.userId
            };
            this.ticketService.getAllTicketsAssignedtoUserByApartmentId(params).subscribe(function (res) {
              _this31.isTicketDataLoaded = true;

              if (res.length > 0) {
                res.sort(function (a, b) {
                  return b.serialNo - a.serialNo;
                });
                var ticketInfo = {
                  localdata: res.reverse(),
                  datatype: "array"
                };
                _this31.totalItems = ticketInfo.localdata.length;
                _this31.ticketListData = new jqx.dataAdapter(ticketInfo);
              }
            }, function (error) {
              _this31.isTicketDataLoaded = true;

              _this31.sharedService.openSnackBar('Server Error', 'error');
            });
          }
        }, {
          key: "getTicketsByUser",
          value: function getTicketsByUser() {
            var _this32 = this;

            var params = {
              apartmentId: this.sessionService.apartmentId,
              blockunituserId: this.sessionService.apartmentBlockUnitUserId
            };
            this.ticketService.getTicketscreatedByblockunitUserId(params).subscribe(function (res) {
              _this32.isTicketDataLoaded = true;

              if (res.length > 0) {
                res.sort(function (a, b) {
                  return b.serialNo - a.serialNo;
                });
                var ticketInfo = {
                  localdata: res.reverse(),
                  datatype: "array"
                };
                _this32.totalItems = ticketInfo.localdata.length;
                _this32.ticketListData = new jqx.dataAdapter(ticketInfo);
              }
            }, function (error) {
              _this32.isTicketDataLoaded = true;

              _this32.sharedService.openSnackBar('Server Error', 'error');
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this33 = this;

            this.activateRouter.url.subscribe(function (data) {
              _this33.urlType = data[0].path;
            });

            if (this.isAdmin()) {
              this.getTicketByAdmin();
            } else {
              this.getTicketsByUser();
            }

            var cellsrenderer = function cellsrenderer(row, column, value) {
              return '<div class="jqx-custom-inner-cell">' + value + '</div>';
            };

            var columnrenderer = function columnrenderer(value) {
              return '<div style="padding: 14px">' + value + '</div>';
            };

            this.columnData = [{
              text: 'Ticket ID',
              datafield: 'serialNo',
              width: 100,
              pinned: true,
              cellsrenderer: cellsrenderer,
              renderer: columnrenderer
            }, {
              text: 'Type',
              datafield: 'ticketTypeId',
              cellsrenderer: function cellsrenderer(row, column, value) {
                if (value == 24) {
                  return '<div class="jqx-custom-inner-cell"><img src="assets/images/common-ticket-icon.svg"></div>';
                } else {
                  return '<div class="jqx-custom-inner-cell"><img src="assets/images/private-ticket-icon.svg"></div>';
                }
              },
              minwidth: 80,
              renderer: columnrenderer
            }, {
              text: 'Status',
              datafield: 'ticketStatusId',
              cellsrenderer: function cellsrenderer(row, column, value) {
                var status, label;

                if (value == 32) {
                  status = 'purple';
                  label = 'New';
                } else if (value == 33) {
                  status = 'orange';
                  label = 'Assigned';
                } else if (value == 34) {
                  status = 'green';
                  label = 'Resolved';
                } else if (value == 46) {
                  status = 'red';
                  label = 'On Hold';
                }

                return "<div class=\"jqx-custom-inner-cell\">\n            <div class=\"status-badge bg-status-".concat(status, "-700\">\n              <span class=\"font-bold text-status-").concat(status, "-900 text-uppercase\">").concat(label ? label : '', "</span>\n            </div>\n        </div>");
              },
              minwidth: 170,
              renderer: columnrenderer
            }, {
              text: 'Category',
              datafield: 'ticketCategoryId_Label',
              cellsrenderer: cellsrenderer,
              minwidth: 170,
              renderer: columnrenderer
            }, {
              text: 'Priority',
              datafield: 'ticketPriorityId',
              cellsrenderer: function cellsrenderer(row, column, value) {
                //47==High 48==Medium 49==Low
                var priority;

                if (value == 47) {
                  priority = 'bg-orange-900';
                } else if (value == 48) {
                  priority = 'bg-green-900';
                } else if (value == 49) {
                  priority = 'bg-purple-900';
                }

                return "<div class=\"simple-actions\"><span class=\"dots ".concat(priority, "\"></span></div>");
              },
              minwidth: 80,
              renderer: columnrenderer
            }, {
              text: 'Subject',
              datafield: 'title',
              cellsrenderer: cellsrenderer,
              minwidth: 170,
              renderer: columnrenderer
            }, {
              text: 'Supervisor',
              datafield: 'supervisorId_Label',
              cellsrenderer: cellsrenderer,
              minwidth: 150,
              renderer: columnrenderer
            }, {
              text: 'Assigned to Staff',
              datafield: 'staffId_Label',
              cellsrenderer: cellsrenderer,
              minwidth: 150,
              renderer: columnrenderer
            }, {
              text: 'Requested By',
              datafield: 'raisedby_Label',
              cellsrenderer: cellsrenderer,
              minwidth: 150,
              renderer: columnrenderer
            }, {
              text: 'Date Requested',
              datafield: 'insertedOn',
              cellsrenderer: function cellsrenderer(row, column, value) {
                return '<div class="jqx-custom-inner-cell">' + moment__WEBPACK_IMPORTED_MODULE_12__(value).format("DD-MM-YYYY hh:mm A") + '</div>';
              },
              minwidth: 170,
              renderer: columnrenderer
            }, {
              text: 'Actions',
              cellsalign: 'center',
              align: 'center',
              width: 120,
              cellsrenderer: function cellsrenderer(row) {
                return '<div class="simple-actions"><a href="javascript:void(0)" class="mr-2" onClick="editTicket(' + row + ')"><i class="fa fa-pencil icon edit" title="Edit Ticket Details" aria-hidden="true"></i></a></div>';
              },
              renderer: columnrenderer
            }];

            if (this.isAdmin()) {
              //Filter Purpose => Staff
              var staffParms = {
                apartmentId: this.sessionService.apartmentId,
                RoleTypeId: this.sessionService.roleTypeId
              };
              this.staffService.getAllStaffs(staffParms).subscribe(function (res) {
                if (res.length) {
                  res.forEach(function (ele) {
                    ele.customLabel = "".concat(ele.staffName, ", ").concat(ele.roleName, " - ").concat(ele.staffCategoryName);
                  });
                  _this33.staffsList = res;
                }
              }, function (error) {
                console.log(error);
              }); //Filter Purpose => Ticket Status

              var statusParams = {
                LookupTypeId: 9
              };
              this.lookupService.getLookupValueByLookupTypeId(statusParams).subscribe(function (res) {
                _this33.ticketStatusList = res;
              });
            }
          }
        }]);

        return HelpdeskTicketFilterComponent;
      }();

      HelpdeskTicketFilterComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
        }, {
          type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }, {
          type: src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_5__["StaffService"]
        }, {
          type: src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_6__["TicketService"]
        }, {
          type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"]
        }, {
          type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"]
        }, {
          type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_10__["SessionService"]
        }];
      };

      HelpdeskTicketFilterComponent.propDecorators = {
        matDrawer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['matDrawer', {
            "static": true
          }]
        }],
        datagrid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['datagrid', {
            "static": false
          }]
        }],
        onEditTicket: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['window:onEditTicket', ['$event.detail']]
        }]
      };
      HelpdeskTicketFilterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-helpdesk-ticket-filter',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./helpdesk-ticket-filter.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-ticket-filter/helpdesk-ticket-filter.component.html"))["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./helpdesk-ticket-filter.component.scss */
        "./src/app/modules/ams/helpdesk/components/helpdesk-ticket-filter/helpdesk-ticket-filter.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_4__["UserService"], src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_5__["StaffService"], src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_6__["TicketService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"], src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"], src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_10__["SessionService"]])], HelpdeskTicketFilterComponent);

      function getClassName(value) {
        var name = value.split('-');
        return name[0].toLowerCase();
      }

      window.getClassName = getClassName;

      function showConfirmDeleteEvent(row) {
        var event = new CustomEvent('onTicketDelete', {
          detail: {
            rowId: row
          }
        });
        window.dispatchEvent(event);
      }

      window.showConfirmDeleteEvent = showConfirmDeleteEvent;

      function editTicket(row) {
        var event = new CustomEvent('onEditTicket', {
          detail: {
            rowId: row
          }
        });
        window.dispatchEvent(event);
      }

      window.editTicket = editTicket;
      /***/
    },

    /***/
    "./src/app/modules/ams/helpdesk/helpdesk-routing.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/modules/ams/helpdesk/helpdesk-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: HelpdeskRoutingModule */

    /***/
    function srcAppModulesAmsHelpdeskHelpdeskRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HelpdeskRoutingModule", function () {
        return HelpdeskRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _components_helpdesk_setup_helpdesk_setup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/helpdesk-setup/helpdesk-setup.component */
      "./src/app/modules/ams/helpdesk/components/helpdesk-setup/helpdesk-setup.component.ts");
      /* harmony import */


      var _components_helpdesk_reports_helpdesk_reports_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/helpdesk-reports/helpdesk-reports.component */
      "./src/app/modules/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.ts");
      /* harmony import */


      var _components_helpdesk_setup_private_category_private_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/helpdesk-setup/private-category/private-category.component */
      "./src/app/modules/ams/helpdesk/components/helpdesk-setup/private-category/private-category.component.ts");
      /* harmony import */


      var _components_helpdesk_setup_common_category_common_category_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/helpdesk-setup/common-category/common-category.component */
      "./src/app/modules/ams/helpdesk/components/helpdesk-setup/common-category/common-category.component.ts");
      /* harmony import */


      var _components_helpdesk_ticket_filter_helpdesk_ticket_filter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/helpdesk-ticket-filter/helpdesk-ticket-filter.component */
      "./src/app/modules/ams/helpdesk/components/helpdesk-ticket-filter/helpdesk-ticket-filter.component.ts");
      /* harmony import */


      var _components_helpdesk_reports_helpdesk_reports_data_helpdesk_reports_data_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/helpdesk-reports/helpdesk-reports-data/helpdesk-reports-data.component */
      "./src/app/modules/ams/helpdesk/components/helpdesk-reports/helpdesk-reports-data/helpdesk-reports-data.component.ts");
      /* harmony import */


      var _components_helpdesk_create_ticket_helpdesk_create_ticket_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/helpdesk-create-ticket/helpdesk-create-ticket.component */
      "./src/app/modules/ams/helpdesk/components/helpdesk-create-ticket/helpdesk-create-ticket.component.ts");
      /* harmony import */


      var src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/core/auth/guards/auth.guard */
      "./src/app/core/auth/guards/auth.guard.ts");

      var routes = [{
        path: '',
        redirectTo: 'settings',
        pathMatch: 'full'
      }, {
        path: 'settings',
        component: _components_helpdesk_setup_helpdesk_setup_component__WEBPACK_IMPORTED_MODULE_3__["HelpdeskSetupComponent"],
        canActivate: [src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
        children: [{
          path: '',
          redirectTo: 'private-category',
          canActivate: [src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
          pathMatch: 'full'
        }, {
          path: 'private-category',
          component: _components_helpdesk_setup_private_category_private_category_component__WEBPACK_IMPORTED_MODULE_5__["PrivateCategoryComponent"],
          canActivate: [src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]]
        }, {
          path: 'common-category',
          component: _components_helpdesk_setup_common_category_common_category_component__WEBPACK_IMPORTED_MODULE_6__["CommonCategoryComponent"],
          canActivate: [src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]]
        }, {
          path: '**',
          redirectTo: 'private-category',
          pathMatch: 'full'
        }]
      }, {
        path: 'create-ticket',
        component: _components_helpdesk_create_ticket_helpdesk_create_ticket_component__WEBPACK_IMPORTED_MODULE_9__["HelpdeskCreateTicketComponent"],
        canActivate: [src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]]
      }, {
        path: 'edit-ticket/:id',
        component: _components_helpdesk_create_ticket_helpdesk_create_ticket_component__WEBPACK_IMPORTED_MODULE_9__["HelpdeskCreateTicketComponent"],
        canActivate: [src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]]
      }, {
        path: 'unassigned',
        component: _components_helpdesk_ticket_filter_helpdesk_ticket_filter_component__WEBPACK_IMPORTED_MODULE_7__["HelpdeskTicketFilterComponent"],
        canActivate: [src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]]
      }, {
        path: 'open-tickets',
        component: _components_helpdesk_ticket_filter_helpdesk_ticket_filter_component__WEBPACK_IMPORTED_MODULE_7__["HelpdeskTicketFilterComponent"],
        canActivate: [src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]]
      }, {
        path: 'closed-tickets',
        component: _components_helpdesk_ticket_filter_helpdesk_ticket_filter_component__WEBPACK_IMPORTED_MODULE_7__["HelpdeskTicketFilterComponent"],
        canActivate: [src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]]
      }, {
        path: 'assigned-to-me',
        component: _components_helpdesk_ticket_filter_helpdesk_ticket_filter_component__WEBPACK_IMPORTED_MODULE_7__["HelpdeskTicketFilterComponent"],
        canActivate: [src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]]
      }, {
        path: 'all-tickets',
        component: _components_helpdesk_ticket_filter_helpdesk_ticket_filter_component__WEBPACK_IMPORTED_MODULE_7__["HelpdeskTicketFilterComponent"],
        canActivate: [src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]]
      }, {
        path: 'reports',
        component: _components_helpdesk_reports_helpdesk_reports_component__WEBPACK_IMPORTED_MODULE_4__["HelpdeskReportsComponent"],
        canActivate: [src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]]
      }, {
        path: 'reports/:name/:id',
        component: _components_helpdesk_reports_helpdesk_reports_data_helpdesk_reports_data_component__WEBPACK_IMPORTED_MODULE_8__["HelpdeskReportsDataComponent"],
        canActivate: [src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]]
      }, {
        path: '**',
        redirectTo: 'settings',
        pathMatch: 'full'
      }];

      var HelpdeskRoutingModule = function HelpdeskRoutingModule() {
        _classCallCheck(this, HelpdeskRoutingModule);
      };

      HelpdeskRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HelpdeskRoutingModule);
      /***/
    },

    /***/
    "./src/app/modules/ams/helpdesk/helpdesk.component.scss":
    /*!**************************************************************!*\
      !*** ./src/app/modules/ams/helpdesk/helpdesk.component.scss ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsHelpdeskHelpdeskComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL2hlbHBkZXNrL2hlbHBkZXNrLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/modules/ams/helpdesk/helpdesk.component.ts":
    /*!************************************************************!*\
      !*** ./src/app/modules/ams/helpdesk/helpdesk.component.ts ***!
      \************************************************************/

    /*! exports provided: HelpdeskComponent */

    /***/
    function srcAppModulesAmsHelpdeskHelpdeskComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HelpdeskComponent", function () {
        return HelpdeskComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var HelpdeskComponent = /*#__PURE__*/function () {
        function HelpdeskComponent() {
          _classCallCheck(this, HelpdeskComponent);
        }

        _createClass(HelpdeskComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HelpdeskComponent;
      }();

      HelpdeskComponent.ctorParameters = function () {
        return [];
      };

      HelpdeskComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-helpdesk',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./helpdesk.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/helpdesk.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./helpdesk.component.scss */
        "./src/app/modules/ams/helpdesk/helpdesk.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], HelpdeskComponent);
      /***/
    },

    /***/
    "./src/app/modules/ams/helpdesk/helpdesk.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/modules/ams/helpdesk/helpdesk.module.ts ***!
      \*********************************************************/

    /*! exports provided: HelpdeskModule */

    /***/
    function srcAppModulesAmsHelpdeskHelpdeskModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HelpdeskModule", function () {
        return HelpdeskModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _helpdesk_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./helpdesk-routing.module */
      "./src/app/modules/ams/helpdesk/helpdesk-routing.module.ts");
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "./src/app/shared/shared.module.ts");
      /* harmony import */


      var src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/modules/ui/card/card.module */
      "./src/app/modules/ui/card/card.module.ts");
      /* harmony import */


      var _helpdesk_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./helpdesk.component */
      "./src/app/modules/ams/helpdesk/helpdesk.component.ts");
      /* harmony import */


      var _components_helpdesk_setup_helpdesk_setup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/helpdesk-setup/helpdesk-setup.component */
      "./src/app/modules/ams/helpdesk/components/helpdesk-setup/helpdesk-setup.component.ts");
      /* harmony import */


      var _components_helpdesk_reports_helpdesk_reports_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/helpdesk-reports/helpdesk-reports.component */
      "./src/app/modules/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.ts");
      /* harmony import */


      var _components_helpdesk_reports_open_tickets_report_open_tickets_report_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/helpdesk-reports/open-tickets-report/open-tickets-report.component */
      "./src/app/modules/ams/helpdesk/components/helpdesk-reports/open-tickets-report/open-tickets-report.component.ts");
      /* harmony import */


      var _components_helpdesk_setup_add_ticket_category_add_ticket_category_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/helpdesk-setup/add-ticket-category/add-ticket-category.component */
      "./src/app/modules/ams/helpdesk/components/helpdesk-setup/add-ticket-category/add-ticket-category.component.ts");
      /* harmony import */


      var _components_helpdesk_setup_common_category_common_category_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/helpdesk-setup/common-category/common-category.component */
      "./src/app/modules/ams/helpdesk/components/helpdesk-setup/common-category/common-category.component.ts");
      /* harmony import */


      var _components_helpdesk_setup_private_category_private_category_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./components/helpdesk-setup/private-category/private-category.component */
      "./src/app/modules/ams/helpdesk/components/helpdesk-setup/private-category/private-category.component.ts");
      /* harmony import */


      var _components_helpdesk_ticket_filter_helpdesk_ticket_filter_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/helpdesk-ticket-filter/helpdesk-ticket-filter.component */
      "./src/app/modules/ams/helpdesk/components/helpdesk-ticket-filter/helpdesk-ticket-filter.component.ts");
      /* harmony import */


      var src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/modules/ui/select/select.module */
      "./src/app/modules/ui/select/select.module.ts");
      /* harmony import */


      var _components_helpdesk_reports_helpdesk_reports_data_helpdesk_reports_data_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./components/helpdesk-reports/helpdesk-reports-data/helpdesk-reports-data.component */
      "./src/app/modules/ams/helpdesk/components/helpdesk-reports/helpdesk-reports-data/helpdesk-reports-data.component.ts");
      /* harmony import */


      var _components_helpdesk_create_ticket_helpdesk_create_ticket_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./components/helpdesk-create-ticket/helpdesk-create-ticket.component */
      "./src/app/modules/ams/helpdesk/components/helpdesk-create-ticket/helpdesk-create-ticket.component.ts");
      /* harmony import */


      var src_app_modules_ui_upload_upload_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! src/app/modules/ui/upload/upload.module */
      "./src/app/modules/ui/upload/upload.module.ts");
      /* harmony import */


      var src_app_modules_ui_message_message_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! src/app/modules/ui/message/message.module */
      "./src/app/modules/ui/message/message.module.ts");

      var HelpdeskModule = function HelpdeskModule() {
        _classCallCheck(this, HelpdeskModule);
      };

      HelpdeskModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_helpdesk_component__WEBPACK_IMPORTED_MODULE_6__["HelpdeskComponent"], _components_helpdesk_setup_helpdesk_setup_component__WEBPACK_IMPORTED_MODULE_7__["HelpdeskSetupComponent"], _components_helpdesk_reports_helpdesk_reports_component__WEBPACK_IMPORTED_MODULE_8__["HelpdeskReportsComponent"], _components_helpdesk_reports_open_tickets_report_open_tickets_report_component__WEBPACK_IMPORTED_MODULE_9__["OpenTicketsReportComponent"], _components_helpdesk_setup_add_ticket_category_add_ticket_category_component__WEBPACK_IMPORTED_MODULE_10__["AddTicketCategoryComponent"], _components_helpdesk_setup_common_category_common_category_component__WEBPACK_IMPORTED_MODULE_11__["CommonCategoryComponent"], _components_helpdesk_setup_private_category_private_category_component__WEBPACK_IMPORTED_MODULE_12__["PrivateCategoryComponent"], _components_helpdesk_ticket_filter_helpdesk_ticket_filter_component__WEBPACK_IMPORTED_MODULE_13__["HelpdeskTicketFilterComponent"], _components_helpdesk_reports_helpdesk_reports_data_helpdesk_reports_data_component__WEBPACK_IMPORTED_MODULE_15__["HelpdeskReportsDataComponent"], _components_helpdesk_create_ticket_helpdesk_create_ticket_component__WEBPACK_IMPORTED_MODULE_16__["HelpdeskCreateTicketComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _helpdesk_routing_module__WEBPACK_IMPORTED_MODULE_3__["HelpdeskRoutingModule"], src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_5__["CondoCardModule"], src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_14__["SelectModule"], src_app_modules_ui_upload_upload_module__WEBPACK_IMPORTED_MODULE_17__["UploadModule"], src_app_modules_ui_message_message_module__WEBPACK_IMPORTED_MODULE_18__["CondoMessageModule"]],
        bootstrap: [_helpdesk_component__WEBPACK_IMPORTED_MODULE_6__["HelpdeskComponent"]]
      })], HelpdeskModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=modules-ams-helpdesk-helpdesk-module-es5.js.map