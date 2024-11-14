import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from './main.service';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from '../../environments/environment.development';
import { DOCUMENT } from '@angular/common';
import { User } from '../_models/datos-user';
import { Customer } from '../_models/datos-customer';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends MainService{
  HttpClient: any
  

  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {
    super(http, sanitizer);
  }

  localStorage = this.document.defaultView?.localStorage;
  flagShowLogin: boolean = false;

  async loginService(data: any){
    debugger
    
    const user = {
      "email": data.email,
      "password": data.password
    }
    const response = await this.postAsyncPass(environment.BASE_URL+'/auth/login', user)
    if(response.token){
      
      localStorage.setItem("testToken", response.token)
      this.localStorage?.setItem("userToken", response.token);
      await this.router.navigate(['/contacto']);
    }
    

  }

  isLogged():boolean{
    
    return false;
    
  }
  
  async loginUser(user: any) {
  
  localStorage.setItem('user_name', user.name);
  localStorage.setItem('user_email', user.email)
  localStorage.setItem('user_token', user.token);

  await this.router.navigate(['/admin']);
  }

  async logout(){
    localStorage.clear();
    await this.router.navigate(['/login']);
  }

  async createDeveloper(usuario : User) : Promise<boolean>{
    const response = await this.postAsync(environment.BASE_URL+'/auth/register/developer', usuario)
    if(response){
      this.flagShowLogin = true;
    }
    
    return this.flagShowLogin;
  }

  async createCustomer(usuario : User) : Promise<boolean>{
    const response = await this.postAsync(environment.BASE_URL+'/auth/register/customer', usuario)
    
    if(response){
      this.flagShowLogin = true;
    }
    return this.flagShowLogin

  }

}
