import { Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './user/profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ThemeComponent } from './theme/theme/theme.component';
import { NewComponent } from './theme/new/new.component';
import { DetailComponent } from './theme/detail/detail.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'HOME',
    },
  },
  {
    path: 'user',
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
  {
    path: 'theme',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ThemeComponent,
        data: {
          title: 'THEME'
        }
      },
      {
        path: 'new',
        component: NewComponent,
        data: {
          title: 'NEW THEME',
          isLogged: true
        }
      },
      {
        path: 'detail/:id',
        component: DetailComponent,
        data: {
          title: 'THEME DETAIL',
          isLogged: true
        }
      }
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: {
      title: '404',
    },
  },
];
