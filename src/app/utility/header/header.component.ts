import { Component } from '@angular/core';
import { NgIf, NgOptimizedImage } from "@angular/common";
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterLinkActive } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  standalone: true,
    imports: [
        NgOptimizedImage,
        RouterLink,
        RouterLinkActive,
        TranslateModule,
        NgIf
    ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  public activeTab: string | undefined = '';

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activeTab = event.url.split('/').pop();
        if (this.activeTab === '') {
          this.activeTab = 'home';
        }
      }
    });
  }
}
