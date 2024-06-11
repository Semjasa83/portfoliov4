import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private renderer: Renderer2;

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
   }

   setTheme(theme: { [key: string]: string }): void {
    Object.keys(theme).forEach(key => {
      this.renderer.setStyle(document.body, `--${key}`, theme[key]);
    });
  }
}

// in der componente als merker
// this.themeService.setTheme({
//   'primary-color': '#ff0000',
//   'secondary-color': '#00ff00',
// });

