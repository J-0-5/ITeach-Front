import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

//services
import { SubjectsService } from 'src/app/services/subjects.service';
import { ParameterService } from 'src/app/services/parameter.service';
import { TeachService } from 'src/app/services/teach.service';
import { ScheduleService } from 'src/app/services/schedule.service';
import { TutorshipService } from 'src/app/services/tutorship.service';

@Component({
  selector: 'app-tutorship',
  templateUrl: './tutorship.component.html',
  styleUrls: ['./tutorship.component.css']
})
export class TutorshipComponent implements OnInit {

  SubjectsList!: any[];
  min_date: String = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`;
  days: Number[] = [7, 8, 9, 10, 11, 12, 6];
  TeachList!: any[];
  teacher!: any;
  AvailableHours!: any[];


  subjectCtrl = new FormControl('', [Validators.required]);
  teacherCtrl = new FormControl('', [Validators.required]);
  dayCtrl = new FormControl(this.min_date, [Validators.required]);
  scheduleCtrl = new FormControl('', [Validators.required]);
  observationCtrl = new FormControl('', []);

  constructor(
    private subjects: SubjectsService,
    private parameter: ParameterService,
    private teach: TeachService,
    private schedule: ScheduleService,
    private tutorship: TutorshipService
  ) {
    this.subjectCtrl.valueChanges
      .subscribe((selectedValue) => {
        this.getTeachers(selectedValue);
      })

    this.teacherCtrl.valueChanges
      .subscribe((selectedValue) => {
        this.teacher = this.TeachList.filter(teach => teach.teacher_id == selectedValue)[0];
      })

    this.dayCtrl.valueChanges
      .subscribe((selectedValue) => {
        console.log(selectedValue)
        let date = new Date(selectedValue);
        this.getSchedule(this.days[date.getDay()]);
      })
  }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.subjects.getSubjects()
      .subscribe(response => {
        let data = JSON.parse(JSON.stringify(response));
        if (data.status) {
          this.SubjectsList = data.data;
        }
      });
  }

  getTeachers(subjects_id: Number = NaN) {
    this.teach.getTeach(subjects_id)
      .subscribe(response => {
        let data = JSON.parse(JSON.stringify(response));
        if (data.status) {
          this.TeachList = data.data.length != 0 ? data.data : null;
        }
      });
  }

  getSchedule(day: Number) {
    if (this.teacher == null) return
    this.schedule.getSchedules(this.teacher.teacher_id, day)
      .subscribe(response => {
        let data = JSON.parse(JSON.stringify(response));
        if (data.status) {
          this.AvailableHours = data.data.length != 0 ? data.data : null;
        }
      });
  }

  requestTutoring(event: Event) {
    event.preventDefault();
    this.tutorship.createTutorship(this.teacher.teacher_id, 0, this.subjectCtrl.value, this.scheduleCtrl.value, this.dayCtrl.value, this.observationCtrl.value)
      .subscribe(response => {
        let data = JSON.parse(JSON.stringify(response));
        if (data.status) {
          this.subjectCtrl.reset();
          this.teacherCtrl.reset();
          this.dayCtrl.reset();
          this.scheduleCtrl.reset();
          this.observationCtrl.reset();
        }
        alert(data.message);
      });
  }
}
