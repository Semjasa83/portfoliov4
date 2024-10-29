import {Component, Input} from '@angular/core';
import {ButtonComponent} from "../../../utility/button/button.component";
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {ThemeService} from "../../../utility/services/theme/theme.service";
import {TranslationService} from "../../../utility/services/translation/translation.service";
import {ThemeName} from "../../../utility/services/theme/theming/theme.enum";
import {SidebarComponent} from "../../../utility/sidebar/sidebar.component";
import {StopPropagationDirective} from "../../../utility/stop-propagation.directive";

@Component({
  selector: 'app-theme-dialog',
  standalone: true,
  imports: [
    ButtonComponent,
    TranslateModule,
    StopPropagationDirective
  ],
  templateUrl: './theme-dialog.component.html',
  styleUrl: './theme-dialog.component.scss',
})
export class ThemeDialogComponent {

  public themes: string[] = [];
  public activeTheme: string = '';

  constructor(private themeService: ThemeService, private sidebar: SidebarComponent) {
    this.searchThemes();
    this.themeService.checkTheme();
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

  public closeDialog() {
    this.sidebar.toggleTheme = false;
  }
}
