import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';
import { IUserModuleState } from '../+store';
import { Store } from '@ngrx/store';
import { userProfileSetEditMode, userProfileSetErrorMessage, userProfileSetLoading } from '../+store/actions';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from "../../shared/loader/loader.component";
import { AuthService } from '../../core/auth.service';

@Component({
    selector: 'app-profile',
    standalone: true,
    providers: [UserService],
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.css',
    imports: [FormsModule, CommonModule, LoaderComponent]
})
// export class ProfileComponent implements OnInit {
//   inEditMode$ = this.store.select(
//     (state: { user: { profile: { isEditMode: any } } }) =>
//       state.user.profile.isEditMode
//   );
//   isLoading$ = this.store.select(
//     (state: { user: { profile: { isLoading: any } } }) =>
//       state.user.profile.isLoading
//   );
//   currentUser$ = this.userService.currentUser$;

//   constructor(
//     private userService: UserService,
//     private store: Store<IUserModuleState>
//   ) {}

//   ngOnInit(): void {
//     this.userService.getCurrentUserProfile().subscribe();
//   }

//   toggleEditMode(currentValue: any): void {
//     this.store.dispatch(userProfileSetEditMode({ isEdit: !currentValue }));
//   }

//   submitHandler(data: any): void {
//     this.store.dispatch(userProfileSetLoading({ isLoading: true }));
//     this.userService.updateProfile(data).subscribe({
//       next: () => {
//         this.store.dispatch(userProfileSetEditMode({ isEdit: false }));
//       },
//       error: (err) => {
//         this.store.dispatch(
//           userProfileSetErrorMessage({ message: err.error.message })
//         );
//         console.error(err);
//       },
//     });
//   }
// }


// export class ProfileComponent implements OnInit {

//   inEditMode = false;
//   currentUser$ = this.userService.currentUser$;

//   constructor(
//     private userService: UserService
//   ) { }

//   ngOnInit(): void {
//     this.userService.getCurrentUserProfile().subscribe();
//   }

//   toggleEditMode(): void {
//     this.inEditMode = !this.inEditMode;
//   }

//   submitHandler(data: any): void {
//     this.userService.updateProfile(data).subscribe({
//       next: () => {
//         this.inEditMode = false;
//       },
//       error: (err) => {
//         console.error(err);
//       }
//     });
//   }

// }


export class ProfileComponent implements OnInit {

  inEditMode = false;
  currentUser$ = this.authService.currentUser$;

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getCurrentUserProfile().subscribe();
  }

  toggleEditMode(): void {
    this.inEditMode = !this.inEditMode;
  }

  submitHandler(data: any): void {
    this.userService.updateProfile(data).subscribe({
      next: () => {
        this.inEditMode = false;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}