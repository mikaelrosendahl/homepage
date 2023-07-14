import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
 
})

export class HomeComponent {
  isLoginVisible = false;

  showLogin() {
    this.isLoginVisible = true;
  }

}
