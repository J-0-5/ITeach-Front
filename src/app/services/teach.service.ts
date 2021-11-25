import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeachService {

  constructor(private http: HttpClient) { }

  url: String = 'http://127.0.0.1:8000/api/';

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "aplication/json",
    'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
  })

  getTeach(teacher_id: Number, subjects_id: Number = NaN) {
    const url_api = `${this.url}teach/subjects`;
    return this.http
      .get(url_api, { headers: this.headers, params: new HttpParams().set('teacher_id', teacher_id.toString()).set('subjects_id', subjects_id.toString()) })
      .pipe(map(data => data));
  }

  assignSubjects(teacher_id: Number = NaN, subjects_id: Number = NaN) {
    const url_api = `${this.url}teach/assign`;
    return this.http
      .post(url_api, { teacher_id, subjects_id }, { headers: this.headers })
      .pipe(map(data => data));
  }

  deleteSubjects(teacher_id: Number = NaN, subjects_id: Number = NaN) {
    const url_api = `${this.url}teach/subjects/delete`;
    return this.http
      .post(url_api, { teacher_id, subjects_id }, { headers: this.headers })
      .pipe(map(data => data));
  }
}
