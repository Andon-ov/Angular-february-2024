import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// adding imports to used components here!
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HomeComponent],
})
export class AppComponent {
  title = 'forum-angular-17';
}
