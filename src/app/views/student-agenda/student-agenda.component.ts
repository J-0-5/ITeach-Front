import { Component, OnInit } from '@angular/core';

//services
import { TutorshipService } from 'src/app/services/tutorship.service';

@Component({
  selector: 'app-student-agenda',
  templateUrl: './student-agenda.component.html',
  styleUrls: ['./student-agenda.component.css']
})
export class StudentAgendaComponent implements OnInit {

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
    this.tutorship.getTutorshipsList([13])
      .subscribe(response => {
        let data = JSON.parse(JSON.stringify(response));
        if (data.status) {
          this.tutorshipsList = data.data;
        }
      })
  }
}
