import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent {

  // ... rest of your component code

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.checkScreenWidth();
  }

  isTabletOrSmaller(): boolean {
    return this.screenWidth <= 768;
  }

  private screenWidth = window.innerWidth;

  private checkScreenWidth(): void {
    this.screenWidth = window.innerWidth;
  }

  skills: { imageUrl: string; description: string; hoverImageUrl: string; showHover: boolean, cssClass?: string } [] = [
    { imageUrl: './assets/images/angular-icon.png', description: 'Angular', hoverImageUrl: './assets/images/Angular-hover.svg', showHover: false },
    { imageUrl: './assets/images/api-icon.png', description: 'Rest-API', hoverImageUrl: './assets/images/API-hover.svg', showHover: false },
    { imageUrl: './assets/images/css-icon.png', description: 'CSS', hoverImageUrl: './assets/images/Css-hover.svg', showHover: false },
    { imageUrl: './assets/images/firebase-icon.png', description: 'Firebase', hoverImageUrl: './assets/images/Firebase-hover.svg', showHover: false },
    { imageUrl: './assets/images/git-icon.png', description: 'Git', hoverImageUrl: './assets/images/git-hover.svg', showHover: false },
    { imageUrl: './assets/images/html-icon.png', description: 'HTML', hoverImageUrl: './assets/images/html-hover.svg', showHover: false },
    { imageUrl: './assets/images/js-icon.png', description: 'Javascript', hoverImageUrl: './assets/images/Javascript-hover.svg', showHover: false, cssClass:'javascript-hover'},
    { imageUrl: './assets/images/scrum-icon.png', description: 'Scrum', hoverImageUrl: './assets/images/scrum-hover.svg', showHover: false },
    { imageUrl: './assets/images/test-icon.png', description: 'Material Design', hoverImageUrl: './assets/images/Material-Design-hover.svg', showHover: false },
    { imageUrl: './assets/images/typescript-icon.png', description: 'Typescript', hoverImageUrl: './assets/images/Typescript-hover.svg', showHover: false },
  ];

  showHoverImage(skill: any) {
    skill.showHover = true;
  }

  hideHoverImage(skill: any) {
    skill.showHover = false;
  }

}
