import { Component } from '@angular/core';
import { BackgroundComponent } from '../../utility/background/background.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgOptimizedImage } from "@angular/common";
import { ThemeService } from '../../utility/services/theme/theme.service';
import { TranslationService } from '../../utility/services/translation/translation.service';

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

  constructor(private themeService: ThemeService, private translationService: TranslationService) { 
    this.themeService.checkTheme();
    this.translationService.getCurrentLanguage();
  }

}
