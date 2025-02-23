import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormComponent } from '../form/form.component';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-product-add',
  imports: [RouterLink, CommonModule, FormComponent],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.scss'
})
export class ProductAddComponent {
  readonly entorno = environment;

}
