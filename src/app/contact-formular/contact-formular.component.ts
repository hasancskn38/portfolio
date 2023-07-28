import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-formular',
  templateUrl: './contact-formular.component.html',
  styleUrls: ['./contact-formular.component.scss']
})
export class ContactFormularComponent {

  formData = {
    name: '',
    email: '',
    message: ''
  };

  formSubmitted = false; // Initialize the formSubmitted flag

  isEmailValid(): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.formData.email);
  }

  onSubmit(form: NgForm) {
    this.formSubmitted = true; // Set the formSubmitted flag to true when the form is submitted

    if (form.invalid) {
      return;
    }

    // Form submission logic here (if needed)
    console.log('Form submitted successfully!');
    // You can perform any additional logic, like sending data to a server, etc.
  }
}
