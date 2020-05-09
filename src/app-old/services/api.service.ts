import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const API_URL = 'http://localhost:8082/api/';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  login(data: any): Observable<any> {
    return this.http.post(API_URL + 'auth/signin', data);
  }
  add_user(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    });
    let options = { headers: headers };
    console.log(options);
    return this.http.post(API_URL + 'auth/signup', data, options);
  }

  forgot(data: any) {
    return this.http.post(API_URL + 'forgot_password', data);
  }

  change_password(data: any) {
    return this.http.post(API_URL + 'update_password', data);
  }

  user_list(data: any, token: any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    });
    let options = { headers: headers };
    console.log(options);
    return this.http.post(API_URL + 'users_list', data, options);
  }

  save_ustomer(data: any, token: any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    });
    let options = { headers: headers };
    console.log(options);
    return this.http.post(API_URL + 'save_customer', data, options);
  }

  customer_list(data: any, token: any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    });
    let options = { headers: headers };
    console.log(options);
    return this.http.post(API_URL + 'customers_list', data, options);
  }
}
