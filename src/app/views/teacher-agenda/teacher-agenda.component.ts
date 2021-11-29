import { Component, OnInit } from '@angular/core';

//services
import { TutorshipService } from 'src/app/services/tutorship.service';

@Component({
  selector: 'app-teacher-agenda',
  templateUrl: './teacher-agenda.component.html',
  styleUrls: ['./teacher-agenda.component.css']
})
export class TeacherAgendaComponent implements OnInit {

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
        console.log(data)
        if (data.status) {
          this.tutorshipsList = data.data;
        }
      })
  }

}
