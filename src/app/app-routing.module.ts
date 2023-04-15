import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { CoursesComponent } from './courses.component';
import { ContactComponent } from './contact.component';

const routes: Routes = [
  { path: 'home.component', component: HomeComponent },
  { path: 'about.component', component: AboutComponent },
  { path: 'courses.component', component: CoursesComponent },
  { path: 'contact.component', component: ContactComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
