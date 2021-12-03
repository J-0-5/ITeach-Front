import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

//services
import { TutorshipService } from 'src/app/services/tutorship.service';

@Component({
  selector: 'app-agenda-detail',
  templateUrl: './agenda-detail.component.html',
  styleUrls: ['./agenda-detail.component.css']
})
export class AgendaDetailComponent implements OnInit {

  detail: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    // private urlTree: UrlTree,
    private tutorship: TutorshipService) { }

  ngOnInit(): void {
    this.getDetail();
  }

  getDetail() {
    this.activatedRoute.queryParams.subscribe(params => {
      const id: Number = params['id'] || null;
      const teacher: boolean = params['teacher'] || null;

      this.tutorship.getTutorshipDetail(id)
        .subscribe(response => {
          let data = JSON.parse(JSON.stringify(response));
          if (data.status) {
            this.detail = data.data;
            this.detail['user'] = teacher === true ? this.detail.student : this.detail.teacher;
          }
        })
    });
  }
}
