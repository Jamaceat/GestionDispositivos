import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../utils/product-interface';
import uniqid from 'uniqid';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly arrayProduct: IProduct[] = [];

  constructor() {}

  private readonly productItems = new BehaviorSubject<IProduct[]>([
    {
      id: '123456',
      name: 'Samsung',
      type: 'Movil',
      stock: 10,
      price: '200',
    },
    {
      id: '1234567',
      name: 'Samsung 2',
      type: 'Movil',
      stock: 2,
      price: '200',
    },
    {
      id: '1234568',
      name: 'Samsung 3',
      type: 'Movil',
      stock: 0,
      price: '200',
    }
  ]);
  productItems$ = this.productItems.asObservable();

  addProduct(product: IProduct) {
    const { id, stock, ...productWithoutId } = product;

    const productModify: IProduct = {
      id: uniqid(),
      stock: Number(product.stock),
      ...productWithoutId,
    };

    this.arrayProduct.push(productModify);
    this.productItems.next(this.arrayProduct);
  }
}
