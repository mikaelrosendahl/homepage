import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './start.component';
import { AboutComponent } from './about.component';
import { CoursesComponent } from './courses.component';
import { ContactComponent } from './contact.component';


@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    AboutComponent,
    CoursesComponent,
    ContactComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
