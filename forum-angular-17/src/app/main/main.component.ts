import { Component } from '@angular/core';
import { ThemesListComponent } from "../themes-list/themes-list.component";
import { PostsListComponent } from "../posts-list/posts-list.component";

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './main.component.css',
    imports: [ThemesListComponent, PostsListComponent]
})
export class MainComponent {

}
