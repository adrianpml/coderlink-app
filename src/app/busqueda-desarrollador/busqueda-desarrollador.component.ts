import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomerService } from '../services/customer.service';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DeveloperService } from '../services/developer.service';
import { Developer } from '../_models/datos-developer';
import { MatTableModule } from '@angular/material/table' 
import {MatSliderModule} from '@angular/material/slider';

@Component({
  selector: 'app-busqueda-desarrollador',
  standalone: true,
  imports: [ReactiveFormsModule,
    CommonModule,FormsModule, MatInputModule, MatSelectModule, MatFormFieldModule, MatTableModule, MatSliderModule],
  templateUrl: './busqueda-desarrollador.component.html',
  styleUrl: './busqueda-desarrollador.component.css'
})
export class BusquedaDesarrolladorComponent {

  flagShowResults: boolean = false;

  searchDeveloperForm = this.fb.group({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    habilidades: new FormControl(''),
    nameCompany: new FormControl(''),
    phone: new FormControl('')}
  );

  displayedColumns: string[] = ['id', 'firstName', 'lastName'];
  //displayedColumns: string[] = ['id'];
  dataSource:any ;

  constructor(
    private fb: FormBuilder,
    private developerService: DeveloperService
  ){
  }

  async searchDeveloper(){

    var searchObjDev: Developer = {
      id: undefined,
      dni: undefined,
      firstName: this.searchDeveloperForm?.get('firstName')?.value,
      lastName: this.searchDeveloperForm?.get('lastName')?.value,
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

    const response= await this.developerService.searchDeveloper(searchObjDev)
    if(response){
      this.flagShowResults=true;
      this.dataSource = response;
    }
    
    
  }

}
