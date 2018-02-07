import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../api-service';
import 'rxjs/add/operator/map';

export class User {
  name: string;
  email: string;
  id: string;
  tokenId: string;


  constructor(name: string, email: string, id: string, tokenId: string) {
    this.name = name;
    this.email = email;
    this.id = id;
    this.tokenId = tokenId;
  }
}

@Injectable()
export class AuthService {
  currentUser: User = new User('', '', '', '');
  constructor(private apiService: ApiService) {
  }
  public login(credentials, isRememberMe) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return this.apiService.login(credentials.email, credentials.password, isRememberMe).map((res: any) => {
        let user = res.user;
        this.currentUser = new User(user.name, user.email, res.userId, res.id);
        return res;
      });
      // return Observable.create(observer => {
      //   // dummy request backend server
      //   let access = (credentials.password === "pass" && credentials.email === "email");
      //   this.currentUser = new User('wd', 'wd@wd.com');
      //   observer.next(access);
      //   observer.complete();
      // });
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

  public getUserInfo() : User {
    return this.currentUser;
  }

  public logout() {
    return this.apiService.logout(this.currentUser.tokenId).map(ret => {
      this.currentUser = null;
      return ret;
    });
    // return Observable.create(observer => {
    //   this.currentUser = null;
    //   observer.next(true);
    //   observer.complete();
    // });
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
