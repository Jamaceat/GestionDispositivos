import { Component, inject, OnInit } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { IProduct } from '../../utils/product-interface';
import { ProductService } from '../../service/product.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, FormComponent, RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent implements OnInit{
  readonly entorno = environment;
  products: IProduct[] = [];
  productItem!: IProduct;
  productId: string = '';
  route = inject(ActivatedRoute);

  private readonly productService = inject(ProductService);

  constructor() {
    this.productId = this.route.snapshot.params['id'];
    this.productService.productItems$.subscribe({
      next: (value) => this.products = value
    })
  }

  ngOnInit(): void {
    console.log([this.productId])
    if(this.products.length > 0) {
      this.productItem = this.products.find(product => product.id === this.productId)!;
    }
  }
}
