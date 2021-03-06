import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';




@Injectable()
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http:HttpClient) { }

  registerUser(user){
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    
    return this.http.post('http://localhost:3000/users/register', user,{headers: headers})
      // .map(res => res.json());
      .pipe(map((res) => res));

  }

  authenticateUser(user){
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    
    return this.http.post('http://localhost:3000/users/authenticate', user,{headers: headers})
      // .map(res => res.json());
      .pipe(map((res) => res));

  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
     this.authToken = token;
     this.user = user;
     console.log(this.authToken,"auth"),
     console.log(this.user,"auth")
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

}


