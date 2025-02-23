import { ProductAddComponent } from "../app/component/product-add/product-add.component";
import { ProductDetailComponent } from "../app/component/product-detail/product-detail.component";
import { ProductListComponent } from "../app/component/product-list/product-list.component";
import { Environment } from "../app/utils/environtmen.interface";

export const environment: Environment = {
  routes: {
    productRoute: [
      {
        path: '',
        component: ProductListComponent,
      },
      {
        path: 'add',
        component: ProductAddComponent,
      },
      {
        path: ':id',
        component: ProductDetailComponent,
      },
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],

    product: '',
    productAdd: 'add',
    productDetail: ':id',
  },
  style: {
    height: '100%'
  }
};
