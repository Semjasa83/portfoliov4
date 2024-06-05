import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-background',
  standalone: true,
  imports: [
    TranslateModule,
    NgIf
  ],
  templateUrl: './background.component.html',
  styleUrl: './background.component.scss'
})
export class BackgroundComponent {

  @Input() upperText: string = '';
  @Input() lowerText?: string | null | undefined = '';
}
