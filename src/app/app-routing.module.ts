import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { MainComponent } from './main/main.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'about', component: AboutMeComponent },
  { path: 'skills', component: MySkillsComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'legal-notice', component: LegalNoticeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
