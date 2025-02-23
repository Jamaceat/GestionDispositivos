import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy } from '@angular/core';
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
import { TokenService } from '../services/token.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnDestroy {
  private authSuscription!: Subscription;
  formLogin!: FormGroup;
  
  private readonly formBuilder = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly tokenServide = inject(TokenService);
  private readonly router = inject(Router);

  constructor() {
    this.initializeForm();
  }

  ngOnDestroy(): void {
    this.authSuscription.unsubscribe();
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
      this.authSuscription = this.authService.login(userLogin).subscribe({
        next: (res) => {
          this.tokenServide.setToken(res.headers.get("Authorization")!);
          this.router.navigate(['/dashboard']);
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
