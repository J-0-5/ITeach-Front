import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { ProfileService } from './services/profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  full_name!: String;
  photo_url!: String;
  role!: any;

  title = 'iTeach-Front';
  token: any;

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(
    private observer: BreakpointObserver,
    private router: Router,
    private profile: ProfileService
  ) {
    this.token = JSON.stringify(localStorage.getItem('userToken'))
  }

  ngOnInit() {
    console.log(this.token);
    this.getProfileData();
  }

  logOut(event: Event) {
    event.preventDefault();
    localStorage.clear();
    this.token = null;
    this.router.navigate(['login']);
    this.sidenav.mode = 'side';
    this.sidenav.close();
  }

  ngAfterViewInit() {
    this.check();
  }

  check() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (this.token === 'null') {
          this.router.navigate(['login']);
          // this.sidenav.mode = 'over';
          // this.sidenav.close();
        }
        else if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
  }

  getProfileData() {
    if (this.token === 'null') return;
    this.profile.getUserInfo(0)
      .subscribe(response => {
        let data = JSON.parse(JSON.stringify(response));
        if (data.status) {
          this.full_name = data.data.first_name + " " + data.data.first_last_name;
          this.photo_url = data.data.photo_url;
          this.role = data.data.role
          console.log(data.data);
        }
      });
  }

}
