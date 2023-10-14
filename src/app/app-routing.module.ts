import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { AboutComponent } from './home/about';
import { CoursesComponent } from './home/courses';

import { PageNotFoundComponent } from './pagenotfound';
import { LoginComponent } from './home/login';
import { CreateUserComponent } from './home/create-user';
import { DiscoverComponent } from './discover';
import { ExploreComponent } from './explore';
import { TravelComponent } from './travel';
import { ContactUsComponent } from './contact-us';
import { ContactComponent } from './home/contact';



const routes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'about', component: AboutComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contact-us', component: ContactUsComponent},
  { path: 'login', component: LoginComponent },
  { path: 'create-user', component: CreateUserComponent },
  { path: 'discover', component: DiscoverComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'travel', component: TravelComponent },

  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page 
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }

