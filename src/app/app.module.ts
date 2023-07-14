import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { CoursesComponent } from './courses.component';
import { ContactComponent } from './contact.component';
import { PageNotFoundComponent } from './pagenotfound.component';
import { MenuComponent } from './menu.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { LoginComponent } from './login.component';
import { ToggleBarComponent } from './toggle-bar/toggle-bar.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslationLoaderService } from './translation-loader.service';
import { HttpClient } from '@angular/common/http';


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
    ToggleBarComponent 
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
