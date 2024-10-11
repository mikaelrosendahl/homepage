import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserSessionService {

  private apiUrl = 'https://localhost:7101/api/UserSessionService'; // Replace with your API endpoint URL

  constructor(private http: HttpClient) { }

  isLoggedIn(): Observable<any> {
    return this.http.get(`${this.apiUrl}/IsLoggedIn`);
  }
}
