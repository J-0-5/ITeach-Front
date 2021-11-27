import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TutorshipService {

  constructor(private http: HttpClient) { }

  url: String = 'http://127.0.0.1:8000/api/';

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "aplication/json",
    'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
  })

  createTutorship(teacher_id: Number, student_id: Number, subjects_id: Number, schedule_id: Number, date: String, observation: String) {
    const url_api = `${this.url}tutorship/store`;
    return this.http
      .post(url_api, { teacher_id, student_id, subjects_id, schedule_id, date, observation }, { headers: this.headers })
      .pipe(map(data => data));
  }
}
