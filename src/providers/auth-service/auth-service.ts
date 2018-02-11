import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../api-service';
import 'rxjs/add/operator/map';
import { BASE_URL, API_VERSION } from '../../base.url';
import { LoopBackConfig } from '../../ng2';
import { User, UserInterface, AccessToken } from '../../ng2/models'
import { UserApi } from '../../ng2/services';

@Injectable()
export class AuthService {
  constructor(private apiService: ApiService, private userApi: UserApi) {
    LoopBackConfig.setBaseURL(BASE_URL);
    LoopBackConfig.setApiVersion(API_VERSION);
  }
  public login(credentials, isRememberMe) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      let userInterface: any = {};
      userInterface.username = credentials.email;
      userInterface.password = credentials.password;
      let user = new User(userInterface);
      return this.userApi.login(user).map(ret => {
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
    let curUser = this.userApi.getCachedCurrent();
    return curUser;
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
