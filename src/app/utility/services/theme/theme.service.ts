import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { IThemeOptions, Theme } from './theming/theme.interface';
import { themes, vscodeTheme } from './theming/theme.class';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  // private renderer: Renderer2;
  public theme: IThemeOptions[] = [ themes[0]];

  constructor(private rendererFactory: RendererFactory2) {
    // this.renderer = this.rendererFactory.createRenderer(null, null);
   }

  //  setTheme(theme: { [key: string]: string }): void {
  //   Object.keys(theme).forEach(key => {
  //     this.renderer.setStyle(document.body, `--${key}`, theme[key]);
  //   });
  // }


public setTheme() {
  const root = document.documentElement;
  root.setAttribute('style', this.loopColorsFromTheme(vscodeTheme));
}

private loopColorsFromTheme(obj: {[key:string]: string}): string {
  let result = '';
  for (let [key, value] of Object.entries(obj)) {
    result += `${key}: ${value};`;
  }
  return result;
}

}
// in der componente als merker
// this.themeService.setTheme({
//   'primary-color': '#ff0000',
//   'secondary-color': '#00ff00',
// });

