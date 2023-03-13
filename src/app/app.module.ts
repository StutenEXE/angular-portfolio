import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ProjectsComponent } from './projects/projects.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MouseTrailerModule } from './mouse-trailer/mouse-trailer.module';
import { HttpClientModule } from '@angular/common/http';
import { ProjectComponent } from './projects/project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    AboutmeComponent,
    ProjectsComponent,
    TechnologiesComponent,
    ContactsComponent,
    ProjectComponent,
  ],
  imports: [
    BrowserModule,
    MouseTrailerModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule { }
