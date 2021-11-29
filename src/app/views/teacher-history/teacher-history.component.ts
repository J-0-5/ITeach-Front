import { Component, OnInit } from '@angular/core';

//services
import { TutorshipService } from 'src/app/services/tutorship.service';

@Component({
  selector: 'app-teacher-history',
  templateUrl: './teacher-history.component.html',
  styleUrls: ['./teacher-history.component.css']
})
export class TeacherHistoryComponent implements OnInit {

  tutorshipsList!: any[];
  page: number = 0;

  constructor(private tutorship: TutorshipService) { }

  ngOnInit(): void {
    this.getList();
  }

  setPage(param: number) {
    if (param < 0 && this.page === 0) { return; }
    this.page += param;
  }

  getList() {
    this.tutorship.getTutorshipsList([14, 15])
      .subscribe(response => {
        let data = JSON.parse(JSON.stringify(response));
        console.log(data)
        if (data.status) {
          this.tutorshipsList = data.data;
        }
      })
  }

}
