import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from "../../utility/button/button.component";
import { BackgroundComponent } from "../../utility/background/background.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ThemeService } from '../../utility/services/theme/theme.service';
import { TranslationService } from '../../utility/services/translation/translation.service';

@Component({
    selector: 'app-contact',
    standalone: true,
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss',
    imports: [
        TranslateModule,
        BackgroundComponent,
        ButtonComponent,
        ReactiveFormsModule
    ]
})

export class ContactComponent {
    constructor(private themeService: ThemeService, private translationService: TranslationService) {
        this.themeService.checkTheme();
        this.translationService.getCurrentLanguage();
    }


    form!: FormGroup;
    submitted = false;

    contactForm = new FormGroup({
        name: new FormControl('', Validators.requiredTrue),
        email: new FormControl('', [Validators.requiredTrue, Validators.email]),
        subject: new FormControl('', Validators.requiredTrue),
        message: new FormControl('', Validators.requiredTrue)
    });

    onSubmit() {
        // TODO: Use EventEmitter with form value

        console.log(this.contactForm.value);
      }

      onReset() {
          this.submitted = false;
          this.contactForm.reset();
      }
}
