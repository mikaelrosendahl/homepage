import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { CoursesComponent } from './courses.component';
import { ContactComponent } from './contact.component';
import { PageNotFoundComponent } from './pagenotfound.component';
import { LoginComponent } from './login.component';


const routes: Routes = [
  { path: 'home', title: 'Home', component: HomeComponent },
  { path: 'about', title: 'About', component: AboutComponent },
  { path: 'courses', title: 'Courses', component: CoursesComponent },
  { path: 'contact', title: 'Contact', component: ContactComponent },
  { path: 'login', title: 'Login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
