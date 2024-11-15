import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioButton } from '@angular/material/radio';
import {MatRadioModule} from '@angular/material/radio';
import { User } from '../_models/datos-user';
import { AuthService } from '../services/auth.service';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule,
    CommonModule, MatCheckboxModule, MatRadioButton,MatRadioModule,FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  form= this.fb.group({
    tipoUsuario: ['', [Validators.required]],
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  flagMostrarRegistro: boolean = false
  flagShowLogin: boolean = false

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ){}

  async registrar(){
    var usuarioRegistro : User ={
      firstName: this.form?.get('firstName')?.value,
      lastName: this.form?.get('lastName')?.value,
      email: this.form?.get('email')?.value,
      password: this.form?.get('password')?.value
    }
    debugger
    if(this.form?.get('tipoUsuario')?.value == "2"){
      //Enviar a customer
      const response= await this.authService.createDeveloper(usuarioRegistro)
      if(response){
        this. flagShowLogin = true;
      }
    }else{
      //Enviar a developer
      const response= await this.authService.createCustomer(usuarioRegistro)
      if(response){
        this. flagShowLogin = true;
      }
    }
  }

  onChangeRadioButton(){
    this.flagMostrarRegistro = true;
  }
  


}
