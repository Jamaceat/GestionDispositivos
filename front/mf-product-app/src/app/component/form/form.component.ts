import { Component, inject, input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../service/product.service';
import { validationMessages } from '../../utils/validation-custom-form';
import { IProduct } from '../../utils/product-interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit{
  readonly labelButton = input.required<string>();
  dataForm = input<IProduct>();

  private readonly numericOnlyReg= '^-?[0-9]\\d*(\\.\\d{1,2})?$';
  private readonly stringOnlyReg = /^[a-zA-Z\sáéíóúÁÉÍÓÚñÑ]+$/;

  private readonly formBuilder = inject(FormBuilder);
  private readonly productService = inject(ProductService);

  constructor() {
    this.initializeForm();
  }

  ngOnInit(): void {
    if(this.dataForm()) {
      this.formProduct.patchValue(this.dataForm()!);
    }
  }

  formProduct!: FormGroup;

  onSubmit() {
    if (this.formProduct.valid) {
      const productItem: IProduct = this.formProduct.value;
      this.productService.addProduct(productItem);
    } else {
      console.error('Formulario inválido');
      this.formProduct.markAllAsTouched();
    }
  }

  initializeForm() {
    this.formProduct = this.formBuilder.group({
      name: ['', [Validators.pattern(this.stringOnlyReg), Validators.required]],
      type: ['', [Validators.pattern(this.stringOnlyReg), Validators.required]],
      stock: [0, [Validators.pattern(this.numericOnlyReg), Validators.required]],
      price: ['', [Validators.pattern(this.numericOnlyReg), Validators.required]],
    });
  }

  getErrorMessage(controlName: string): string {
    const control = this.formProduct.get(controlName);

    if (control?.errors) {
      for (const errorKey in control.errors) {
        if (control.errors.hasOwnProperty(errorKey)) {
          return validationMessages[controlName][errorKey];
        }
      }
    }
  
    return '';
  }
}
