import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from "../../utility/button/button.component";
import { TranslateModule } from '@ngx-translate/core';
import { ThemeService } from '../../utility/services/theme/theme.service';
import { ThemeName } from '../../utility/services/theme/theming/theme.enum';

type Name = 'ayu' | 'vscode';
@Component({
  selector: 'app-settings',
  standalone: true,
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
  imports: [
    ButtonComponent,
    TranslateModule
  ]
})


export class SettingsComponent {

  constructor(private themeService: ThemeService) { }

  // public setTheme(theme: ThemeName) {
  //   if (theme !== null) {
  //     this.themeService.setTheme(theme);
  //   }
  // }

  // setThemeSafe(theme: ThemeName) {
  //   this.setTheme(theme);
  // }


  public setTheme(theme: ThemeName) {
    if (theme !== null) {
      this.themeService.setTheme(theme);
    }
  }

  setThemeSafe(theme: ThemeName) {
    this.setTheme(theme);
  }

  // Neue Methode, um Theme von einem String zu setzen
  setThemeFromString(themeStr: string) {
    const theme = themeStr as ThemeName;
    if (Object.values(ThemeName).includes(theme)) {
      this.setTheme(theme);
    } else {
      console.warn(`Unbekanntes Theme: ${themeStr}`);
      // Hier können Sie Fehlerbehandlung oder Standardverhalten definieren
    }
  }



}