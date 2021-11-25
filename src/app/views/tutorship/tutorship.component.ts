import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

//services
import { SubjectsService } from 'src/app/services/subjects.service';
import { ParameterService } from 'src/app/services/parameter.service';
import { TeachService } from 'src/app/services/teach.service';

@Component({
  selector: 'app-tutorship',
  templateUrl: './tutorship.component.html',
  styleUrls: ['./tutorship.component.css']
})
export class TutorshipComponent implements OnInit {
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  SubjectsList!: any[];
  days !: any[];
  TeachList!: any[];

  dayCtrl = new FormControl('', [Validators.required]);
  subjectCtrl = new FormControl('', [Validators.required]);

  constructor(private subjects: SubjectsService, private parameter: ParameterService, private teach: TeachService) {
    this.subjectCtrl.valueChanges
      .subscribe((selectedValue) => {
        this.getTeachers(selectedValue);
      })
  }

  ngOnInit(): void {
    this.getList();
    this.getDays();
  }

  getList() {
    this.subjects.getSubjects()
      .subscribe(response => {
        let data = JSON.parse(JSON.stringify(response));
        if (data.status) {
          this.SubjectsList = data.data;
          console.log(this.SubjectsList);
        }
      });
  }

  getDays() {
    this.parameter.getParameter('day')
      .subscribe(response => {
        let data = JSON.parse(JSON.stringify(response));
        console.log(data);
        if (data.status) {
          this.days = data.data;
        }
      });
  }

  getTeachers(subjects_id: Number = NaN) {
    this.teach.getTeach(0, subjects_id)
      .subscribe(response => {
        let data = JSON.parse(JSON.stringify(response));
        if (data.status) {
          console.log(data.data)
          this.TeachList = data.data;
        }
      });
  }
}
