import { Routes } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { LayoutComponent } from './modules/layout/layout.component';
import { LaandingComponent } from './modules/laanding/laanding.component';

export const routes: Routes = [
  { path: '-', pathMatch: 'full', redirectTo: 'inicio' }, // Esta rota deve estar por último!

  {
    path: '',
    // canActivate: [NoAuthGuard],
    component: LayoutComponent,
    data: {
      layout: 'empty',
    },
    children: [
      {
        path: '',
        component: LaandingComponent,
      },
      // {
      //   path: 'login',
      // },
      // {
      //   path: 'register',
      // },
      // {
      //   path: 'esqueci-minha-senha',
      // },
    ],
  },
  {
    path: '',
    // canActivate: [AuthGuard],
    component: LayoutComponent,
    data: {
      layout: 'sidebar',
    },
    children: [
      // {
      //   path: 'inicio',
      // },
      {
        path: 'usuarios',
        // canMatch: [RoleGuard],
        data: {
          title: 'Usuários',
          menuKey: 'USERS',
        },
        loadChildren: () =>
          import('./modules/admin/users/users.module').then(
            (m) => m.UsersModule
          ),
      },
    ],
  },

  { path: '**', component: NotFoundComponent }, // Esta rota deve estar por último!
];
