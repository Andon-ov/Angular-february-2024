import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [FormsModule, CommonModule, FormsModule],
  templateUrl: './new.component.html',
  styleUrl: './new.component.css',
  providers:[ThemeService]
})
export class NewComponent implements OnInit {

    constructor(
      private themeService: ThemeService,
      private router: Router
    ) { }
  
    ngOnInit(): void {
    }
  
    submitHandler(data: any): void {
      this.themeService.saveTheme(data)
        .subscribe({
          next: () => {
            this.router.navigate(['/theme']);
          },
          error: (err) => {
  
          }
        });
    }
  
  }