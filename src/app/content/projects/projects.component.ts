import {TranslateModule} from '@ngx-translate/core';
import {Component} from '@angular/core';
import {ThemeService} from '../../utility/services/theme/theme.service';
import {BackgroundComponent} from "../../utility/background/background.component";
import {ButtonComponent} from "../../utility/button/button.component";
import {TranslationService} from '../../utility/services/translation/translation.service';
import {HttpClient} from '@angular/common/http';
import {NgClass} from "@angular/common";

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
    TranslateModule,
    NgClass,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  public projects: Project[] = [];

  constructor(private themeService: ThemeService, private translationService: TranslationService, private http: HttpClient,) {
    this.themeService.checkTheme();
    this.translationService.getCurrentLanguage();

  }

  public ngOnInit() {
    this.loadProjects();
  }

  private loadProjects(): void {
    this.http.get<Project[]>('assets/projects/projects.json').subscribe(
      data => {
        this.projects = data;
      },
      error => {
        console.error('Error loading projects:', error);
      }
    );
  }
}
