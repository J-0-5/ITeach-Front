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
  page: number = 0;

  nameCtrl = new FormControl('', [Validators.required]);
  constructor(private subjects: SubjectsService) {
    this.nameCtrl.valueChanges
      .pipe(debounceTime(500))
      .subscribe(value => console.log(value))
  }

  ngOnInit(): void {
    this.getList();
  }

  setPage(param: number) {
    if (param < 0 && this.page === 0) { return; }
    this.page += param;
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
          this.nameCtrl.reset();
          this.getList();
        }
      });
  }

  editSubject(event: Event, item: any) {
    event.preventDefault();
    this.subjects.updateSubjects(item.id, item.name)
      .subscribe(response => {
        let data = JSON.parse(JSON.stringify(response));
        if (data.status) {
          this.getList();
        }
        alert(data.message);
      });
  }

  destrtoySubject(event: Event, id: Number) {
    event.preventDefault();
    this.subjects.deleteSubjects(id)
      .subscribe(response => {
        let data = JSON.parse(JSON.stringify(response));
        if (data.status) {
          this.getList();
        }
      });
  }

}
