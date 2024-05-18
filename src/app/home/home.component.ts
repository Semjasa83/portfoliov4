import { Component } from '@angular/core';
import { HeaderComponent } from "../utility/header/header.component";
import { SidebarComponent } from "../utility/sidebar/sidebar.component";
import { FooterComponent } from "../utility/footer/footer.component";
import { RouterOutlet } from '@angular/router';
import { ExplorerComponent } from "../utility/explorer/explorer.component";
@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [
        HeaderComponent,
        SidebarComponent,
        FooterComponent,
        RouterOutlet,
        ExplorerComponent
    ]
})
export class HomeComponent {

    


}
