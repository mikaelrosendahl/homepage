import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.components/home.component';
import { AboutComponent } from './home.components/about.component';
import { CoursesComponent } from './home.components/courses.component';
import { ContactComponent } from './home.components/contact.component';
import { PageNotFoundComponent } from './pagenotfound.component';
import { MenuComponent } from './menu.components/menu.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { LoginComponent } from './home.components/login.component';
import { ToggleBarComponent } from './toggle-bar/toggle-bar.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslationLoaderService } from './translation-loader.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ExploreComponent } from './explore.component';
import { LearnComponent } from './learn.component';
import { TravelComponent } from './travel.component';
import { AboutUsComponent } from './about-us.component';
import { OurCoursesComponent } from './our-courses';
import { ContactUsComponent } from './contact-us.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateUserComponent } from './home.components/create-user.component';
import { PresentationComponent } from './presentation.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CoursesComponent,
    ContactComponent,
    PageNotFoundComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ToggleBarComponent,
    ExploreComponent,
    LearnComponent,
    TravelComponent,
    AboutUsComponent,
    OurCoursesComponent,
    ContactUsComponent,
    CreateUserComponent,
    PresentationComponent
   
  

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
