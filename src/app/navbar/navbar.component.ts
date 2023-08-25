import { Component, Renderer2} from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    // Your animations...
  ],
})
export class NavbarComponent {

  constructor(private clipboardService: ClipboardService, private renderer: Renderer2, private scrollService: ScrollService) { }

  isMenuOpen: boolean = false;
  isNavBottomVisible: boolean = false;
  isCopied:boolean = false;


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.isNavBottomVisible = this.isMenuOpen;
    // Toggle the body's overflow to prevent/enable scrolling
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : 'auto';
  }

  closeMenuNavigation() {
    setTimeout(() => {
      this.isMenuOpen = !this.isMenuOpen;
    this.isNavBottomVisible = this.isMenuOpen;
    // Toggle the body's overflow to prevent/enable scrolling
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : 'auto';
    }, 100);
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.isNavBottomVisible = false; // Hide nav-bottom when closing the menu
    document.body.style.overflow = 'auto';
  }

  copyToClipboard(element: HTMLParagraphElement) {
    const textToCopy = element.innerHTML;
    this.clipboardService.copyFromContent(textToCopy);
    this.isCopied = true;
    setTimeout(() => {
      this.isCopied = false;
    }, 3000);
  }

  scrollToSection(sectionId: string): void {
    this.closeMenuNavigation(); // Close the menu first
    setTimeout(() => {
      const section = this.renderer.selectRootElement(`#${sectionId}`);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  scrollToTop(): void {
    const section = this.renderer.selectRootElement(`#main`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
}
