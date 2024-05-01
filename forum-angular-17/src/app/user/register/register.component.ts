import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../user.service';
import { Router, RouterLink } from '@angular/router';
import {
  emailValidator,
  rePasswordValidatorFactory,
} from '../../shared/valodators';
import { IUserModuleState } from '../+store';
import { Store } from '@ngrx/store';
import {
  userLoginSetErrorMessage,
  userRegisterSetLoading,
} from '../+store/actions';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from "../../shared/loader/loader.component";

@Component({
    selector: 'app-register',
    standalone: true,
    providers: [UserService],
    templateUrl: './register.component.html',
    styleUrl: './register.component.css',
    imports: [ReactiveFormsModule, CommonModule, RouterLink, LoaderComponent]
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  isLoading$ = this.store.select((state) => state.user.register.isLoading);
  errorMessage$ = this.store.select(
    (state) => state.user.register.errorMessage
  );

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private store: Store<IUserModuleState>
  ) {
    const passwordControl = this.fb.control('', [
      Validators.required,
      Validators.minLength(4),
    ]);
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, emailValidator]],
      tel: [''],
      password: passwordControl,
      rePassword: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          rePasswordValidatorFactory(passwordControl),
        ],
      ],
    });
  }

  ngOnInit(): void {}

  submitHandler(): void {
    const data = this.form.value;
    this.store.dispatch(userRegisterSetLoading({ isLoading: true }));
    this.store.dispatch(userLoginSetErrorMessage({ message: '' }));

    this.userService.register(data).subscribe({
      next: () => {
        this.store.dispatch(userRegisterSetLoading({ isLoading: false }));
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.store.dispatch(
          userLoginSetErrorMessage({ message: err.error.message })
        );
        this.store.dispatch(userRegisterSetLoading({ isLoading: false }));
      },
    });
  }
}
