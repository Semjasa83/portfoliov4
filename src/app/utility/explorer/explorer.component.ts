import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-explorer',
  standalone: true,
    imports: [
        NgOptimizedImage,
        RouterLink,
        RouterLinkActive
    ],
  templateUrl: './explorer.component.html',
  styleUrl: './explorer.component.scss'
})
export class ExplorerComponent {

}
