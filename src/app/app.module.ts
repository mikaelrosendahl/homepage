import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home';
import { AboutComponent } from './home/about';
import { CoursesComponent } from './home/courses';
import { PageNotFoundComponent } from './pagenotfound';
import { FooterComponent } from './footer';
import { LoginComponent } from './home/login';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslationLoaderService } from './translation-loader.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ExploreComponent } from './explore';
import { DiscoverComponent } from './discover';
import { TravelComponent } from './travel';
import { AboutUsComponent } from './about-us';
import { CaroselComponent } from './carosel';
import { ContactComponent } from './home/contact';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateUserComponent } from './home/create-user';
import { ContactUsComponent } from './contact-us';
import { OurCoursesComponent } from './our-courses';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CoursesComponent,
    PageNotFoundComponent,
    FooterComponent,
    LoginComponent,
    ExploreComponent,
    DiscoverComponent,
    TravelComponent,
    AboutUsComponent,
    CaroselComponent,
    ContactComponent,
    CreateUserComponent,
    ContactUsComponent,
    OurCoursesComponent 
   
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: TranslationLoaderService,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
