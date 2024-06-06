import { Component } from '@angular/core';
import { BackgroundComponent } from '../../utility/background/background.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    BackgroundComponent,
    TranslateModule,
    NgOptimizedImage
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
