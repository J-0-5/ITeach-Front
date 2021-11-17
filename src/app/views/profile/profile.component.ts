import { Component, OnInit } from '@angular/core';

//services
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  first_name!: String;
  second_name!: String;
  first_last_name!: String;
  second_last_name!: String;
  photo_url!: String;
  charge!: String;

  constructor(private profile: ProfileService) { }

  ngAfterViewInit() {
    this.profile.getUserInfo(0)
      .subscribe(response => {
        let data = JSON.parse(JSON.stringify(response));
        if (data.status) {
          this.first_name = data.data.first_name;
          this.second_name = data.data.second_name;
          this.first_last_name = data.data.first_last_name;
          this.second_last_name = data.data.second_last_name;
          this.photo_url = data.data.photo_url;
          this.charge = data.data.role.name;
          console.log(data.data);
        }
      });
  }

  ngOnInit(): void {

  }

}
