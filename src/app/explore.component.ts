import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
 
})

export class ExploreComponent {
  
  constructor(private router: Router) {
  
  }
    // Define the changePage() method here
    changePage(): void {
      // Use the router to navigate to a particular page
      this.router.navigate(['/explore']);
    }
}