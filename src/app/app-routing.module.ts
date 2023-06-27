import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { CoursesComponent } from './courses.component';
import { ContactComponent } from './contact.component';
import { PageNotFoundComponent } from './pagenotfound.component';


const routes: Routes = [
  { path: '', title: 'Home', component: HomeComponent },
  { path: 'about', title: 'Aboutpage', component: AboutComponent },
  { path: 'courses', title: 'Coursespage', component: CoursesComponent },
  { path: 'contact', title: 'Contactpage', component: ContactComponent },
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
