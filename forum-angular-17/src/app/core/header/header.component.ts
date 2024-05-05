import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule], // Add CommonModule
  providers: [AuthService, UserService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  hideNavigation = false;

  isLogged$ = this.authService.isLogged$;
  isReady$ = this.authService.isReady$;
  currentUser$ = this.authService.currentUser$;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {
  }
  logoutHandler() {
    this,
      this.authService
        .logout()
        .subscribe(() => this.router.navigate(['/user/login']));
  }

  ngOnInit(): void {
    this.userService.getCurrentUserProfile().subscribe(
    );
  }
}

// must rerender after login
