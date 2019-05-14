import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgetpasswordServiceService {


  constructor(private http: HttpClient) { }
  
  url="http://127.0.0.1:8000/";
  
  post(url,any):Observable<any>
  {
    return this.http.post(this.url+url,any)
  }
  
}
