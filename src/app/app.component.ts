import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'iTeach-Front';
  token: String;

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(
    private observer: BreakpointObserver,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.token = ''
  }


  ngOnInit() {
    console.log(this.token)
  }

  ngAfterViewInit() {
    this.token = JSON.stringify(localStorage.getItem('userToken'));
    console.log(this.token)

    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (this.token === 'null') {
          this.router.navigate(['login']);
          this.sidenav.mode = 'over';
          this.sidenav.close();
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

}
