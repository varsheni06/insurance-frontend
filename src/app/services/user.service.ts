import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:5272/api/User'; 

  constructor(private http: HttpClient) { }

 
  registerUser(userData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, userData);
  }

  loginUser(loginData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, loginData);
  }

  getUserProfile(email: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/profile?email=${email}`);
  }
 
}
