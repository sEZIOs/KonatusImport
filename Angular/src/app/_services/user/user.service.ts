// import { Injectable } from '@angular/core';
// import { HttpClient, HttpParams } from '@angular/common/http';

// import { map } from 'rxjs/operators';
// import { User } from '../../_data/user';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {
//   baseUrl = 'http://localhost/LOGIN-KONATUS/php';
//   constructor(private http: HttpClient) {}

//   test() {
//     return this.http.get(`${this.baseUrl}/test.php`).pipe(
//       map((res: any) => {
//         return res['data'];
//       })
//     );
//   }

//   register(user: User) {
//     return this.http.post(`${this.baseUrl}/register.php`, { data: user }).pipe(
//       map((res: any) => {
//         return res['data'];
//       })
//     );
//   }
// }

// @Injectable({
//   providedIn: 'root'
// })

// export class ApiService {
//   baseUrl = 'http://localhost/LOGIN-KONATUS/php';
//   constructor(private http: HttpClient) { }

//   public userregister(firstName: any, lastName: any, email: any, password: any) {
//     return this.http.post<any>(this.baseUrl + '/register.php',
//       {
//         firstName, lastName, email, password
//       }).pipe(map(User => {
//         return User;
//       }))
//   }
// }
