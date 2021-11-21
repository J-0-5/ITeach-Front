import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

//services
import { ParameterService } from 'src/app/services/parameter.service';
import { ScheduleService } from 'src/app/services/schedule.service';

@Component({
  selector: 'app-create-schedule',
  templateUrl: './create-schedule.component.html',
  styleUrls: ['./create-schedule.component.css']
})
export class CreateScheduleComponent implements OnInit {
  days!: any[];
  campus!: any[];

  dayCtrl = new FormControl('', [Validators.required]);
  campusCtrl = new FormControl('', [Validators.required]);
  startCtrl = new FormControl('', [Validators.required]);
  finalCtrl = new FormControl('', [Validators.required]);

  constructor(private parameter: ParameterService, private schedule: ScheduleService) { }

  ngOnInit(): void {
    this.getDays('day');
    this.getDays('campus');
  }

  getDays(name: String) {
    this.parameter.getParameter(name)
      .subscribe(response => {
        let data = JSON.parse(JSON.stringify(response));
        console.log(data)
        if (data.status) {
          name == 'day' && (this.days = data.data);
          name == 'campus' && (this.campus = data.data);
        }
      });
  }

  addSchedule(event: Event) {
    event.preventDefault();
    this.schedule.createSchedule(
      0,
      this.dayCtrl.value,
      this.campusCtrl.value,
      this.startCtrl.value,
      this.finalCtrl.value,
    )
      .subscribe(response => {
        let data = JSON.parse(JSON.stringify(response));
        console.log(data)
        alert(data.message)
        if (data.status) {
          this.dayCtrl.reset();
          this.campusCtrl.reset();
          this.startCtrl.reset();
          this.finalCtrl.reset();
        }
      });
  }

}
