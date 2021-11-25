import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  url: String = 'http://127.0.0.1:8000/api/';

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "aplication/json",
    'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
  })

  getUserInfo(id: Number) {
    const url_api = `${this.url}users/show`;
    return this.http
      .get(url_api, { headers: this.headers, params: new HttpParams().set('id', id.toString()) },)
      .pipe(map(data => data));
  }

  changeImgHandler() {

    let inputImg = document.getElementById('inputImg');
    let imgUpdate = document.getElementById('imgUpdate');

    if (inputImg == null) {
        return;
    }

    inputImg.onchange = function () {
        if (inputImg.files && inputImg.files[0]) {
            let reader = new FileReader();
            reader.onload = function (e) {
                imgUpdate.setAttribute('src', e.target.result);
            };
            reader.readAsDataURL(inputImg.files[0]);
        }
    }

  }
}
