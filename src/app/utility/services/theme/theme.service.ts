import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import * as themes from './theming/theme.class';
import { ThemeName } from './theming/theme.enum';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(private rendererFactory: RendererFactory2) { }

  public setTheme(theme: ThemeName) {
    const themeClass = themes[theme];
    if (!themeClass) {
      console.error(`Theme ${theme} not found.`);
      return;
    }
    const root = document.documentElement;
    root.setAttribute('style', this.loopColorsFromTheme(themeClass));
  }

  private loopColorsFromTheme(obj: { [key: string]: string }) {
    let result = '';
    for (let [key, value] of Object.entries(obj)) {
      result += `${key}: ${value};`;
    }
    return result;
  }

  public async checkTheme() {
    let getTheme = localStorage.getItem('theme');
    if (getTheme === null) {
        localStorage.setItem('theme', 'ayu');
    } else {
        this.setTheme(getTheme as ThemeName);
    }
    console.log('Theme checked');
}
}
