// create-user.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',

})
export class CreateUserComponent {
  user: any = {
    firstName: '',
    lastName: '',
    email: ''
  };

  constructor(private http: HttpClient) {}

  onSubmit(): void {
    this.http.post<any>('https://localhost:7101/api/CreateUser', this.user).subscribe(
      response => {
        console.log('User created successfully!', response);
        // Reset the form after successful submission
        this.user = {
          username: '',
          email: '',
          password: ''
        };
      },
      error => {
        console.error('Error creating user:', error);
      }
    );
  }
}
