import { Component } from '@angular/core';
import { NgFor } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import {ButtonComponent} from "../../utility/button/button.component";
import { BackgroundComponent } from "../../utility/background/background.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [
        NgFor,
        TranslateModule,
        ButtonComponent,
        BackgroundComponent
    ]
})
export class HomeComponent {

}
