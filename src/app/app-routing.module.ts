import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunityComponent } from './community/community.component';
import { DevelopmentComponent } from './development/development.component';
import { DocsComponent } from './docs/docs.component';
import { EducationComponent } from './education/education.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { NavComponent } from './nav/nav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  // {path : '', component: NavComponent},
  {path : '', component: HomeComponent},
  {path : 'docs', component: DocsComponent},
  {path : 'community', component: CommunityComponent},
  {path : 'education', component: EducationComponent},
  {path : 'development', component: DevelopmentComponent},
  {path : 'menu', component: MenuComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
