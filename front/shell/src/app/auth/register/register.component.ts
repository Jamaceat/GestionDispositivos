import { Component, inject, OnDestroy } from '@angular/core';
import { validationMessages } from '../../utils/validation-custom-forms';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { IUserRegister } from '../../utils/user-login.interface';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnDestroy{
  private  authSuscription!: Subscription;

  formRegister!: FormGroup;
  
  private readonly formBuilder = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  constructor() {
    this.initializeForm();
  }

  ngOnDestroy(): void {
    this.authSuscription.unsubscribe();
  }

  initializeForm() {
    this.formRegister = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName:  ['', Validators.required],
      document: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(8), Validators.required]],
    });
  }

  onSubmit() {
    if (this.formRegister.valid) {
      let userRegister = this.formRegister.value as IUserRegister;

      userRegister = {
        ...userRegister,
        roles: ['ROLE_USER']
      }

      this.authSuscription = this.authService.register(userRegister).subscribe({
        complete: () => {
          this.router.navigate(['/login']);
        }
      })

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
