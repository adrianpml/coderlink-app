import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DeveloperService } from '../services/developer.service';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Developer } from '../_models/datos-developer';

@Component({
  selector: 'app-contratar-desarrollador',
  standalone: true,
  imports: [ReactiveFormsModule,
      CommonModule,FormsModule, MatInputModule, MatSelectModule, MatFormFieldModule],
  templateUrl: './contratar-desarrollador.component.html',
  styleUrl: './contratar-desarrollador.component.css'
})
export class ContratarDesarrolladorComponent {

  developers: Developer[] = [];
  developers2: Developer[] = [];
  flagSuccessfullHiring : boolean = false;

  form= this.fb.group({
    idDeveloper: ['', [Validators.required]],
    idProyecto: ['', [Validators.required]],
    tarifa: ['', [Validators.required]]
  });
  constructor(
    private fb: FormBuilder,
    private devService: DeveloperService
    //@Inject(DeveloperService) listService: DeveloperService
  ){}

  async contratar(){
    var idDev = this.form?.get('idDeveloper')?.value
    var idProy = this.form?.get('idProyecto')?.value
    const response = await this.devService.contratarDesarrollador(idDev,idProy );
    if(response){
      this.flagSuccessfullHiring = true;
    }
  }

  ngOnInit(){
    this.getListaDev();
    
  }

  async getListaDev(){

    const dev: Developer = {
      id: undefined,
      dni: undefined,
      firstName: undefined,
      lastName: "Prueba",
      description: undefined,
      portfolio: undefined,
      rating: undefined,
      skill_id: undefined,
      hoursWorked: undefined,
      paymentRate: undefined,
      workExperience: undefined,
      yearsExperience: undefined,
      project_id: undefined,
      created_at: undefined,
      updated_at: undefined,
      user: undefined
    }
    const dev2: Developer = {
      id: undefined,
      dni: undefined,
      firstName: undefined,
      lastName: "Prueba",
      description: undefined,
      portfolio: undefined,
      rating: undefined,
      skill_id: undefined,
      hoursWorked: undefined,
      paymentRate: undefined,
      workExperience: undefined,
      yearsExperience: undefined,
      project_id: undefined,
      created_at: undefined,
      updated_at: undefined,
      user: undefined
    }
    this.developers2.push(dev);
    this.developers2.push(dev2);
    this.developers = await this.devService.getListDevelopers();
  }
    

}
