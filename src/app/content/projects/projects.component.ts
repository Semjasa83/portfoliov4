import { TranslateModule } from '@ngx-translate/core';
import { Component } from '@angular/core';
import { ThemeService } from '../../utility/services/theme/theme.service';
import { BackgroundComponent } from "../../utility/background/background.component";
import { ButtonComponent } from "../../utility/button/button.component";
import { TranslationService } from '../../utility/services/translation/translation.service';

interface Project {
  title: string;
  description: string;
  image: string;
  url: string;
  github: string;
  technologies: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    BackgroundComponent,
    ButtonComponent,
    TranslateModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  public projects =
  [
    {
        "title": "Portfolio",
        "description": "Main.Projects.PortfolioDescription",
        "image": "../../../assets/Images/portfolio.jpg",
        "url": "Projects.PortfolioDescription",
        "github": "https://github.com/Semjasa83/portfoliov4",
        "technologies": ["Angular17", "TypeScript", "HTML", "SCSS" ]
    },
    {
        "title": "Pokedex",
        "description": "Main.Projects.PokedexDescription",
        "image": "../../../assets/Images/pokedex.jpg",
        "url": "",
        "github": "https://github.com/Semjasa83/PokedexV3",
        "technologies": ["Vue3", "JavaScript", "HTML", "SCSS", "CSS"]
    },
    {
      "title": "Join",
      "description": "Main.Projects.JoinDescription",
      "image": "../../../assets/Images/pokedex.jpg",
      "url": "",
      "github": "https://github.com/Semjasa83/JoinV3",
      "technologies": ["Python - Django", "Angular18", "TypeScript", "HTML", "SCSS"]
    }
  ];


  constructor(private themeService: ThemeService, private translationService: TranslationService) {
    this.themeService.checkTheme();
    this.translationService.getCurrentLanguage();
    // this.loadProjects();
  }

  // private loadProjects(): void {
  //   this.projects.forEach(element => {
  //     console.log(element);

  //   });

  // }
}
