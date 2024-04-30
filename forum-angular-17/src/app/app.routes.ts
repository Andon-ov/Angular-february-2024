import { Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './user/profile/profile.component';

export const routes: Routes = [
  {
    path: '',
    // canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home',
      },
      {
        path: 'home',
        component: HomeComponent,
        data: {
          title: 'HOME',
        },
      },
      // {
      //   path: '**',
      //   component: NotFoundComponent,
      //   data: {
      //     title: '404'
      //   }
      // }
    ],
  },
  {
    path: 'user',
    // canActivateChild: [
    //   AuthGuard
    // ],
    children: [
      {
        path: 'register',
        component: RegisterComponent,
        data: {
          isLogged: false,
          noNavigation: true,
          title: 'REGISTER USER',
        },
      },
      {
        path: 'login',
        component: LoginComponent,
        data: {
          isLogged: false,
          title: 'USER LOGIN',
        },
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: {
          isLogged: true,
          title: 'USER PROFILE',
        },
      },
    ],
  },
];
