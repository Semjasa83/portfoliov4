import { Component } from '@angular/core';
import { HeaderComponent } from '../content/utility/header/header.component';
import { FooterComponent } from '../content/utility/footer/footer.component';
import { ContentComponent } from '../content/content.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    ContentComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
