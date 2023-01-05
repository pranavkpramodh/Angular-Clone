import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CommunityComponent } from './community/community.component';
import { CommunityHeadComponent } from './community-head/community-head.component';
import { EducationComponent } from './education/education.component';
import { DevelopmentComponent } from './development/development.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DocsComponent } from './docs/docs.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    CommunityComponent,
    CommunityHeadComponent,
    EducationComponent,
    DevelopmentComponent,
    PageNotFoundComponent,
    DocsComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
