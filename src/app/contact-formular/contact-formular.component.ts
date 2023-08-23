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
  this.formSubmitted = true; // Set the formSubmitted flag to true when the form is submitted
    // this.nameValid = true
    // this.emailValid = true;
    // this.textValid = true;
    // if(this.formData.name.length < 3) {
    //   this.nameValid = true;
    // }
    // if(this.formData.message.length < 10) {
    //   this.textValid = true;
    // }
    // if(!this.isEmailValid()) {
    //   this.emailValid = true;
    // }
    this.formData.message = '';
    this.formData.email = '';
    this.formData.name = '';
    let nameField = this.nameField.nativeElement;
    let messageField = this.messageField.nativeElement;
    messageField.disbaled = true;
    nameField.disbaled = true;
    // Animation that the user sees that something is happening
    messageField.disbaled = false;
    nameField.disbaled = false;
    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('message', messageField.value);
    await fetch('https://hasan-coskun.developerakademie.net/portfolio/send_mail/send_mail.php',
      {
        method: 'POST',
        body: fd
      }
  )
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
