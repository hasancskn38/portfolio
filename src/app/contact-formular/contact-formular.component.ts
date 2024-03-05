import { Component, ElementRef, Renderer2, AfterViewInit, ViewChild } from "@angular/core";
import { trigger, state, style, animate, transition } from "@angular/animations";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-contact-formular",
  templateUrl: "./contact-formular.component.html",
  styleUrls: ["./contact-formular.component.scss"],
  animations: [
    trigger("divState", [
      state(
        "normal",
        style({
          transform: "translateY(10px)",
          opacity: "1"
        })
      ),
      state(
        "unnormal",
        style({
          transform: "translateY(0)",
          opacity: "1"
        })
      ),
      transition("normal <=> unnormal", animate(700))
    ])
  ]
})
export class ContactFormularComponent implements AfterViewInit {
  isVisible = false;
  state = "normal";

  @ViewChild("aboutmeLeft", { static: true }) aboutmeLeft: ElementRef | undefined;

  constructor(private renderer: Renderer2) {}

  @ViewChild("myForm") myForm: any;
  @ViewChild("nameField") nameField: any;
  @ViewChild("messageField") messageField: any;
  @ViewChild("emailField") emailField: any;
  @ViewChild("sendButton") sendButton: any;
  emailValid:boolean = false;
  textValid:boolean = false;
  nameValid:boolean = false;
  showSuccessPopup: boolean = false;
  isSending: boolean = false;
  readPolicy: boolean = false;
  formSubmitted:boolean = false; 


  formData = {
    name: "",
    email: "",
    message: ""
  };


  isEmailValid(): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.formData.email);
  }

  scrollToTop(): void {
    window.scrollTo(0, 0);
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

    if (!this.nameValid && !this.emailValid && !this.textValid && this.readPolicy) {
      this.isSending = true;
      // await this.sendFormData();
      this.isSending = false;
      this.clearFormData();
      this.showSuccessPopup = true;
      // You might want to use a timeout to hide the popup after a certain time
      setTimeout(() => {
        this.showSuccessPopup = false;
      }, 3000); // 5 seconds
    }
  }

  onCheckboxChange() {
    this.readPolicy = !this.readPolicy;
    console.log(this.readPolicy);
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
    this.formData.message = "";
    this.formData.email = "";
    this.formData.name = "";
  }

  async sendFormData() {
    if (!this.isNameInvalid() && this.isEmailValid() && !this.isMessageInvalid()) {
      let nameField = this.nameField.nativeElement;
      let messageField = this.messageField.nativeElement;
      let emailField = this.emailField.nativeElement;

      messageField.disabled = true;
      nameField.disabled = true;
      emailField.disabled = true;

      // Animation that the user sees that something is happening
      messageField.disabled = false;
      nameField.disabled = false;
      emailField.disabled = false;

      let fd = new FormData();
      fd.append("name", nameField.value);
      fd.append("message", messageField.value);
      fd.append("email", emailField.value);

      await fetch(
        "https://hasan-coskun.developerakademie.net/portfolio/send_mail/send_mail.php",
        {
          method: "POST",
          body: fd
        }
      );
    }
  }

  ngAfterViewInit() {
    this.observeVisibility();
  }

  observeVisibility() {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.isVisible = true; // Set the flag to true
          if (this.state !== "unnormal") {
            this.state = "unnormal"; // Change the state to 'unnormal' only if it's not already set
          }
        } else {
          if (!this.isVisible) {
            this.state = "normal"; // If not visible, reset the state only if the flag is false
          }
        }
      });
    }, options);

    if (this.aboutmeLeft) {
      observer.observe(this.aboutmeLeft.nativeElement);
    }
  }
  
  scrollToSection(sectionId: string): void {
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

}
