import { Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './auth/guard/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'product',
        loadChildren: () =>
          import('mf-product-app/productRoutes')
            .then((module) => module.productRoutes)
            .catch((err) => {
              console.error('Error al cargar el modulo producto ', err);
              // const modalService = new ModalService();
              // modalService.openModal('El módulo de productos no está disponible en este momento.');
              // return of([{ path: '', component: ModalErrorComponent }]);
            }),
      },
      {
        path: 'cart',
        loadChildren: () =>
          import('mf-cart-app/cartRoutes')
            .then((module) => module.cartRoutes)
            .catch((err) => {
              console.error('Error al cargar el modulo producto ', err);
              // const modalService = new ModalService();
              // modalService.openModal('El módulo de productos no está disponible en este momento.');
              // return of([{ path: '', component: ModalErrorComponent }]);
            }),
      },
    ],
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/dashboard',
  },
];
