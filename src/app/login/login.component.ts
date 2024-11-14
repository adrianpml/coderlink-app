import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  form= this.fb.group({
    email: ['', [Validators.required,Validators.email]],
    password: ['', [Validators.required, Validators.minLength (5)]]
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
  ){}



  async login(){
    const mail = this.form?.get('email')?.value
    const usuarioLogin =
    {
      "email": this.form?.get('email')?.value,
      "password": this.form?.get('password')?.value
    }
    debugger
    this.authService.loginService(usuarioLogin)
  }

}
