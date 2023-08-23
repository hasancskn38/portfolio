import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-project-portfolio',
  templateUrl: './project-portfolio.component.html',
  styleUrls: ['./project-portfolio.component.scss'],
  animations: [
    trigger('divState', [
      state('normal', style({
        transform:'translateX(-50px)',
        opacity: '0'
      })),
      state('unnormal', style({
        transform:'translateX(0)',
        opacity: '1'
      })),
      transition('normal <=> unnormal', animate(700)),
    ])
  ]
})
export class ProjectPortfolioComponent {
  state = 'normal';
  isVisible = false;

  @ViewChild('aboutmeLeft', { static: true }) aboutmeLeft: ElementRef | undefined;

  constructor(private renderer: Renderer2) {}

  
  // An array to keep track of the hovered state for each project
  hoveredStates: boolean[] = [];

  showDescription(index: number) {
    // Set the hovered state for the project at the given index to true
    this.hoveredStates[index] = true;
  }

  hideDescription(index: number) {
    // Set the hovered state for the project at the given index to false
    this.hoveredStates[index] = false;
  }

  isDescriptionVisible(index: number): boolean {
    // Check if the description should be visible for the project at the given index
    return this.hoveredStates[index] || false;
  }

  navigateTo(url: string): void {
    window.open(url, '_blank');
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
