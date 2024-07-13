import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import * as themes from './theming/theme.class';
import { ThemeName } from './theming/theme.enum'; // Angenommen, das Enum befindet sich in theme.enum.ts

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(private rendererFactory: RendererFactory2) {}


// public setThemeManu() {
//   const root = document.documentElement;
//   root.setAttribute('style', this.loopColorsFromTheme(vscode));
// }

public setTheme(theme: ThemeName) {
  const themeClass = themes[theme]; // Zugriff auf die entsprechende Theme-Klasse basierend auf dem Enum-Wert
  if (!themeClass) {
    console.error(`Theme ${theme} not found.`);
    return;
  }
  const root = document.documentElement;
  root.setAttribute('style', this.loopColorsFromTheme(themeClass));
}

private loopColorsFromTheme(obj: {[key:string]: string}) {
  let result = '';
  for (let [key, value] of Object.entries(obj)) {
    result += `${key}: ${value};`;
  }
  return result;
}

}
