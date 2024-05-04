import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule], // Add CommonModule
  providers: [AuthService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  hideNavigation = false;

  isLogged$ = this.authService.isLogged$;
  isReady$ = this.authService.isReady$;
  currentUser$ = this.authService.currentUser$;

  constructor(private authService: AuthService, private router: Router) {}
  logoutHandler() {
    this,
      this.authService
        .logout()
        .subscribe(() => this.router.navigate(['/user/login']));
  }
}
