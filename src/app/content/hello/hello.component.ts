import { Component } from '@angular/core';
import {NgFor} from "@angular/common";

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.scss'
})
export class HelloComponent {

}
