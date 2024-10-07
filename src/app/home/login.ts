import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',

})

export class LoginComponent {
  
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService) { }

  onSubmit() {
    this.authService.login(this.email, this.password)
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

