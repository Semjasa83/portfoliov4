import {SettingsComponent} from '../settings/settings.component';
import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {NgFor} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {ButtonComponent} from "../../utility/button/button.component";
import {BackgroundComponent} from "../../utility/background/background.component";
import {RouterLink} from '@angular/router';
import {ThemeService} from '../../utility/services/theme/theme.service';
import {TranslationService} from '../../utility/services/translation/translation.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [
    NgFor,
    TranslateModule,
    ButtonComponent,
    BackgroundComponent,
    RouterLink,
    SettingsComponent
  ]
})

export class HomeComponent implements AfterViewInit {

  @ViewChild('topText') topText: ElementRef | undefined;
  @ViewChild('middleText') middleText: ElementRef | undefined;
  @ViewChild('bottomText') bottomText: ElementRef | undefined;

  constructor(private themeService: ThemeService, private translationService: TranslationService) {
    this.themeService.checkTheme();
    this.translationService.getCurrentLanguage();
  }

  ngAfterViewInit() {
    if (this.topText) {
      this.firstAnimation();
    }
  }

  private async firstAnimation() {
    if (this.topText) {
      this.topText.nativeElement.classList.remove('txt-invisibility');
      this.topText.nativeElement.classList.add('typing-effect');
      this.topText.nativeElement.addEventListener('animationend', () => {
        this.topText?.nativeElement.classList.remove('typing-effect');
        this.secondAnimation();
      });
    }
  }

  private async secondAnimation() {
    if (this.middleText) {
      this.middleText.nativeElement.classList.remove('txt-invisibility');
      this.middleText?.nativeElement.classList.add('typing-effect');
    }
  }
}
