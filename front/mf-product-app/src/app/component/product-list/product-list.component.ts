import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IProduct } from '../../utils/product-interface';
import { ProductService } from '../../service/product.service';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-product-list',
  imports: [RouterLink,CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  readonly entorno = environment;
  products: IProduct[] = [];

  private readonly productService = inject(ProductService);

  constructor() {
    this.productService.productItems$.subscribe({
      next: (value) => this.products = value
    })

    console.log([this.products]);
  }

  validateStatusProduct(stock: number): string {
    return stock > 0 ? 'Disponible' : 'Agotado';
  }

  isStock(stock: number): boolean {
    return stock > 0
  }
}
