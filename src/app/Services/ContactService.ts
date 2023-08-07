import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ContactFormService {
    private apiUrl = 'https://localhost:7101/api/contact';

    constructor(private http: HttpClient) { }

    submitForm(contact: any): Observable<any> {
        return this.http.post<any>(this.apiUrl, contact);
    }
}
