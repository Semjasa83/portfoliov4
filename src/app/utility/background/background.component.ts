import {NgClass, NgForOf, NgIf} from '@angular/common';
import {Component, Input} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'app-background',
  standalone: true,
  imports: [
    TranslateModule,
    NgIf,
    NgClass,
    NgForOf
  ],
  templateUrl: './background.component.html',
  styleUrl: './background.component.scss'
})

export class BackgroundComponent {

  @Input() upperText: string = '';
  @Input() lowerText?: string | null | undefined = '';

  public bgrTxt: string[] = [
      'Home',
      'About me',
      'Projects',
      'Contact'
  ];

  public ngOnInit() {
    this.endlessText();
  }

  public endlessText() {
    let text = '';
    let html = document.getElementById('collage');
    for (let i = 0; i < 10 ; i++) {
      for (const t of this.bgrTxt) {
        text += (t + ' ');
      }
    }
    if (html) {
      html.innerHTML += text;
    }

  }


}
