import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { CoursesComponent } from './courses.component';
import { ContactComponent } from './contact.component';
import { PageNotFoundComponent } from './pagenotfound.component';

const routes: Routes = [
  { path: 'home.component', component: HomeComponent },
  { path: 'about.component', component: AboutComponent },
  { path: 'courses.component', component: CoursesComponent },
  { path: 'contact.component', component: ContactComponent },
  { path: '',   redirectTo: '/home.component', pathMatch: 'full' }, // Redirect to homecomponent
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
