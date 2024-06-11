import { Component, OnInit } from '@angular/core';
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
export class SettingsComponent implements OnInit {

  public defaultThemeActive: boolean = true;

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.themeService.themeChange.subscribe(theme => {
      console.log('received theme change event', theme);
    });
  }

  public toggleTheme(): void {
    this.defaultThemeActive = !this.defaultThemeActive;
    if (this.defaultThemeActive) {
      this.themeService.setTheme(Theme.Ayu);
    } else {
      this.themeService.setTheme(Theme.Test);
    }

}}
