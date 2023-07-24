import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { CoursesComponent } from './courses.component';
import { ContactComponent } from './contact.component';
import { PageNotFoundComponent } from './pagenotfound.component';
import { LoginComponent } from './login.component';
import { CreateUserComponent } from './create-user.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  {path: 'create-user', component: CreateUserComponent},
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page 
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }

