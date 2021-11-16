import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  constructor(private http: HttpClient) { }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "aplication/json",
    'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
  })

  getSubjects() {
    const url_api = 'http://127.0.0.1:8000/api/subjects';
    return this.http
      .get(url_api, { headers: this.headers })
      .pipe(map(data => data));
  }

  createSubjects(name: String) {
    const url_api = 'http://127.0.0.1:8000/api/subjects/store';
    return this.http
      .post(url_api, { name }, { headers: this.headers })
      .pipe(map(data => data));
  }
}
