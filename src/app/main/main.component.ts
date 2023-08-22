import { Component, ElementRef, Renderer2, AfterViewInit, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger('divState', [
      state('normal', style({
        opacity: '0',
        transform:'translateY(-20px)'
      })),
      state('unnormal', style({
        transform:'translateY(0)',
        opacity: '1'
      })),
      transition('normal <=> unnormal', animate(1500)),
    ]),
    trigger('divState2', [
      state('normal', style({
        opacity: '0',
        transform:'translateY(-150px)'
      })),
      state('unnormal', style({
        transform:'translateY(0)',
        opacity: '1'
      })),
      transition('normal <=> unnormal', animate(500)),
    ])
  ]
})
export class MainComponent implements AfterViewInit {

  constructor(private scrollService: ScrollService, private renderer: Renderer2) { }
  isVisible = false;
  state = 'normal';

  @ViewChild('aboutmeLeft', { static: true }) aboutmeLeft: ElementRef | undefined;


  ngAfterViewInit(): void {
    // Add a small delay before applying the animate-on-load class
    setTimeout(() => {
      const headerContainer = document.querySelector('.header-container');
      const headerBottom = document.querySelector('.header-bottom');
      if (headerContainer && headerBottom) {
        headerContainer.classList.add('animate-on-load');
        headerBottom.classList.add('animate-on-load');
      }
    this.observeVisibility();
    }, 100); // Adjust the delay as needed (in milliseconds)
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

  scrollTo(sectionId: string): void {
    this.scrollService.scrollTo(sectionId);
  }

  
}
