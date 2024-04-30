import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';
import { IUserModuleState } from '../+store';
import { Store } from '@ngrx/store';
import { userProfileSetEditMode, userProfileSetErrorMessage, userProfileSetLoading } from '../+store/actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule,CommonModule],
  providers: [UserService],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  inEditMode$ = this.store.select(
    (state: { user: { profile: { isEditMode: any } } }) =>
      state.user.profile.isEditMode
  );
  isLoading$ = this.store.select(
    (state: { user: { profile: { isLoading: any } } }) =>
      state.user.profile.isLoading
  );
  currentUser$ = this.userService.currentUser$;

  constructor(
    private userService: UserService,
    private store: Store<IUserModuleState>
  ) {}

  ngOnInit(): void {
    this.userService.getCurrentUserProfile().subscribe();
  }

  toggleEditMode(currentValue: any): void {
    this.store.dispatch(userProfileSetEditMode({ isEdit: !currentValue }));
  }

  submitHandler(data: any): void {
    this.store.dispatch(userProfileSetLoading({ isLoading: true }));
    this.userService.updateProfile(data).subscribe({
      next: () => {
        this.store.dispatch(userProfileSetEditMode({ isEdit: false }));
      },
      error: (err) => {
        this.store.dispatch(
          userProfileSetErrorMessage({ message: err.error.message })
        );
        console.error(err);
      },
    });
  }
}
