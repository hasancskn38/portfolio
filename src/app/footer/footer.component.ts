import { Component, ElementRef, Renderer2, AfterViewInit, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent  {

  constructor(private renderer: Renderer2, private router:Router) {}

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }

}
