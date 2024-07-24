import { Component } from '@angular/core';
import { ThemeService } from '../../utility/services/theme/theme.service';
import { TranslationService } from '../../utility/services/translation/translation.service';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
  constructor(private themeService: ThemeService, private translationService: TranslationService) { 
    this.themeService.checkTheme();
    this.translationService.getCurrentLanguage();
}

}
