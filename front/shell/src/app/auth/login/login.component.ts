import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { validationMessages } from '../../utils/validation-custom-forms';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { IUserLogin } from '../../utils/user-login.interface';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  formLogin!: FormGroup;
  
  private readonly formBuilder = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  constructor() {
    this.initializeForm();
  }

  initializeForm() {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(3), Validators.required]],
    });
  }

  onSubmit() {
    if (this.formLogin.valid) {
      const userLogin = this.formLogin.value as IUserLogin;
      this.authService.login(userLogin).subscribe({
        next: (res) => {
          sessionStorage.setItem("tokenUser", res.headers.get("Authorization")!)
          this.router.navigate(['/dashboard/product']);
        }
      });
    } else {
      console.error('Formulario inválido');
      this.formLogin.markAllAsTouched();
    }
  }

  getErrorMessage(controlName: string): string {
    const control = this.formLogin.get(controlName);

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
