import { Component } from '@angular/core';
import { AuthService } from './Services/AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',

})

export class LoginComponent {
  
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService) { }

  onSubmit() {
    this.authService.login(this.username, this.password)
      .subscribe(
        () => {
          // Redirect to the desired page or perform any necessary actions
          console.log('Login successful');
        },
        error => {
          this.errorMessage = 'Login failed. Please check your credentials.';
          console.error('Error during login:', error);
        }
      );
  }
}

