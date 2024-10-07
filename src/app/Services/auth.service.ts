
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:7101/api'; // Replace with your API endpoint URL

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    // Make an HTTP POST request to the login endpoint
    return this.http.post(`${this.apiUrl}/Login`, { email, password });
  }
  
    // Potentiell metod för att logga ut användaren
    logout() {
      return this.http.post(`${this.apiUrl}/Logout`, {});
    }
}
