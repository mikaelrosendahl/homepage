import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-e-learning',
  templateUrl: './e-learning.component.html',
 
})

export class ElearningComponent {
  constructor(private router: Router) {
    // Set the default language
  }
  // Define the changePage() method here
  changePage(): void {
    // Use the router to navigate to a particular page
    this.router.navigate(['/learn']);
  }
}