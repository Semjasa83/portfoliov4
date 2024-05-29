import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  standalone: true,
    imports: [
        NgOptimizedImage,
        RouterLink,
        RouterLinkActive,
        TranslateModule
    ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
