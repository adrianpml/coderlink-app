import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { lastValueFrom } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(
    private _htService: HttpClient,
    private sanitizerUrl: DomSanitizer,
  ) { }

  public async getAsync(url: string): Promise<any>;
  public async getAsync<T>(url: string): Promise<T>;

  async getAsync(url: string){
    try{
      const jwtToken = localStorage.getItem("userToken")
      var reqHeader = new HttpHeaders({ 
        'Content-Type': 'application/json',
        //'Authorization': 'Bearer ' + "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBleGFtcGxlLmNvbSIsInJvbGUiOiJST0xFX0FETUlOIiwiZXhwIjoxNzMxNTIxMjY3fQ.sQhSl19CsZaEqMO0Mz34Pv-SOSMLcNa2G_8FgCC6LYXy-0L5trNKg7r-7joPvrFRBVo-4VQnTsgtI2D7DVyI5g"
        'Authorization': 'Bearer ' +jwtToken
     });

      const response = this._htService.get(url, { headers: reqHeader });
      return lastValueFrom(response);
    }catch(error){
      return {estatusOperacion: "FALSE"} as any
    }
  }

  async postAsync(url1: string, objeto: any): Promise<any>{
    try{
      const jwtToken = localStorage.getItem("userToken")
      var reqHeader = new HttpHeaders({ 
        'Content-Type': 'application/json',
        //'Authorization': 'Bearer ' + "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBleGFtcGxlLmNvbSIsInJvbGUiOiJST0xFX0FETUlOIiwiZXhwIjoxNzMxNTQ2MDM0fQ.y3XECfHg8BLQmsv6yu0Qebwsup6gMQFoDFK0cOgff9ry5AwWGzZwrsrIlTXvBdnTgtFqJzZCl0gFt9LKvUCyNA"
        'Authorization': 'Bearer ' +jwtToken
     });
      const response = this._htService.post<any>(url1, objeto, { headers: reqHeader });
      return lastValueFrom(response)
    }catch(error){
      return {estatusOperacion: "FALSE"} as any
    }
  }

  async postAsyncPass(url1: string, objeto: any): Promise<any>{
    try{
      const response = this._htService.post<any>(url1, objeto);
      return lastValueFrom(response)
    }catch(error){
      return {estatusOperacion: "FALSE"} as any
    }
  }

}
