import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TutorshipService {

  constructor(private http: HttpClient) { }

  url: String = 'http://jose.developapp.co/api/';

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "aplication/json",
    'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
  })

  getTutorshipsList(state: any[]) {
    const url_api = `${this.url}tutorship`;

    let params = new HttpParams();

    state.map((item, index) => { params = params.append(`state[${index}]`, item) });

    return this.http
      .get(url_api, { headers: this.headers, params })
      .pipe(map(data => data));
  }

  getTutorshipDetail(tutorship_id: Number) {
    const url_api = `${this.url}tutorship/show`;
  console.log('tutorship_id',tutorship_id)
    return this.http
      .get(url_api, { headers: this.headers, params: new HttpParams().set('tutorship_id', tutorship_id.toString()) })
      .pipe(map(data => data));
  }

  createTutorship(teacher_id: Number, student_id: Number, subjects_id: Number, schedule_id: Number, date: String, observation: String) {
    const url_api = `${this.url}tutorship/store`;
    return this.http
      .post(url_api, { teacher_id, student_id, subjects_id, schedule_id, date, observation }, { headers: this.headers })
      .pipe(map(data => data));
  }
}
