import { AfterViewInit, Component } from '@angular/core';
import 'bootstrap';
@Component({
  selector: 'app-e-learning',
  templateUrl: './e-learning.component.html',
 
})

export class ElearningComponent implements AfterViewInit {
  ngAfterViewInit() {
    // Initialize the Bootstrap carousel after the view has been initialized
    $('.carousel').carousel();
  }

}