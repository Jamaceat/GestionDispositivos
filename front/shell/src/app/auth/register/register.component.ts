import { Component, inject } from '@angular/core';
import { validationMessages } from '../../utils/validation-custom-forms';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  private readonly formBuilder = inject(FormBuilder);
  formRegister!: FormGroup;

  constructor() {
    this.initializeForm();
  }

  initializeForm() {
    this.formRegister = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name:  ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(8), Validators.required]],
    });
  }

  onSubmit() {
    if (this.formRegister.valid) {
      const login = this.formRegister.value;

      console.log(login);

    } else {
      console.error('Formulario inválido');
      this.formRegister.markAllAsTouched();
    }
  }

  getErrorMessage(controlName: string): string {
    const control = this.formRegister.get(controlName);

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
