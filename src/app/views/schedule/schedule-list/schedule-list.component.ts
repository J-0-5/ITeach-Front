import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

//services
import { ScheduleService } from 'src/app/services/schedule.service';
import { ParameterService } from 'src/app/services/parameter.service';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.css']
})
export class ScheduleListComponent implements OnInit {
  scheduleList!: any[];
  days !: any[];
  page: number = 0;

  dayCtrl = new FormControl('', [Validators.required]);

  constructor(private schedule: ScheduleService, private parameter: ParameterService) {
    this.dayCtrl.valueChanges
      .subscribe((selectedValue) => {
        console.log(selectedValue);
        this.getList();
      })
  }

  ngOnInit(): void {
    this.getList();
    this.getDays();
  }

  getList() {
    this.schedule.getSchedules(0, this.dayCtrl.value)
      .subscribe(response => {
        let data = JSON.parse(JSON.stringify(response));
        if (data.status) {
          console.log(data.data)
          this.scheduleList = data.data;
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

  setPage(param: number) {
    if (param < 0 && this.page === 0) { return; }
    this.page += param;
  }

}
