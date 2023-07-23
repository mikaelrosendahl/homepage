
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:7101/api'; // Replace with your API endpoint URL

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    // Make an HTTP POST request to the login endpoint
    return this.http.post(`${this.apiUrl}/Login`, { username, password });
  }
}
