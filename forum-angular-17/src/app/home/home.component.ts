import { Component } from '@angular/core';
import { ThemesListComponent } from "../themes-list/themes-list.component";
import { PostsListComponent } from "../posts-list/posts-list.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [ThemesListComponent, PostsListComponent]
})
export class HomeComponent {

}
