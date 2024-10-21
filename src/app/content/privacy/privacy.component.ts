import { Component } from '@angular/core';
import { ThemeService } from '../../utility/services/theme/theme.service';
import { TranslationService } from '../../utility/services/translation/translation.service';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss'
})
export class PrivacyComponent {

  constructor(private themeService: ThemeService, private translationService: TranslationService) { 
    this.themeService.checkTheme();
    this.translationService.getCurrentLanguage();
  }
}
