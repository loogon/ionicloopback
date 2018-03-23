import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { BASE_URL, API_VERSION } from '../../base.url';
import { LoopBackConfig } from '../../ng2';
import { UserInterface } from '../../ng2/models'
import { UserApi } from '../../ng2/services';

@Injectable()
export class AuthService {
  constructor(private userApi: UserApi) {
    LoopBackConfig.setBaseURL(BASE_URL);
    LoopBackConfig.setApiVersion(API_VERSION);
  }
  public login(credentials, isRememberMe) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return this.userApi.login(<UserInterface>({
        username: credentials.email,
        password: credentials.password
      })).map(ret => {
        return ret;
      });
    }
  }

  public register(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }

  public getUserInfo() {
    return this.userApi.getCachedCurrent();
  }

  public logout() {
    return this.userApi.logout().map(ret => {
      return ret;
    });
  }
}

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AuthServiceProvider Provider');
  }

}
