import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string ="http://localhost:5272/api/User/"
 
  constructor(private http: HttpClient) { }

  signup(userObj:any){
    return this.http.post<any>(`${this.baseUrl}register`,userObj)

  }
  login(loginObj:any){

    return this.http.post<any>(`${this.baseUrl}authenticate`,loginObj)
  }
}
