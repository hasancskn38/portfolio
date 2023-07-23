import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  projectCollection =[
    {
      "number": 1,
      "image": "./assets/images/join.png",
      "name": "JOIN",
      "languages": "HTML | CSS | Javascript",
      "description": "Task Manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories",
      "buttons": [
        {
          "text": "Live",
          "url": "https://hasan-coskun.developerakademie.net/join/html/index.html"
        },
        {
          "text": "GitHub",
          "url": "https://github.com/yourusername/repository1"
        }
      ]
    },
    {
      "number": 2,
      "image": "./assets/images/sharkie.png",
      "name": "Sharky",
      "languages": "HTML | CSS | Javascript",
      "description": "A single Jump-and-Run game based on an object-oriented approach. Help Sharky to defeat his biggest fear - Orcazar",
      "buttons": [
        {
          "text": "Live",
          "url": "https://hasan-coskun.developerakademie.net/sharky/"
        },
        {
          "text": "GitHub",
          "url": "https://github.com/yourusername/repository2"
        }
      ]
    },
    {
      "number": 3,
      "image": "./assets/images/crm.png",
      "name": "Coming soon",
      "languages": "Angular | Firebase | Material Design | Typescript",
      "description": "Coming soon",
      "buttons": [
        {
          "text": "Live",
          "url": "https://www.example.com"
        },
        {
          "text": "GitHub",
          "url": "https://github.com/yourusername/repository3"
        }
      ]
    },
    {
      "number": 4,
      "image": "./assets/images/crm.png",
      "name": "Portfolio",
      "languages": "Angular | SCSS | Typescript",
      "description": "My personal Portfolio Website",
      "buttons": [
        {
          "text": "Live",
          "url": "https://www.example.com"
        },
        {
          "text": "GitHub",
          "url": "https://github.com/yourusername/repository3"
        }
      ]
    }
  ]
  
}
