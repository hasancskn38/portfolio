import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router'; // Import RouterModule
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactFormularComponent } from './contact-formular/contact-formular.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectCrmComponent } from './project-crm/project-crm.component';
import { ProjectSharkyComponent } from './project-sharky/project-sharky.component';
import { ProjectPortfolioComponent } from './project-portfolio/project-portfolio.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'about', component: AboutMeComponent },
  { path: 'skills', component: MySkillsComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'legal-notice', component: LegalNoticeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    AboutMeComponent,
    MySkillsComponent,
    PortfolioComponent,
    ContactFormularComponent,
    FooterComponent,
    LegalNoticeComponent,
    ProjectCrmComponent,
    ProjectSharkyComponent,
    ProjectPortfolioComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule, // Include CommonModule
    RouterModule.forRoot(routes), // Include RouterModule with empty routes (you can update this later in your app-routing.module.ts)
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ClipboardModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
