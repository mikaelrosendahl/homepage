import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
 
})

@Injectable({
  providedIn: 'root'
})

export class MessageComponent {
  formData = {
    email: '',
    name: '',
    message: ''
  
  };

   private apiUrl = 'https://localhost:7101/api/contact';

    constructor(private http: HttpClient) { }

    submitForm(contact: any): Observable<any> {
        return this.http.post<any>(this.apiUrl, contact);
      
    }
     /*  sendMessage() {
    // Here, you can handle sending the message logic,
    // such as sending an HTTP request to a backend service.
    console.log('Message sent:', this.formData);
  } */
  }