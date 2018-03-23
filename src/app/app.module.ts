import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { CustomerPage } from '../pages/customer/customer';
import { CustomerDetailsPage } from '../pages/customer-details/customer-details';
import { CustomerEditPage } from '../pages/customer-edit/customer-edit';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApiService } from '../providers/api-service';
import { AuthService, AuthServiceProvider } from '../providers/auth-service/auth-service';
import { SDKBrowserModule } from '../ng2/index'
import { MessageboxService } from '../providers/messagebox-service/messagebox-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage,
    CustomerPage,
    CustomerDetailsPage,
    CustomerEditPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SDKBrowserModule.forRoot(),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage,
    CustomerPage,
    CustomerDetailsPage,
    CustomerEditPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ApiService,
    AuthServiceProvider,
    AuthService,
    MessageboxService
  ]
})
export class AppModule { }
