import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

//services
import { SubjectsService } from 'src/app/services/subjects.service';
import { TeachService } from 'src/app/services/teach.service';

@Component({
  selector: 'app-my-subjects',
  templateUrl: './my-subjects.component.html',
  styleUrls: ['./my-subjects.component.css']
})
export class MySubjectsComponent implements OnInit {
  SubjectsList!: any[];
  TeachList!: any[];

  constructor(private subjects: SubjectsService, private teach: TeachService) { }

  ngOnInit(): void {
    this.getList();
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );

      if (event.container.id == 'cdk-drop-list-0') {
        console.log('delete', JSON.parse(JSON.stringify(event.container.data[event.currentIndex])).name);
        let id = JSON.parse(JSON.stringify(event.container.data[event.currentIndex])).subjects_id;
        this.remove(id);
      }
      if (event.container.id == 'cdk-drop-list-1') {
        console.log('add', JSON.parse(JSON.stringify(event.container.data[event.currentIndex])).name);
        let id = JSON.parse(JSON.stringify(event.container.data[event.currentIndex])).id;
        this.assign(id);
      }
    }
  }

  getList() {
    this.subjects.getSubjects(1)
      .subscribe(response => {
        let data = JSON.parse(JSON.stringify(response));
        if (data.status) {
          this.SubjectsList = data.data;
        }
      });
    this.teach.getSubjects(0)
      .subscribe(response => {
        let data = JSON.parse(JSON.stringify(response));
        if (data.status) {
          this.TeachList = data.data;
        }
      });
  }
  assign(id: Number) {
    this.teach.assignSubjects(0, id)
      .subscribe(response => {
        let data = JSON.parse(JSON.stringify(response));
        if (data.status) {
          this.getList();
        }
      });
  }

  remove(id: Number) {
    this.teach.deleteSubjects(0, id)
      .subscribe(response => {
        let data = JSON.parse(JSON.stringify(response));
        if (data.status) {
          this.getList();
        }
      });
  }

}
