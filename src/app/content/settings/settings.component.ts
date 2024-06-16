import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from "../../utility/button/button.component";
import { TranslateModule } from '@ngx-translate/core';
import { ThemeService } from '../../utility/services/theme/theme.service';

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
export class SettingsComponent{

  constructor(private themeService: ThemeService) { }

  public setTheme() {
    this.themeService.setTheme()
}
}