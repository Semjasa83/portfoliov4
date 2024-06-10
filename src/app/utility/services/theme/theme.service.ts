import { EventEmitter, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { IThemeOptions, Theme } from '../../../../assets/themes/theme_interface';
import { ayuTheme, testTheme } from '../../../../assets/themes/theme_classes';

@Injectable({
  providedIn: 'root'
})

export class ThemeService {

  constructor() {}

  public themeChange: EventEmitter<IThemeOptions> = new EventEmitter<IThemeOptions>();

  private themes: Array<IThemeOptions> = [ayuTheme, testTheme];
  private activeTheme: Theme = Theme.Ayu;

  public getActiveTheme(): IThemeOptions {
      const theme: IThemeOptions | undefined = this.themes.find((option: IThemeOptions) => option.name === this.activeTheme);
      if (!theme) {
          throw new Error(`Theme not found: '${this.activeTheme}'`);
      }

      return theme;
  }

  public setTheme(name: Theme) {
      this.activeTheme = name;
      this.themeChange.emit( this.getActiveTheme());
      return this.getActiveTheme();
  }
}
