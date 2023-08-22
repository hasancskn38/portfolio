import { Component, ElementRef, Renderer2, AfterViewInit, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-formular',
  templateUrl: './contact-formular.component.html',
  styleUrls: ['./contact-formular.component.scss'],
})
export class ContactFormularComponent {
  
  @ViewChild('aboutmeLeft', { static: true }) aboutmeLeft: ElementRef | undefined;


  constructor(private renderer: Renderer2) {}
  @ViewChild('myForm') myForm:any;
  isVisible = false;
  state = 'normal';
  emailValid = false;
  textValid = false;
  nameValid = false;

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
    this.nameValid = true
    this.emailValid = true;
    this.textValid = true;
    if(this.formData.name.length < 3) {
      this.nameValid = true;
    }
    if(this.formData.message.length < 10) {
      this.textValid = true;
    }
    if(!this.isEmailValid()) {
      this.emailValid = true;
    }
    this.formData.message = '';
    this.formData.email = '';
    this.formData.name = '';
  }
}
