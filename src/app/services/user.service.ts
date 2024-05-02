import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:5272/api/User'; // Replace this with your actual API URL

  constructor(private http: HttpClient) { }

  // Method to register a new user
  registerUser(userData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, userData);
  }

  // Method to log in a user
  loginUser(loginData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, loginData);
  }

  // Method to retrieve user profile
  getUserProfile(email: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/profile?email=${email}`);
  }
  
  // Add more methods as needed, like resetting password, deleting account, etc.
}
