import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class ApiService {
    private BASE_URL: string = 'https://www.wandongservice.com:3000/api/';
    constructor(private http: HttpClient) {

    }

    login(username: string, password: string, isRememberMe: boolean) {
        let requestUrl = this.BASE_URL + `Users/login?include=user&rememberMe=${isRememberMe? 'true': 'false'}`;
        let data = {
            "username": username,
            "password": password
        };
        return this.http.post(requestUrl, data)
            .map(res => {
                return res;
            });
    }

    logout(tokenId: string) {
        let requestUrl = this.BASE_URL + `Users/logout?access_token=${tokenId}`;
        return this.http.post(requestUrl, '');
    }
}