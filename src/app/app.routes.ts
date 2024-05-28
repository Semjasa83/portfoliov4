import {Routes} from '@angular/router';
import {AboutComponent} from "./content/about/about.component";
import {ProjectsComponent} from "./content/projects/projects.component";
import {ContactComponent} from "./content/contact/contact.component";
import {HelloComponent} from './content/hello/hello.component';

export const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: 'hello', component: HelloComponent},
  {path: 'about', component: AboutComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', redirectTo: '404'}
];
