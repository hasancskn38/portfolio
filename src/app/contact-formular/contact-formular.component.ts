import { Component, ElementRef, Renderer2, AfterViewInit, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-formular',
  templateUrl: './contact-formular.component.html',
  styleUrls: ['./contact-formular.component.scss'],
  animations: [
    trigger('divState', [
      state('normal', style({
        transform:'translateY(10px)',
        opacity: '0'
      })),
      state('unnormal', style({
        transform:'translateY(0)',
        opacity: '1'
      })),
      transition('normal <=> unnormal', animate(700)),
    ])
  ]
})
export class ContactFormularComponent implements AfterViewInit {
  isVisible = false;
  state = 'normal';
  
  @ViewChild('aboutmeLeft', { static: true }) aboutmeLeft: ElementRef | undefined;

  constructor(private renderer: Renderer2) {}

  
  @ViewChild('myForm') myForm:any;
  @ViewChild('nameField') nameField:any;
  @ViewChild('messageField') messageField:any;
  @ViewChild('sendButton') sendButton:any;
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

  async onSubmit(form: NgForm) {
    this.formSubmitted = true;
    this.resetValidationFlags();
    
    if (this.isNameInvalid()) {
      this.nameValid = true;
    }
  
    if (this.isMessageInvalid()) {
      this.textValid = true;
    }
  
    if (!this.isEmailValid()) {
      this.emailValid = true;
    }
  
    this.clearFormData();
  
    await this.sendFormData();
  }
  
  resetValidationFlags() {
    this.nameValid = false;
    this.emailValid = false;
    this.textValid = false;
  }
  
  isNameInvalid() {
    return this.formData.name.length < 3;
  }
  
  isMessageInvalid() {
    return this.formData.message.length < 10;
  }
  
  clearFormData() {
    this.formData.message = '';
    this.formData.email = '';
    this.formData.name = '';
  }
  
  async sendFormData() {
    let nameField = this.nameField.nativeElement;
    let messageField = this.messageField.nativeElement;
  
    messageField.disabled = true;
    nameField.disabled = true;
  
    // Animation that the user sees that something is happening
    messageField.disabled = false;
    nameField.disabled = false;
  
    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('message', messageField.value);
  
    await fetch('https://hasan-coskun.developerakademie.net/send_mail/send_mail.php', {
      method: 'POST',
      body: fd
    });
  }
  
  

  ngAfterViewInit() {
    this.observeVisibility();
  }

  observeVisibility() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.isVisible = true; // Set the flag to true
          if (this.state !== 'unnormal') {
            this.state = 'unnormal'; // Change the state to 'unnormal' only if it's not already set
          }
        } else {
          if (!this.isVisible) {
            this.state = 'normal'; // If not visible, reset the state only if the flag is false
          }
        }
      });
    }, options);

    if (this.aboutmeLeft) {
      observer.observe(this.aboutmeLeft.nativeElement);
    }
  }
}
