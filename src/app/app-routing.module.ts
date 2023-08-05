import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.components/home.component';
import { AboutComponent } from './home.components/about.component';
import { CoursesComponent } from './home.components/courses.component';
import { ContactComponent } from './home.components/contact.component';
import { PageNotFoundComponent } from './pagenotfound.component';
import { LoginComponent } from './home.components/login.component';
import { CreateUserComponent } from './home.components/create-user.component';
import { LearnComponent } from './learn.component';
import { ExploreComponent } from './explore.component';



const routes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'about', component: AboutComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create-user', component: CreateUserComponent },
  { path: 'learn', component: LearnComponent },
  { path: 'explore', component: ExploreComponent },
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page 
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }

