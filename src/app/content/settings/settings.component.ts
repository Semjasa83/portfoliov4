import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from "../../utility/button/button.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ThemeService } from '../../utility/services/theme/theme.service';
import { ThemeName } from '../../utility/services/theme/theming/theme.enum';
import { BackgroundComponent } from '../../utility/background/background.component';
import { HttpClient } from '@angular/common/http';
import { TranslationService } from '../../utility/services/translation/translation.service';

@Component({
  selector: 'app-settings',
  standalone: true,
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
  imports: [
    ButtonComponent,
    TranslateModule,
    BackgroundComponent
  ]
})

export class SettingsComponent {

  public themes: string[] = [];
  public languages: string[] = ['de', 'en', 'it'];
  public activeLanguage: string = '';
  public activeTheme: string = '';

  constructor(private themeService: ThemeService, private translate: TranslateService, private translationService: TranslationService) {
    this.searchThemes();
    this.themeService.checkTheme();
    this.translationService.getCurrentLanguage();
    this.activeLanguage = this.translate.currentLang;
    this.activeTheme = String(localStorage.getItem('theme'));
   }

  public setTheme(theme: ThemeName) {
    if (theme !== null) {
      this.themeService.setTheme(theme);
      localStorage.setItem('theme', theme);
      this.activeTheme = theme;
    }
  }

  public setThemeFromString(themeStr: string) {
    const theme = themeStr as ThemeName;
    if (Object.values(ThemeName).includes(theme)) {
      this.setTheme(theme);
    } else {
      console.warn(`Unknown Theme: ${themeStr}`);
    }
  }

  private searchThemes() {
    let themes = Object.values(ThemeName);
    for (let theme of themes) {
      this.activeTheme = theme;
      this.themes.push(theme);
    }
  }

  public setLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

}