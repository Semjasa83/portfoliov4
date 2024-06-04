import {Routes} from '@angular/router';
import {AboutComponent} from "./content/about/about.component";
import {ProjectsComponent} from "./content/projects/projects.component";
import {ContactComponent} from "./content/contact/contact.component";
import {HomeComponent} from "./content/home/home.component";

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', redirectTo: '404'}
];
