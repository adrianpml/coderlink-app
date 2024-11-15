import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-perfil-developer',
  standalone: true,
  imports: [],
  templateUrl: './perfil-developer.component.html',
  styleUrl: './perfil-developer.component.css'
})
export class PerfilDeveloperComponent {
  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ){}

  nombre: any

  ngOnInit(){
    this.nombre = localStorage.getItem('nombreCompletoUser')
  }


}
