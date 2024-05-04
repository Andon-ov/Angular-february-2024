import { Component } from '@angular/core';
import { ThemesListComponent } from "../theme/themes-list/themes-list.component";
import { PostsListComponent } from "../post/posts-list/posts-list.component";
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { UserService } from '../user/user.service';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { AuthService } from '../core/auth.service';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [ThemesListComponent, PostsListComponent,CommonModule,RouterModule]
})
export class HomeComponent {

    isLogged$ = this.authService.isLogged$;

    url: string | undefined;

    constructor(
        private authService: AuthService,
        private router: Router
      ) {
        // this.router.events.subscribe((event) => { if (event instanceof NavigationEnd) {this.url = event.url;} });
        this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((event) => { if (event instanceof NavigationEnd) {this.url = event.url;} });


      }
}
