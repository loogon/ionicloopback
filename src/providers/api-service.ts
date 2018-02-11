import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ApiService {
    private BASE_URL: string = 'https://www.wandongservice.com:3000/api/';
    constructor(private http: HttpClient) {

    }

    login(username: string, password: string, isRememberMe: boolean) {
        let requestUrl = this.BASE_URL + 'Users/login';
        let data = {
            "username": username,
            "password": password
        };
        let option: any = {};
        option.params = new HttpParams()
            .append('include', 'user')
            .append('rememberMe', isRememberMe ? 'true' : 'false');
        return this.http.post(requestUrl, data, option)
            .map(res => {
                return res;
            });
    }

    logout(tokenId: string) {
        if (tokenId === null || tokenId === '') {
            return Observable.create(observer => {
                observer.next();
                observer.complete();
            });
        } else {
            let requestUrl = this.BASE_URL + 'Users/logout';
            let option: any = {};
            option.params = new HttpParams()
                .append('access_token', tokenId || '');
            return this.http.post(requestUrl, '', option);
        }
    }
}