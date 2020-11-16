import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AboutComponent } from './pages/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { SingleProjectPageComponent } from './pages/single-project-page/single-project-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { WorkTileComponent } from './components/work-tile/work-tile.component';
import { CustomDatePipe } from './pipes/customDatePipe.datepipe';
import { OtherExperienceTileComponent } from './components/other-experience-tile/other-experience-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ProjectsPageComponent,
    PageNotFoundComponent,
    AboutComponent,
    HeaderComponent,
    SingleProjectPageComponent,
    ContactPageComponent,
    WorkTileComponent,
    CustomDatePipe,
    OtherExperienceTileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
