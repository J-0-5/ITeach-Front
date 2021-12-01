import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ParameterService {

  constructor(private http: HttpClient) { }

  url: String = 'http://jose.developapp.co/api/';

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "aplication/json",
    'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
  })

  getParameter(name: String) {
    const url_api = `${this.url}parameter/values`;
    return this.http
      .get(url_api, { headers: this.headers, params: new HttpParams().set('name', name.toString()) },)
      .pipe(map(data => data));
  }
}
