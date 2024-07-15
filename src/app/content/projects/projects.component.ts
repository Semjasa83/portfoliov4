import { Component } from '@angular/core';
import { ThemeService } from '../../utility/services/theme/theme.service';
import { BackgroundComponent } from "../../utility/background/background.component";
import { ButtonComponent } from "../../utility/button/button.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    BackgroundComponent, 
    ButtonComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  constructor(private themeService: ThemeService) { 
    this.themeService.checkTheme();
}
}
