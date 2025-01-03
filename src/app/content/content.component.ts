import {Component, HostListener} from '@angular/core';
import {ExplorerComponent} from "../utility/explorer/explorer.component";
import {FooterComponent} from "../utility/footer/footer.component";
import {HeaderComponent} from "../utility/header/header.component";
import {RouterOutlet} from "@angular/router";
import {SidebarComponent} from "../utility/sidebar/sidebar.component";

@Component({
  selector: 'app-content',
  standalone: true,
    imports: [
        ExplorerComponent,
        FooterComponent,
        HeaderComponent,
        RouterOutlet,
        SidebarComponent
    ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  windowWidth: number;

  constructor() {
    this.windowWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.windowWidth = window.innerWidth;
  }
}
