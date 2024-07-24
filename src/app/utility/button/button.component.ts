import { NgClass, NgIf } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    TranslateModule
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Input() text?: string;
  @Input() icon?: string;
  @Input() bgrColor?: string;
  @Input() txtColor?: string;
  @Input() outlined?: boolean = false;
  @Input() active?: boolean = false;
  @Output() buttonClick: EventEmitter<void> | undefined;

  onSubmit() {
    if (this.buttonClick) {
      this.buttonClick.emit();
      console.log('button',this.buttonClick.emit());

    }
  }
}
