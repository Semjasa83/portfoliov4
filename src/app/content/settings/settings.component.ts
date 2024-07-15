import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from "../../utility/button/button.component";
import { TranslateModule } from '@ngx-translate/core';
import { ThemeService } from '../../utility/services/theme/theme.service';
import { ThemeName } from '../../utility/services/theme/theming/theme.enum';
import { BackgroundComponent } from '../../utility/background/background.component';


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

  constructor(private themeService: ThemeService) {
    this.themeService.checkTheme();
   }

  public setTheme(theme: ThemeName) {
    if (theme !== null) {
      this.themeService.setTheme(theme);
      localStorage.setItem('theme', theme);
    }
  }

  setThemeFromString(themeStr: string) {
    const theme = themeStr as ThemeName;
    if (Object.values(ThemeName).includes(theme)) {
      this.setTheme(theme);
    } else {
      console.warn(`Unknown Theme: ${themeStr}`);
    }
  }



}