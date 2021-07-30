import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

import {Observable} from 'rxjs'
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DatacallService {
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });
constructor(private http: HttpClient, private router: Router) { }
  
   addCategory(data: any): Observable<any> {
     console.log(data)
        return this.http.post<any>(environment.url +'category/addCategory' ,data,
        { 'headers': this.headers });
  }

   getCategory(): Observable<any> {
    return this.http.get(environment.url +'category/getCategory',{ 'headers': this.headers });
  }

   addProduct(data: any): Observable<any> {
    return this.http.post<any>(environment.url +'product/addProduct' ,data,{ 'headers': this.headers });
  }

   getProduct(page = 0): Observable<any> {
    return this.http.get(environment.url +'product/getProduct?page='+page,{ 'headers': this.headers });
  }


  // Addcareer(data): any{
  //   return this.http.post(environment.url +'contact/addcareer' ,data , { observe: 'response' });
  // }

  // Addcontact(data): any{
  //   return this.http.post(environment.url +'contact/addcontact' ,data , { observe: 'response' });
  // }

  // listaddcontact(): any{
  //   return this.http.get(environment.url +'clients/listaddcontact');
  // }

  // Addregister(data): any{
  //   return this.http.post(environment.url +'leads/addleads' ,data, { observe: 'response' } );
  // }


  // Addregister(data): any{
  //   return this.http.post(environment.url +'register/addregister' ,data, { observe: 'response' } );
  // }

  // coinCapService(id,currency):any{
  //   return this.http.get('https://api.coinmarketcap.com/v2/ticker/'+id+'/?convert='+currency);
  // }
  

  // errorHandler(error: HttpErrorResponse) {
  //   if (error.status === 401) {
  //     this.router.navigate(['/profile'])
  //   }
  // }
}
