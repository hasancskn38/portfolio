import { Component, HostListener } from '@angular/core';
import { ScrollService } from '../scroll.service';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    // Your animations...
  ],
})
export class NavbarComponent {

  constructor(private clipboardService: ClipboardService, private scrollService: ScrollService) { }

  isMenuOpen: boolean = false;
  isNavBottomVisible: boolean = false;
  isCopied:boolean = false;


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.isNavBottomVisible = this.isMenuOpen;
    // Toggle the body's overflow to prevent/enable scrolling
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : 'auto';
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

  scrollTo(sectionId: string): void {
    this.scrollService.scrollTo(sectionId);
  }

}
