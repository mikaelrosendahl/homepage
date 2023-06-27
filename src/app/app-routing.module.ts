import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { CoursesComponent } from './courses.component';
import { ContactComponent } from './contact.component';
import { PageNotFoundComponent } from './pagenotfound.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  { path: '', component: NavComponent,children:[
    { path: '', component: HomeComponent },
    { path: 'about', title: 'Aboutpage', component: AboutComponent },
    { path: 'courses', title: 'Coursespage', component: CoursesComponent },
    { path: 'contact',  title: 'Contactpage', component: ContactComponent },
  ] },
  { path: '**', redirectTo: '',pathMatch:'prefix'}
];

 @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
