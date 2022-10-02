import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Organisation } from '../model/organisation.model';

@Injectable({
  providedIn: 'root'
})
export class ServercallsService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getOrganisations(): Observable<Organisation[]> {
    return this.http.get("http://localhost:8080/api/organizations", this.httpOptions).pipe(map(res => <Organisation[]>res));;
  }
}
