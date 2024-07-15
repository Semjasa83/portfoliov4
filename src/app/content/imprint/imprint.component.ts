import { Component } from '@angular/core';
import { ThemeService } from '../../utility/services/theme/theme.service';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
  constructor(private themeService: ThemeService) { 
    this.themeService.checkTheme();
}

}
