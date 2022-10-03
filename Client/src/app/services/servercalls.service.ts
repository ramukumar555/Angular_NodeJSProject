import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Organisation } from '../model/organisation.model';

@Injectable({
  providedIn: 'root'
})
export class ServercallsService {

  output = null;
  host = "http://localhost:8080";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  
  constructor(private http: HttpClient) { }
  
  getOrganisations(): Observable<Organisation[]> {
    return this.http.get(this.host+"/api/organizations", this.httpOptions).pipe(map(res => <Organisation[]>res));;
  }
  
  sendReqToServer(url: string, type: string, key: string) {    
    if('POST' === type){
      this.output =this.http.post(this.host+url,this.httpOptions);
    }
    return this.output;
    
  }
}
