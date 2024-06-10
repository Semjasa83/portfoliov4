import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ThemeService } from '../../app/utility/services/theme/theme.service';
import { AvailableProperties, IThemeOptions } from './theme_interface';

@Directive({
  selector: '[appTheme]',
  standalone: true
})
export class ThemeDirective implements OnInit {

  private unsubscribe: Subject<boolean> = new Subject();

  constructor(
    private elementRef: ElementRef,
    private themeService: ThemeService
  ) { }

  public ngOnInit(): void {
    const active: IThemeOptions = this.themeService.getActiveTheme();
    if (active) {
      this.updateTheme(active);
    }
    this.themeService.themeChange
      .pipe(
        takeUntil(this.unsubscribe)
      )
      .subscribe((theme: IThemeOptions) => this.updateTheme(theme));
  }

  public ngOnDestroy(): void {
    this.unsubscribe.next(false);
  }

  public updateTheme(theme: IThemeOptions): void {
    Object.keys(theme.customProperties).forEach((key: string): void => {
      this.elementRef.nativeElement.style.setProperty(key, theme.customProperties[key as AvailableProperties]);
    });
  }

}
