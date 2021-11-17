import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

//services
import { SubjectsService } from 'src/app/services/subjects.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  SubjectsList!: any[];

  nameCtrl = new FormControl('', [Validators.required]);
  constructor(private subjects: SubjectsService) {
    this.nameCtrl.valueChanges
      .pipe(debounceTime(500))
      .subscribe(value => console.log(value))
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
          console.log(this.SubjectsList);
        }
      });
  }

  addSubject(event: Event) {
    event.preventDefault();
    this.subjects.createSubjects(this.nameCtrl.value)
      .subscribe(response => {
        let data = JSON.parse(JSON.stringify(response));
        if (data.status) {
          console.log(data);
          this.nameCtrl.reset();
          this.getList();
        }
      });
  }

  editSubject(event: Event, id: Number) {
    event.preventDefault();
    let element = document.getElementById('name'+id);
    console.log(element);
    return
    this.subjects.updateSubjects(id, this.nameCtrl.value)
      .subscribe(response => {
        let data = JSON.parse(JSON.stringify(response));
        console.log('data',data);
        if (data.status) {
          console.log('updated',data);
        }
      });
  }

  destrtoySubject(event: Event, id: Number) {
    event.preventDefault();
    this.subjects.deleteSubjects(id)
      .subscribe(response => {
        let data = JSON.parse(JSON.stringify(response));
        if (data.status) {
          console.log(data);
          this.getList();
        }
      });
  }

}
