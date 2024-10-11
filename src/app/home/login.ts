
import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';  // Importera AuthService från rätt mapp

// Definiera en typ för svaret från API:et
interface LoginResponse {
  Token: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService) { }

  onSubmit(): void {
    this.authService.login(this.email, this.password).subscribe(
      (response: LoginResponse) => {  // Nu vet TypeScript att response är av typen LoginResponse
        console.log('Token:', response.Token);
        localStorage.setItem('jwtToken', response.Token); // Spara token lokalt
      },
      err => {
        this.errorMessage = 'Login misslyckades, vänligen kontrollera dina uppgifter.';
      }
    );
  }
}
