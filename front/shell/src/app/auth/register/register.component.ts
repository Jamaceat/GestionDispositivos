import { Component, inject, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { IUserRegister, validationMessages } from 'src/app/model';
import { AuthService } from '../services/auth.service';

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

  public rols = [
    {
      id: 'ROLE_USER',
      name: 'Usuario',
    },
    {
      id: 'ROLE_SELLER',
      name: 'Vendedor',
    }
  ]

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
      role: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.formRegister.valid) {
      let userRegister = this.formRegister.value as IUserRegister;
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
          return validationMessages[controlName][errorKey] as string;
        }
      }
    }
    return '';
  }
}
