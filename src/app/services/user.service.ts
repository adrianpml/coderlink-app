import { Inject, Injectable } from '@angular/core';
import { MainService } from './main.service';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { User } from '../_models/datos-user';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService extends MainService{

  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {
    super(http, sanitizer);
  }

  async createUser(usuario: User){
    this.postAsync(environment.BASE_URL+'/',usuario)
  }

}
