import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  redirectUrl: string | undefined;

  baseUrl: string = "http://localhost:80/Angular/php"; //for server
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private httpClient: HttpClient) { }
  public userlogin(email: any, password: any) {
    return this.httpClient.post<any>(this.baseUrl + '/login.php', { email, password })
      .pipe(map(user => {
        this.setToken(user[0].name);
        this.getLoggedInName.emit(true);
        return user;
      }));
  }
  public userregistration(firstName: any, lastName: any, email: any, password: any) {
    return this.httpClient.post<any>(this.baseUrl + '/register.php', { firstName, lastName, email, password })
      .pipe(map(user => {
        return user;
      }));
  }
  //token
  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    const usertoken = this.getToken();
    if (usertoken != null) {
      return true
    }
    return false;
  }

}
