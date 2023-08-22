import { Component } from '@angular/core';

@Component({
  selector: 'app-project-sharky',
  templateUrl: './project-sharky.component.html',
  styleUrls: ['./project-sharky.component.scss']
})
export class ProjectSharkyComponent {
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
}
