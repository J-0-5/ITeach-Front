import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Time } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private http: HttpClient) { }

  url: String = 'http://127.0.0.1:8000/api/';

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "aplication/json",
    'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
  })

  getSchedules(teacher_id: Number, day: Number = NaN) {
    const url_api = `${this.url}schedule`;
    return this.http
      .get(url_api, { headers: this.headers, params: new HttpParams().set('teacher_id', teacher_id.toString()).set('day', day.toString()) })
      .pipe(map(data => data));
  }

  createSchedule(teacher_id: Number, day: Number, campus: Number, start_hour: Time, final_hour: Time) {
    const url_api = `${this.url}schedule/store`;
    return this.http
      .post(url_api, { teacher_id, day, campus, start_hour, final_hour }, { headers: this.headers })
      .pipe(map(data => data));
  }
}
