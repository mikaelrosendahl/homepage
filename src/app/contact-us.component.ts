import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',

 
})

export class ContactUsComponent {
  formData = {

    email: '',
    name: '',
    message: ''
  };

  sendMessage() {
    // Here, you can handle sending the message logic,
    // such as sending an HTTP request to a backend service.
    console.log('Message sent:', this.formData);
  }
}