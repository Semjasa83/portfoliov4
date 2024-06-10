import { Component } from '@angular/core';
import { ThemeService } from '../../utility/services/theme/theme.service';
import { Theme } from '../../../assets/themes/theme_interface';
import { ButtonComponent } from "../../utility/button/button.component";
import { TranslateModule } from '@ngx-translate/core';

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

  public isAyuThemeActive: boolean = true;

  constructor(private themeService: ThemeService) { }

  public toggleTheme(): void {
    console.log('test');
    
    this.isAyuThemeActive = !this.isAyuThemeActive;
    console.log(this.isAyuThemeActive);
    
    if (this.isAyuThemeActive) {
      this.themeService.setTheme(Theme.Ayu);
      console.log(this.themeService.setTheme(Theme.Ayu));
    } else {
      this.themeService.setTheme(Theme.Test);
      console.log(this.themeService.setTheme(Theme.Test));
    }

}}
