import { Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { environment } from '../environments/environment';

export const cartRoutes: Routes = [
  {
    path: environment.routes.cartComponentRoute,
    component: CartComponent
  },
  {
    path: '**',
    redirectTo: environment.routes.cartComponentRoute
  }
];
