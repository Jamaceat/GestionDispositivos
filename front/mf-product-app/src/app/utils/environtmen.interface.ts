interface RouteDefinition {
  path: string;
  component?: any;
  redirectTo?: string;
  pathMatch?: 'full' | 'prefix';
}

interface ProductRoutes {
  product: string;
  productAdd: string;
  productDetail: string;
}

export interface Environment {
  routes: {
    productRoute: RouteDefinition[];
    product: string;
    productAdd: string;
    productDetail: string;
  };
  style: {
    height: any
  }
}
