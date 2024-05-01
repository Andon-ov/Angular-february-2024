import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';
import {
  userLoginSetErrorMessage,
  userLoginSetLoading,
} from '../+store/actions';
import { IUserModuleState } from '../+store';
import { Store } from '@ngrx/store';
import { LoaderComponent } from '../../shared/loader/loader.component';

@Component({
  selector: 'app-login',
  standalone: true,
  providers: [UserService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterLink,
    LoaderComponent,
  ],
})
export class LoginComponent implements OnInit {
  isLoading$ = this.store.select((state) => state.user.login.isLoading);
  errorMessage$ = this.store.select((state) => state.user.login.errorMessage);

  constructor(
    private userService: UserService,
    private router: Router,
    private store: Store<IUserModuleState>
  ) {}

  ngOnInit(): void {}

  changeHandler(data: any): void {
    console.log(data);
  }

  submitFormHandler(formValue: { email: string; password: string }): void {
    this.store.dispatch(userLoginSetLoading({ isLoading: true }));
    this.store.dispatch(userLoginSetErrorMessage({ message: '' }));

    this.userService.login(formValue).subscribe({
      next: () => {
        this.store.dispatch(userLoginSetLoading({ isLoading: false }));
        this.router.navigate(['/']);
      },
      error: (err: { error: { message: any } }) => {
        this.store.dispatch(userLoginSetLoading({ isLoading: false }));
        this.store.dispatch(
          userLoginSetErrorMessage({ message: err.error.message })
        );
      },
    });
  }
}
