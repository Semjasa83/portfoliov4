import { Component } from '@angular/core';
import { NgFor } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import {ButtonComponent} from "../../utility/button/button.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgFor,
    TranslateModule,
    ButtonComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
