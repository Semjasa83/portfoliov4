import {Component, Input} from '@angular/core';
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {TranslationService} from "../../../utility/services/translation/translation.service";
import {ButtonComponent} from "../../../utility/button/button.component";
import {SidebarComponent} from "../../../utility/sidebar/sidebar.component";
import {StopPropagationDirective} from "../../../utility/stop-propagation.directive";

@Component({
  selector: 'app-language-dialog',
  standalone: true,
  imports: [
    ButtonComponent,
    TranslateModule,
    StopPropagationDirective
  ],
  templateUrl: './language-dialog.component.html',
  styleUrl: './language-dialog.component.scss',
})
export class LanguageDialogComponent {

  public languages: string[] = ['de', 'en', 'it'];
  public activeLanguage: string = '';

  constructor(private translate: TranslateService, private translationService: TranslationService,  private sidebar: SidebarComponent) {
    this.translationService.getCurrentLanguage();
    this.activeLanguage = this.translate.currentLang;
    this.activeLanguage = String(localStorage.getItem('lang'));
  }

  public setLanguage(lang: string) {
    localStorage.setItem('lang', lang);
    this.translate.use(lang);
    this.activeLanguage = lang;
  }

  public closeDialog() {
    this.sidebar.toggleLanguage = false;
  }
}
