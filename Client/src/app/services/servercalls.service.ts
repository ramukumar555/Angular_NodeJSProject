import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Organisation } from '../model/organisation.model';
import { Group } from '../model/group.model';

@Injectable({
  providedIn: 'root'
})
export class ServercallsService {

  host = "http://localhost:8080";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getOrganisations(): Observable<Organisation[]> {
    return this.http.get(this.host + "/api/organizations", this.httpOptions)
      .pipe(map(res => <Organisation[]>res));
  }

  getGroupsbyOrganisations(url: string): Observable<Group[]> {
    return this.http.get(this.host + url, this.httpOptions)
      .pipe(map(res => <Group[]>res));
  }

  sendReqToServer(url: string, type: string, data) {
    if ('POST' === type) {
      return this.http.post(this.host + url, data, this.httpOptions).subscribe(res => {
        console.log("Response for url " + this.host + url + " is " + res);
      });
    }
  }
}
