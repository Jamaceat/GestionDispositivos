import { ProductAddComponent } from '../app/component/product-add/product-add.component';
import { ProductDetailComponent } from '../app/component/product-detail/product-detail.component';
import { ProductListComponent } from '../app/component/product-list/product-list.component';
import { Environment } from '../app/utils/environtmen.interface';

export const environment: Environment = {
  routes: {
    productRoute: [
      {
        path: 'product',
        component: ProductListComponent,
      },
      {
        path: 'product/add',
        component: ProductAddComponent,
      },
      {
        path: 'product/:id',
        component: ProductDetailComponent,
      },
      {
        path: '',
        redirectTo: '/product',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: '/product',
      },
    ],

    product: '/product',
    productAdd: '/product/add',
    productDetail: '/product/:id',
  },
  style: {
    height: '100vh'
  }
};