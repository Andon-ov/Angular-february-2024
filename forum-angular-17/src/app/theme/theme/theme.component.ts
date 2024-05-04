import { Component } from '@angular/core';
import { ThemesListComponent } from '../themes-list/themes-list.component';
import { PostsListComponent } from '../../post/posts-list/posts-list.component';
import { AsideComponent } from "../../shared/aside/aside.component";

@Component({
    selector: 'app-theme',
    standalone: true,
    templateUrl: './theme.component.html',
    styleUrl: './theme.component.css',
    imports: [ThemesListComponent, PostsListComponent, AsideComponent]
})
export class ThemeComponent {


}
