import { Inject, Injectable } from '@angular/core';
import { MainService } from './main.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { environment } from '../../environments/environment.development';
import { Server } from 'http';
import { Developer } from '../_models/datos-developer';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService extends MainService{
  
  developers: Developer[] = [];
  localStorage: any

  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {
    super(http, sanitizer);
    this.localStorage = document.defaultView?.localStorage;    
  }

  async searchDeveloper(dev: Developer){
    if(dev.lastName && dev.firstName){
      const url = `${environment.BASE_URL}/api/developers/search`
      const response = this.postAsync(url,dev)
      return response;
    }
  }

  async contratarDesarrollador(idDeveloper: any, idOferta: any){
    const url = `${environment.BASE_URL}/api/developers/aplyToJob`
    const tokenJWT = this.localStorage.getItem('userToken')
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + tokenJWT
   });

   var objetoJobOffer = {
    developerId : idDeveloper,
    jobOfferId : idOferta,
    description: "Contratar desarrollador"
   }

   const response=this.postAsync(url,objetoJobOffer)
   return response;

  }

  async getListDevelopers(): Promise<Developer[]>{

    const url = `${environment.BASE_URL}/api/developers`

    
    const tokenJWT = this.localStorage?.getItem('userToken')
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + tokenJWT
   });

   const response2 = await this.http.get<Developer[]>(url, { headers: reqHeader }).subscribe(params =>{

    params.forEach((param) =>{
      var dev : Developer ={
        id: param.id,
        dni: param.dni,
        firstName: param.firstName,
        lastName: param.lastName,
        description: param.description,
        portfolio: param.portfolio,
        rating: param.rating,
        skill_id: param.skill_id,
        hoursWorked: param.hoursWorked,
        paymentRate: param.paymentRate,
        workExperience: param.workExperience,
        yearsExperience: param.yearsExperience,
        project_id: param.project_id,
        created_at: param.created_at,
        updated_at: param.updated_at,
        user: ""
      }
      this.developers.push(dev);
    })
/*
    var dev : Developer ={
      id: params.id,
      dni: undefined,
      first_name: undefined,
      last_name: undefined,
      description: undefined,
      portfolio: undefined,
      rating: undefined,
      skill_id: undefined,
      hoursWorked: undefined,
      payment_rate: undefined,
      work_experience: undefined,
      years_experience: undefined,
      project_id: undefined,
      created_at: undefined,
      updated_at: undefined,
      user: undefined
    }
    this.developers = params*/
    /*var dev: Developer = {
      "id": params.,

    }*/

   });
   /*)
    data.forEach(e => {
      this.test.push({
        id: e.Map_Data_ID,
        value: e.County,
        color: e.Color
      })
    })
   );*/



   return this.developers;


    //return data
    /*const url = environment.BASE_URL+'/api/developers'

    this.http.get(url, {
      headers: {
        Authorization: `Bearer ${String("xyz")}`,
        `Access-Control-Allow-Origin`: '*',
      },
    });*/

    /*const response = await this.getAsync(environment.BASE_URL+'/api/developers'
      , {
        headers: {
          Authorization: `Bearer ${String("")}`,
          `Access-Control-Allow-Origin`: '*',
        },
      });*/

  }


  /*async registerDeveloper(data: any){

  }*/

}
