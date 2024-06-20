import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from "../../utility/button/button.component";
import { BackgroundComponent } from "../../utility/background/background.component";

@Component({
    selector: 'app-contact',
    standalone: true,
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss',
    imports: [
        TranslateModule,
        BackgroundComponent,
        ButtonComponent
    ]
})
export class ContactComponent {

}
