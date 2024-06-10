import { Routes } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { LaandingComponent } from './laanding/laanding.component';

export const routes: Routes = [
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
      {
        path: 'login',
        loadChildren: () => import('./modules/admin/admin.module').then((m) => m.AdminModule),
      },
      {
        path: 'register',
        loadChildren: () => import('./modules/admin/admin.module').then((m) => m.AdminModule),
      },
      {
        path: 'esqueci-minha-senha',
        loadChildren: () => import('./modules/admin/admin.module').then((m) => m.AdminModule),
      },
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
      {
        path: 'usuarios',
        // canMatch: [RoleGuard],
        data: {
          title: 'Usuários',
          menuKey: 'USERS',
        },
        loadChildren: () =>
          import('./modules/users/users.module').then((m) => m.UsersModule),
      },
    ],
  },

  { path: '**', component: NotFoundComponent }, // Esta rota deve estar por último!
];
