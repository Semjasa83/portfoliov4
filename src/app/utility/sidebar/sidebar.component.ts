import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {ButtonComponent} from "../button/button.component";
import {ThemeDialogComponent} from "../../content/settings/theme-dialog/theme-dialog.component";
import {LanguageDialogComponent} from "../../content/settings/language-dialog/language-dialog.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    ButtonComponent,
    TranslateModule,
    ThemeDialogComponent,
    LanguageDialogComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  public toggleLanguage: boolean = false;
  public toggleTheme: boolean = false;

  constructor() {
  }

  public toggleLanguageSelect() {
    this.toggleTheme = false;
    this.toggleLanguage = !this.toggleLanguage;
  }

  public toggleThemeSelect() {
    this.toggleLanguage = false;
    this.toggleTheme = !this.toggleTheme;
  }
}
