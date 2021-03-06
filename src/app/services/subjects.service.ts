import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  constructor(private http: HttpClient) { }

  url: String = 'http://jose.developapp.co/api/';

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "aplication/json",
    'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
  })

  getSubjects(unassigned: Number = NaN, teacher_id: Number = NaN) {
    const url_api = `${this.url}subjects`;
    return this.http
      .get(url_api, { headers: this.headers, params: new HttpParams().set('unassigned', unassigned.toString()).set('teacher_id', teacher_id.toString()) })
      .pipe(map(data => data));
  }

  createSubjects(name: String) {
    const url_api = `${this.url}subjects/store`;
    return this.http
      .post(url_api, { name }, { headers: this.headers })
      .pipe(map(data => data));
  }

  updateSubjects(id: Number, name: String) {
    const url_api = `${this.url}subjects/update`;
    return this.http
      .put(url_api, { id, name }, { headers: this.headers })
      .pipe(map(data => data));
  }

  deleteSubjects(id: Number) {
    const url_api = `${this.url}subjects/${id}`;
    return this.http
      .delete(url_api, { headers: this.headers })
      .pipe(map(data => data));
  }
}
