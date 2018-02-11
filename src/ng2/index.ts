/* tslint:disable */
/**
* @module SDKModule
* @author Jonathan Casarrubias <t:@johncasarrubias> <gh:jonathan-casarrubias>
* @license MIT 2016 Jonathan Casarrubias
* @version 2.1.0
* @description
* The SDKModule is a generated Software Development Kit automatically built by
* the LoopBack SDK Builder open source module.
*
* The SDKModule provides Angular 2 >= RC.5 support, which means that NgModules
* can import this Software Development Kit as follows:
*
*
* APP Route Module Context
* ============================================================================
* import { NgModule }       from '@angular/core';
* import { BrowserModule }  from '@angular/platform-browser';
* // App Root 
* import { AppComponent }   from './app.component';
* // Feature Modules
* import { SDK[Browser|Node|Native]Module } from './shared/sdk/sdk.module';
* // Import Routing
* import { routing }        from './app.routing';
* @NgModule({
*  imports: [
*    BrowserModule,
*    routing,
*    SDK[Browser|Node|Native]Module.forRoot()
*  ],
*  declarations: [ AppComponent ],
*  bootstrap:    [ AppComponent ]
* })
* export class AppModule { }
*
**/
import { JSONSearchParams } from './services/core/search.params';
import { ErrorHandler } from './services/core/error.service';
import { LoopBackAuth } from './services/core/auth.service';
import { LoggerService } from './services/custom/logger.service';
import { SDKModels } from './services/custom/SDKModels';
import { InternalStorage, SDKStorage } from './storage/storage.swaps';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CookieBrowser } from './storage/cookie.browser';
import { StorageBrowser } from './storage/storage.browser';
import { SocketBrowser } from './sockets/socket.browser';
import { SocketDriver } from './sockets/socket.driver';
import { SocketConnection } from './sockets/socket.connections';
import { RealTime } from './services/core/real.time';
import { UserApi } from './services/custom/User';
import { AccessTokenApi } from './services/custom/AccessToken';
import { ACLApi } from './services/custom/ACL';
import { RoleMappingApi } from './services/custom/RoleMapping';
import { RoleApi } from './services/custom/Role';
import { NumberRecordApi } from './services/custom/NumberRecord';
import { CustomerApi } from './services/custom/Customer';
import { EquipmentApi } from './services/custom/Equipment';
import { ReportApi } from './services/custom/Report';
import { ContactApi } from './services/custom/Contact';
import { EmployeeApi } from './services/custom/Employee';
import { DepartmentApi } from './services/custom/Department';
import { RegionApi } from './services/custom/Region';
import { CountryApi } from './services/custom/Country';
import { ProvinceApi } from './services/custom/Province';
import { ExposureCountApi } from './services/custom/ExposureCount';
import { LocationReportApi } from './services/custom/LocationReport';
import { SignInApi } from './services/custom/SignIn';
import { TripApi } from './services/custom/Trip';
import { ReportCodeApi } from './services/custom/ReportCode';
import { AppointmentApi } from './services/custom/Appointment';
import { DispatchApi } from './services/custom/Dispatch';
import { MaintainApi } from './services/custom/Maintain';
import { AccessoryApplicationApi } from './services/custom/AccessoryApplication';
import { ApplyAccessoryListApi } from './services/custom/ApplyAccessoryList';
import { DispatchEmployeeApi } from './services/custom/DispatchEmployee';
import { WorkLogApi } from './services/custom/WorkLog';
import { ActivationCodeApi } from './services/custom/ActivationCode';
import { ContainerApi } from './services/custom/Container';
import { ExposureListApi } from './services/custom/ExposureList';
import { AccessoryApi } from './services/custom/Accessory';
import { ServiceApi } from './services/custom/Service';
import { DisposeRecordApi } from './services/custom/DisposeRecord';
import { AccessoryStoreApi } from './services/custom/AccessoryStore';
import { SummaryStatementApi } from './services/custom/SummaryStatement';
import { SystemConfigApi } from './services/custom/SystemConfig';
/**
* @module SDKBrowserModule
* @description
* This module should be imported when building a Web Application in the following scenarios:
*
*  1.- Regular web application
*  2.- Angular universal application (Browser Portion)
*  3.- Progressive applications (Angular Mobile, Ionic, WebViews, etc)
**/
@NgModule({
  imports:      [ CommonModule, HttpModule ],
  declarations: [ ],
  exports:      [ ],
  providers:    [
    ErrorHandler,
    SocketConnection
  ]
})
export class SDKBrowserModule {
  static forRoot(internalStorageProvider: any = {
    provide: InternalStorage,
    useClass: CookieBrowser
  }): ModuleWithProviders {
    return {
      ngModule  : SDKBrowserModule,
      providers : [
        LoopBackAuth,
        LoggerService,
        JSONSearchParams,
        SDKModels,
        RealTime,
        UserApi,
        AccessTokenApi,
        ACLApi,
        RoleMappingApi,
        RoleApi,
        NumberRecordApi,
        CustomerApi,
        EquipmentApi,
        ReportApi,
        ContactApi,
        EmployeeApi,
        DepartmentApi,
        RegionApi,
        CountryApi,
        ProvinceApi,
        ExposureCountApi,
        LocationReportApi,
        SignInApi,
        TripApi,
        ReportCodeApi,
        AppointmentApi,
        DispatchApi,
        MaintainApi,
        AccessoryApplicationApi,
        ApplyAccessoryListApi,
        DispatchEmployeeApi,
        WorkLogApi,
        ActivationCodeApi,
        ContainerApi,
        ExposureListApi,
        AccessoryApi,
        ServiceApi,
        DisposeRecordApi,
        AccessoryStoreApi,
        SummaryStatementApi,
        SystemConfigApi,
        internalStorageProvider,
        { provide: SDKStorage, useClass: StorageBrowser },
        { provide: SocketDriver, useClass: SocketBrowser }
      ]
    };
  }
}
/**
* Have Fun!!!
* - Jon
**/
export * from './models/index';
export * from './services/index';
export * from './lb.config';
export * from './storage/storage.swaps';
export { CookieBrowser } from './storage/cookie.browser';
export { StorageBrowser } from './storage/storage.browser';

