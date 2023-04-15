import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { CoursesComponent } from './courses.component';
import { ContactComponent } from './contact.component';
import { PageNotFoundComponent } from './pagenotfound.component';

const routes: Routes = [
  { path: 'home.component', title: 'Homepage', component: HomeComponent },
  { path: 'about.component', title: 'Aboutpage', component: AboutComponent },
  { path: 'courses.component', title: 'Coursespage', component: CoursesComponent },
  { path: 'contact.component',  title: 'Contactpage', component: ContactComponent },
  { path: '',   redirectTo: '/home.component', pathMatch: 'full' }, // Redirect to homecomponent
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
