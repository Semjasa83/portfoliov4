import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NgFor } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { ButtonComponent } from "../../utility/button/button.component";
import { BackgroundComponent } from "../../utility/background/background.component";
import { RouterLink } from '@angular/router';


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [
        NgFor,
        TranslateModule,
        ButtonComponent,
        BackgroundComponent,
        RouterLink
    ]
})

export class HomeComponent implements AfterViewInit{

    @ViewChild('topText') topText: ElementRef | undefined;
    @ViewChild('bottomText') bottomText: ElementRef | undefined;

    constructor() {

    }
  
    ngAfterViewInit() {
        if (this.topText) {
            this.firstAnimation();
        }
    }

    private async firstAnimation() {
        if (this.topText) {
            this.topText.nativeElement.classList.remove('txt-invisibility');
            this.topText.nativeElement.classList.add('typing-effect');
            this.topText.nativeElement.addEventListener('animationend', () => {
                this.topText?.nativeElement.classList.remove('typing-effect');
                this.secondAnimation();
              });
        }

    }

    private async secondAnimation() {
        if (this.bottomText) {
            this.bottomText.nativeElement.classList.remove('txt-invisibility');
            this.bottomText?.nativeElement.classList.add('typing-effect');
        }
    }

}
