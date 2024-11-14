import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../_models/datos-customer';

@Component({
  selector: 'app-perfil-cliente',
  standalone: true,
  imports: [ReactiveFormsModule,
    CommonModule,FormsModule, MatInputModule, MatSelectModule, MatFormFieldModule],
  templateUrl: './perfil-cliente.component.html',
  styleUrl: './perfil-cliente.component.css'
})
export class PerfilClienteComponent {

  //customerForm!: FormGroup;
  customerForm = this.fb.group({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    descripcion: new FormControl('',Validators.required),
    nameCompany: new FormControl('',Validators.required),
    phone: new FormControl('',Validators.required)}
  );

  flagRegistrado: boolean = false;

  

  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService
  ){
  }

  async crearPerfilCliente(){

    var customer : Customer = {
      id: this.customerForm?.get('id')?.value,
      firstName: this.customerForm?.get('firstName')?.value,
      lastName: this.customerForm?.get('lastName')?.value,
      description: this.customerForm?.get('descripcion')?.value,
      nameCompany: this.customerForm?.get('nameCompany')?.value,
      phone: this.customerForm?.get('phone')?.value,
    }

    debugger

    const response = await this.customerService.createCustomer(customer);
    if(response.id){
      this.flagRegistrado = true;
    }
  }

}
