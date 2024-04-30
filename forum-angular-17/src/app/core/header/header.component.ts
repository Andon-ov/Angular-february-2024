import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule], // Add CommonModule
  providers: [UserService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  hideNavigation = false;

  isLogged$ = this.userService.isLogged$;
  isReady$ = this.userService.isReady$;
  currentUser$ = this.userService.currentUser$;

  constructor(private userService: UserService, private router: Router) {}
  logoutHandler() {
    this,
      this.userService
        .logout()
        .subscribe(() => this.router.navigate(['/user/login']));
  }
}
