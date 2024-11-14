import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MainService } from './main.service';
import { Customer } from '../_models/datos-customer';
import { environment } from '../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class CustomerService extends MainService{

  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {
    super(http, sanitizer);
  }

  async createCustomer(customer: Customer){
    const response= this.postAsync(environment.BASE_URL+'/api/customers', customer);
    return response;
  }

}
